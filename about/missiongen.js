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
	"RAPID",
	"ROARING",
	"RAGING",
	"RIPPING",
	"RECKLESS",
	"UNBROKEN",
	"BROKEN",
	"VENGEFUL",
	"HIDDEN",
	"BOUNDLESS",
	"SWIFT",
	"CHARGING",
	"SHATTERING",
	"SWEEPING",
	"MORNING",
	"BLINDING",
	"DEAFENING",
	"TACTICAL",
	"GUARDIAN",
	"TWISTING",
	"VENOMOUS",
	"CAUSTIC",
	"FACELESS"
);

// nouns
var noun = Array 
(
	"ANGEL",
	"WHISPER",
	"CRY",
	"TERROR",
	"RETALIATION",
	"REVENGE",
	"FORCE",
	"MIGHT",
	"LIGHT",
	"PANTHER",
	"BULL",
	"TIGER",
	"EAGLE",
	"SCORPION",
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
	"STEEL",
	"TSUNAMI",
	"TWILIGHT",
	"COURAGE",
	"JUSTICE"
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