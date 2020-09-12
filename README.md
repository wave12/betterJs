# betterJs
This is a lightweight overall solution for the web front end that does not rely on any other third-party framework, such as jQuery. This framework is built with native JavaScript, including UI components, DOM operations and other common function operations. The whole code is very small and has excellent performance.

## 1. How to use it

### (1). Add CSS and JS files to the web page, such as:
<pre>
&lt;link rel="stylesheet" href="./css/betterJs.css"&gt;&lt;/link&gt; 
&lt;script type="text/javascript" src="./betterJs.js"&gt;&lt;/script&gt; 
</pre>
You need to adjust to the actual path of your project.

### (2). Write your scripts in bj.ready(...)
<pre>
 bj.ready(function () {
        bj('p').css('color', '#0f0');
        bj('h2').css({'color': '#0f0', 'border': '1px solid #00f'});
        bj('p').event('click', function () {
            alert('click');
        });

        bj('#btnNormal').event('click', function () {
            alert('click button');
        });

        bj('#btn3').event('click', function () {
            alert('click button3');
        });

 });
</pre>
BetterJS refers to some of jQuery's advantages and implements some excellent functions. Using bj is just like jQuery's $.

## 2. ui control snapshot
### (1). button
![button controll](https://raw.githubusercontent.com/wave12/betterJs/master/snapshot/button.png)

### (2). tree
![tree controll](https://raw.githubusercontent.com/wave12/betterJs/master/snapshot/tree.png)

### (3). dialog
![dialog controll](https://raw.githubusercontent.com/wave12/betterJs/master/snapshot/dialog.png)

### (4). datagrid
![datagrid controll](https://raw.githubusercontent.com/wave12/betterJs/master/snapshot/datagrid.png)

For more features, please download the entire package and refer to our example.

## 3. online demo
  You can go to our website to see <a target="_blank"  href="http://www.wave12.com/betterJs/example/introduce/index.html">online demo</a>.
