const btn_color1 = document.getElementById("btn-color1");
const btn_color2 = document.getElementById("btn-color2");
const div_color1 = document.getElementById('color1');
const div_color2 = document.getElementById('color2');

const color_value1 = document.getElementById('color-value1');
const color_value2 = document.getElementById('color-value2'); 

const squareGradient = document.getElementById('square-gradient'); 
const squerePoints = document.getElementById('squere-points')
const btnDices = document.getElementById('btn-dices')

const deg = document.getElementById('deg')
const rangeDeg = document.getElementById('range-deg') 

var gradient = 0
var color1 = '#ffff'
var color2 = '#000000'
var degGradient = 90 

btn_color1.addEventListener('click', () => { 
    color1 = RandomColor()
    ChangeColors()
})    

btn_color2.addEventListener('click', () => {
    color2 = RandomColor()
    ChangeColors()
})   

var ChangeColors = () => {
        div_color1.innerHTML = ` ${color1} ` 
        div_color1.style.color = `${color1} `
        div_color1.style.textShadow = '1px 1px 1px #2b2b2b'
        div_color2.innerHTML = ` ${color2} `
        div_color2.style.color = `${color2} `
        div_color2.style.textShadow = '1px 1px 1px #2b2b2b' 

    color_value1.style.background = color1
    color_value2.style.background = color2
    squareGradient.style.background = `linear-gradient(${degGradient}deg, ${color1}, ${color2})`;
    deg.innerHTML = `${degGradient}deg`
    squerePoints.style.rotate = `${degGradient}deg` 
}


function RandomColor() {
    // Generar valores aleatorios para los componentes RGB
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
  
    // Convertir los valores RGB a formato hexadecimal
    var colorHex = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    return colorHex;
  }
  
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  

  btnDices.addEventListener('click', () =>{
    color1 = RandomColor()
    color2 = RandomColor()
    ChangeColors()
  })
  
rangeDeg.addEventListener('input', () => {
    degGradient = rangeDeg.value;
    ChangeColors();
    console.log('event');
})

document.getElementById("btn-copy").addEventListener("click", CopyGradient);
squareGradient.addEventListener('click', CopyGradient)

function CopyGradient() {
    var text = document.querySelector(".id-colors");
    var range = document.createRange();
    range.selectNode(text);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("Contenido copiado al portapapeles.");
}

const btnSave = document.getElementById('btn-save')
var colorSave = []

function ColorSave (){
    colorSave.push({'color1': color1, 'color2': color2})
    console.log(colorSave);
}

function SearchColorSave() {
    return colorSave.find(item => item.color1 == color1);
}

btnSave.addEventListener('click', async () =>{
    let color = SearchColorSave()
    console.log(color);
    if (color != undefined) {
        console.log('ESte ya esta papu');
        btnSave.innerHTML = '<i class="fa-regular fa-bookmark"></i>'
    }else{
        btnSave.innerHTML = '<i class="fa-solid fa-bookmark"></i>'
    }
    
    // await ColorSave()
})

