
let sayac= 12

do {
    console.log("Cohort16", sayac)
    sayac++;

console.log(sayac);
} while (sayac<=10)

console.log("Dongu Bitti");

//? Ornek
let devam = ""
do {

    let vize = prompt ("Lutfen vize notunu giriniz")
    let final = prompt ("Lutfen final notunu giriniz")
    let ortalama = Number(vize)*0.3+Number(final*0.7)
    
    sonuc= ortalama>= 50 ? `${ortalama} ile Gecti` : `${ortalama} ile Kaldi`
    console.log(sonuc);
    
    devam = prompt ("hesaplamaya devam etmek ister misiniz? e/h")


} while (devam=== "e" || devam=== "E")
    console.log("uygulama kapaniyor");




