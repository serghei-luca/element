let obiect ={
    buget:0, timeData:0, 
    expenses:{
        prop1:"",prop2:""
    },
    optionalExpenses:{

    },
    income:[],
    savings: false,  
};
let date = new Date();

let inp = prompt("Care e bugetul Dvs lunar?", '0 USD');
obiect.buget=parseFloat(inp);

inp = prompt("Indicati data in format YYYY-MM-DD", date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate());
obiect.timeData=new Date(inp);

inp = prompt("Mai am nevoie de ceva:\nDati o alta data in care ati cheltuit:", new Date().toString("YYYY-MM-DD"));
obiect.expenses.prop1=new Date(inp);
inp = prompt("Care e bugetul din acea lună?", '0 USD');
obiect.expenses.prop2=parseFloat(inp);

let sb = "Buget lunar: "+obiect.buget+"<br>";
sb+="Data: "+obiect.timeData+"<br>";
sb+=obiect.expenses.prop1+" : ";
sb+=obiect.expenses.prop2+"<br>";
sb+="<p>Bugetul dvs zilnic este:"+(obiect.buget/30)+" USD</p>";
console.log(sb);
var el = document.getElementById("demo");
if(el){
    el.innerHTML=sb;
}


