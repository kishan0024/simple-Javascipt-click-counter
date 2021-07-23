

counter=0;
function clicker()
{
    counter=counter+1;
    document.getElementById("count").innerHTML=counter;
}
function revclicker()
{
    counter=counter-1;
    document.getElementById("count").innerHTML=counter;
}