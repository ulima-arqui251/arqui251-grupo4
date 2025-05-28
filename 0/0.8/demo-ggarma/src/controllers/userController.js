import decryptRSA from "../utils/rsaUtils/decrypt.js";
import decryptAES from "../utils/aesUtils/decrypt.js";
import userService from "../services/userService.js";

const { createUserAES, getUserByIdAES, createUserRSA, getUserByIdRSA } = userService;

async function RSACreateUser(req, res) {
    try {
        const { name, email, password, dni } = req.body;

        const id = await createUserRSA({ name, email, password, dni });

        res.status(201).json({ message: 'Usuario creado', id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear usuario' });
    }
}

async function RSAgetUser(req, res) {
    try {
        const user = await getUserByIdRSA(req.params.id);
        if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

        user.password = decryptRSA(user.password);
        user.dni = decryptRSA(user.dni);

        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener usuario' });
    }
}

async function AESCreateUser(req, res) {
    try {
        const { name, email, password, dni, dniIv, passwordIv } = req.body;

        const id = await createUserAES({ name, email, password, dni, dniIv, passwordIv });

        res.status(201).json({ message: 'Usuario creado', id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear usuario' });
    }
}

async function AESgetUser(req, res) {
    try {
        const user = await getUserByIdAES(req.params.id);
        if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
        console.log("Encrypted DNI:", user.password);
        console.log("DNI IV:", user.passwordIv);
        user.password = decryptAES(user.password, user.passwordIv);
        user.dni = decryptAES(user.dni, user.dniIv);

        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener usuario' });
    }
}

const userController = {
    RSACreateUser,
    RSAgetUser,
    AESCreateUser,
    AESgetUser
};
export default userController;