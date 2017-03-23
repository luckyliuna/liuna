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
        var src = 'success';
        var json = {};
        for (var i = 0; i < src.length; i++) {

            if (!json[src.charAt(i)]) {
                json[src.charAt(i)] = 1
            } else {
                json[src.charAt(i)]++
            }
            console.log(json)
        }
        var mymax = 0;
        var myindex = '';
        for (var i in json) {
            if (json[i] > mymax) {
                mymax = json[i];
                myindex = i;
            }
        }
        document.getElementById("p1").innerHTML = "结果是：" + myindex + "：出现了" + mymax + "次"
    }