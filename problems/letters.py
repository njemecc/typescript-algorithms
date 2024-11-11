def solution (letters):
    small_letters = set();
    large_letters = set();
    answer = set()
    
    
    for letter in letters:
        if letter.islower():
            small_letters.add(letter)
            if letter.upper() in large_letters and letter in answer:
                answer.discard(letter)
        elif letter.isupper():            
            if letter.lower() in small_letters and letter.upper() not in large_letters:
                answer.add(letter.lower())
            large_letters.add(letter)
                
    return len(answer)
        
           
  
            


print(solution("aaAbcCABBc"))
print(solution("xyzXYZabcABC"))
print(solution("ABCabcAefG"))

            
