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
            for (var n = 1; n <= lol; n++){
                var kek = n;
                while (kek % 2 == 0){
                    dva++;
                    kek /= 2;
                }
                while (kek % 5 == 0){
                    pyat++;
                    kek /= 5;
                }
                
                }
            }
                
        }
            
        if (counter == 2){
            if ((lol % 2) == 0){
                for (var m = 2; m <= lol; m += 2){
                    var kek1 = m;
                    while (kek1 % 2 == 0){
                        dva++;
                        kek1 /= 2;
                    }
                    while (kek1 % 5 == 0){
                        pyat++;
                        kek1 /= 5;
                    }
                }
                }
            } else {
                for (var l = 1; l <= lol; l += 2){
                    var kek2
                    while (kek2 % 5 == 0){
                        pyat++;
                        kek2 /= 5;
                    }
                    }
            
            
    
}
if (pyat < dva){
    return pyat;
} else {
    return dva;
}
}
