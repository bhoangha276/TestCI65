let input = [60, 40, 55, 75, 64];

function alternatingSums(a) {
    let SumEven=0;
    for(let i=0;i<a.length;i=i+2){
        SumEven += a[i];
    }

    let SumOdd=0;
    for(let i=1;i<a.length;i=i+2){
        SumOdd += a[i];
    }

    let arr=[];
    arr.push(SumEven, SumOdd);
    console.log(arr);
}
alternatingSums(input);
