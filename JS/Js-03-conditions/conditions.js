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