

function validate(){

    // validate username and password
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'srith' && password === '030123drunkAid') {
        alert('Login successful!');
        window.location.replace("letters.html");
    } else {
        alert('Username or password incorrect. Please try again.');
    };
}


