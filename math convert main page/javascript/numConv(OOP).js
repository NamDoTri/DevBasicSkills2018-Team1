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
    toDec() //convert any numbers to decimal base
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
function fromDec(inputNum,targetBase) //convert decimal numbers to a specified number base
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
function takeIn(inputNum, originalBase, targetBase) //convert among different number bases
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
function printResult(inputNum,inputType) //print the results to input boxes
{
    switch(inputType)
    {
        case "dec":
        document.getElementById("bin").value = fromDec(inputNum,2);
        document.getElementById("oct").value = fromDec(inputNum,8);
        document.getElementById("hex").value = fromDec(inputNum,16);        
        break;
        case "bin":
        for ( let i = 0; i < Array.from(inputNum).length; i++)
        {
            if(Array.from(inputNum)[i] == 0 || (Array.from(inputNum)[i] == 1) )
            {
                document.getElementById("dec").value = takeIn(inputNum,2,10);
                document.getElementById("oct").value = takeIn(inputNum,2,10);
                document.getElementById("hex").value = takeIn(inputNum,2,10);
                document.getElementsByClassName("error")[0].style.visibility = "hidden";
            }
            else{
                document.getElementsByClassName("error")[0].style.visibility = "visible";
            }
        }
        break;
        case "oct":
            if (Array.from(inputNum).indexOf(7) == -1 && (Array.from(inputNum).indexOf(8) == -1) && (Array.from(inputNum).indexOf(9) == -1) )
            {
                document.getElementById("dec").value = takeIn(inputNum,8,10);
                document.getElementById("bin").value = takeIn(inputNum,8,2);
                document.getElementById("hex").value = takeIn(inputNum,8,16);
                document.getElementsByClassName("error")[1].style.visibility = "hidden";
            }
            else{
                document.getElementsByClassName("error")[1].style.visibility = "visible";
            }
        break;
        case "hex":
        document.getElementById("dec").value = takeIn(inputNum,16,10);
        document.getElementById("bin").value = takeIn(inputNum,16,2);
        document.getElementById("oct").value = takeIn(inputNum,16,8);
        break;
    }
}