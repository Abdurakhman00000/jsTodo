const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const result = document.querySelector('#result')
const total = document.querySelector('#total')
let count = 0


btn.addEventListener('click', (e) => {
    // console.log(input.value);
    // result.innerHTML += `<li>${input.value}<li/>`

    if(input.value === '') return
    operationWithElements(input.value)
    input.value = ''
})



function operationWithElements (value) {
    count ++

    console.log(value);

    const li = document.createElement('li')
    const Delbtn = document.createElement('button')
    li.className = 'li'
    li.textContent = value

    Delbtn.className = 'deleteBtn'
    Delbtn.textContent = 'delete' 

    li.appendChild(Delbtn)

    Delbtn.addEventListener('click', (e) => {
        count --
        total.textContent = count

        // console.log(Delbtn);
        result.removeChild(li)
    })

    li.addEventListener('click', (e) => {
        li.classList.toggle('li-active')
        // Delbtn.style.background = 'black'
    })


    total.textContent = count;

    result.appendChild(li)
}



