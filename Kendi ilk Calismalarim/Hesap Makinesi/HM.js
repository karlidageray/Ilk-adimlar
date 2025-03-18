let sayi1=null;
let sayi2=null;
let islem=null;
let sonuc=null;

let butonlar=document.querySelectorAll(".rakam1, .rakam2, .topla, .cikar")

butonlar.forEach (function(buton) {

    buton.addEventListener("click", function(event){
        if (event.target.classList.contains ("rakam1")) {
            sayi1=1;
            document.querySelector (".ekran").textContent=sayi1;
            console.log("1 tiklandi");
        }
        else if (event.target.classList.contains("rakam2")) {
            sayi2 = 2;
            document.querySelector (".ekran").textContent=sayi1;
            console.log("2 tiklandi");
        } else if (event.target.classList.contains("topla")) {
            islem = "toplama";
            document.querySelector (".ekran").textContent="+";
            console.log("Toplama seçildi");
        } else if (event.target.classList.contains("cikar")) {
            islem = "cikarma";
            document.querySelector (".ekran").textContent="-";
            console.log("Çikarma seçildi");
        }
    });
});

let esittirButon= document.querySelector(".esittir")

esittirButon.addEventListener ("click", function(){
    console.log("esittir tiklandi");
})

esittirButon.addEventListener("click", function(){
    if(islem==="toplama") {
        sonuc =sayi1+sayi2
    } else if (islem==="cikarma"){
        sonuc= sayi1-sayi2
    }
    document.querySelector(".ekran").textContent=sonuc
})


let resetButton=document.querySelector(".reset")

resetButton.addEventListener("click", function(){

    sayi1=null
    sayi2=null
    islem=null
    sonuc=null
    console.log("Makina resetlendi");

document.querySelector(".ekran").textContent= ""
console.log("Ekran temizlendi");
})