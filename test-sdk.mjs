import 'dotenv/config';
import { MultiloginClient } from './src/MultiloginClient.js';

// Get credentials from environment variables
const token = process.env.MULTILOGIN_TOKEN;
const baseUrl = process.env.MULTILOGIN_BASE_URL || 'https://api.multilogin.com';

if (!token) {
  console.error('Error: MULTILOGIN_TOKEN must be set in .env file');
  console.log('\nCopy .env.example to .env and fill in your token:');
  console.log('  cp .env.example .env');
  console.log('\nNote: Get your token from Multilogin X dashboard or use their token API.');
  process.exit(1);
}

// Helper to check API response
function isSuccess(response) {
  return response?.status?.error_code === 'OK' || 
         response?.status?.http_code >= 200 && response?.status?.http_code < 300;
}

async function main() {
  console.log('Multilogin X SDK Test');
  console.log('====================\n');

  // Create client instance with token
  const client = new MultiloginClient(baseUrl, token);

  try {
    // Test 1: Get workspaces
    console.log('1. Testing get workspaces...');
    const workspaces = await client.profileAccessManagement.userWorkspaces();
    console.log('   Response:', JSON.stringify(workspaces, null, 2));
    
    if (!isSuccess(workspaces)) {
      console.log('   ✗ FAILED:', workspaces.status?.message || 'Unknown error');
      process.exit(1);
    }
    console.log('   ✓ Got workspaces successfully');

    // Test 2: Get token list
    console.log('\n2. Testing get token list...');
    const tokens = await client.profileAccessManagement.userTokenList();
    console.log('   Response:', JSON.stringify(tokens, null, 2));
    
    if (!isSuccess(tokens)) {
      console.log('   ✗ FAILED:', tokens.status?.message || 'Unknown error');
      process.exit(1);
    }
    console.log('   ✓ Got token list successfully');

    console.log('\n====================');
    console.log('All tests passed! ✓');

  } catch (error) {
    console.error('\n✗ Test failed:', error.message);
    process.exit(1);
  }
}

main();
