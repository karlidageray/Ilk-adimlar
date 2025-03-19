//? 50 kisinin notunu girerek ortalamasini hesaplayan kodu yaziniz

// let sum=0
// let i=0

// for (i ; i<5; i++) {

//     const notlar= Number (prompt(`${i+1}. notunu giriniz:`))
//     sum= sum+notlar
//     console.log(sum);
// }

// console.log(`AVG: ${sum/ i} `)

// //? Aralik verme

// const n1=3
// const n2=5
// let sum=0

// if (n1>n2) {
//     console.log("n2 should be bigger than n1")
// } else {
//     for (let i=n1; i<=n2; i++) {
//         sum += i 
//     } console.log("SUM", sum);
// }

//? break - continue

for(let i=0; i<=10; i++) {


    if(i%2){
        break
    }
    console.log(i);
}