const arrowFunction1=()=>{
  console.log('hello');
}
arrowFunction1();

//Arrow Function with parameter

const arrowFunction2=(param)=>{
  console.log(param+1);
}
arrowFunction2(5);

//shortcut for Arrow Function with just 1 parameter

const arrowFunction3=param=>{
  console.log(param+2);
}
arrowFunction3(8);


const oneline1=()=>{
   return 2+3;
}

console.log(oneline1());

/*
So when an arrow function only has one line like this we can actually
put it on the same line as the arrow.and now that everything on the same
line the curly brackets are actually optional so we can remove them and
also remove the return statement:

*/
const oneline2=()=>2+3;
console.log(oneline2());

//Another place that we can use arrow function is inside an object

const object1={
 method:()=>{
 }
}

/*Even though we could save an arrow function inside an object
like this objects already have a shortcut for functions

*/
const object2={
  method(){
  }
 }