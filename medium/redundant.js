function redundant(string){
    function redun2(){
        return string
    }
    return (redun2)
}

console.log(redundant("wgoops"));


//some arrow function stuff 

myName = function (){
  return "wgoops";
}

myName1 = () => { 
    return "wgoops";
}


myName2 = title => title+" wgoops";
console.log(myName2("mr."));