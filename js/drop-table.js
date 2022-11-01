



const mainBox = document.querySelector('.drop-table');
console.log(mainBox);

const arrayID = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

const onClick = (e) => {
  console.log(e.target.id);

  if (arrayID.includes(e.target.id)) {
    const currentTime = document.getElementById(`${e.target.id}`);
    const currentText = document.getElementById(`${e.target.id}T`);
    console.log('currentTime', currentTime);
    console.log('currentText', currentText);

    currentTime.classList.toggle('active');
    currentText.classList.toggle('hidden');

    // блок закриває всі відкриті тексти крім поточного.

    arrayID.forEach(el => {
      if (el !== e.target.id) {
        const currentTime = document.getElementById(`${el}`);
        const currentText = document.getElementById(`${el}T`);
        currentTime.classList.remove('active');
        currentText.classList.add('hidden');
      }
    })
    //----------------------------------------------
  }
}

mainBox.addEventListener('click', onClick);

(function () {
  const burger = document.querySelector(".burger");
  burger.addEventListener("click", () => {
    burger.classList.toggle("burger_active");
  });
})();