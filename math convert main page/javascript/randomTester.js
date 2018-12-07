var randomNumbers = [];
var test = [], previousNumber;

function randomNumberGen(range,length)
{
    if(document.getElementById("generate").textContent == "Generate")
    {
        randomNumbers = [];
        test = [];
        for ( let i = 0; i < length; i++)
        {
            randomNumbers.push( Math.round(Math.random()* range) );
        }
        document.getElementById("numbersGenerated").innerHTML = randomNumbers.join(", ");
        document.getElementById("stats").style.visibility = "visible";
        document.getElementById("generate").textContent = "Reset";
        return randomNumbers;
    }
    else{
        document.getElementById("numbersGenerated").innerHTML = "";
        document.getElementById("numberRange").value = "";
        document.getElementById("generate").textContent = "Generate";
        document.getElementById("stats").style.visibility = "hidden";
        document.getElementById("statsTable").innerHTML = "";
    }
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

function showStats()
{
    randomNumbers.sort();
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
    document.getElementById("statsTable").innerHTML = "<tr><label colspan=\"2\">Statistics</label></tr>";
    document.getElementById("statsTable").innerHTML += "<tr> <td>Number</td> <td>Times</td> </tr>";
    for ( let i  = 0; i < test.length; i++)
    {
        document.getElementById("statsTable").innerHTML += "<tr> <td>" + test[i].showNumber() + "</td> <td>" + test[i].showDuplicate() + "</td> </tr>"
    }
}
