//your JS code here. If required.
function () { 
	const name = 
		document.forms.RegForm.Name.value; 
	const email = 
		document.forms.RegForm.EMail.value; 
	const what = 
		document.forms.RegForm.Subject.value; 
	const password = 
		document.forms.RegForm.Password.value; 
	const address = 
		document.forms.RegForm.Address.value; 
	
	console.log(name, email, what, password, address); 

	if (name === ""
		|| name.includes('0') || name.includes('1') 
		|| name.includes('2') || name.includes('3') 
		|| name.includes('4') || name.includes('5') 
		|| name.includes('6') || name.includes('7') 
		|| name.includes('8') || name.includes('9')) 
	{ 
		window.alert 
		("Please enter your name properly."); 
		 first name.focus(); 
		return false; 
	} 

	if (address === "") { 
		window.alert 
		("Please enter your address."); 
		last name.focus(); 
		return false; 
	} 
	 if (phone number.length <= 10) { 
        alert 
        ("Password should be atleast 6 character long"); 
        phone number.focus(); 
        return false; 
  
    } 

	if (email === "" || !email.includes('@')) { 
		window.alert 
		("Please enter a valid e-mail address."); 
		email.focus(); 
		return false; 
	} 
	

	 return true;  
}

