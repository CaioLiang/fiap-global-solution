// redirecionamento da página de cadastro para o dashboard por js
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // adicionar qualquer lógica adicional, como validação de formulário
    window.location.href = 'dashboard.html';
});
