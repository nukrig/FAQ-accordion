import {faqs} from "./data.js"
const faqsElement = document.getElementById('faqs')

for(let element of faqs){
    const li = document.createElement('li')
    const arrow = document.createElement('i')
    arrow.setAttribute('class', 'fa-solid fa-arrow-down')
    arrow.style.float='right'
    arrow.style.color='orangered'
    arrow.style.transition='.7s'
    li.textContent=element.heading
    li.appendChild(arrow)
    const p = document.createElement('p')
    p.textContent=element.paragraph
    li.appendChild(p)
    faqsElement.appendChild(li)
    li.addEventListener('click',()=>{
        if(p.style.display=='block'){
            p.style.display='none'
            li.style.fontWeight='normal'
            arrow.style.transform='rotate(0deg)'
        }else{
            p.style.display='block'
            li.style.fontWeight='bold'
            p.style.fontWeight='normal'
            arrow.style.transform='rotate(180deg)'
        }
    })
}
