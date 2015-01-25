// tips
var tip = Array
(
    "Did you remember to put commas in between elements in your array?",
    "Did you remember to add '../' to script calls for web pages in different directory depths?"
    "Be careful; forgetting any closing tags, brackets or semi-colons can result in disaster.",
    "Be creative! Yes, I see the irony of this.",
    "Be excellent; a positive mindset, can-do attitude and cheery demeanor can bolster a team's morale.",
    "Be organized; keeping your code clean and well-explained with comments ensures more time coding and less time wondering what your code is even doing.",
    "Be smart; keep documentation handy, think ahead, and plan your approach for maximum efficiency.",
    "Don't panic! Everything is going to be fine.",
    "Did you remember to save the scene in Unity before pushing your changes?",
    "As it turns out, meta files are pretty important to have in order to view up-to-date assets on group Unity projects. Imagine that!",
    "Have you tried turning it off and on again?",
    "Bring a notebook to code jams/hackathons! Whether it's for design sketches or taking tech talk notes, notebooks can prove quite convenient little tools.",
    "GitHub Pages does not execute any server-side code. On the plus side, it's absolutely free!",
    "To identify a University of Waterloo student, simply shout 'WATER WATER WATER!' and they will respond accordingly.",
    "Campus Pizza in Waterloo make 'Kahuna'-sized pizzas for $32; getting Ontario's largest pizza has never been more economical!"
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