<script>
function checkMail()
{
<input type="text" id="myText">
var a = document.getElementById("myText").value;

var pattern ="^[\\w-_\.]*[\\w-_\.]\@[\\w]\.+[\\w]+[\\w]$";

var regex = new RegExp(pattern);

if(regex.test(a))

{

alert("Valid");
}

else

{

alert("Invalid");

}

}

</script>