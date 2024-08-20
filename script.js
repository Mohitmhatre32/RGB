
    const r = document.getElementById("myRange1");
    const g = document.getElementById("myRange2");
    const b = document.getElementById("myRange3");

    
    const redValue = document.getElementById('redValue');
    const greenValue = document.getElementById('greenValue');
    const blueValue = document.getElementById('blueValue');

    const colorBox= document.getElementById('colorBox');

    function updateColor(){
        const red = r.value;
        const green = g.value;
        const blue = b.value;

        redValue.textContent=red;
        greenValue.textContent=green;
        blueValue.textContent=blue;

        const RGB = `rgb(${red}, ${green}, ${blue})`;
        const cv = document.getElementById('colorBox');
        document.body.style.backgroundColor=RGB;
        cv.textContent=RGB;
        

        
    }

    
    r.addEventListener('input', updateColor);
    g.addEventListener('input', updateColor);
    b.addEventListener('input', updateColor);
