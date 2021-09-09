var request= new XMLHttpRequest();
request.open('GET', 'http://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    // method:1
    // for(var i in data)
    // console.log(data[i].name +":"+data[i].flag+":"+data[i].capital);
    // var res=data.reduce((acc,element) => acc+element.population,0);
    // console.log(res);
    
    //method2:
    // var result=data.reduce((a,b)=>{
    //     return a+b.population;
    // },0);
    // console.log(result);
    
        

}


var student=[{
    name:"divya",
    marks:50
},
{
    name:"pavan",
    marks:59
},
{
    name:"teju",
    marks:100
}
];

var res=student.filter((mar)=>mar.marks>60).map((ele)=>ele.name);
var sum=student.reduce((acc,ele)=>{
return acc+ele.marks
},0)

console.log(res);
console.log(sum)
