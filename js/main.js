

document.querySelector('button').addEventListener('click', Pueblos)

async function Pueblos(){
    const flyIn = document.querySelector('#dropDown').value
        try{
    const res = await fetch(`https://pueblos-magicos-api.herokuapp.com/api/PueblosMagicos/${flyIn}`)
    const data = await res.json()
    console.log(data)
    document.querySelector('h2').innerText = data.Name
    }catch(err){
        console.log(err)
    }
}