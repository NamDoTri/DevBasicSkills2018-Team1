function openTab(which)
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
    }
    document.getElementById(which).style.display="block";
    // document.getElementById(which).style.backgroundColor = "rgb(0, 43, 86)";
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
    else{
        while ( n > k + 1 )
        {
            n--;
            output *= n;
        }
        console.log(output);
        output = output/a;
        document.getElementById("result1").innerHTML = "There are " + output + " possible subsets.";
    }
}

function permutation(n,k)
{
    var n = document.getElementById("original").value;
    var k = document.getElementById("vacancies").value;
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



