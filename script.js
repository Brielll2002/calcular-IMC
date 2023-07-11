function imc(){

    var peso = Number(window.document.getElementById('pes').value)
    var altura = Number(window.document.getElementById('altur').value)
    var res = window.document.getElementById('resultado')

    var altura2 = altura*altura
    var result = peso/altura2


if(result == 0){window.alert('[ERRO]Reveja os dados e tente novamente!')}

else if(result>0 && result<17){res.innerHTML = `Seu IMC é esse : ${result}<br>Está muito abaixo do peso.(procure um médico.)`}

else if(result >= 17 && result<=18.49){res.innerHTML = `Seu IMC é esse : ${result}<br>Está abaixo do peso.`}

else if(result >= 18.5 && result<=24.99){res.innerHTML = `Seu IMC é esse : ${result}<br>Está com o peso normal.`}

else if(result >= 25 && result<= 29.99){res.innerHTML = `Seu IMC é esse : ${result}<br>Está acima do peso.`}

else if(result >= 30 && result <= 34.99){res.innerHTML = `Seu IMC é esse : ${result}<br>Está com Obesidade 1(procure um médico)`}

else if(result >= 35 && result <= 39.99){res.innerHTML = `Seu IMC é esse : ${result}<br>Está com Obesidade 2(Severa)(procure um médico)`}

else if(result >= 40){res.innerHTML = `Seu IMC é esse : ${result}<br>Está com Obesidade 3(MÓRBIDA)(procure um médico)`}

    //res.innerHTML = `${result}`
}