# Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

Note:

* You may not use the same element twice.
* Only one valid answer exists.
* You may assume that each input would have exactly one solution.
* You can return the answer in any order.

Constraints:

```
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
```

Bonus: 

Improve your algorithm to be less than O(n^2) time complexity.

**Result Examples**: 

Example 1:
``````
Input: nums = [2,7,11,15], target = 9
Output: [0,1] (because nums[0] + nums[1] == 9)
``````

Example 2:

```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

Example 3:
```
Input: nums = [3,3], target = 6
Output: [0,1]
```

**Initial Solution:**
```
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
```


