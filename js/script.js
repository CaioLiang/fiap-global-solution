document.addEventListener('DOMContentLoaded', function () {
    // redirecionamento da página de login para o dashboard por js
    var loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            console.log('Login form submitted');
            // lógica adicional, como validação de formulário
            window.location.href = './dashboard.html';
        });
    } else {
        console.log('Login form not found');
    }

    // redirecionamento da página de cadastro para o dashboard por js
    var cadastroForm = document.getElementById('cadastroForm');
    if (cadastroForm) {
        cadastroForm.addEventListener('submit', function (event) {
            event.preventDefault();
            console.log('Cadastro form submitted');
            // lógica adicional, como validação de formulário
            window.location.href = './dashboard.html';
        });
    } else {
        console.log('Cadastro form not found');
    }
});
