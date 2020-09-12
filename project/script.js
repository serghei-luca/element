let obiect ={
    buget:0, timeData:0, 
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings: false,  
};
let date = new Date();

let inp = prompt("Care e bugetul Dvs lunar?", '0 USD');
obiect.buget=parseFloat(inp);
obiect.bugetPerDay = obiect.buget/30;


inp = prompt("Indicati data in format YYYY-MM-DD", date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate());
obiect.timeData=new Date(inp);
let tem ='';
for(let i=0;i<2;i++){
    
    let a = prompt(tem+"Dati o alta data in care ati cheltuit:", new Date().toString("YYYY-MM-DD")),
    b = prompt("Care e bugetul din acea lună?", '0 USD');
    
    if(a!=null && b!=null && a!='' && b!=''){
        obiect.expenses[a]=parseFloat(b);
        tem='';
    } else{
        tem = 'Sorry, dar trebuie să vă conformați!\n';
        i--;
    }
}

if(obiect.bugetPerDay<=100){
    console.log('Nivel consum minimal');
}else if(obiect.bugetPerDay>100 && obiect.bugetPerDay<2000){
    console.log('Nivel consum mediu');
}else if (obiect.bugetPerDay>2000){
    console.log('Nivel consum mare');
}else{
    console.log('Buget tip gresit: '+ obiect.buget);
}


let sb = "Buget lunar: "+obiect.buget+"<br>";
sb+="Data: "+obiect.timeData+"<br>";
sb+=Object.entries(obiect.expenses)+"<br>";
sb+="<p>Bugetul dvs zilnic este:"+obiect.bugetPerDay+" USD</p>";
console.log(sb);
var el = document.getElementById("demo");
if(el){
    el.innerHTML=sb;
}


