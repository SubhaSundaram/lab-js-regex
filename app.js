/* Fill your code*/
function formValidate() {
  var name = document.forms['RegForm']['Name']
  var email = document.forms['RegForm']['EMail']
  var phone = document.forms['RegForm']['phone']
  var password = document.forms['RegForm']['Password']
  var cpassword = document.forms['RegForm']['cPassword']
  var address = document.forms['RegForm']['Address']

  var errname = document.getElementById('name')
  var erremail = document.getElementById('email')
  var erraddress = document.getElementById('address')
  var errpwd = document.getElementById('pwd')
  var errcpwd = document.getElementById('cpwd')
  var errphone = document.getElementById('phone')

  var submit = document.getElementById('submit')

  if (name.value.length < 8 || name.value.length > 15) {
    errname.innerText = 'Atleast 8 to 15 characters required '
    name.focus()
    return false
  } else {
    errname.innerText = ''
  }
  if (address.value == '') {
    erraddress.innerText = 'Kindly fill Address field'
    address.focus()
    return false
  } else {
    erraddress.innerText = ''
  }
  if (email.value == '') {
    erremail.innerText = 'Kindly fill Email field'
    email.focus()
    return false
  } else if (/[a-zA-Z0-9&_@.-]/.test(email.value)) {
    erremail.innerText = ''
  } else {
    erremail.innerText = 'Enter a valid Email'
    email.focus()
    return false
  }
  if (password.value == '') {
    errpwd.innerText = 'Kindly fill Password field'
    password.focus()
    return false
  } else if (
    password.value.match(/^(?=.*[0-9])(?=.*[!@#$%&*])[a-zA-Z0-9!@#$%&*]{7,15}$/)
  ) {
    errpwd.innerText = ''
  } else {
    errpwd.innerText =
      'Password must contain 1 uppercase letter, 1 lowercase letter, atleast 1 number any symbols'
    password.focus()
    return false
  }

  if (cpassword.value == '') {
    errcpwd.innerText = 'Kindly fill this field'
    cpassword.focus()
    return false
  } else if (
    cpassword.value.match(/^(?=.*[0-9])(?=.*[!@#$%&*])[a-zA-Z0-9!@#%&*]{7,15}$/)
  ) {
    errcpwd.innerText = ''
  } else {
    errcpwd.innerText = 'Password is invalid'
    cpassword.focus()
    return false
  }

  if ((phone.value = '')) {
    errphone.innerText = 'Phone field cannot be empty'
    errphone.focus()
    return false
    //   } else if (phone.value.length < 10) {
    //     errphone.innerText = 'Phone number should contain 10 digit '
    //     errphone.focus()
    //     return false
  } else {
    errphone.innerText = ''
  }
  submit.innerText = 'Regex Validation Success'
  return true
}
