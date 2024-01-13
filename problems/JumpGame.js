function canJump(nums) {
    if (nums[0] === 0) {
        return false;
    }
    var jumpPower = nums[0];
    var nextIndex = nums.indexOf(jumpPower) + 1;
    do {
        for (var j = 0; j < jumpPower; j++) {
            if (nums[nums.indexOf(nextIndex) + j] > nums[nextIndex]) {
                jumpPower = nums[nums.indexOf(nextIndex) + j];
            }
        }
        nextIndex = nums.indexOf(jumpPower) + 1;
        if (jumpPower <= 0) {
            return false;
        }
    } while (nextIndex > nums.length - 1);
    return true;
}
//while nextIndex(trenutni 3) !== 7
//[2,3,   4,1,1,2,1,4]
// jumpPower = 4
// nextIndex = 3
console.log(canJump([3, 2, 1, 0, 4]));
