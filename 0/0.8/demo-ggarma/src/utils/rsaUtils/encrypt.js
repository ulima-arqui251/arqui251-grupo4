import fs from 'fs';
import crypto from 'crypto';

const publicKey = fs.readFileSync(process.env.RSA_PUBLIC_KEY, 'utf8');

function encryptRSA(text) {
    const buffer = Buffer.from(text, 'utf8');
    const encrypted = crypto.publicEncrypt(publicKey, buffer);
    return encrypted.toString('base64');
}

export default encryptRSA;