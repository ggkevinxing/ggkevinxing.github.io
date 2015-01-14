// INSPIRED BY X-COM: ENEMY UNKNOWN'S RANDOMLY GENERATED MISSION NAMES

// adjectives
var adj = Array 
(
	"SILENT",
	"FLYING",
	"RISING",
	"CRASHING",
	"THUNDEROUS",
	"FURIOUS",
	"IRON",
	"ROARING",
	"RAGING",
	"RIPPING",
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
	"GUARDIAN"
);

// nouns
var noun = Array 
(
	"ANGEL",
	"WHISPER",
	"CRY",
	"TERROR",
	"FORCE",
	"MIGHT",
	"LIGHT",
	"PANTHER",
	"BULL",
	"TIGER",
	"EAGLE",
	"INFERNO",
	"THUNDER",
	"LIGHTNING",
	"STORM",
	"TIDE",
	"WHIRLWIND",
	"FIST",
	"SWORD",
	"BLADE",
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