def solution(A):
    
    answer = 0
    biggest = 0
    sum = 0
    
    for i in range(len(A)):
        sum+=A[i]
        
        if A[i] <  0 and A[i] < biggest:
            biggest = A[i]
        
        if sum < 0:
            answer += 1
            sum = sum + abs(biggest) 
    
    
    return answer

print(solution([10,-10,-1,-1,10]))
print(solution([-1,-1,-1,1,1,1,1]))
print(solution([5,-2,-3,1,]))
            
