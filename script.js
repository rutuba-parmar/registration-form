function valid() {
    // USERNAME
    let name = document.forms["myform"]["name"].value;
    if(name == "") {
        alert("ENTER USERNAME");
        return false;
    }
    if(/^[0-9_@#]/.test(name)){
        alert("USERNAME SHOULD NOT START WITH DIGIT,_,@,#")
    }
    

    //PASSWORD
    let password = document.forms["myform"]["password"].value;
    if(password == "" ) {
        alert("ENTER PASSWORD");
        return false;
    }
    if(password.length < 8 || password.length > 16 ) {
        alert("PASSWORD MUST BE BETWEEN 8 AND 16 CHARACTERS");
        return false;
    }

    //ADDRESS
    let address= document.getElementById("address").value;
    if(address == "" ) {
        alert("ENTER ADDRESS");
        return false;
    }

    //FIELD OF INTREST
    var interst;
    let hobi=document.getElementsByName("hobi");
    let ischeck = false;
    
    for(let i=0; i< hobi.length; i++){
        if(hobi[i].checked){
            ischeck=true;
            interst=hobi[i].value;
            break;
        }
    }

    if (!ischeck){
        alert("SELECT FIELD OF INTREST");
        return false;
    }
    



    //GENDER
    let gender;
    let gen=document.getElementsByName("gen");
    let isvalid = false;
    
    for(let i=0; i< gen.length; i++){
        if(gen[i].checked){
            isvalid=true;
            gender=gen[i].value;
            break;
        }
    }
    
    if (!isvalid){
        alert("SELECT GENDER");
        return false;
    }


    //LANGUAG
    let languag=document.getElementById("languag").value;

    //CONTRY
    let contry= document.getElementById("contry").value;
    

    alert("NAME- " +name+ "\nPASSWORD- " +password+ "\nADDRESS- " +address+ "\nFIELD OF INTREST- "+interst + "\nGENDER- " +gender+ "\nLANGUAG- " +languag+ "\nCONTRY- " +contry);

    return true;
}