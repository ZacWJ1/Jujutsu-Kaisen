document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const characterName = document.querySelector('input').value
    try{
        const response = await fetch(`https://jujutsu-kaisen-api.onrender.com/api/${characterName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.name
        document.querySelector('h3').innerText = data.equipment
        document.querySelector('.ability').innerText = data.ability
    }catch(error){
        console.log(error)
    }
}