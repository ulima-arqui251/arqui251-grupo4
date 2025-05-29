import fs from 'fs';
import crypto from 'crypto';


const privateKey = fs.readFileSync(process.env.RSA_PRIVATE_KEY, 'utf8');

function decryptRSA(encryptedText) {
    const buffer = Buffer.from(encryptedText, 'base64');
    const decrypted = crypto.privateDecrypt(privateKey, buffer);
    return decrypted.toString('utf8');
}

export default decryptRSA;