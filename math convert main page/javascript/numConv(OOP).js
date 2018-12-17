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
    if (targetBase == 16)//specify what happens in case of hexadecimal
    {
        for(let i = 0; i < output.length; i++)
        {
            switch(String(output[i]))
            {
                case "10": output[i] = "A"; break;
                case "11": output[i] = "B"; break;
                case "12": output[i] = "C"; break;
                case "13": output[i] = "D"; break;
                case "14": output[i] = "E"; break;
                case "15": output[i] = "F"; break;
            }
        }
    }
    output = output.join("");
    return output;
}
function takeIn(inputNum, originalBase, targetBase) //convert among different number bases
{
    if ( originalBase == 10 )
    {
        return fromDec(inputNum,targetBase);
    }
    else if (originalBase == 16)
    {
        return fromDec(parseInt(inputNum,16),targetBase);
    }
    else
    {
        var inputNum = new inputNumber(inputNum, originalBase);
        return fromDec(inputNum.toDec(),targetBase);
    }
}
function printResult(inputNum,inputType) //print the results to input boxes
{

    //Validating input
    var isValid = true;
    switch(inputType)
    {
        case "dec": 
        if( /[-.+]/g.test(String(inputNum)) == true )
        {
            isValid = false;
        }
        break;

        case "bin":
        if ( /[^01]/g.test(String(inputNum)) == true )
        {
            isValid = false;
        }
        break;

        case "oct":
        if ( /[789]/g.test(String(inputNum)) == true)
        {
            isValid = false;
        } 
        break;

        case "hex":
        if ( /[^0123456789ABCDEF]/g.test(String(inputNum).toUpperCase()) == true)
        {
            isValid = false;
        }
    }
    //print out results
    if (isValid == true)
    {
        switch(inputType)
        {
            case "dec":
            document.getElementById("bin").value = fromDec(inputNum,2);
            document.getElementById("oct").value = fromDec(inputNum,8);
            document.getElementById("hex").value = fromDec(inputNum,16);    
            document.getElementsByClassName("error")[0].style.visibility = "hidden";    
            break;
            case "bin":
            document.getElementById("dec").value = takeIn(inputNum,2,10);
            document.getElementById("oct").value = takeIn(inputNum,2,8);
            document.getElementById("hex").value = takeIn(inputNum,2,16);
            document.getElementsByClassName("error")[1].style.visibility = "hidden";
            break;
            case "oct":
            document.getElementById("dec").value = takeIn(inputNum,8,10);
            document.getElementById("bin").value = takeIn(inputNum,8,2);
            document.getElementById("hex").value = takeIn(inputNum,8,16);
            document.getElementsByClassName("error")[2].style.visibility = "hidden";
            break;
            case "hex":
            document.getElementById("dec").value = takeIn(inputNum,16,10);
            document.getElementById("bin").value = takeIn(inputNum,16,2);
            document.getElementById("oct").value = takeIn(inputNum,16,8);
            document.getElementsByClassName("error")[3].style.visibility = "hidden";
            break;
        }
    }else{
        //display error messages
        switch(inputType)
        {
            case "dec": document.getElementsByClassName("error")[0].style.visibility = "visible"; break;
            case "bin": document.getElementsByClassName("error")[1].style.visibility = "visible"; break;
            case "oct": document.getElementsByClassName("error")[2].style.visibility = "visible"; break;
            case "hex": document.getElementsByClassName("error")[3].style.visibility = "visible"; break;
        }
    }  
}
