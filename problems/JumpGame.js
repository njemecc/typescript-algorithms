// function canJump(nums: number[]): boolean {
//   if (nums[0] === 0) {
//     return false;
//   }
//   let jumpPower = nums[0]; //2
//   let nextIndex = 1; //1
//   let dummyMax = nums[nextIndex]; //2
//   let dummyIndex = nextIndex;
//   //permutuje sa sledecim u ovom slucaju 4
//   do {
//     if (jumpPower <= 0) {
//       return false;
//     }
//     if (nums.length - 1 - nums.indexOf(jumpPower) <= jumpPower) {
//       return true;
//     }
//     for (let j = 0; j <= jumpPower; j++) {
//       if (nums[nextIndex + j] >= dummyMax) {
//         dummyMax = nums[nextIndex + j];
//         dummyIndex = nextIndex + j + 1;
//       }
//     }
//     //update RESET
//     jumpPower = dummyMax;
//     nextIndex = dummyIndex;
//     console.log("JP", jumpPower);
//     console.log("NI", nextIndex);
//   } while (nextIndex != nums.length - 1);
//   return true;
// }
function canJump(nums) {
    if (nums.length === 1) {
        console.log("c");
        return true;
    }
    if (nums[0] === 0) {
        return false;
    }
    var jumpPower = nums[0];
    var nextIndex = 1;
    var dummyMax = nums[nextIndex];
    var dummyIndex = nextIndex;
    var counter = 0;
    while (1 == 1) {
        if (jumpPower <= 0) {
            return false;
        }
        if (nextIndex === nums.length - 1 && nums[nextIndex] > 0 && jumpPower > 0) {
            console.log(nums[nextIndex]);
            console.log("JAM", jumpPower);
            console.log("a");
            return true;
        }
        if (nums.length - 1 - nums.indexOf(jumpPower) <= jumpPower) {
            console.log("b");
            return true;
        }
        if (jumpPower === 1) {
            nextIndex = nextIndex + 1;
            jumpPower = nums[nextIndex - 1];
            dummyMax = nums[nextIndex];
            dummyIndex = nextIndex;
        }
        if (jumpPower === 0) {
            return false;
        }
        for (var i = 1; i < jumpPower; i++) {
            if (jumpPower === 0) {
                return false;
            }
            if (jumpPower === 1) {
                console.log("ee", jumpPower);
                nextIndex = nextIndex + 1;
                jumpPower = nums[nextIndex - 1];
                dummyMax = nums[nextIndex];
                dummyIndex = nextIndex;
            }
            if (jumpPower > 1) {
                if (nums[nextIndex + i] >= dummyMax) {
                    console.log("usao u if");
                    counter++;
                    dummyMax = nums[nextIndex + i];
                    dummyIndex = nextIndex + i + 1;
                }
                else if (counter === 0) {
                    nextIndex = nextIndex + 1;
                    jumpPower = nums[nextIndex - 1];
                    dummyMax = nums[nextIndex - 1];
                    dummyIndex = nextIndex;
                    //resetujemo i
                    i = 1;
                }
            }
            console.log("1", nums[nextIndex + 1]);
            console.log("dummyMax", dummyMax);
        }
        jumpPower = dummyMax;
        nextIndex = dummyIndex;
        console.log("JP", jumpPower);
        console.log("NI", nextIndex);
    }
    //nepotrebno
    return true;
}
//JM = 1
//NI = 2
console.log(canJump([1, 2, 3]));
