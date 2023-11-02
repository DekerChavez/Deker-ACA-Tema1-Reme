
function ejercicio4(sueldo) {
    
    nuevoSueldo = 0;
    
    if (sueldo < 1000) {
        porcentaje = 0.15;
        nuevoSueldo = sueldo * (1 + porcentaje);
    } else { 
       porcentaje = 0.12;
       nuevoSueldo = sueldo * (1 + porcentaje);
    }
      
return nuevoSueldo.toFixed(2);
}

// console.log(ejercicio4(12620));