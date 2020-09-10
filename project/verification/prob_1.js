
//Какое будет выведено значение
let x = 5; console.log( x++ );            //5

//Чему равно такое выражение
console.log([] + false - null + true);   //NaN => se incearca concatenare string

//Что выведет этот код
 let y = 1; let x = y = 2; console.log(x); //2

//Чему равна сумма 
console.log([ ] + 1 + 2);                   //12

//Что выведет этот код
 console.log( "1"[0] );                     //1

//Чему равно 
console.log(2 && 1 && null && 0 && undefined); //null => 2 && 1 = 1; 1&&null = null; 0&&undefined=0

//Есть ли разница между выражениями 
!!( a && b )
//и                                             // nu este diferentsa!
(a && b)

//Что выведет этот код
  console.log( null || 2 && 3 || 4 );  // 3 <=>   2&&3 = 3; 3||4 = 3; null || 3 = 3; 

a = [1, 2, 3]; b = [1, 2, 3]; 
//Правда ли что:
console.log(a == b)                             //false => 2 obiecte diferite

//Что выведет этот код
 console.log( +"Infinity" );                    //Infinity

//Верно ли сравнение
console.log("ё" > "яблоко")              //true    => se verifica fiecare caracter in UTF 
console.log("2" > "101")                 //true     => aceeasi problema
console.log(2 > "101")                      //false
console.log("2" > 101)                  //false
console.log(2 > 101)                    //false
//Чему равно 
console.log(0 || "" || 2 || undefined || true || falsе) //2
console.log(2 || true )                                 //2
console.log(true || 2)                                  //true
