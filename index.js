function btnClick(){
    let res = document.getElementById("child");
    res.innerText = "Otherwise no action will be taken against you .....Hello PrepBuddy  .... Have a Good Day !!!";
    res.style.color = "lime";
    res.style.fontSize = "1rem";
    res.style.backgroundColor = "black";
    res.style.textAlign ="center";
    res.style.borderRadius = "12px";
    res.style.padding = "0.5rem";
}
function changeColor(){
    let res = document.getElementById("text");
    res.innerText = "Hello PrepByte's";
    res.style.color = "lime";
    res.style.fontSize = "1rem";
    res.style.backgroundColor = "black";
    res.style.textAlign ="center";
    res.style.borderRadius = "12px";
    res.style.padding = "0.5rem";
}
function vertical() {
    let doc1 = document.getElementById("parent");
    doc1.style.flexDirection = "column";
}
function horizontal() {
    let doc2 = document.getElementById("parent");
    doc2.style.flexDirection = "row";
}
function changeColor(){
    let res = document.getElementById("heading");
    res.style.color = "red";
}
function changehead(){
    let res = document.getElementById("changeHeading");
    res.innerText = "Welcome to Elevation Academy";
}

function clk(){
    const date = new Date();
    let Hrs = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    let changeSlot;
    if (Hrs > 12) {
        changeSlot = "PM";
        Hrs -= 12;
    } else {
        changeSlot = "AM";
    }

    if (Hrs < 10)
    Hrs = "0" + Hrs;

    if (min < 10)
        min = "0" + min;

    if (sec < 10)
        sec = "0" + sec;
    
    const Hour = document.getElementsByClassName("hrs");
    Hour[0].innerHTML = `${Hrs} :`;
    
    const Min = document.getElementsByClassName("mins");
    Min[0].innerHTML = `${min} :`;
    
    const Sec = document.getElementsByClassName("secs");
    Sec[0].innerHTML = sec;
    
    const amPm = document.getElementsByClassName("meridian");
    amPm[0].innerHTML = changeSlot;
}
    
setInterval(() => {
    clk();
}, 1000);

function getOption(){
    var result=document.getElementById("text1");
    var result2=result.value
    document.getElementById("output").innerText=result2
}
 