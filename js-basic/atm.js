 
        var clients =['Marie','Jojo','Lynn','Ephra'];
        var clientaccnumber ='9501001111,9501001112,9501001113,9501001114';
        var cardnumber ='810020120,810020213,810020467,910020456';
        var pin =[987,765,345,109];
        
        

        alert('Welcome to BOA'); 
        function transact()
        {
            let bank ='BOA';
            
            console.log(bank,clients,clientaccnumber,cardnumber,pin);
           
         
                var pin=Number(prompt('Insert your pin please'));
                if(checkPin(pin)){
                    var balance= 5000;
                    var choice=Number(prompt('Press 1 to Withdraw, 2 to deposit, 3 to Check Balance'));
                    if(choice ==1){
                        var newbalance = balance - amount;
                        alert('you have withdrawn ' +amount+ 'from your account and your balance is '+newbalance);
                    }
                    else
                    {
                        alert('You have insufficient balance');
                    }

                    if(choice ==2){
                        var newbalance = balance + amount;
                        alert('you have deposited ' +amount+ 'onto your account and your balance is '+newbalance);
                    }

                    if(choice ==3){
                        alert('you have ' +amount+ 'on your account.');
                    }                     
                        
                }else
                    alert('You entered wrong pin');
                }
        }   
        transact();
                
            function deposit()
            {
            if(clientaccnumber[3]='910020456')
            {
                var openbalance = 500;
                var currentbalance = openbalance + amtdeposited;
                var amt$deposited=Number(prompt('Please insert dollars amt you wont to deposit'));
                alert('amt$deposited ' +amt$deposited+ 'to your account and balance is '+currentbalance);    
            }
        }
        deposit();
        function checkPin(entered_pin){
            var pinFound = false;

            for(i = 0; i <= pin.length; i++)
            {
                if(pin[i] == entered_pin)
                    pinFound = true;
            }
            return pinFound;
        }
        
   
        
    