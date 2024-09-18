

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



calculateDifference( 5, 3)
isOdd(5)
findMin([23,35,4,5,6,7,8])
filterEvenNumbers([23,45,55,46,7,80,24,64]);
sortArrayDescending([23,45,55,46,7,80,24,64])
lowercaseFirstLetter("Hahadi")
countVowels("mahadi")
findAverage([34,56,78,90,23,56])

