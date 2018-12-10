var truthtable = "";
truthtable = "<tr><th> P </th>" + "<th> Q </th>" + "<th> ~P </th>" + "<th> ~P^Q </th>" + "</tr>";

for( var i = 0 ; i < 2 ; i++){
    for( var k = 0 ; k < 2 ; k++){
        if( i != 0 && k == 1){
            truthtable = truthtable + "<td>"+ i + "</td>" + "<td>" + k + "</td>" + "<td>"+ 0 + "</td>" + "<td>" + 1 + "</td>";
        }
        if(i == 1 && k == 0){
            truthtable = truthtable + "<td>"+ i + "</td>" + "<td>" + k + "</td>" + "<td>"+ 0 + "</td>" + "<td>" + 0 + "</td>" + "<tr>";
        }
        if(i == 0 && k == 1){
            truthtable = truthtable + "<td>"+ i + "</td>" + "<td>" + k + "</td>" + "<td>"+ 1 + "</td>" + "<td>" + 1 + "</td>" + "<tr>";
        }
        if(i == 0 && k == 0){
            truthtable = truthtable + "<td>"+ i + "</td>" + "<td>" + k + "</td>" + "<td>"+ 1 + "</td>" + "<td>" + 1 + "</td>" + "<tr>"; 
        }
    }
}
document.write(truthtable);