const headQ= 42;

const distanceFromHqInBlocks = function (num2){
    return Math.abs(headQ - num2);
}


function distanceFromHqInFeet(num) {
    return distanceFromHqInBlocks(num) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
}

function calculatesFarePrice(start, destination){
    let calculatesFarePrice;
    let calculatingFeet= distanceTravelledInFeet(start, destination);
   if (calculatingFeet < 400 ){
        return calculatesFarePrice = 0;
   } else if (calculatingFeet > 400 && calculatingFeet < 2000){
       calculatesFarePrice = calculatingFeet - 400;
       return (calculatesFarePrice * 0.02);
   }
   else if (calculatingFeet > 2000 && calculatingFeet < 2499){
       calculatesFarePrice = 25;
       return calculatesFarePrice;
   }
   else if (calculatingFeet > 2500){
       return 'cannot travel that far';
   }

}
