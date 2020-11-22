function task_1(){
    let one = document.querySelector("top").innerHTML;
    let two = document.querySelector("two").innerHTML;
    let three = document.querySelector("three").innerHTML;
    let four = document.querySelector("four").innerHTML;
    let five = document.querySelector("five").innerHTML;
    let six = document.querySelector("six").innerHTML;
    setTimeout(function(){
        document.querySelector("five").innerHTML = six;
        setTimeout(function(){
            document.querySelector("four").innerHTML = five;
            setTimeout(function(){
                document.querySelector("three").innerHTML = four;
                setTimeout(function(){
                    document.querySelector("two").innerHTML = three;
                    setTimeout(function(){
                        document.querySelector("top").innerHTML = two;
                        setTimeout(function(){
                            document.querySelector("six").innerHTML = one;
                        }, 5000);
                    }, 5000);
                }, 5000);
            }, 5000);
        }, 5000);
    }, 5000);
}

function task_2()
{
    document.getElementById("x").addEventListener("scroll",funcScroll);
    function funcScroll()
    { 
        document.querySelector("#First").style.fontStyle='italic';
        document.querySelector("#Six").style.fontStyle='italic';

        setInterval(function()
        {
            if(document.querySelector("#four").style.fontStyle=='italic')
            {     
                document.querySelector("#four").style.fontStyle='normal';
            }
            else
            {   
                document.querySelector("#four").style.fontStyle='italic';
            }
        },3000)
    }
}

function Get_Commits(url)
{
    fetch(url).then((response) => 
    {
        if (!response.ok)
        {
            Git_Resp_1.style.background = "red";
            Git_Resp_1.style.textAling = "center";
            Git_Resp_1.style.height = "50px";
            Git_Resp_1.style.border = "2 px solid black";
            Git_Resp_1.innerHTML = response.status + "-" + response.statusText;
            throw new Error(response.message);
        }
        return response.json();
    })
    .then((contents) => 
    {
        let answ = "";
        contents.forEach((i) => {
            answ += `${i.commit.author.name} : ${i.commit.message}\n`;
        });
        Git_Resp_1.style.background = "green";
        Git_Resp_1.style.textAling = "center";
        Git_Resp_1.style.height = "50px";
        Git_Resp_1.style.border = "2 px solid black";
        Git_Resp_1.innerHTML = answ;
        throw new Error(response.message);
    })
    .catch((Error) => {});
}

function task_3()
{
    B1.onclick = () =>
    {
        let url = "https://api.github.com/repos/" + area_1.value + "/" + area_2.value + "/commits";
        Get_Commits(url);
    }
    
    B3.onclick = () =>
    {
        Git_Resp_1.value="";
        Git_Resp_1.style.background = "white";
    }
}

function m_C(cb_1,cb_2)
{
    console.log("1");
    cb_1(cb_2);
}

function f_C(cb_2)
{
    console.log("2");
    cb_2();
}

function s_C()
{
    console.log("3");
}

function task_4(c_main, cb_1, cb_2)
{
    c_main(cb_1,cb_2);
}

let Sort = (arr) =>
{
    let l = arr.length;
    for(let i = 0; i < l; i++)
    {
        let min = i;
        for(let j = i+1; j< l; j++)
        {
            if(arr[min]>arr[j])
            {
                min = j;
            }
        }
        if (min !== 1)
        {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr;
}

function task_5()
{
    const reg = /^\d+$/;
    B2.onclick = () =>
    {
        arr = SortArea.value.split(" ");
        let it = arr.length;
        for(let i = 0; i < it; i++)
        {
            for(let j = 0; j < arr.length; j++)
            {
                if (!reg.test(arr[j]))
                {
                    arr.splice(j,1);
                    break;
                }
            }
        }
        for(var i = 0; i < arr.length; i++)
        {
            arr[i] = parseInt(arr[i]);
        }
        arr = Sort(arr);
        alert(arr);
        SortArea.value = "";
    }
}

////
//task_1();
task_2();
task_3();
task_4(m_C, f_C, s_C);
task_5();