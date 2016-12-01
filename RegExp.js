/**
 * Created by Игорь on 10.11.2016.
 */
var url = require("url");

function parseUrl(str) {
    var str1 = str.split("://");
    var str2 = str1[1].split("/");
    var str3 = "";
    for (var i = 1; i < str2.length - 1; i++) {
        str3 += str2[i] + "/";
    }
    var urlObj = {
        "protocol": str1[0],
        "servername": str2[0],
        "path": str3,
        "filename": str2[str2.length - 1]
    };
    return urlObj;
}

var str = 'http://site.com/path/qwerty/aaa/page.php';
console.log(parseUrl(str).filename);