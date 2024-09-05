function timeupdate(){

    let hrs = document.getElementById('hrs')
    let sec = document.getElementById('sec')
    let min = document.getElementById('min')
    
    const time = new Date()
    
    hrs.innerHTML = time.getHours() < 10 ? "0" + time.getHours() : time.getHours()
    min.innerHTML = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()
    sec.innerHTML = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds()
}


setInterval(()=>{
    timeupdate()
},1000)





















// setInterval(()=>{
//    timeupdate()
// },1000)