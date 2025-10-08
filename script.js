const container = document.querySelector('.container'); 

function makeDivs(num){
    container.innerHTML = ""; // مسح القديم

    // عدد العناصر = num * num
    const total = num * num;

    for(let i=0; i<total; i++){
        let div = document.createElement('div');
        div.classList.add('child');
        container.appendChild(div);
    }

    // نحسب مقاس كل div = حجم الكونتينر ÷ num
    const size = 400 / num;  // لو الكونتينر 400x400
    
    const divs = document.querySelectorAll('.child');
    divs.forEach(d => {
        d.style.width = size + "px";
        d.style.height = size + "px";
    });
}

// هنا الدالة بترجع 8 → شبكة 8×8
makeDivs(2);
