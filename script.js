function showmessage(){
    const name=document.getElementById('name').value;
    const mail=document.getElementById('mail').value;
    const message=document.getElementById('message').value;
    if(name!=""&&mail!=""&&message!=""){
        alert('Your Message has been recieved..')
    }
    else{
        alert('Please fill Data..!!')
    }    
}