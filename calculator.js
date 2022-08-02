function calc()
{
    var replaced = res.value ;
    if(res.value.includes ('÷')|| res.value.includes ('×'))
    {
        replaced= res.value.replaceAll('×','*').replaceAll('÷','/'); 
        res.value= eval(replaced);
    }
    res.value= eval(replaced);
}

function move()
{
    window.location.replace("calculator.html");
}

function dtheme()
{
    const buttons= document.getElementsByTagName("label");
    let size = buttons.length;
    for (let i = 0; i < size ;i++)
    {
        if(buttons[i].className=="button1")
        {
            buttons[i].className= "button3";
        }
        else if (buttons[i].className=="button2") 
        {
            buttons[i].className= "button4";
        }
        
    }
    document.body.style.backgroundColor = 'black';
    document.getElementById("div").style.backgroundColor ="white";
}

function ltheme()
{
    const buttons= document.getElementsByTagName("label");
    let size = buttons.length;
    for (let i = 0; i < size ;i++)
    {
        if(buttons[i].className=="button3")
        {
            buttons[i].className= "button1";
        }
        else if (buttons[i].className=="button4") 
        {
            buttons[i].className= "button2";
        }
        
    }
    document.body.style.backgroundColor = 'white';
    document.getElementById("div").style.backgroundColor ="white";
}