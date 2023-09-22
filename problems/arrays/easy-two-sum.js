var twoSum = function(nums, target) {
    for(i = 0; i < nums.length; i++) {
        for(j = i; j < nums.length; j++) {
            if(i !== j) {           
                if(nums[i] + nums[j] === target) {
                    return[i,j]
                }
            }
        }
    }
};