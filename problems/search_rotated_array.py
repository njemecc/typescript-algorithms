class Solution(object):
    def search(self, nums, target):

        l, r = 0, len(nums) - 1

        while l <= r:
            mid = (l + r) // 2
            print("MIDValue:",nums[mid])

            if target == nums[mid]:
                return mid
            elif target < nums[mid]:
                #na desnoj strani je mid
                if nums[mid] < nums[l]:
                    r = mid - 1
                #na levoj strani je mid
                else:
                    if target >= nums[l]:
                        r = mid -1
                    else:
                        l = mid + 1
            elif target > nums[mid]:
                # na levoj smo strani
                if nums[mid] >= nums[l]:
                    l = mid + 1
                # na desnoj smo strani i target = veci od mid-a
                else:
                    if target > nums[r]:
                        r = mid - 1
                    else:
                        l = mid + 1








        return  -1


print(Solution.search("this",[5,1,2,3,4],1));
