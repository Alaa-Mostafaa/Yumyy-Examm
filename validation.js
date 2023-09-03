let namecondition;
let emailcondition;
let phonecondition;
let passcondition;
let repasscondition;
let agecondition;

function showcontact(){
  let trs=`
  <div class="d-flex justify-content-center align-items-center" style="margin-top:10%">
  <section id="Contact" class="w-75 text-center ">
    <div class="container w-75 text-center">
      <div class="row">
          <div class="col-md-6 text-center">
            <div class="mb-3">
              <input type="text" class="form-control" id="name" placeholder="Enter Your Name " onkeyup="ValidateName(this.value)">
              <div class="alert alert-danger" role="alert" id="name-alert">
                Special characters and numbers not allowed
              </div>
            </div>
            <div class="mb-3">
              <input type="number" class="form-control" id="phone" placeholder="Enter Your Phone" onkeyup="validatePhone(this.value)">
              <div class="alert alert-danger" role="alert" id="phone-alert">
                Enter valid phone number (11 numbers)
              </div>
            </div>
            <div class="mb-3">
              <input type="password" class="form-control" id="password" placeholder="Enter Your Password" onkeyup="validatePassword(this.value)">
              <div class="alert alert-danger" role="alert" id="password-alert">
                Enter valid password *Minimum eight characters, at least one letter and one number:*
              </div>
            </div>
          </div>
          <div class="col-md-6 text-center">
            <div class="mb-3">
              <input type="email" class="form-control" id="email" placeholder="Enter Your Email" onkeyup="ValidateEmail(this.value)">
              <div class="alert alert-danger " role="alert" id="email-alert">
                Email not valid *exemple@yyy.zzz
              </div>
            </div>
            <div class="mb-3">
              <input type="number" class="form-control" id="age" placeholder="Enter Your Age" onkeyup="validateAge(this.value)">
              <div class="alert alert-danger" role="alert" id="age-alert">
                Enter valid age
              </div>
            </div>
            <div class="mb-3">
              <input type="password" class="form-control" id="repassword" placeholder="Repassword " onkeyup="repassword(this.value)">
              <div class="alert alert-danger" role="alert" id="repassword-alert">
                Enter valid repassword
              </div>
            </div>
    
          </div>
        </div>
      
  
  
    </div>
    <div class="text-center">
      <button class=" btn btn-danger" disabled  id="submit">Submit</button>
    </div>
  
   </section>
  
</div>
  `

  document.getElementById("category").innerHTML=trs;
}

/* Validate name */
function ValidateName(name) {
  regular = /^[A-Za-z]+$/;
  if (name.match(regular)) {
    document.getElementById("name-alert").style.display='none' ;
    namecondition=true; 
  }
  else{
    console.log("wrong");
    document.getElementById("name-alert").style.display='block'  

  }
}
/* End of Validate name */


/* Validate Email */

function ValidateEmail(email){
  var validRegex =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
;

  if (email.match(validRegex)) {
    document.getElementById("email-alert").style.display='none';
    emailcondition=true;  
  }
  else{
    console.log("wrong");
    document.getElementById("email-alert").style.display='block'  

  }
      

}
/* End of Validate Email */


/* Validate Phone */

function validatePhone(phone) {
  const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{5})$/;
  if (phone.match(regex)) {
    document.getElementById("phone-alert").style.display='none';
    phonecondition=true;  
  }
  else{
    document.getElementById("phone-alert").style.display='block'  

  }
      
}

/* End of Validate Phone */

/* Validate Age */

function validateAge(age){
  var regularExpression1 = /^[1-9]?[0-9]{1}$|^100$/;

  if (age.match(regularExpression1)){
    document.getElementById("age-alert").style.display='none';
    agecondition=true;  

      }
      else{
        document.getElementById("age-alert").style.display='block' 

      }
}
/* End of Validate Age */
let pass="";
function validatePassword(password){
  var regularExpression1 = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$";

  if (password.match(regularExpression1)){
    document.getElementById("password-alert").style.display='none';
    passcondition=true;  
    pass=password;
    console.log(password)


      }
      else{
        document.getElementById("password-alert").style.display='block' 
        console.log(password)

      }
}

function repassword(repassword){

  if(repassword == pass)
  {
    document.getElementById("repassword-alert").style.display='none';
    repasscondition=true;  

  }
  else{
    document.getElementById("repassword-alert").style.display='block' 

  }
  if(namecondition==true && passcondition== true && repasscondition==true && agecondition==true && emailcondition==true && phonecondition==true){
document.getElementById("submit").removeAttribute("disabled")

  }
  else{
    document.getElementById("submit").setAttribute("disabled")


  }
}
