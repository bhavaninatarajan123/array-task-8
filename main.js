var a=[];
var n=parseInt(prompt("enter the size of the array"));

for (let i=0; i<n;i++){
    a[i]=parseInt(prompt("enter the number"));
}
document.write("given array is="+a+"<br>");
count=0;
for(let i=0; i<a.length;i++){
    if((a[i]%4==0)&&(a[i]%3==0)&&(a[i]%5==0))(
        count++
    )
}
document.write(count);