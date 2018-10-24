
//alert("THOSE ARE MY WAW JAVASCRIPT");
// var a = 5;
// var b = 10;
// alert(a);
// alert(b);
// alert(a + b);
/* the following display a name
var name = 'Marie';
alert(name);
the following display two names
var dev = 'Ephra';
var dev2 = 'Lynn';
alert(dev + dev2);
the  following display three nane
var lecture = 'Frank';
var lecture2 = 'Arnord';
var lecture3 = 'Ephraz';
alert(lecture +lecture2 +lecture3);

//Confirm box
var userPreference;

if (confirm("Do you want to save changes?") == true) {
    userPreference = "Data saved successfully!";
} else {
    userPreference = "Save Cancelled!";
}
Prompt Box:Sometimes you may need to take 
the user's input to do further actions in a web page.
The next code do operation of calculator addition

var num=prompt('');
var num2=prompt('');
num = Number(num);
num2 = Number(num2);
alert(num+num2);
the following perform subtration

var a = Number(prompt());
var b = Number(prompt());
alert(a-b);

var a = Number(prompt());
var b = Number(prompt());
alert(a/b);
//it refuse to multiply
var a = Number(prompt('Enter the firstnumber'));
var b = Number(prompt('Enter the firstnumber'));
var calc = prompt("a*b");
var mult = (a*b);
if(calc==='mult')
{
    alert(a*b);
}
// the next code display week day
var day= Number(prompt("select a day you wont"))
 switch(day)
 {
     case 1:
     alert('Today is Manday');
     break;
     case 2:
     alert('Today is Tuesday');
     break;
     case 3:
     alert('Today is Wednesday');
     break;
     case 4:
     alert('Today is Thusday');
     break;
     case 5:
     alert('Today is Frieday ');
     break;
     case 6:
     alert('Today is Surtaday');
     break;
     case 7:
     alert('Today is Sunday');
     break;
     default:
     alert('noday');
     break;

 }
  // the following code convert money from USD to UGS 
  
    var rate = 3850;
    var a = Number(prompt('$'));
    var d = Number(prompt('UGS'));
    
     alert(Number(prompt(a*rate)));
        var amount = a*rate;
        alert('USD is converted UGS');
    
    // the following code convert money from UGS to USD
    var rate = 3850;
    var a = Number(prompt('UGS'));
    var d = Number(prompt('$'));
    
     alert(Number(prompt(a/rate)));
        var amount = a/rate;
        alert('UGS is converted USD');
        
        //the following use the condition statement performe forex bureau exchange
         var currency=Number(prompt("select 1 to convert from ugs to usd"));
        
         var rate=3850;
         if(currency===1){
             var amt=Number(prompt('Enter money to convert'));
             var convert = amt*rate;
             alert('you have converted ' +convert);
         }
         else if(currency===2){
            var amt=Number(prompt('Enter amount to be converted to USD'));
            var convert = amt/rate;
            alert('you have converted ' +convert);
         }
         
          // declare and collfunction
         function add()
         {
             var num1 = 5;
             var num2 = 10;
             var ans = num1 + num2;
             console.log(ans);
         }

        function mult()
         {
             var num1 = 5;
             var num2 = 10;
             var ans = num1 * num2;
             console.log(ans);
         }
         function div()
         {
             var num1 = 5;
             var num2 = 10;
             var ans = num2 * num1;
             console.log(ans);
         }
        ();
        function sub()
         {
             var num1 = 5;
             var num2 = 10;
             var ans = num1 * num2;
             console.log(ans);
         }
         sub();
         div();
         add();
         mult();
         Sub();
        // The following can performe function one by one
         //! NEVER REAPET CODE TWICE IF YOU FIND SIMILAR CODE PUT INTO FUNCTION
        function add()
         {
             var num1 = 5;
             var num2 = 10;
             var ans = num1 + num2;
             console.log(ans);
         }
         add();
        
          //arrays is a datatype
         var car1='Benz';
         var car2='Toyota';
         var car3='Pickup';
         var car4='Langelover';
         console.log(car1);
         console.log(car2);
         console.log(car3);
         console.log(car4);
         

        //display all 4 arrays in console   
        var car=['Lesielge','Landcruser','Toyota','Jeep'];
         console.log(car);
        //display function arrays
        function car()
        {
         var car1='Benz';
         var car2='Toyota';
         var car3='Pickup';
         var car4='Langelover';
         console.log(car1,car2,car3,car4);
        }
        car();
        //display one array
        var car1='Benz';
        var car2='Toyota';
        var car3='Pickup';
        var car4='Langelover';
        console.log(car1);
        */
        //Next is program for ATM CARD
          
//customer->name,acc/no,pin,balance
//actions->checkpin,deposit,withdraw,checkbal

var clients =['Marie','Jojo','Lynn','Ephra'];
var clientaccnumber =['9501001111','9501001112','9501001113','9501001114'];
var pin =[987,765,345,109];
var balance=[100,500,1000,5000];
var key = false;

function init()
{
    alert('Welcome SCB');
    var pin=prompt('Enter your pin');

    key = getKey(pin);
    if(key !== false)
    {         
        var choice=Number(prompt('Press 1 to Withdraw, 2 to deposit, 3 to Check Balance'));
        if(choice == 1)
        {
            var amt=Number(prompt('Enter amount to withdraw'));
            withdraw(key,amt);            
        }        

        if(choice == 2)
        {            
            var amt=Number(prompt('Enter amount you wont to deposit'));
            deposit(key,amt); 
        }

        if(choice == 3)
        {
          alert('Your account balance is'+balance[key])  
        }
    }
    else
    {
        alert('Wrong pin please try again');
    }
}
init();

function withdraw(account_key, entered_amount)
{
    if(entered_amount<=balance[account_key]){
        balance[account_key] = balance[account_key] - entered_amount;
        alert('Your new balance is '+ balance[account_key]);
    }
    else
        alert('Insufficient balance');
}

function deposit(account_key, entered_amount)
{
    balance[account_key] = balance[account_key] + entered_amount;
    alert('Your new balance is '+ balance[account_key]);
}

function getKey(entered_pin)
{
    var pinFound = false;

    for(i = 0; i <= pin.length; i++)
    {
        if(pin[i] == entered_pin)
            pinFound = i;
    }
    return pinFound;
}

