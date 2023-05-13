import * as dotenv from 'dotenv';
dotenv.config();

function hello() {
    const envValue = process.env.ENV_VALUE;
    if ((envValue ?? '') === '') {
        throw new Error('Error: reading .env file\'s value failed.');
    }
    console.log('Hello TypeScript in ts-node!', `\nThis is ${envValue}`);
}
hello();
