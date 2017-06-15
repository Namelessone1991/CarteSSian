$(document).ready(function () {

  function compare(a, b) {
    if (a.property < b.property)
      return -1;
    if (a.property > b.property)
      return 1;
    return 0;
  }


  class cartessian {

    //top to bottom coordinates using Css' top and left attributes
    x: number;
    y: number;

    //dimension of the div that will be used to associate 
    height: number;
    width: number;

    element: string;

    properties: any[];

    constructor(element: string, x: number, y: number, height?: number, width?: number) {

      this.element = element;
      this.x = x;
      this.y = y;

      this.height = height;
      this.width = width;



    }

    addCss(cssvalues: any[]) {
      
      cssvalues.sort(compare);

      for (let i = 0; Object.keys(cssvalues).length < i; i++) {
      
        cssvalues[i].id = i;

        this.properties.push(cssvalues[i]);
        console.log(JSON.stringify(cssvalues[i]));

      }

    }

  }



  //this is the format for all the arrays, this will allow 
  //one to search through indexes
  var cssData: { id: number, property: string, value: string }[] = [
    { id: 67, property: "color", value: "red" },
    { id: 56, property: "background-color", value: "black" }
  ];



  //this is the function that will be used to sort the array entries by alphabetical order
  //cssData.sort(compare);







  $("body").css(cssData[0].property, cssData[0].value);
  $("body").css(cssData[1].property, cssData[1].value);
  //$("body").css({cssData[0].property, "'red'"});





















});