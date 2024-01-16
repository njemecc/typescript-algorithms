// function canJump(nums: number[]): boolean {
//   if (nums.length === 1) {
//     console.log("c");
//     return true;
//   }
//   if (nums[0] === 0) {
//     return false;
//   }
//   let jumpPower = nums[0];
//   let nextIndex = 1;
//   let dummyMax = nums[nextIndex];
//   let dummyIndex = nextIndex;
//   let counter = 0;
//   while (1 == 1) {
//     if (jumpPower <= 0) {
//       return false;
//     }
//     if (nextIndex === nums.length - 1 && nums[nextIndex] > 0 && jumpPower > 0) {
//       console.log(nums[nextIndex]);
//       console.log("JAM", jumpPower);
//       console.log("a");
//       return true;
//     }
//     if (nums.length - 1 - nums.indexOf(jumpPower) <= jumpPower) {
//       console.log("b");
//       return true;
//     }
//     if (jumpPower === 1) {
//       nextIndex = nextIndex + 1;
//       jumpPower = nums[nextIndex - 1];
//       dummyMax = nums[nextIndex];
//       dummyIndex = nextIndex;
//     }
//     if (jumpPower === 0) {
//       return false;
//     }
//     for (let i = 1; i < jumpPower; i++) {
//       if (jumpPower === 0) {
//         return false;
//       }
//       if (jumpPower === 1) {
//         console.log("ee", jumpPower);
//         nextIndex = nextIndex + 1;
//         jumpPower = nums[nextIndex - 1];
//         dummyMax = nums[nextIndex];
//         dummyIndex = nextIndex;
//       }
//       if (jumpPower > 1) {
//         if (nums[nextIndex + i] >= dummyMax) {
//           console.log("usao u if");
//           counter++;
//           dummyMax = nums[nextIndex + i];
//           dummyIndex = nextIndex + i + 1;
//         } else if (counter === 0) {
//           nextIndex = nextIndex + 1;
//           jumpPower = nums[nextIndex - 1];
//           dummyMax = nums[nextIndex];
//           dummyIndex = nextIndex;
//           //resetujemo i
//           i = 1;
//         }
//       }
//       console.log("1", nums[nextIndex + 1]);
//       console.log("dummyMax", dummyMax);
//     }
//     jumpPower = dummyMax;
//     nextIndex = dummyIndex;
//     console.log("JP", jumpPower);
//     console.log("NI", nextIndex);
//   }
//   //nepotrebno
//   return true;
// }
function canJump(nums) {
    var jumpPower = nums[0];
    var currIndex = 0;
    if (nums.length === 1) {
        return true;
    }
    while (true) {
        console.log("JP", jumpPower);
        console.log("CI", currIndex);
        if (jumpPower === 1) {
            currIndex = currIndex + 1;
            jumpPower = nums[currIndex];
        }
        if (jumpPower >= nums.length - 1 - currIndex) {
            return true;
        }
        if (jumpPower === 0 && currIndex !== nums.length - 1) {
            return false;
        }
        if (currIndex === nums.length - 1) {
            return true;
        }
        var i = 1;
        var nextIndex = currIndex + 1;
        for (i; i <= jumpPower; i++) {
            if (nums[currIndex + i] >= nums[nextIndex]) {
                console.log("nextIndex", nextIndex);
                console.log("curr index + ".concat(i), currIndex + i);
                nextIndex = currIndex + i;
            }
        }
        currIndex = nextIndex;
        jumpPower = nums[currIndex];
        if (currIndex === nums.length - 1) {
            return true;
        }
    }
}
console.log(canJump([3, 0, 8, 2, 0, 0, 1]));
