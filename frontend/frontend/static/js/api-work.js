
async function workAPI (firstName, lastName, email, phone, topic) {
    const response = await fetch('http://localhost:8000/api/work', {
        method: 'POST',

        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            email: email,
            tel_number: phone,
            topic: topic,
        })
    })

    return response.json();
}


const pushFormButton = document.querySelector('#pushModal');

pushFormButton.addEventListener('click', function (e) {
    const firstName = document.querySelector('#firstName').value
    const lastName = document.querySelector('#lastName').value
    const email = document.querySelector('#email').value
    const phone = document.querySelector('#phone').value
    const topic = document.querySelector('#topic').value

    if (firstName && lastName && email && phone && topic) {

        const result = workAPI(
            firstName, lastName,
            email, phone, topic
        )

        if (result) {
            console.log('Success result:', result)
        } else {
            console.log('Error result:', result)
        }


    } else {

        e.preventDefault()
        console.log('Write all fields, please!!!')
    }
});