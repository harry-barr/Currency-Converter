const convertBtn = document.querySelector(".convert-btn");
const currencyBase = document.querySelector(".currency-to-convert");
const currencyTarget = document.querySelector(".currency-converted-to");
const currencyInput = document.querySelector(".currency-input");
const exchangeRate = document.querySelector(".exchange-rate");
const convertedContainer = document.querySelector(".converted-container");

const getConversionRate = async () => {
  const response =
    await fetch(`https://v6.exchangerate-api.com/v6/9e913ccb359d52fd02b4f741/pair/${currencyBase.value}/${currencyTarget.value}/${currencyInput.value}
`);
  const data = await response.json();
  console.log(data);
  exchangeRate.insertAdjacentHTML(
    "beforeend",
    `<p>${data.conversion_rate}</p>`
  );
  convertedContainer.insertAdjacentHTML(
    "beforeend",
    `<p>${data.conversion_result}</p>`
  );
};

convertBtn.addEventListener("click", () => {
  getConversionRate();
});
