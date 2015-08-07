$.fn.konami = function (callback) {
    var code = ['ARROWUP', 'ARROWUP', 'ARROWDOWN', 'ARROWDOWN', 'ARROWLEFT', 'ARROWRIGHT', 'ARROWLEFT', 'ARROWRIGHT', 'B', 'A'];
    var position = 0;
    return $(this).on('keyup', function (e) {
        if (code[position++] == e.key.toUpperCase()) {
            if (position == code.length) {
                position = 0;
                callback(this, e);
            }
        } else {
            position = 0;
        }
    });
}
/*
$(document).konami(function (context, event) {
    alert('konami');
    console.log(context);
    console.log(event);
});
*/