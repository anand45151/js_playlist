function check() {
    const BankID = 123;
    var banjnumbercheck = 3456

    /*
    
        perfer not to use var because it is function scoped and can be redeclared and updated.
        let is block scoped and can be updated but not redeclared.
        const is block scoped and cannot be updated or redeclared.
        
    */
    let bankname = "Bank of America";
    checknumer = 34;
    console.log(checknumer);
    // BankID = 456;
    console.log(BankID);
    console.log(banjnumbercheck);
    console.log(bankname);
    console.log("Bank ID is: " + BankID + " Bank Number is: " + banjnumbercheck + " Bank Name is: " + bankname);
    console.table({ BankID, banjnumbercheck, bankname, checknumer });
    for (let index = 0; index < array.length; index++) {
        const element = array[index];

    }


}



check()