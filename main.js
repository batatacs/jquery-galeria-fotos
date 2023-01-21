$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit',function(e) {
        e.preventDefault();
        const enderecoDaNovaImagen = $('#endereco-imagem-nova').val();
        const novoIten= $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagen}" />`).appendTo(novoIten);
        $(`
            < div class="overlay-imagem-link">
                <a href="${enderecoDaNovaImagen}" target="_blank" title="Ver imagem em tamnho real">
                    Ver imagem em tamnho real
                </a>
            </div>
        `).appendTo(novoIten);
        $(novoIten).appendTo('ul');
        $(novoIten).fadeIn();
        $('#endereco-imagem-nova').val('');
    })
})