// INSPIRED BY X-COM: ENEMY UNKNOWN'S RANDOMLY GENERATED MISSION NAMES

// adjectives
var adj = Array 
(
	"BLUE",
	"RED",
	"NUCLEAR",
	"UNDYING",
	"SILENT",
	"FLYING",
	"RISING",
	"CRASHING",
	"THUNDEROUS",
	"FURIOUS",
	"FIERCE",
	"CALCULATED",
	"GLORIOUS",
	"IRON",
	"ROARING",
	"RAGING",
	"RIPPING",
	"RECKLESS",
	"UNBROKEN",
	"BROKEN",
	"VENGEFUL",
	"HIDDEN",
	"STRIKING",
	"SWIFT",
	"CHARGING",
	"SHATTERING",
	"SWEEPING",
	"MORNING",
	"BLINDING",
	"DEAFENING",
	"TACTICAL",
	"GUARDIAN"
);

// nouns
var noun = Array 
(
	"ANGEL",
	"WHISPER",
	"CRY",
	"TERROR",
	"RETALIATION",
	"FORCE",
	"MIGHT",
	"LIGHT",
	"PANTHER",
	"BULL",
	"TIGER",
	"EAGLE",
	"DRAGON",
	"INFERNO",
	"THUNDER",
	"LIGHTNING",
	"STORM",
	"TIDE",
	"FLOOD",
	"POSEIDON",
	"WHIRLWIND",
	"MELTDOWN",
	"WINTER",
	"FIST",
	"FURY",
	"SWORD",
	"RAZOR",
	"BLADE",
	"EDGE",
	"STRIKE",
	"STEEL"
);

// make it work
$(document).ready(function()
{
	function missionGen()
	{
        var randAdj = adj[Math.floor(Math.random()*adj.length)];
        $('#adj').html(randAdj); 
        var randNoun = noun[Math.floor(Math.random()*noun.length)]; 
        $('#noun').html(randNoun);
    } 
    missionGen(); 
    $('#gen').click(function()
    { 
        missionGen(); 
    })
});