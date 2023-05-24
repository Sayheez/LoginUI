"use strict";

/**
    Name: Seyi Samuel
    Description: Using variables, functions and event listeners to add interactivity to a page.
    Date: 24.05.2023
*/ 

/** Variables */
const signUpModal = document.querySelector(".form-modal");
const signUpBtn = document.querySelector(".signup");
const backgroundDrop = document.querySelector(".overlay-bg");
const btnCloseModal = document.querySelector(".close-modal");


/** Functions */
const closeModal = () => {
    signUpModal.classList.add("hidden");
    backgroundDrop.classList.add("hidden");
};

/** Events Listeners */
//The sign-up button is listening for an event that will be executed when clicked.
signUpBtn.addEventListener("click", () => {
    signUpModal.classList.remove("hidden");
    backgroundDrop.classList.remove("hidden");
});

//The close-modal button is listening for an event that will be executed when clicked.
btnCloseModal.addEventListener("click", () => {
    closeModal();
});

// Using keydown event on the window object to close the modal and the backdrop background
document.addEventListener("keydown", (e) => {
    console.log(e.key);
    if(e.key === "Escape") {
        if(!signUpModal.classList.contains("hidden")) {
            closeModal();
        }
    }
});
