function areaTriangulo(){
    //variaveis
    var base = document.getElementById('base').value;
    var altura = document.getElementById('altura').value;

    base = parseFloat(base);
    altura = parseFloat(altura);

    var area = (base*altura)/2;
    area = area.toFixed(2);
    console.log(area);

    if (Number.isNaN(area) || area == "NaN") {
        swal({
          title: "Insira um valor válido!",
          icon: "error",
          button: "Continuar",
        });
    } else {
        swal({
          title: area,
          text: "A area do tringulo é: " + area,
          icon: "success",
          button: "Continuar",
        });
        document.getElementById('area').innerHTML = area;
        document.getElementById('area').style.display = 'block';
    }
}
////////////////////////////////////////////////////////////

function printNumbers(){
    var numero = 0;
    var numeros = [];
    var count = 0;
    while(numero <= 50) {
        if (numero % 5 == 0){
            numeros[count] = numero;
            count++;
        }
        numero++;

        // console.log(numero);
        // console.log(numeros);
        // console.log(count);
    }
    numeros.splice(0, 1);
    var resultado = numeros.toString(numeros);
    resultado = resultado.replace(/,/g, ', ');
    count = 0;
    // console.log(numeros);

    document.getElementById('numeros').style.display = 'block';
    document.getElementById('numeros').innerHTML = resultado;
}
////////////////////////////////////////////////////////////

function verificarIdade(){
    var idade = document.getElementById('idade').value;
    console.log(idade);

    if (idade == "" || idade == "NaN" || Number.isNaN(idade)){
        swal({
          title: "Insira sua idade!",
          text: "Não deixe a caixa de texto vazia",
          icon: "error",
          button: "Continuar",
        });
    }else if (idade > 120) {
        //idade aleartoria
        var random = Math.random() * 10;
        if (random > 5) {
            swal({
              title: "Mentiraaa!",
              text: "Nenhuma Rainha Elizabeth por aqui...",
              icon: "success",
              button: "Continuar",
            });
        }else {
            swal({
              title: idade + " Anos?? Sei não!",
              text: "Insira sua idade de verdade ;)",
              icon: "success",
              button: "Continuar",
            });
        }
    }else if (idade >= 18) {
        //maior de idade
        swal({
          title: "Maior de idade!",
          text: "Sua idade: " + idade,
          icon: "success",
          button: "Continuar",
        });
    }else{
        //menor de idade
        swal({
          title: "Menor de idade!",
          text: "Sua idade: " + idade,
          icon: "success",
          button: "Continuar",
        });
    }
}
////////////////////////////////////////////////////////////

function calcula_imc(){
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura2').value;

    peso = parseFloat(peso);
    altura = parseFloat(altura);

    var imc = peso / (altura*altura);
    imc = imc.toFixed(2);
    // console.log(imc);

    if (imc == "NaN" || Number.isNaN(area)) {
        swal({
          title: "Insira um valor válido!",
          icon: "error",
          button: "Continuar",
        });
    } else {
        document.getElementById('imc').innerHTML = "Seu imc: "+imc;
        document.getElementById('imc').style.display = 'block';
    }
}