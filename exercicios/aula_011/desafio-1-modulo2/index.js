const stars = {
  value_1: 1,
  value_2: 2,
  value_3: 3,
  value_4: 4,
  value_5: 5,
};

const rating = {
  star_1: 1,
  star_2: 16,
  star_3: 19,
  star_4: 30,
  star_5: 20,
};

const totalClientes1 = document.querySelector(".totalClientes-1");
const totalClientes2 = document.querySelector(".totalClientes-2");
const totalClientes3 = document.querySelector(".totalClientes-3");
const totalClientes4 = document.querySelector(".totalClientes-4");
const totalClientes5 = document.querySelector(".totalClientes-5");
const botao = document.querySelector(".botao");
const resultHtml = document.querySelector(".resultado");
totalClientes1.innerHTML = rating.star_1;
totalClientes2.innerHTML = rating.star_2;
totalClientes3.innerHTML = rating.star_3;
totalClientes4.innerHTML = rating.star_4;
totalClientes5.innerHTML = rating.star_5;

const totalOfVotes =
  rating.star_1 + rating.star_2 + rating.star_3 + rating.star_4 + rating.star_5;

rating.star_1 *= stars.value_1;
rating.star_2 *= stars.value_2;
rating.star_3 *= stars.value_3;
rating.star_4 *= stars.value_4;
rating.star_5 *= stars.value_5;

const sumRatings =
  rating.star_1 + rating.star_2 + rating.star_3 + rating.star_4 + rating.star_5;
const averageTotalRatings = sumRatings / totalOfVotes;


// new round number
function convertNumber(number) {
  let interAverage = Math.floor(number);
  let decimalPart = number - interAverage;
  let decimalPartRounded = Math.round(decimalPart * 2) / 2;
  let result = interAverage + decimalPartRounded;

  if (result > number) {
    result -= 0.5;
  }
  
  return result;
}
botao.addEventListener('click', () => {
  const result = convertNumber(averageTotalRatings);
  resultHtml.innerHTML = `Rating: ${result}<br>`;
});

