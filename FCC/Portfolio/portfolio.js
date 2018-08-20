var console, $, document;
$(document).ready(function () {
    'use strict';
    var body, container, div, div1, div2, div3, p;

    // div with class .container
    container = document.createElement('div');
    body = document.getElementsByTagName('body');
    container.setAttribute('class', 'container');
    $(body).append(container);
    console.log(body);
    console.log(container);
    div = document.createElement('div');
    div.setAttribute('class', 'row');
    console.log(div);
    div1 = document.createElement('div');
    div1.setAttribute('class', 'col-sm-4');
    console.log(div1);
    p = document.createElement('p');
    p.innerHTML = 'hello world';
    console.log(p);

    // append
    container.append(div);
    div.append(p);
    console.log(container);

});
