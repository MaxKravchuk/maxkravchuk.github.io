//функція поревірка значення форми для 1го завдання
function check()
{
    //взяття значень з форми
    var obj = document.form_1.object.value;
    var mat = document.form_1.material.value;
    var num = document.form_1.amount.value;
    var errorstring = ""//рядок помилки
    //перевірка значень
    if(obj=="empty")
    {
        errorstring="Потрібно вибрати виріб\n";//додавання конкретної помилки до рядка
    }
    if(mat=="empty")
    {
        errorstring+="Потрібно вибрати матеріал\n"
    }
    if(num=="")
    {
        errorstring+="Потрібно визначити кількість"
    }
    if(errorstring=="")//якщо помилки відсутні запуск php частини
    {
        document.form_1.action="form_action.php";
    }
    else//інакше виведення помилки
    {
        alert(errorstring);
    }
}

//функція підрахунку для 2го завдання
function Count()
{
    var rad = (document.form_2.deg.value)*(Math.PI/180).toString();//отримання занчення кута та конвертування в радіани
    var func = document.form_2.angle.value;//визначення функції
    var result = eval("Math."+func+"("+rad+")");//формування розрахункового рядка та його подальший обрахунок в eval()
    document.form_2.ans.value=result.toFixed(2);//формотоване виведення результату
}

//функція перевірки відразу після зміни для 2го завдання
function check1(fld)
{
    var deg = fld.value;//отримання значення кута
    if(deg < 0 || deg > 90 || deg=="")//перевірка кута
    {
        alert("Кут повинен бути більше 0 та меньше 90");//повідомлення про помилку
        fld.select();
    }
}

//функція побудови графіка для завдання 3
function draw()
{
    //Початкова формула
    let y = x => 3*x*x*x-Math.cos(x);
    let scale = 20;
    let cnvs = document.querySelector('canvas');//отримання канвасу
    let ctx = cnvs.getContext('2d');//конфігорування канвасу

    ctx.lineWidth = 0.5;

    ctx.lineWidth = 2;
    let pts = [];
    for(let x = -cnvs.width/2; x<cnvs.width/2; x+=5) {
        pts.push([cnvs.width/2+x, cnvs.height/2 - y(x/scale)*scale]);
    }
    polyline('red', pts);

    //Вісь X 
    polyline('black', [[0, cnvs.height / 2], [cnvs.width, cnvs.height / 2]]);

    //Вісь Y
    polyline('black', [[cnvs.width / 2, 0], [cnvs.width / 2, cnvs.height]]);

    //Функція побудови
    function polyline(color, pts) {
      ctx.strokeStyle = color;
      ctx.beginPath();
      pts.forEach((p, i) => i ? ctx.lineTo(...p) : ctx.moveTo(...p));
      ctx.stroke();
    }
}