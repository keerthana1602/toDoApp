
var myList=document.getElementsByTagName('li');
var index;
for(index=0;index<myList.length;index++){
    var aSpanTag=document.createElement("SPAN");
    var someTxt=document.createTextNode("\u00D7");
    aSpanTag.className="close";
    aSpanTag.appendChild(someTxt);
    myList[index].appendChild(aSpanTag);
}



var closeButton=document.getElementsByClassName("close");
 for(i=0;i<closeButton.length;i++)
        {
            closeButton[i].onclick=function()
            {
                var theDiv=this.parentElement;
                theDiv.style.display="none";
            }
        }

function createNewElement() {
    
    var li=document.createElement('li');
    var inputValue=document.getElementById("the-input").value;
    var textNode=document.createTextNode(inputValue);
    li.appendChild(textNode);
    if(inputValue=='')
   {
       alert("HEY no input!");
   }
    else
    {
        document.getElementById("the-ul").appendChild(li);
    }
    
    document.getElementsByClassName("enter-activity").value=" ";
    
    var thePanTag= document.createElement("SPAN");
    var txt= document.createTextNode("\u00D7");
    thePanTag.className="close";
    thePanTag.appendChild(txt);
    li.append(thePanTag);
    for(i=0;i<closeButton.length;i++)
        {
            closeButton[i].onclick=function()
            {
                var theDiv=this.parentElement;
                theDiv.style.display="none";
            }
        }
    
}
var ulList=document.querySelector('ul');
ulList.addEventListener('click',function(event)
                       {
    if(event.target.tagName==="LI")
        event.target.classList.toggle('checked');
}
                       
                       );
