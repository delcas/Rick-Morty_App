const regexEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const regexPassword=/^(?=.*[a-z])(?=.*[0-9]).{6,10}$/
// const regexPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm

export function validation(data){
let errors={}
if(!regexEmail.test(data.username)) errors.username="The user must be an email"
else if(!data.username)errors.username="Username cannot be empty"
else if(data.username.length>35)errors.username="Username cannot be longer than 35 characters"
if(!regexPassword.test(data.password))errors.password="Password has to have at least one number"
else if(data.password.length<6 && data.password.length>10)errors.password="Password must be between 6 and 10 characters long"
return errors
}
