function Valid()
{
    var f1 = document.getElementById("FormNameField").value;
    var f2 = document.getElementById("FormGrField").value;
    var f3 = document.getElementById("FormTelField").value;
    var f4 = document.getElementById("FormEmailField").value;

    var v1 = f1.match(/^[a-zа-яієA-ZА-ЯІЄ\s]+$/);
    var v2 = f2.match(/^[A-ZА-ЯІЄ]+-\d{2}$/);
    var v3 = f3.match(/^\+\d{2}-\d{3}-\d{3}-\d{2}-\d{2}$/);
    var v4 = f4.match(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/);

    if(v1 && v2 && v3 && v4)
    {
        return true;
    }
    else
    {
        alert("Форма заполнена не верно")
    }

}

function Show()
{
    var divright = document.getElementById("rightNewText");

    if(divright.innerText=="")
    {
        var h1 = document.createElement("h1");
        h1.id = "righthNewTextHeader";
        h1.innerText = "Введені дані";

        var p1 = document.createElement("p");
        var p2 = document.createElement("p");
        var p3 = document.createElement("p");
        var p4 = document.createElement("p");
        var p5 = document.createElement("p");

        var f1 = document.getElementById("FormNameField").value;
        var f2 = document.getElementById("FormGrField").value;
        var f3 = document.getElementById("FormNumberField").value;
        var f4 = document.getElementById("FormTelField").value;
        var f5 = document.getElementById("FormEmailField").value;

        if(Valid())
        {
            p1.innerText = "ПІБ: " + f1;
            p2.innerText = "Група: " + f2;
            p3.innerText = "Варіант: " + f3;
            p4.innerText = "Телефон: " + f4;
            p5.innerText = "Пошта: " + f5;

            divright.appendChild(h1);
            divright.appendChild(p1);
            divright.appendChild(p2);
            divright.appendChild(p3);
            divright.appendChild(p4);
            divright.appendChild(p5);

            document.getElementById("but").style.color="black";
        }
        else
        {
            document.getElementById("but").style.color="red";
        }
    }
    else
    {
        divright.innerText="";
    }
}

function M_Over()
{
    var children = document.getElementById("TrWhichINeed").childNodes;

    var color = Math.floor(Math.random()*16777215).toString(16);
    for(var i = 3; i< children.length;i=i+4)
    {
        children[i].style.backgroundColor="#"+ color;
    }
}



function M_Click()
{
    var children = document.getElementById("TrWhichINeed").childNodes;
    var color = document.getElementById("ColorSelection").value;
    for(var i = 3; i< children.length;i=i+4)
    {
        children[i].style.backgroundColor=color;
    }
}