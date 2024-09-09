function runApp() {
    $('#wrap>nav').hide();
    $('#fumaca').hide();
    $('#toggleMenu').click(controlaMenu)
}

function controlaMenu() {

    if ($('#wrap>nav').is(':visible')) {
        $('#wrap>nav').hide('fast');
        $('#fumaca').hide('fast');
        $('body').css('overflow', 'auto');
    } else {
        $('#wrap>nav').show('fast');
        $('#fumaca').show('fast');
        $('body').css('overflow', 'hidden');
    }

    return false;
}



$(document).ready(runApp);