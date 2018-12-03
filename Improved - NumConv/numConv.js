//Functions - get power
function getPow2( powerOf )
{
    var a = 1;
    var result = 1;
    while( a <= powerOf )
    {
        result *= 2;
        a += 1;
    }
    return result;
}
function getPow16( powerOf )
{
    var a = 1;
    var result = 1;
    while( a <= powerOf )
    {
        result *= 16;
        a += 1;
    }
    return result;
}

//Decimal number to Binary number and vice versa
function decToBin(inputNumber)         //Decimal number to Binary number
{
    var oriNum = inputNumber;
    var binNum = [];
    while (oriNum >= 2)
    {
        binNum.unshift(String(oriNum % 2));
        oriNum = Math.floor(oriNum / 2);
    }
    binNum.unshift(String(oriNum));
    return binNum.join("");
}
function DecToBin()                    //Print the result to Bin num
{
    var inputNumber = Number( document.getElementById("inputField1").value);
    document.getElementById("Result2").innerHTML = decToBin(inputNumber);
}

function binToDec(inputNum)            //Convert Binary number to Decimal number
{
    var x = inputNum;
    var decX = 0;
    var num = Array.from(String(x));
    var a = 0;
    var binNum = true;

    for (let i = 0; i < String(inputNum).length; i++)
    {
        if ( String(inputNum)[i] != "0" && String(inputNum)[i] != "1")
        {
            binNum = false;
        }
    }
    if ( binNum == true )
    {
        while ( num.length > 0)
        {
            decX += Number(num[0]) * getPow2(num.length - 1);
            num.shift();
        }
        return decX;
    }
    else{
        return null;
    }
}
function BinToDec()                    //Print the result to Dec num
{
    var inputNum = Number( document.getElementById("inputField2").value);
    var binNum = true;

    for (let i = 0; i < String(inputNum).length; i++)
    {
        if ( String(inputNum)[i] != "0" && String(inputNum)[i] != "1")
        {
            binNum = false;
        }
    }
    if (binNum == true)
    {
        document.getElementById("Result1").innerHTML = binToDec(inputNum);
        document.getElementById("Result2").innerHTML = "";
    }else{
        document.getElementById("Result2").innerHTML = "This is not a binary number, you idiot!!!"
        document.getElementById("Result1").innerHTML = "";
        binNum = true;
    }
}


//Decimal to Hexadecimal Number and vice versa
function decToHex(inputNum)            //Convert decimal num to Hex
{
    var inputNum = inputNum;
    var DecToHex = new Map();

        DecToHex.set("10", "A");
        DecToHex.set("11", "B");
        DecToHex.set("12", "C");
        DecToHex.set("13", "D");
        DecToHex.set("14", "E");
        DecToHex.set("15", "F");

    var toHex = [];

    if ( inputNum == null )
    {
        return "Not a number";
    }
    else{
        while ( inputNum >= 16 )
        {
            toHex.unshift(inputNum % 16);
            inputNum = Math.floor(inputNum / 16);
        }
        toHex.unshift(inputNum);

        for (let i = 0; i < toHex.length; i ++)
        {
            if (DecToHex.has(String(toHex[i])))
            {
                toHex[i] = DecToHex.get(String(toHex[i]));
            }
        }
        return toHex.join("");
    }
}
function DecToHex()                    //Print the result to Hex num
{
    var inputNum = Number(document.getElementById("inputField1").value);
    document.getElementById("Result3").innerHTML=decToHex(inputNum);
}

function hexToDec (inputNum)           //Convert hex to decimal num
{
    var DecToHex = new Map();

    DecToHex.set("10", "A");
    DecToHex.set("11", "B");
    DecToHex.set("12", "C");
    DecToHex.set("13", "D");
    DecToHex.set("14", "E");
    DecToHex.set("15", "F");

    const Bin = Array.from(DecToHex.keys());
    const Hex = Array.from(DecToHex.values());

    var toBin = 0;
    var x = inputNum;
    x = x.toUpperCase();
    var y = Array.from(x);

    while ( y.length > 0 )
    {
        for ( let i = 0; i < Bin.length; i++)
        {
            if ( y[0] == Hex[i])
            {
                y[0] = Bin[i];
            }
        }
        toBin += Number(y[0]) * getPow16(y.length - 1);
        y.shift();
    }

    return toBin;
}
function HexToDec()                    //Print the result to Decimal num
{
    var inputNum = document.getElementById("inputField3").value;
    if ( isNaN(hexToDec(inputNum)) )
    {
        document.getElementById("Result1").innerHTML = ""
        document.getElementById("Result3").innerHTML = "This is not a hexadecimal number";
    }
    else{
        document.getElementById("Result1").innerHTML = hexToDec(inputNum);
        document.getElementById("Result3").innerHTML = "";
    }
    
}


//Binary number to Hexadecimal number and vice versa
function binToHex(inputNum)            //Convert Binary num to Dec and then to Hex
{
    var inputNum = inputNum;
    return decToHex(binToDec(inputNum));
}
function BinToHex()                    //Print the result to Hex num
{
    var inputNum = Number(document.getElementById("inputField2").value);
    var binNum = true;

    for (let i = 0; i < String(inputNum).length; i++)
    {
        if ( String(inputNum)[i] != "0" && String(inputNum)[i] != "1")
        {
            binNum = false;
        }
    }
    if ( binNum == true )
    {
        //document.getElementById("Result1").innerHTML = "";
        document.getElementById("Result3").innerHTML = binToHex(inputNum);
    }
}

function hexToBin(inputNum)
{

}
function HexToBin()
{
    var inputNum = document.getElementById("inputField3").value;
    if ( isNaN(hexToDec(inputNum)) )
    {
        document.getElementById("Result2").innerHTML = ""
        document.getElementById("Result3").innerHTML = "This is not a hexadecimal number";
    }
    else{
        document.getElementById("Result2").innerHTML = decToBin(hexToDec(inputNum));
        document.getElementById("Result3").innerHTML = "";
    }

}
