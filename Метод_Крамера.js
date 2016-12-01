<html>
  <head>
  <meta charset="utf-8">  
  </head>
  
 <body>
   <p><input size="1" value="a1"> * x1 + <input size="1" value="b1"> * x2 = <input size="1" value="c1"></p>
   <p><input size="1" value="a2"> * x1 + <input size="1" value="b2"> * x2 = <input size="1" value="c2"></p>
   <p><button>Найти решение</button></p>
   <p></p>
   <p></p>
 <script>
  document.querySelector("button").addEventListener("click",f2);  
  
  function f2(){   
    var a1,a2,a3,a4,x1,x2,c1,c2,det0,det1,det2; 
    a1 = +document.getElementsByTagName("input")[0].value;
    a2 = +document.getElementsByTagName("input")[1].value;
    a3 = +document.getElementsByTagName("input")[3].value;
    a4 = +document.getElementsByTagName("input")[4].value;
    c1 = +document.getElementsByTagName("input")[2].value;
    c2 = +document.getElementsByTagName("input")[5].value;        
    
  det0 = a1 * a4 - a3 * a2;  
  det1 = c1 * a4 - c2 * a2;
  det2 = a1 * c2 - a3 * c1;
    x1 = det1 / det0;
    x2 = det2 / det0;
    
    document.querySelectorAll("p")[3].innerHTML = "х1 равен " + x1;
    document.querySelectorAll("p")[4].innerHTML = "x2 равен " + x2;
  }
    
  </script>   
</body>

</html>
