const formNuevoUsuario = document.querySelector("#formNuevoUsuario")

formNuevoUsuario.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const dni = document.querySelector('#dni').value;
    const nombre_usuario = document.querySelector('#nombre_usuario').value;
    const contraseña = document.querySelector('#contraseña').value;
    const telefono = document.querySelector('#telefono').value;
    const fecha_nac = document.querySelector('#fecha_nac').value;
    const email = document.querySelector('#email').value;

    const reserva = {
        nombre,
        apellido,
        dni,
        nombre_usuario,
        contraseña,
        telefono,
        fecha_nac,
        email
    }

    const response = await fetch('http://localhost:4000/api', {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json' // Cuando se envían datos JSON al servidor
        }
    })

    const data = await response.json();

    alert(data.message)
    window.location.href = "/"
});
