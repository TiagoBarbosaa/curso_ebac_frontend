$(document).ready(function() {
    $('#formulario').submit(function(e) {
        e.preventDefault();
        const tarefa = $('#taskInput').val();
        if (tarefa.trim() !== '') {
            $('#lista').append('<li>' + tarefa + '</li>');
            $('#taskInput').val('');
        }
    });
    
    $('#lista').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
