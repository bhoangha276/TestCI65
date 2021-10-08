function adjacentElementsProduct(inputArray) {
    let max = 0;
    for(let i=0;i<inputArray.length;i++) {
        let multiplication  = inputArray[i]*inputArray[i+1];
        if(multiplication > max)
        max = multiplication;
    }
    console.log(max);
}

let input = [2,3,-5,-2,4];

adjacentElementsProduct(input);