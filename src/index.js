module.exports = function zeros(expression) {
    var dva = 0;
    var pyat = 0;
    var str = [];

    str = expression.split('*');
    for (var i = 0; i < str.length; i++){
        var fact;
        var ciferka = [];
        var counter = 0;
        fact = str[i];

        for (var j = 0; j < fact.length; j++){
            if (fact[j] == '!'){
                counter++;
            } else {
                ciferka[j] = fact[j];
            }
        }

        var lol = 0;
        lol = ciferka.join('');

        if (counter == 1){
            while (lol > 1){
                var looool = lol;
                while (looool % 2 == 0){
                    dva++
                    looool /= 2;
                }
                while (looool % 5 == 0){
                    pyat++
                    looool /= 5;
                }
                lol--;
            }
        } else if (counter == 2){
            while (lol > 1){
                var looool = lol;
                while (looool % 2 == 0){
                    dva++
                    looool /= 2;
                }
                while (looool % 5 == 0){
                    pyat++
                    looool /= 5;
                }
                lol -= 2;
            }
        }
        
}
if (pyat < dva){
    return pyat;
} else {
    return dva;
}
}
