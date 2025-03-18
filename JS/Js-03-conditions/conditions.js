console.log("*** CONDITIONS ***");


//! Ornek 1
// const num1 = + prompt ('Bir sayi giriniz')
// const num1 = Number(prompt ('Bir sayi giriniz') ) 

// console.log(num1, typeof num1);

const num1 = 5
// console.log(num2, typeof num2);

// console.log('Toplam:', num1+num2); //? String birlestirme (Concatination)


if (num1<0) {
    console.log("Girilen sayi negatiftir")
} else if (num1>0) {
    console.log("Girilen sayi pozitiftir")
} else {
    console.log("Girilen sayi O'a esittir")
}

//! Ornek 2

// const sayi1=9
// const sayi2=4.1
// const sayi3='4.1'



//? 1.yontem build-in fonksiyon yardimi ile 


// const enbuyuk = Math.max (sayi1, sayi2, sayi3,)
// console.log(enbuyuk);

//? 2. Yontem Nested If

// if (sayi1>=sayi2) {
//     if (sayi1>=sayi3) {
//         console.log("Enbuyuk:", sayi1);
//     } } 
    
//     if (sayi2>=sayi1) {
//         if (sayi2>=sayi3) {
//             console.log("Enbuyuk:", sayi2);
//         }}


//     if (sayi3>=sayi1) {
//         if ( sayi3>=sayi2) {console.log("Enbuyuk:", sayi3);}}
    
//? 3. Yontem Logic Operatorler

// if (sayi1>=sayi2 && sayi1>=sayi3) {
    
//     console.log("Enbuyuk:", sayi1);
// }else if(sayi2>=sayi1 && sayi2>=sayi3) {
//     console.log("Enbuyuk:", sayi2);
// } else if (sayi3>=sayi1 && sayi3>=sayi2) {
//     console.log("Enbuyuk:", sayi3);
// }
// else { console.log("Yanlis islem");}

// console.log(sayi2===sayi3); //? 3'lu operatorler type kontrolu yapar. 

// console.log(sayi2==sayi3);

//? 4. Yontem Logic Operatorler

const sayi1=7
const sayi2=1
const sayi3=11

let enbuyuk=sayi1

if(sayi2>enbuyuk){enbuyuk=sayi2

}

if(sayi3>enbuyuk){
    enbuyuk=sayi3
}

console.log('en buyuk:', enbuyuk);

// let x= Number (prompt ("Bir sayi giriniz"))
// console.log(x);
// let y= Number (prompt("Bir sayi daha giriniz"))
// console.log(y);

// const islem= "carpma\nBolme\nToplama\nCikarma\n"
// let z= String (prompt("Bir islem seciniz:\n" +islem))
// console.log(z);


// if (z=="carpma") {console.log("Sonuc:" , x*y)}
// else if(z== "Bolme"){console.log("Sonuc:" , x/y)}
// else if(z== "Toplama"){console.log("Sonuc:" , x+y)}
// else if (z== "Cikarma"){console.log("Sonuc:" , x-y)}

// const yas=20
// const cinsiyet="Erkek"
// const saglikli= true

// const kosul= yas>=18 && cinsiyet.toLocaleLowerCase()==="erkek" && saglikli === true

// if (kosul === true) {
//     console.log('askerlik yapmali')}
//     else console.log("Askerlik yapmasi gerekmez")

    // *****************************
    // TERNARY
    // ******************************

const yas = 22

yas>=18 ? console.log("Askerlik Yapmali") : console.log("Askerlik yapmaz")


// *******************************
// Short-Circuit
// *****************************

let salary= 40000
let year= 12

year>=10 && (salary = salary*1.5)
console.log("MAAS:", salary);

// ? tek durum varsa short circuit
// ? 2 durum var ise ternary
// ? 3-6 arasi durum var ise if-else
// ? 6 dan fazla ise switch-case 

//! || operatoru false ise yanindaki ifadeyi calistirir

const sene = 14
let result = "ahmet"

sene>=18 || (result = "cocuk")

console.log(result);