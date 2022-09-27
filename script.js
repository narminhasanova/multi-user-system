
const firstname = document.querySelector('#fname'); //object
const lastname = document.querySelector('#lname');
const email = document.querySelector('#email');
const password = document.querySelector('#pass');
const form = document.querySelector('#signup');
let arr;

// bazada istifadecilerin yoxlanmasi
if (localStorage.getItem('users')) {
    console.log('var');

    // varsa massivi bazadan oxumaq
    arr = JSON.parse(localStorage.getItem('users'));
} else {
    console.log('yoxdur');

    // yoxdursa massivi sifirlamaq
    arr = [];
}

form.addEventListener('submit', function (e) {
    const uygunFormat = document.querySelectorAll('.uygun');
    if (uygunFormat.length === 4) {
        // inputlardan obyekt yaratmaq
        const obj = {
            fname: firstname.value,
            lname: lastname.value,
            email: email.value,
            pass: password.value
        };

        // massive elave etmek
        arr.push(obj);

        // json-a cevirmek
        let jsonArr = JSON.stringify(arr);

        // bazaya yazmaq
        localStorage.setItem('users', jsonArr);

        alert('Qeydiyyatdan ugurla kecdiniz!');
    } else {
        alert('Formatlari tamamlayin!');
    }
});

// ad ve soyad inputu
const userData = document.querySelectorAll('.user-data'); //list-array

// daxil olmaq - focus
// terk etmek - blur
for (let i = 0; i < userData.length; i++) {
    userData[i].addEventListener('blur', function () {
        // console.log(this.value.length);
        if (this.value.length >= 3) {
            this.classList.add('uygun');
            this.classList.remove('uygunsuz');
            this.nextElementSibling.classList.add('hidden');
        }
        else {
            this.classList.add('uygunsuz');
            this.classList.remove('uygun');
            this.nextElementSibling.classList.remove('hidden');
        }
    });
}

// email inputu
email.addEventListener('blur', function () {
    let val = this.value; //string
    let lastIndex = val.length - 1;
    if (val.includes('@') && val[0] != '@' && val[lastIndex] != '@') {
        this.classList.add('uygun');
        this.classList.remove('uygunsuz');
        this.nextElementSibling.classList.add('hidden');
    }
    else {
        this.classList.add('uygunsuz');
        this.classList.remove('uygun');
        this.nextElementSibling.classList.remove('hidden');
    }
});

// parol inputu
password.addEventListener('blur', function () {
    if (this.value.length >= 6 && this.value.length <= 12) {
        this.classList.add('uygun');
        this.classList.remove('uygunsuz');
        this.nextElementSibling.classList.add('hidden');
    }
    else {
        this.classList.add('uygunsuz');
        this.classList.remove('uygun');
        this.nextElementSibling.classList.remove('hidden');
    }
});