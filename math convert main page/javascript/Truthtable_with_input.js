function truth_tables()
{
    var input_by_user = (document.getElementById("user_input")).value;
    var place_holder = document.getElementById("table_holder");

        if (input_by_user == "")
        {
            place_holder.innerHTML = "<div></div>"
        }
        else if (input_by_user.match(/[^PQpq+~^() ]/g) != null)
        {
            place_holder.innerHTML = "<p>One of the character is not allowed.</p>"
        }
        input_by_user = input_by_user.toUpperCase().replace(/ /g, "");

        while (numberOf(input_by_user, "(")> numberOf(input_by_user, ")")){
            input_by_user += ")";
        }

    var input_variables = [];
        for (i = 0; i < input_by_user.length; i++)
        {
            if ((input_by_user[i] >= "P" && input_by_user[i] <= "Q"))
            {
                    input_variables.push(input_by_user[i]);
            }
        }

    var table_for_minterm = "<tr><th style=\"letter-spacing: 0; padding: initial;\">Amount</th>";
        for (i = 0; i < input_variables.length; i++)
        {
            table_for_minterm += "<th>" + input_variables[i] + "</th>"
        }

    table_for_minterm += "<th>" + input_by_user + "</th></tr>";
        for (i = 0; i < Math.pow(2, input_variables.length); i++)
        {
        table_for_minterm += "<tr><td style=\"letter-spacing: 0; padding: initial;\">"+i.toString()+"</td>";
        var value = []
        for (k = 0; k < input_variables.length; k++)
        {
            value[k] = Math.floor(i / Math.pow(2, input_variables.length - k -1 )) % 2;
            table_for_minterm += "<td>" + value[k] + "</td>"
        }

    var equation = input_by_user;
        for (k = 0; k < input_variables.length; k++)
        {
            equation = equation.replace(new RegExp(input_variables[k], "g"), value[k]);
        }
        table_for_minterm += "<td>" + solve(equation) + "</td></tr>";
        }
        table_for_minterm = "<table align='center' id>" + table_for_minterm + "</table>"
        if (table_for_minterm.indexOf("<td></td>") == -1)
            place_holder.innerHTML = table_for_minterm;
        else
            place_holder.innerHTML = "<p>The order is not correct</p>";

    function numberOf(input_by_user, find)
    {
        var count = 0;
            for (var i = 0; i < input_by_user.length; i++)
            {
                if (input_by_user[i] == find)
                    count++
                return count;
            }
    }
    
    function solve(equation)
    {
        while (equation.indexOf("(") != -1)
        {
            console.log(equation.indexOf())
            var start = equation.lastIndexOf("(");
            var end = equation.indexOf(")", start);
            if (start != -1)
                equation = equation.substring(0, start)
                    + solve(equation.substring(start + 1, end))
                    + equation.substring(end + 1);
        }
        // This part will replace the equation with the given value,
        // depending on what the value is in the first place.
        equation = equation.replace(/""/g, ""); 
        equation = equation.replace(/0~/g, "1");
        equation = equation.replace(/1~/g, "0");
        for (var i = 0; i < equation.length -1; i++)
        {
            if ((equation[i] === "0" || equation[i] === "1") && (equation[i + 1] === "0" || equation[i + 1] === "1"))
             equation = equation.substring(0, i + 1) + "*" + equation.substring(i + 1, equation.length);
                var evaluation = eval;
                var answer = evaluation(equation);
                if (answer == 0)
                    return 0;
                if (answer > 0)
                    return 1;
                return "";
        }  
    }
}