
// Validação do formulário de cadastro
document.getElementById('cadastroForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var nome = document.getElementById('nome').value.trim();
    var cpf = document.getElementById('cpf').value.trim();
    var email = document.getElementById('email').value.trim();
    var senha = document.getElementById('senha').value.trim();
    var confirmarSenha = document.getElementById('confirmar-senha').value.trim();
    var errorMessage = document.getElementById('cadastro-error-message');
    errorMessage.textContent = '';

    if (!nome || !cpf || !email || !senha || !confirmarSenha) {
        errorMessage.textContent = 'Por favor, preencha todos os campos.';
        return;
    }

    if (!validateEmail(email)) {
        errorMessage.textContent = 'Por favor, insira um email válido.';
        return;
    }

    if (senha !== confirmarSenha) {
        errorMessage.textContent = 'As senhas não coincidem.';
        return;
    }

    // Redirecionar para o dashboard
    window.location.href = '../dashboard.html';
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
