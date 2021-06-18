
;(async () => {
    let h3Name = document.querySelector("#h3Name")
    let dev = document.querySelector("#dev")
    let h1Name = document.querySelector("#h1Name")
    let bio1 = document.querySelector("#bio1")
    let bio2 = document.querySelector("#bio2")
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
    bio1.textContent = response.biografy1
    bio2.textContent = response.biografy2
    // console.log(bio1,bio2.textContent);
})()

;(async () => {
    let telegram = document.querySelector("#telegram")
    let phone = document.querySelector("#phone")
    let emaill = document.querySelector("#emaill")
    let namee = document.querySelector("#namee")
    let bio2 = document.querySelector("#bio2")
    let birth = document.querySelector("#birth")
    let city = document.querySelector("#city")
    let response = await fetch("https://resume-muhammad.herokuapp.com/infos",{
        headers:{
            "Content-type":"aplication/json"
        }
    })
    response = await response.json()
    let info = response[0]
    telegram.textContent = info.Telegram
    phone.textContent = info.Phone
    emaill.textContent = info.Email
    namee.textContent = info.Name
    birth.textContent = info.Birth
    city.textContent =  info.City

})()