function findDivisors(num)
{
    var i = 1;
    var divisors = [];
    while ( i <= num && divisors.length < 6)
    {
        if ( num % i == 0)
        {
            divisors.push(i);
        }
        i++;
    }
    return divisors;
}
function validate(num)
{
    //check if the number is whole nnumber or not
    if ( /\./.test(num) == true)
    {
        return false;
    }
    //check number of divisors
    else if( findDivisors(num).length > 4 )
    {
        return false;
    }
}
function generateKey(n,e)
{
    if( validate(n) == false)
    {
        document.getElementsByClassName("error")[0].style.visibility = "visible";
    }
    else if ( findDivisors(e).length > 2)
    {
        document.getElementsByClassName("error")[0].style.visibility = "visible";
    }else if( n == "" || e == "")
    {
        document.getElementsByTagName("input")[0].placeholder = "Number missing";
        document.getElementsByTagName("input")[1].placeholder = "Number missing";
        document.getElementsByTagName("input")[0].className = "red";
        document.getElementsByTagName("input")[1].className = "red";
    }
    else if(  n-e < 0 )
    {
        document.getElementsByClassName("error")[0].style.visibility = "visible";
    }
    else{
    //find the number p
    console.log(n + "  " + e );
    var i = 2;
    var prime = [];
    do
    {
        if ( n % i == 0)
        {
            prime.push(i);
        }
        i++;
    }while (prime.length < 1)
    var p = prime[0];
    var q = n / p;
    var ds=[];
    var m = 1;
    var d;
    do{
        d = ( (p-1) * (q-1) * m + 1)/e;
        if ( d % 1 == 0)
        {
            ds.push(d);
        }
        m++;
    }while(ds.length < 1);  
    document.getElementById("generatedKey").innerHTML = "The result is: " + ds[0];
}
}
function clearAll()
{
    console.log("wtd");
    document.getElementById("generatedKey").innerHTML = "";
    document.getElementById("generatedKey").style.borderStyle = "none";
    document.getElementsByTagName("input")[0].placeholder = "First part";
    document.getElementsByTagName("input")[1].placeholder = "Second part";
    document.getElementsByTagName("input")[0].classList.remove("red");
    document.getElementsByTagName("input")[1].classList.remove("red");
    document.getElementsByClassName("error")[0].style.visibility = "hidden";
}