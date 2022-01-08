function returnEvenValues(array){
    let evenNumbs = [];
    for(let  i = 0; i < array.length; i++){
        if(array[i] % 2 ===0 ) {
            evenNumbs .push(array[i]);
        } else {
            console.log(`${$array[i]} não é par!`)
        }
    }
    console.log(evenNumbs);
}

let array = [1,2,4,5,7,8];

returnEvenValues(array);