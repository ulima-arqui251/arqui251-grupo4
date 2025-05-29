const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Simulación de base de datos en memoria con más datos genéricos
let users = [
    { id: 1, name: 'Alice', email: 'alice@example.com', age: 28, role: 'admin' },
    { id: 2, name: 'Bob', email: 'bob@example.com', age: 34, role: 'user' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', age: 25, role: 'user' },
    { id: 4, name: 'Diana', email: 'diana@example.com', age: 30, role: 'moderator' },
    { id: 5, name: 'Eve', email: 'eve@example.com', age: 22, role: 'user' },
    { id: 6, name: 'Frank', email: 'frank@example.com', age: 40, role: 'admin' },
];

let tokens = ['123456']; // Token de prueba

// Login simulado
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email === 'frank@example.com' && password === 'admin123') {
        return res.json({ token: '123456' });
    }
    res.status(401).json({ message: 'Credenciales inválidas' });
});

// Middleware para validar token
function authMiddleware(req, res, next) {
    const token = req.headers['authorization'];
    if (tokens.includes(token)) {
        next();
    } else {
        res.status(401).json({ message: 'No autorizado' });
    }
}

// Rutas CRUD protegidas
app.get('/users', authMiddleware, (req, res) => res.json(users));

app.post('/users', authMiddleware, (req, res) => {
    const user = { id: users.length + 1, ...req.body };
    users.push(user);
    res.status(201).json(user);
});

app.put('/users/:id', authMiddleware, (req, res) => {
    const id = parseInt(req.params.id);
    let updated = false;
    users = users.map(u => {
        if (u.id === id) {
            updated = true;
            return { ...u, ...req.body };
        }
        return u;
    });
    if (updated) {
        res.json({ message: 'Usuario actualizado' });
    } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
    }
});

app.patch('/users/:id', authMiddleware, (req, res) => {
    const id = parseInt(req.params.id);
    let updated = false;
    users = users.map(u => {
        if (u.id === id) {
            updated = true;
            return { ...u, ...req.body };
        }
        return u;
    });
    if (updated) {
        res.json({ message: 'Usuario parcialmente actualizado' });
    } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
    }
});

app.delete('/users/:id', authMiddleware, (req, res) => {
    const id = parseInt(req.params.id);
    const originalLength = users.length;
    users = users.filter(u => u.id !== id);
    if (users.length < originalLength) {
        res.json({ message: 'Usuario eliminado' });
    } else {
        res.status(404).json({ message: 'Usuario no encontrado' });
    }
});

app.options('/users', (req, res) => {
    res.set('Allow', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
