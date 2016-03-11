//var LayoutXMLParser = require("./parser.js").LayoutXMLParser;
//var Thenable = require("./parser.js").Thenable;
//
//
//var yes = LayoutXMLParser("<xml><fuck><shit>hahahahahhaha</shit></fuck></xml>");
//
////var t = new Thenable(0);
//
////t.then(function(d){return d+1;}).then(function(d){return d*2;});
//
//console.log(yes);
////console.log(t.v)

var _ = require('./underscore-min.js');

console.log(_.template('<%= objs %>')({objs : [1,2,3,4]}));
//var fs = require('fs');
//
//fs.readFile('page.template.html', function(err, data) {
//    var p = _.template(data.toString());
//    //console.log(p({'image_url': 'demo.png'}));
//    fs.writeFile('demo.html', p({'image_url': 'demo.png'}), function () {
//        console.log("hi");
//    });
//});

