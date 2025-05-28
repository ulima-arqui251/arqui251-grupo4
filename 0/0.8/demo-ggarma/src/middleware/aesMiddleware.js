import encryptAES from '../utils/aesUtils/encrypt.js';

function aesEncryptMiddleware(req, res, next) {
    if (req.body && req.body.password) {
        const { encryptedData, iv } = encryptAES(req.body.password);
        req.body.password = encryptedData;
        req.body.passwordIv = iv;
    }

    if (req.body && req.body.dni) {
        const encryptDni = encryptAES(req.body.dni);
        req.body.dni = encryptDni.encryptedData;
        req.body.dniIv = encryptDni.iv;
    }

    console.log("Encrypted DNI:", req.body.password);
    console.log("DNI IV:", req.body.passwordIv);
    next();
}

export default aesEncryptMiddleware;