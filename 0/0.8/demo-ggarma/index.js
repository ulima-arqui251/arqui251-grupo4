import 'dotenv/config'; // ✅ Esto carga dotenv globalmente al inicio
import app from './app.js'

async function main() {
    try {
        const init = process.argv[2];
        console.log({ init })

        const port = process.env.PORT || 3000

        app.listen(port)

        console.log('app iniciada en puerto ' + port)
    }
    catch (err) {
        console.error('Connection error: ', err)
    }
}

main()