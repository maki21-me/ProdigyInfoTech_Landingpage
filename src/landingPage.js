
function buttonClicked() {
  let name=prompt("please enter your Full name");
  let email=prompt("please enter your Email");
  if(name && email){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    alert(`Thank you ${name} for applying! We will contact you at ${email}.`);
  }
}

const applyBtn=document.getElementById("apply-btn");
applyBtn.addEventListener("click",buttonClicked);

const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
      console.log("Menu clicked!");
    navLinks.classList.toggle("active");
  });

  
  