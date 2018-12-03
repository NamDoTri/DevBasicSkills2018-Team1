class inputNumber
{
    constructor(inputNum, numberBase) //the input number and its number base
    {
        this.inputNum = inputNum;
        switch(numberBase)
        {
            case 10: this.base = 10; break;
            case 2 : this.base = 2; break;
            case 8 : this.base = 8; break;
            case 16: this.base = 16; break;
        }
    }
    toDec()
    {
        var input = Array.from(this.inputNum.toString());
        var output = 0;
        while(input.length > 0)
        {
            output += Number(input[0]) * Math.pow(this.base, input.length - 1 );
            input.shift();
        }
        return output;
    }
}
function fromDec(inputNum,targetBase)
{
    var input = inputNum;
    var output = [];
    while (input >= targetBase)
    {
        output.unshift(input % targetBase);
        input = Math.floor(input/targetBase);
    }
    output.unshift(input);
    output = output.join("");
    return output;
}
function takeIn(inputNum, originalBase, targetBase)
{
    if ( originalBase == 10 )
    {
        return fromDec(inputNum,targetBase);
    }
    else
    {
        var inputNum = new inputNumber(inputNum, originalBase);
        return fromDec(inputNum.toDec(),targetBase);
    }
}

//console.log(takeIn(8,10,7));
function printResult(inputNum,inputType)
{
    switch(inputType)
    {
        case "dec":
        document.getElementById("bin").value = fromDec(inputNum,2);
        document.getElementById("oct").value = fromDec(inputNum,8);
        document.getElementById("hex").value = fromDec(inputNum,16);        
        break;
        case "bin":
        document.getElementById("dec").value = takeIn(inputNum,2,10);
        document.getElementById("oct").value = takeIn(inputNum,2,10);
        document.getElementById("hex").value = takeIn(inputNum,2,10);
        break;
        case "oct":
        document.getElementById("dec").value = takeIn(inputNum,8,10);
        document.getElementById("bin").value = takeIn(inputNum,8,2);
        document.getElementById("hex").value = takeIn(inputNum,8,16);
        break;
        case "hex":
        document.getElementById("dec").value = takeIn(inputNum,16,10);
        document.getElementById("bin").value = takeIn(inputNum,16,2);
        document.getElementById("oct").value = takeIn(inputNum,16,8);
        break;
    }
}