let selected
const div1 = document.getElementById('red')
const div2 = document.getElementById('yellow')
const div3 = document.getElementById('green')

div1.addEventListener('click', () => colorChange(div1))
div2.addEventListener('click', () => colorChange(div2))
div3.addEventListener('click', () => colorChange(div3))

function colorChange(el) {
    if(selected){
        selected.classList.remove("selected");
    }
        el.classList.add("selected")
        selected = el
    }
function colorRed() {
    div1.classList.add('selected')
    div2.classList.remove('selected')
    div3.classList.remove('selected')
}
function colorYellow() {
    div2.classList.add('selected')
    div1.classList.remove('selected')
    div3.classList.remove('selected')
}
function colorGreen() {
    div3.classList.add('selected')
    div2.classList.remove('selected')
    div1.classList.remove('selected')
}


const login = document.getElementById('login')
function loginValid(){
    if (login.value.length < 3) {
        login.setCustomValidity("niepoprawny login")
    }
}
login.addEventListener('input', loginValid)

const password = document.getElementById('password')
