document.addEventListener('DOMContentLoaded', function () {
    // Função para cifrar o texto usando a cifra de César
    function cifrarTexto(texto, deslocamento) {
        return texto.split('').map(function (char) {
            if (char.match(/[a-z]/i)) {
                var code = char.charCodeAt(0);
                var base = code < 91 ? 65 : 97;
                return String.fromCharCode((code - base + deslocamento) % 26 + base);
            }
            return char;
        }).join('');
    }

    // Função para decifrar o texto usando a cifra de César
    function decifrarTexto(texto, deslocamento) {
        return cifrarTexto(texto, 26 - deslocamento); // Invertendo o deslocamento
    }

    // Capturando elementos do DOM
    var inputTexto = document.querySelector('input[type="text"]');
    var cardContainer = document.querySelector('.card-container');
    var cifrarButton = document.querySelector('.criptButton');
    var decifrarButton = document.querySelector('.descriptButton');

    // Adicionando um ouvinte de evento ao botão de cifragem
    cifrarButton.addEventListener('click', function () {
        var textoOriginal = inputTexto.value;
        var textoCifrado = cifrarTexto(textoOriginal, 3); // Use um deslocamento seguro

        // Exibindo o resultado na div card-container
        cardContainer.innerHTML = '<h1>Mensagem Cifrada</h1>';
        cardContainer.innerHTML += '<p>' + textoCifrado + '</p>';
    });

    // Adicionando um ouvinte de evento ao botão de decifragem
    decifrarButton.addEventListener('click', function () {
        var textoCifrado = inputTexto.value;
        var textoDecifrado = decifrarTexto(textoCifrado, 3);

        // Exibindo o resultado na div card-container
        cardContainer.innerHTML = '<h1>Mensagem Decifrada</h1>';
        cardContainer.innerHTML += '<p>' + textoDecifrado + '</p>';
    });
});