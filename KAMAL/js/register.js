function BtnClick(){
    var Name=document.getElementById("Name").value;
    var Mobile=document.getElementById("Mobile").value;
    var Email=document.getElementById("Email").value;
    var password=document.getElementById("password").value;
    var repassword=document.getElementById("repassword").value;

    if(Name.length === 0 || Email.length === 0 || Mobile.length === 0 || password.length === 0 || repassword.length === 0  ){
      document.getElementById('result').innerHTML = "<span style='color:red;'>Please Enter Details</span>";
    }else{
      document.getElementById('result').innerHTML = "<span style='color:green;'>thanks for register.</span>";
      alert('Thanks for the registration');
     
    }
   
  }