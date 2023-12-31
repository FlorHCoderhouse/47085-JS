let savedPIN = '5461';

function login() {
    let ingresar = false;
    let intentos = 3;
    for (let i = intentos; i > 0; i--) {
        let userPIN = prompt('Ingresá tu pin. Tenés ' + i + ' intentos.');
        if (userPIN === savedPIN) {
            alert('Ingreso exitoso. Bienvenido/a');
            ingresar = true;
            break;
        } else {
            alert('Error. Te quedan ' + (i - 1) + ' intentos.');
        }
    }

    return ingresar;
}

if (login()) {
    //"Accedemos" a la info de la cuenta
    let saldo = 200000;

    let opcion = prompt('Elegí una opción: \n1- Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná X para finalizar.');

    while (opcion != 'X' && opcion != 'x') {
        switch (opcion) {
            case '1':
                alert('Tu saldo es $ ' + saldo);
                break;
            case '2':
                let retiro = parseInt(prompt('Ingresa cantidad a retirar'));
                if (retiro <= saldo) {
                    saldo -= retiro;
                    //saldo = saldo-retiro;
                    alert('Retiro exitoso. Tu nuevo saldo es $ ' + saldo);
                } else {
                    alert('Fondos insuficientes');
                }

                break;
            case '3':
                let deposito = parseInt(prompt('Ingresa monto a depositar'));
                if (Number.isNaN(deposito)) {
                    alert('El valor ingresado no es un número');
                } else {
                    saldo += deposito;
                    // Es equivalente a la linea anterior
                    //saldo = saldo+deposito;
                    alert('Depósito exitoso. Tu nuevo saldo es $ ' + saldo);
                }


                break;
            default:
                alert('Elegiste una opción inválida');
                break;
        }
        opcion = prompt('Elegí una opción: \n1- Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \n Presioná X para finalizar.');
    }
} else {
    //aviso de bloqueo de tarjeta
    alert('Retendremos tu tarjeta por seguridad');
}

alert('Adiós');