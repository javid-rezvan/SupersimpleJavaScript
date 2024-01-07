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