const loginForm = document.querySelector('#login');
const email = document.querySelector('#email');
const password = document.querySelector('#pass');
// users array
let arr = JSON.parse(localStorage.getItem('users'));

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // console.log(email.value);
    let userYoxdur = true;
    for (let i = 0; i < arr.length; i++) {
        if (email.value == arr[i].email) {
            userYoxdur = false;
            if (password.value == arr[i].pass) {
                alert('Hesaba ugurla daxil oldunuz!');
            } else {
                alert('Yanlish parol!');
            }
        }
    }
    if (userYoxdur) {
        alert('Bele istifadeci yoxdur!');
    }
});