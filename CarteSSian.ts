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

    replaceElement: (arraySource: any[], elementToReplace: any[]) => void;

    

    constructor(element: string, x: number, y: number, height?: number, width?: number) {

      this.element = element;
      this.x = x;
      this.y = y;

      this.height = height;
      this.width = width;



    }

    addCss(cssvalues: any[]) {


      //this is the function that will be used to sort the array entries by alphabetical order
      cssvalues.sort(compare);

      for (let i = 0; Object.keys(cssvalues).length < i; i++) {

        cssvalues[i].id = i;

        this.properties.push(cssvalues[i]);
        console.log(JSON.stringify(cssvalues[i]));

      }

    }

  }


  function Search(searchData: any[], searchValue: string) {

    let index = searchData.length - 1;

    let half = Math.floor(index / 2);


    console.log("Value of the half" + half);

    while (half <= index || half >= 0) {

      if (searchData[half].property === searchValue) {

        return half;
      }

      if (searchData[half].property > searchValue) {

        half--;

        if ((searchData[half].property !== searchValue) && (half <= 0)) {

          return -1;
        }


        if ((searchData[half].property === searchValue) && (half >= 0)) {



          return half;
        }

      }

      if (searchData[half].property < searchValue) {
        half++;

        if ((searchData[half].property !== searchValue) && (half >= searchData.length - 1)) {

          return -1;
        }


        if (searchData[half].property === searchValue) {
          return half;
        }
      }

    }

    return -1;
  }






   cartessian.prototype.replaceElement = (arraySource: any[], elementToReplace: any[]): void => {

    for (let i = 0; i < elementToReplace.length; i++) {
      let exists = Search(arraySource, elementToReplace[i].property);

      console.log("value of exists :" + exists);
      if (exists !== -1) {

        console.log("The value of exists is: " + exists);

        arraySource[exists] = elementToReplace[i];

        console.log("The value was replaced into the string" + JSON.stringify(elementToReplace[i]));

      }

      if (exists === -1) {

        

        arraySource.push(elementToReplace[i]);

        arraySource.sort(compare);

      }



    }

  }

  
 


  let a = "something";
   cartessian[a]();

   







  //this is the format for all the arrays, this will allow 
  //one to search through indexes
  var cssData: { id: number, property: string, value: string }[] = [
    { id: 0, property: "background-color", value: "black" },
    { id: 1, property: "color", value: "white" },
    { id: 2, property: "delta", value: "delta" }
  ];



  var replacer: { id: number, property: string, value: string }[] = [
    { id: 0, property: "color", value: "red" },
    { id: 1, property: "background-color", value: "black" },
    { id: 2, property: "red", value: "Times" },
    { id: 3, property: "miko", value: "Times" }
  ];



  console.log("Value of searching " + Search(cssData, "hjshjshjs"));

   



  $("body").css(cssData[0].property, cssData[0].value);
  $("body").css(cssData[1].property, cssData[1].value);
  // $("body").css(cssData[2].property, cssData[2].value);
  //$("body").css({cssData[0].property, "'red'"});





















});