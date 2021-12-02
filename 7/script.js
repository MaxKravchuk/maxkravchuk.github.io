function check()
{
    var obj = document.form_1.object.value;
    var mat = document.form_1.material.value;
    var num = document.form_1.amount.value;
    var errorstring = ""
    var isCorrect = true;
    if(obj=="empty")
    {
        errorstring="Потрібно вибрати виріб\n";
        isCorrect = false;
        if(mat=="empty")
        {
            errorstring+="Потрібно вибрати матеріал\n"
            if(num=="" || num.match(/^[a-zа-яієA-ZА-ЯІЄ\s]+$/))
            {
                errorstring+="Потрібно визначити кількість\nКількість це !число!"
            }
        }
    }

    if(isCorrect)
    {
        document.form_1.action="form_action.php";
    }
    else
    {
        alert(errorstring);
    }
}

