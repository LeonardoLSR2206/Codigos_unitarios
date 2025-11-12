let calcular = require('./app');

describe("Funções de cálculo.", function () {
    test('Calcular a soma entre dois números', function(){
        expect(calcular.somar(5,15)).toBe(20)
    })

    test('Calcular a média entre dois números', function(){
        expect(calcular.media(20,10)).toBe(15)
    })

    test('Calcular a multiplicação entre dois números', function(){
        expect(calcular.multiplica(4,10)).toBe(40)
    })
})