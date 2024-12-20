const inputField = document.getElementById("ip");
const button = document.getElementById("btn");
const outputDiv = document.getElementById("output");

button.addEventListener("click", () => { // Fixed typo: 'addEventListnener' to 'addEventListener'
  const inputValue = parseFloat(inputField.value);

  if (isNaN(inputValue)) {
    outputDiv.textContent = "Please enter a valid number!";
    return;
  }

  new Promise((resolve) => { // Fixed typo: 'reslove' to 'resolve'
    setTimeout(() => {
      resolve(inputValue);
    }, 2000);
  })
    .then((number) => {
      outputDiv.textContent = `Result: ${number}`;
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(number * 2);
        }, 1000);
      });
    })
    .then((number) => {
      outputDiv.textContent = `Result: ${number}`;
      return new Promise((resolve) => { // Fixed typo: 'reslove' to 'resolve'
        setTimeout(() => {
          resolve(number - 3);
        }, 1000);
      });
    })
    .then((number) => {
      outputDiv.textContent = `Result: ${number}`;
      return new Promise((resolve) => { // Fixed typo: 'reslove' to 'resolve'
        setTimeout(() => {
          resolve(number / 2);
        }, 1000);
      });
    })
    .then((number) => {
      outputDiv.textContent = `Result: ${number}`;
      return new Promise((resolve) => { // Fixed typo: 'reslove' to 'resolve'
        setTimeout(() => {
          resolve(number + 10);
        }, 1000);
      });
    })
    .then((finalResult) => {
      outputDiv.textContent = `Final Result: ${finalResult}`;
    })
    .catch((error) => {
      outputDiv.textContent = `Error: ${error}`;
    });
});





























