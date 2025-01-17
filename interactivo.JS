// Seleccionar el contenedor para agregar el nombre y la descripción
document.addEventListener('DOMContentLoaded', () => {
    const contenedorInformacion = document.getElementById('contenedor-informacion');

    // Crear elementos para el nombre y descripción
    const elementoNombre = document.createElement('h1');
    elementoNombre.textContent = 'David Calcina Huerta';

    const elementoDescripcion = document.createElement('p');
    elementoDescripcion.textContent = 'Mi proyecto final y mis redes sociales';

    // Insertar los elementos en el contenedor
    contenedorInformacion.appendChild(elementoNombre);
    contenedorInformacion.appendChild(elementoDescripcion);

    // Agregar evento para mostrar mensaje al hacer clic en Instagram
    const instagramButton = document.getElementById('instagram');
    instagramButton.addEventListener('click', (event) => {
        event.preventDefault(); // Evita que el enlace se abra

        const tieneInstagram = false; // Simular una condición para mostrar diferentes mensajes

        if (tieneInstagram) {
            alert('Sígueme en Instagram para más contenido.');
        } else if (!tieneInstagram) {
            alert('No tengo Instagram, soy un boomer.');
        } else {
            alert('Algo salió mal.');
        }
    });
});
