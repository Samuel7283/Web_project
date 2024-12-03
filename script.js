const userInput = document.getElementById('username');
const loginButton = document.getElementById('loginButton');

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

userInput.addEventListener('input', function(event) {
    fetch('checks.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `name=${userInput.value.trim()}`
    })
    .then(response => response.text())
    .then(async data => {
        let hasil = data;
        document.getElementById('result').innerText = "Loading...";

        loginButton.disabled = true;

        await delay(2000);
            if (hasil == 1) {
                loginButton.disabled = true;
            } else {
                loginButton.disabled = false;
            }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').innerText = `Terjadi kesalahan. ${error}`;
    });
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('login.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('result').innerText = data;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').innerText = 'Terjadi kesalahan.';
    });
});