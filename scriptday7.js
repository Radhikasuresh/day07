A.Get all the countries from the Asia continent /region using the Filter function

var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all');
request.send();
request.onload=function (){
    var result=JSON.parse(request.response);
    const asia=result.filter((ele)=>ele.region==='Asia');
    console.log(asia);
}

B.Get all the countries with a population of less than 2 lakhs using Filter function

var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all');
request.send();
request.onload=function (){
    var result=JSON.parse(request.response);
    var res=result.filter((ele)=>ele.population<200000);
    console.log(res);
}

C.Print the following details name, capital, flag using forEach function

var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all');
request.send();
request.onload=function (){
    var result=JSON.parse(request.response);
   result.forEach((ele) =>console.log(ele.name,ele.capital,ele.flag));
}

D.Print the total population of countries using reduce function

var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all');
request.send();
request.onload=function (){
    var result=JSON.parse(request.response);
   result.forEach((ele) =>console.log(ele.name,ele.capital,ele.flag));
   var res= result.reduce((a,b)=>a+b.population,0);
   console.log(res);
}

E.Print the country which uses US Dollars as currency.

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v2/all")
xhr.send();
xhr.onload = () => {
    let data = JSON.parse(xhr.response)
    let answer = data.filter((dummy) => (dummy.currencies !== undefined))
    let realanswer = answer.filter((dollar) => (dollar.currencies[0].name === "United States dollar"))
    console.log(realanswer)
}