function BtnClick(){
    var Name=document.getElementById("name").value;
    var Mobile=document.getElementById("mobile").value;
    var Email=document.getElementById("email").value;
   

    if(name.length === 0 || email.length === 0 || mobile.length === 0  ){
      document.getElementById('result').innerHTML = "<span style='color:red;'></span>"; alert("Please Enter Details")
    }else{
      document.getElementById('result').innerHTML = "<span style='color:green;'>thanks for register.</span>";
      alert('Thanks for the registration');
     
    }
}