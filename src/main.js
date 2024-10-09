/* Menu hamburguesa */
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

/* Menu Contenido */
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.toggle('hidden');  // Oculta o muestra la sección
}

/* Login */
function loguear(event) {
    event.preventDefault();  // Evita que el formulario se envíe automáticamente

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (email === "guimar@gmail.com" && password === "1234") {
        // Almacenar un indicador en localStorage para la sesión
        localStorage.setItem("isLoggedIn", "true");
        // Redirigir a la página de mis cursos
        window.location.href = "biblioteca/miscursos.html";
    } else {
        alert("Correo o contraseña incorrectos.");
    }
}

/* Cerrar Session */
function logout() {

    localStorage.removeItem("isLoggedIn");
    window.location.href = "../../../index.html";
}