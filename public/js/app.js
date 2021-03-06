const weatherForm = document.querySelector('form')
const searching = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


weatherForm.addEventListener('submit', (e) => { 
    e.preventDefault()

    const Location = searching.value

    messageOne.textContent = 'Loading....'
    messageTwo.textContent = ''

    // fetch out weather data
    
    fetch('/weather?address=' + Location).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            messageOne.textContent = data.error
           
        } else {
            messageOne.textContent = data.location
            messageOne.textContent = data.forecast
        }
    })
})

})
