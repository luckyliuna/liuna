    //导航向上位移125像素
    $(document).ready(function() {
        $("#myNav").affix({
            offset: {
                top: 125
            }
        });
    });
    //2017-3-23
    function suc() {
        var str = 'success';
        var json = {};
        for (var i = 0; i < str.length; i++) {

            if (!json[str.charAt(i)]) {
                json[str.charAt(i)] = 1
            } else {
                json[str.charAt(i)]++
            }
            //console.log(json)
        }
        var num = 0;
        var myindex = '';
        for (var i in json) {
            if (json[i] > num) {
                num = json[i];
                myindex = i;
            }
        }

        document.getElementById("p1").innerHTML = myindex + "：出现了" + num + "次"
    }

    function rep() {
        var str = 'aaa';
        var num = '9'

        function repeat(str, num) {

            var result = '';

            for (; num > 0;) {
                result += str + ','
                num--;
                console.log(result)

            }

            return result


        }
        //repeat(str, num);
        document.getElementById("p2").innerHTML = repeat(str, num);
    }

    //2017-3-29

    function re() {
        var str = 'border-bootom-color';
        //1.定义字符串
        //2.创建 一个方法，
        //3.定义正则，来匹配需要的字符；
        //4.使用js自带的替换方法replace（），
        //5.自带的替换方法里的数值为，1.定义的正则（配额的字符）2.创建一个方法使正则里的第一个子项修改为大写。

        function test(str) {

            var re = /-(\w)/g;
            return str.replace(re, function($0, $1) {
                return $1.toUpperCase();
            })
        }

        document.getElementById("p3").innerHTML = test(str);
    }

    function re1() {
        var str = 'border-bootom-color'
            // 1. 定义字符串，
            // 2. 创建一个方法，
            // 3. 定义一个变量表明字符串是以‘ - ’号分割的，
            // 4. 使用for循环遍历字符串， 循环条件 i = 1（ 第二个字符开始） 且小于总长度， 且 i++，
            //     5. 根据循环结果找出字符中第一个字母并改为大写 + 字符中的截取出第一位之后剩下的字母， 并且赋值给变量
            // 6. 拼接变量中的字符串， 根绝自带方法join（ ''）使用空拼接。

        function test(str) {
            var arr = str.split('-');
            for (var i = 1; i < arr.length; i++) {
                arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);

            }
            return arr.join('')

        }
        test(str)
    }

    function Show() {
        var n = 5;

        function show(n) {
            var arr = [];
            return (function() {
                arr.unshift(n);
                n--;
                // console.log(n)
                if (n != 0) {
                    arguments.callee();
                }

                return arr

            })();

        }

        show(n)
        document.getElementById('p5').innerHTML = show(n);
    }