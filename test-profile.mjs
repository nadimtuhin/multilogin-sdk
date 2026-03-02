import 'dotenv/config';
import { MultiloginClient } from './dist/index.js';

const token = process.env.MULTILOGIN_TOKEN;
const baseUrl = process.env.MULTILOGIN_BASE_URL || 'https://api.multilogin.com';

if (!token) {
  console.error('Error: MULTILOGIN_TOKEN must be set in .env');
  console.log('Run: bun run login.mjs to get token');
  process.exit(1);
}

async function main() {
  console.log('🧪 Multilogin SDK Profile Test');
  console.log('============================\n');

  const client = new MultiloginClient({ baseUrl, token });

  try {
    // 1. Get workspaces
    console.log('1️⃣  Getting workspaces...');
    const workspacesResult = await client.profileAccess.getWorkspaces();
    console.log('   Response:', JSON.stringify(workspacesResult.status, null, 2));
    
    if (!workspacesResult.success) {
      console.error('❌ Failed to get workspaces:', workspacesResult.error?.message);
      process.exit(1);
    }
    
    const workspaces = workspacesResult.data;
    console.log('   ✅ Got', workspaces?.length || 0, 'workspaces');
    
    if (!workspaces || workspaces.length === 0) {
      console.error('❌ No workspaces found');
      process.exit(1);
    }

    const workspaceId = workspaces[0].id;
    console.log('   📁 Using workspace:', workspaces[0].name, '(' + workspaceId + ')');

    // 2. Get profiles
    console.log('\n2️⃣  Getting profiles...');
    const profilesResult = await client.profiles.list();
    console.log('   Response:', JSON.stringify(profilesResult.status, null, 2));
    
    if (!profilesResult.success) {
      console.error('❌ Failed to get profiles:', profilesResult.error?.message);
      process.exit(1);
    }
    
    const profiles = profilesResult.data;
    console.log('   ✅ Got', profiles?.length || 0, 'profiles');
    
    if (!profiles || profiles.length === 0) {
      console.error('❌ No profiles found. Create one in Multilogin X dashboard first.');
      process.exit(1);
    }

    // Use first profile
    const profileId = profiles[0].id;
    const folderId = profiles[0].folder_id || 'default';
    console.log('   📋 Using profile:', profiles[0].name, '(' + profileId + ')');

    // 3. Start profile
    console.log('\n3️⃣  Starting profile...');
    const startResult = await client.launcher.startBrowserProfile(folderId, profileId, {
      automationType: 'playwright',
      headlessMode: false,
    });
    console.log('   Response:', JSON.stringify(startResult.status, null, 2));
    
    if (!startResult.success) {
      console.error('❌ Failed to start profile:', startResult.error?.message);
      process.exit(1);
    }
    
    console.log('   ✅ Profile started!');
    console.log('   🌐 Browser should open');

    // 4. Wait 10 seconds
    console.log('\n4️⃣  Waiting 10 seconds...');
    await new Promise(resolve => setTimeout(resolve, 10000));
    console.log('   ⏰ Done waiting');

    // 5. Stop profile
    console.log('\n5️⃣  Stopping profile...');
    const stopResult = await client.launcher.stopBrowserProfile(profileId);
    console.log('   Response:', JSON.stringify(stopResult.status, null, 2));
    
    if (!stopResult.success) {
      console.error('❌ Failed to stop profile:', stopResult.error?.message);
      process.exit(1);
    }
    
    console.log('   ✅ Profile stopped!');

    console.log('\n============================');
    console.log('✅ All tests passed!');

  } catch (error) {
    console.error('\n❌ Test failed:', error.message);
    process.exit(1);
  }
}

main();
