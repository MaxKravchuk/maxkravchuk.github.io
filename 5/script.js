function f1()
            {
                var elem = document.getElementById("firsth2");
                if(elem.style.color=='black')
                {
                    elem.style.color = 'white';
                    elem.style.backgroundColor = 'blue';
                }
                else
                {
                    elem.style.color = 'black';
                    elem.style.backgroundColor = 'yellow';
                }
            }

            function f2()
            {
                var elem = document.querySelector("#firstp")
                if(elem.style.color=='red')
                {
                    elem.style.color = 'white';
                    elem.style.backgroundColor = 'green';
                }
                else
                {
                    elem.style.color = 'red';
                    elem.style.backgroundColor = 'white';
                }
            }

            function f3()
            {
                var elem = document.getElementById("firstdiv");
                if(elem.style.color=='black')
                {
                    elem.style.color = 'white';
                    elem.style.backgroundColor = 'blue';
                }
                else
                {
                    elem.style.color = 'black';
                    elem.style.backgroundColor = 'yellow';
                }
            }
        
            var flag = true;
            function f4()
            {
                var img = document.getElementById("img");
                var text = document.querySelector("#imgtext");
                if(flag)
                {
                    img.style.width='300px';
                    img.style.height='300px';
                    text.style.color='red';
                    flag=false;
                }
                else
                {
                    img.style.width='100px';
                    img.style.height='100px';
                    text.style.color='black';
                    flag=true;
                }
            }