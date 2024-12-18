class Solution(object):
    def search(self, nums, target):

        l, r = 0, len(nums) - 1

        while l <= r:
            mid = (l + r) // 2
            print("MIDValue:",nums[mid])

            if nums[mid] == target:
                return mid
            if target > nums[mid]:
                if nums[mid] >= nums[l]:
                    l = mid + 1
                else:
                    if target > nums[r]:
                        r = mid - 1
                    else:
                        l = mid + 1
            elif target < nums[mid]:
                if nums[mid] >= nums[l]:
                    if target >= nums[l]:
                        r = mid - 1
                    else:
                        l = mid + 1
                else:
                    if target > nums[r]:
                        r = mid - 1
                    else:
                        l = mid + 1

        return -1

print(Solution.search("this",[5,1,2,3,4],1))
