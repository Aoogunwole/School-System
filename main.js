
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle("window-scroll", window.scrollY>0);
})


const faqs = document.querySelectorAll(".faq");

faqs.forEach( faq => {
    faq.addEventListener("click", ()=>{
        faq.classList.toggle("open");


        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus') {
            icon.className = 'uil uil-minus'
        }
        else {
            icon.className = 'uil uil-plus'
        }
    })
});


const nav__menu = document.querySelector(".nav__menu");
const openMenuBar = document.getElementById("openMenuBar");
const closeMenuBar = document.getElementById("closeMenuBar");

openMenuBar.addEventListener("click", () => {
    nav__menu.style.display = "inline-block";
    closeMenuBar.style.display = 'inline-block';
    openMenuBar.style.display = "none";


})
closeMenuBar.addEventListener("click", () => {
    nav__menu.style.display = "none";
    closeMenuBar.style.display = 'none';
    openMenuBar.style.display = "inline-block";
})
