x=15
ad='Helen'
yas=40

console.log(yas);

// JAVASCRIPT DE DEGISKENLER
// const let
// ES6dan sonra gelen yapilardir
// Degisken tanimlama icin kullanilir

// Const 
// const:constant : sabit

const tckimlik=12223323398
// tckimlik=23423443434342424

// Alinacak Hata
// 2-variables.js:16 Uncaught TypeError: Assignment to constant variable.
// at 2-variables.js:16:9

// LET

let toplam=0
x=60
y=70

toplam=x+y
console.log(toplam);

// GLOBAL ALAN
// Programin icinde her ortamdan ulasilanine ortak alandir.

// Local alan 
// Bir block icindir. {} ile ifade edilen bolumler bloklardir. If blogu, while blogu, for

// Burasi global alan
const sayi=5

{
// Local alan
console.log(sayi);
const pi=3.14
console.log(pi);
}

console.log(pi);

