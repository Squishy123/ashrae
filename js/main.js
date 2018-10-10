function toggleMenu(el) {
    if(el.style.visibility != "hidden") {
        //change menu 
        el.classList.toggle("change");
        document.querySelectorAll(".navbar-pages").forEach((p) => {
            p.classList.toggle("change");
        })
    }
}