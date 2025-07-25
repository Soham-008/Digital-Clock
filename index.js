function updateclock(){
    const now= new Date()
    let hr =now.getHours()
    const meridium = hr>=12 ? "PM": "AM"
    hr = hr%12
    hr =hr.toString().padStart(2,0)

    const min = now.getMinutes().toString().padStart(2,0)
    const sec = now.getSeconds().toString().padStart(2,0)
     const time = `${hr}:${min}:${sec } ${meridium}`
     document.getElementById("clock").textContent = time


}
updateclock()
setInterval(updateclock, 1000)

