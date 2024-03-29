let selectedpiece=null

const cells=document.getElementsByTagName('td')
for(let i=0;i<cells.length;i++)
{
    cells[i].addEventListener('click',function(){
        cellSelected(this)
    })
}

function cellSelected(box){

    if(selectedpiece===box)
    {
        selectedpiece=null
        return
    }

    if(selectedpiece===null)
    {
        selectedpiece=box
    }else
    {
        box.innerHTML=selectedpiece.innerHTML
        selectedpiece.innerHTML=''
        selectedpiece=null
    }
}