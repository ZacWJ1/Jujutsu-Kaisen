document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const rapperName = document.querySelector('input').value
    try{
        const response = await fetch(`https://simple-rapper-api.herokuapp.com/api/${rapperName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data.name
        document.querySelector('h3').innerText = data.equipment
    }catch(error){
        console.log(error)
    }
} fetch(url)
.then(res => res.json()) // parse response as JSON
.then(data => {
 console.log(data)
 data.ability.forEach(obj => {
  console.log (obj.ability)
  const li = document.createElement('li')
  li.textContent = obj.name
  document.querySelector('.ability').appendChild(li)

})})