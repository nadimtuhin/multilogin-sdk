import 'dotenv/config';
import { MultiloginClient } from './src/index.js';

const token = process.env.MULTILOGIN_TOKEN;
const workspaceId = process.env.MULTILOGIN_WORKSPACE_ID;

if (!token) {
  console.error('Error: MULTILOGIN_TOKEN must be set in .env');
  console.log('Run: bun run login.mjs to get a token');
  process.exit(1);
}

async function main() {
  console.log('🧪 Multilogin Profile Test');
  console.log('========================\n');

  // Create client
  const client = new MultiloginClient({
    token,
    baseUrl: 'https://api.multilogin.com',
  });

  try {
    // 1. Get workspaces
    console.log('1️⃣ Getting workspaces...');
    const workspacesResult = await client.profileAccess.getWorkspaces();
    
    if (!workspacesResult.success) {
      console.error('❌ Failed to get workspaces:', workspacesResult.error?.message);
      process.exit(1);
    }
    
    const workspaces = workspacesResult.data;
    console.log(`   ✅ Found ${workspaces.length} workspace(s)`);
    
    // Use provided workspace ID or first workspace
    const wsId = workspaceId || (workspaces[0]?.id || workspaces[0]?.workspaceId);
    console.log(`   📁 Using workspace: ${wsId}\n`);

    // 2. Get profiles
    console.log('2️⃣ Getting profiles...');
    const profilesResult = await client.profiles.list();
    
    if (!profilesResult.success) {
      console.error('❌ Failed to get profiles:', profilesResult.error?.message);
      process.exit(1);
    }
    
    const profiles = profilesResult.data || [];
    console.log(`   ✅ Found ${profiles.length} profile(s)`);
    
    if (profiles.length === 0) {
      console.log('   ⚠️  No profiles found. Create one in Multilogin app first.');
      process.exit(1);
    }
    
    // Use first profile
    const profile = profiles[0];
    console.log(`   📋 Using profile: ${profile.name} (${profile.id || profile.profileId})\n`);
    
    const profileId = profile.id || profile.profileId;
    const folderId = profile.folderId || 'default';

    // 3. Start profile
    console.log('3️⃣ Starting profile...');
    const startResult = await client.launcher.startBrowserProfile(
      folderId,
      profileId,
      { automationType: 'selenium' }
    );
    
    console.log('   Response:', JSON.stringify(startResult.status, null, 2));
    
    if (!startResult.success) {
      console.error('❌ Failed to start profile:', startResult.error?.message);
      process.exit(1);
    }
    
    console.log('   ✅ Profile started!\n');

    // 4. Wait 10 seconds
    console.log('4️⃣ Waiting 10 seconds...');
    await new Promise(resolve => setTimeout(resolve, 10000));
    console.log('   ✅ Wait complete!\n');

    // 5. Stop profile
    console.log('5️⃣ Stopping profile...');
    const stopResult = await client.launcher.stopBrowserProfile(profileId);
    
    console.log('   Response:', JSON.stringify(stopResult.status, null, 2));
    
    if (!stopResult.success) {
      console.error('❌ Failed to stop profile:', stopResult.error?.message);
      process.exit(1);
    }
    
    console.log('   ✅ Profile stopped!\n');

    // 6. Check status
    console.log('6️⃣ Checking final status...');
    const statusResult = await client.launcher.getProfileStatus(profileId);
    console.log('   Status:', JSON.stringify(statusResult.status, null, 2));

    console.log('========================');
    console.log('✅ All tests passed!');

  } catch (error) {
    console.error('\n❌ Error:', error.message);
    process.exit(1);
  }
}

main();
