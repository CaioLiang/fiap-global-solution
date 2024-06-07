document.addEventListener('DOMContentLoaded', function () {
    // redirecionamento da página de login para o dashboard por js
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault();
        // lógica adicional, como validação de formulário
        window.location.href = 'dashboard.html';
    });

    // redirecionamento da página de cadastro para o dashboard por js
    document.getElementById('cadastroForm').addEventListener('submit', function (event) {
        event.preventDefault();
        // lógica adicional, como validação de formulário
        window.location.href = 'dashboard.html';
    });
});
