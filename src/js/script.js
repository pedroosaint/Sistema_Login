const nome = document.getElementById('nome');
const senha = document.getElementById('senha');
const form = document.getElementById('login-form');
const errorMessage = document.getElementById('mensagem');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nomeValue = nome.value.trim();
    const senhaValue = senha.value.trim();

    if (nomeValue === '' || senhaValue === '') {
        errorMessage.textContent = 'Por favor, preencha todos os campos.';
        errorMessage.style.color = 'red';
    }

    else if (!nomeValue.includes("@gmail.com")) {
        errorMessage.textContent = 'Por favor, insira um e-mail válido.';   
        errorMessage.style.color = 'red';
    }  

    else if (senhaValue.length < 6) {
        errorMessage.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        errorMessage.style.color = 'red';
    }

    else {
        errorMessage.textContent = 'Login bem-sucedido!';
        errorMessage.style.color = 'green';
    }
}); 
