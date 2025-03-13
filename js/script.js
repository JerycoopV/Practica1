function showText(element) {
    // Si ya tiene la clase "active", la quitamos para desactivar la card
    if (element.classList.contains("active")) {
        element.classList.remove("active");
    } else {
        // Remueve la clase "active" de todas las cards
        document.querySelectorAll('.feature').forEach(feature => {
            feature.classList.remove('active');
        });

        // Activa solo la card clicada
        element.classList.add('active');
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const elementos = document.querySelectorAll(".continuo, .continuo *"); 

    elementos.forEach(el => el.classList.add("animado")); // Añade la clase animado a todos los hijos de la sección

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.2 
    });

    elementos.forEach(el => observer.observe(el));
});
document.addEventListener("DOMContentLoaded", function () {
    const secciones = document.querySelectorAll(".Power, .PowerColab, .Power *, .PowerColab *");

    secciones.forEach(el => el.classList.add("animado")); // Añade la clase animado

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.2 
    });

    secciones.forEach(el => observer.observe(el));
});
document.addEventListener("DOMContentLoaded", function () {
    const seccionTestimonial = document.querySelectorAll(".testimonial-box, .testimonial-box *");

    seccionTestimonial.forEach(el => el.classList.add("animado")); // Añade la clase animado

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.2 
    });

    seccionTestimonial.forEach(el => observer.observe(el));
});
document.addEventListener("DOMContentLoaded", function () {
    const seccionNew = document.querySelectorAll(".New, .New *");

    seccionNew.forEach(el => el.classList.add("animado"));

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.2
    });

    seccionNew.forEach(el => observer.observe(el));
});