var counter = document.querySelector('#counter')
let count = 0
let plus = document.querySelector('#plus')
let minus = document.querySelector('#minus')
let heart = document.querySelector("#heart")
let pause = document.querySelector("#pause")
let likes = document.querySelector('.likes')
let myForm = document.querySelector("form");
let myInput = document.querySelector("#comment-input");
let comments = document.querySelector('#list')
let submit = document.querySelector('#submit')
let selectedButton = document.querySelectorAll('button')
let intervals = setInterval(runCounter, 1000)



function runCounter(){
    counter.innerHTML = count += 1;
}

//increase and decrease
function changeCounter (button){
if(button == plus){
    count += 1;
    liked += 1
}
else if (button == minus){
    count -= 1
}
counter.innerText = count

//pause
if (button == pause){
if(pause.innerText === "pause"){
            ResetIntervals()
            plus.setAttribute('disabled', "")
            minus.setAttribute('disabled', "")
            heart.setAttribute('disabled', "")
            pause.innerHTML = 'resume'
        }
        else if(pause.innerHTML === 'resume'){
            ResetIntervals()
            plus.removeAttribute('disabled', "")
            minus.removeAttribute('disabled', "")
            heart.removeAttribute('disabled', "")
            pause.innerHTML = 'pause'
            intervals = setInterval(runCounter, 1000)
        }
    }
 //like
 if (button == heart){
    let numberlikes = [];
    let liked = 0;
    let li = document.createElement('li')
    likes.appendChild(li)
    li.innerText =`${count} has been liked  `

}

//Comments
 if (button == submit){
    let p = document.createElement('p');
    p.innerHTML = `${myInput.value}`
    comments.appendChild(p)
    p.innerHTML = `${myInput.value}`
    comments.appendChild(p)
   myInput.value = "";

}

}

function ResetIntervals(){
    clearInterval(intervals)
}

//allbuttons functionalities
selectedButton.forEach(button =>{
    button.addEventListener('click', (e)=>{
        e.preventDefault(button)
        changeCounter(button)
        })
})
