"use strict";
let input_name = document.querySelector(".input_name");
let text_content = document.querySelector(".text_content");
let button_set_age = document.querySelector(".button_set_age");

button_set_age.addEventListener("click", () => {
    let name = input_name.value;
    if (name !== "") {
        fetch(`https://api.agify.io?name=${name}`)
            .then(res => res.json())
            .then((data) => {
                text_content.innerHTML = "Your Age By Name : " + data.age;
                input_name.value = "";
            });
    }
});