var randomNumbers = [];
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

function randomNumberGen(range,length)
{
    //check the length of set of numbers
    if(length > 1500)
    {
        window.alert("The number limit is 1500. Exceeding the limit may affect your device performance.");
    }
    else if(length % 1 != 0)
    {
        document.getElementById("numberElements").value = "";
        document.getElementById("numberElements").className = "red";
    }
    //generate numbers
    else if(document.getElementById("generate").textContent == "Generate" && document.getElementById("numberRange").value != "" && document.getElementById("numberElements").value != "")
    {
        randomNumbers = [];
        test = [];
        for ( let i = 0; i < length; i++)
        {
            randomNumbers.push( Math.round(Math.random()* range) );
        }
        document.getElementById("numbersGenerated").innerHTML = randomNumbers.join(", ");
        document.getElementById("stats").style.visibility = "visible";
        document.getElementById("hideNumbers").style.visibility = "visible";
        document.getElementById("generate").textContent = "Reset";
        //print stats table
        randomNumbers.sort(function(a,b) {return a - b});
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
    // display message when range is missing
    else if( document.getElementById("numberRange").value == "")
    {
        var range = document.getElementById("numberRange");
        range.className = "red";
        range.placeholder = "Range is missing";      
    }
    //display message when length is missing
    else if( document.getElementById("numberElements").value == "")
    {
        var length = document.getElementById("numberElements");
        length.className = "red";
        length.placeholder = "Length is missing";
    }
    //what the "Reset" button does
    else{
        document.getElementById("numbersGenerated").innerHTML = "";
        document.getElementById("numberElements").value = "";
        document.getElementById("numberRange").value = "";
        document.getElementById("generate").textContent = "Generate";
        document.getElementById("stats").style.visibility = "hidden";
        document.getElementById("statsTable").innerHTML = "";
        document.getElementById("hideNumbers").style.visibility = "hidden";
    }
}
function hideNumbers()
{
    if ( document.getElementById("hideNumbers").textContent == "Hide numbers")
    {
        document.getElementById("numbersGenerated").style.display = "none";
        document.getElementById("hideNumbers").textContent = "Show numbers";
    }
    else{
        document.getElementById("hideNumbers").textContent = "Hide numbers";
        document.getElementById("numbersGenerated").style.display = "block";
    }
}
function showStats(button)
{
    if (button.textContent == "Hide statistics")
    {
        document.getElementById("statsTable").style.display = "none";
        button.textContent = "Show statistics";
    }else{
        button.textContent = "Hide statistics";
        document.getElementById("statsTable").style.display = "block";  
    }
}

function changeButton()
{
    document.getElementById("generate").textContent = "Generate";
}