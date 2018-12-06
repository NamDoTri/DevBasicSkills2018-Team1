var randomNumbers = [1,1,2,1,1,4,4,5,1,4,7,2,4,8];
var test = [], previousNumber;
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
randomNumbers = randomNumbers.sort();
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