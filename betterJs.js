/*!
 * betterJs
 * version: 2.0.0.1
 * Copyright (c) 2020 wave12 corpration
 * Dual licensed under Freeware License and Commercial License.
 * http://www.wave12.com/betterJs
 */
var objBj = new Object();
objBj.lr = [];
objBj.ts = [];

var betterJs = {
    //onReady: function(f){
    //    objBj.lr[objBj.lr.length] = f;
    //}, 
};

function stp(e) {
    if ( e && e.stopPropagation ) e.stopPropagation();
    else  window.event.cancelBubble = true;
}

(function () {
    document.addEventListener("DOMContentLoaded", cmp, false);
})();

function cmp() {
    ht();
    cont();
}

function cont() {
    for (var i = 0; i < objBj.ts.length; ++i) {
        if (!objBj.ts[i]) {
            setTimeout('cont()', 200);
            return;
        }
    }
    for (var i = 0; i < objBj.lr.length; ++i) {
        objBj.lr[i]();
    }
    hdu();
}

function hdu(o) {
    a1(o);a2(o);a3(o);b(o);c(o);d(o);e(o);f(o);gd(o);h(o);i(o);j(o);k(o);l(o);m(o);n(o);oo(o);p(o);q(o);r(o);s(o);t(o);
    u(o);v(o);w(o);x(o);
}

function ht() {
    var arrObj = document.getElementsByClassName('bjTemplate');

    for (var m = 0; m < arrObj.length; ++m) {
        var ajax = new XMLHttpRequest();
        var objRoot = arrObj[m];
        var file = objRoot.getAttribute('src');
        file = file + "?" + new Date();    // 消除缓存，开发用
        //console.log("file:" + file);

        objBj.ts[m] = false;
        ajax.open("get", file);
        ajax.send();
        ajax.obj = objRoot;
        ajax.p = m;
        ajax.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var con = this.responseText;
                var e = document.createElement('div');
                e.innerHTML = con;
                //hdu(e);

                //this.obj.innerHTML = con;
                //this.obj.removeAttribute('src');
                //this.obj.removeAttribute('class');
                //hdu(this.obj);   // 仅局限于这一部分HTML代码

                var p = this.obj.parentNode;
                p.insertBefore(e, this.obj);
                p.removeChild(this.obj);
                objBj.ts[this.p] = true;
            }
        }
    }
}

function a1(obj) {
    var o = obj == null ? document : obj;
    var arrObj = o.getElementsByClassName('bjButton');
    for (var m = 0; m < arrObj.length; ++m) {
        var obj = arrObj[m];
        var iconClass = null;
        var options = obj.getAttribute('options');
        if (options != null) {
            options = "{" + options + "}";
            var jsonOptions = eval("(" + options + ")");
            iconClass = jsonOptions.iconClass;
        }
        var con = obj.innerHTML;

        obj.innerHTML = "";
        var spanCon = document.createElement('span');
        spanCon.setAttribute('class', 'bjButtonCon');
        var spanText = document.createElement('span');
        if (iconClass != null) {
            var spanIcon = document.createElement('span');
            spanIcon.setAttribute('class', 'iconAdd');
            spanCon.appendChild(spanIcon);
            spanText.setAttribute('class', 'bjButtonIconText');
        }

        spanText.innerHTML = con;
        spanCon.appendChild(spanText);
        obj.appendChild(spanCon);

        obj.removeAttribute('options');
    }
}

function a2(obj) {
    var o = obj == null ? document : obj;
    var arrObj = o.getElementsByClassName('bjButtonGroup');
    for (var m = 0; m < arrObj.length; ++m) {
        var obj = arrObj[m];

        var options = obj.getAttribute('options');
        var uiCon = "";
        var childNum = obj.children.length;
        var arrChildNodes = obj.children;

        var posSelect = 0;
        for (var k = 0; k < childNum; ++k) {
            var iconClass = null;
            var con = arrChildNodes[k].innerHTML;
            var options = arrChildNodes[k].getAttribute('options');
            if (options != null) {
                options = "{" + options + "}";
                var jsonOptions = eval("(" + options + ")");
                iconClass = jsonOptions.iconClass;
            }

            arrChildNodes[k].innerHTML = "";
            arrChildNodes[k].setAttribute('class', 'item');
            var spanText = document.createElement('span');
            if (iconClass != null) {
                var spanIcon = document.createElement('span');
                spanIcon.setAttribute('class', 'iconAdd');
                arrChildNodes[k].appendChild(spanIcon);
                spanText.setAttribute('class', 'bjButtonIconText');
            }

            arrChildNodes[k].posSelect = k;
            arrChildNodes[k].addEventListener('click', function () {
                var pos = this.posSelect;
                var pp = this.parentNode;
                var len = pp.children.length;
                var pcs = pp.children;
                for (var m = 0; m < len; ++m) {
                    pcs[m].setAttribute('class', 'item');
                }
                this.setAttribute('class', 'itemSelect');
            }, false);

            spanText.innerHTML = con;
            arrChildNodes[k].appendChild(spanText);

            arrChildNodes[k].removeAttribute('options');
        }

        obj.removeAttribute('options');
    }
}

function b(obj) {
    var o = obj == null ? document : obj;
    var arrObj = o.getElementsByClassName('bjCheckbox');
    for (var m = 0; m < arrObj.length; ++m) {
        var objRoot = arrObj[m];
        var labelCon = "";
        var checked = false;
        var options = objRoot.getAttribute('options');
        objRoot.style.display = 'none';

        if (objRoot.options == null)objRoot.options = new Object();  // maybe not called bj(...)
        if (options != null) {
            options = "{" + options + "}";
            var jsonOptions = eval("(" + options + ")");
            //labelCon = jsonOptions.label;
            //checked = jsonOptions.checked;
            for (var it in jsonOptions)
                objRoot.options[it] = jsonOptions[it];
        }
        var con = objRoot.innerHTML;


        var chs = objRoot.children;
        var firstChild = null;
        var simpleText = objRoot.innerHTML;
        if (simpleText != "") {
            objRoot.innerHTML = "";
            firstChild = document.createElement('span');
            firstChild.innerHTML = simpleText;
            objRoot.appendChild(firstChild);
        }
        var checked = objRoot.options.checked;


        // 创建checkbox,隐藏状态，记录操作的状态值
        // var checkboxInput = document.createElement('input');
        // checkboxInput.setAttribute('type', 'checkbox');
        // checkboxInput.style.display = 'none';
        // objRoot.appendChild(checkboxInput);
        // console.log('objRoot.options.checked:' + objRoot.options.checked);
        // if (checked) {
        //     checkboxInput.setAttribute('checked', true);
        // } else {
        //     checkboxInput.setAttribute('unchecked', true);
        // }
        // checkboxInput.setAttribute("id", id);  // real id for form

        var checkboxLabel = document.createElement('span');
        checkboxLabel.o = objRoot;
        checkboxLabel.style.display = 'inline-block';
        //checkboxLabel.innerHTML = (labelCon == undefined) ? '' : labelCon;
        checkboxLabel.innerHTML = objRoot.options.label;
        console.log('objRoot.label:' + objRoot.options.label);
        objRoot.parentNode.insertBefore(checkboxLabel, objRoot);
        // if (firstChild != null) {
        //     console.log('chs is not null');
        //     objRoot.insertBefore(checkboxLabel, firstChild);
        // } else {
        //     objRoot.appendChild(checkboxLabel);
        // }

        var spanIcon = document.createElement('span');
        spanIcon.setAttribute('class', checked ? 'checkBoxSel' : 'checkBoxUnSel');
        spanIcon.o = objRoot;
        objRoot.appendChild(spanIcon);
        objRoot.parentNode.insertBefore(spanIcon, checkboxLabel);

        objRoot.checked = checked;
        //objRoot.input = checkboxInput;
        objRoot.spanIcon = spanIcon;
        spanIcon.addEventListener('click', function () {
            b_1(this);
        }, false);
        checkboxLabel.addEventListener('click', function () {
            b_1(this);
        }, false);

        objRoot.removeAttribute('options');
    }
}

function b_1(obj) {
    obj.o.checked = !obj.o.checked;
    console.log('obj.o.checked:' + obj.o.checked);
    obj.o.spanIcon.setAttribute('class', obj.o.checked ? 'checkBoxSel' : 'checkBoxUnSel');
    if (obj.checked) {
        obj.o.removeAttribute('unchecked');
        obj.o.setAttribute('checked', true);
    } else {
        obj.o.removeAttribute('checked');
        obj.o.setAttribute('unchecked', true);
    }

    console.log('obj.o.options.change:' + obj.o.options.change);
    console.log('obj.o.change:' + obj.o.change);
    if (obj.o.options.change != null)
        obj.o.options.change(obj.o.checked, this);   // 触发外部事件
    if (obj.o.change != null)
        obj.o.change(obj.o.checked, this);   // 触发外部事件
}

function a3(obj) {
    var o = obj == null ? document : obj;
    var arrObj = o.getElementsByClassName('bjRadio');
    for (var m = 0; m < arrObj.length; ++m) {
        var objRoot = arrObj[m];
        objRoot.style.display = 'none';
        if (objRoot.options == null) {
            objRoot.options = new Object();
        }
        var labelCon = "";
        var name = "";
        var value = "";
        var checked = false;
        var options = objRoot.getAttribute('options');
        if (options != null) {
            options = "{" + options + "}";
            var jsonOptions = eval("(" + options + ")");
            // labelCon = jsonOptions.label;
            // if (labelCon != null) {
            //     objRoot.options.labelCon = labelCon;
            // }
            // checked = jsonOptions.checked;
            // if (checked != null) {
            //     objRoot.options.checked = checked;
            // }
            // name = jsonOptions.name;
            // if (name != null) {
            //     objRoot.options.name = name;
            // }
            // value = jsonOptions.value;
            // if (value != null) {
            //     objRoot.options.value = value;
            // }
            for (var it in jsonOptions)
                objRoot.options[it] = jsonOptions[it];
        }
        var con = objRoot.innerHTML;

        checked = objRoot.options.checked;
        if (checked == null) checked = objRoot.getAttribute('checked');
        console.log('checked:' + checked);
        var radioLabel = document.createElement('span');
        radioLabel.o = objRoot;
        radioLabel.style.display = 'inline-block';
        radioLabel.innerHTML = objRoot.options.label;

        objRoot.parentNode.insertBefore(radioLabel, objRoot);


        var spanIcon = document.createElement('span');
        spanIcon.o = objRoot;
        spanIcon.setAttribute('class', checked ? 'radioSel' : 'radioUnSel');
        objRoot.parentNode.insertBefore(spanIcon, radioLabel);

        spanIcon.box = spanIcon;
        spanIcon.addEventListener('click', function () {
            a3_1(this, this.o, 1);
        }, false);
        radioLabel.box = spanIcon;
        radioLabel.o = objRoot;
        radioLabel.addEventListener('click', function () {
            a3_1(this, this.o, 2);
        }, false);

        objRoot.removeAttribute('options');
    }
}

function a3_1(obj, o, t) {
    var thisName = o.getAttribute('name');
    // 取消其他兄弟节点的选择
    var arrObjBrother = document.getElementsByClassName('bjRadio');
    console.log('arrObjBrother.length:' + arrObjBrother.length);
    for (var m = 0; m < arrObjBrother.length; ++m) {
        var arrChild = arrObjBrother[m];
        var nameCur = arrChild.getAttribute('name');
        console.log('nameCur:' + nameCur);
        console.log('obj.name:' + thisName + "  " + m);
        if (nameCur == thisName) {
            getPreNode(getPreNode(arrChild)).setAttribute('class', 'radioUnSel');
            arrChild.setAttribute('checked', false);
        }
    }
    obj.box.setAttribute('class', 'radioSel');
    o.setAttribute('checked', true);
    var val = o.getAttribute('value');

    console.log('o.options.change:' + o.options.change);
    console.log('o.change:' + o.change);
    if (o.options.change != null) o.options.change(o, val);   // trigger outter event
    if (o.change != null)  o.change(o, val);   // trigger outter event
}

function c(obj) {
    var o = obj == null ? document : obj;
    var arrObj = o.getElementsByClassName('bjTabs');
    for (var m = 0; m < arrObj.length; ++m) {
        var objRoot = arrObj[m];
        if (objRoot.options == null) {
            objRoot.options = new Object();
            console.log("objRoot.options = null");
        }
        console.log("objRoot.options1:" + JSON.stringify(objRoot.options));
        var options = objRoot.getAttribute('options');
        if (options != null) {
            options = "{" + options + "}";
            var jsonOptions = eval("(" + options + ")");
            /*if (jsonOptions.actionType != null) {
                objRoot.options.actionType = jsonOptions.actionType;
            }
            if (jsonOptions.enableClose != null) {
                objRoot.options.enableClose = jsonOptions.enableClose;
            }*/
            for (var it in jsonOptions)
                objRoot.options[it] = jsonOptions[it];
            //objRoot.options = jsonOptions;
        }
        console.log("objRoot.options2:" + JSON.stringify(objRoot.options));
        console.log("tabclick:" + objRoot.tabClick);

        var actionType = objRoot.options.actionType;
        //var childNum = objRoot.children.length;
        var arrChildNodes = objRoot.children;
        if (objRoot.childsCon == null) {
            objRoot.childsCon = objRoot.children;
        }

        console.log('objRoot.options.enableClose:' + objRoot.options.enableClose);
        if (objRoot.childNum == null) {
            objRoot.childNum = objRoot.children.length;
            objRoot.heads = new Array();
            for (var m = 0; m < objRoot.childNum; ++m) {
                var headTitle = objRoot.childsCon[m].getAttribute('title');
                var headOptions = objRoot.childsCon[m].getAttribute('bj:options');
                console.log('headOptions:' + headOptions);
                var jsonH = {};
                if (headOptions != null) {
                    headOptions = "{" + headOptions + "}";
                    jsonH = eval("(" + headOptions + ")");
                }
                var oneHead = {
                    title: headTitle, enableClose: objRoot.options.enableClose,
                    objCon: objRoot.childsCon[m],
                    headOptions: jsonH
                };
                objRoot.heads.push(oneHead);
            }
        }
        var childNum = objRoot.childNum;

        var arrHeads = new Array();
        for (var m = 0; m < childNum; ++m) {
            objRoot.childsCon[m].setAttribute('class', 'bjTabsCon');
            if (m  == objRoot.options.activeTabPos) {
                objRoot.childsCon[m].style.display = "block";
            }
            else {
                objRoot.childsCon[m].style.display = "none";
            }
        }

        // 在前面动态插入标题头部
        var head = document.createElement('div');
        console.log('childNum:' + childNum);
        console.log('objRoot.heads:' + JSON.stringify(objRoot.heads));
        for (var k = 0; k < childNum; ++k) {
            var span = document.createElement('span');
            head.appendChild(span);
            if (k == objRoot.options.activeTabPos) {
                span.setAttribute('class', 'tabActive');
            } else {
                span.setAttribute('class', 'tabActiveNo');
            }
            //var htmlCon = "<span>" + objRoot.heads[k].title + "</span>";
            //span.innerHTML = htmlCon;
            var bIcon = 0;
            if (objRoot.heads[k].headOptions.iconClass != null){
                var spC = document.createElement('span');
                spC.setAttribute('class', objRoot.heads[k].headOptions.iconClass);
                span.appendChild(spC);
                bIcon = 1;
            }
            var spText = document.createElement('span');
            spText.innerHTML = objRoot.heads[k].title;
            if (bIcon == 1)
                spText.style.paddingLeft = "20px";
            else
                spText.style.paddingLeft = "0px";
            span.appendChild(spText);

            if (objRoot.heads[k].enableClose && k != 0) {
                var spC = document.createElement('span');
                spC.setAttribute('class', 'close');
                spC.root = objRoot;
                spC.addEventListener("click", function (e) {
                    c_2(this, this.root);
                    stp(e);
                });
                span.appendChild(spC);

                if (k == objRoot.options.activeTabPos){
                    c_1(span, objRoot);
                }
                console.log('ccc:' + objRoot.heads[k].enableClose);
            }
            span.title = objRoot.heads[k].title;
            span.o = objRoot;
            span.pos = k;
            var event = actionType == "1" ? "click" : "mousemove"
            span.addEventListener(event, function () {
            	if (this.o.options.tabClick) this.o.options.tabClick(this.title, this.pos);
                c_1(this, this.o);
            }, false);

            arrChildNodes[k].removeAttribute('title');
        }
        //head.innerHTML = titleInfo;
        head.setAttribute('class', 'bjTabsHead');
        //obj.insertBefore(head, arrChildNodes[0]);

        if (objRoot.init == null)
            objRoot.insertBefore(head, objRoot.childsCon[0]);
        else
            objRoot.init = 1;

        objRoot.removeAttribute('options');
    }
}

function c_1(obj, or) {
    var p = obj.parentNode;
    var childs = p.children;
    var objCon = null;

    for (var m = 0; m < childs.length; ++m) {
        if (childs[m] == obj) {
            childs[m].setAttribute('class', 'tabActive');
            objCon = or.heads[m].objCon;
            var cl = childs[m].children[childs[m].children.length-1];   // close node
            if (cl != null && cl.getAttribute('class') === 'close')
                cl.style.display = 'inline-block';
        } else {
            childs[m].setAttribute('class', 'tabActiveNo');
            var cl = childs[m].children[childs[m].children.length-1];
            if (cl != null && cl.getAttribute('class') === 'close')
                cl.style.display = 'none';
        }
    }

    obj.removeAttribute("style");
    c_3(obj, or);

    // 显示相应tab的内容
    childs = or.children;
    for (var m = 1; m < childs.length; ++m) {
        if (childs[m] != objCon) {
            childs[m].style.display = 'none';
        } else {
            childs[m].style.display = 'block';
        }
    }
}

function c_2(obj, root) {
    var p = obj.parentNode;
    var pp = p.parentNode;
    //var or = pp.parentNode;
    var pos = 0;
    var len = pp.children.length;
    var nt = null;
    for (var i = 0; i < len; ++i) {
        if (pp.children[i] == p) {
            pos = i;
            break;
        }
        nt = pp.children[i];
    }

    root.heads.splice(pos, 1);
    console.log('or.heads:' + root.heads.length);

    root.removeChild(root.children[pos + 1]);
    pp.removeChild(p);

    c_1(nt, root);
}

function c_3(obj, or) {
    var wi = or.offsetWidth - obj.offsetWidth - 20
        - or.children[0].children.length * 5;
    var oneW = wi / (or.children[0].children.length - 1) - 18;
    if (oneW < 80) {
        for (var m = 0; m < or.children[0].children.length; ++m) {
            if (or.children[0].children[m] != obj)
                or.children[0].children[m].style.width = oneW + "px";
        }
    }
}

function d(obj) {
    var o = obj == null ? document : obj;
    var arrObj = o.getElementsByClassName('bjDrawerMenu');
    for (var m = 0; m < arrObj.length; ++m) {
        var objRoot = arrObj[m];
        var options = objRoot.getAttribute('options');
        var arrChildNodes = objRoot.children;
        console.log('arrChildNodes.length:' + arrChildNodes.length);
        for (var k = 0; k < objRoot.children.length; k = k + 2) {
            var curNode = arrChildNodes[k];
            var opts = curNode.getAttribute('options');
            var expand = false;
            if (opts != null) {
                opts = "{" + opts + "}";
                var jsonOptions = eval("(" + opts + ")");
                expand = jsonOptions.expand;
            }

            var divCate = document.createElement('div');
            divCate.setAttribute('class', 'cateHead');
            if (k == 0) {
                divCate.style.borderTop = "none";
            }

            var divHead = document.createElement('div');
            divCate.appendChild(divHead);
            var title = document.createElement('span');
            title.innerHTML =curNode.getAttribute('title');
            title.setAttribute('class', 'cateTitle');
            divHead.appendChild(title);

            var arrow = document.createElement('span');
            if (expand) {
                arrow.setAttribute('class', 'upArrow');
            } else {
                arrow.setAttribute('class', 'downArrow');
            }
            divHead.appendChild(arrow);

            var divCon = document.createElement('div');
            divCon.innerHTML = curNode.innerHTML;
            //for (var m = 0; m < arrChildNodes[k].children.length; ++m) {
            //    console.log( k + ':' + arrChildNodes[k].children[m].innerHTML);
            //    divCon.appendChild(arrChildNodes[k].children[m]);
            //}
            divCon.setAttribute('class', 'cateCon');
            if (expand) {
                curNode.style.display = "block";
                console.log('objRoot.style.height:' + objRoot.style.height);
                curNode.style.height = parseInt(objRoot.style.height) - arrChildNodes.length * 29;   // 高度+1个边框
            } else {
                curNode.style.display = "none";
            }
            curNode.style.borderBottom = "1px solid #ddd";

            divCate.root = objRoot;
            divCate.conNode = curNode;
            divCate.expand = expand;
            divCate.arrow = arrow;
            divCate.addEventListener('click', function () {
                var expandNew = !this.expand;
                console.log('expandNew:' + expandNew);
                var childs = this.root.children;
                for (var p = 0; p < childs.length; p=p+2) {
                    childs[p + 1].style.display = "none";
                    childs[p].children[0].children[1].setAttribute('class', 'downArrow');
                    childs[p].expand = false;
                }
                this.conNode.style.height = parseInt(objRoot.style.height) - arrChildNodes.length * 29;
                if (expandNew) {
                    this.conNode.style.display = "block";
                } else {
                    this.conNode.style.display = "none";
                }

                this.arrow.setAttribute('class', expandNew ? 'upArrow' : 'downArrow');
                this.expand = expandNew;
            }, false);

            //arrChildNodes[k].innerHTML = "";
            curNode.parentNode.insertBefore(divCate, arrChildNodes[k]);
            //arrChildNodes[k].appendChild(divCon);

            /*
           if (k == 0){
           	   //arrChildNodes[k].style.display="block";
           	   uiCon = uiCon + "<div style='display:block' title='" + arrChildNodes[k].getAttribute('title') + "'>"
           	       + arrChildNodes[k].innerHTML + "</div>";
           	   titleInfo = titleInfo + "<span class='tabActive'>" + arrChildNodes[k].getAttribute('title') + "</span>";
           }
           else{
               //arrChildNodes[k].style.display="none";
               uiCon = uiCon + "<div style='display:none' title='" + arrChildNodes[k].getAttribute('title') + "'>"
                   + arrChildNodes[k].innerHTML + "</div>";
               titleInfo = titleInfo + "<span class='tabActiveNo'>" + arrChildNodes[k].getAttribute('title') + "</span>";
           }
           */
        }
        continue;

        // 在前面动态插入标题头部
        var head = document.createElement('div');
        for (var k = 0; k < childNum; ++k) {
            var span = document.createElement('span');
            if (k == 0) {
                span.setAttribute('class', 'tabActive');
            } else {
                span.setAttribute('class', 'tabActiveNo');
            }
            span.innerHTML = arrChildNodes[k].getAttribute('title');
            span.pos = k;
            span.addEventListener('click', function () {
                //alert(this.pos);
                this.setAttribute('class', 'tabActive');
                var p = this.parentNode;
                var childs = p.children;
                for (var m = 0; m < childs.length; ++m) {
                    if (childs[m] != this) {
                        childs[m].setAttribute('class', 'tabActiveNo');
                    }
                }

                // 显示相应tab的内容
                var pp = this.parentNode.parentNode;
                childs = pp.children;
                var childCon = childs[1];
                var childs = childCon.children;
                for (var m = 0; m < childs.length; ++m) {
                    if (m != this.pos) {
                        childs[m].style.display = 'none';
                    } else {
                        childs[m].style.display = 'block';
                    }
                }

            }, false);
            head.appendChild(span);
        }
        //head.innerHTML = titleInfo;
        head.setAttribute('class', 'bjTabsHead');
        //obj.insertBefore(head, arrChildNodes[0]);

        obj.innerHTML = "";
        obj.appendChild(head);

        var con = document.createElement('div');
        for (var k = 0; k < childNum; ++k) {
            //alert(childs[k]);
            //con.appendChild(childs[k]);
        }
        con.innerHTML = uiCon;
        con.setAttribute('class', 'bjTabsCon');
        obj.appendChild(con);
    }
}

function e(obj) {
    var o = obj == null ? document : obj;
    var arrObj = o.getElementsByClassName('bjListbox');
    for (var m = 0; m < arrObj.length; ++m) {
        var obj = arrObj[m];
        if (obj.options == null) {
            obj.options = {};
        }
        var options = obj.getAttribute('options');
        if (options != null) {
            options = "{" + options + "}";
            var jsonOptions = eval('(' + options + ')');
            for (var it in jsonOptions)
                obj.options[it] = jsonOptions[it];
        }

        var url = obj.options.url;
        console.log('url:' + url);
        if (url != undefined) {
            var ajax = new XMLHttpRequest();
            var method = jsonOptions.method;
            ajax.open(method, url);
            ajax.send();
            ajax.obj = obj;
            ajax.onreadystatechange = function () {
                if (ajax.readyState == 4 && ajax.status == 200) {
                    var con = ajax.responseText;
                    var objListbox = document.createElement('ul');
                    var arrCon = eval('(' + con + ')');
                    for (var i = 0; i < arrCon.length; ++i) {
                        var objItem = document.createElement('li');
                        objItem.innerHTML = arrCon[i].text;
                        objListbox.appendChild(objItem);
                    }
                    objListbox.setAttribute('class', 'bjListboxCon');
                    this.obj.appendChild(objListbox);
                }
            }
        }
        else if(obj.options.data != null){
            var objListbox = document.createElement('ul');
            var arrCon = obj.options.data;
            console.log('obj.options.data:' + JSON.stringify(arrCon));
            for (var i = 0; i < arrCon.length; ++i) {
                var objItem = document.createElement('li');
                console.log('arrCon[i].text:' + arrCon[i].text);
                objItem.innerHTML = arrCon[i].text;
                objListbox.appendChild(objItem);
            }
            objListbox.setAttribute('class', 'bjListboxCon');
            obj.appendChild(objListbox);
            obj.removeAttribute('options');
        }
        obj.removeAttribute('options');
    }
}

function f(obj) {
    var o = obj == null ? document : obj;
    var arrObj = o.getElementsByClassName('bjTree');
    for (var m = 0; m < arrObj.length; ++m) {
        var objRoot = arrObj[m];
        var options = objRoot.getAttribute('options');
        options = "{" + options + "}";
        var jsonOptions = eval('(' + options + ')');
        var url = jsonOptions.url;
        if (url != undefined) {
            var ajax = new XMLHttpRequest();
            var method = jsonOptions.method;
            ajax.open(method, url);
            ajax.send();
            ajax.onreadystatechange = function () {
                if (ajax.readyState == 4 && ajax.status == 200) {
                    var con = ajax.responseText;
                    var objTree = document.createElement('ul');
                    var arrCon = eval('(' + con + ')');
                    for (var i = 0; i < arrCon.length; ++i) {
                        loadTreeChildsNode(0, objRoot, objTree, arrCon[i]);
                    }
                    objTree.setAttribute('class', 'bjTreeCon');
                    objRoot.appendChild(objTree);
                    objRoot.removeAttribute('options');
                }
            }
        }
        var data = jsonOptions.data;
        if (data != undefined) {
            var objTree = document.createElement('ul');
            var arrCon = data;
            if (typeof data === String) {
                arrCon = eval('(' + data + ')');
            }
            for (var i = 0; i < arrCon.length; ++i) {
                loadTreeChildsNode(0, objRoot, objTree, arrCon[i]);
            }
            objTree.setAttribute('class', 'bjTreeCon');
            objRoot.appendChild(objTree);
            objRoot.removeAttribute('options');
        }
    }
}

function f_1(obj) {
    if (obj.type == 0) {  // 内部tree
        obj.root.nextSibling.children[0].innerHTML = obj.nodeCon.text;
        obj.root.nextSibling.children[1].value = obj.nodeCon.id;
        obj.root.style.display = "none";
    }
    else {
        treeNodeTextClick(obj.root, obj.nodeCon);
    }
}

function gd(obj) {
    var o = obj == null ? document : obj;
    var arrObj = o.getElementsByClassName('bjDataGrid');
    for (var m = 0; m < arrObj.length; ++m) {
        var obj = arrObj[m];
        if (obj.options == null) {
            obj.options = new Object();
        }
        var columns = null;
        var options = obj.getAttribute('options');
        options = "{" + options + "}";
        var jsonOptions = eval('(' + options + ')');

        // 需要逐一赋值，因为可能和脚本里重复或缺少
        if (jsonOptions.method != null) {
            obj.options.method = jsonOptions.method;
        }
        if (jsonOptions.url != null) {
            obj.options.url = jsonOptions.url;
        }
        if (jsonOptions.columns != null) {
            obj.options.columns = jsonOptions.columns;
        }
        if (jsonOptions.rowNumber != null) {
            obj.options.rowNumber = jsonOptions.rowNumber;
        }
        if (jsonOptions.rowHover != null) {
            obj.options.rowHover = jsonOptions.rowHover;
        }
        if (jsonOptions.pager != null) {
            obj.options.pager = jsonOptions.pager;
        }

        var pager = obj.options.pager;
        if (pager != undefined) {
            var pageNo = obj.options.pager.pageNo;
            if (pageNo == null) {   // 如果没有赋值当前页面，则默认为1
                obj.options.pager.pageNo = 1;
            }
            if (obj.options.pager.pageSize == null) {
                obj.options.pager.pageSize = 10;
            }
        }

        if (jsonOptions.numberColWidth != null) {
            obj.options.numberColWidth = jsonOptions.numberColWidth;
        }
        if (obj.options.numberColWidth == null) {
            obj.options.numberColWidth = 32;
        }
        //alert(obj.options.rowNumber);

        var jsonColumns = {};
        columns = obj.options.columns;
        for (var key in columns) {
            var itemKey = columns[key].field;
            var width = columns[key].width;
            var itemCon = columns[key];
            console.log('name:' + itemKey + " value:" + itemCon + " width:" + width);
            jsonColumns[itemKey] = itemCon;
        }
        //obj.options.columns = jsonColumns;
        var columnsKey = jsonColumns;
        
        // 处理头部
        var objHeadDiv = document.createElement('div');
        objHeadDiv.setAttribute('class', 'bjDataGridColumn');
        obj.appendChild(objHeadDiv);

        var objHeadTable = document.createElement('table');
        objHeadTable.setAttribute('class', 'bjDataGridColumnTable');
        objHeadDiv.appendChild(objHeadTable);

        var widthTotal = 0;

        //var objHead = document.createElement('thead');
        //objHeadTable.appendChild(objHead);
        var objTr = document.createElement('tr');
        objTr.setAttribute('class', 'columnTr');
        objHeadTable.appendChild(objTr);        
        if (obj.options.rowNumber) {
            var objTd = document.createElement('td');
            objTd.setAttribute('class', 'rowNumber');
            objTr.appendChild(objTd);
            objTd.innerHTML = "";
            objTd.style.width = obj.options.numberColWidth + "px";
            ;
            //bindDataGridCloumnMouse(obj, objTd, "", 0);
            widthTotal = widthTotal + obj.options.numberColWidth + 1;
            console.log('columnHeadCell widthTotal:' + widthTotal);
        }

        var columns = columnsKey;
        for (var key in columns) {
            var objTd = document.createElement('td');
            objTr.appendChild(objTd);
            objTd.style.width = columns[key].width + "px";
            console.log(key + ' col width:' + columns[key].width);
            objTd.style.textAlign = columns[key].align;

            widthTotal = widthTotal + columns[key].width + 1;

            var objConDiv = document.createElement('div');
            objConDiv.setAttribute('class', 'cellCon');
            objTd.appendChild(objConDiv);

            var objConSpan = document.createElement('span');
            objConDiv.appendChild(objConSpan);
            objConSpan.innerHTML = columns[key].title;
            //objConSpan.onselectstart = function () {   // 无效
            //	return false;
            //}; 
            
            if (columns[key].sortable) {
                var objSortSpan = document.createElement('span');
                objConDiv.appendChild(objSortSpan);
                objSortSpan.setAttribute('class', 'sortIcon');

                objTd.o = obj;
                objTd.sortKey = key;
                objTd.orderState = 0;    // 默认为未排序状态
                objTd.addEventListener('click', function () {   // 处理按字段排序
                    if (this.o.mouseDown) {   // 在处理拖动列宽的操作
                        return;
                    }
                    var rows = obj.options.data;
                    var order = "";
                    if (this.orderState == 0) {
                        this.orderState = 1;
                        order = "asc";
                        this.children[0].children[1].setAttribute('class', 'sortIconAsc');
                    } else if (this.orderState == 1) {
                        this.orderState = 2;
                        order = "desc";
                        this.children[0].children[1].setAttribute('class', 'sortIconDesc');
                    } else if (this.orderState == 2) {
                        this.orderState = 0;
                        order = "";
                        this.children[0].children[1].setAttribute('class', 'sortIcon');
                    }  
                    if (order != "") {
                        rows = sortDataByKey(rows, this.sortKey, order);
                        obj.options.dataCur = rows;
                    } 
                    showDataGridData(obj, rows);
                });
            }

            // 处理鼠标拖动调整列宽
            //bindDataGridCloumnMouse(obj, objTd, key, 1);
        }

        // 附加列
        var objTd = document.createElement('td');
        objTd.style.border = "none";
        objTd.style.width = "60px";
        widthTotal = widthTotal + 60;
        //bindDataGridCloumnMouse(obj, objTd, "", 2)
        objTr.appendChild(objTd);

        objHeadTable.style.width = widthTotal + "px";
        ;
        console.log('objHeadTable.style.width:' + objHeadTable.style.width);
        
        objHeadTable.o = obj;
        objHeadTable.addEventListener('mousemove', function (event) {
        	if (this.o.mouseDown)return;
        	var posMouse = event.pageX - this.o.offsetLeft;   // 整个表格控件的单击位置
        	this.o.movingCol = -1;
        	var cu = this.o.options.columns;
            var wid = 1;   // 最左边的边界
            if (this.o.options.rowNumber) {
                wid = this.o.options.numberColWidth;
            }
            for (var n = 0; n < cu.length + 1; ++n) {              	
                if (posMouse > wid - 10 && posMouse < wid + 10) {   // 在该列的前半区
                	this.o.movingCol = n;
                	break;
                } 
                if (n == cu.length) break;
                wid += this.o.options.columns[n].width + 1;   // 右边界
            } 
            console.log('this.o.movingCol:' + this.o.movingCol);
            if (this.o.movingCol != -1){
            	this.style.cursor = 'e-resize';
            }
            else{
            	this.style.cursor = 'default';
            }
        });
        objHeadTable.addEventListener('mousedown', function (event) {
        	var posMouse = event.pageX - this.o.offsetLeft;   // 整个表格控件的单击位置    
        	this.o.movingCol = -1;
        	this.o.mouseDown = false;
        	var cu = this.o.options.columns;
            var wid = 1;   // 最左边的边界
            if (this.o.options.rowNumber) {
                wid = this.o.options.numberColWidth;
            }
            for (var n = 0; n < cu.length + 1; ++n) {              	
                if (posMouse > wid - 10 && posMouse < wid + 10) {   // 在该列的前半区
                	this.o.movingCol = n;
                	this.o.mouseDown = true;
                	break;
                } 
                if (n == cu.length) break;
                wid += this.o.options.columns[n].width + 1;   // 右边界
            }
            var downPos = event.pageX;            
            
            document.o = this.o;
            document.headTbl = this;
            document.onmousemove = function (event) {
            	event = event || window.event;
            	var w = event.pageX - downPos;
            	if (this.o.movingCol == -1) return;
            	
            	this.o.options.columns[this.o.movingCol-1].width += w;
                var wNew = this.o.options.columns[this.o.movingCol-1].width;
                this.o.children[0].children[0].children[0].children[this.o.movingCol].style.width = wNew + "px";

                var wTmp = parseInt(this.headTbl.style.width) + w;
                this.headTbl.style.width = wTmp + "px";
                this.o.widthTotal = wTmp;

                showDataGridData(this.o, this.o.options.dataCur);
                
                downPos = event.pageX;
            }
            document.onmouseup = function (event) {
                //当鼠标松开时，将元素固定在当前位置，取消document的onmousemove事件
                document.onmousemove = null;
                //onmouseup事件只需要执行一次，执行过一次以后就没有存在的意义了
                document.onmouseup = null;

                this.o.mouseDown = false;  
                //objTh.releaseCapture && objTh.releaseCapture();

            };
        }, false);
        
        


        var objTableDiv = document.createElement('div');
        objTableDiv.setAttribute('class', 'bjDataGridCon');
        obj.appendChild(objTableDiv);

        var objTable = document.createElement('table');
        objTable.setAttribute('class', 'tableData');
        if (pager.visible) {
            objTableDiv.style.height = (parseInt(obj.style.height) - 36 - 36) + "px";   //36为pager高度和head高
        } else {
            objTableDiv.style.height = obj.style.height + "px";
        }
        console.log("obj.style.height:" + obj.style.height);
        console.log("objTableDiv.style.height:" + objTableDiv.style.height);
        objTableDiv.appendChild(objTable);
        objTableDiv.addEventListener('scroll', function () {
            console.log('objTableDiv scroll:' + this.scrollLeft);
            objHeadTable.style.left = -this.scrollLeft + "px";
        }, true);

        objTable.style.width = widthTotal + "px";
        ;

        obj.widthTotal = widthTotal;
        obj.table = objTable;


        // 处理pager
        var pager = obj.options.pager;
        if (pager.visible) {
            console.log('page.visible:' + pager.visible);
            var objPager = document.createElement('div');
            objPager.setAttribute('class', 'bjDataGridPager');
            obj.appendChild(objPager);

            var objTable = document.createElement('table');
            objPager.appendChild(objTable);
            var objTr = document.createElement('tr');
            objTable.appendChild(objTr);

            var objTdSize = document.createElement('td');
            objTdSize.setAttribute('class', 'pageArrow');
            objTr.appendChild(objTdSize);
            var objTdSizeList = document.createElement('select');
            objTdSizeList.setAttribute('class', 'pageSizeList');
            var lstSize = obj.options.pager.sizeList;
            var lstCon = "";
            for (var si in lstSize) {
                lstCon = lstCon + "<option value='" + lstSize[si] + "'>" + lstSize[si] + "</option>";
            }
            objTdSizeList.innerHTML = lstCon;
            objTdSize.appendChild(objTdSizeList);
            objTdSizeList.addEventListener('change', function () {
                var pRoot = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                obj.options.pager.pageSize = this.value;
                console.log('pageSize:' + this.value);
                loadDataGridData(obj);  // 加载新数据
            });

            var objTdFirst = document.createElement('td');
            objTdFirst.setAttribute('class', 'pageArrow');
            objTr.appendChild(objTdFirst);
            var objArrowFrame = document.createElement('div');
            objArrowFrame.setAttribute('class', 'arrowFrame');
            objTdFirst.appendChild(objArrowFrame);
            var objTdArrow = document.createElement('span');
            objTdArrow.setAttribute('class', 'pageFirst');
            objArrowFrame.appendChild(objTdArrow);
            objTdArrow.addEventListener('click', function () {   // 处理展开合并
                var pRoot = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                pRoot.options.pager.pageNo = 1;
                obj.options.pager.pageNum.value = pRoot.options.pager.pageNo;
                loadDataGridData(pRoot);  // 加载新数据
            });

            var objTdPre = document.createElement('td');
            objTdPre.setAttribute('class', 'pageArrow');
            objTr.appendChild(objTdPre);
            objArrowFrame = document.createElement('div');
            objArrowFrame.setAttribute('class', 'arrowFrame');
            objTdPre.appendChild(objArrowFrame);
            objTdArrow = document.createElement('span');
            objTdArrow.setAttribute('class', 'pagePre');
            objArrowFrame.appendChild(objTdArrow);
            objTdArrow.addEventListener('click', function () {   // 处理展开合并
                var pRoot = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                --pRoot.options.pager.pageNo;
                if (pRoot.options.pager.pageNo < 1) {
                    pRoot.options.pager.pageNo = 1;
                    return;
                }
                obj.options.pager.pageNum.value = pRoot.options.pager.pageNo;
                loadDataGridData(pRoot);  // 加载新数据
            });

            var objTdNum = document.createElement('td');
            objTdNum.setAttribute('class', 'pageArrow');
            objTr.appendChild(objTdNum);
            var objTdNumValue = document.createElement('input');
            objTdNumValue.setAttribute('class', 'pageNum');
            objTdNumValue.value = obj.options.pager.pageNo;
            objTdNum.appendChild(objTdNumValue);
            obj.options.pager.pageNum = objTdNumValue;

            var objTdNext = document.createElement('td');
            objTdNext.setAttribute('class', 'pageArrow');
            objTr.appendChild(objTdNext);
            objArrowFrame = document.createElement('div');
            objArrowFrame.setAttribute('class', 'arrowFrame');
            objTdNext.appendChild(objArrowFrame);
            objTdArrow = document.createElement('span');
            objTdArrow.setAttribute('class', 'pageNext');
            objArrowFrame.appendChild(objTdArrow);
            objTdArrow.addEventListener('click', function () {   // 处理
                var pRoot = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                ++pRoot.options.pager.pageNo;
                //alert(pRoot.options.pager.pageNo);
                //alert(obj.options.pager.pageNums);
                if (pRoot.options.pager.pageNo > obj.options.pager.pageNums) {
                    pRoot.options.pager.pageNo = obj.options.pager.pageNums;
                    return;
                }
                obj.options.pager.pageNum.value = pRoot.options.pager.pageNo;
                loadDataGridData(pRoot);  // 加载新数据
            });

            var objTdLast = document.createElement('td');
            objTdLast.setAttribute('class', 'pageArrow');
            objTr.appendChild(objTdLast);
            objArrowFrame = document.createElement('div');
            objArrowFrame.setAttribute('class', 'arrowFrame');
            objTdLast.appendChild(objArrowFrame);
            objTdArrow = document.createElement('span');
            objTdArrow.setAttribute('class', 'pageLast');
            objArrowFrame.appendChild(objTdArrow);
            objTdArrow.addEventListener('click', function () {   // 处理展开合并
                var pRoot = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                if (pRoot.options.pager.pageNo == pRoot.options.pager.pageNums) {
                    return;
                }
                pRoot.options.pager.pageNo = pRoot.options.pager.pageNums;
                obj.options.pager.pageNum.value = pRoot.options.pager.pageNo;
                loadDataGridData(pRoot);  // 加载新数据
            });

            var objTd = document.createElement('td');
            var objTotal = document.createElement('span');
            objTd.appendChild(objTotal);
            //objTotal.innerHTML = "共" + data.total + "记录";
            objTr.appendChild(objTd);
            obj.options.pager.total = objTotal;

        }

        obj.removeAttribute('options');

        // 装载数据
        loadDataGridData(obj);

    }
}

function bindDataGridCloumnMouse(objRoot, objTh, key, posType) {
    objTh.mouseDown = 0;
    objTh.key = key;
    objTh.addEventListener('mousedown', function (event) {
        handleDataGridColumnMouseDown(objRoot, this, event, posType);
        //return false;
    }, true);


    objTh.addEventListener('mousemove', function (event) {
        handleDataGridColumnMouseMove(objRoot, this, event, posType);
        //return false;
    }, true);
}

// 处理DataGrid列头的鼠标移动
function handleDataGridColumnMouseMove(objRoot, objTh, event, posType) {
    var ele = objTh;   //获取到td的内容
    var eleLeft = ele.offsetLeft;  //获取td距离左侧的距离
    var rightPos = eleLeft + parseInt(ele.offsetWidth); //左侧距离+元素宽度+2(边框)
    //console.log('eleLeft:' + eleLeft);
    //console.log('rightPos:' + rightPos);
    //console.log('ele.style.offsetWidth:' + ele.offsetWidth);
    //console.log('event.pageX:' + (event.pageX - objRoot.offsetLeft));
    var posMouse = event.pageX - objRoot.offsetLeft;

    if (objTh.mouseDown != 0) {
        console.log('handleDataGridColumnMouseMove:' + objTh.mouseDown);
        //获取移动的宽度
        var width = posMouse - eleLeft;
        //查询所有的列元素,改变宽度
        //ele.style.width = width;
        //objRoot.options.columns[objTh.key].width = width;
        //showDataGridData(objRoot, objRoot.options.dataCur);
    } else {
        if (rightPos - 5 <= posMouse && posMouse <= rightPos + 5) {
            ele.style.cursor = 'e-resize';
        } else if (eleLeft <= posMouse && posMouse <= eleLeft + 5 && posType != 0) {   //  序号列前端不用调整
            ele.style.cursor = 'e-resize';
        } else {
            ele.style.cursor = 'default';
        }
    }
}

//处理DataGrid列头的鼠标按下
function handleDataGridColumnMouseDown(objRoot, objTh, event, pos) {
    event = event || window.event;

    var ele = objTh;   //获取到td的内容
    var eleLeft = ele.offsetLeft;  //获取td距离左侧的距离
    var rightPos = eleLeft + parseInt(ele.offsetWidth); //左侧距离+元素宽度+2(边框)
    console.log('eleLeft:' + eleLeft);
    console.log('rightPos:' + rightPos);
    console.log('ele.style.offsetWidth:' + ele.offsetWidth);
    console.log('event.pageX:' + (event.pageX - objRoot.offsetLeft));
    var posMouse = event.pageX - objRoot.offsetLeft;   // 整个表格控件的单击位置
    // 根据这个位置，判断单击在哪两个列的中间线上，然后根据鼠标移动的方向，来决定调整哪个列头 
    var cu = objRoot.options.columns;
    var wid = 0;
    for (var n = 0; n < cu.length; ++n) {        
        if (posMouse > wid && posMouse < wid + objRoot.options.columns[n].width / 2) {   // 在该列的前半区
        	objRoot.movingCol = n;
        	break;
        }
        else if (posMouse > wid + objRoot.options.columns[n].width / 2 
        		&& posMouse < wid + objRoot.options.columns[n].width) {
        	objRoot.movingCol = n + 1;
        	break;
        }
        wid += objRoot.options.columns[n].width;
    }
    //alert(objRoot.movingCol);
    
    //元素右侧端-6px < = 点击的距离   且  点击距离<= 元素右侧端
    if (rightPos - 5 <= posMouse && posMouse <= rightPos + 5) {
        ele.style.cursor = 'e-resize';
        objTh.mouseDown = 2;
        objTh.mousePos = event.pageX;

    } else if (eleLeft <= posMouse && posMouse <= eleLeft + 5 && pos != 0) {   //  序号列前端不用调整
        ele.style.cursor = 'e-resize';
        objTh.mouseDown = 1;
        objTh.mousePos = event.pageX;
    } else {
        ele.style.cursor = 'default';
        objTh.mouseDown = 0;
    }
    console.log('handleDataGridColumnMouseDown:' + objTh.mouseDown);

    //objTh.setCapture && objTh.setCapture();

    document.onmousemove = function (event) {
        event = event || window.event;

        //获取鼠标的坐标
        //var left = event.clientX - ol;
        //var top = event.clientY - ot;

        //修改box1的位置
        //obj.style.left = left + "px";
        //obj.style.top = top + "px";


    };

    document.onmouseup = function (event) {
        //当鼠标松开时，将元素固定在当前位置，取消document的onmousemove事件
        document.onmousemove = null;
        //onmouseup事件只需要执行一次，执行过一次以后就没有存在的意义了
        document.onmouseup = null;

        var w = event.pageX - objTh.mousePos;
        //objTh.style.width = (parseInt(objTh.style.width) + w) + "px";
        console.log('objTh.style.width:' + objTh.style.width);
        console.log('objTh.key:' + objTh.key);
        //objRoot.options.columns[objTh.key].width = objRoot.options.columns[objTh.key].width + w;
        //console.log('objRoot.options.columns[objTh.key].width:' + objRoot.options.columns[objTh.key].width);
        //if (objRoot.options.columns[objTh.key].width < 60) {   // 限制下最小值
        //    objRoot.options.columns[objTh.key].width = 60;
        //}
        
        var cu = objRoot.options.columns;
        var pos = 0;
        var keyCur = "";
        for (var key in cu) {        	
        	if (pos == objRoot.movingCol){
        		keyCur = key;
        		break;
        	}
        	pos++;
        }
                
        objRoot.options.columns[objRoot.movingCol].width += w;
        var wNew = objRoot.options.columns[objRoot.movingCol].width;
        objRoot.children[0].children[0].children[0].children[objRoot.movingCol].style.width = wNew + "px";

        adjustDataGridColumnSize(objRoot, objTh, w);

        showDataGridData(objRoot, objRoot.options.dataCur);

        //objTh.releaseCapture && objTh.releaseCapture();

    };

    return false;
}

function adjustDataGridColumnSize(objRoot, objTh, w) {
    var columnTable = objTh.parentNode.parentNode;
    var wTmp = parseInt(columnTable.style.width) + w;
    columnTable.style.width = wTmp + "px";

    objRoot.widthTotal = wTmp;
}

// 清除数据行
function clearDataGridData(obj) {
    var childs = obj.table.children;
    for (var m = childs.length - 1; m >= 0; --m) {
        obj.table.removeChild(childs[m]);
    }
}

function loadDataGridData(obj) {
    var ajax = new XMLHttpRequest();
    console.log('method:' + obj.options.method);
    var url = obj.options.url;

    console.log('url:' + url);
    if (url != undefined) {
        //if (obj.options.method == "get"){
        if (url.indexOf('?') > 0)
            url = url + "&pageNo=" + obj.options.pager.pageNo;
        else
            url = url + "?pageNo=" + obj.options.pager.pageNo;
        url = url + "&pageSize=" + obj.options.pager.pageSize;
        //}
        ajax.open(obj.options.method, url);
        ajax.send();
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4 && ajax.status == 200) {
                var con = ajax.responseText;
                if (bjDebug) {
                    console.log("con:" + con);
                }
                var data = eval('(' + con + ')');

                if (obj.options.pager.visible) {
                    obj.options.pager.total.innerHTML = "共" + data.total + "记录";
                    obj.options.pager.pageNums = (data.total % obj.options.pager.pageSize == 0)
                        ? (data.total / obj.options.pager.pageSize) : (parseInt(data.total / obj.options.pager.pageSize) + 1);
                }

                var retCon = "";
                var rows = data.rows;
                obj.options.data = rows;     // 记录当前原始数据
                obj.options.dataCur = rows;  // 记录当前数据 

                // 显示行数据
                showDataGridData(obj, rows);
            }
        }
    }
    var con = obj.options.data;
    if (con != undefined) {
        var data = con;
        if (typeof con === String) {
            data = eval('(' + con + ')');
        }

        if (obj.options.pager.visible) {
            obj.options.pager.total.innerHTML = "共" + data.total + "记录";
            obj.options.pager.pageNums = (data.total % obj.options.pager.pageSize == 0)
                ? (data.total / obj.options.pager.pageSize) : (parseInt(data.total / obj.options.pager.pageSize) + 1);
        }

        var retCon = "";
        var rows = data.rows;
        obj.options.data = rows;     // 记录当前原始数据
        obj.options.dataCur = rows;  // 记录当前数据

        // 显示行数据
        showDataGridData(obj, rows);
    }
}

function showDataGridData(obj, rows) { 
    clearDataGridData(obj);
    for (var i = 0; i < rows.length; ++i) {
        var objTr = document.createElement('tr');
        if (i % 2 == 0) {
            objTr.setAttribute('class', 'dataRow');
        } else {
            objTr.setAttribute('class', 'dataRowSep');
        }

        // 处理序号
        if (obj.options.rowNumber) {
            var objTd = document.createElement('td');
            objTd.innerHTML = i + 1;
            objTd.style.width = obj.options.numberColWidth + "px";
            objTd.setAttribute('class', 'rowNumber');
            objTr.appendChild(objTd);
        }

        var rowsData = rows[i];
        var p = 0;
        var cu = obj.options.columns;
        for (var n = 0; n < cu.length; ++n) {
            var item = obj.options.columns[n].field;
            var objTd = document.createElement('td');
            objTd.style.width = obj.options.columns[n].width + "px";
            var objConDiv = document.createElement('div');
            objConDiv.setAttribute('class', 'cellCon');
            objTd.appendChild(objConDiv);

            var itemCon = rowsData[item];
            if (item.indexOf('.') > 0) {  // 如果item是多层次，即含“.”
                var arrItem = item.split('.');
                var itemData = rowsData;
                for (var p = 0; p < arrItem.length; ++p) {
                    itemData = itemData[arrItem[p]];
                }
                itemCon = itemData;
            }
            var ff = obj.options.columns[n]['format'];
            if (ff != null) {
                var cellCon = ff(itemCon, rowsData, p);
                objConDiv.innerHTML = cellCon;
            } else {

                objConDiv.innerHTML = itemCon;
            }
            objConDiv.style.textAlign = obj.options.columns[n].align;

            // 处理鼠标滑动时的背景变化
            if (obj.options.rowHover) {
                objTd.rowPos = i;
                objTd.addEventListener('mouseover', function () {
                    var p = this.parentNode;
                    var childs = p.children;
                    for (var m = 1; m < childs.length - 1; ++m) {   // 附加列不显示
                        childs[m].setAttribute('class', 'dataRowHover');
                    }
                });
                objTd.addEventListener('mouseout', function () {
                    var p = this.parentNode;
                    var childs = p.children;
                    for (var m = 1; m < childs.length - 1; ++m) {
                        childs[m].setAttribute('class', (this.rowPos % 2 == 0) ? 'dataRow' : 'dataRowSep');
                    }
                });
            }

            objTr.appendChild(objTd);
            ++p;
        }

        // 附加列
        var objTd = document.createElement('td');
        objTd.style.border = "none";
        objTd.style.background = "#fff";
        objTd.style.width = "60px";
        objTr.appendChild(objTd);

        obj.table.appendChild(objTr);
    }
     

    obj.table.style.width = obj.widthTotal + "px";

}

// 冒泡排序
function sortDataByKey(dataSrc, key, order) {
    var data = [];
    for (var i = 0; i < dataSrc.length; i++) {  // 拷贝数据防止影响原始数据(浅拷贝)
        data[i] = dataSrc[i];
    }

    for (var i = 0; i < data.length - 1; i++) {
        for (var j = 0; j < data.length - i - 1; j++) {
            if (order == 'desc') {
                if (data[j][key] < data[j + 1][key]) {
                    var swap = data[j];
                    data[j] = data[j + 1];
                    data[j + 1] = swap;
                }
            } else if (order == 'asc') {
                if (data[j][key] > data[j + 1][key]) {
                    var swap = data[j];
                    data[j] = data[j + 1];
                    data[j + 1] = swap;
                }
            }
        }
    }
    return data;
}

var loadTreeChildsNode = function (level, pRoot, pNode, nodeCon, type) {
    var cd = nodeCon.children;    // 是json里的children
    var isOpen = nodeCon.isOpen;
    if (isOpen == undefined) {
        isOpen = "1";
    }

    var objItem = document.createElement('li');

    var preBlank = "";
    for (var m = 0; m < level; ++m) {
        preBlank = preBlank + "&nbsp;&nbsp;&nbsp;&nbsp;";
    }

    var objDiv = document.createElement('div');
    // 添加缩进
    var objSpanBlank = document.createElement('span');
    objSpanBlank.innerHTML = preBlank;
    objDiv.appendChild(objSpanBlank);

    // 添加展开收拢图标
    var objSpanIcon = document.createElement('span');
    if (cd != null) {
        objSpanIcon.setAttribute('class', 'treeExpanded');
        objSpanIcon.root = pRoot;
        objSpanIcon.isOpen = isOpen;
        objSpanIcon.addEventListener('click', function () {   // 处理展开合并
            treeNodeIconClick(objSpanIcon);
        });
    } else {
        objSpanIcon.setAttribute('class', 'treeIndent');
    }
    objDiv.appendChild(objSpanIcon);

    var objSpanItem = document.createElement('span');
    objSpanItem.setAttribute('class', 'treeItem');
    objDiv.appendChild(objSpanItem);

    // 添加节点图标
    var objSpanIcon1 = document.createElement('span');
    if (cd != null) {
        if (isOpen == "1") {
            objSpanIcon1.setAttribute('class', 'treeFolderOpen');
        } else {
            objSpanIcon1.setAttribute('class', 'treeFolderClose');
        }
    } else {
        objSpanIcon1.setAttribute('class', 'treeSubNodeIcon');
    }
    objSpanItem.appendChild(objSpanIcon1);

    // 添加文字
    var objSpanText = document.createElement('span');
    objSpanText.setAttribute('class', 'treeText');
    objSpanText.innerHTML = nodeCon.text;
    objSpanText.type = type;
    objSpanText.root = pRoot;
    objSpanText.addEventListener('click', function () {   // 处理名称单击
        f_1(this);
    });
    objSpanItem.appendChild(objSpanText);

    objItem.appendChild(objDiv);
    pNode.appendChild(objItem);

    objDiv.type = type;
    objDiv.root = pRoot;
    objDiv.nodeCon = nodeCon;
    console.log("cd:" + JSON.stringify(cd));
    objDiv.addEventListener('click', function () {   // 处理整行单击
        f_1(this);
    });

    console.log("nodeCon.children:" + nodeCon.children);
    if (cd != null) {
        for (var i = 0; i < cd.length; ++i) {

            var cdd = cd[i].children;
            if (cdd != null) {
                var objUl = document.createElement('ul');
                var levelNext = level + 1;
                loadTreeChildsNode(levelNext, pRoot, objUl, cd[i], type);
                objItem.appendChild(objUl);
            } else {
                var objDiv2 = document.createElement('div');
                var preBlankNext = preBlank + "&nbsp;&nbsp;&nbsp;&nbsp;";

                var objSpanBlank2 = document.createElement('span');
                objSpanBlank2.innerHTML = preBlankNext;
                objDiv2.appendChild(objSpanBlank2);

                var objSpanIcon2 = document.createElement('span');
                objSpanIcon2.setAttribute('class', 'treeIndent');
                objDiv2.appendChild(objSpanIcon2);

                var objSpanItem = document.createElement('span');
                objSpanItem.setAttribute('class', 'treeItem');
                objDiv2.appendChild(objSpanItem);

                var objSpanIcon21 = document.createElement('span');
                objSpanIcon21.setAttribute('class', 'treeSubNodeIcon');
                // 自定义了图标
                console.log(cd[i]["icon"]);
                if (cd[i]["icon"] != null) {
                    objSpanIcon21.style.backgroundImage = "url(" + cd[i]["icon"] + ")";
                }
                objSpanItem.appendChild(objSpanIcon21);

                var objSpanText2 = document.createElement('span');
                objSpanText2.setAttribute('class', 'treeText');
                objSpanText2.innerHTML = cd[i]["text"];
                objSpanText2.nodeCon = cd[i];
                objSpanText2.type = type;
                objSpanText2.root = pRoot;
                objSpanText2.addEventListener('click', function () {   // 处理名称单击
                    f_1(this);
                });
                objSpanItem.appendChild(objSpanText2);

                objItem.appendChild(objDiv2);

                objDiv2.type = type;
                objDiv2.root = pRoot;
                objDiv2.nodeCon = cd[i];
                objDiv2.addEventListener('click', function () {   // 处理整行单击
                    f_1(this);
                });
            }
        }
    }
}

var treeNodeIconClick = function (obj) {
    var isOpen = obj.isOpen;
    var pp = obj.parentNode.parentNode;
    var childs = pp.children;
    for (var m = 1; m < childs.length; ++m) {
        if (childs[m] != obj) {
            childs[m].style.display = (isOpen == "0") ? 'block' : 'none';
        }
    }
    //obj.style.display = 'inline-block';
    if (isOpen == "1") {
        obj.setAttribute('class', 'treeCollapsed');
    } else {
        obj.setAttribute('class', 'treeExpanded');
    }
    obj.isOpen = (isOpen == "0") ? "1" : "0";
}

var treeNodeTextClick = function (root, node) {
    // 触发外部事件
    if (root.itemClick)
        root.itemClick(node);
}

function h(obj) {
    var o = obj == null ? document : obj;
    var arrObj = o.getElementsByClassName('bjDialog');
    for (var m = 0; m < arrObj.length; ++m) {
        var objRoot = arrObj[m];
        if (objRoot.options == null) {
            objRoot.options = new Object();
        }
        var iconClass = null;
        objRoot.style.display = "none";   // 初始时隐藏
        var title = objRoot.getAttribute('title');
        var options = objRoot.getAttribute('options');
        if (options != null) {
            options = "{" + options + "}";
            var jsonOptions = eval("(" + options + ")");
            iconClass = jsonOptions.iconClass;
            if (jsonOptions.iconClass != null) {  // 标题栏图标
                objRoot.options.iconClass = jsonOptions.iconClass;
            }
            if (jsonOptions.modal != null) {   // 是否是模态
                objRoot.options.modal = jsonOptions.modal;
            }
            if (jsonOptions.buttons != null) {
                objRoot.options.buttons = jsonOptions.buttons;
            }
        }

        var con = objRoot.innerHTML;

        //objRoot.innerHTML = "";
        var divHead = document.createElement('div');
        divHead.setAttribute('class', 'bjDialogHead');
        //objRoot.appendChild(divHead);
        var spanTitle = document.createElement('span');
        spanTitle.setAttribute('class', 'bjDialogTitle');
        spanTitle.innerHTML = title == undefined ? "提示" : title;
        divHead.appendChild(spanTitle);

        var spanClose = document.createElement('span');
        spanClose.setAttribute('class', 'close');
        divHead.appendChild(spanClose);
        spanClose.o = objRoot;
        spanClose.addEventListener("click", function () {
            //document.body.removeChild(this.o);
            this.o.style.display = "none";
            if (this.o.options.modal) {
                //document.body.removeChild(document.mask);
                document.mask.style.display = "none";
            }
        });

        // 处理头部移动
        divHead.o = objRoot;
        divHead.addEventListener('mousedown', function (event) {
            //this.setCapture && this.setCapture();
            var pageX = event.pageX;
            var offsetX = parseInt(this.parentNode.offsetLeft);
            var posX = pageX - offsetX;
            var pageY = event.pageY;
            var offsetY = parseInt(this.parentNode.offsetTop);
            var posY = pageY - offsetY;
            document.objCapture = this.o;
            document.onmousemove = function (event) {
                event = event || window.event;
                var left = event.clientX - posX;
                var top = event.clientY - posY;
                this.objCapture.style.left = left + getScrollLeft() + "px";
                this.objCapture.style.top = top + getScrollTop() + "px";
            };
            document.onmouseup = function (event) {
                document.onmousemove = null;
                document.onmouseup = null;
            };
        });

        //var divCon = document.createElement('div');
        //divCon.setAttribute('class', 'bjDialogCon');   // 自定义的对话框让用户自己去调节样式
        //divCon.innerHTML = con;
        //objRoot.appendChild(divCon);
        objRoot.insertBefore(divHead, objRoot.children[0]);

        var bs = objRoot.options.buttons;
        if (bs != null) {
            var bt = document.createElement('div');
            bt.setAttribute('class', 'buttonRow');
            for (var i in bs) {
                var ob = bs[i];
                var btn = document.createElement('span');
                btn.setAttribute('class', 'bjButton');
                a1(btn);  // update this ui
                btn.innerHTML = ob.text;
                btn.o = objRoot;
                btn.k = i;
                btn.ob = ob;
                btn.addEventListener("click", function () {
                    if (this.ob.click) this.ob.click();
                    var tx = this.k;
                    //alert(this.innerHTML);
                    if (tx == "ok" || tx == "cancel") {
                        this.o.style.display = "none";
                        if (this.o.options.modal) {
                            document.mask.style.display = "none";
                        }
                    }
                });
                bt.appendChild(btn);
            }
            objRoot.appendChild(bt);
        }

        if (objRoot.options.width != null) {
            objRoot.style.width = objRoot.options.width + "px";
        }

        if (objRoot.options.height != null) {
            objRoot.style.height = objRoot.options.height + "px";
        }

        var w = getWinWidth();
        var h = getWinHeight();
        //alert(parseInt(o.style.height));
        objRoot.style.left = ((w - parseInt(objRoot.style.width)) / 2 + getScrollLeft()) + "px";
        objRoot.style.top = ((h - parseInt(objRoot.style.height)) / 2 + getScrollTop()) + "px";

        objRoot.removeAttribute('title');
        objRoot.removeAttribute('options');
    }
}

function i(obj) {
    var o = obj == null ? document : obj;
    var arrObj = o.getElementsByClassName('bjComboPanel');
    for (var m = 0; m < arrObj.length; ++m) {
        var objRoot = arrObj[m];
        var iconClass = null;
        var panel = "";
        if (objRoot.options == null) {
            objRoot.options = new Object();
        }
        var options = objRoot.getAttribute('options');
        if (options != null) {
            options = "{" + options + "}";
            var jsonOptions = eval("(" + options + ")");
            console.log('i jsonOptions:' + jsonOptions);
            iconClass = jsonOptions.iconClass;
            /*
            if (jsonOptions.iconClass != null) {  // 标题栏图标
                objRoot.options.iconClass = jsonOptions.iconClass;
            }
            if (jsonOptions.panel != null) {  // 标题栏图标
                objRoot.options.panel = jsonOptions.panel;
            }
            if (jsonOptions.editable != null) {  // 标题栏图标
                objRoot.options.editable = jsonOptions.editable;
            }
            if (jsonOptions.autoClose != null) {  // 单击后是否自动弹出框
                objRoot.options.autoClose = jsonOptions.autoClose;
            }
            if (jsonOptions.autoShow != null) {  // 单击移动到下拉框自动显示弹出框
                objRoot.options.autoShow = jsonOptions.autoShow;
            }
            */
            for (var it in jsonOptions)
                objRoot.options[it] = jsonOptions[it];
        }
        console.log('objRoot.options.panel:' + objRoot.options.panel);
        var objPanel = document.getElementById(objRoot.options.panel);
        objPanel.style.display = "none";   // 先隐藏

        var ipt = document.createElement('input');  
        if (objRoot.options.editable) {
        	ipt.style.display = "inline-block";
        	ipt.style.position = "absolute";
        	ipt.style.height = "100%";
        	ipt.style.left = "0";
        	ipt.style.border = "0px solid #fff";
        } else {
        	ipt.style.display = "none";
        }
        objRoot.appendChild(ipt);
        //arrInput[0].style.width = "100%";
        var spanText = document.createElement('span');
        spanText.innerHTML = objRoot.options.text;
        spanText.style.paddingLeft = "4px";
        spanText.style.paddingRight = "24px";   // 含箭头位置
        objRoot.insertBefore(spanText, ipt);

        // 创建下拉箭头
        var spanArraw = document.createElement('span');
        spanArraw.setAttribute('class', 'comboArrow');
        objRoot.appendChild(spanArraw);

        var con = objRoot.innerHTML;
        objRoot.objPanel = objPanel;
        objRoot.addEventListener('click', i_e);
        if (objRoot.options.autoShow){
        	objRoot.addEventListener('mousemove', i_e);
        }

        objRoot.removeAttribute('options');
    }
}

function i_e() {
	 this.objPanel.style.display = "block";
     this.objPanel.style.border = "1px solid #ddd";
     this.objPanel.style.position = 'absolute';
     this.objPanel.style.left = parseInt(this.offsetLeft);
     this.objPanel.style.top = parseInt(this.offsetTop) + parseInt(this.offsetHeight);
     console.log('this.offsetWidth:' + this.offsetWidth);
     var panelWidth = this.objPanel.style.width;
     console.log('panelWidth:' + panelWidth);
     if (panelWidth < this.offsetWidth) {
         this.objPanel.style.width = this.offsetWidth - 2;
     }

     if (this.options.autoClose){   // 自动关闭
         document.currentObj = this.objPanel;   // 记录当前操作的全局对象
         document.onmouseup = function (event) {
             this.currentObj.style.display = "none";
         }
     }
}

function j(obj) {
    var o = obj == null ? document : obj;
    var arrObj = o.getElementsByClassName('bjComboTree');
    for (var m = 0; m < arrObj.length; ++m) {
        var objRoot = arrObj[m];
        var iconClass = null;
        var treeHeight = 200;
        var panel = "";
        var url = "";
        var method = "get";
        if (objRoot.options == null) {
            objRoot.options = new Object();
        }
        var options = objRoot.getAttribute('options');
        if (options != null) {
            options = "{" + options + "}";
            var jsonOptions = eval("(" + options + ")");
            iconClass = jsonOptions.iconClass;
            if (jsonOptions.iconClass != null) {  // 标题栏图标
                objRoot.options.iconClass = jsonOptions.iconClass;
            }
            if (jsonOptions.treeHeight != null) {  // 标题栏图标
                treeHeight = jsonOptions.treeHeight;
            }
            if (jsonOptions.url != null) {
                objRoot.options.url = jsonOptions.url;
            }
            if (jsonOptions.method != null) {
                objRoot.options.method = jsonOptions.method;
            }
        }
        url = objRoot.options.url;
        method = objRoot.options.method;
        console.log('j url:' + url);
        console.log('j method:' + method);

        var divContainer = document.createElement('div');
        divContainer.setAttribute('class', 'bjComboTree');
        divContainer.setAttribute('style', objRoot.getAttribute('style'));
        divContainer.style.position = 'relative';
        objRoot.parentNode.insertBefore(divContainer, objRoot);
        var id = objRoot.getAttribute("id");
        var name = objRoot.getAttribute("name");
        var style = objRoot.getAttribute("style");
        objRoot.parentNode.removeChild(objRoot);
        objRoot = document.createElement('input');   // 创建一个新的input
        if (id != null) {
            objRoot.setAttribute("id", id);
        }
        if (name) {
            objRoot.setAttribute("name", name);
        }
        objRoot.style.display = "none";
        divContainer.appendChild(objRoot);

        var spanText = document.createElement('span');
        spanText.style.paddingLeft = "2px";
        divContainer.insertBefore(spanText, objRoot);

        // 创建下拉箭头
        var spanArraw = document.createElement('span');
        spanArraw.setAttribute('class', 'comboArrow');
        divContainer.appendChild(spanArraw);

        var objTree = document.createElement('div');
        divContainer.parentNode.insertBefore(objTree, divContainer);   // place tree in front of combo
        objTree.setAttribute("class", "bjTree");
        objTree.style.display = "none";

        // 获取tree的数据
        var ajax = new XMLHttpRequest();
        ajax.open(method, url);
        ajax.send();
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4 && ajax.status == 200) {
                var con = ajax.responseText;
                var objUl = document.createElement('ul');
                var arrCon = eval('(' + con + ')');
                for (var i = 0; i < arrCon.length; ++i) {
                    loadTreeChildsNode(0, objTree, objUl, arrCon[i], 0);  // 0 不触发事件到外部
                }
                objUl.setAttribute('class', 'bjTreeCon');
                objTree.appendChild(objUl);
            }
        }

        divContainer.objTree = objTree;
        divContainer.addEventListener('click', function () {
            this.objTree.style.display = "block";
            this.objTree.style.position = 'absolute';
            this.objTree.style.left = parseInt(this.offsetLeft);
            ;
            this.objTree.style.top = parseInt(this.offsetTop) + parseInt(this.offsetHeight) - 1;
            this.objTree.style.width = this.offsetWidth - 2;
            this.objTree.style.height = treeHeight;

            document.currentObj = this.objTree;   // 记录当前操作的全局对象
            document.onmouseup = function (event) {
                if (event.target != this.currentObj) {
                    var objEvent = event.target;
                    var p = objEvent;
                    var bIn = false;
                    while(p){
                        p = p.parentNode;
                        //console.log("p.innerHTML:" + p.innerHTML);
                        if (p == this.currentObj){
                            console.log("is inner");
                            bIn = true;
                            break;
                        }
                    }
                    if (!bIn){   // click out of popup tree
                        this.currentObj.style.display = "none";
                    }
                }
            }
        });

    }
}

function k(obj) {
    var o = obj == null ? document : obj;
    var arrObj = o.getElementsByClassName('bjCombobox');
    for (var m = 0; m < arrObj.length; ++m) {
        var objRoot = arrObj[m];
        var iconClass = null;
        var listHeight = 200;
        var panel = "";
        var url = "";
        var method = "get";
        var mulSelect = false;
        var text = "";
        var value = "";
        if (objRoot.options == null) {
            objRoot.options = new Object();
        }
        var options = objRoot.getAttribute('options');
        if (options != null) {
            options = "{" + options + "}";
            var jsonOptions = eval("(" + options + ")");
            objRoot.options = jsonOptions;  
            //console.log('objRoot.options:' + objRoot.options.listHeight);
        }
        url = objRoot.options.url;
        method = objRoot.options.method;
        listHeight = objRoot.options.listHeight;
        mulSelect = objRoot.options.mulSelect;
        text = objRoot.options.text;
        value = objRoot.options.value;

        var divContainer = document.createElement('div');
        divContainer.setAttribute('class', 'bjCombobox');
        divContainer.setAttribute('style', objRoot.getAttribute('style'));
        divContainer.style.position = 'relative';
        objRoot.parentNode.insertBefore(divContainer, objRoot);
        var id = objRoot.getAttribute("id");
        var name = objRoot.getAttribute("name");
        var style = objRoot.getAttribute("style");        
        var objRootNew = document.createElement('input');   // 创建一个新的input
        objRootNew.options = objRoot.options;
        objRoot.parentNode.removeChild(objRoot);  // 删除了老的，应该可以优化
        objRoot = objRootNew;
        if (id != null) {
            objRoot.setAttribute("id", id);
        }
        if (name) {
            objRoot.setAttribute("name", name);
        }
        //if (!bjDebug) {
        objRoot.style.display = "none";
        //}
        objRoot.value = value;
        divContainer.appendChild(objRoot);

        var spanText = document.createElement('span');
        //spanText.style.paddingLeft = "2px";
        //spanText.style.height = "28px";
        //spanText.style.textOverflow = "ellipsis";
        //spanText.style.overflow = "hidden";        
        spanText.innerHTML = text;
        divContainer.insertBefore(spanText, objRoot);

        // 创建下拉箭头
        var spanArraw = document.createElement('span');
        spanArraw.setAttribute('class', 'comboArrow');
        divContainer.appendChild(spanArraw);

        //spanText.style.width = (divContainer.offsetWidth - 2 - 16 - 5 - 2) + 'px';
        //alert(spanText.style.width);

        var objList = document.createElement('div');
        divContainer.parentNode.insertBefore(objList, divContainer);  // 放到容器前 
        //divContainer.appendChild(objList);    // 放到容器内
        objList.id = "list_" + m;
        objList.style.display = "none";
        objList.style.overflow = "auto";
        objList.style.zIndex = 10000; 
        objList.style.height = objRoot.options.listHeight + "px";
        objList.mulSelect = mulSelect;
        if (bjDebug) {
            console.log("objList.mulSelect:" + objList.mulSelect);
        }

        // 获取list的数据
        var ajax = new XMLHttpRequest();
        ajax.open(method, url);
        ajax.send();
        ajax.objList = objList;   // 防止多个控件的数据错乱 
        ajax.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {   // 一定要用this,如果多个ajax请求，不用this后面的会覆盖前面的对象
                var con = this.responseText; 
                var objUl = document.createElement('ul');
                var arrCon = eval('(' + con + ')');
                for (var i = 0; i < arrCon.length; ++i) {
                    var objItem = document.createElement('li');
                    // 判断是否应该设置选择状态
                    var valueCur = arrCon[i].value;
                    var textCur = arrCon[i].text;
                    if (textCur.indexOf(text) >= 0) {
                        objItem.setAttribute('class', 'listItemSel');
                        objItem.selected = true;
                    } else {
                        objItem.setAttribute('class', 'listItemUnSel');
                        objItem.selected = false;
                    }

                    objItem.innerHTML = textCur;
                    objUl.appendChild(objItem);

                    objItem.text = textCur;
                    objItem.value = valueCur;
                    objItem.root = objList;
                    objItem.addEventListener('click', function (e) {
                        console.log("text:" + this.text + ", value:" + this.value);
                        this.selected = !this.selected;
                        if (this.selected) {
                            this.setAttribute('class', 'listItemSel');
                        } else {
                            this.setAttribute('class', 'listItemUnSel');
                        }

                        var mulSelect = this.root.mulSelect;

                        // 处理新的值
                        var textNew = "";
                        var valueNew = "";
                        var p = this.parentNode;
                        var childs = p.children;
                        if (mulSelect) {
                            for (index in childs) {
                                if (childs[index].selected) {
                                    textNew = textNew + childs[index].text + ",";
                                    valueNew = valueNew + childs[index].value + ",";
                                }
                            }
                        } else {
                            for (index in childs) {
                                if (childs[index].selected && childs[index] != this) {  // 取消其他项目的选择
                                    childs[index].selected = false;
                                    childs[index].setAttribute('class', 'listItemUnSel');
                                }
                            }
                            if (this.selected) {
                                textNew = this.text + ",";
                                valueNew = this.value + ",";
                            }
                            this.root.style.display = "none";
                        }
                        this.root.nextSibling.children[0].innerHTML = textNew.substring(0, textNew.length - 1);
                        this.root.nextSibling.children[1].value = valueNew.substring(0, valueNew.length - 1);


                    }, false);
                }
                objUl.setAttribute('class', 'bjListboxCon');
                this.objList.appendChild(objUl);
            }
        }
 
        divContainer.objList = objList;
        divContainer.listHeight = listHeight;
        divContainer.addEventListener('click', function () {
            this.objList.style.display = "block";
            this.objList.style.border = "1px solid #ddd";
            this.objList.style.position = 'absolute'; 
            this.objList.style.left = parseInt(this.offsetLeft);
            ;
            this.objList.style.top = parseInt(this.offsetTop) + parseInt(this.offsetHeight) - 1 + "px";
            this.objList.style.width = this.offsetWidth - 2; 

            document.currentObj = this.objList;   // 记录当前操作的全局对象
            document.onmouseup = function (event) {
                if (event.target != this.currentObj) {
                    var objEvent = event.target;
                    var p = objEvent.parentNode;
                    if (p) {
                        var pp = p.parentNode;
                        if (pp && pp == this.currentObj) {
                            if (!this.currentObj.mulSelect) {
                                this.currentObj.style.display = "none";
                            }
                        } else {
                            this.currentObj.style.display = "none";
                        }
                    }
                }
            }
        });

    }
}

function l(obj) {
    var o = obj == null ? document : obj;
    var arrObj = o.getElementsByClassName('bjDateTime');
    for (var m = 0; m < arrObj.length; ++m) {
        var objRoot = arrObj[m];
        if (objRoot.options == null) {
            objRoot.options = new Object();
        }
        var options = objRoot.getAttribute('options');
        if (options != null) {
            options = "{" + options + "}";
            var jsonOptions = eval("(" + options + ")");
            if (jsonOptions.showTime != null) {  // 是否显示时间
                objRoot.options.showTime = jsonOptions.showTime;
            }
            if (jsonOptions.language != null) {
                objRoot.options.language = jsonOptions.language;
            }
        }

        objRoot.removeAttribute('options');

        createDateTime(objRoot);
    }
}

function createDateTime(objRoot) {
    var uiText = {
        cn: ['日', '一', '二', '三', '四', '五', '六', '时:', '分:', '秒:'],
        en: ['S', 'M', 'T', 'W', 'T', 'F', 'S', 'H:', 'M:', 'S:']
    };
    var dt = new Date();
    var year = dt.getFullYear();
    var month = dt.getMonth() + 1;
    var day = dt.getDate();
    var hour = dt.getHours();
    var minute = dt.getMinutes();
    var second = dt.getSeconds();

    var tblDay = document.createElement('table');
    tblDay.setAttribute('class', 'tblDay');
    var spanTitle = document.createElement('span');
    spanTitle.setAttribute('class', 'title');

    var info = {
        year: year,
        month: month,
        title: spanTitle,
        tblDay: tblDay,
        selDate: dt
    };

    var divHead = document.createElement('div');
    divHead.setAttribute('class', 'head');
    objRoot.appendChild(divHead);

    // 处理上一年按钮
    var spanPreYear = document.createElement('span');
    spanPreYear.setAttribute('class', 'preYear');
    divHead.appendChild(spanPreYear);
    spanPreYear.info = info;
    spanPreYear.addEventListener('click', function (e) {
        this.info.year = this.info.year - 1;
        this.info.title.innerHTML = this.info.year + "-" + this.info.month;
        showDate(this.parentNode.parentNode, this.info);
        document.dtac = 1;
        console.log('pre year document.dtac:' + document.dtac);
        stp(e);
    }, false);

    var spanSep = document.createElement('span');
    spanSep.setAttribute('class', 'sep');
    divHead.appendChild(spanSep);

    // 处理上一月按钮
    var spanPreMonth = document.createElement('span');
    spanPreMonth.setAttribute('class', 'preMonth');
    divHead.appendChild(spanPreMonth);
    spanPreMonth.info = info;
    spanPreMonth.addEventListener('click', function (e) {
        this.info.month = this.info.month - 1;
        if (this.info.month == 0) {
            this.info.month = 12;
            this.info.year = this.info.year - 1;
        }
        this.info.title.innerHTML = this.info.year + "-" + this.info.month;
        showDate(this.parentNode.parentNode, this.info);
        stp(e);
        document.dtac = 1;
    }, false);

    spanTitle.innerHTML = year + "-" + month;
    divHead.appendChild(spanTitle);

    // 处理下一月按钮
    var spanNextMonth = document.createElement('span');
    spanNextMonth.setAttribute('class', 'nextMonth');
    divHead.appendChild(spanNextMonth);
    spanNextMonth.info = info;
    spanNextMonth.addEventListener('click', function (e) {
        this.info.month = this.info.month + 1;
        if (this.info.month == 13) {
            this.info.month = 1;
            this.info.year = this.info.year + 1;
        }
        this.info.title.innerHTML = this.info.year + "-" + this.info.month;
        console.log('info:' + JSON.stringify(info));
        showDate(this.parentNode.parentNode, this.info);
        stp(e);
        document.dtac = 1;
    }, false);

    var spanSep = document.createElement('span');
    spanSep.setAttribute('class', 'sep');
    divHead.appendChild(spanSep);

    // 处理下一年按钮
    var spanNextYear = document.createElement('span');
    spanNextYear.setAttribute('class', 'nextYear');
    divHead.appendChild(spanNextYear);
    spanNextYear.info = info;
    spanNextYear.addEventListener('click', function (e) {
        this.info.year = this.info.year + 1;
        this.info.title.innerHTML = this.info.year + "-" + this.info.month;
        showDate(this.parentNode.parentNode, this.info);
        stp(e);
        document.dtac = 1;
    }, false);

    objRoot.appendChild(tblDay);

    var tr = document.createElement('tr');
    tblDay.appendChild(tr);
    for (var i = 0; i < 7; ++i) {
        var td = document.createElement('td');
        td.style.textAlign = "center";
        td.innerHTML = uiText.cn[i];
        tr.appendChild(td);
    }

    showDate(objRoot, info);

    // 处理时间
    if (objRoot.options.showTime) {
        var divTime = document.createElement('div');
        divTime.setAttribute('class', 'time');
        objRoot.appendChild(divTime);

        var spanHour = document.createElement('span');
        spanHour.innerHTML = uiText.cn[7];
        divTime.appendChild(spanHour);
        var inputHour = document.createElement('input');
        inputHour.setAttribute('class', 'hms');
        inputHour.value = hour;
        divTime.appendChild(inputHour);

        var spanMinute = document.createElement('span');
        spanMinute.innerHTML = uiText.cn[8];
        divTime.appendChild(spanMinute);
        var inputMinute = document.createElement('input');
        inputMinute.setAttribute('class', 'hms');
        inputMinute.value = minute;
        divTime.appendChild(inputMinute);

        var spanSecond = document.createElement('span');
        spanSecond.innerHTML = uiText.cn[9];
        divTime.appendChild(spanSecond);
        var inputSecond = document.createElement('input');
        inputSecond.setAttribute('class', 'hms');
        inputSecond.value = second;
        divTime.appendChild(inputSecond);
    }
}

function showDate(objRoot, info) {
    var year = info.year;
    var month = info.month;
    var tblDay = info.tblDay;
    var firstChild = tblDay.children[0];
    tblDay.innerHTML = "";
    tblDay.appendChild(firstChild);

    var getWeek = function (year, month, day) {
        var d = new Date();
        d.setYear(year);
        d.setMonth(month - 1);
        d.setDate(day);
        console.log(d);
        //获得周几
        var weeks = [0, 1, 2, 3, 4, 5, 6];
        return weeks[d.getDay()];
    }

    // 得到月份的第一天是星期几
    var firstDayWeek = getWeek(year, month, 1);
    if (bjDebug) {
        console.log('year:' + year + ", month:" + month + ", first day week:" + firstDayWeek);
    }

    // 得到月份总天数
    var dayCount = new Date(year, month, 0).getDate();
    if (bjDebug) {
        console.log('dayCount:' + dayCount);
    }

    // 得到月份最后一天是星期几
    var endDayWeek = getWeek(year, month, dayCount);

    // 得到上一月份的总天数
    var preYear = null;
    var preMonth = null;
    if (month == 1) {
        preMonth = 12;
        preYear = year - 1;
    } else {
        preMonth = month - 1;
        preYear = year;
    }
    var dayCountPre = new Date(preYear, preMonth, 0).getDate();

    var nextYear = null;
    var nextMonth = null;
    if (month == 12) {
        nextMonth = 1;
        nextYear = year + 1;
    } else {
        nextMonth = month + 1;
        nextYear = year;
    }

    // 绘制表格
    tr = document.createElement('tr');
    tblDay.appendChild(tr);
    for (var m = 0; m < firstDayWeek; ++m) {   // 上个月的天数
        var td = document.createElement('td');
        var thisDay = dayCountPre - firstDayWeek + 1 + m;
        if (preYear == info.selDate.getFullYear()
            && preMonth == info.selDate.getMonth() + 1
            && thisDay == info.selDate.getDate()) {
            td.setAttribute('class', 'selectDay');
        } else {
            td.setAttribute('class', 'otherMonthDay');
        }
        td.innerHTML = thisDay;
        tr.appendChild(td);
        td.addEventListener('click', function () {
            selectOneDate(this, -1, objRoot, info);
            document.dtac = 0;
        }, false);
    }
    for (var n = firstDayWeek; n < dayCount + firstDayWeek; ++n) {   // 当前月的天数
        if (n > 0 && n % 7 == 0) {
            tr = document.createElement('tr');
            tblDay.appendChild(tr);
        }
        var td = document.createElement('td');
        var thisDay = n - firstDayWeek + 1;
        if (year == info.selDate.getFullYear()
            && month == info.selDate.getMonth() + 1
            && thisDay == info.selDate.getDate()) {
            td.setAttribute('class', 'selectDay');
        } else {
            td.setAttribute('class', 'thisMonthDay');
        }
        td.innerHTML = thisDay;
        tr.appendChild(td);
        td.addEventListener('click', function () {
            selectOneDate(this, 0, objRoot, info);
            document.dtac = 0;
        }, false);
    }

    var tailNums = endDayWeek == 6 ? 14 : 7;
    if (endDayWeek == 6) {
        tr = document.createElement('tr');
        tblDay.appendChild(tr);
    }
    for (var p = endDayWeek + 1; p < tailNums; ++p) {
        var td = document.createElement('td');
        var thisDay = p - endDayWeek;
        if (nextYear == info.selDate.getFullYear()
            && nextMonth == info.selDate.getMonth() + 1
            && thisDay == info.selDate.getDate()) {
            td.setAttribute('class', 'selectDay');
        } else {
            td.setAttribute('class', 'otherMonthDay');
        }
        td.innerHTML = thisDay;
        tr.appendChild(td);
        td.addEventListener('click', function () {
            selectOneDate(this, 1, objRoot, info);
            document.dtac = 0;
        }, false);
    }
}

function selectOneDate(a, p, objRoot, info) {
    var tbl = a.parentNode.parentNode;
    var tds = tbl.getElementsByTagName('td');
    for (var i in tds) {
        var td = tds[i];
        var cls = td.getAttribute('class');
        if (cls == 'selectDay') {
            td.setAttribute('class', p == 0 ? 'thisMonthDay' : 'otherMonthDay');
            break;
        }
    }
    a.setAttribute('class', 'selectDay');

    var type = objRoot.options.type;
    if (type == 'in') {
        var year = info.year;
        var month = info.month;
        if (p == -1) { // 上一月
            if (month == 1) {
                month = 12;
                year = year - 1;
            }
        } else if (p == 1) {
            if (month == 12) {
                month = 1;
                year = year + 1;
            }
        }

        // 处理时间
        var showTime = objRoot.options.showTime;
        console.log('showTime:' + showTime);
        var hms = "";
        var arrInputHMS = objRoot.getElementsByTagName('input');
        if (showTime) {
            var h = arrInputHMS[0].value == "" ? "00" : arrInputHMS[0].value;
            var m = arrInputHMS[1].value == "" ? "00" : arrInputHMS[1].value;
            var s = arrInputHMS[2].value == "" ? "00" : arrInputHMS[2].value;
            hms = " " + h + ":" + m + ":" + s;
        }

        var arrSpan = objRoot.nextSibling.getElementsByTagName('span');
        arrSpan[0].innerHTML = year + "-" + month + "-" + a.innerHTML + hms;

        var arrInput = objRoot.nextSibling.getElementsByTagName('input');
        arrInput[0].value = year + "-" + month + "-" + a.innerHTML + hms;
    }
}

function m(obj) {
    var o = obj == null ? document : obj;
    var arrObj = o.getElementsByClassName('bjComboDateTime');
    for (var m = 0; m < arrObj.length; ++m) {
        var objRoot = arrObj[m];
        if (objRoot.options == null) {
            objRoot.options = new Object();
        }
        var options = objRoot.getAttribute('options');
        if (options != null) {
            options = "{" + options + "}";
            var jsonOptions = eval("(" + options + ")");
            console.log('i jsonOptions:' + jsonOptions);

            if (jsonOptions.value != null) {
                objRoot.options.value = jsonOptions.value;
            }
            if (jsonOptions.showTime != null) {
                objRoot.options.showTime = jsonOptions.showTime;
            }
            if (jsonOptions.language != null) {
                objRoot.options.language = jsonOptions.language;
            }
        }

        var id = objRoot.getAttribute("id");
        var name = objRoot.getAttribute("name");
        var inputNew = document.createElement('input');   // 创建一个新的input
        if (id != null) {
            inputNew.setAttribute("id", id);
        }
        if (name) {
            inputNew.setAttribute("name", name);
        }
        if (bjDebug) {
            inputNew.style.display = "inline-block";
        } else {
            inputNew.style.display = "none";
        }
        inputNew.value = objRoot.options.value;
        objRoot.appendChild(inputNew);

        objRoot.removeAttribute("id");
        objRoot.removeAttribute("name");
        objRoot.removeAttribute('options');

        var spanText = document.createElement('span');
        spanText.style.paddingLeft = "2px";
        objRoot.insertBefore(spanText, inputNew);

        // 创建下拉箭头
        var spanArraw = document.createElement('span');
        spanArraw.setAttribute('class', 'iconDateTime');
        objRoot.appendChild(spanArraw);

        // 创建日期时间控件
        var divDtContainer = document.createElement('div');
        divDtContainer.setAttribute('class', 'bjDateTime');
        divDtContainer.style.display = "none";
        divDtContainer.style.position = "absolute";
        divDtContainer.options = new Object();
        divDtContainer.options = objRoot.options;
        divDtContainer.options.type = "in";
        createDateTime(divDtContainer);
        objRoot.parentNode.insertBefore(divDtContainer, objRoot);

        objRoot.objDateTime = divDtContainer;
        objRoot.addEventListener('click', function () {
            this.objDateTime.style.display = "block";
            this.objDateTime.style.border = "1px solid #ddd";
            this.objDateTime.style.position = 'absolute';
            var w = this.objDateTime.offsetWidth;
            this.objDateTime.style.left = parseInt(this.offsetLeft) + parseInt(this.offsetWidth) - w;
            this.objDateTime.style.top = parseInt(this.offsetTop) + parseInt(this.offsetHeight);
            console.log('this.objDateTime.offsetWidth:' + this.objDateTime.offsetWidth);

            document.currentObj = this.objDateTime;   // 记录当前操作的全局对象
            document.onmouseup = function (event) {
                if (event.target != this.currentObj) {
                    var objEvent = event.target;
                    var p = objEvent.parentNode;
                    if (p) {
                        var pp = p.parentNode;
                        console.log("pp.innerHTML:" + pp.innerHTML);
                        if (pp) {
                            var ce = pp.getAttribute('class');
                            if (ce == "tblDay")
                                this.currentObj.style.display = "none";
                            if (pp != this.currentObj){
                                this.currentObj.style.display = "none";
                            }
                        }
                        else{
                            this.currentObj.style.display = "none";
                        }
                    }
                    else{
                        this.currentObj.style.display = "none";
                    }
                }
                // console.log('document.dtac:' + document.dtac);
                // if(document.dtac == 1){
                //     return;
                // }
                // this.currentObj.style.display = "none";
            }
        });

    }
}

function n(obj) {
    var o = obj == null ? document : obj;
    var arrObj = o.getElementsByClassName('bjTooltip');
    for (var m = 0; m < arrObj.length; ++m) {
        var objRoot = arrObj[m];
        if (objRoot.options == null) {
            objRoot.options = new Object();
        }
        var iconClass = null;
        var title = objRoot.getAttribute('title');
        var options = objRoot.getAttribute('options');
        if (options != null) {
            options = "{" + options + "}";
            var jsonOptions = eval("(" + options + ")");
            objRoot.options = jsonOptions;
        }
        objRoot.setAttribute('title', "");
        var position = objRoot.options.position;

        var divTooltip = document.createElement('div');
        divTooltip.setAttribute('class', 'bjTooltipCon');
        divTooltip.innerHTML = title;
        objRoot.parentNode.insertBefore(divTooltip, objRoot);

        var arrow = document.createElement('div');
        if (position == "bottom") {
            arrow.setAttribute('class', 'arrowBottom');
        } else if (position == "left") {
            arrow.setAttribute('class', 'arrowLeft');
        } else if (position == "right") {
            arrow.setAttribute('class', 'arrowRight');
        } else {
            arrow.setAttribute('class', 'arrowTop');
        }
        objRoot.parentNode.insertBefore(arrow, objRoot);

        var spanArrow = document.createElement('span');
        arrow.appendChild(spanArrow);

        objRoot.tooltip = divTooltip;
        objRoot.arrow = arrow;
        objRoot.position = position;
        objRoot.addEventListener('mousemove', function (event) {
            this.tooltip.style.display = "block";
            this.arrow.style.display = "block";

            if (bjDebug) {
                console.log('Tooltip position:' + this.position);
            }
            if (this.position == "bottom") {
                this.tooltip.style.left = getLeft(this) +
                    parseInt(this.offsetWidth) / 2 - parseInt(this.tooltip.offsetWidth) / 2 + "px";
                this.tooltip.style.top = getTop(this) + parseInt(this.offsetHeight) + this.options.offset + 8 + "px";

                this.arrow.style.left = getLeft(this) +
                    parseInt(this.offsetWidth) / 2 - parseInt(this.arrow.offsetWidth) / 2 + "px";
                this.arrow.style.top = getTop(this) + parseInt(this.offsetHeight) + this.options.offset - 4 + "px";
            } else if (this.position == "right") {
                this.tooltip.style.left = (getLeft(this) + parseInt(this.offsetWidth) + 11) + "px";
                this.tooltip.style.top = (getTop(this) + parseInt(this.offsetHeight) / 2 - parseInt(this.tooltip.offsetHeight) / 2) + "px";

                this.arrow.style.left = (getLeft(this) + parseInt(this.offsetWidth) + 4) + "px";
                this.arrow.style.top = (getTop(this) + parseInt(this.offsetHeight) / 2 - 7) + "px";
            } else if (this.position == "left") {
                this.tooltip.style.left = (getLeft(this) - parseInt(this.tooltip.offsetWidth) - 10) + "px";
                this.tooltip.style.top = (getTop(this) + parseInt(this.offsetHeight) / 2 - parseInt(this.tooltip.offsetHeight) / 2) + "px";

                this.arrow.style.left = (getLeft(this) - 11) + "px";
                this.arrow.style.top = (getTop(this) + parseInt(this.offsetHeight) / 2 - 7) + "px";
            } else {
                this.tooltip.style.left = (getLeft(this) +
                    parseInt(this.offsetWidth) / 2 - parseInt(this.tooltip.offsetWidth) / 2) + "px";
                this.tooltip.style.top = (getTop(this) - parseInt(this.tooltip.offsetHeight) - 11) + "px";

                this.arrow.style.left = (getLeft(this) +
                    parseInt(this.offsetWidth) / 2 - parseInt(this.arrow.offsetWidth) / 2) + "px";
                this.arrow.style.top = ((getTop(this) - 12)) + "px";
            }

        }, false);

        objRoot.addEventListener('mouseout', function (event) {
            this.tooltip.style.display = "none";
            this.arrow.style.display = "none";
        }, false);

        objRoot.removeAttribute('options');
    }
}

function oo(obj) {
    var o = obj == null ? document : obj;
    var arrObj = o.getElementsByClassName('bjProgressbar');
    for (var m = 0; m < arrObj.length; ++m) {
        var objRoot = arrObj[m];
        if (objRoot.options == null) {
            objRoot.options = new Object();
        }
        //var  title = objRoot.getAttribute('title');
        var options = objRoot.getAttribute('options');
        if (options != undefined) {
            options = "{" + options + "}";
            var jsonOptions = eval("(" + options + ")");
            if (jsonOptions.value != null) {
                objRoot.options.value = jsonOptions.value;
            }
            if (jsonOptions.total != null) {
                objRoot.options.total = jsonOptions.total;
            }
        }
        //objRoot.setAttribute('title', "");
        var value = objRoot.options.value;
        var total = objRoot.options.total;

        var spanValue = document.createElement('span');
        spanValue.setAttribute('class', 'progressBackground');
        var progressWidth = 0;
        var pV = 0;
        var totalWidth = parseInt(objRoot.offsetWidth);
        if (total == null) {
            progressWidth = totalWidth * value / 100;
            pV = value;
        } else {
            progressWidth = value / total * totalWidth;
            pV = value / total * 100;
        }
        spanValue.style.width = parseInt(progressWidth);
        if (bjDebug) {
            console.log('total=' + total + ", value=" + value + ", progressWidth=" + progressWidth);
        }
        objRoot.appendChild(spanValue);

        var spanText = document.createElement('span');
        spanText.innerHTML = parseInt(pV) + "%";
        spanText.setAttribute('class', 'progressText');
        objRoot.appendChild(spanText);

        objRoot.removeAttribute('options');
    }
}

function p(obj) {
    var o = obj == null ? document : obj;
    var arrObj = o.getElementsByClassName('bjSliderBar');
    for (var m = 0; m < arrObj.length; ++m) {
        var objRoot = arrObj[m];
        if (objRoot.options == null) {
            objRoot.options = new Object();
        }
        //var  title = objRoot.getAttribute('title');
        var options = objRoot.getAttribute('options');
        if (options != null) {
            options = "{" + options + "}";
            var jsonOptions = eval("(" + options + ")");
            if (jsonOptions.value != null) {
                objRoot.options.value = jsonOptions.value;
            }
            if (jsonOptions.min != null) {
                objRoot.options.min = jsonOptions.min;
            }
            if (jsonOptions.max != null) {
                objRoot.options.max = jsonOptions.max;
            }
            if (jsonOptions.decimalNum != null) {
                objRoot.options.decimalNum = jsonOptions.decimalNum;
            }
        }
        var value = objRoot.options.value;

        var spanBlock = document.createElement('span');
        spanBlock.setAttribute('class', 'block1');
        objRoot.appendChild(spanBlock);

        var spanText = document.createElement('span');
        spanText.innerHTML = value;
        spanText.setAttribute('class', 'block1Text');
        objRoot.appendChild(spanText);

        // 根据值确定位置
        var posPercent = value / (objRoot.options.max - objRoot.options.min);
        spanBlock.style.left = parseInt(objRoot.offsetWidth) * posPercent - parseInt(spanBlock.offsetWidth / 2);
        spanText.style.left = parseInt(objRoot.offsetWidth) * posPercent - parseInt(spanText.offsetWidth) / 2;

        spanBlock.slider = objRoot;
        spanBlock.value = value;
        spanBlock.text = spanText;
        spanBlock.addEventListener('mousedown', function (event) {
            this.setCapture && this.setCapture();
            var pageX = event.pageX;
            var offsetX = parseInt(this.parentNode.offsetLeft) + parseInt(this.offsetLeft);
            var pos = pageX - offsetX;
            if (bjDebug) {
                console.log('mousedown w:' + pageX + ", offsetX:" + offsetX + ", pos:" + pos);
            }

            document.objCapture = this;
            document.onmousemove = function (event) {
                event = event || window.event;
                var w = event.pageX;
                var posNew = w - parseInt(this.objCapture.parentNode.offsetLeft) - pos;
                if (posNew >= -parseInt(this.objCapture.offsetWidth / 2)
                    && posNew <= parseInt(this.objCapture.parentNode.offsetWidth) - parseInt(this.objCapture.offsetWidth / 2)) {
                    this.objCapture.style.left = posNew;
                    var decimalNum = objRoot.options.decimalNum + 1;
                    var textValue = (posNew + parseInt(this.objCapture.offsetWidth / 2)) / parseInt(this.objCapture.parentNode.offsetWidth);
                    textValue = String(textValue * (this.objCapture.slider.options.max - this.objCapture.slider.options.min));
                    if (bjDebug) {
                        console.log('textValue:' + textValue);
                    }
                    var pointerPos = textValue.indexOf('.');
                    if (pointerPos >= 0) {
                        textValue = textValue.substring(0, textValue.indexOf('.') + decimalNum);
                    }
                    this.objCapture.text.innerHTML = textValue;
                    this.objCapture.text.style.left = posNew + parseInt(this.objCapture.offsetWidth / 2) - parseInt(this.objCapture.text.offsetWidth) / 2;
                }
            };
            document.onmouseup = function (event) {
                document.onmousemove = null;
                document.onmouseup = null;
                this.objCapture.releaseCapture && this.objCapture.releaseCapture();
            };
        }, false);

        objRoot.removeAttribute('options');
    }
}

function q(obj) {
    var o = obj == null ? document : obj;
    var arrObj = o.getElementsByClassName('bjPopupMenu');
    for (var m = 0; m < arrObj.length; ++m) {
        var objRoot = arrObj[m];
        var options = objRoot.getAttribute('options');
        var arrChildNodes = objRoot.children[0].children;
        console.log('arrChildNodes.length:' + arrChildNodes.length);
        for (var k = 0; k < arrChildNodes.length; ++k) {  // every li
            q_hpm(objRoot, arrChildNodes[k], 0);
        }
        objRoot.removeAttribute('options');
    }
}

function q_1(o) {
    var cds = o.children;
    for (var m = 0; m < cds.length; ++m) {
        if (cds[m].tagName == "UL") {
            cds[m].style.display = 'none';
        }
        q_1(cds[m]);
    }
}

function q_hpm(r, item, lever) {
    var uls = item.getElementsByTagName('ul');//children;
    if (bjDebug) {
        console.log('handlePopupMenuChild arrChildNodes:' + uls[0]);
    }

    // 先把子菜单隐藏
    var arrChildNodes = item.children;
    for (var k = 0; k < arrChildNodes.length; ++k) {
        if (arrChildNodes[k].tagName == "UL") {
            arrChildNodes[k].style.display = 'none';
        }
    }

    // 设定子菜单的样式
    if (uls.length > 0) {
        uls[0].setAttribute('class', 'menuSub');
        arrChildNodes = uls[0].children;
        for (var k = 0; k < arrChildNodes.length; ++k) {
            var leverNew = lever + 1;
            if (arrChildNodes[k].tagName == "UL") {
                arrChildNodes[k].style.display = 'none';
            }
            q_hpm(r, arrChildNodes[k], leverNew);
        }
    }

    if (uls.length > 0) {  // have child
        var spanIcon = document.createElement('span');
        spanIcon.setAttribute('class', 'menuArrow');
        item.appendChild(spanIcon);
    }

    //document.currentMenuObj = objRoot;
    item.subMenu = uls.length > 0 ? uls[0] : null;
    item.r = r;
    item.addEventListener('mousemove', function (event) {
        document.menuState = 2;   // have entered
        var children = this.children;
        if (bjDebug) {
            console.log('children length:' + children.length);
        }
        if (children.length > 0) {
            var child = children[0];
            for (var k = 0; k < child.length; ++k) {
                child[k].style.display = 'block';
            }
            child.style.display = "block";
            if (bjDebug) {
                console.log('parseInt(this.offsetWidth):' + parseInt(this.offsetWidth));
            }

            var winWidth = getWinWidth();
            var rightPos = getLeft(this) + parseInt(this.offsetWidth) + parseInt(child.offsetWidth);
            if (bjDebug) {
                console.log('winWidth:' + winWidth);
            }
            if (bjDebug) {
                console.log('rightPos:' + rightPos);
            }
            if (rightPos > winWidth) {
                child.style.left = (-parseInt(this.offsetWidth) - 2) + "px";
                child.style.top = 0;
            } else {
                child.style.left = parseInt(this.offsetWidth) + "px";   // px似乎不能少
                child.style.top = 0;
            }

            var winHeight = getWinHeight();
            var bottomPos = getTop(this) + parseInt(child.offsetHeight);
            if (bottomPos > winHeight) {
                child.style.top = (-(parseInt(child.offsetHeight) - (winHeight - getTop(this)))) + "px";
            } else {
                child.style.top = 0;
            }

            document.currentMenuObj = this.r;
        }

        //隐藏兄弟节点的子菜单
        var p = this.parentNode;
        var brothers = p.children;
        for (var m = 0; m < brothers.length; ++m) {
            if (brothers[m] == this) {
                continue;
            }
            var ccc = brothers[m].getElementsByTagName('ul');
            if (ccc.length > 0) {
                ccc[0].style.display = 'none';
            }
        }

        // document.mousemove2 = function (event) {
        //     var tar = event.target;
        //
        //     while (tar.tagName && tar.tagName != 'BODY') {
        //         if (tar == this.currentMenuObj) {
        //             return;
        //         }
        //         tar = tar.parentNode;
        //     }
        //     if (this.currentMenuObj) {
        //         // 再初始化一下状态
        //         var arrChildNodes = this.currentMenuObj.children[0].children;
        //         for (var k = 0; k < arrChildNodes.length; ++k) {
        //             q_hpm(this.currentMenuObj, arrChildNodes[k], 0);
        //         }
        //
        //         //this.currentMenuObj.style.display = 'none';
        //         //this.currentMenuObj = null;
        //     }
        // };

    }, false);


}

function r(obj) {
    var o = obj == null ? document : obj;
    var arrObj = o.getElementsByClassName('bjPanelMenu');
    for (var m = 0; m < arrObj.length; ++m) {
        var objRoot = arrObj[m];
        if (objRoot.options == null) {
            objRoot.options = new Object();
        }
        var options = objRoot.getAttribute('options');
        if (options != null) {
            options = "{" + options + "}";
            var jsonOptions = eval("(" + options + ")");
            if (jsonOptions.menuWidth != null) {
                objRoot.options.menuWidth = jsonOptions.menuWidth;
            }
        }

        var uiCon = ""; //obj.innerHTML;
        var childNum = objRoot.children.length;
        var childs = objRoot.childNodes;
        var arrChildNodes = objRoot.children;
        for (var k = 0; k < childNum; ++k) {
            uiCon = uiCon + "<div style='display:none' title='" + arrChildNodes[k].getAttribute('title') + "'>"
                + arrChildNodes[k].innerHTML + "</div>";
        }

        // 在前面动态插入标题头部
        var head = document.createElement('div');
        for (var k = 0; k < childNum; ++k) {
            var span = document.createElement('div');
            span.setAttribute('class', 'menuActiveNo');
            span.style.width = objRoot.options.menuWidth + "px";

            var headCon = arrChildNodes[k].getAttribute('title');
            var ops = arrChildNodes[k].getAttribute('options');
            if (ops != null) {
                ops = "{" + ops + "}";
                var jsonOps = eval("(" + ops + ")");
                if (jsonOps.src != null) {
                    headCon = "<a href='" + jsonOps.src + "'>" + arrChildNodes[k].getAttribute('title') + "</a>";
                }
            }
            span.innerHTML = headCon;
            span.pos = k;
            span.addEventListener("mousemove", function () {
                //alert(this.pos);
                this.setAttribute('class', 'menuActive');
                var p = this.parentNode;
                var childs = p.children;
                for (var m = 0; m < childs.length; ++m) {
                    if (childs[m] != this) {
                        childs[m].setAttribute('class', 'menuActiveNo');
                    }
                }

                // 显示相应tab的内容
                var pp = this.parentNode.parentNode;
                childs = pp.children;
                var childCon = childs[1];
                var childs = childCon.children;
                for (var m = 0; m < childs.length; ++m) {
                    if (m != this.pos) {
                        childs[m].style.display = 'none';
                    } else {
                        var con = childs[m].innerHTML;
                        if (con != "") {
                            childs[m].style.display = 'block';
                            childs[m].parentNode.style.display = 'block';
                            childs[m].parentNode.style.left = getLeft(this) + "px";
                        } else {
                            childs[m].parentNode.style.display = 'none';
                        }
                    }
                }

                document.currentObj = this.parentNode.parentNode;
                document.onmousemove = function (event) {
                    event = event || window.event;
                    var tar = event.target;
                    var pp = tar.parentNode;

                    var inner = false;
                    while (pp) {
                        if (pp == document.currentObj) {
                            inner = true;
                            break;
                        }
                        pp = pp.parentNode;
                    }

                    if (!inner) {
                        var childs = document.currentObj.children;
                        var head = childs[0];
                        var childsHead = head.children;
                        for (var m = 0; m < childsHead.length; ++m) {
                            childsHead[m].setAttribute('class', 'menuActiveNo');
                        }

                        var childCon = childs[1];
                        var childs = childCon.children;
                        for (var m = 0; m < childs.length; ++m) {
                            childs[m].style.display = 'none';
                        }
                        childCon.style.display = 'none';
                    }

                };

            }, false);
            head.appendChild(span);
        }
        //head.innerHTML = titleInfo;
        head.setAttribute('class', 'bjPanelMenuHead');
        //obj.insertBefore(head, arrChildNodes[0]);

        objRoot.innerHTML = "";
        objRoot.appendChild(head);

        var con = document.createElement('div');
        con.innerHTML = uiCon;
        con.setAttribute('class', 'bjPanelMenuCon');
        objRoot.appendChild(con);
        //objRoot.removeAttribute('class');
    }
}

function s(obj) {
    var o = obj == null ? document : obj;
    var arrObj = o.getElementsByClassName('bjMenu');
    for (var m = 0; m < arrObj.length; ++m) {
        var objRoot = arrObj[m];
        if (objRoot.options == null) {
            objRoot.options = new Object();
        }
        var options = objRoot.getAttribute('options');
        if (options != null) {
            options = "{" + options + "}";
            var jsonOptions = eval("(" + options + ")");
            if (jsonOptions.menuWidth != null) {
                objRoot.options.menuWidth = jsonOptions.menuWidth;
            }
        }

        var uiCon = ""; //obj.innerHTML;
        var childNum = objRoot.children.length;
        var childs = objRoot.childNodes;
        var arrChildNodes = objRoot.children;
        for (var k = 0; k < childNum; ++k) {
            uiCon = uiCon + "<div style='display:none'>"
                + arrChildNodes[k].innerHTML + "</div>";
        }

        // 在前面动态插入标题头部
        var head = document.createElement('div');
        for (var k = 0; k < childNum; ++k) {
            var span = document.createElement('div');
            span.setAttribute('class', 'menuActiveNo');
            span.style.width = objRoot.options.menuWidth + "px";
            span.innerHTML = "<span onclick='" + arrChildNodes[k].getAttribute('onclick')
                + "'>" + arrChildNodes[k].getAttribute('title') + "</span>";
            //span.addEventListener("click", arrChildNodes[k].getAttribute('onclick'));
            span.pos = k;
            span.addEventListener("mousemove", function () {
                //alert(this.pos);
                this.setAttribute('class', 'menuActive');
                var p = this.parentNode;
                var childs = p.children;
                for (var m = 0; m < childs.length; ++m) {
                    if (childs[m] != this) {
                        childs[m].setAttribute('class', 'menuActiveNo');
                    }
                }

                // 显示相应tab的内容
                var pp = this.parentNode.parentNode;
                childs = pp.children;
                var childCon = childs[1];
                var childs = childCon.children;
                for (var m = 0; m < childs.length; ++m) {  // 菜单的具体内容
                    if (m != this.pos) {
                        childs[m].style.display = 'none';
                    } else {
                        var con = childs[m].innerHTML;
                        if (con != "") {
                            childs[m].style.display = 'block';
                            childs[m].parentNode.style.display = 'block';
                            childs[m].parentNode.style.left = getLeft(this) + "px";

                            // 处理ul>li
                            var uls = childs[m].getElementsByTagName('ul');
                            var lenChilds = uls.length;
                            if (lenChilds > 0) {
                                showMenuItem(uls[0].children);
                            }
                        } else {
                            childs[m].parentNode.style.display = 'none';
                        }
                    }
                }

                document.currentObj = this.parentNode.parentNode;
                document.onmousemove = function (event) {
                    event = event || window.event;
                    var tar = event.target;
                    var pp = tar.parentNode;

                    var inner = false;
                    while (pp) {
                        if (pp == document.currentObj) {
                            inner = true;
                            break;
                        }
                        pp = pp.parentNode;
                    }

                    if (!inner) {
                        var childs = document.currentObj.children;
                        var head = childs[0];
                        var childsHead = head.children;
                        for (var m = 0; m < childsHead.length; ++m) {
                            childsHead[m].setAttribute('class', 'menuActiveNo');
                        }

                        var childCon = childs[1];
                        var childs = childCon.children;
                        for (var m = 0; m < childs.length; ++m) {
                            childs[m].style.display = 'none';
                        }
                        childCon.style.display = 'none';
                    }

                };

            }, false);
            head.appendChild(span);
        }
        //head.innerHTML = titleInfo;
        head.setAttribute('class', 'bjMenuHead');
        //obj.insertBefore(head, arrChildNodes[0]);

        objRoot.innerHTML = "";
        objRoot.appendChild(head);

        var con = document.createElement('div');
        con.innerHTML = uiCon;
        con.setAttribute('class', 'bjMenuCon');
        objRoot.appendChild(con);

        // 先处理标签,例如是否带有箭头
        var childs = objRoot.children;
        var childCon = childs[1].children;
        if (bjDebug) {
            console.log('childCon.length:' + childCon.length);
        }
        for (var p = 0; p < childCon.length; ++p) {
            var uls = childCon[p].getElementsByTagName('ul');
            var lenChilds = uls.length;
            if (lenChilds > 0) {
                si(uls[0].children);
            }
        }

        objRoot.removeAttribute('options');
        //objRoot.removeAttribute('class');
    }
}

// 只运行一次
function si(childs) {
    for (var m = 0; m < childs.length; ++m) {  // 菜单的具体内容
        childs[m].style.display = 'none';

        var uls = childs[m].getElementsByTagName('ul');
        var lenChilds = uls.length;
        if (lenChilds > 0) {
            var spanIcon = document.createElement('span');
            spanIcon.setAttribute('class', 'menuArrow');
            spanIcon.style.display = 'block';
            childs[m].appendChild(spanIcon);

            uls[0].setAttribute('class', 'menuSub');

            childs[m].uls = uls;
            childs[m].addEventListener("mousemove", function () {
                showMenuItem(this.uls[0].children);
            }, false);

            si(uls[0].children);
        } else {
            childs[m].addEventListener("mousemove", function () {
                // 隐藏兄弟节点的子菜单
                var p = this.parentNode;
                var brothers = p.children;
                for (var m = 0; m < brothers.length; ++m) {
                    if (brothers[m] == this) {
                        continue;
                    }
                    var ccc = brothers[m].getElementsByTagName('ul');
                    if (ccc.length > 0) {
                        ccc[0].style.display = 'none';
                    }
                }
            }, false);
        }
    }
}

function showMenuItem(item) {
    for (var m = 0; m < item.length; ++m) {
        item[m].parentNode.style.display = 'block';
        item[m].style.display = 'block';
        item[m].parentNode.style.left = parseInt(item[m].parentNode.parentNode.offsetWidth) + "px";
        item[m].parentNode.style.top = "0px";
    }
}

function t(obj) {
    var o = obj == null ? document : obj;
    var arrObj = o.getElementsByClassName('bjNumberBox');
    for (var m = 0; m < arrObj.length; ++m) {
        var objRoot = arrObj[m];
        var panel = "";
        if (objRoot.options == null) {
            objRoot.options = new Object();
        }
        var options = objRoot.getAttribute('options');
        if (options != null) {
            options = "{" + options + "}";
            var jsonOptions = eval("(" + options + ")");
            console.log('i jsonOptions:' + jsonOptions);
            if (jsonOptions.posType != null) {
                objRoot.options.posType = jsonOptions.posType;
            }
            if (jsonOptions.max != null) {
                objRoot.options.max = jsonOptions.max;
            }
            if (jsonOptions.min != null) {
                objRoot.options.min = jsonOptions.min;
            }
        }

        var divContainer = document.createElement('div');
        divContainer.setAttribute('class', 'bjNumberBoxContainer');
        objRoot.parentNode.insertBefore(divContainer, objRoot);
        divContainer.appendChild(objRoot);

        // 创建箭头
        var spanUpDownBack = document.createElement('span');
        spanUpDownBack.setAttribute('class', 'udBack');
        divContainer.appendChild(spanUpDownBack);
        var spanUp = document.createElement('span');
        spanUp.setAttribute('class', 'nbUp');
        divContainer.appendChild(spanUp);

        spanUp.input = objRoot;
        spanUp.addEventListener("click", function () {
            var value = parseInt(this.input.value);
            value = value + 1;
            if (this.input.options.max != null && value > this.input.options.max) {
                value = this.input.options.max;
            }
            this.input.value = value;
            this.input.options.onChange(value, this.input);
        });

        var spanDown = document.createElement('span');
        spanDown.setAttribute('class', 'nbDown');
        divContainer.appendChild(spanDown);
        spanDown.input = objRoot;
        spanDown.addEventListener("click", function () {
            var value = parseInt(this.input.value);
            value = value - 1;
            if (this.input.options.min != null && value < this.input.options.min) {
                value = this.input.options.min;
            }
            this.input.value = value;
            this.input.options.onChange(value, this.input);
        });


        objRoot.removeAttribute('options');
    }
}

function u(obj) {
    var o = obj == null ? document : obj;
    var arrObj = o.getElementsByClassName('bjBanner');
    for (var m = 0; m < arrObj.length; ++m) {
        var objRoot = arrObj[m];
        var panel = "";
        if (objRoot.options == null) {
            objRoot.options = new Object();
        }
        var options = objRoot.getAttribute('options');
        if (options != null) {
            options = "{" + options + "}";
            var jsonOptions = eval("(" + options + ")");
            if (jsonOptions.frameInterval != null) {
                objRoot.options.frameInterval = parseInt(jsonOptions.frameInterval) * 1000;
            }
            if (jsonOptions.transInterval != null) {
                objRoot.options.transInterval = jsonOptions.transInterval;
            }
        }

        setTimeout('u_b("' + objRoot.id + '",1,0,' + objRoot.options.frameInterval
            + ', ' + objRoot.options.transInterval + ')', objRoot.options.frameInterval);

        objRoot.removeAttribute('options');
    }
}

function u_b(id, p, s, it, st) {
    console.log("u_b it:" + it);
    console.log("u_b st:" + st);
    var o = document.getElementById(id);
    var len = o.children.length;
    var pn = p > 0 ? p - 1 : len - 1;
    var tim = it;
    o.children[pn].style.opacity = 1 - s / (st * 10);   // 1秒10帧过度效果
    o.children[p].style.opacity = s / (st * 10);
    if (s / (st * 10) < 1) {  // 开始转场
        tim = 1000 * (1 / 10);    // 转场时每次消耗的时间
    }
    console.log('tim:' + tim);
    var pl = null;
    if (s / (st * 10) == 1) {
        pl = p == len - 1 ? 0 : p + 1;
        s = 0;
    } else {
        pl = p;
        s += 1;
    }
    setTimeout('u_b("' + id + '",' + pl + ',' + s + ',' + it + ',' + st + ')', tim);
}

function v(obj) {
    var o = obj == null ? document : obj;
    var arrObj = o.getElementsByClassName('bjPager');
    for (var m = 0; m < arrObj.length; ++m) {
        var objRoot = arrObj[m];
        var panel = "";
        if (objRoot.options == null) {
            objRoot.options = new Object();
        }
        var options = objRoot.getAttribute('options');
        if (options != null) {
            options = "{" + options + "}";
            var jsonOptions = eval("(" + options + ")"); 
            objRoot.options = jsonOptions; 
        }
        if (bjDebug)
        	console.log('objRoot.options:' + objRoot.options);         
        
        v_a(objRoot);
        
        objRoot.removeAttribute('options');
    }
}

function v_a(obj){ 
	var pageStr=""; 
	if(obj.options.pageCount%obj.options.pageSize==0){
		obj.options.allPage=obj.options.pageCount/obj.options.pageSize;
	}
	else{
		obj.options.allPage=parseInt(obj.options.pageCount/obj.options.pageSize)+1;
	}
	  
	var head="<div class='pageHead' onclick=\"v_b(\'" + obj.id + "\', 1)\">第一页</div>";
	var foot="<div class='pageTail' onclick=\"v_b(\'" + obj.id + "\', " + obj.options.allPage + ")\">最后一页</a></div>";
 			
	var previousPage="";
	var nextPage="";
	
	if (obj.options.pageNo != 1){ //判断是否显示上一页 
		var pnTmp = Number(obj.options.pageNo) - 1;
		previousPage="<div class='pagePre' onclick=\"v_b(\'" + obj.id + "\', " + pnTmp + ")\">上一页</div>";
	}	
	if(obj.options.pageNo != obj.options.allPage){ //判断是否显示下一页
		var pnTmp = Number(obj.options.pageNo) + 1;
		nextPage="<div class='pageNext'  onclick=\"v_b(\'" + obj.id + "\', " + pnTmp + ")\">下一页</div>";
	}			
			  
	// 循环显示要显示的页面
	var fen="";//存放当前页面的所有分页
	//计算当前分页在第几个中间最大显示页面集合中
	var curPageFrame = 0;
	if(obj.options.pageNo%obj.options.maxShowPages!=0)
		curPageFrame = parseInt(obj.options.pageNo/obj.options.maxShowPages);//当前页面的集合页面码
	else
		curPageFrame = parseInt(obj.options.pageNo/obj.options.maxShowPages)-1;
	var curTmpPage = curPageFrame * obj.options.maxShowPages;//当前页面码
	console.log('curTmpPage:' + curTmpPage);
	for(var i=1; i<=obj.options.maxShowPages;i++){ 
		curTmpPage += 1;
		if(curTmpPage == obj.options.pageNo){
			fen+="<div class='pageNoActive'>"+curTmpPage+"</div>"
		}
		else{
			fen+="<div class='pageNoActiveNo'><span onclick=\"v_b(\'" + obj.id + "\', \'" + curTmpPage + "\')\">"+curTmpPage+"</span></div>"
		}
		if(curTmpPage ==obj.options.allPage )
			break;
	}
			  
	//go跳转
	var Go="";
	if(obj.options.showGo==1){
		Go="<input type='text' name='pageNo' class='goInput'/><div class='go'>Go</div>";
	}
	// 将html代发放入divId里
	//所有html集中
	pageStr=head+previousPage+fen+nextPage+foot+Go;
	obj.innerHTML=pageStr; 
}

function v_b(id, pn){
	var obj = document.getElementById(id);
	obj.options.pageNo = pn;	
	v_a(obj);
	if (obj.options.toPage){
		obj.options.toPage(pn);
	}
}

function w(ob){
    var o = ob == null ? document : ob;
    var arrO = o.getElementsByClassName('bjValidatebox');
    for (var m = 0; m < arrO.length; ++m) {
        var or = arrO[m];
        if (or.op == null) or.op = {};
        var op = or.getAttribute('options');
        if (op != null) {
            op = "{" + op + "}";
            var jso = eval("(" + op + ")");
            for (var t in jso) or.op[t] = jso[t];
        }
        if (bjDebug) console.log('objRoot.options:' + JSON.stringify(or.op));

        var en = or.op.showType=="blur"?"blur":"focus";
        or.addEventListener(en, function () {
            w_1(this);
            if(this.op.showType === "focus"){
                this.addEventListener("blur", function () {
                    w_1(this);
                });
            }
        });

        or.removeAttribute('options');
    }
}

function w_1(o) {
    var val = o.value;
    var is = false;
    if (bj.isEmpty(val) && o.op.isRequired)  is = true;
    else if (o.op.isNumber){
        if (bj.isEmpty(val))  is = true;   // if isNumber, not empty is must!
        else is = isNaN(val);
    }
    else if (o.op.isInteger){
        if (bj.isEmpty(val))  is = true;
        else is = val%1 === 0?false:true;
    }
    if (is){
        if (o.op.messageId) bj('#' + o.op.messageId).html(o.op.message);
        else alert(o.op.message);
    }
    else{
        if (o.op.messageId) bj('#' + o.op.messageId).html("");
    }
}

function x(ob){
    var o = ob == null ? document : ob;
    var arrO = o.getElementsByClassName('bjFilebox');
    for (var m = 0; m < arrO.length; ++m) {
        var or = arrO[m];
        if (or.op == null) or.op = {};
        var op = or.getAttribute('bj:options');
        if (op != null) {
            op = "{" + op + "}";
            var jso = eval("(" + op + ")");
            for (var t in jso) or.op[t] = jso[t];
        }
        console.log('or.options:' + JSON.stringify(or.op));

        var ct = document.createElement("div");
        ct.setAttribute('class', 'bjFileboxContainer');
        ct.style.width = ((or.op.width === undefined) ? 200: or.op.width) + "px";
        or.parentNode.insertBefore(ct, or);

        var lb = document.createElement("span");
        lb.setAttribute('class', 'bjFileboxButton');
        ct.appendChild(lb);
        lb.innerHTML = or.op.label;

        var fl= document.createElement("input");
        fl.setAttribute('class', 'bjFileboxFileName');
        console.log('parseInt(Width):' + parseInt(ct.style.width));
        fl.style.width = (parseInt(ct.offsetWidth) - parseInt(lb.offsetWidth) - 10) + "px";
        fl.style.outline = "none";
        fl.placeholder = or.getAttribute('placeholder');
        ct.appendChild(fl);

        var or2 = or.cloneNode(true);
        or2.op = or.op;
        if (bjDebug) console.log('or2.options:' + JSON.stringify(or2.op));
        ct.appendChild(or2);
        or.parentNode.removeChild(or);
        or = or2;
        var ty = or.getAttribute('type');
        if (ty == undefined){
            or.setAttribute('type', 'file');
        }

        or.style.width = parseInt(lb.offsetWidth) + "px";   // same as button
        or.fl = fl;
        or.addEventListener('change', function () {
            fl.value = this.value;
            if (this.op.change)this.op.change(this.value);
        });

        or.removeAttribute('options');
    }
}

function gg_pm() {
    if (document.mask == null) {
        var mask = document.createElement('div');
        mask.setAttribute('class', 'pageMask');
        mask.style.zIndex = "9999";
        document.body.appendChild(mask);
        mask.style.display = "none";
        document.mask = mask;
    }
    return document.mask;
}

var bjDebug = false;
var bj = function (id) {
    var obj = null;
    var bArray = false;

    if (typeof id === "string") {
        if (id.indexOf('#') >= 0) {    // 按id查找，只查找到第一个（为了效率)
            id = id.substring(1, id.length);
            obj = document.getElementById(id);
            bArray = false;
        } else if (id.indexOf('.') >= 0) {  // 按class查找，查找全部
            id = id.substring(1, id.length);
            obj = document.getElementsByClassName(id);
            bArray = true;
        } else if (id.indexOf('_') >= 0) {  // 按name查找，查找全部
            id = id.substring(1, id.length);
            obj = document.getElementsByName(id);
            bArray = true;
        } else {   // 按标签名查找，查找全部
            obj = document.getElementsByTagName(id);
            bArray = true;
        }
    } else {
        obj = id;
    }

    if (obj == null) {
        return null;
    }

    if (obj.options == null)obj.options=new Object();   // will delete later
    if (obj.op == null)obj.op=new Object();
    obj.parentNode = getParentNode(obj);  // ???????

    // 处理样式 根据参数个数风别处理一个属性的设置或json形式（多个属性）的设置
    obj.css = function () {
        if (arguments.length === 1) {
            arrValue = arguments[0];
            if (bArray) {
                for (var m = 0; m < obj.length; ++m) {
                    var curStyle = obj[m].getAttribute('style');
                    if (curStyle == null)
                        curStyle = "";
                    for (var item in arrValue) {
                        if (curStyle != "") {
                            var pos1 = curStyle.indexOf(item);
                            if (pos1 >= 0) {
                                pos2 = curStyle.indexOf(";", pos1);
                                if (pos2 >= 0) {
                                    curStyle = curStyle.substring(0, pos1 - 1) + curStyle.substring(pos2 + 1);
                                } else {
                                    curStyle = curStyle.substring(0, pos1 - 1);
                                }
                            }
                        }
                        curStyle = item + ":" + arrValue[item] + ";" + curStyle;
                    }
                    obj[m].setAttribute('style', curStyle);
                }
            } else if (obj != null) {
                for (var item in arrValue) {
                    var curStyle = obj.getAttribute('style');
                    if (curStyle == null)
                        curStyle = "";
                    var tempStyle = "";
                    for (var item in arrValue) {
                        if (curStyle != "") {
                            var pos1 = curStyle.indexOf(item);
                            if (pos1 >= 0) {
                                pos2 = curStyle.indexOf(";", pos1);
                                if (pos2 >= 0) {
                                    curStyle = curStyle.substring(0, pos1 - 1) + curStyle.substring(pos2 + 1);
                                } else {
                                    curStyle = curStyle.substring(0, pos1 - 1);
                                }
                            }
                        }
                        tempStyle += item + ":" + arrValue[item] + ";";
                    }
                    obj.setAttribute('style', tempStyle + curStyle);
                }
            }

        } else if (arguments.length === 2) {
            var name = arguments[0];
            var value = arguments[1];
            if (bArray) {
                for (var m = 0; m < obj.length; ++m) {
                    obj[m].setAttribute('style', name + ':' + value);
                }
            } else if (obj != null) {
                obj.setAttribute('style', name + ':' + value);
            }
        }
    };

    /*
    obj.prototype.text = function () {    	 
        if (arguments.length === 0) {
            var cl = this.getAttribute('class'); 
            var tagName = this.tagName;
            if (cl != "" && cl != null && cl.indexOf('bjCheckbox') >= 0) {
                return this.label;
            } else  {
                return this.innerText;
            }
        } else if (arguments.length === 1) {
            this.innerText = arguments[0];
        }
    };
    */

    obj.val = function () {
        if (arguments.length === 0) {
            return obj.value;
        } else if (arguments.length === 1) {
            this.value = arguments[0];
        }
    };

    obj.html = function () {
        if (arguments.length === 0) {
            if (bArray) {
                return obj[0].innerHTML;
            } else {
                return obj.innerHTML;
            }
        } else if (arguments.length === 1) { 
            if (bArray) {
                for (var m = 0; m < obj.length; ++m) {
                    obj[m].innerHTML = arguments[0];
                }
            } else {
                obj.innerHTML = arguments[0];
            }
        }
    };

    obj.attr = function () {
        var attrName = arguments[0];
        if (arguments.length == 2) {
            var value = arguments[1];
            console.log('value:' + value);
            if (bArray) {
                for (var m = 0; m < obj.length; ++m) {
                    obj[m].setAttribute(attrName, value);
                }
            } else {
            	console.log('attrName.toLowerCase():' + attrName.toLowerCase());
            	if (attrName.toLowerCase() === "href"){
            		console.log('attrName.toLowerCase2():' + attrName.toLowerCase());
            		//obj.href = value;
            	}            		
            	else
            		obj.setAttribute(attrName, value);
            }
        } else {
            if (bArray) {
                return obj[0].getAttribute(attrName);
            } else {
                return obj.getAttribute(attrName);
            }
        }
    };

    obj.event = function () {
        var eventName = arguments[0];
        funName = arguments[1];
        if (eventName == 'click') {
            if (bArray) {
                for (var m = 0; m < obj.length; ++m) {
                    obj[m].addEventListener('click', funName, false);
                }
            } else {
                obj.addEventListener('click', funName, false);
            }
        }
    };

    obj.click = function () {
        var funName = arguments[0];
        if (bArray) {
            for (var m = 0; m < obj.length; ++m) {
                obj[m].addEventListener('click', funName, false);
            }
        } else {
            obj.addEventListener('click', funName, false);
        }
    }

    if (!bArray) {   // 只针对单个对象
        var cl = obj.getAttribute('class');
        if (cl != "" && cl != null && cl.indexOf('bjTabs') >= 0) {
           
        }
    }
    
    var oo = (bArray === true)?obj[0]:obj;
    var cl = oo.getAttribute('class');
    if (cl != "" && cl != null && cl.indexOf('bjTabs') >= 0) {
    	obj.tabs = function (){
    		var paramCon = arguments[0];
            if (bArray) {
                for (var m = 0; m < obj.length; ++m) {
                    obj[m].options = paramCon;
                }
            } else {
                for (var it in paramCon)
                    this.options[it] = paramCon[it];
                console.log("tabs:" + obj.options);
            }
    	}
    	if (!bArray) {   // 只针对单个对象
    		 obj.addTab = function () {
                 var tabName = arguments[0];
                 var tabCon = arguments[1];
                 var enableClose = arguments[2];
                 if (enableClose == null) {
                     enableClose = obj.options.enableClose;
                 } 

                 // 加头
                 var bHaveThisTab = false;
                 var heads = this.children[0].children;
                 for (var m = 0; m < heads.length; ++m) {
                     heads[m].setAttribute('class', 'tabActiveNo');
                     var cl = getLastChildNode(heads[m]);
                     var ti = heads[m].innerText;
                     if (ti == tabName){  // 已经存在这个tab
                    	 heads[m].setAttribute('class', 'tabActive'); 
                    	 if (cl != null) cl.style.display = "inline-block";
                    	 bHaveThisTab = true;
                     }
                     else{
                    	 if (cl != null) cl.style.display = "none";
                     }
                 }
                 if (bHaveThisTab){
                	 return;
                 }
                 
                 var sp = document.createElement('span');
                 var htmlCon = tabName;
                 sp.innerHTML = htmlCon;
                 sp.setAttribute('title', tabName);
                 if (enableClose && heads.length > 0) {
                     var spC = document.createElement('span');
                     spC.setAttribute('class', 'close');
                     spC.style.display = "inline-block";
                     spC.addEventListener("click", function () {
                         c_2(this);
                     });
                     sp.appendChild(spC);
                 }
                 sp.setAttribute('class', 'tabActive');
                 sp.pos = heads.length;
                 sp.title = tabName;
                 sp.o = this;
                 var event = obj.options.actionType == "1" ? "click" : "mousemove"
                 sp.addEventListener(event, function () {
                 	if (this.o.options.tabClick) this.o.options.tabClick(this.title, this.pos);
                     c_1(this);
                 });
                 this.children[0].appendChild(sp);

                 // 加内容
                 for (var m = 0; m < this.children.length - 1; ++m) {
                     this.children[m + 1].style.display = 'none';
                 }
                 var divCon = document.createElement('div');
                 divCon.innerHTML = tabCon;
                 divCon.setAttribute('class', 'bjTabsCon');
                 divCon.style.display = 'block';
                 this.appendChild(divCon);

                 var oneHead = {title: tabName, enableClose: enableClose, objCon: divCon};
                 this.heads.push(oneHead);
                 this.childNum++;

                 // 动态调整宽度，每个选项卡的宽度一样，因为加很多选项卡，会超过tab的总宽度
                 c_3(sp);
             };

    		 obj.setActiveTab = function(pos){

             };
             
             obj.setTabName = function (pos, newTabName) {
            	 var tabNameOld = this.heads[pos].tabName;
            	 this.heads[pos].tabName = newTabName;
            	 this.children[0].children[pos].children[0].innerHTML = newTabName;
            	 //c(this.parentNode);
             };
    	}
    }
    else if( (cl != "") && (cl != null) && (cl.indexOf('bjPager') >= 0) ){
        obj.pager = function (){
            var paramCon = arguments[0];
            if (bArray) {
                for (var m = 0; m < obj.length; ++m) {
                    obj[m].options = paramCon;
                }
            } else {
                obj.options = paramCon;
            }
        };
        obj.setRecordCount = function () {
            obj.options.pageCount = arguments[0];
            v_a(this);
        }
    }
    else if( (cl != "") && (cl != null) && (cl.indexOf('bjCheckbox') >= 0) ){
        obj.checkbox = function (){
            var paramCon = arguments[0];
            if (bArray) {
                for (var m = 0; m < obj.length; ++m) {
                    obj[m].options = paramCon;
                }
            } else {
                for (var it in paramCon)
                    this.options[it] = paramCon[it];
                console.log("bjCheckbox options1:" + obj.options);
            }
        };
        obj.change = function(){
            this.change = arguments[0];
            console.log("bjCheckbox options3:" + JSON.stringify(this.options));
        };
    }
    else if( (cl != "") && (cl != null) && (cl.indexOf('bjRadio') >= 0) ){
        obj.radio = function (){
            var paramCon = arguments[0];
            if (bArray) {
                for (var m = 0; m < obj.length; ++m) {
                    obj[m].options = paramCon;
                }
            } else {
                for (var it in paramCon)
                    this.options[it] = paramCon[it];
            }
        };
        obj.change = function(){
            if (bArray) {
                for (var m = 0; m < obj.length; ++m) {
                    obj[m].change = arguments[0];
                }
            }
            else {
                this.change = arguments[0];
            }
            console.log("bjRadio options3:" + JSON.stringify(arguments[0]));
        };
    }
    else if( (cl != "") && (cl != null) && (cl.indexOf('bjFilebox') >= 0) ){
        obj.change = function(){
            bj_1(bArray, this, arguments);
        };
    }

    obj.change2 = function () {
        funName = arguments[0];

        if (bArray) {
            for (var m = 0; m < obj.length; ++m) {
                //obj[m].onchange = function(){funName};
                //obj[m].addEventListener('change', funName);
                obj[m].setAttribute('onchange', funName);
            }
        } else {
            //obj.onchange = function(){funName};
            obj.addEventListener('change', funName);
            //obj.setAttribute('onchange', funName);
            //var cl = obj.getAttribute('class');
            //if (cl != "" && cl != null && cl.indexOf('bjCheckbox') >= 0) {
            //    obj.addEventListener('change', funName);
            //}
            //else {
            //    obj.setAttribute('onchange', funName);
            //}
        }
    };


    obj.tree = function () {
        if (arguments.length === 1) {
            var paramCon = arguments[0];
            obj.onClick = paramCon.onClick;
        }
    };

    obj.numberBox = function () {
        if (arguments.length === 1) {
            var paramCon = arguments[0];
            if (bArray) {
                for (var m = 0; m < obj.length; ++m) {
                    obj[m].options = paramCon;
                }
            } else {
                obj.options = paramCon;
            }
        }
    };

    obj.control = function () {
        if (arguments.length === 1) {
            var paramCon = arguments[0];
            if (bArray) {
                for (var m = 0; m < obj.length; ++m) {
                    obj[m].options = paramCon;
                }
            } else {
                obj.options = paramCon;
            }
        }
    };

    obj.buttonRadio = function () {
        if (arguments.length === 1) {
            var paramCon = arguments[0];
            if (bArray) {
                for (var m = 0; m < obj.length; ++m) {
                    obj[m].options = paramCon;
                }
            } else {
                obj.options = paramCon;
            }
        }
    };

    obj.check = function () {
        if (arguments.length === 1) {
            var v = arguments[0];
            if (bArray) {
                for (var m = 0; m < obj.length; ++m) {
                    obj[m].checked = v;
                    var cv = obj[m].getAttribute('class');
                    if (cv.indexOf('bjRadio') >= 0) {
                        obj[m].spanIcon.setAttribute('class', obj[m].checked ? 'radioSel' : 'radioUnSel');
                    } else {
                        obj[m].spanIcon.setAttribute('class', obj[m].checked ? 'checkBoxSel' : 'checkBoxUnSel');
                    }

                    if (obj[m].checked) {
                        obj[m].input.removeAttribute('unchecked');
                        obj[m].input.setAttribute('checked', true);
                    } else {
                        obj[m].input.removeAttribute('checked');
                        obj[m].input.setAttribute('unchecked', true);
                    }
                }
            } else {
                obj.checked = v;
                var cv = obj.getAttribute('class');
                if (cv.indexOf('bjRadio') >= 0) {
                    obj.spanIcon.setAttribute('class', obj.checked ? 'radioSel' : 'radioUnSel');
                } else {
                    obj.spanIcon.setAttribute('class', obj.checked ? 'checkBoxSel' : 'checkBoxUnSel');
                }
                if (obj.checked) {
                    obj.input.removeAttribute('unchecked');
                    obj.input.setAttribute('checked', true);
                } else {
                    obj.input.removeAttribute('checked');
                    obj.input.setAttribute('unchecked', true);
                }
            }
        } else {   // 获取check状态，只允许单个对象
            if (!bArray) {
                //alert(obj.input.getAttribute('checked'));
                return obj.input.getAttribute('checked');
            }
        }
    };

    obj.dataGrid = function () {
        if (arguments.length === 1) {
            var paramCon = arguments[0];
            //obj.onClick = paramCon.onClick;
            if (paramCon == "reload") {
                loadDataGridData(this);   // 用obj作为参数不行，待分析
            } else {
                this.options = paramCon;
            }
        }
    };

    obj.dialog = function () {
        if (arguments.length === 1) {
            var paramCon = arguments[0];
            if (paramCon == "show") {
                if (obj.options.modal) {
                    var m = gg_pm();
                    m.style.width = getBodyWidth() + "px";
                    m.style.height = getBodyHeight() + "px";
                    m.style.display = "block";
                }
                obj.style.display = "block";
                console.log('getWinHeight():' + getWinHeight());
                obj.style.left = (getScrollLeft() + (getWinWidth() - parseInt(this.style.width))/ 2) + "px";
                obj.style.top = (getScrollTop() + (getWinHeight() - parseInt(this.style.height))/ 2) + "px";
            } else if (paramCon == "close") {
                obj.style.display = "none";
                if (obj.options.modal) {
                    document.mask.style.display = "none";
                }
            } else {
                obj.options = paramCon;
                obj.style.display = "none";                
                if (obj.options.modal) {  // 是模态对话框，则在下面加透明模板，达到不可操作之目的
                    obj.style.zIndex = "10000";
                    gg_pm();
                }
            }
        }
    };

    obj.comboPanel = function () {
        if (arguments.length === 1) {
            var paramCon = arguments[0];
            obj.options = paramCon;
        }
    };

    obj.combo = function () {
        if (arguments.length === 2) {
            var paramName = arguments[0];
            var paramValue = arguments[1];
            if (paramName == 'setValue') {
                //alert(paramName);
                var arrInput = obj.getElementsByTagName('input');
                arrInput[0].value = paramValue;
            } else if (paramName == 'setText') {
                var objText = obj.getElementsByTagName('span');
                objText[0].innerHTML = paramValue;
            }
        }
        return this;
    };

    obj.menu = function () {
        if (arguments.length === 2) {
            var paramName = arguments[0];
            var paramValue = arguments[1];
            if (paramName == 'show') {
                document.obj = this;
                document.oncontextmenu = function (e) {
                    e.preventDefault();
                    document.menuState = 1;
                    document.currentMenuObj = this.obj;
                    this.obj.style.display = 'block';
                    var winWidth = getWinWidth();
                    var rightPos = e.pageX + parseInt(this.obj.offsetWidth);
                    console.log('rightPos:' + rightPos);
                    if (rightPos > winWidth) {
                        this.obj.style.left = (winWidth - parseInt(this.obj.offsetWidth)) + "px";
                    } else {
                        this.obj.style.left = e.pageX + "px";
                    }
                    var winHeight = getWinHeight();
                    var bottomPos = e.pageY + parseInt(this.obj.offsetHeight);
                    if (bottomPos > winHeight) {
                        this.obj.style.top = (winHeight - parseInt(this.obj.offsetHeight)) + "px";
                    } else {
                        this.obj.style.top = e.pageY + "px";
                    }

                    document.onmousemove = function (event) {
                        var tar = event.target;
                        var bIn = false;
                        while (tar.tagName && tar.tagName != 'BODY') {
                            if (tar == this.currentMenuObj) {
                                bIn = true;
                                return;
                            }
                            tar = tar.parentNode;
                        }
                        if (!bIn && document.menuState == 2){
                            // clear all item's display
                            var arrChildNodes = this.currentMenuObj.children[0].children;
                            for (var k = 0; k < arrChildNodes.length; ++k) {
                                q_1(arrChildNodes[k]);
                            }

                            this.currentMenuObj.style.display = 'none';
                            //this.currentMenuObj = null;
                        }
                        // var tar = event.target;
                        // var posX = event.pageX;
                        // var posY = event.pageY;
                        // if (posX >= parseInt(this.obj.style.left) &&
                        //     posX <= parseInt(this.obj.style.left) + parseInt(this.obj.offsetWidth)
                        //     &&
                        //     posY >= parseInt(this.obj.style.top) &&
                        //     posY <= parseInt(this.obj.style.top) + parseInt(this.obj.offsetHeight)) {
                        //     return;
                        // }
                        // if (this.menuState == 1) {
                        //     this.currentMenuObj.style.display = 'none';
                        //     this.currentMenuObj = null;
                        //     this.menuState = 0;
                        //     return;
                        // }
                    };
                }
            }
        }
    };

    obj.banner = function () {
        if (arguments.length === 1) {
            var paramCon = arguments[0];
            obj.options = paramCon;
        }
    }

    obj.listbox = function(){
        if (bArray) {
            for (var m = 0; m < obj.length; ++m) {
                obj[m].setAttribute('class', 'bjListbox');
            }
        }
        else{
            obj.setAttribute('class', 'bjListbox');
        }
        if (arguments.length === 1) {
            var paramCon = arguments[0];
            for (var it in paramCon)
                this.options[it] = paramCon[it];
            console.log("listbox options:" + JSON.stringify(this.options));
        }
    }

    return obj;
}

function bj_1(b, o, p){
    if (b) {
        for (var m = 0; m < o.length; ++m) {
            o[m].op.change = p[0];
        }
    }
    else {
        o.op.change = p[0];
    }
}

bj.ready = function (f) {
    objBj.lr[objBj.lr.length] = f;
};

bj.ajax = function (p) {
    var oStr = '';
    var ajax = new XMLHttpRequest();
    ajax.open(p.type, p.url);
    var postData = null;
    var heads = p.headers;
    for (var key in heads) {
        ajax.setRequestHeader(key, heads[key]);
    }
   
    // encodeURIComponent转义，否则+号这样的字符不能正确传到服务端，但数据量大如何办？？
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=utf-8");
    postData = (function (value) {
        for (var key in value) {
            oStr += key + "=" + encodeURIComponent(value[key]) + "&";
        }
        ;
        return oStr;
    }(p.data));
    
    //ajax.setRequestHeader("Content-type", "application/json; charset=utf-8");
    //postData = p.data;

    ajax.send(postData);
    ajax.obj = p;
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var con = this.responseText;
            //console.log("content ret:" + con);
            this.obj.success(con);
        }
    }
};

bj.cookie = {
    "setCookie": function (name, val, lifeCircle) {
        var d = new Date();
        d.setTime(d.getTime() + (lifeCircle * 60 * 1000));  // lifeCircle单位：分钟
        var expires = "expires=" + d.toUTCString();
        document.cookie = name + "=" + val + "; " + expires + "; path=/"
    },
    "getCookie": function (name) {
        //name 为想要取到的键值的键名
        var reg = /\s/g;
        var result = document.cookie.replace(reg, "");
        var resultArr = result.split(";");
        for (var i = 0; i < resultArr.length; i++) {
            var nameArr = resultArr[i].split("=");
            if (nameArr[0] == name) {
                return nameArr[1];
            }
        }
        return "";
    },
    "removeCookie": function (name) {
        //name为想要删除的Cookie的键名
        var oDate = new Date();//时间对象
        oDate.setDate(new Date().getDate() - 1);
        document.cookie = name + "=123;expires=" + oDate + ";path=/";
    }
};

bj.update = function (o, cls) {
    if (cls == "bjMenu") {
        s(o);
    } else if (cls == "bjRadio") {
        a3(o);
    } else if (cls == "bjCheckbox") {
        b(o);
    } else if (cls == "bjTabs") {
        c(o);
    }
}

bj.messagebox = function (p) {
    var o = document.createElement('div');
    var divHead = document.createElement('div');
    divHead.setAttribute('class', 'bjDialogHead');
    o.appendChild(divHead);
    var spanTitle = document.createElement('span');
    spanTitle.setAttribute('class', 'bjDialogTitle');
    spanTitle.innerHTML = p.title != null ? p.title : 'title';
    divHead.appendChild(spanTitle);
    divHead.addEventListener('mousedown', function (event) {
        //this.setCapture && this.setCapture();
        var pageX = event.pageX;
        var offsetX = parseInt(this.parentNode.offsetLeft);
        var posX = pageX - offsetX;
        var pageY = event.pageY;
        var offsetY = parseInt(this.parentNode.offsetTop);
        var posY = pageY - offsetY;
        document.onmousemove = function (event) {
            event = event || window.event;
            var left = event.clientX - posX;
            var top = event.clientY - posY;
            o.style.left = left + getScrollLeft() + "px";
            o.style.top = top+ getScrollTop() + "px";
        };
        document.onmouseup = function (event) {
            document.onmousemove = null;
            document.onmouseup = null;
            //this.objCapture.releaseCapture && this.objCapture.releaseCapture();
        };
    });

    var spanClose = document.createElement('span');
    spanClose.setAttribute('class', 'close');
    divHead.appendChild(spanClose);
    spanClose.o = o;
    spanClose.addEventListener("click", function () {
        document.body.removeChild(this.o);
        if(document.mask) document.mask.style.display = "none";
    });

    var divCon = document.createElement('div');
    divCon.setAttribute('class', 'bjDialogCon');
    divCon.innerHTML = p.message;
    o.appendChild(divCon);
    o.setAttribute('class', 'bjDialog');

    var bs = p.buttons;
    if (bs != null) {
        var bt = document.createElement('div');
        bt.setAttribute('class', 'buttonRow');
        for (var i in bs) {
            var ob = bs[i];
            var btn = document.createElement('span');
            btn.setAttribute('class', 'bjButton');
            a1(btn);  // update this ui
            btn.innerHTML = ob.text;
            btn.ob = ob;
            btn.o = o;
            btn.k = i;
            btn.addEventListener("click", function () {
                var tx = this.k;
                if (tx == "ok" || tx == "cancel") {
                	if (document.mask){document.mask.style.display = "none";}
                    document.body.removeChild(this.o);
                }
                if (this.ob.click) {    // 有可能没有定义该函数
                    this.ob.click();
                }
            });
            bt.appendChild(btn);
        }
        o.appendChild(bt);
    }

    if (p.width != null) {
        o.style.width = p.width + "px";
    }

    if (p.height != null) {
        o.style.height = p.height + "px";
    }
    o.style.display = "block";

    var w = getWinWidth();
    var h = getWinHeight();
    //alert(parseInt(o.style.height));
    o.style.left = ((w - parseInt(o.style.width)) / 2 + getScrollLeft()) + "px";
    o.style.top = ((h - parseInt(o.style.height)) / 2 + getScrollTop()) + "px";

    document.body.appendChild(o);
        
    if (p.modal) {  // 是模态对话框，则在下面加透明模板，达到不可操作之目的
        o.style.zIndex = "10000";
        /*
        var mask = document.createElement('div');
        mask.setAttribute('class', 'dialogMask');
        mask.style.zIndex = "9999"; 
        document.body.appendChild(mask); 
        var w=document.documentElement.scrollWidth || document.body.scrollWidth;
    	var h=document.documentElement.scrollHeight || document.body.scrollHeight;
    	mask.style.width = w + "px"; 
    	mask.style.height = h + "px";
        mask.style.display = "block";
        document.mask = mask;
         */
        var w=document.documentElement.scrollWidth || document.body.scrollWidth;
        var h=document.documentElement.scrollHeight || document.body.scrollHeight;
        var m = gg_pm();
        m.style.width = w + "px";
        m.style.height = h + "px";
        m.style.display = "block";
    }

};

bj.dataSetHandle = function (id, data) {
    var ob = bj('#' + id);
    // 遍历子对象，将标签的html属性转移
    ob = ds_tr(ob);
    var div = document.createElement("div");
    var ob2 = ob.cloneNode(true);
    div.appendChild(ob2);
    var con = div.innerHTML;
    ob2 = null;
    var isArr = data instanceof Array;
    var len = 1;
    if (isArr)
        len = data.length;
    var conL = con.length;

    var n = 0;
    var ret = "";
    for (var i = 0; i < len; ++i) {

        var pos = 0;
        var it = null;
        if (isArr)
            it = data[i];
        else
            it = data;
        //console.log('it:' + JSON.stringify(it));
        var info = new Array();
        var ta = "";
        var p1 = con.indexOf('$[', pos);
        var p2 = 0;
        while (p1 >= 0) {
            p2 = con.indexOf(']', p1);
            if (p2 >= 0) {   // find one data
                var key = con.substring(p1 + 2, p2);
                var ob = new Object();
                ob.key = key;
                ob.st = pos;
                ob.ed = p1;
                info.push(ob);
                console.log('find one data key:' + key);
                pos = p2 + 1;
            } else {
                break;
            }
            p1 = con.indexOf('$[', pos);
        }
        if (pos < con.length - 1) {
            ta = con.substring(pos);
        }
        for (var m = 0; m < info.length; ++m) {
        	console.log("info[m].key:" + info[m].key);
            var dot = info[m].key.split('.');
            var value = "";
            if (dot.length > 1) {
                var itTmp = it;
                for (p in dot) {
                    console.log('itc:' + dot[p]);
                    itTmp = itTmp[dot[p]];
                }
                value = itTmp;
            } else {
                value = it[info[m].key];
                console.log('it:info[m].key value:' + value);
            }
            if (value == null) value = "";
            ret += con.substring(info[m].st, info[m].ed) + value;
        }
        ret += ta;
        //console.log('ret:' + ret);

    }
    console.log('all ret:' + ret);
 
    var obj = document.getElementById(id);
    var r = obj.ownerDocument.createRange();   
    r.setStartBefore(obj);
    var df = r.createContextualFragment(ret);   
    obj.parentNode.replaceChild(df, obj);   
    //o.outerHTML = ret;   // 有兼容性问题
}

function ds_tr(o) {
    console.log('o.children.length:' + o.children.length);
    for (var i = 0; i < o.children.length; ++i) {
        var ob = o.children[i];
        var con = ob.getAttribute('html');
        if (con != null && con != ""){
            ob.innerHTML = con;
            ob.removeAttribute('html');
        }
        else
            ds_tr(ob);
    }
    return o;
}

/* public function */
bj.isEmpty = function(obj){ 
	if(typeof obj == "undefined" || obj == null || obj == ""){ return true; }else{ return false; } 
}

//获取元素的纵坐标
function getTop(e) {
    var offset = e.offsetTop;
    if (e.offsetParent != null) offset += getTop(e.offsetParent);
    return offset;
}

//获取元素的横坐标
function getLeft(e) {
    var offset = e.offsetLeft;
    if (e.offsetParent != null) offset += getLeft(e.offsetParent);
    return offset;
}

function getScrollTop() {
    return    window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}

function getScrollLeft() {
    return    window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
}

function getBodyWidth() {
    return document.documentElement.scrollWidth || document.body.scrollWidth;
}

function getBodyHeight() {

    return document.documentElement.scrollHeight || document.body.scrollHeight;
}

function getWinWidth() {
    var winWidth;
    if (window.innerWidth) {
        winWidth = window.innerWidth;
    } else if ((document.body) && (document.body.clientWidth)) {
        winWidth = document.body.clientWidth;
    }
    return winWidth;
}

function getWinHeight() {
    var winHeight;
    if (window.innerHeight) {
        winHeight = window.innerHeight;
    } else if ((document.body) && (document.body.clientHeight)) {
        winHeight = document.body.clientHeight;
    }
    return winHeight;
}

function getParentNode(o) {
    return o.parentNode;
}

function getPreNode(o) {
    return o.previousElementSibling || o.previousSibling;
}

function getNextNode(o) {
    return o.nextElementSibling || o.nextSibling;
}

function getLastChildNode(o) {
    var len = o.children.length;
    if (len > 0)
        return o.children[len - 1];
    else
        return null;
}

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");  //寻找&+url参数名=参数值+&.&可以不存在
    var r = window.location.search.substr(1).match(reg);
    //if (r != null) return unescape(r[2]);
    if (r != null) return decodeURI(r[2]);   // 能解决中文参数乱码问题
    return null;
}
		