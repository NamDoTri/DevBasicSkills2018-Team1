function printTable()
{
    document.getElementById("numberSystemOutputs").innerHTML = "<tr><td>Dec</td><td>Bin</td><td>Oct</td><td>Hex</td></tr>";
    for(var i = 0; i < 51; i++)
    {
        document.getElementById("numberSystemOutputs").innerHTML += "<tr> <td>" + i + "</td> <td>"+ fromDec(i,2) +"</td> <td>"+ fromDec(i, 8) +"</td> <td>"+ fromDec(i, 16) +"</td> </tr>";
    }
}

