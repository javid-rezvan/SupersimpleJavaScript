const function1=function(){
  console.log('hello');
}
console.log(typeof(function1));
function1(); // this line is very important

const object1={
    num:2,
    fun:function greeting(){
      console.log('hello');
    }

}
object1.fun();

/*
Again as long as there is a way to access greeting function for example using object1.fun()  then we don’t need this function name
*/

const object2={
  num:2,
  fun:function (){
    console.log('javid rezvan');
  }

}
object2.fun();

//Asynchronous Code

setTimeout(function(){
  console.log('Time Out');
},5000);

console.log('next line');
/*
next line
Time Out

So what’s happing here?why are they reversed.setTimeout setup a timer
and after 5 seonds it will call this function.
however it doesn’t actually wait for the 5 seconds to finish it
just set up the timer and immediately goes to the next line so that’s why this line is displayed first.so this is called asynchronous code.

Asynchronous Code won't wait for a line to finish
before going to the next line.

Synchronous Code will wait for one line to finnish
before going to the next line.

So all the code we’ve written in this course so far has been synchronous code.
In addition all the code inside this function:

setTimeout(function(){
  console.log('Time Out');
},5000);

Is also synchronous code.
*/
setTimeout(function(){
  console.log('timeout2');
  console.log('timeout3');
},5000);

/*
The code inside the function will still run line by line.it will wait for each line to finish before going to the next line and after 5 seconds it will display timeout2 followed by timeout3.

So don’t worry all the code that we normally write will be synchronous it will run line by line  as usuall.the only time that code becomes asynchronous is when we use certain features of javascript like setTimeout.so setTimeout is the only part that is Asynchronous.
*/

//very important
/*
So this allows our code to do other things while this timer is running in the background.and this is a similar to real life.if you set up a timer on your alarm clock you’re not going to stop and wait for the timer to finish.you’re going to go and do something else.asynchronous code is the exact same concept:
*/