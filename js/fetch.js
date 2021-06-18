;(async () => {
    let h3Name = document.querySelector("#h3Name")
    let dev = document.querySelector("#dev")
    let h1Name = document.querySelector("#h1Name")
    let response = await fetch("https://resume-muhammad.herokuapp.com/about-center",{
        headers:{
            "Content-type":"aplication/json"
        }
    })
    response = await response.json()


    h3Name.childNodes[0].textContent = response.name.split(" ")[0]
    h3Name.childNodes[2]. textContent = response.name.split(" ")[1]
    dev.textContent = response.dev
    h1Name.textContent = response.name
})()

;(async () => {
    let response = await fetch("https://resume-muhammad.herokuapp.com/us",{
        headers:{
            "Content-type":"aplication/json"
        }
    })
    response = await response.json()
    // for(let i of response) {
        // console.log();
    // }
})()