const themeToggle = document.querySelector(".nav-thame-btn");

themeToggle.addEventListener('click' , () => {
    document.body.classList.toggle("dark-theme");
    console.log("clicked")
})