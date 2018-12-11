function printTable()
{
    document.getElementById("numberSystemOutputs").innerHTML = "<th>Dec</th><th>Bin</th><th>Oct</th><th>Hex</th>";
    for(var i = 0; i < 51; i++)
    {
        document.getElementById("numberSystemOutputs").innerHTML += "<tr> <td>" + i + "</td> <td>"+ fromDec(i,2) +"</td> <td>"+ fromDec(i, 8) +"</td> <td>"+ fromDec(i, 16) +"</td> </tr>";
    }
}

