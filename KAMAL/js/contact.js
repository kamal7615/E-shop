function BtnClick(){
    var Name=document.getElementById("Name").value;
    var Mobile=document.getElementById("Mobile").value;
    var Email=document.getElementById("Email").value;
    var password=document.getElementById("subject").value;
    var repassword=document.getElementById("issue").value;

    if(Name.length === 0 || Email.length === 0 || Mobile.length === 0 || subject.length === 0 || issue.length === 0  ){
      document.getElementById('result').innerHTML = "<span style='color:red;'></span>"; alert("Please Enter Details")
    }else{
      document.getElementById('result').innerHTML = "<span style='color:green;'>thanks for register.</span>";
      alert('Thanks for the registration');
     
    }
   
  }