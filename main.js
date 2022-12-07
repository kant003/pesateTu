import './style.css'

document.querySelector('#weight').addEventListener('input', recalculate)
document.querySelector('#height').addEventListener('change', recalculate)

function recalculate(){
    const height = document.querySelector('#height').value
    const weight = document.querySelector('#weight').value
    document.querySelector('#weightValue').innerHTML = weight 
    const imc = calculateImc(height,weight)
    const theClass = calculateClass(imc)
    document.querySelector('#result').innerHTML=imc.toFixed(2) + ' ' + theClass
}

function calculateImc(height, weight){
    return weight/(height/100)**2
}

function calculateClass(imc){
    if(imc < 18.5) return 'peso bajo'
    if(imc < 25) return 'normal'
    if(imc < 30) return 'sobrepeso'
    return 'obesidad'
}