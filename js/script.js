function setDay(){
    const date = new Date()
    const dayString = new Date(date).toLocaleString('pt-br', {weekday:'long'})
    const monthString = new Date(date).toLocaleString('pt-br', {month:'long'})

    document.querySelector('.lg').innerHTML = dayString + ", " + date.getDate() + " de " + monthString + " de " + date.getFullYear();
}

document.addEventListener('load', start());
document.addEventListener('load', show());

function show(){
    console.log('hidden')

    // O TEMPO DE 16 MINUTOS E 38 SEGUNDOS EM PARA COLOCAR É 998000
    setTimeout(()=>{
        const hiddenItems = document.querySelectorAll('.hidden');
        hiddenItems[0].classList.remove('hidden')
        hiddenItems[1].classList.remove('hidden')
    }, 998000)
}

function start(){
    setDay();
    var number = 400

    const positive = {
        1: 3,
        2: 5,
        3: 7,
        4: 10
    }
    const negative = {
        1: 1,
        2: 3,
        3: 5,
        4: 7
    };
    setInterval(()=>{
        if(number > 1000){
            number = number - 30;
        }

        if(randomNumber(1, 2) == 1){
            number = number + positive[randomNumber(1, 4)]
        }
        else{
            number = number - negative[randomNumber(1, 4)];
        }
        return document.querySelector('.xl').innerHTML = number
    }, 1500)
}

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
