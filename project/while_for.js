let a = 0;

do{
    console.log(a);

} while(a++<1);                         //0 1

while(a++<3){
    console.log(a);                     //3
}
console.log("----------------------------");
for(let i=0; i<3; console.log(i++));    // 0 1 2

console.log("----------------------------");
for(let i=0; i<4; i++){
    if(i==2){
        continue;
    }
    if(i>2){
        break;
    }
    console.log(i);                     // 0 1
}
