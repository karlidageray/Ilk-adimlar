/* -------------------------------------------------------------------------- */
/*                                 DATA TYPES                                 */
/* -------------------------------------------------------------------------- */
// bir degiskenin turunu gorebilmek icin typeof dan faydalanilir

x=15.34
console.log(typeof x);

// Primitive data turleri

// 1111Number data type

yas=40
sayi=56.87
console.log(yas);

sonuc=(sayi*5)+6
console.log(sonuc);

const pi=Math.PI
console.log(pi);


// Ondalikli kismi duzenlemek icin kullanilan yontemler
// round
let yuvarlanmisSonuc=Math.round(sonuc)
console.log(yuvarlanmisSonuc);

// truch
let truncSonuc=Math.trunc (sonuc)
console.log(truncSonuc);

// virgulden sonra gelen ondalikli kisimda kac hane gostermesini isteiyorsaniz toFixed (sayi)

let fixedsonuc= sonuc.toFixed (2)
console.log(fixedsonuc);


// RANDOM metodu
// rastgele sayi uretmek icin kullanilir
// 0-1 arasinda bir sayi uretir

console.clear()
console.log(Math.round(Math.random()*100))

console.log(Math.pow(5,3));
console.log(Math.sqrt(144))