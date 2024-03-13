
const buttons =document.querySelectorAll(".rating button");
const thankSection =document.querySelector(".thank-section");
const ratingSection= document.querySelector(".rating-section");

buttons.forEach(button => {
  button.addEventListener("click" , () => {
    button.classList.add("user");
  });
});

document.querySelector(".btn-class").addEventListener("click" , () =>{
  const btna=document.querySelector(".user");
  if(btna) {
    thankSection.classList.remove("hidden");
    ratingSection.classList.add("hidden");

  }
})





