$(document).ready(function () {
    function compare(a, b) {
        if (a.property < b.property)
            return -1;
        if (a.property > b.property)
            return 1;
        return 0;
    }
    var cartessian = (function () {
        function cartessian(element, x, y, height, width) {
            this.element = element;
            this.x = x;
            this.y = y;
            this.height = height;
            this.width = width;
        }
        cartessian.prototype.addCss = function (cssvalues) {
            //this is the function that will be used to sort the array entries by alphabetical order
            cssvalues.sort(compare);
            for (var i = 0; Object.keys(cssvalues).length < i; i++) {
                cssvalues[i].id = i;
                this.properties.push(cssvalues[i]);
                console.log(JSON.stringify(cssvalues[i]));
            }
        };
        return cartessian;
    }());
    function Search(searchData, searchValue) {
        var index = searchData.length - 1;
        var half = Math.floor(index / 2);
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
    function replaceElement(arraySource, elementToReplace) {
        for (var i = 0; i < elementToReplace.length; i++) {
            var exists = Search(arraySource, elementToReplace[i].property);
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
    //this is the format for all the arrays, this will allow 
    //one to search through indexes
    var cssData = [
        { id: 0, property: "background-color", value: "black" },
        { id: 1, property: "color", value: "white" },
        { id: 2, property: "delta", value: "delta" }
    ];
    var replacer = [
        { id: 0, property: "color", value: "red" },
        { id: 1, property: "background-color", value: "black" },
        { id: 2, property: "red", value: "Times" },
        { id: 3, property: "miko", value: "Times" }
    ];
    console.log("Value of searching " + Search(cssData, "hjshjshjs"));
    replaceElement(cssData, replacer);
    /*
     console.log("Element before the change property : "+cssData[1].property + " value: "+cssData[1].value);
      
      
    
    
     console.log("Element AFTER the change property : "+cssData[1].property + " value: "+cssData[1].value);
    
     console.log("Element AFTER the change property background color : "+cssData[0].property + " value: "+cssData[0].value);
    
    console.log("The result of applying the array search in cssData is:  property " + cssData[Search(cssData, "color")].property+ " The value is "+ cssData[Search(cssData, "color")].value);
    
    */
    $("body").css(cssData[0].property, cssData[0].value);
    $("body").css(cssData[1].property, cssData[1].value);
    // $("body").css(cssData[2].property, cssData[2].value);
    //$("body").css({cssData[0].property, "'red'"});
});
