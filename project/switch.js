let a = 123;

switch (a){
    case a>=0: console.log("a >= 0");break;//nu se executa never! - tre Number in loc de boolean 
    case 123: console.log("a = 123");break;//aceasta doar se executa
    case a<123: console.log("a<123");break;//nu se executa never! - tre Number in loc de boolean
    default: console.log("hz......");
}

a = true;

switch (a){
    case a > 0: console.log("a > 0");break;//aceasta doar se executa <=> 1 > 0
    case 123: console.log("a = 123");break;//false
    case a<123: console.log("a<123");break;//1<123 -aici nu ajunge din primul case
    default: console.log("hz......");
}
