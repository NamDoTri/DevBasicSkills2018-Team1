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
    if ( /./.test(num) == true)
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
    /*if( validate(n) == false)
    {

    }
    else if ( validate(e) == false)
    {

    }else{*/
    //find the number p
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
    }while(ds.length < 1)
    return ds[0]
    }

console.log(generateKey(1073602561,997))