const shareBtn = document.querySelectorAll(".shareBtn");
const adress = document.getElementById("adress");

const contactBox = document.querySelector(".contactBox2");
const adressBoxMobile = document.querySelector(".adressBox2Mobile");

shareBtn.forEach(function(button){
  button.addEventListener("click", function() {
    adress.classList.toggle("shareBoxNone");
    adress.classList.toggle("shareBoxVisible");
    // for mobile
    contactBox.classList.toggle("hide");

    adressBoxMobile.classList.toggle("fuckIt");
  });
});
