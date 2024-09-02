let temaAtual = 'light'
function trocarTema() {
    const body = document.body;
    if (temaAtual === 'light') {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        temaAtual = 'dark';
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        temaAtual = 'light';
    }
}
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const statusElement = document.getElementById('status');
    statusElement.textContent = 'Enviando...';
    const formData = new FormData(event.target);
    fetch('/submit', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        statusElement.textContent = 'Mensagem enviada com sucesso!';
    })
    .catch(error => {
        console.error('Erro:', error);
        statusElement.textContent = 'Erro ao enviar a mensagem.';
    });
});