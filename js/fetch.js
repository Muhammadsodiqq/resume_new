
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

    h3Name.childNodes[0].textContent = response.name?.split(" ")[0]
    h3Name.childNodes[2]. textContent = response.name?.split(" ")[1]
    dev.textContent = response.dev
    h1Name.textContent = response.name
    bio1.textContent = response.biografy1
    bio2.textContent = response.biografy2 

        profilphoto.src = "assets/img/programming.jpg"

})()

;(async () => {
    let ul = document.querySelector("#ul")
    let response = await fetch("https://resume-muhammad.herokuapp.com/infos",{
        headers:{
            "Content-type":"aplication/json"
        }
    })
    let arr = []
    response = await response.json()
    let info = response[0]
    for (let i in info) {
        if(i != "id" && i != "created_at" && i != "updated_at") {
            arr.push({[i]:info[i]});
        }
    }
    
    for(let i of arr) {
        let li = document.createElement("li")
        let span1 = document.createElement("span")
        let span2 = document.createElement("span")
        for(let x in i) {
            span1.classList.add("inf")
            span2.classList.add("value")
            span1.textContent = x
            span2.textContent = i[x]
            li.appendChild(span1)
            li.appendChild(span2)
            ul.appendChild(li)

        }
    }
    


})()

;(async () => {

    let response = await fetch("https://resume-muhammad.herokuapp.com/skills",{
        headers:{
            "Content-type":"aplication/json"
        }
    })
    response = await response.json()
    for(let i of response){
        let li = document.createElement("li")
        let h6 = document.createElement("h6")
        let div = document.createElement("div")
        let div2 = document.createElement("div")

        h6.classList.add("font-weight-600", "font-size-14", "text-uppercase")
        div.classList.add("progress", "mb-3")
        div2.classList.add("percentage")

        h6.textContent = i.skillname
        div2.style.width = i.skillFoiz

        li.appendChild(h6)
        div.appendChild(div2)
        li.appendChild(div)

        skills.appendChild(li)
    }
})()