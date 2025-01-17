document.getElementById('employeeAccess').addEventListener('click', function() {
    // Solicita o usuário e senha
    const username = prompt("Usuário:");
    const password = prompt("Senha:");

    // Verificação simples de usuário e senha
    if (username === "admin" && password === "1234") {
        // Redireciona para a página do gerador de QR Code
        window.location.href = "qr-generator.html";
    } else {
        alert("Usuário ou senha incorretos!");
    }

    // Exibe o usuário e senha na área restrita (apenas para administradores)
    if (username === "admin" && password === "1234") {
        // Mostra a área restrita
        document.getElementById('adminInfo').style.display = 'block';

        // Preenche os campos com o usuário e senha
        document.getElementById('adminUsername').textContent = username;
        document.getElementById('adminPassword').textContent = password;
    }
});