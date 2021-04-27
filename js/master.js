var sheet = document.createElement('link')
sheet.href = "css/bootstrap.css";
sheet.rel = "stylesheet";
document.head.appendChild(sheet);

var sheet2 = document.createElement('link')
sheet2.href = "css/sa.css?v=1";
sheet2.rel = "stylesheet";
document.head.appendChild(sheet2);

var sheet3 = document.createElement('link')
sheet3.href = "css/style.css?v=1";
sheet3.rel = "stylesheet";
document.head.appendChild(sheet3);

function include(file) {

    var script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);
}

include('js/jquery-3.5.1.min.js');
include('js/bootstrap.min.js');
include('js/menu.js');
include('js/custom.js?v=1');