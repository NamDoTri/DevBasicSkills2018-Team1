var randomNumbers = [];
var test = [], previousNumber;

function randomNumberGen(range)
{
    randomNumbers = [];
    for ( let i = 0; i < range; i++)
    {
        randomNumbers.push( Math.round(Math.random()*range) );
    }
    return randomNumbers;
}

class numberCount
{
    constructor(value)
    {
        this.value = value;
        this.dupCount = 1;
    }
    incrementCount()
    {
        this.dupCount++;
    }
    showDuplicate()
    {
        return this.dupCount;
    }
    showNumber()
    {
        return this.value;
    }
}
randomNumbers = randomNumberGen(10).sort();
for (let i = 0; i < randomNumbers.length; i++)
{
    if( randomNumbers[i] !== previousNumber)
    {
        test.push( new numberCount(randomNumbers[i]));
    }
    else{
        test[test.length - 1].incrementCount();
    }
    previousNumber = randomNumbers[i];
}
console.log( test );