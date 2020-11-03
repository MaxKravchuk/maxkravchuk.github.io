//task_1
var bl4 = document.getElementById("4");
var bl5 = document.getElementById("5");
var temp = bl4.innerHTML;
bl4.innerHTML = bl5.innerHTML;
bl5.innerHTML = temp;

//task_2
function fucn_task_2(a,b,c)
{
    p = (a+b+c)/2;
    S = Math.floor(Math.sqrt(p*(p-a)*(p-b)*(p-c)));
    return S;
}
var a = 4, b = 3, c = 5;
var bl3 = document.getElementById("3");
bl3.innerHTML = bl3.innerHTML + fucn_task_2(a,b,c);

//task_3
function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

function Save1()
{
    var Data = document.Form3.Line.value;
    
    a = new Array(10);
    a = Data.split(' ');
    
    var q = Math.max(...a);
    var t =0;
    for(i = 0; i<10;i++){
        if(a[i]==q){
                t++;
        }
    }
    alert("Number of maximum " + q + " elements ==> "+ t);
    document.cookie="Number of maximum " + q + " elements ==> "+ t;
    
}

if(document.cookie.includes('Number of'))
{
    alert(document.cookie);
    alert("Cookies will be deleted permanently");
    deleteAllCookies();
    document.getElementById('Form3ID').remove();
}

//task_4
if(window.localStorage)
{
    if(localStorage.getItem('check') == null)
    {
        localStorage.setItem('check',0);
    }
        else if(localStorage.getItem('check') == 0)
        {
            document.querySelector('#Six').style.fontWeight = 'normal';
        }
        else
        {
            document.querySelector('#Six').style.fontWeight = 'bold';
        }
}   
else alert(" localStorage cant be used");
{
    function clickMeBold()
    {
        if (document.querySelector('#normal').checked === true)
        {
            localStorage.setItem('check',0);
            document.querySelector('#Six').style.fontWeight = 'normal';
        }
        if (document.querySelector('#normal').checked === false)
        {
            localStorage.setItem('check',1);
            document.querySelector('#Six').style.fontWeight = 'bold';
        }
    }
}  

//task_5
document.getElementById("x").addEventListener("scroll",func);
function func()
{
    alert("Stop scrolling");
}
    
//task_6
document.addEventListener('DOMContentLoaded', () => {

    makeEditableBlock('2');
    initEditableBlocks();

    })

const initEditableBlocks = () => {
    Array.from(document.getElementsByClassName('editArea')).map((area) => {
        area.addEventListener('change', (event) => {
        const newContent = event.target.value;
        localStorage.setItem(`${event.target.parentNode.id}Content`, newContent);
        event.target.parentNode.children[0].innerHTML = newContent;
        })
    })
    Array.from(document.getElementsByClassName('editBtn')).map((btn) => {
        btn.addEventListener('click', (event) => {
        localStorage.removeItem(`${event.target.parentNode.id}Content`);
        document.location.reload();
        })
    })
}
const makeEditableBlock = (blockId) => {
    if(isHTML(localStorage.getItem(`${blockId}Content`)))
    {
        const content = localStorage.getItem(`${blockId}Content`) ?
        localStorage.getItem(`${blockId}Content`) : 
        document.getElementById(blockId).innerHTML;
        document.getElementById(blockId).innerHTML = content;
        document.getElementById(blockId).insertAdjacentHTML('beforeend', 
        `<textarea class="editArea">${content}</textarea>
        <button type="submit" class="editBtn">Return default</button>`)   
    }
    else
    {
        const content = localStorage.getItem(`${blockId}Content`) ?
        localStorage.getItem(`${blockId}Content`) : 
        document.getElementById(blockId).innerText;
        document.getElementById(blockId).innerText = content;
        document.getElementById(blockId).insertAdjacentHTML('beforeend', 
        `<textarea class="editArea">${content}</textarea>
        <button type="submit" class="editBtn">Return default</button>`)
    }

}

//validation
function isHTML(str) {
  return /<(br|basefont|hr|input|source|frame|param|area|meta|!--|col|link|option|base|img|wbr|!DOCTYPE).*?>|<(a|abbr|acronym|address|applet|article|aside|audio|b|bdi|bdo|big|blockquote|body|button|canvas|caption|center|cite|code|colgroup|command|datalist|dd|del|details|dfn|dialog|dir|div|dl|dt|em|embed|fieldset|figcaption|figure|font|footer|form|frameset|head|header|hgroup|h1|h2|h3|h4|h5|h6|html|i|iframe|ins|kbd|keygen|label|legend|li|map|mark|menu|meter|nav|noframes|noscript|object|ol|optgroup|output|p|pre|progress|q|rp|rt|ruby|s|samp|script|section|select|small|span|strike|strong|style|sub|summary|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|track|tt|u|ul|var|video).*?<\/\2>/.test(
    str
  );
}