const data_url='/data.json'
const faqsElement = document.getElementById('faqs')

let createFaqElement = (element)=>{
    const li = document.createElement('li')
    const arrow = document.createElement('img')
    arrow.setAttribute('src', '../images/icon-arrow-down.svg')
    arrow.style.float='right'
    li.textContent=element.heading
    li.appendChild(arrow)
    const p = document.createElement('p')
    p.textContent=element.paragraph
    li.appendChild(p)
    faqsElement.appendChild(li)
    li.addEventListener('click',()=>{
        if(p.style.display=='none'){
            p.style.display='block'
            li.style.fontWeight='bold'
            p.style.fontWeight='normal'
            arrow.style.transform='rotate(180deg)'
        }else{
            p.style.display='none'
            li.style.fontWeight='normal'
            arrow.style.transform='rotate(0deg)'
        }
    })
}

fetch(data_url)
.then((response)=>{
    return response.json()
}).then((data)=>{
    for(let element of data){
        createFaqElement(element)
    }
    })