let submitBtn = document.getElementById("btn")
let container = document.querySelector(".container")
let ratingSection =document.querySelector(".ratingsection")
let ratingItems =document.querySelectorAll(".Item");
let isSelected = false
let final = ""
ratingSection.addEventListener("click", event => {
    if(event.target.id) {
        isSelected = true
        message(event.target.id)
    }
})

submitBtn.addEventListener("click", ()=>{
    if(isSelected) {
        render()
    } else {
        alert("Please, select a number rating, first!")
        
    }
    
})

ratingItems.forEach((item) => {
    item.addEventListener("click", () => {
        ratingItems.forEach((item) => item.classList.remove('active'))
        item.classList.add('active')
    })
})




function message(ratingvalue){
    final = `<div class="submission_section">
    <img src="./images/illustration-thank-you.svg" alt="">
    <div><p class="ratingvalue">You selected ${ratingvalue} out of 5</p></div>
    <h1>Thank you!</h1>
    <p >We appreciate you taking the time to give a rating.<br>
If you ever need more support, don't hesitate to<br>
get in touch!</p>
</div>`
}
function render() {
    container.innerHTML = final;
}