const navBtn = document.getElementById('navBtn')
const nav = document.querySelector('nav')

navBtn.addEventListener('click', ()=> {
    if( nav.style.transform == "translateX(0px)" ){
        nav.style.transform = "translateX(-200px)"
    }else{
    nav.style.transform = "translateX(0px)";
}
})