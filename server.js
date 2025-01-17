const express = require('express');
const app = express();
const port = 3000;

// Dados de usuário e senha (em um sistema real, use um banco de dados)
const users = [
    { username: "admin", password: "1234" },
    { username: "funcionario", password: "senha123" }
];

app.use(express.json());

// Rota para verificar usuário e senha
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.json({ success: true, message: "Login bem-sucedido!" });
    } else {
        res.status(401).json({ success: false, message: "Usuário ou senha incorretos!" });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});