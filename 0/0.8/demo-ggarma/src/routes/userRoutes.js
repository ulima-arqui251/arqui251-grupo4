import express from 'express'
import userController from '../controllers/userController.js'
import aesEncryptMiddleware from '../middleware/aesMiddleware.js'
import rsaEncryptMiddleware from '../middleware/rsaMiddleware.js'

const { RSACreateUser, RSAgetUser, AESCreateUser, AESgetUser } = userController
const router = express.Router()

router.get("/aes/:id", AESgetUser)
router.get("/rsa/:id", RSAgetUser)
router.post("/aes", aesEncryptMiddleware, AESCreateUser)
router.post("/rsa", rsaEncryptMiddleware, RSACreateUser)

export default router;