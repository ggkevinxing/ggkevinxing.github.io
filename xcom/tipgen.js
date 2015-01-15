// tips
var tip = Array
(
    "Be alert; leaving commas out of arrays or using the wrong type of (brackets) can lead to prolonged frustration.",
    "Be careful; forgetting any closing tags, brackets or semi-colons can result in disaster.",
    "Be excellent; a positive mindset, can-do attitude and cheery demeanor can bolster a team's morale.",
    "Be organized; keeping your code clean and well-explained with comments ensures more time coding and less time wondering what your code is even doing.",
    "Don't panic! Everything is going to be fine.",
    "Have you tried turning it off and on again?",
    "GitHub Pages does not execute any server-side code. Hope you enjoy static content and limited modularity! On the plus side, it's absolutely free.",
    "To identify a University of Waterloo student, simply shout 'WATER WATER WATER!' and they will respond accordingly."
)

// make it work
$(document).ready(function()
{
	function tipGen()
	{
        var randTip = tip[Math.floor(Math.random()*tip.length)];
        $('#tip').html(randTip);
    } 
    tipGen(); 
    $('#newtip').click(function()
    { 
        tipGen(); 
    })
});