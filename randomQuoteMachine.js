$(document).ready(function(){
  function getTheQuote(){
  var yogiQuotes=["When you come to a fork in the road, take it.", "You can observe a lot by just watching.", "It ain’t over till it’s over.", "It’s like dejavu all over again.",
"No one goes there nowadays, it’s too crowded.",
"Baseball is 90% mental and the other half is physical.",
"A nickel ain’t worth a dime anymore.",
"Always go to other people’s funerals, otherwise they won’t come to yours.",
"We made too many wrong mistakes.",
"Congratulations. I knew the record would stand until it was broken.",
"You better cut the pizza in four pieces because I’m not hungry enough to eat six.",
"You wouldn’t have won if we’d beaten you.",
"I usually take a two-hour nap from one to four.",
"Never answer an anonymous letter.",
"Slump? I ain’t in no slump… I just ain’t hitting.",
"How can you think and hit at the same time?",
"The future ain’t what it used to be.",
"I tell the kids, somebody’s gotta win, somebody’s gotta lose. Just don’t fight about it. Just try to get better.",
" It gets late early out here.",
" If the people don’t want to come out to the ballpark, nobody’s going to stop them.",
"We have deep depth.",
"Pair up in threes.",
"Why buy good luggage, you only use it when you travel.",
"You’ve got to be very careful if you don’t know where you are going, because you might not get there.",
"All pitchers are liars or crybabies."];
    var randomGen = Math.floor((Math.random() * yogiQuotes.length));
    var randomQuote = yogiQuotes[randomGen];
    $("#quote").text(randomQuote);
}
    $("#quoteButton").on("click", function(){
      getTheQuote()
  });
});
$("#twitterButton").on("click", function(){
   window.open("https://twitter.com/intent/tweet");     
});  