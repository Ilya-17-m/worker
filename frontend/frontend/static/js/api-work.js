
function workAPI(e) {
    e.preventDefault();

    const data = {
        first_name: document.querySelector('#firstName').value,
        last_name: document.querySelector('#lastName').value,
        email: document.querySelector('#email').value,
        tel_number: document.querySelector('#phone').value,
        topic: document.querySelector('#message').value,
    }

    addWork(data)
}

async function addWork(data) {
    const response = await fetch('http://127.0.0.1:8000/api/work/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })

    const modal = document.querySelector('#modal');
    modal.style.display = 'none';
    document.querySelector('#contact-form').reset()

    return response.json()
}

document.querySelector('#contact-form').addEventListener('submit', workAPI)