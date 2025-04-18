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
// Bir sayiya ToFixed uygulandiginda sonucu stringdir. 

let fixedsonuc= sonuc.toFixed (2)
console.log(fixedsonuc);


// RANDOM metodu
// rastgele sayi uretmek icin kullanilir
// 0-1 arasinda bir sayi uretir

console.clear()
console.log(Math.round(Math.random()*100))

console.log(Math.pow(5,3));
console.log(Math.sqrt(144))
console.clear()

// String Data Type

ad='eray'

let str1='Merhaba dunya bugun \"17 ekim"'
let str2="merhaba dunya"
let str3=`merhaba ${ad}`
let str4=new String("merhaba dunya")
console.log(str1, str2, str3);
console.log(str4);
console.log(typeof str4);

console.log(str1[4]);

// string bu sekilde degistirilemez. 
// stringler immutabledir/ 
str1[4]= 'u'
str1="Merhaba Mars"
console.log(str1);

let kimlik=12312312322
let adsoyad='eray kar'

console.log("Personelimiz", adsoyad, "in Kimlik Numarasi", kimlik)

// Template Literal, String Literal
// Stringleri dinamik olaak kullanmayi saglar
// Stringler yazilirken degiskenlede kullanabilmemeizi saglar

console.log(`Personelimiz ${adsoyad}in 
    Kimlik Numarasi ${kimlik}`)

     console.clear()


    //  Boolean
    // true yada false degeri tutar 

    let deger=undefined
    console.log(Boolean(deger));

    let kontrol= (sifre='12x45')
    

    if (sifre=='12x5'){

        console.log('Sisteminiz acik')}

        else {console.log('sisteminiz kapali')
    }

    // ........................................

// NULL

let personel=null
console.log(typeof null);
console.log(null+5)

// UNDEFINED

let phonenumber;

console.log(phonenumber);

phonenumber='+905366555555'
console.log(phonenumber);
console.log(typeof phonenumber);

// NaN- Not a number
let n;

let result=n+15
console.log(result);

console.log(isNaN(result));