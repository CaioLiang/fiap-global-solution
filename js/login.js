// Validação do formulário de login
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var login = document.getElementById('login').value.trim();
    var senha = document.getElementById('senha').value.trim();
    var errorMessage = document.getElementById('login-error-message');
    errorMessage.textContent = '';

    if (!login || !senha) {
        errorMessage.textContent = 'Por favor, preencha todos os campos.';
        return;
    }

    // Redirecionar para o dashboard
    window.location.href = '../dashboard.html';
});