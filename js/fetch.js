
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

        profilphoto.src = "assets/img/coder.jpg"

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


;(async function () {
    let response = await fetch("http://localhost:1337/experiences", {
        headers:{
            "Content-type":"aplication/json"
        }
    })
    response = await response.json()
    for(let i of response) {
        let div = document.createElement("div")
        let div2 = document.createElement("div")
        let div3 = document.createElement("div")
        let h6 = document.createElement("h6")
        let span = document.createElement("span")
        let span2 = document.createElement("span")
        let p = document.createElement("p")
        div.classList.add("timeline-content")
        div2.classList.add("mb-1")
        p.classList.add("mb-1")
        h6.classList.add("font-weight-600","font-size-15","mb-1")
        div3.classList.add("font-size-13","text-alt","mb-1")
        span.classList.add("fa","fa-calendar","mr-2","text-muted")
        span2.classList.add("current")
        h6.textContent = i.profession
        span2.textContent = "current"
        
        p.textContent = i.about
        div2.appendChild(h6)
        
        div2.appendChild(div3)
        div3.appendChild(span)
        div3.textContent = i.date + " - "
        div3.appendChild(span2)
        div.appendChild(div2)
        
        div.appendChild(p)
        ex.appendChild(div)
    }
})()


;(async function () {
    let response = await fetch("http://localhost:1337/educations", {
        headers:{
            "Content-type":"aplication/json"
        }
    })
    response = await response.json()
    for(let i of response) {
    
        let div = document.createElement("div")
        let div2 = document.createElement("div")
        let div3 = document.createElement("div")
        let h6 = document.createElement("h6")
        let span = document.createElement("span")
        // let span2 = document.createElement("span")
        let p = document.createElement("p")
        div.classList.add("timeline-content")
        div2.classList.add("mb-1")
        p.classList.add("mb-1")
        h6.classList.add("font-weight-600","font-size-15","mb-1")
        div3.classList.add("font-size-13","text-alt","mb-1")
        span.classList.add("fa","fa-calendar","mr-2","text-muted")
        h6.textContent = i.name
        
        p.textContent = i.about
        div2.appendChild(h6)
        
        div2.appendChild(div3)
        div3.appendChild(span)
        div3.textContent = i.date
        div.appendChild(div2)
        
        div.appendChild(p)
        edu.appendChild(div)
    }
})()


;(async function () {
    let response = await fetch("http://localhost:1337/portfolios", {
        headers:{
            "Content-type":"aplication/json"
        }
    })
    response = await response.json()
    console.log(response);
    for(let i of response) {
    
        let div = document.createElement("div")
        let div2 = document.createElement("div")
        let a = document.createElement("a")
        let span1 = document.createElement("span")
        let span2 = document.createElement("span")
        let span3 = document.createElement("span")
        let div3 = document.createElement("div")
        let div4 = document.createElement("div")
        let img = document.createElement("img")

        div.classList.add("col-lg-4","mb-5")
        div2.classList.add("item","web")
        a.classList.add("radius-1","shadow-inner","hover-effect","d-block")
        span1.classList.add("hover-effect-container")
        span2.classList.add("hover-effect-icon")
        span3.classList.add("fas","top-icon","fa-eye")
        div3.classList.add("p-2")
        div4.classList.add("shadow","radius-1")
        img.classList.add("radius-1")
        a.href = i.href
        img.src = i.imgSrc 
        a.target = "__BLANK"
        div.appendChild(div2)
        div2.appendChild(a)
        a.appendChild(span1)
        a.appendChild(span2)
        a.appendChild(span3)
        a.appendChild(div3)
        div3.appendChild(div4)
        div4.appendChild(img)

     port.appendChild(div)
    }
})()