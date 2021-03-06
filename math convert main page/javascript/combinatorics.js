//switch between combination calculator and permutation one
function openTab(which, button)
{
    var calc = document.getElementsByClassName("calculator");
    for (let i = 0; i < calc.length; i++)
    {
        calc[i].style.display="none";
    }
    var switches = document.getElementsByClassName("switches");
    for (let i = 0; i < switches.length; i++)
    {
        switches[i].style.backgroundColor = "rgb(0,30,61)";
        switches[i].style.color = "white";
    }
    document.getElementById(which).style.display="block";
    button.style.color ="coral";
}

function factorial(a)
{
    var output = a;
    while ( a > 1 )
    {
        a--;
        output *= a;
    }
    return output;
}

function combination()
{
    var n = Number(document.getElementById("originalSet").value);
    var k = Number(document.getElementById("subset").value);
    var output = n;
    var a = factorial(n-k);
    //validate input numbers first
    if ( n == "")
    {
        document.getElementById("originalSet").placeholder = "Original set missing";
        document.getElementById("originalSet").className = "red";
    }
    else if( k == "")
    {
        document.getElementById("subset").placeholder = "Length of each subset missing";
        document.getElementById("subset").className = "red";
        
    }
    //implement the calculation
    else{
        while ( n > k + 1 )
        {
            n--;
            output *= n;
        }
        output = output/a;
        if ( output < 0)
        {
            document.getElementById("result1").innerHTML = "There is no possible subset.";    
        }
        else if ( isNaN(output) == true || output == Infinity )
        {
            document.getElementById("result1").innerHTML = "The result is too big.";
        }
        else{
            document.getElementById("result1").innerHTML = "There are " + Math.floor(output) + " possible subsets.";
        }
    }
}

function permutation(n,k)
{
    var n = document.getElementById("original").value;
    var k = document.getElementById("vacancies").value;
    //again, validate input numbers first
    if ( n == "")
    {
        document.getElementById("original").placeholder = "Original set missing";
        document.getElementById("original").className = "red";
    }
    else if( k == "")
    {
        document.getElementById("vacancies").placeholder = "Number of vacancies missing";
        document.getElementById("vacancies").className = "red";
    }
    //print out results to the screen 
    else{
        if( document.getElementById("sampling").checked == false)
        {
            document.getElementById("result2").innerHTML = "There are " + factorial(n)/factorial(n-k) + " probabilities.";
        }
        else{
            document.getElementById("result2").innerHTML = "There are " + Math.pow(n,k) + " probabilities.";
        }
    }
}



