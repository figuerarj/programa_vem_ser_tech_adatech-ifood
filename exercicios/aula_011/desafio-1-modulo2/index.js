const stars = {
  value_1: 1,
  value_2: 2,
  value_3: 3,
  value_4: 4,
  value_5: 5,
};

const rating = {
  star_1: 23,
  star_2: 40,
  star_3: 50,
  star_4: 15,
  star_5: 100,
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

// percentage
const star_1Percent = (rating.star_1 / sumRatings) * 100;
const star_2Percent = (rating.star_2 / sumRatings) * 100;
const star_3Percent = (rating.star_3 / sumRatings) * 100;
const star_4Percent = (rating.star_4 / sumRatings) * 100;
const star_5Percent = (rating.star_5 / sumRatings) * 100;

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

const result = convertNumber(averageTotalRatings)


botao.addEventListener("click", () => {
  if (resultHtml.classList.contains("esconder")) {
    resultHtml.classList.remove("esconder");

    resultHtml.style.display = "block";
  } else {
    resultHtml.classList.add("esconder");

    resultHtml.style.display = "none";
  }

  let star = "";
 
  if (result >= 0 && result < 0.5) {
    star = `0`
  } else if (result >= 0.5 && result < 1) {
    star = `<i class="fa-solid fa-star-half-stroke"></i>`
  } else if (result >= 1 && result < 1.5) {
    star = `<i class="fa-solid fa-star"></i>`
  } else if (result >= 1.5 && result < 2) {
    star = `<i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>`
  } else if (result >= 2 && result < 2.5) {
    star = `<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>`
  } else if (result >= 2.5 && result < 3) {
    star = `<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>`
  } else if (result >= 3 && result < 3.5) {
    star = `<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>`
  } else if (result >= 3.5 && result < 4) {
    star = `<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>`
  } else if (result >= 4 && result < 4.5) {
    star = `<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>`
  } else if (result >= 4.5 && result < 5) {
    star = `<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>`
  } else if (result === 5) {
    star = `<i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>`
  } else {
    star = `-`
  }
  
  // 
  resultHtml.innerHTML = `
  <table class="table-js">
    <tbody>
      <tr>
        <td>1 star</td>
        <td>${star_1Percent.toFixed(2)}%</td>
      </tr>
      <tr>
        <td>2 stars</td>
        <td>${star_2Percent.toFixed(2)}%</td>
      </tr>
      <tr>
        <td>3 stars</td>
        <td>${star_3Percent.toFixed(2)}%</td>
      </tr>
      <tr>
        <td>4 stars</td>
        <td>${star_4Percent.toFixed(2)}%</td>
      </tr>
      <tr>
        <td>5 stars</td>
        <td>${star_5Percent.toFixed(2)}%</td>
      </tr>
      <th class="thtotal">Average Rating:</th>
      <td><strong>${averageTotalRatings.toFixed(2)}(${result})</strong></td>
      </tbody>
  </table>
  <div class="star_div">${star}</div>
 
`;
});


