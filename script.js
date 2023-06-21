
function textCheck()
{
    var texta = document.getElementById("input").value;
    var textb = texta.substring(0,4)

    if(textb == "Java" || textb == "java")
    {
        document.getElementById("output").innerHTML = "True";
    }
    else
    {
        document.getElementById("output").innerHTML = "False";
    }
}