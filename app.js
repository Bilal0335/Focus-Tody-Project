const checkBoxList = document.querySelectorAll(".custom-checkbox");
const inputField = document.querySelectorAll(".goal-input");
const errorLabe = document.querySelector(".error-label");
const progresBar = document.querySelector(".progress-bar");
const progresValue = document.querySelector(".progress-value");

checkBoxList.forEach((checkBox) => {
  checkBox.addEventListener("click", (e) => {
    const allGoalsAdded = [...inputField].every((input) => {
      // console.log(input.value);
      return input.value;
    });

    if (allGoalsAdded) {
      checkBox.parentElement.classList.toggle("completed");
      progresValue.style.width = "33.33%";
    } else {
      progresBar.classList.add("show-error");
    }
  });
});

inputField.forEach((input) => {
  input.addEventListener("focus", () => {
    progresBar.classList.remove("show-error");
  });
});

//! pratice

// const a = [0, 2, 3, 4, 6, 8];

// const res = a.every((e, index) => {
//   debugger; // Here you can inspect each element and its index
//   console.log(`Checking element at index ${index}: ${e}`);
//   return e % 2 === 0;
// });

// console.log(res); // Output: false

// a.some((e) => {
//   // console.log(e,i,arr);
//   return 'bilal'
// });

// const reV = a.some((e, i) => {
//   // debugger;
//   // return e > 4;
//   if (e % 3 === 1) {
//     console.log(i);
//   }
//   return e % 3 === 1;
// });
