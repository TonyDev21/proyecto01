function toggleMenu(){
    let menu = document.querySelector("#menu");
    const body = document.body;
    
    menu.classList.toggle('hidden');
    
    // Deshabilita el scroll cuando el menú esta abierto
    if (menu.classList.contains('hidden')) {
        body.classList.remove('overflow-hidden');
    } else {
        body.classList.add('overflow-hidden');
    }
}