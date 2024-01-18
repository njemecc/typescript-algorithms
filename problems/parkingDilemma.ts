//cilj je da od svih auta
//bar k cars budu prekrivena
//potreban nam je minimalni length da k cars budu pokriveni

function calculateRoof(cars: number[], k: number): number {
  //sort cars
  cars.sort((a, b) => a - b);

  const allDistances: number[] = [];

  for (let i = 0; i < cars.length - 1; i++) {
    const distance = cars[i + 1] - cars[i] - 1;

    allDistances.push(distance);
  }

  allDistances.sort((a, b) => a - b);

  let finalResult = 0;

  for (let i = 0; i < k - 1; i++) {
    finalResult += allDistances[i];
  }

  return finalResult + k;
}

console.log(calculateRoof([6, 7, 2, 12], 3));

//sorted => [2,6,7,12]
//12 - 6 = 6

//Input:
//cars: [2, 10, 8, 17]
//k: 3
//output: 9
//Explanation: you can build a roof of length 9 covering all parking slots from the 2nd one to the 10th one, so covering 3 cars at slots 2, 10, 8, there are no shorter roof  that can cover 3 cars, so the answer is 9
