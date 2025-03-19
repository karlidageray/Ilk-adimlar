// Switch Case Ornek: Hesap Makinesi

const s1 = Number (prompt ("Birinci sayiyi giriniz:"))

const islem= prompt ("Islemi giriniz: +, -, /, *")

const s2= Number (prompt ("Ikinci sayiyi giriniz"))

if(isNaN (s1) || isNaN(s2)) { //? null, undefined, "", false, NaN, Boolean (0) => falsy 5'li
    alert ("Lutfen gecerli bir sayi giriniz")
}

if(islem===`/`&& s2===0) {
    alert ('Sifira bolme hatasi')
}

let yekun =0

switch(islem) {
    case "+" :
        yekun=s1+s2
    break;

    case "-" :
yekun=s1-s2
break;
case "/" :
        yekun=s1/s2
    break;
    case "*" :
        yekun=s1*s2
    break;

    default :
    alert ("yanlis islem")
    break
}


console.log(`${s1} ${islem} ${s2} = ${yekun}`);

console.log(typeof yekun);
Math.trunc (yekun)