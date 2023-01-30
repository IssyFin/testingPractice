function capitalize(string){
    let firstLetter = string[0].toUpperCase();
    let stringRemainder = string.slice(1,);
    let newString = firstLetter.concat(stringRemainder);
    return newString;
}

function reverseString(myString){
   let originalString = myString;
   let newString = "";
   while(originalString.length>0){
       newString = newString.concat(originalString.slice(originalString.length-1));
       originalString = originalString.slice(0,originalString.length-1);
   }
   return newString;
}

const calculator = {
    add:function(a,b){
        return a+b
    },
    subtract:function(a,b){
        return a-b;
    },
    multiply:function(a,b){
        return a*b;
    },
    divide:function(a,b){
        return a/b;
    }
}

function caeserCipher(string,shift){
    let newString = "";
    let newShift = shift;
    while(newShift>=26){
        newShift = newShift-26;
    }
    while(newShift<0){
        newShift=newShift+26;
    }
    for(let i=0;i<string.length;i++){
        let code = string.charCodeAt(i);
        let newCode = code;
        //if letter, shift
        if((code<90&&code>64)||(code<122&&code>94)){
            newCode = code+shift;
        }
        //if overflow, go back to beginning of alphabet
        if((code<90&&newCode>90)||(code<122&&newCode>122)){
            newCode = newCode - 26;
        }
        newString = newString.concat(String.fromCharCode(newCode));
    }
    return newString;
}

function analyzeArray(array){
    let returnArray = {
        average:array[0],
        min:array[0],
        max:array[0],
        length:array.length
    }
    let sum = 0;
    for(let i=0;i<array.length;i++){
        if(array[i]<=returnArray.min){
            returnArray.min = array[i];
        }
        if(array[i]>=returnArray.max){
            returnArray.max = array[i]
        }
        sum = sum+array[i];
    }
    returnArray.average = sum/returnArray.length;
    return{average:returnArray.average,min:returnArray.min,max:returnArray.max,length:returnArray.length};
}

module.exports={capitalize,reverseString,calculator, caeserCipher,analyzeArray};