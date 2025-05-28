import encryptRSA from '../utils/rsaUtils/encrypt.js';

function rsaEncryptMiddleware(req, res, next) {
    if (req.body && req.body.password) {
        req.body.password = encryptRSA(req.body.password);
    }

    if (req.body && req.body.dni) {
        req.body.dni = encryptRSA(req.body.dni);
    }
    next();
}

export default rsaEncryptMiddleware;