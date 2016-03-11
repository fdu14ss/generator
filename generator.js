var _ = require("./underscore-min.js");

var example = {
        landing: 0,
        pages: [
            {
                name: 'inbox',
                url: 'inbox.jpg',
                actions: [{
                    "top":"160px","left":"10px","wide":"342.35236178762267px","high":"75.3688259420789px", link: 0
                }, {
                    "top":"0px","left":"7.8058067569092024px","wide":"262.1941932430908px","high":"75.96116135138185px", link: 1
                }, {
                    "top":"460px","left":"10px","wide":"89.92893218813452px","high":"74.92893218813447px", link: 2
                }, {
                    "top":"318.42173714778846px","left":"15.873478855663453px","wide":"342.9289321881345px","high":"77.92893218813452px", link: 3
                }]
            },
            {
                name: 'new',
                url: 'new.jpg',
                actions: []
            },
            {
                name: 'search',
                url: 'search.jpg',
                actions: []
            },
            {
                name: 'reply',
                url: 'reply.jpg',
                actions: []
            }
        ]
};

var buildJS = function(jstmpl, app, cb) {
    cb(jstmpl({app: app}));
};

var buildHTML = function(htmltmpl, app, cb) {
    _.each(app.pages, function(page, idx) {
        cb(app.pages[idx].name+'.html', htmltmpl({url: page.url}));
    });
};

var fs = require('fs');

fs.readFile('app.template.js', function(err, data) {
    //console.log(data.toString());
    //_.template(data.toString());
    var t = _.template(data.toString());
    buildJS(t, example, _.partial(fs.writeFile, 'app.js'));
});

fs.readFile('page.template.html', function (err, data) {
    var t = _.template(data.toString());
    buildHTML(t, example, fs.writeFile);
});

