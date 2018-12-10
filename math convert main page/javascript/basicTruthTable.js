class truthRow{
    constructor(statement, a, b, c, d)
    {
        this.statement = statement;
        this.first = a;
        this.second = b;
        this.third = c;
        this.forth = d;
    }
    showStatement()
    {
        return this.statement;
    }
    showFirst()
    {
        return this.first;
    }
    showSecond()
    {
        return this.second;
    }
    showThird()
    {
        return this.third;
    }
    showForth()
    {
        return this.forth;
    }
}
const arr=[   new truthRow("~P ^ Q", 0, 0, 1, 0),
              new truthRow( "~P v Q", 0, 1, 1, 0),
              new truthRow("~P ⊕ Q", 1, 0, 0, 1),
              new truthRow("~P ⇒ Q", 1, 1, 1, 0) ];
for (let a = 0; a < arr.length; a++)
{
    var truthtable = "";
    truthtable += "<table><tr><th> P </th>" + "<th> Q </th>" + "<th> ~P </th>" + "<th>" + arr[a].showStatement() + "</th>" + "</tr>";
    for( var i = 0 ; i < 2 ; i++)
    {
        for( var k = 0 ; k < 2 ; k++)
        {
            if( i != 0 && k == 1){
                truthtable = truthtable + "<tr><td>"+ i + "</td>" + "<td>" + k + "</td>" + "<td>"+ 0 + "</td>" + "<td>" + arr[a].showFirst() + "</td></tr>";
            }
            if(i == 1 && k == 0){
                truthtable = truthtable + "<tr><td>"+ i + "</td>" + "<td>" + k + "</td>" + "<td>"+ 0 + "</td>" + "<td>" + arr[a].showSecond() + "</td>" + "</tr>";
            }
            if(i == 0 && k == 1){
                truthtable = truthtable + "<tr><td>"+ i + "</td>" + "<td>" + k + "</td>" + "<td>"+ 1 + "</td>" + "<td>" + arr[a].showThird() + "</td>" + "</tr>";
            }
            if(i == 0 && k == 0){
                truthtable = truthtable + "<tr><td>"+ i + "</td>" + "<td>" + k + "</td>" + "<td>"+ 1 + "</td>" + "<td>" + arr[a].showForth() + "</td>" + "</tr>"; 
            }
        }
    }
    truthtable += "</table><br>";
    document.getElementById("").innerHTML += truthtable + "<br></br>";
}