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
        if(buttons[i].className=="button")
        {
            buttons[i].className= "dbutton";
        }
        else if (buttons[i].className=="symbol") 
        {
            buttons[i].className= "dsymbol";
        }
        else if (buttons[i].className=="equal")
        {
            buttons[i].className="dequal";
        }
        
    }
    document.body.style.backgroundColor = 'black';
    document.getElementsByClassName("themes")[0].className= "dthemes";
    document.getElementsByClassName("calculator")[0].className= "dcalculator";
    document.getElementsByClassName("textBox")[0].className= "dtextBox";   
}

function ltheme()
{
    const buttons= document.getElementsByTagName("label");
    let size = buttons.length;
    for (let i = 0; i < size ;i++)
    {
        if(buttons[i].className=="dbutton")
        {
            buttons[i].className= "button";
        }
        else if (buttons[i].className=="dsymbol") 
        {
            buttons[i].className= "symbol";
        }
        else if (buttons[i].className=="dequal")
        {
            buttons[i].className="equal";
        }
        
    }
    document.body.style.backgroundColor = 'white';
    document.getElementsByClassName("dthemes")[0].className= "themes";
    document.getElementsByClassName("dcalculator")[0].className= "calculator";
    document.getElementsByClassName("dtextBox")[0].className= "textBox";


}