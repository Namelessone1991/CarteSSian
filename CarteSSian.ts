$(document).ready( function()
{
 

let list: any[] = [{'background-color':'black'}];

list.push({'color':'blue'});




let body = 'body';


function paramTest(element: string, x: number, y: number, cssParams: any[])
   {
     
     for (let i = 0; i < Object.keys(cssParams).length; i++)
     {

     $(element).css(cssParams[i]);
     console.log("iterated values "+  JSON.stringify(list[i]));
     }


   }


paramTest(body,0,0,list);






});