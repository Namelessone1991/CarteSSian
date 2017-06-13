$(document).ready(function () {
    console.log('This is a test');
    var cssParam = "<style> body { 'position':'absolute', 'color':'blue', 'font-family': '\"Serif\", \"Times new Roman\"', 'font-size':'20px', 'left':'100px','top':'100px'} </style>";
    $(cssParam).appendTo("Head");
    //  $(".test").data("stylesData", {color:'blue'});
    var value = 'yellow';
    var back = 'green';
    var list = [{ 'background-color': 'black' }];
    list.push({ 'color': 'blue' });
    var body = 'body';
    //console.log("Key values"+Object.keys(list).length);
    function paramTest(element, x, y, cssParams) {
        for (var i = 0; i < Object.keys(cssParams).length; i++) {
            $(element).css(cssParams[i]);
            console.log("iterated values " + JSON.stringify(list[i]));
        }
    }
    paramTest(body, 0, 0, list);
    // paramTest(0,100, cssParam);
    // paramTest(0,100,"\'position\':\'absolute\', \'color\':\'blue\'");
    //console.log("The values are  x  "+x+" y  "+y+ " "+ cssParams.join(" ") );
    /*
  
    function setCss(x: number, y: number,  ) //this uses coordinates based on the
    {
      
  
        
    }
  
  */
    // $(".test").css({ 'position':'absolute', 'color':'blue', 'font-family': '\"Serif\", \"Times new Roman\"', 'font-size':'20px', 'left':'100px','top':'100px'});
    // $("body").css({'background-color':'black', 'color':'red'});
});
