import 'dotenv/config';
import fetch from 'node-fetch';

const email = process.env.MULTILOGIN_EMAIL;
const password = process.env.MULTILOGIN_PASSWORD;
const baseUrl = process.env.MULTILOGIN_BASE_URL || 'https://api.multilogin.com';

if (!email || !password) {
  console.error('Error: MULTILOGIN_EMAIL and MULTILOGIN_PASSWORD must be set in .env file');
  console.log('\nCopy .env.example to .env and fill in your credentials:');
  console.log('  cp .env.example .env');
  console.log('  # Edit .env with your Multilogin credentials');
  process.exit(1);
}

async function login() {
  console.log('Logging in to Multilogin X...\n');
  
  try {
    const response = await fetch(`${baseUrl}/user/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    
    console.log('Response:', JSON.stringify(data, null, 2));
    
    if (data.status?.error_code === 'OK' && data.data?.token) {
      console.log('\n✅ Login successful!');
      console.log('\nAdd this to your .env file:');
      console.log(`MULTILOGIN_TOKEN=${data.data.token}`);
      console.log('\nToken expires in: 30 minutes (regular) or longer (automation token)');
    } else {
      console.log('\n❌ Login failed:', data.status?.message || 'Unknown error');
      process.exit(1);
    }
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

login();
