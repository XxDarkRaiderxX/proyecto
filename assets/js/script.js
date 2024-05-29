document.addEventListener('DOMContentLoaded', function() {

    let loginAttempts = 0;

    const form = document.querySelector('.login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username === 'usuario' && password === 'contraseña') { 
            
            window.location.href = 'index.html';
        } else {
            loginAttempts++;
            if (loginAttempts >= 3) {
                alert('Ha superado el máximo número de intentos de inicio de sesión.');
                
            } else {
                alert('Credenciales incorrectas. Intenta nuevamente.');
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {

    const registerForm = document.querySelector('.register-form');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        alert('Registro exitoso. Serás redirigido a la página principal.');
        window.location.href = 'index.html'; 
    });
});

document.addEventListener('DOMContentLoaded', function() {

    const resetForm = document.querySelector('.reset-form');

    resetForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        alert('Se ha enviado un correo electrónico con instrucciones para restablecer tu contraseña.');
        window.location.href = 'inicio_de_sesion.html'; 
    });
});