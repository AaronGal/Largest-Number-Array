var numberArray = [7, 8, 19, 24, 97, 42, 35]

function findLargestNumber(){
    var largestNumber = numberArray[0]
    for (i = 1; i < numberArray.length; i++){
        if (numberArray[i] > largestNumber){
            largestNumber = numberArray[i]
        }
    }
    alert("The largest number is: " + largestNumber);
}
