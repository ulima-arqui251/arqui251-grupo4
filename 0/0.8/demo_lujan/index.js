const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Simulación de base de datos
let users = [
    { id: 1, name: 'Alice', email: 'alice@example.com', age: 28, role: 'admin' },
    { id: 2, name: 'Bob', email: 'bob@example.com', age: 34, role: 'user' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', age: 25, role: 'user' },
    { id: 4, name: 'Diana', email: 'diana@example.com', age: 30, role: 'moderator' },
    { id: 5, name: 'Eve', email: 'eve@example.com', age: 22, role: 'user' },
    { id: 6, name: 'Frank', email: 'frank@example.com', age: 40, role: 'admin' },
];

let tokens = ['123456']; // Token de prueba

// Función de validación
function validateUser(data) {
    const { name, email, age, role } = data;
    if (!name || !email || !age || !role) return false;
    if (typeof name !== 'string' || typeof email !== 'string' || typeof role !== 'string') return false;
    if (typeof age !== 'number' || age <= 0) return false;
    return true;
}

// Login simulado
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email === 'frank@example.com' && password === 'admin123') {
        return res.json({ token: '123456' });
    }
    res.status(401).json({ message: 'Credenciales inválidas' });
});

// Middleware de autenticación
function authMiddleware(req, res, next) {
    const token = req.headers['authorization'];
    if (tokens.includes(token)) {
        next();
    } else {
        res.status(401).json({ message: 'No autorizado' });
    }
}

// Rutas protegidas
app.get('/users', authMiddleware, (req, res) => {
    res.json(users);
});

app.post('/users', authMiddleware, (req, res) => {
    try {
        if (!validateUser(req.body)) {
            return res.status(400).json({ message: 'Datos de usuario inválidos' });
        }

        const newUser = { id: users.length + 1, ...req.body };
        users.push(newUser);
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error en POST /users:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

app.put('/users/:id', authMiddleware, (req, res) => {
    try {
        const id = parseInt(req.params.id);
        if (!validateUser(req.body)) {
            return res.status(400).json({ message: 'Datos de usuario inválidos' });
        }

        let found = false;
        users = users.map(u => {
            if (u.id === id) {
                found = true;
                return { ...u, ...req.body };
            }
            return u;
        });

        if (found) {
            res.json({ message: 'Usuario actualizado' });
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        console.error('Error en PUT /users:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

app.patch('/users/:id', authMiddleware, (req, res) => {
    try {
        const id = parseInt(req.params.id);
        let found = false;
        users = users.map(u => {
            if (u.id === id) {
                found = true;
                return { ...u, ...req.body };
            }
            return u;
        });

        if (found) {
            res.json({ message: 'Usuario parcialmente actualizado' });
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        console.error('Error en PATCH /users:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

app.delete('/users/:id', authMiddleware, (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const originalLength = users.length;
        users = users.filter(u => u.id !== id);

        if (users.length < originalLength) {
            res.json({ message: 'Usuario eliminado' });
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        console.error('Error en DELETE /users:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
});

app.options('/users', (req, res) => {
    res.set('Allow', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
    res.sendStatus(200);
});

// Ruta no encontrada
app.use((req, res) => {
    res.status(404).json({ message: 'Ruta no encontrada' });
});

// Manejo global de errores
app.use((err, req, res, next) => {
    console.error('Error global:', err);
    res.status(500).json({ message: 'Error inesperado del servidor' });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
