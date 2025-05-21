let numberUp = document.querySelectorAll(".numberUp")
let arr = Array.from(numberUp)
arr.map((items)=>{
    let count = 0
    function counter(){
        count++
        items.innerHTML = count
        if(count == items.dataset.number){
            clearInterval(stop)
        }
    }

    let stop = setInterval(function(){
        counter()
    },4000/items.dataset.number)
})


// let numberUp = document.querySelectorAll(".numberUp")
// let arr = Array.from(numberUp)
// let count = 0
// arr.map((items)=>{
//     function counter(){
//         count++
//         items.innerHTML = count
//         if(count == items.dataset.number){
//             clearInterval(stop)
//         }
//     }

//     let stop = setInterval(function(){
//         counter()
//     },1000/items.dataset.number)
// })


