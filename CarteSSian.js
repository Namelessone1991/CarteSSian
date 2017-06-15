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
            cssvalues.sort(compare);
            for (var i = 0; Object.keys(cssvalues).length < i; i++) {
                cssvalues[i].id = i;
                this.properties.push(cssvalues[i]);
                console.log(JSON.stringify(cssvalues[i]));
            }
        };
        return cartessian;
    }());
    //this is the format for all the arrays, this will allow 
    //one to search through indexes
    var cssData = [
        { id: 67, property: "color", value: "red" },
        { id: 56, property: "background-color", value: "black" }
    ];
    //this is the function that will be used to sort the array entries by alphabetical order
    //cssData.sort(compare);
    $("body").css(cssData[0].property, cssData[0].value);
    $("body").css(cssData[1].property, cssData[1].value);
    //$("body").css({cssData[0].property, "'red'"});
});
