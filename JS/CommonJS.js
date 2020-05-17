function requestMethod(par1,par2,par3,callback) {
    var xhr = new XMLHttpRequest();//创建请求对象xhr
    xhr.open(par1, 'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/' + par2);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send(par3);  //发送异步请求
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var res = JSON.parse(xhr.responseText);
            var str = res.data;

            callback(str);
        }
    }
}