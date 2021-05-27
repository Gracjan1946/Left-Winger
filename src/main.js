


const btn = document.querySelector('main.container button');
const container = document.querySelector('main.container');
const form = document.querySelector('main.form');
const header = document.querySelector('nav');
btn.addEventListener('click',()=>{
container.style.zIndex='-2';
container.style.opacity='0';
header.style.opacity='0';
form.style.zIndex='1';
form.style.opacity='1';
form.style.display='flex';
});



// //Button
// const slide = document.querySelector('main.container button');
// const hover = () => {
// let width = slide.offsetWidth;
// slide.style.boxShadow = `inset ${width-2}px 0 0 0 #fff`;
//  }
//  slide.addEventListener('mouseenter', hover);



// Home
const home = document.querySelector('img.logo');
home.addEventListener('click',()=>{
    container.style.zIndex='1';
container.style.opacity='1';
header.style.opacity='1';
form.style.zIndex='-2';
form.style.opacity='0';
form.style.display='flex';
})




// Checkout
const quantity = document.querySelector('section.cart input');
const kwota = document.querySelector("input[name='KWOTA']");
const data= document.querySelectorAll("input[name='data']");
const dane = document.querySelector("input[name='DANE_OSOBOWE']");
const price = document.querySelector('span.price');
const amount = document.querySelector('span.amount');

const checkout = () => {   
    const quantityValue= parseInt(quantity.value);
    if(Number.isInteger(quantityValue) && 1<=quantityValue && quantityValue<=10){
    let cost = (quantityValue*29.99 + 8.50).toFixed(2);
    kwota.value = cost;
    price.textContent = (quantityValue*29.99).toFixed(2)+"zł";
    amount.textContent = ((quantityValue*29.99)+8.50).toFixed(2)+"zł"
    }else if(quantityValue>10 || quantityValue==0){
        alert('Podaj liczbę z określonego limitu');
    }else{
        alert('Podaj liczbe całkowitą');
    }
}

const wpisywanie = (e) => {
    e.addEventListener('input',()=>{
let imie = data[0].value;
let ulica = data[1].value;
let kod = data[2].value;
let miasto = data[3].value;
let telefon = data[4].value;
dane.value=`Imie i Nazwisko: ${imie},
 Ulica: ${ulica}, 
 Kod: ${kod}, 
 Miasto: ${miasto}, 
 Telefon: ${telefon}`;
    })
};
data.forEach(wpisywanie);
checkout();
quantity.addEventListener('input',checkout);

//Generator idzamowienia

const code = document.querySelector("input[name='ID_ZAMOWIENIA']");

const codesGenerator = () => {
    for(let i=0;i<4;i++){
            code.value += (Math.random()*9).toFixed();
    }
}
codesGenerator();