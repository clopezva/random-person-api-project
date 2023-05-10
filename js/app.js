// Tu código aquí
const photoField = document.getElementById('photo')
const nameField = document.querySelector('#first')
const lastNameField = document.querySelector('#last')
const countryField = document.querySelector('#country')
const phoneField = document.querySelector('#phone')
const emailField = document.querySelector('#email')
const btn = document.querySelector('#btn')

btn.addEventListener('click', getRandomPerson)

// Elimina el botón de obtener persona. Ahora, al cargar la aplicación, cada 5 segundos, debe generarse una persona totalmente nueva
btn.style.display = "none"
setInterval(getRandomPerson, 5000)

async function getRandomPerson(){
    // Pedimos los datos a la API y lo guardamos en una variable.
    const response = await fetch(" https://randomuser.me/api/")
    // Convertir a una estructura de datos manipulable
    const results = await response.json()
    // Get el array con la información
    const personData = results.results[0]
    console.log(personData)

    nameField.textContent = personData.name["first"]
    lastNameField.textContent = personData.name["last"]
    countryField.textContent = personData.location["city"]
    phoneField.textContent = personData.phone
    emailField.textContent = personData.email
    photoField.src = personData.picture["large"]
}








