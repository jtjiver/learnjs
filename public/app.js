// We are creating a namespace here - called 'learnjs'
'use strict';
var learnjs = {};

learnjs.problemView = function(problemNumber) {
    var title = 'Problem #' + problemNumber + ' Coming Soon!';
    return $('<div class="problem-view">').text(title);
}

learnjs.showView = function(hash) {
    
    var routes = { 
        '#problem': learnjs.problemView
    }

    var hashParts = hash.split('-');
    var viewFn = routes[hashParts[0]];
    if (viewFn) {
        $('.view-container').empty().append(viewFn(hashParts[1]));
    }
}

learnjs.appOnReady = function() {

    //listener function defined below
    window.onhashchange = function() {
        learnjs.showView(window.location.hash);
    };

    learnjs.showView(window.location.hash);
}

