function showClear()
{
    var buttonID = document.getElementById("showClearButton");
    console.log(buttonID.textContent);
    if (buttonID.textContent == "Show")
    {
        document.getElementById("numberSystemOutputs").style.visibility = "visible";
        buttonID.textContent = "Clear";
    }
    else
    {
        document.getElementById("numberSystemOutputs").style.visibility = "hidden";
        buttonID.textContent = "Show";
    }
}