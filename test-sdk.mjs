import 'dotenv/config';
import { MultiloginClient } from './src/MultiloginClient.js';

// Get credentials from environment variables
const email = process.env.MULTILOGIN_EMAIL;
const password = process.env.MULTILOGIN_PASSWORD;
const baseUrl = process.env.MULTILOGIN_BASE_URL || 'https://api.multilogin.com';

if (!email || !password) {
  console.error('Error: MULTILOGIN_EMAIL and MULTILOGIN_PASSWORD must be set in .env file');
  console.log('\nCopy .env.example to .env and fill in your credentials:');
  console.log('  cp .env.example .env');
  process.exit(1);
}

async function main() {
  console.log('Multilogin X SDK Test');
  console.log('====================\n');

  // Create client instance
  const client = new MultiloginClient(baseUrl, email, password);

  try {
    // Test 1: Sign in to get token
    console.log('1. Testing user sign-in...');
    const signInResult = await client.profileAccessManagement.userSignIn({
      email,
      password
    });
    console.log('   ✓ Sign-in successful');
    console.log('   Response:', JSON.stringify(signInResult, null, 2));

    // Test 2: Get workspaces
    console.log('\n2. Testing get workspaces...');
    const workspaces = await client.profileAccessManagement.userWorkspaces();
    console.log('   ✓ Got workspaces');
    console.log('   Response:', JSON.stringify(workspaces, null, 2));

    // Test 3: Get token list
    console.log('\n3. Testing get token list...');
    const tokens = await client.profileAccessManagement.userTokenList();
    console.log('   ✓ Got token list');
    console.log('   Response:', JSON.stringify(tokens, null, 2));

    console.log('\n====================');
    console.log('All tests passed! ✓');

  } catch (error) {
    console.error('\n✗ Test failed:', error.message);
    if (error.response) {
      console.error('Response:', error.response);
    }
    process.exit(1);
  }
}

main();
