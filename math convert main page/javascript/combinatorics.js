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
}
document.getElementById("defaultOpen").click();

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

function combination(n,k)
{
    var output = (factorial(n)/(factorial(k) * factorial(n-k))) ;
    document.getElementById("result").innerHTML = "There are " + output + " possible subsets."
}

function permutation(v)
{
    return factorial(v);
}

function permutationS(v,p)
{
    return Math.pow(v,p)
}

