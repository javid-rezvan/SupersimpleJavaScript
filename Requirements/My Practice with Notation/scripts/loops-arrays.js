function doubleArray(nums){
    const numsDoubled=[];
    for(let i=0;i<nums.length;i++){
        const num=nums[i];
        if(num === 0){
            return numsDoubled;
        }
        numsDoubled.push(num*2);
    }
    return numsDoubled;
}

console.log(doubleArray([2,4,6,10,0,8]));

//Another way to loop array
['make dinner',
'wash dishes',
'watch youtube'
].forEach(function(value){
    console.log(value);
});

const array1=[1,'salam','rezvan'];
array1.forEach(function(value){
  console.log(value);
});