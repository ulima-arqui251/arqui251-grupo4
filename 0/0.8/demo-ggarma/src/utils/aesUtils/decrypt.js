import crypto from 'crypto';

const algorithm = process.env.AES_ALGORITHM;
const key = Buffer.from(process.env.AES_KEY_ID, 'hex'); // clave de 256 bits

function decryptAES(encryptedData, ivHex) {
    const iv = Buffer.from(ivHex, 'hex');
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

export default decryptAES;