const arr=[  ["~P ^ Q", 0, 0, 1, 0],
             ["~P v Q", 0, 1, 1, 0],
              ["~P ⊕ Q", 1, 0, 0, 1],
             ["~P ⇒ Q", 1, 1, 1, 0] ];
for (let a = 0; a < arr.length; a++)
{
    var truthtable = "";
    truthtable += "<table class='truthtruth'><tr><th> P </th>" + "<th> Q </th>" + "<th> ~P </th>" + "<th>" + arr[a][0] + "</th>" + "</tr>";
    for( var i = 0 ; i < 2 ; i++)
    {
        for( var k = 0 ; k < 2 ; k++)
        {
            if( i != 0 && k == 1){
                truthtable = truthtable + "<tr><td>"+ i + "</td>" + "<td>" + k + "</td>" + "<td>"+ 0 + "</td>" + "<td>" + arr[a][1] + "</td></tr>";
            }
            if(i == 1 && k == 0){
                truthtable = truthtable + "<tr><td>"+ i + "</td>" + "<td>" + k + "</td>" + "<td>"+ 0 + "</td>" + "<td>" + arr[a][2] + "</td>" + "</tr>";
            }
            if(i == 0 && k == 1){
                truthtable = truthtable + "<tr><td>"+ i + "</td>" + "<td>" + k + "</td>" + "<td>"+ 1 + "</td>" + "<td>" + arr[a][3] + "</td>" + "</tr>";
            }
            if(i == 0 && k == 0){
                truthtable = truthtable + "<tr><td>"+ i + "</td>" + "<td>" + k + "</td>" + "<td>"+ 1 + "</td>" + "<td>" + arr[a][4] + "</td>" + "</tr>"; 
            }
        }
    }
    truthtable += "</table><br>";
    document.getElementById("truthtable").innerHTML += truthtable + "<br>&nbsp<br>";
}

