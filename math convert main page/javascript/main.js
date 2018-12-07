function showClear()
{
    var buttonID = document.getElementById("showClearButton");
    if (buttonID.textContent == "Show")
    {
        printTable();
        buttonID.textContent = "Clear";
    }
    else
    {
        document.getElementById("numberSystemOutputs").innerHTML = "";
        buttonID.textContent = "Show";
    }
}
//document.addEventListener("keydown",)
