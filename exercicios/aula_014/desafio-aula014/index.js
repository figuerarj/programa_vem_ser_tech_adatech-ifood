const resultado = document.getElementById("texto");


const nome = prompt("Escreva o seu nome:");
const nomeMaiusculo = nome.charAt(0).toUpperCase() + nome.substring(1);
const idade = parseInt(prompt("Coloque a sua idade:"));
const altura = parseFloat(prompt("Digite a sua altura:").replace(',','.'))
// .replace(',','.');
const peso = parseFloat(prompt("Digite o seu peso em Kg:").replace(',','.'));
const sexo = prompt("Digite M para masculino e F para meninimo:").toUpperCase();

const IMC = Number((peso / (altura * altura)).toFixed(2));
console.log(IMC)

if (IMC <= 18.5) {
    resultado.innerHTML = `<h1><strong>${nomeMaiusculo}</strong>, o seu IMC é: <mark>${IMC}</mark> e você está <strong>Abaixo do Normal</strong>.<br> <em>Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.</em></h1>`;
} else if (IMC >= 18.60 && IMC <= 24.90) {
    resultado.innerHTML = `<h1><strong>${nomeMaiusculo}</strong>, o seu IMC é: <mark>${IMC}</mark>kg/m2. <br><br> Você está na faixa <strong>Normal</strong>.<br><br> <em>Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.</em></h1>`;
} else if(IMC >= 25.00 && IMC <= 29.90){
    resultado.innerHTML = `<h1><strong>${nomeMaiusculo}</strong>, o seu IMC é: <mark>${IMC}</mark>kg/m2. <br><br> Você está na faixa <strong>Sobrepeso</strong>.<br><br> <em>Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.</em></h1>`;
} else if(IMC >= 30.00 && IMC <= 34.90){
    resultado.innerHTML = `<h1><strong>${nomeMaiusculo}</strong>, o seu IMC é: <mark>${IMC}</mark>kg/m2. <br><br> Você está na faixa <strong>Obesidade grau I</strong>.<br><br> <em>Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.</em></h1>`;
} else if(IMC >= 35.00 && IMC <= 39.90){
    resultado.innerHTML = `<h1><strong>${nomeMaiusculo}</strong>, o seu IMC é: <mark>${IMC}</mark>kg/m2. <br><br> Você está na faixa <strong>Obesidade grau II</strong>.<br><br> <em>Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde.</em></h1>`;
} else {
    resultado.innerHTML = `<h1><strong>${nomeMaiusculo}</strong>, o seu IMC é: <mark>${IMC}</mark>kg/m2. <br><br> Você está na faixa <strong>Obesidade grau III</strong>.<br><br> <em>Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.</em></h1>`;
}

//Para melhorar o IMC, é importante verificar se está acima ou abaixo do peso considerado normal. Quando o IMC está na faixa de magreza, é importante consultar um nutricionista que fará uma avaliação completa, indicando um plano alimentar personalizado que priorize o ganho de peso de forma saudável. 

//Por outro lado, quando o IMC está na faixa do sobrepeso ou da obesidade, o nutricionista pode recomendar uma alimentação com redução de calorias. Além da dieta, normalmente também se recomenda a prática de atividade física regular, que ajudará a acelerar o metabolismo e facilitar a perda de peso, o que influencia diretamente no IMC.
// console.log(nomeMaiusculo,idade,altura,peso,sexo);
