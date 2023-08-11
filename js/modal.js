const modal = document.querySelector(".modal");
const modalS = document.querySelector(".modalS");
const modalT = document.querySelector(".modalT");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const openModalBtnS = document.querySelector(".btn-openS");
const openModalBtnT = document.querySelector(".btn-openT");
const closeModalBtn = document.querySelector(".btn-close");
const closeModalBtnS = document.querySelector(".btn-closeS");
const closeModalBtnT = document.querySelector(".btn-closeT");

// close modal function
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// close modalS function
const closeModalS = function () {
  modalS.classList.add("hidden");
  overlay.classList.add("hidden");
};

// close modalS function
const closeModalT = function () {
  modalT.classList.add("hidden");
  overlay.classList.add("hidden");
};




// close the modal when the close button and overlay is clicked
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// close the modal when the close button and overlay is clicked
closeModalBtnS.addEventListener("click", closeModalS);
overlay.addEventListener("click", closeModalS);

// close the modal when the close button and overlay is clicked
closeModalBtnT.addEventListener("click", closeModalT);
overlay.addEventListener("click", closeModalT);



// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modalS.classList.contains("hidden")) {
    closeModalS();
  }
});

// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modalT.classList.contains("hidden")) {
    closeModalT();
  }
});




// open modal function
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// open modal function
const openModalS = function () {
  modalS.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// open modal function
const openModalT = function () {
  modalT.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// open modal event
openModalBtn.addEventListener("click", openModal);
openModalBtnS.addEventListener("click" , openModalS);
openModalBtnT.addEventListener("click" , openModalT);