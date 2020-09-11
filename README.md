# betterJs
This is a lightweight overall solution for the web front end that does not rely on any other third-party framework, such as jQuery. This framework is built with native JavaScript, including UI components, DOM operations and other common function operations. The whole code is very small and has excellent performance.

How to use it

1. Add CSS and JS files to the web page, such as:
<code>
&lt;link rel="stylesheet" href="./css/betterJs.css"&gt;&lt;/link&gt; 
&lt;script type="text/javascript" src="./betterJs.js"&gt;&lt;/script&gt; 
</code>
You need to adjust to the actual path of your project.

2. In the bj.ready Writing scripts in it
<code>
 bj.ready(function () {
        bj('p').css('color', '#0f0');
        bj('h2').css({'color': '#0f0', 'border': '1px solid #00f'});
        bj('p').setEvent('click', function () {
            alert('click');
        });

        bj('#btnNormal').setEvent('click', function () {
            alert('click button');
        });

        bj('#btn3').setEvent('click', function () {
            alert('click button3');
        });

 });
</code>

