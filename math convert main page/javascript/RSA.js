function findDivisors(num)
{
    var divisors = [];
    for ( let i = 1; i <= num; i++)
    {
        if ( num % i == 0)
        {
            divisors.push(i);
        }
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
    else if ( validate(e) == false)
    {
        document.getElementsByClassName("error")[0].style.visibility = "visible";
    }else{
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
    document.getElementsByClassName("error")[0].style.visibility = "hidden";
    document.getElementById("generatedKey").innerHTML = "The result is: " + ds[0];
    }
}