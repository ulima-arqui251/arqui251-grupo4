import crypto from 'crypto';

const algorithm = process.env.AES_ALGORITHM;
const key = Buffer.from(process.env.AES_KEY_ID, 'hex'); // clave de 256 bits

function encryptAES(text) {
    const iv = crypto.randomBytes(16); // 128-bit IV
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return {
        encryptedData: encrypted,
        iv: iv.toString('hex')
    };

}

export default encryptAES;