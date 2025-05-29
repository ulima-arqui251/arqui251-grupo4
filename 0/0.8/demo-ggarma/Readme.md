# Creación de Claves de Cifrado

## Generar par de claves para cifrado RSA

Se utilizaron los siguientes comandos:

```bash
openssl genrsa -out private.pem 2048
openssl rsa -in private.pem -pubout -out public.pem
```

## Generador de clave para AES

Se utilizó el siguiente script en javascript:

```js
import crypto from 'crypto'
const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32); // clave de 256 bits
```
