//|.....................CHAPTER 1........................|
// (ALERTS) #1
/*let guest=("Sir Wellcome to JAVASCRIPT !!");
alert(guest);*/

// (ALERTS) #2
/*let error=("Error !! Please Enter A valid Password");
alert(error);*/

// (ALERTS) #3
/*let jsLand=("Wellcome To JS Land... \nHappy Coding.!");
alert(jsLand);*/

// (ALERTS) #4
/*let jsLand=("Wellcome To JS Land..");
alert(jsLand);
let hapyCoding=("Happy Coding! \nPrevent this page from creating additional dialogues");
alert(hapyCoding);*/

// (ALERTS) #5
/*let hello=("Hello I CAn Run JS Through My Web Browser's Console");
console.log(hello);*/

// (ALERTS) #6
// let myName=("Fahad Khan");
// alert(myName);

// (ALERTS) #7
// Body (inside your page’s HTML)


/*..................CHAPTER 2................*/
/*(VARIABLE FOR STRINGS)  #01 */
// var username;

/*(VARIABLE FOR STRINGS)  #02 */
// var myName=("Fahad khan");
// alert(myName);

/*(VARIABLE FOR STRINGS)  #03 */
// var message = ("Hello World");
// alert(message);

/*(VARIABLE FOR STRINGS)  #04 */
// var myName=("Fahad Khan");
// var age=parseInt(21);
// var data=("CERTIFIED WEBSITE DEVELOPER");
// alert(myName);
// alert(age);
// alert(data);

/*(VARIABLE FOR STRINGS)  #05 */
// var pizza=("PIZZA \nPIZZ\nPIZ\nPI\nP");
// alert(pizza);

/*(VARIABLE FOR STRINGS)  #06 */
// var myEmail=("My Email Address is ");
// var email=("fahad234@gmail.com");
// var cont=myEmail.concat(email);
// alert(cont);

/*(VARIABLE FOR STRINGS)  #07 */
// var firstPara=("I am trying to learn from the book ") ;
// var book=("A smarter way to learn javascript");
// var cont=firstPara.concat(book);
// alert(cont);

/*(VARIABLE FOR STRINGS)  #08 */
// var text=("YEah! I can Write HTML content through javascript");
// document.write(text);

/*(VARIABLE FOR STRINGS)  #09 */
// var design=("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");
// alert(design);


/*..................CHAPTER 3................*/
/* (VARIABLES FOR NUMBERS) #01*/
// var age=("i am " + 21 + " years old");
// alert(age);

/* (VARIABLES FOR NUMBERS) #02*/
// var visit=("you have visited this site ");
// var times=("15 Times");
// var cont=visit.concat(times);
// alert(cont);

/* (VARIABLES FOR NUMBERS) #03*/
// var text=("My birth year is ")
// var birthYear=(1990 + "<br>")
// var cont=text.concat(birthYear);
// document.write(cont);
// var dataType=("Data type of my declared variable is number");
// document.write(dataType);

/* (VARIABLES FOR NUMBERS) #04*/
// var  VisitorName=("Fahad khan "+"Ordered ");
// var quantity=(5);
// var  ProducTitle=(5 + " T'shirt(s) ");
// var text=("on XYZ Clothing Store.");
// document.write(VisitorName,ProducTitle,text);


/*..................CHAPTER 4................*/
/*(VARIABLE NAMES: LEGAL & ILLEGAL ) #01 */
// var variable_1=10;
// var variable_2=27;
// var variable_3=11;
// var cont=("my lucky number is " +variable_1+" and my birth date was "+variable_2+" and month was "+variable_3);
// alert(cont);

/*(VARIABLE NAMES: LEGAL & ILLEGAL ) #02 */
//    LEGAL VARIABLES
//1.Fahadkhan
//2.FahadKhan
//3.fahadKhan
//4.$fahadkhan
//5._fahadkhan

//    ILL-LEGAL VARIABLES
//1. 1Fahad
//2. -FahadKhan
//3. .fahadKhan
//4. $fahadkhan
//5. fahad khan

/*(VARIABLE NAMES: LEGAL & ILLEGAL ) #03 */
// var heading=("Rules for naming JS variables" + "<br />"+ "<br />"+ "<br />"+ "<br />");
// document.write(heading);
// var textPara1=("Variable names can only contain,"+ "$myname," + "_myVariable," + "For example $my_1stVariable" + "<br />");
// document.write(textPara1);
// var textPara2=("Variables must begin with a" + "Letter" + "$" +"or" + "$name, " + "_name or name " + "For example $name, _name or name"+ "<br />");
// document.write(textPara2);
// var textPara3=("Variable names are case " + "Sensitive" + "<br />");
// document.write(textPara3);
// var textPara4=("Variable names should not be JS " +" Keywords");
// document.write(textPara4);


/*..................CHAPTER 5................*/
/*(MATH EXPRESSION) #01*/
// let x=10;
// let y=20;
// let z=("Sum of "+x+ " and " +y+ " is "+ (x+y));
// document.write(z);

/*(MATH EXPRESSION) #02*/
// let x=100;
// let y=10;
// let z=("subtraction of "+x+ " and " +y+ " is "+ (x-y));
// document.write(z);
// let z=("Multiplication of "+x+ " and " +y+ " is "+ (x*y));
// document.write(z);
// let z=("division of "+x+ " and " +y+ " is "+ (x/y));
// document.write(z);
// let z=("modulus of "+x+ " and " +y+ " is "+ (x%y));
// document.write(z);

/*(MATH EXPRESSION) #03*/
// var variable;
// document.write("Value after variable declaration is: " +variable +"<br />");
// variable=5;
// document.write("Initial value: " +variable  +"<br />");
// variable=(5+1);
// document.write("Value after increment is: " + variable +"<br />");
// variable+=7;
// document.write("Value After Addition is: " +variable +"<br />");
// variable-=(1);
// document.write("Value after decrement is: " + variable +"<br />");
// variable%=(3);
// document.write("the reminder is:" + variable +"<br />");

/*(MATH EXPRESSION) #04*/
// let ticketPrice=(600);
// let movies=5;
// let calculate=(movies*ticketPrice);
// let myPara=("Total cost to buy "+ movies +" tickets to a movie is " + calculate +"PKR");
// document.write(myPara);

/*(MATH EXPRESSION) #05*/
// document.write("TABLE OF 4" +"<br />" +"<br />");
// var num=4

// for(var i=1;i<=10;i++){
//   document.write(num +" X "+i+" = "+num*i +"<br />");
// }

/*(MATH EXPRESSION) #06*/
// let C=25;
// F= C * 9/5 + 32;
// let conversion2= C + ' \xB0C is ' + F  +   '\xB0F ' +"<br />" +"<br />";
// document.write(conversion2);
// F=70;
// C= F -32 * 5/9;
// let conversion= F +  '\xB0F is ' + C +  ' \xB0C.' +"<br />";
// document.write(conversion);

/*(MATH EXPRESSION) #07*/
// let Price_1=650;
// document.write("PRICE OF ITEM 1: " +Price_1 +"<br />");
// let quantity_1=3;
// document.write("QUANTITY OF ITEM 1: " +quantity_1 +"<br />");
// let Price_2=100;
// document.write("PRICE OF ITEM 2: " +Price_2 +"<br />");
// let quantity_2=7;
// document.write("QUANTITY OF ITEM 2: " +quantity_2 +"<br />"+"<br />");
// shipCharges=100;
// let calculate=(Price_1*quantity_1) + (Price_2*quantity_2) +shipCharges;
// document.write("Total cost Of Your Order: " + calculate);

/*(MATH EXPRESSION) #08*/
// let totalMarks=1100;
// document.write("Total Marks: " + totalMarks + "<br />");
// let obtainedMarks=850;
// document.write("Obtained marks: " +obtainedMarks + "<br />")
// let average=obtainedMarks/totalMarks *100;
// document.write("Percentage : " + average +"%")

/*(MATH EXPRESSION) #09*/
// let usDollars=10;
// document.write("we have $"+usDollars+" US Dollars" + "<br />");
// let riyals=25;
// document.write("And we have "+riyals+" Saudi riyals" + "<br />");
// calculate=(usDollars*104.80)+(riyals*28);
// document.write("Total Currency In pakistani Rupees :"+calculate)

/*(MATH EXPRESSION) #10*/
// let num=10;
// document.write("My number: "+num + "<br />");
// num+=5;
// document.write("After add 5: "+num + "<br />");
// num/=2;
// document.write("After divide by '2': "+num + "<br />");

/*(MATH EXPRESSION) #11*/
// let currentYear=2021;
// document.write("Current Year : " +currentYear + "<br />");
// let birthYear=1999;
// document.write("Birth Year : " +birthYear + "<br />");
// let calculate=currentYear-birthYear;
// document.write("Your Age is : " + calculate);

/*(MATH EXPRESSION) #12*/
// let radius=20;
// document.write("Radius Of A circle: "+radius + "<br />");
// let circumference=2*(3.142)*radius;
// document.write("The Circumference is :" + circumference + "<br />");
// let area=(3.142)*(20*20);
// document.write(area);

/*(MATH EXPRESSION) #13*/
// let snack=('lays');
// document.write("Favourite Snack :"+snack + "<br />");
// let age=22;
// document.write("Current Age :"+age + "<br />");
// let maxAge=60;
// document.write("Estimated Maximum age :"+maxAge + "<br />");
// let amount=3;
// document.write("Amount Of Snack Per Day :"+amount + "<br />");
// let calculate=(maxAge-age)*amount;
// document.write("You will need  "+calculate+  " lays to last you until the ripe old age of "+maxAge);


/*..................CHAPTER 6 to 9................*/
/*(MATH EXPRESSION) #01*/
//  let a=10;
//  document.write("RESULT:" + "<br />")
//  document.write("The value of a is : " +a + "<br />"+ "<br />");
//  document.write("........................................."+ "<br />"+ "<br />");

//  document.write("The value of ++a is : " + ++a + "<br />");
//  document.write("Now the value of a is: " + a + "<br />"+ "<br />");

//  document.write("The value of a++ is : " + a++ + "<br />");
//  document.write("Now the value of a is: " + a + "<br />"+ "<br />");

//  document.write("The value of --a is : " + --a + "<br />");
//  document.write("Now the value of a is: " + a + "<br />"+ "<br />");

//  document.write("The value of a-- is : " + a-- + "<br />");
//  document.write("Now the value of a is: " + a + "<br />"+ "<br />");

/*(MATH EXPRESSION) #02*/
// let a = 2;
// let b = 1;
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
// document.write("a is : "+a + "<br />");
// document.write("b is : "+b + "<br />");
// var result = --a - --b + ++b + b--;
// document.write("Result is : "+result + "<br />");

/*(MATH EXPRESSION) #03*/
// let fullName=prompt('Enter your Full Name');
// alert("Wellcome "+fullName+" You Are Ready To Start Your Work")

/*(MATH EXPRESSION) #04*/
// let num = prompt('Please enter your number');
// if (num == '0') {
//       num = 5;
//       for (var i = 1; i <= 10; i++) {
//             document.write(num + " X " + i + " = " + num * i + "<br />");
//       }
// }
// else {
//       for (var i = 1; i <= 10; i++) {
//             document.write(num + " X " + i + " = " + num * i + "<br />");
//       }
// }

/*(MATH EXPRESSION) #05*/
// let subject_1=('English');
// let subject_2=('Maths')
// let subject_3=('Urdu');
// totalMarks=100;
// obtMarksSub1=+prompt('Enter you marks of Subject 1 : ');
// sub1marks=obtMarksSub1;
// obtMarksSub2=+prompt('Enter you marks of Subject 2 : ');
// sub2marks=obtMarksSub2;
// obtMarksSub3=+prompt('Enter you marks of Subject 3 : ');
// sub3marks=obtMarksSub3;
// let total_marks=(totalMarks*3);
// let totalObtainMarks=sub1marks+sub2marks+sub3marks;
// let total_percentage=totalObtainMarks/(sub1marks+sub2marks+sub3marks)*100;
// let obj={
//       Subject :["Subject ","TM ","OM " ,"Perce "+"<br />"],
//       English :[subject_1 ,100,sub1marks,sub1marks+"%"+"<br />"],
//       Urdu :[subject_2 ,100,sub2marks,sub2marks+"%"+"<br />"],
//       Maths :[subject_3 ,100,sub3marks,sub3marks+"%"]
// }
// document.write(obj.Subject);
// document.write(obj.English);
// document.write(obj.Urdu);
// document.write(obj.Maths +"<br />");
// document.write(total_marks+"  ");
// document.write(totalObtainMarks +"  ");
// document.write(total_percentage +"  ");
// document.write();

/*..................CHAPTER 9 to 11................*/
/*(USER INPUT & CONDITIONAL STATEMENT ) #01*/
// let city=prompt('Please enter Your city');
// if(city==='karachi'){
//       alert("Wellcome To City Of Lights");
// }

/*(USER INPUT & CONDITIONAL STATEMENT ) #02*/
// let gender=prompt('Please Enter Your Gender');
// if(gender==='male'){
//       alert("Good Morning Sir.");
// }
// else if(gender==='female'){
//       alert("Good Morning Ma’am.");
// }

/*(USER INPUT & CONDITIONAL STATEMENT ) #03*/
// let color=prompt('Please Enter traffic light color');
// if(color==='red'){
//       alert("Must Stop");
// }
// else if(color==='yellow'){
//       alert("Ready To Move");
// }
// else if(color==='green'){
//       alert("Move Now");
// }

/*(USER INPUT & CONDITIONAL STATEMENT ) #04*/
// let Fuel =+prompt('please check your fuel');
// if(Fuel<='0.25'){
//       alert("Please refill the fuel in your car");
// }
// else{
//       alert("Dont Worry Drive Save.!");
// }

/*(USER INPUT & CONDITIONAL STATEMENT ) #05*/
//a (works)
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
//b (not-worked)
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//c (worked)
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
//d (Worked)
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//e (Worked)
// if (true){
//       alert("True");
//       }
//       if (false){
//       alert("False");
//       }
//f(Worked)
// if("car" < "cat"){
//       alert("car is smaller than cat");
//       }

/*(USER INPUT & CONDITIONAL STATEMENT ) #06*/
// let marksObtained=prompt('Enter Your Obtained Marks');
// let totalMarks=300;
// let percentage=(marksObtained/totalMarks*100);
// if(percentage>=80 && percentage <=100){
//       document.write('Total MArks : '+totalMarks+"<br />");
//       document.write('Marks Obtained :'+marksObtained+"<br />");
//       document.write('Percentage : '+percentage+"<br />");
//       document.write('Grade : A-one'+"<br />")
//       document.write('Remarks : Excellent')
// }
// else if(percentage>=70 && percentage < 80){
//       document.write('Total MArks : '+totalMarks+"<br />");
//       document.write('Marks Obtained :'+marksObtained+"<br />");
//       document.write('Percentage : '+percentage+"<br />");
//       document.write('Grade : A'+"<br />")
//       document.write('Remarks : Good')
// }
// else if(percentage>=60 && percentage < 70){
//       document.write('Total MArks : '+totalMarks+"<br />");
//       document.write('Marks Obtained :'+marksObtained+"<br />");
//       document.write('Percentage : '+percentage+"<br />");
//       document.write('Grade : B'+"<br />")
//       document.write('Remarks : You Need To improve')
// }
// else if(percentage>=50 && percentage < 60){
//       document.write('Total MArks : '+totalMarks+"<br />");
//       document.write('Marks Obtained :'+marksObtained+"<br />");
//       document.write('Percentage : '+percentage+"<br />");
//       document.write('Grade : Fail'+"<br />")
//       document.write('Remarks : Sorry!!')
// }
// else{
//       alert("Invalid Numbers");
// }

/*(USER INPUT & CONDITIONAL STATEMENT ) #07*/
// let num=8;
// num=+prompt("Guess The Secret number");
// if(num==8){
//       alert('Congratulations!! You Guess the Correct Number');
// }
// else if(num == +1 || num ==-1){
//       alert('Close Enough to the Correct Answer.!');
// }
// else{
//       alert("Wrong Guess! Try Again.");
// }


/*(USER INPUT & CONDITIONAL STATEMENT ) #08*/
// let num=prompt('please input your number');
// if(num % 3 === 0){
//       alert(num+" is divisible by 3");
// }
// else{
//       alert(num+" is not divisible by 3")
// }

/*(USER INPUT & CONDITIONAL STATEMENT ) #09*/
// let number = prompt("Enter a number: ");

// if(number % 2 == 0) {
//     alert(number+" number is even.");
// }
// else {
//     alert(number+" number is odd.");
// }

/*(USER INPUT & CONDITIONAL STATEMENT ) #10*/
// let temp=prompt("Enter Temperature");
// if(temp>40 && temp <=50){
//       alert('It is too hot outside');
// }
// else if(temp>30 && temp <=40){
//       alert('Th eweather today is normal');
// }
// else if(temp>20 && temp <=30){
//       alert('todays weather is cool');
// }  
// else if(temp>10 && temp <=20){
//       alert('OMG! todays weather is so cool');
// }         
// else{
//       alert("Please enter temperature between the range of 10 to 50");
// }

/*(USER INPUT & CONDITIONAL STATEMENT ) #11*/
// let num_1=parseInt(prompt('Enter number 1 :'));
// let num_2=parseInt(prompt('Enter number 2 :'));
// let operation=prompt('Please Choose your operation');
// let result;
// if(operation=='+'){
//       result=(num_1+num_2);
//       alert(result);
// }
// else if(operation== '-'){
//       result=(num_1-num_2);
//       alert(result);
// }
// else if(operation== '*'){
//       result=(num_1*num_2);
//       alert(result);
// }
// else if(operation== '/'){
//       result=(num_1/num_2);
//       alert(result);
// }
// else if(operation== '%'){
//       result=(num_1%num_2);
//       alert(result);
// }
// else{
//       alert("Please choose coorect operator!!");
// }


/*..................CHAPTER 12 to 13................*/
/*(IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS ) #01*/
// let char=prompt('Enter your character :');
// let result;
// if(char >='a'  && char <='z'){
//       result=("this is alphabetic lower case character");
//       alert(result);
// }
// else if(char >='A'  && char <='Z'){
//       result=("this is alphabetic Upper case character");
//       alert(result);
// }
// else{
//       alert("given character is a number!!");
// }

/*(IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS ) #02*/
// let num_1=parseInt(prompt('enter number 1 : '));
// let num_2=parseInt(prompt('enter number 2 : '));
// if(num_1 > num_2){
//       alert('The larger between theese two is '+ num_1)
// }
// else if(num_2 > num_1){
//       alert('The larger between theese two is '+ num_2)
// }
// else{
//       alert("Both are Same!!");s
// }

/*(IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS ) #03*/
// let number = parseInt(prompt("Enter a number: "));
// if (number > 0) {
//     alert("The number is positive");
// }
// else if (number == 0) {
//   alert("The number is zero");
// }
// else {
//       alert("The number is negative");
// }

/*(IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS ) #04*/
// let char=prompt('Enter your character');
// if(char==='a' || char==='e' || char==='i' || char==='o' || char==='u'){
//       alert(true);
// }
// else{
//       alert(false);
// }

/*(IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS ) #05*/
// let password_1=("fahadkhan");
// var password_2 = prompt("What is your name", "");
// if(password_2==password_1){
//       alert('Correct! The password you entered matches the original password');
// }
// else if (password_2 == "") {
//       alert("please enter your password");
// }
// else if(password_2!==password_1){
//       alert("Incorrect Password");

// }

/*(IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS ) #06*/
// var greeting;
// var hour = 13;
// if (hour < 18) {
// alert(greeting = "Good day");
// }
// else{
//       alert(greeting = "Good evening");
// }

/*(IF…ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS ) #07*/
// let time=1900;
// time=parseInt(prompt('Enter your time'));
// if(time >= 0000 && time < 1200){
//       alert('Good Morning');
// }
// else if(time >= 1200 && time < 1700){
//       alert('Good Afternoon');
// }
// else if(time >= 1700 && time < 2100){
//       alert('Good Afternoon');
// }
// else if(time >= 2100 && time < 2359){
//       alert('Good Night');
// }
// else{
//       alert('Please Enter Apporopriate Time');
// }

/*..................CHAPTER 14 to 16................*/
/* (Array) #01 */
// let arr=["","","",""];

/* (Array) #02 */
// let arr={};

/* (Array) #03 */
// let arr=["fahad","saad","ahad","ebad"];
// alert(arr);

/* (Array) #04 */
// let arr=[5,10,15,20];
// alert(arr);

/* (Array) #05 */
// let arr=[true,false,true,false];
// alert(arr);

/* (Array) #06 */
// let arr=[10,"Fahad",15,true];
// alert(arr);

/* (Array) #07 */
// document.write("Qualification:" +"<br />"+"<br />");
// let arr=["1)SSC"+"<br />"+"2)HSC"+"<br />"+"3)BCS"+"<br />"+"4)BS"+"<br />"+"5)MCOM"+"<br />"+"6)MS"+"<br />"+"7)M,PHIL"+"<br />"+"8)PHD"]
// document.write(arr);

/* (Array) #08 */
// let arr_1=["Fahad","Saad","Ahad"];
// let arr_2=[320,400,350];
// let percentageofFahad=arr_2[0]/500*100;
// let percentageofSaad=arr_2[1]/500*100;
// let percentageofAhad=arr_2[2]/500*100;
// document.write("Score of "+arr_1[0]+" is "+arr_2[0]+". percentage :"+percentageofFahad+"%"+"<br />");
// document.write("Score of "+arr_1[1]+" is "+arr_2[1]+". percentage :"+percentageofSaad+"%"+"<br />");
// document.write("Score of "+arr_1[2]+" is "+arr_2[2]+". percentage :"+percentageofAhad+"%");

/* (Array) #09 */
// let arr=["red","green","blue","black"];
// document.write(arr);
// document.write("<br />")
// arr.unshift(prompt("what color do you want to add at the beginning"));
// document.write(arr);
// document.write("<br />")
// arr.push(prompt("what color do you want to add at the end"));
// document.write(arr);
// document.write("<br />")
// arr.unshift(prompt("what colors do you want to add at the beginning"));
// document.write(arr);
// document.write("<br />")
// arr.shift(prompt("what colors do you want to delete at the end"));
// document.write(arr);
// document.write("<br />")
// arr.splice(prompt("where do you want to add color at array"));
// arr.splice(prompt("what color do you want to add  at the array"));
// document.write(arr);

/* (Array) #10 */
// document.write("Scores of Students : ")
// let arr=[320,230,480,120];
// document.write(arr);
// arr.sort();
// document.write("<br />")
// document.write("Ordered Scores of Students : ")
// document.write(arr);

/* (Array) #11 */
// document.write("Cities :"+"<br />")
// let cities=["karachi","lahore","multan","quetta","peshawar","hyderabad"+"<br />"+"<br />"]
// document.write(cities);
// document.write("Selected Cities :"+"<br />")
// let selectedCities=cities.splice(2,3);
// document.write(selectedCities);

/* (Array) #12 */
// document.write('Array'+"<br />");
// let arr = ["this", "is", "my","cat"+"<br />"+"<br />"];
// document.write(arr);
// document.write('String:'+"<br />");
// arr = ["this "+"is "+"my"+" cat."];
// document.write(arr);

/* (Array) #13 */
// document.write('Devices'+"<br />");
// let arr=["keybord","Mouse","Printer","Monitor"+"<br />"+"<br />"];
// document.write(arr);
// document.write('Out :'+"<br />");
// document.write(arr[0]+"<br />");
// document.write('Out :'+"<br />");
// document.write(arr[1]+"<br />");
// document.write('Out :'+"<br />");
// document.write(arr[2]+"<br />");
// document.write('Out :'+"<br />");
// document.write(arr[3]);

/* (Array) #14 */
// document.write('Devices'+"<br />");
// let arr=["keybord","Mouse","Printer","Monitor"+"<br />"+"<br />"];
// document.write(arr);
// document.write('Out :'+"<br />");
// document.write(arr[3]);
// document.write('Out :'+"<br />");
// document.write(arr[2]+"<br />");
// document.write('Out :'+"<br />");
// document.write(arr[1]+"<br />");
// document.write('Out :'+"<br />");
// document.write(arr[0]);

/* (Array) #15 */
// let arr=["Apple","Samsung","motorolla","Nokia","Sony & Haier"]
// document.write(arr);
// not display any dropdown/select menu in the pdf document



/*..................CHAPTER 17 to 20................*/
/* (Array and Loops) #01 */
// let arr=[
//     [],[]
// ];

/* (Array and Loops) #02 */
// let arr=[
//     [0,1,2,3+"<br />"],
//     [1,0,1,2+"<br />"],
//     [2,1,0,1+"<br />"]
// ]
// document.write(arr);

/* (Array and Loops) #03 */
// let num=10;
// let i;
// for(i=1;i<=10;i++){
//     document.write(i+"<br />");
// }

/* (Array and Loops) #04 */
// let i;
// let num=parseInt(prompt('Enter table number:'));
// let tableLength=parseInt(prompt('Enter table Length:'));
// document.write('Multiplication Table of : ' + num +"<br />");
// document.write('Length of Table : ' + tableLength+"<br />"+"<br />");
// for(i=1;i==tableLength;i++){
//     document.write(num+' X '+ i +' = '+ i*num +"<br />");
// }

/* (Array and Loops) #05 */
// let fruits=["apple", "banana", "mango", "orange","strawberry"]
// for(let i=0;i<fruits.length;i++){
//     document.write(fruits[i]+"<br />")
// }
// document.write("<br />");

// for(i=0;i<fruits.length;i++){
//     document.write('Element at index ' +i+' is '+ fruits[i]+" <br />")
// }

/* (Array and Loops) #06 */
// let i;
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// document.write("Counting"+" <br />")
// for(let i=0;i<arr.length-5;i++){
//     document.write(arr[i]+",");
// }
// document.write(" <br />"+" <br />"+" <br />")
// document.write("Reverse Counting"+" <br />")
// for(i=arr.length-11; i>=0; i--){
//     document.write(arr[i]+",");
// }
// document.write(" <br />" + " <br />" + " <br />")
// document.write("Even :" + " <br />")
// for (i = 0; i <= arr.length; i++){
//     if (arr[i] % 2 == 0) {
//         document.write(arr[i] + ",");
//     }
// }
// document.write(" <br />" + " <br />" + " <br />")
// document.write("ODD : :" + " <br />")
// for (i = 0; i <= arr.length-1; i++){
//     if (arr[i] % 2 !== 0) {
//         document.write(arr[i] + ",");
//     }
// }
// document.write(" <br />" + " <br />" + " <br />")
// document.write("Series :" + " <br />")
// for (i = 0; i <= arr.length; i++){
//     if (arr[i] % 2 == 0) {
//         document.write(arr[i] + "k,");
//     }
// }

/* (Array and Loops) #07 */
// let i,j;
// let arr = ['cake', 'apple-pie', 'cookie', 'chips', 'patties'];
// let user = prompt("Wellcome to abc Bakery!!What do you want to order sir/ma'am")
// let flag=false;
// for(j=0;j<1;j++){
//     for ( i = 0; i <= arr.length; i++) {
//         if (arr[i] === user ) {
//             document.write(arr[i] + " is Available at index "+ [i] +" in our bakery")
//             flag==true;
//         }  
//     }
// }
// if(flag==false){
// document.write("We are Sorry sir " +user +" is not available in our bakery")
// }

/* (Array and Loops) #08 */
// let array1 = [24, 53, 78,92,12];
// let sortedArray=array1.sort();
// document.write(sortedArray+"<br />");
// document.write("Largest Number :"+sortedArray[4]);

/* (Array and Loops) #09 */
// let array1 = [24, 53, 78,92,12];
// let sortedArray=array1.sort();
// document.write(sortedArray+"<br />");
// document.write("Smallest Number :"+sortedArray[0]);

/* (Array and Loops) #10 */
// let num=5;
// for(i=1;i<=20;i++){
//     document.write(i*5+",")
// }

/* .................CHAPTER 20 to 30......................*/
/*CHANGING CASE #1*/
// let myName=prompt('Enter your name');
// myName=myName.toUpperCase();
// alert(myName);

/*CHANGING CASE #2*/
// let str=prompt('enter your sentence:')
//     str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++) {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//     }
//     call=str.join(' ');
//   alert(call);


/*Strings: measuring length and extracting parts #1*/
// let mobile = prompt("Enter a Mobile phone model");
// let charsInMobile= mobile.length;
// alert(charsInMobile);

/*Strings: measuring length and extracting parts #2*/
// var str=prompt('enter your string');
// var lastCharOfStr=str.slice(-1);
// alert(lastCharOfStr);


/*Strings: finding segments #1*/
// let country=('pakistani');
// alert(country.indexOf('n'));

/*Strings: finding segments #2*/
// let input=prompt('enter your username');
// for(let i=0;i<input.length;i++){
//     if(input[i]=='@' || input[i]=='!' || input[i]==',' || input[i]=='.'){
//         alert('enter a valid user name!!');
//         break;
//     }
//     else{
//         alert(input);
//         break;
//     }
// }

/*Strings: finding segments #3*/
// let temp = "The quick brown fox jumps over the lazy dog";
// let cont =(temp.slice(0,3));
// let occurrences=cont.length;
// alert(occurrences);



/*Strings: finding a character at a location #1*/
// let country=('pakistani');
// let index= country.charAt(3);
// alert(index);

/*Strings: replacing characters #1*/
// let word=('hyderabad');
// let replacing=word.replace('hyder','Islam');
// alert(replacing);

/*Strings: replacing characters #2*/
// let word=('Ali and Sami are best friends. They play cricket and football together');
// let replacing=word.replace(/and/g,'&');
// alert(replacing);


/*Rounding numbers #1*/
// let num=parseFloat(prompt('enter your number'));
// final=Math.round(num);
// final=Math.floor(num);
// final=Math.ceil(num);
// alert(final);

/*Rounding numbers #2*/
// let num=parseFloat(prompt('enter your number'));
// final=Math.round(num);
// final=Math.floor(num);
// final=Math.ceil(num);
// alert(final);

/*Generating random numbers #1*/
// let random=Math.random();
// let variable=(random*6)+1;
// let end=Math.floor(variable);
// alert(end);

/*Generating random numbers #2*/
// let random=Math.random();
// let variable=(random*2)+1;
// let end=Math.floor(variable);
// if(end==2){
//     alert('Heads');
// }
// else{
//     alert('Tales');
// }

/*Generating random numbers #3*/
// let random=Math.random();
// let variable=(random*10)+1;
// let end=Math.floor(variable);
// let num=parseInt(prompt('enter secret number'));
// if(num==end){
//     alert('Congratulations You Guess The Correct Number');
// }
// else{
//     alert('Try again');
// }

/*Converting strings to integers and decimals #1*/
// let weight=parseInt(prompt('enter your weight'));
// alert(weight);
// alert(weight+'kgs');
// let weight=parseFloat(prompt('enter your weight'));
// alert(weight+'kgs');
// alert(weight+'kilograms')



/*Converting strings to numbers, numbers to strings #1*/
// let num=(472);
// document.write('Before conversion:'+"<br />");
// document.write(`${num}, ${typeof num} `+"<br />"+"<br />");
// document.write('After conversion:'+"<br />");
// num=num.toString();
// document.write(`${num}, ${typeof num} `+"<br />"+"<br />");

/*Converting strings to numbers, numbers to strings #2*/
// let num = 35.36;
// num=num.toString();
// let withoutDot = num.replace(".", "");
// document.write(withoutDot);


/*Controlling the length of decimals #1*/
// let percentage=(30/45*100);
// document.write(percentage.toFixed(2));

// |.......................COMPLETE CHAPTER 20 TO 30.........................|


/* .................CHAPTER 31 to 34......................*/
/*DATE METHODS #1 */
// var my_date=new Date();
// alert(my_date)

/*DATE METHODS #2 */
// var my_month=new Date();
// var month_name=new Array(12);
// month_name[0]="January"
// month_name[1]="February"
// month_name[2]="March"
// month_name[3]="April"
// month_name[4]="May"
// month_name[5]="June"
// month_name[6]="July"
// month_name[7]="August"
// month_name[8]="September"
// month_name[9]="October"
// month_name[10]="November"
// month_name[11]="December"
// alert ("Current month = " + month_name[my_month.getMonth()]); 

/*DATE METHODS #3 */
// var my_date=new Date();
// var day_name=new Array(7);
// day_name[0]="Sun";
// day_name[1]="Mon";
// day_name[2]="Tue";
// day_name[3]="Wed";
// day_name[4]="Thu";
// day_name[5]="Fri";
// day_name[6]="Sat";
// alert ("Today is Sat "+day_name[my_date.getDay()]);

/*DATE METHODS #4 */
// var my_date=new Date();
// let satOrSun=my_date.getDay();
// if(satOrSun==0|| satOrSun==6){
//     alert('Its Fun Day')
// }
// else{
//     alert('its Working Day')
// }

/*DATE METHODS #5 */
// var my_date=new Date();
// let days=my_date.getDate();
// if(days<=16){
//     alert('First fifteen days of the month');
// }
// else{
//     alert('Last days of the month');
// }

/*DATE METHODS #6 */
// var today=new Date();
// var todayTime=today.getTime();
// document.write("Current Date: "+today+"<br />");
// var current=new Date();
// current.setDate(1);
// current.setMonth(0);
// current.setFullYear(1970);
// let currentTime=current.getTime()
// let final= todayTime - currentTime;
// document.write("Elapsed Milliseconds Since Jnuary 1 , 1970 : " + currentTime+"<br />");
// document.write("Elapsed Minutes Since Jnuary 1 , 1970 : " + final +"<br />");

/*DATE METHODS #7 */
// let date=new Date();
// let time=date.getHours()+":"+date.getMinutes();
// if(time < 12){
//     alert('Its AM');
// }
// else{
//     alert('its PM');
// }

/*DATE METHODS #8 */
// var laterDate=new Date();
// laterDate.setDate(31);
// laterDate.setMonth(11);
// laterDate.setFullYear(2020);
// laterDate.setHours(0);
// laterDate.setMinutes(0);
// laterDate.setSeconds(0)
// document.write("Later Date :"+laterDate);

/*DATE METHODS #9 */
// const oneDay = 24 * 60 * 60 * 1000;
// const firstDate = new Date(2015, 5, 18);
// const secondDate = new Date();
// const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
// alert(diffDays +" Days Have been passed since 1st ramazan,2015");

/*DATE METHODS #10 */
// var t1 = new Date(2015, 0, 1, 0, 0, 0, 0);
// var t2 = new Date(2015, 11, 5, 22, 50, 16, 0);
// var dif = t2.getTime() - t1.getTime();
// var Seconds = dif / 1000;
// var SecondsBetweenDates = Math.abs(Seconds);
// alert("On refrence date "+t1+" ,"+Seconds+' had been passed since beginning of 2015');

/*DATE METHODS #11 */
// let date_1=new Date();
// document.write();
// let date_2=new Date();
// date_2.setHours(21);
// document.write("Current Date :"+date_1+"<br />"+'1 Hour Ago it was '+date_2);

/*DATE METHODS #12 */
// let date_1=new Date();
// document.write();
// let date_2=new Date();
// date_2.setFullYear(1921);
// document.write("Current Date :"+date_1+"<br />"+'100 years back '+date_2);

/*DATE METHODS #13 */
// pending

/*DATE METHODS #14 */
// let date=new Date();
// let name=("Fahad khan");
// var month_name=new Array(12);
// month_name[0]="January"
// month_name[1]="February"
// month_name[2]="March"
// month_name[3]="April"
// month_name[4]="May"
// month_name[5]="June"
// month_name[6]="July"
// month_name[7]="August"
// month_name[8]="September"
// month_name[9]="October"
// month_name[10]="November"
// month_name[11]="December"
// let month=(month_name[date.getMonth()]);
// let units=(410);
// let chargePerUnit=(16);
// let NAP=(chargePerUnit*units);
// let lateCharges=(350);
// let GAPADD=(NAP+lateCharges);
// document.write('<b>K-ELECTRIC BILL</b>'+"<br />"+"<br />")
// document.write(`Customer Name :`+name+"<br />"+"Current Month : "+month+"<br />"+"Number of units : "+units+"<br />"+"Charge Per Units : "+chargePerUnit+"<br />"+"<br />"+"Net Amount Payable(With in due date) "+NAP+"<br />"+"Late Payment Surcharge : "+lateCharges+"<br />"+"Gross Amount Payable after Due Date : "+GAPADD);

/*|.................COMPLETED CHAPTER 31 to 34......................|*/

/*|.................START CHAPTER 35 to 38......................|*/

/*Function #01 */
// function date(){
//     let currDate= new Date();
//     document.write(currDate);
// }
// date();

/*Function #02 */
// function greeting(firstName,lastName) {
//     let text=(`Hello ${firstName} ${lastName} Wellcome to our Web Browser`)
//     return text;
// }
// let call=greeting('Fahad','khan');
// document.write(call);

/*Function #03 */
// function addSum() {
//     let num1=parseInt(prompt('enter number 1'));
//     let num2=parseInt(prompt('enter number 1'));
//     let sum=num1+num2;
//     return sum;
// }
// let call=addSum();
// document.write("Sum Of Two Numbers Are "+call);

/*Function #04 */
// function calculator() {
    // let num1=parseInt(prompt('enter number 1'));
    // let num2=parseInt(prompt('enter number 2'));
//     let operator=(prompt('Select Operator'));
//     if(operator==='+'){
//         let calculation  = (num1 + num2);
//         document.write(calculation);
//     }
//     else if(operator==='-'){
//         let calculation = (num1 - num2);
//         document.write(calculation);
//     }
//     else if(operator==='*'){
//         let calculation = (num1 * num2);
//         document.write(calculation);
//     }
//     else if(operator==='/'){
//         let calculation = (num1 / num2);
//         document.write(calculation);
//     }
//     else{
//         alert('Please select only these operator + - * /');
//     }
//     return calculation;
// }
// let call= calculator();
// document.write(call);

/*Function #05 */
// function square() {
//     let num=parseInt(prompt('enter number'));
//     let numSquare=(num*num);
//     return numSquare;
// }

// let call=square();
// alert(call);

/*Function #06 */
// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   let n =parseInt(prompt('number'));
//   answer = factorial(n)
//   document.write("The factorial of " + n + " is " + answer);

/*Function #07 */
// function counter() {
//     let num1=parseInt(prompt('Enter Starting Number'));
//     let num2=parseInt(prompt('Enter End Number'));
//     for(num1;num1<=num2;num1++){
//         let count = (num1+"<br />");
//         document.write(count);
//     }
//     return count;
// }
// let call = counter();
// alert(call);

/*Function #08 */

// function calculateHypotenuse() {
//     let base=parseInt(prompt('enter base value'));
//     let prep=parseInt(prompt('enter prep value'));
//     let hyp=(base*base)+(prep*prep);
//     let sqrt=Math.sqrt(hyp);
//     return sqrt;
// }
// let call=calculateHypotenuse();
// document.write(call);

/*Function #09 */
//  function areaOfRectangle(width,height) {
//     let area=(width*height);
//     return area;
// }
// let call=areaOfRectangle(10,12);
// document.write('area of rectangle : '+call);

/*Function #10 */
// function checkPalindrome(str) {
//     const len = string.length;
//     for (let i = 0; i < len / 2; i++) {
//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }
// const string = prompt('Enter a string: ');
// const value = checkPalindrome(string);

// document.write(value);

/*Function #11 */
// function converter(str) {
//     str = str.toLowerCase().split(' ');
//     for (var i = 0; i < str.length; i++) {
//       str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//     }
//     let sentence=str.join(' ');
//     return sentence;
// }
    
// let call=converter("the quick brown fox");
// document.write(call);

/*Function #12 */
// function findLongWord(sentence)
// {
//   let array1 = sentence.match(/\w[a-z]{0,}/gi);
//   let result = array1[0];

//   for(let i = 1 ; i < array1.length ; i++)
//   {
//     if(result.length < array1[i].length)
//     {
//     result = array1[i];
//     } 
//   }
//   return result;
// }
// let call=findLongWord('Web Development Tutorial')
// document.write("The Longest word in the sentence is : "+call);

/*Function #13 */
// function charCount(str, letter) 
// {
//  let letterCount = 0;
//  for (let position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//         letterCount += 1;
//       }
//   }
//   return letterCount;
// }
// let call=charCount('JSResourceS.com', 'o');
// document.write(call);

/*Function #14 */
// function calcCircumference(radiusofCircle) {
//     let circumOfCircle=(2*(3.142)*(radiusofCircle));
//     return circumOfCircle;
// }
// let call=calcCircumference(12);
// document.write("Circumference Of A Circle : "+call +"<br />");
// function calcArea(radius) {
//     let areaOfCircle=((3.142)*(radius*radius));
//     return areaOfCircle;
// }
// let call_2=calcArea(12);
// document.write("Area Of A Circle : "+call_2);



/*|.................COMPLETED CHAPTER 35 to 38......................|*/

/*|.................START CHAPTER 38 to 42......................|*/

/*FUNCTIONS| SWITCH | WHILE.. DO-WHILE  #01 */
// function exp(a,b)
// {
//         var ans = 1;
//         for (var i =1; i <= b; i++)
//         {
//                 ans = a * ans;        
//         }
//         return ans;
// }
// let call=exp(2,3);
// document.write(call);

/*FUNCTIONS| SWITCH | WHILE.. DO-WHILE  #02 */
// function checkLeapYear(year) {

//     if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//         document.write(year + ' is a leap year');
//     } else {
//         document.write(year + ' is not a leap year');
//     }
// }

// let year = prompt('Enter a year:');

// checkLeapYear(year);

/*FUNCTIONS| SWITCH | WHILE.. DO-WHILE  #03 */
// function areaCalculator(a,b,c) {
//     function sVariable() {
//         let sFormula=((a+b+c)/2);
//         return sFormula;
//     }
//     let s=sVariable();
//     let area=s*(s-a)*(s-b)*(s-c);
//     return area;
// }
// let call=areaCalculator(8,5,9);
// console.log(call);

/*FUNCTIONS| SWITCH | WHILE.. DO-WHILE  #04 */
// function mainFunction(marks_1,marks_2,marks_3) {
//     function average() {
//         let avg = (marks_1+marks_2+marks_3)/ 3;
//         return avg;
//     }
//     function percentage() {
//         let totalMarks=300;
//         let per=((marks_1+marks_2+marks_3)/totalMarks)*100;
//         return per;
//     }
//     document.write("Your Average marks in 3 subjects is : "+average()+"<br />");
//     document.write("your percentage is : "+percentage());
// }
// mainFunction(50,60,80);

/*FUNCTIONS| SWITCH | WHILE.. DO-WHILE  #05 */
// pending....

/*FUNCTIONS| SWITCH | WHILE.. DO-WHILE  #06 */
// function removeVowels() {
//     let arr=('my name is fahad khan,and i m website developer in software technology movement');
//     let string = arr.replace( /[aeiou]/g, '' );
//     return string;
// }
// let call=removeVowels();
// document.write(call);

/*FUNCTIONS| SWITCH | WHILE.. DO-WHILE  #07 */
// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;
//     let haveSeenVowel = false;
  
//     for (const letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (haveSeenVowel) {
//               count++;
//               haveSeenVowel = false;
//             } else {
//               haveSeenVowel = true;
//             }
//             break;
//           }
//         default:
//           haveSeenVowel = false
//       }
//     }
  
//     return count
// }

// document.write('total occurences in succession are : '+findOccurrences());

/*FUNCTIONS| SWITCH | WHILE.. DO-WHILE  #08 */
// function distanceCalculator() {
//     let distance=parseInt(prompt('Enter distance between two cities'));
//     function distanceIM() {
//         let distanceInMeters=(distance*1000);
//         return distanceInMeters;
//     }
//     function distanceIF() {
//         let distanceInFeets=(distance*3281);
//         return distanceInFeets;
//     }
//     function distanceII() {
//         let distanceInInches=(distance*39370);
//         return distanceInInches;
//     }
//     function distanceICM() {
//         let distanceInCentiMeters=(distance*100000);
//         return distanceInCentiMeters;
//     }
//     document.write('Total distance in kilometers is '+distance +"Km"+"<br />");
//     document.write('Total distance in Meters is '+distanceIM()+"M" +"<br />");
//     document.write('Total distance in Feets is '+distanceIF()+"F" +"<br />");
//     document.write('Total distance in Inches is '+distanceII()+"In" +"<br />");
//     document.write('Total distance in Centimeters is '+distanceICM()+"Cm" +"<br />");
// }
// distanceCalculator();

/*FUNCTIONS| SWITCH | WHILE.. DO-WHILE  #09 */
// function overtimePaidCalculation(timeWorked) {
//     let over_time=0, overtime_pay=0;
//     document.write('Employe Worked For '+timeWorked+' hour.'+"<br />");
//     if(timeWorked>=40){

//         over_time = timeWorked - 40;
//         overtime_pay=overtime_pay+(12 * over_time);
//     }
//     document.write("Total Overtime Pay Of Employee Is "+ overtime_pay+"Rs");
// }
// overtimePaidCalculation(48);

/*FUNCTIONS| SWITCH | WHILE.. DO-WHILE  #10 */
// function currencyCalculation() {
//     let amount=parseInt(prompt('enter your amount for withdraw'));
    
//     document.write('\n\nyour withdrawal amount : '+amount+"<br />");
//     document.write('\nRequired notes of 100 is :'+Math.floor(amount/100)+"<br />");
//     document.write('\nRequired notes of 50 is :'+Math.floor((amount%100)/50)+"<br />");
//     document.write('\nRequired notes of 10 is :'+Math.floor(((amount%100)%50)/10)+"<br />");
// }
// currencyCalculation();

//|...............Completed chapter 1 to 42................|
