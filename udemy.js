var $, console, document;

$(function () {
    'use strict';
    //  variables Bank
    var nav, container, navbarHeader, collapse, ul, hi, img, btn, fieldset, form, legend, jumbotron;
    $('[data-toggle="tooltip"]').tooltip();

    $('body').addClass('container ').css('text-align', 'center').css('background', 'linear-gradient(180deg, #ffcccc, #ffddde )'); //.css('margin-bottom', '10%');
    // h1 element
    hi = document.querySelector('h1');
    hi.innerHTML = 'Sign in Here';
    hi.setAttribute('class', 'fa fa-thumbs-up');
    $(hi).css('color', 'teal');
    hi.style.marginTop = '5em';
    $(hi).remove();
    // hi = document.querySelectorAll(h2);
    console.log(hi);

    // jumbotron
    jumbotron = document.querySelector('.contain');
    $(jumbotron).addClass('container jumbotron');
    console.log(hi);

    // nav element
    nav = document.querySelector('nav');
    nav.setAttribute('class', 'navbar navbar-inverse navbar-static-top');
    nav.style.backgroundColor = '#ffcccc';
    nav.style.border = '#ffc';
    console.log(nav);
    // div with class .container
    container = document.querySelector('#container');
    container.setAttribute('class', 'container');
    console.log(container);
    // div with class .navbar-header
    navbarHeader = document.querySelector('#navbar-header');
    navbarHeader.setAttribute('class', 'navbar-header');
    console.log(navbarHeader);
    //  img element
    img = document.createElement('img');
    img.src = 'images/man-1.png';
    img.style.width = '5em';
    img.style.height = '5em';
    $(img).addClass('navbar-brand img-circle');
    img.alt = 'author';
    $(navbarHeader).append(img);
    console.log(img);
    //button element
    btn = document.createElement('button');
    $(btn).addClass('navbar-toggle');
    btn.setAttribute('data-toggle', 'collapse');
    btn.type = 'button';
    btn.setAttribute('data-target',
        '#navbar');
    btn.innerHTML = "<span class='sr-only'>navigation toggler</span><span class='icon-bar'></span>  <span class='icon-bar'></span><span class='icon-bar'></span> ";
    btn.style.backgroundColor = '#ffddde';
    btn.style.borderColor = '#aaa';
    navbarHeader.append(btn);
    console.log(btn);
    // div .collapse
    collapse = document.querySelector('#collapse');
    $(collapse).addClass('collapse navbar-collapse');
    collapse.setAttribute('id', 'navbar');
    console.log(collapse);

    // unoder list 
    ul = document.querySelector('ul');
    ul.innerHTML = "<li><a href='#' class='fa fa-home active'> Home </a></li><li><a href='#' class='fa fa-clock-o'> Events </a></li><li><a href='#' class='fa fa-lock'> Plans</a></li>";
    ul.setAttribute('class', 'nav navbar-nav list-unstyled');
    ul.style.color = 'whitesmoke';
    ul.style.fontSize = '20px';
    ul.style.padding = '1em';
    console.log(ul);

    // form element
    form = document.createElement('form');
    form.setAttribute('role', 'form');
    form.setAttribute('action', 'sample.html');
    form.setAttribute('method', 'POST');
    form.setAttribute('class', 'form-horizontal');
    form.innerHTML = `
    <div class='container'>
        <div class='form-group'>
            <label for='name' class='col-sm-2 control-label' style='cursor:pointer;'> Name </label>
            <div class='col-sm-10'>
            <input class='form-control' type='text' id='name'
                placeholder='Enter Your Name' required>
            </div>
        </div> 
        <div class='form-group'> 
            <label for='email' class='col-sm-2 control-label' style='cursor:pointer;'>
                Email
            </label>
            <div class='col-sm-10'>
                <input class='form-control' type='email'
                id='email' placeholder='Enter your Email' required/>
            </div>
        </div>
        <div class='form-group'> 
            <label for='password' class='col-sm-2 control-label' style='cursor:pointer;'>
                Password
            </label>
            <div class='col-sm-10'>
                <input type = 'password'
                id='password' class='form-control' placeholder='Enter your Password' required/>
            </div>
        </div>
        <div class='form-group'>
            <div class='col-sm-offset-2 col-sm-10'>
                <div class='checkbox'>
                    <label><input type='checkbox' />
                                        Remember me</label>
                </div>
            </div>
        </div>
        <div class='form-group'>
            <div class='col-sm-offset-2 col-sm-10'>
                <button class='btn btn-default' type='submit'>Sign in</button>
            </div>
        </div>
    </div> `;

    // legend element
    legend = document.createElement('legend');
    legend.innerHTML = 'Sign In Below';
    legend.style.borderStyle = 'none';
    legend.style.textLineThrough = '2px';

    // fieldset element
    fieldset = document.createElement('fieldset');

    fieldset.style.border = ' 2px dashed teal';

    // paragraph element
    var p = document.createElement('p');
    p.setAttribute('class', 'lead border-rounded');
    p.style.marginTop = '1em';
    p.style.padding = '1em';
    p.style.background = '#ffcccc';
    p.style.border = '1px solid #aaa';
    p.style.borderRadius = '9px';
    $(p).hide();

    // board of created elements
    fieldset.append(legend);
    fieldset.append(form);
    $(jumbotron).append(fieldset);
    jumbotron.append(p);

    // collecting form details
    form.onsubmit = function (e) {
        e.preventDefault();
        $(p).show();
        p.innerHTML = 'Your Name is: ' + '<b>' + form.name.value + '</b>' + '<br>' + 'Your Email: ' + '<b>' +
            form.email.value + '</b>' + '<br/>' + 'and Your Password: ' + '<b>' + form.password.value + '</b>';
        console.log(form.name.value + '<br>' + form.email.value + ' < br > ' + form.passwod.value)
        this.reset();
        alert('Success!!!');
    };
    console.log(jumbotron);
    //console.log(well);
});
