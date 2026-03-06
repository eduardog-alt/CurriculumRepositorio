// HEADER DIMINUIR NO SCROLL

const header = document.querySelector(".hero")

window.addEventListener("scroll", () => {

if(window.scrollY > 80){
header.classList.add("small")
}else{
header.classList.remove("small")
}

})


// TOOLTIPS DAS SKILLS

document.querySelectorAll(".skill").forEach(skill => {

skill.addEventListener("click", function(e){

e.stopPropagation()

// fecha outros tooltips
document.querySelectorAll(".skill").forEach(s=>{
if(s !== skill){
s.classList.remove("active")
}
})

// abre ou fecha o atual
skill.classList.toggle("active")

// corrigir tooltip saindo da tela
const tooltip = skill.querySelector(".tooltip")

if(tooltip){

tooltip.style.left = "50%"
tooltip.style.right = "auto"
tooltip.style.transform = "translateX(-50%)"

const rect = tooltip.getBoundingClientRect()

if(rect.right > window.innerWidth){

tooltip.style.left = "auto"
tooltip.style.right = "0"
tooltip.style.transform = "none"

}

if(rect.left < 0){

tooltip.style.left = "0"
tooltip.style.transform = "none"

}

}

})

})


// FECHAR TOOLTIP AO CLICAR FORA

document.addEventListener("click", function(){

document.querySelectorAll(".skill").forEach(skill=>{
skill.classList.remove("active")
})

})


// CARDS DE PROJETOS

function toggleCard(card){

const cards = document.querySelectorAll(".card")

cards.forEach(c=>{
if(c !== card){
c.classList.remove("active")
}
})

card.classList.toggle("active")

}