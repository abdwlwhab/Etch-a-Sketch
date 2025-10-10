const container = document.querySelector('.container'); 

function makeDivs(num){ //
    if (num>100){
        return alert("you should chooes from 1 to 100")
    }
    container.textContent = ""; 

    const total = num * num;

    // حجم الكونتينر
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // كل div لازم ياخد جزء متساوي
    const sizeW = containerWidth / num;
    const sizeH = containerHeight / num;

    for(let i=0; i<total; i++){
        let div = document.createElement('div');
        div.classList.add('child');
        div.style.width = sizeW + "px";
        div.style.height = sizeH + "px";
        container.appendChild(div);
    }
    //change div colore
    const hover = document.querySelectorAll('.child')
    hover.forEach(div => {
    div.addEventListener('mouseenter', () => div.style.background = 'gray');
    });
    
}

makeDivs(3)



