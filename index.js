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
                        }, 3000);
                    }, 3000);
                }, 3000);
            }, 3000);
        }, 3000);
    }, 3000);
}

function task_2()
{
    document.getElementById("x").addEventListener("scroll",funcScroll);
    function funcScroll()
    {
        setTimeout
        (
            function()
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
            },3000
        ) 
    }
}

function F_Commit(url)
{
    fetch(url).then((response) => 
    {
        if (!response.ok)
        {
            ShowBlock.style.background = "red";
            ShowBlock.style.textAling = "center";
            ShowBlock.style.height = "50px";
            ShowBlock.style.border = "2 px solid black";
            ShowBlock.innerHTML = response.status + "-" + response.statusText;
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
        ShowBlock.style.background = "green";
        ShowBlock.style.textAling = "center";
        ShowBlock.style.height = "50px";
        ShowBlock.style.border = "2 px solid black";
        ShowBlock.innerHTML = answ;
        throw new Error(response.message);
    })
    .catch((Error) => {});
}

function task_3()
{
    B1.onclick = () =>
    {
        let url = "https://api.github.com/repos/" + area_Name.value + "/" + area_Rep.value + "/commits";
        F_Commit(url);
    }
    
    B3.onclick = () =>
    {
        ShowBlock.innerText = "";
        ShowBlock.style.background = "#6EB5C0";
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
    B_Sort.onclick = () =>
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