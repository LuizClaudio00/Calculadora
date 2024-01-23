$(document).ready(function () {
    var expression = '';

    $('.clear').click(function () {
        $('.input').text("");
        expression = '';
        result = '';
        $('h2').text("Resultado = " + result);
    })

    $('.equal').click(function () {
        expression = $('input').text();
        try {
            var result = eval(expression);
            $('h2').text("Resultado = " + result);
        } catch (error) {
            alert('Expressao invalida');
        }
    });

    $('.multiply, .divide, .minus, .plus').click(function () {
        expression += $(this).text();
        $('input').text(expression);
    });

    $('.zero, .one, .two, .there, .four, .five, .six, .seven, .eight, .nine, .decimal').click(function () {
        expression += $(this).text();
        $('.input').text(expression);
    });
});