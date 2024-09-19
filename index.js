

let arr = [23,45,55,46,7,80,24,64];

function calculateDifference(a,b){
    const result = a - b;
    return result;
}

function isOdd(a){
    if(a % 2 !== 0){
        return(true);
    }else{
        return false
    }
}

function findMin(arr){

    let min = arr[0]

    arr.forEach(i => {
        if(i < min){
            min = i;
        }
    });
    return min;
}

function filterEvenNumbers(arr){

    let evenNum = []

    arr.forEach(i => {
        if(i%2 === 0){
            evenNum.push(i)
        }
    })

    return evenNum;
}


function sortArrayDescending(arr){
    
    const result = arr.sort((a,b) => {
        return b - a
    })

    return result
   
}

function lowercaseFirstLetter(str){
  

    const firstLetter = str[0].toLowerCase()
    const restOfStr = str.slice(1)
    return firstLetter + restOfStr;
    
}

function countVowels(str){
    let vowels = "aeiouAEIOU"
    let vwl = []
    for(let char of str){
       
        if(vowels.includes(char)){
            vwl.push(char)

        }
    }

    console.log(vwl)
    console.log(vwl.length)
}

function findAverage(arr){

    let total = 0;

    arr.forEach(e => {
       total = total + e
    });

    const average = total / arr.length
    return average
}


console.log(calculateDifference( 5, 3));
console.log(isOdd(5));
console.log(findMin(arr));
console.log(filterEvenNumbers(arr));
console.log(sortArrayDescending(arr));
console.log(lowercaseFirstLetter("HahaFdi"));
console.log(countVowels("mahadi"));
console.log(findAverage(arr));









