// INSPIRED BY X-COM: ENEMY UNKNOWN'S RANDOMLY GENERATED MISSION NAMES



// array of adjectives
var adj = Array 
(
	"SILENT",
	"FLYING",
	"CRASHING",
	"THUNDEROUS",
	"FURIOUS",
	"UNBROKEN",
	"VENGEFUL",
	"STRIKING",
	"SWIFT",
	"ROARING",
	"RAGING",
	"CHARGING",
	"SWEEPING",
	"MORNING",
	"GUARDIAN"
);

// array of nouns
var noun = Array 
(
	"WHISPER",
	"CRY",
	"PANTHER",
	"BULL",
	"TIGER",
	"INFERNO",
	"THUNDER",
	"LIGHTNING",
	"STORM",
	"TIDE",
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