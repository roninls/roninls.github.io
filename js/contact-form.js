document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var templateParams = {
        from_name: document.getElementById('form-name').value,
        reply_to: document.getElementById('form-email').value,
        subject: document.getElementById('form-subject').value,
        message: document.getElementById('form-message').value
    };

    emailjs.send('service_6gica9b', 'template_lc0lx9k', templateParams)
        .then(function(response) {
            console.log('E-mail enviado com sucesso!', response);
            // Aqui você pode exibir uma mensagem de sucesso para o usuário
        }, function(error) {
            console.log('Erro ao enviar e-mail:', error);
            // Aqui você pode exibir uma mensagem de erro para o usuário
        });
});