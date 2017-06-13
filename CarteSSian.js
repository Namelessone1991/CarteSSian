$(document).ready(function () {
    var list = [{ 'background-color': 'black' }];
    list.push({ 'color': 'blue' });
    var body = 'body';
    function paramTest(element, x, y, cssParams) {
        for (var i = 0; i < Object.keys(cssParams).length; i++) {
            $(element).css(cssParams[i]);
            console.log("iterated values " + JSON.stringify(list[i]));
        }
    }
    paramTest(body, 0, 0, list);
});
