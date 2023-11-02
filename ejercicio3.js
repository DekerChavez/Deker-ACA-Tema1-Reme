function ejercico3(lados) {
    
    let suma = 0;

    for(var i = 0; i < calfArray.length; i++){
        suma += calfArray[i];
    }

    p = suma/6
    
    let lados = [lado1, lado2, lado3];

    s = (lado1 + lado + lado3) / 2;

    area = Math.sqrt(s * (s - lado1) * (s - lado2) * (s - lado3))

    return area.toFixed(2)
}
console.log(ejercico3(5, 5, 5));