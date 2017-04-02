//scenarios
function next(){
  var str = "Scene 2";
  var result = str.link("CANADA 150_scenario2.html");
  document.getElementById("link").innerHTML = result;
}
function next2(){
  var str = "Scene 3";
  var result = str.link("CANADA 150_scenario3.html");
  document.getElementById("link").innerHTML = result;
}
function next3(){
  var str = "Scene 4";
  var result = str.link("CANADA 150_scenario4.html");
  document.getElementById("link").innerHTML = result;
}
function next4(){
  var str = "Let's find the candles!";
  var result = str.link("CANADA 150_level1_7.html");
  document.getElementById("link").innerHTML = result;
}
//levels
function BC(){
  confirm("Yeah! You got 10 candles!");
  var x="What is the capital city of Alberta?";
  document.getElementById('alberta').innerHTML = x;
}
function AB(){
  confirm("Yeah! You got 10 candles!");
  var x="What is the capital city of Saskatchewan?";
  document.getElementById('saskatchewan').innerHTML = x;
}
function SK(){
  confirm("Yeah! You got 10 candles!");
  var x="What is the capital city of Manitoba?";
  document.getElementById('manitoba').innerHTML = x;
}
function MB(){
  confirm("Yeah! You got 10 candles!");
  var x="What is the capital city of Ontario?";
  document.getElementById('ontario').innerHTML = x;
}
function ON(){
  confirm("Yeah! You got 10 candles!");
  var x="What is the capital city of Quebec?";
  document.getElementById('quebec').innerHTML = x;
}
function QC(){
  confirm("Yeah! You got 10 candles!");
  var x="What is the capital city of Yukon?";
  document.getElementById('yukon').innerHTML = x;
}
function YK(){
  confirm("Yeah! You got 10 candles!");
  var str = "Next Round";
  var result = str.link("CANADA 150_level8_end.html");
  document.getElementById("link").innerHTML = result;
}
function NT(){
  confirm("Yeah! You got 10 candles!");
  var x="What is the capital city of Newfoundland?";
  document.getElementById("newfoundland").innerHTML = x;
}
function NF(){
  confirm("Yeah! You got 10 candles!");
  var x="What is the capital city of New Brunswick?";
  document.getElementById("newbruns").innerHTML = x;
}
function NB(){
  confirm("Yeah! You got 10 candles!");
  var x="What is the capital city of Prince Edward Island?";
  document.getElementById("pei").innerHTML = x;
}
function PEI(){
  confirm("Yeah! You got 10 candles!");
  var x="What is the capital city of Nova Scotia?";
  document.getElementById("novascotia").innerHTML = x;
}


//lose
function wrong(){
  var x = confirm("Sorry, you lost all your candles! Try again!")
}
  if (x == true){
    location.reload();
  }
  else{
    alert("We'll see you next time!");
  }
