let rock=1;
let paper=2;
let scissor=3;
let rockImage="static/images/rock.png";
let paperImage="static/images/paper.jpg";
let scissorImage="static/images/scissor.jpg";
function ageInDays()
{
    let year=prompt("What year you were born...?");
    console.log(year);
    let date = new Date();
    let currentYear =(date.getFullYear());
    while(year==='')
    {
        year=prompt("Please mention your age , what year you were born...?");
    }
    while(year===null && document.getElementById('ageInDays')!=null)
    {
        console.log("hhhh");
        document.getElementById('ageInDays').remove();
    }
    while(year>currentYear)
    {
        year=prompt("Seems like you have come from the future ,What year you were born...?");
    }
   
    if (year!=null)  
    {
        let ageInDayss = (currentYear-year)*365;
        if(document.getElementById('ageInDays')===null )
        {    
            var h1=document.createElement('h1');
            var text=document.createTextNode("Yoy are "+ageInDayss+" days old.");
            h1.setAttribute('id','ageInDays');
            h1.appendChild(text);
            document.getElementById('flexBoxResult').appendChild(h1);
        }
        else
        {   
            document.getElementById('ageInDays').remove();
            var h1=document.createElement('h1');
            var text=document.createTextNode("Yoy are "+ageInDayss+" days old.");
            h1.setAttribute('id','ageInDays');
            h1.appendChild(text);
            document.getElementById('flexBoxResult').appendChild(h1);
        }
    }
 

}
function reset()
{   
    var h1=document.createElement('h1');
    var text=document.createTextNode("");
    h1.setAttribute('id','ageInDays');
    h1.appendChild(text);
    document.getElementById('flexBoxResult').appendChild(h1);
    document.getElementById('ageInDays').remove();
}
function generateCat()
{
    var img=document.createElement('img');
    img.setAttribute('src','static/images/cat.jpg');
    document.getElementById('catArea').appendChild(img);
    window.scrollBy(0,100);
}
function setAttributeCustom(el,attrs)
{
    for(key in attrs)
    {
        el.setAttribute(key,attrs[key]);
    }
}
function returnComputerImage(comupterChoice)
{
        if(comupterChoice===rock)
        {
            return rockImage;
        }
        if(comupterChoice===paper)
        {
            return paperImage;
        }
        if(comupterChoice===scissor)
        {
            return scissorImage;
        }

    }

    function returnUserImage(userChoice)
{
        if(userChoice===rock)
        {
            return rockImage;
        }
        if(userChoice===paper)
        {
            return paperImage;
        }
        if(userChoice===scissor)
        {
            return scissorImage;
        }

    }


    function test()
    {
        let a="";
        window.onclick = e => {
            a= e.target.innerText;  // to get the element
            return a;
            // return (e.target);  // to get the element tag name alone
        } 
    }

function selectRock(e)
{

    let userChoice;
    let ss=e.target.src;
    e=window.eve
    if(ss.includes("rock"))
    {
        userChoice=1;
    }
    if(ss.includes("paper"))
    {
        userChoice=2;
    }
    if(ss.includes("scissor"))
    {
        userChoice=3;
    }

    let comupterChoice=getRandomArbitrary(1,3);
    console.log(comupterChoice);
    console.log(userChoice);
    if(comupterChoice===userChoice)
    {
      
        calculate(comupterChoice,userChoice,"Match Tied!!!");
              
    }
    if(comupterChoice===rock && userChoice===paper)
    {
        calculate(comupterChoice,userChoice,"You Won!!!");
    }
    if(comupterChoice===rock && userChoice===scissor)
    {
        calculate(comupterChoice,userChoice,"You Lost!!!");
    }
    if(comupterChoice===paper && userChoice===rock)
    {
        calculate(comupterChoice,userChoice,"You Lost!!!");
    }
    if(comupterChoice===paper && userChoice===scissor)
    {
        calculate(comupterChoice,userChoice,"You Won!!!");
    }
    if(comupterChoice===scissor && userChoice===paper)
    {
        calculate(comupterChoice,userChoice,"You Lost!!!");
    }
    if(comupterChoice===scissor && userChoice===rock)
    {
        calculate(comupterChoice,userChoice,"You Won!!!");
    }
}
function show()
{
    console.log("heyyyyy");
}
function setInitialState()
{
    
    

    let flexBoxContainer=document.createElement('div');
    setAttributeCustom(flexBoxContainer,{"class":"flex-box-container-3","id":"cont"});

    document.getElementById('container-3').appendChild(flexBoxContainer);
    
    let divRockImage=document.createElement('div');
    setAttributeCustom(divRockImage,{"class":"box","id":"rock","onclick":"selectRock(event)"});
    
    let divPaperImage=document.createElement('div');
    setAttributeCustom(divPaperImage,{"class":"box","id":"paper","onclick":"selectRock(event)"});

    let divScissorImage=document.createElement('div');
    setAttributeCustom(divScissorImage,{"class":"box","id":"scissor","onclick":"selectRock(event)"});
    
    flexBoxContainer.appendChild(divRockImage);
    flexBoxContainer.appendChild(divPaperImage);
    flexBoxContainer.appendChild(divScissorImage);

    let rockImage=document.createElement('img');
    setAttributeCustom(rockImage,{"src":"static/images/rock.png" ,"height":"200px", "width":"200px"});
    let paperImage=document.createElement('img');
    setAttributeCustom(paperImage,{"src":"static/images/paper.jpg" ,"height":"200px", "width":"200px"});
    let scissorImage=document.createElement('img');
    setAttributeCustom(scissorImage,{"src":"static/images/scissor.jpg" ,"height":"200px", "width":"200px"});


    divRockImage.appendChild(rockImage);
    divPaperImage.appendChild(paperImage);
    divScissorImage.appendChild(scissorImage);
    
}

function calculate(comupterChoice,userChoice,res)
{
    console.log('calculate');
    document.getElementById('cont').remove();

    var flex =document.createElement('div');
    flex.setAttribute('id','cont');
    flex.setAttribute('class','flex-box-container-3');
    document.getElementById('container-3').appendChild(flex);

    var divComputer=document.createElement('div');
    setAttributeCustom(divComputer,{"class":"box","id":"computerImage"});
    

    var computerImage=document.createElement('img');
    setAttributeCustom(computerImage,{"src":returnComputerImage(comupterChoice),"height":"200","width":"200"});
    divComputer.appendChild(computerImage);
    flex.appendChild(divComputer);

    var result=document.createElement('div');
    var resultText=document.createElement('h2');
    resultText.setAttribute('id','result');
    var text= document.createTextNode(res);
    flex.appendChild(result);
    result.appendChild(resultText);
    resultText.appendChild(text);

    var divUser=document.createElement('div');
    setAttributeCustom(divUser,{"class":"box","id":"userImage"});

    var userImage=document.createElement('img');
    setAttributeCustom(userImage,{"src":returnUserImage(userChoice),"height":"200","width":"200"});

    divUser.appendChild(userImage);
    flex.appendChild(divUser);  

    if(divComputer!=null)
    {
        let divReplayImage=document.createElement('div');
        divReplayImage.setAttribute('class','container-4');
        let replayImage=document.createElement('img');
        replayImage.setAttribute('src','static/images/replay.png');
        replayImage.setAttribute('id','replayd')
        replayImage.addEventListener("click", replay.bind(null, flex,divReplayImage));
        divReplayImage.appendChild(replayImage);
        document.getElementById('container-3').appendChild(divReplayImage);
    }

}

function replay(flex,divReplayImage)
{
    flex.remove();  
    divReplayImage.remove();
    setInitialState();

}

function getRandomArbitrary(min, max) {
    let num=Math.random() * (3 - 1) + 1;
    return Math.round(num);
}
