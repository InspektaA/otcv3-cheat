//  Moonlight for v4 (THIS IS NOT FINISHED WHATSOEVER)

var getuser1 = Cheat.GetUsername()

Cheat.Print("[")
Cheat.PrintColor([0, 20, 40,255], "Moonlight")
Cheat.Print("]")
Cheat.Print(" Welcome: " + getuser1 + "\n")
Cheat.Print("[")
Cheat.PrintColor([0, 20, 40,255], "Moonlight")
Cheat.Print("]")
Cheat.Print(" Thanks to Hana for the rage bot logs"+ "\n")

// UI Stuff -- Start

// Anti Aim -- Start
UI.AddSubTab( ["Rage", "SUBTAB_MGR"], "Moonlight AA")
UI.AddDropdown( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA"], "Anti Aim Stuff", ["Limit Fake", "Freestanding", "Anti-Stuff", "Aim bot", "Jitter Delta"], 0)

// Legit AA -- Start
UI.AddHotkey( ["Rage", "Anti Aim", "General", "Key assignment"], "Legit AA", "Legit AA")
// Legit AA -- End

// Limit Fake Stuff -- Start
UI.AddCheckbox( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA"], "Limit Fake")
UI.AddSliderInt( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA"], "LBY Delta", 0, 60)
UI.AddSliderInt( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA"], "Real Delta", -60, 0)
UI.AddSliderInt( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA"], "Inverted LBY Delta", -60, 0)
UI.AddSliderInt( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA"], "Inverted Real Delta", 0, 60)
// Limit Fake Stuff -- End

// Freestanding -- Start
UI.AddHotkey( ["Rage", "Anti Aim", "General", "Key assignment"], "Freestanding", "Freestanding")
UI.AddCheckbox( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA"], "Freestanding Fake") 
UI.AddDropdown( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA"], "Freestanding Mode", ["Disabled", "Normal", "Reversed"], 0);
// Freestanding -- End


// Anti Aim -- End

// Fakeduck -- Start
UI.AddHotkey(["Rage", "General", "General", "Key assignment"], "Fake duck", "Fake duck");
UI.AddHotkey(["Rage", "General", "General", "Key assignment"], "Matchmaking fake duck", "Fake duck");
// Fakeduck -- End

// Visuals -- Start
UI.AddSubTab( ["Visuals", "SUBTAB_MGR"], "Moonlight")
UI.AddCheckbox( ["Visuals", "Moonlight", "SHEET_MGR", "Moonlight"], "Display freestanding mode next to indicators")
UI.AddCheckbox( ["Visuals", "Moonlight", "SHEET_MGR", "Moonlight"], "Display double tap speed next to indicators")
// Visuals -- End

// Presets -- Start
UI.AddSubTab( ["Config", "SUBTAB_MGR"], "Moonlight Presets")
UI.AddCheckbox( ["Config", "Moonlight Presets", "SHEET_MGR", "Moonlight Presets"], "Use the settings that Luna uses (button below)")
UI.AddCheckbox( ["Config", "Moonlight Presets", "SHEET_MGR", "Moonlight Presets"], "Creator Presets")
UI.AddCheckbox( ["Config", "Moonlight Presets", "SHEET_MGR", "Moonlight Presets"], "Zapzter settings (CUZ HE IS LAZY)")
UI.AddCheckbox( ["Config", "Moonlight Presets", "SHEET_MGR", "Moonlight Presets"], "Note: Keybinds will not be set!")
// Presets -- End

// Force Head -- Start
UI.AddHotkey( ["Rage", "General", "General", "Key assignment"], "Force Head", "Force Head")
// Force Head -- End

// Watermarks -- Start
UI.AddDropdown(["Visuals", "Moonlight", "SHEET_MGR", "Moonlight"], "Watermark style", ["Off", "onetap", "Moonlight"], 0)
// Watermarks -- End

// Anti-brute -- Start
UI.AddSliderInt( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA"], "Max Brute FOV", 0, 35)
UI.AddCheckbox( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA"],"Anti-Onetap")
// Anti-brute -- End

// hp/2 dt -- Start
UI.AddCheckbox( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA"], "hp/2 double tap")
// hp/2 dt -- End

// Better DT -- Start
UI.AddDropdown( ["Rage", "Exploits", "General"], "Better DT", ["Reliable", "Fast", "Faster", "Fastest", "Even Faster"], 0 )
// Better DT -- Start

// Dynamic turn speed
UI.AddCheckbox( ["Misc.", "Movement", "General"], "Dynamic turn speed")
// Dynamic turn speed

// Cancer Jitter -- Start
UI.AddHotkey( ["Rage", "General", "General", "Key assignment"], "Jitter Delta", "Jitter Delta")
UI.AddDropdown( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA"], "Jitter Side", [ "Inverted", "Not Inverted"], 0)
UI.AddCheckbox( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA"], "More mathematically correct")
UI.AddSliderInt( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA"], "Jitter Fake Max", 0, 60)
UI.AddSliderInt( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA"], "Jitter Fake Min", -60, 60)
UI.AddSliderInt( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA"], "Jitter Real Max", -90, -1)
UI.AddSliderInt( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA"], "Jitter Real Min", -90, -1)
UI.AddSliderInt( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA"], "Jitter Inverted Fake Max", -60, 0)
UI.AddSliderInt( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA"], "Jitter Inverted Fake Min", -60, 60)
UI.AddSliderInt( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA"], "Jitter Inverted Real Max", 0, 90)
UI.AddSliderInt( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA"], "Jitter Inverted Real Min", 0, 90)
// Cancer Jitter -- End

// Clantag -- Start
UI.AddDropdown( ["Visuals", "Moonlight", "SHEET_MGR", "Moonlight"], "Clantag", ["Disabled", "Moonlight"], 0)
// Clantag -- End

// Ragebot logs -- Start
UI.AddCheckbox( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA"], "Ragebot logs")
// Ragebot logs -- End
/*
// Console stuff -- Start
UI.AddCheckbox( ["Visuals", "Moonlight", "SHEET_MGR", "Moonlight"], "Hide chat")
UI.AddCheckbox( ["Visuals", "Moonlight", "SHEET_MGR", "Moonlight"], "Only show logs in console")
UI.AddSliderFloat( ["Visuals", "Moonlight", "SHEET_MGR", "Moonlight"], "Aspect ratio", 0.0, 1.0);
// Console stuff -- End
*/
function drawmenu() {
	
	//Don't show Sliders if Limit Fake is disabled
	tagLimit = UI.GetValue( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Limit Fake"]);
	
	if(tagLimit == 0) {
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "LBY Delta"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Real Delta"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Inverted LBY Delta"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Inverted Real Delta"], 0);
	}else{
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "LBY Delta"], 1);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Real Delta"], 1);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Inverted LBY Delta"], 1);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Inverted Real Delta"], 1);
	}
	
	//Disables items that arent supposed to be on current tab
	tagAA = UI.GetValue( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Anti Aim Stuff"]);
	
	if(tagAA == 0) { // Disable stuff that arent supposed to be on Limit Fake tab
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Limit Fake"], 1);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Freestanding Mode"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Freestanding Fake"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Anti-Onetap"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Max Brute FOV"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "hp/2 double tap"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Fake Max"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Fake Min"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Real Max"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Real Min"], 0);
		//Inverted
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Inverted Fake Max"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Inverted Fake Min"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Inverted Real Max"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Inverted Real Min"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Side"], 0)
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "More mathematically correct"], 0)
	}else if(tagAA == 1) { //Disables stuff that arent supposed to be on Coming Soon tab
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Freestanding Mode"], 1);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Freestanding Fake"], 1);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Limit Fake"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "LBY Delta"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Real Delta"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Inverted LBY Delta"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Inverted Real Delta"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Anti-Onetap"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Max Brute FOV"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "hp/2 double tap"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Fake Max"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Fake Min"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Real Max"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Real Min"], 0);
		//Inverted
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Inverted Fake Max"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Inverted Fake Min"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Inverted Real Max"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Inverted Real Min"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Side"], 0)
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "More mathematically correct"], 0)
	}else if(tagAA == 2) {
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Freestanding Mode"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Freestanding Fake"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Limit Fake"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "LBY Delta"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Real Delta"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Inverted LBY Delta"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Inverted Real Delta"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Anti-Onetap"], 1);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Max Brute FOV"], 1);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "hp/2 double tap"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Fake Max"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Fake Min"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Real Max"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Real Min"], 0);
		//Inverted
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Inverted Fake Max"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Inverted Fake Min"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Inverted Real Max"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Inverted Real Min"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Side"], 0)
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "More mathematically correct"], 0)
	}else if(tagAA == 3) {
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "hp/2 double tap"], 1);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Freestanding Mode"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Freestanding Fake"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Limit Fake"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "LBY Delta"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Real Delta"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Inverted LBY Delta"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Inverted Real Delta"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Anti-Onetap"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Max Brute FOV"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Fake Max"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Fake Min"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Real Max"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Real Min"], 0);
		//Inverted
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Inverted Fake Max"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Inverted Fake Min"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Inverted Real Max"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Inverted Real Min"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Side"], 0)
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "More mathematically correct"], 0)
	}else if(tagAA == 4) {
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "hp/2 double tap"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Freestanding Mode"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Freestanding Fake"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Limit Fake"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "LBY Delta"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Real Delta"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Inverted LBY Delta"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Inverted Real Delta"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Anti-Onetap"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Max Brute FOV"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Side"], 1)
	}
	
	var tagJitter = UI.GetValue( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Side"])
	
	if(tagJitter == 0) {
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Fake Max"], 1);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Fake Min"], 1);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Real Max"], 1);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Real Min"], 1);
		//Inverted
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Inverted Fake Max"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Inverted Fake Min"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Inverted Real Max"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Inverted Real Min"], 0);
	}else if(tagJitter == 1) {
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Fake Max"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Fake Min"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Real Max"], 0);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Real Min"], 0);
		//Inverted
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Inverted Fake Max"], 1);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Inverted Fake Min"], 1);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Inverted Real Max"], 1);
		UI.SetEnabled( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Inverted Real Min"], 1);
	}
	
	//Show indicators
	tagDT = UI.GetValue( ["Rage", "Exploits", "General", "Speed"])
	tagFT = UI.GetValue( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Freestanding Mode"])
	
	var font = Render.AddFont( "Arial.ttf", 15, 800 )
	var DTMode = " "
	var FTMode = " "
	var DetectDT = UI.GetValue( ["Rage", "Exploits", "Keys", "Key assignment", "Double tap"])
	var DetectFT = UI.GetValue( ["Rage", "Anti Aim", "General", "Key assignment", "Freestanding"], "Freestanding")
	var DetectFTInd = UI.GetValue( ["Visuals", "Moonlight", "SHEET_MGR", "Moonlight", "Display freestanding mode next to indicators"])
	var DetectDTInd = UI.GetValue( ["Visuals", "Moonlight", "SHEET_MGR", "Moonlight", "Display double tap speed next to indicators"])
	
	switch(tagDT) {
		case 0: DTMode = "Reliable"; break;
		case 1: DTMode = "Fast"; break;
		case 2: DTMode = "Faster"; break;
		case 3: DTMode = "Fastest"; break;
	}
	if(DetectDTInd == 1 && DetectDT == 1) {
		Render.String(105,540,0, "DTMode: " + DTMode, [255,255,255,255], font)
	}
	switch(tagFT) {
		case 1: FTMode = "Normal"; break;
		case 2: FTMode = "Reversed"; break;
	}
	if(tagFT == 0) {
	}else if(DetectFTInd == 1 && DetectFT == 1) {
		Render.String(105,525,0, "FTMode: " + FTMode, [255,255,255,255], font)
	}
	
	var tagPresets = UI.GetValue( ["Config", "Moonlight Presets", "SHEET_MGR", "Moonlight Presets", "Creator Presets"])
	var tagPresets1 = UI.GetValue( ["Config", "Moonlight Presets", "SHEET_MGR", "Moonlight Presets", "Zapzter settings (CUZ HE IS LAZY)"])
	if(tagPresets == 1) {
		// Limit Fake
		UI.SetValue( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "LBY Delta"], 18)
		UI.SetValue( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Real Delta"], -18)
		UI.SetValue( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Inverted LBY Delta"], -18)
		UI.SetValue( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Inverted Real Delta"], 18)
		//Damage Override
		UI.SetValue( ["Rage", "Min DMG", "SHEET_MGR", "Min DMG", "General mindamage override"], 10)
		UI.SetValue( ["Rage", "Min DMG", "SHEET_MGR", "Min DMG", "Deagle mindamage override"], 15)
		UI.SetValue( ["Rage", "Min DMG", "SHEET_MGR", "Min DMG", "Revolver mindamage override"], 101)
		UI.SetValue( ["Rage", "Min DMG", "SHEET_MGR", "Min DMG", "Scout mindamage override"], 35)
		UI.SetValue( ["Rage", "Min DMG", "SHEET_MGR", "Min DMG", "Awp mindamage override"], 1)
		UI.SetValue( ["Rage", "Min DMG", "SHEET_MGR", "Min DMG", "SCAR20 mindamage override"], 5)
		UI.SetValue( ["Rage", "Min DMG", "SHEET_MGR", "Min DMG", "G3SG1 mindamage override"], 5)
		//Freestanding Mode
		UI.SetValue( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Freestanding Mode"], 2)
		UI.SetValue( ["Config", "Moonlight Presets", "SHEET_MGR", "Moonlight Presets", "Creator Presets"], 0)
		// Double tap stuff
		UI.SetValue( ["Rage", "Exploits", "General", "Double tap Shift"], 15)
		UI.SetValue( ["Rage", "Exploits", "General", "Double tap Tolerance"], 0)
	}
	
	if(tagPresets1 == 1) {
		UI.SetValue( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "LBY Delta"], 0)
		UI.SetValue( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Real Delta"], -28)
		UI.SetValue( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Inverted LBY Delta"], -0)
		UI.SetValue( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Inverted Real Delta"], 28)
		UI.SetValue( ["Config", "Moonlight Presets", "SHEET_MGR", "Moonlight Presets", "Zapzter settings (CUZ HE IS LAZY)"], 0)
	}
}

// UI Stuff - End

//Fast duck MM -- Start

function on_create_move() {
    // Get buttons.
    var buttons = UserCMD.GetButtons();

    // Enable fast duck.
    UserCMD.SetButtons(buttons | (1 << 22))

    var chokedcommands;

    // Keybinds.
    const fakeduck = UI.GetValue(["Rage", "General", "General", "Key assignment", "Fake duck"])
    const mmfakeduck = UI.GetValue(["Rage", "General", "General", "Key assignment", "Matchmaking fake duck"])

    // HvH choke amount.
    if ( fakeduck ) {
        UI.SetValue(["Rage", "Fake Lag", "General", "Limit"], 14)
        chokedcommands = Globals.ChokedCommands() <= 7;
    }

    // Matchmaking choke amount.
    if ( mmfakeduck ) {
        UI.SetValue(["Rage", "Fake Lag", "General", "Limit"], 8)
        chokedcommands = Globals.ChokedCommands() <= 3;
    }


    // Are we holding the fake duck key?
    if ( fakeduck || mmfakeduck) {
        // Make sure we're lagging.
        UI.SetValue(["Rage", "Fake Lag", "General", "Enabled"], 1)

        // Are we on the ground?
        if (!Entity.GetProp(Entity.GetLocalPlayer(), "CBasePlayer", "m_hGroundEntity")) {
            // We shouldn't duck just yet... Let's stand up instead!
            if (chokedcommands) {
                UserCMD.SetButtons(buttons &= ~(1 << 2));
            }

            // Duck if we're choking more than the required ticks.
            else {
                UserCMD.SetButtons(buttons |= (1 << 22));
            }
        }
    }
}

// Fast duck MM -- End

// Jitter Delta -- Start

function JitterDelta() { // start of function
	var getMath = UI.GetValue( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "More mathematically correct"])
	var JitterFakeMax = UI.GetValue( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Fake Max"])
	var JitterFakeMin = UI.GetValue( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Real Min"])
	var JitterRealMax = UI.GetValue( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Real Max"])
	var JitterRealMin = UI.GetValue( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Real Min"])
	//Inverted
	var JitterFakeInvertedMax = UI.GetValue( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Inverted Fake Max"])
	var JitterFakeInvertedMin = UI.GetValue( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Inverted Fake Min"])
	var JitterRealInvertedMax = UI.GetValue( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Inverted Real Max"])
	var JitterRealInvertedMin = UI.GetValue( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Jitter Inverted Real Min"])
	
	
	if(getMath == 1) {
		//Accurate jitter(ever worse than the original)
		var getFake = Math.round(Math.random() * (JitterFakeMax - JitterFakeMin) + JitterFakeMin);
		var getReal = Math.round(Math.random() * (JitterRealMax - JitterRealMin) + JitterRealMin);
		// Inverted
		var getFakeInverted = Math.round(Math.random() * (JitterFakeInvertedMax - JitterFakeInvertedMin) + JitterFakeInvertedMin);
		var getRealInverted = Math.round(Math.random() * (JitterRealInvertedMax - JitterRealInvertedMin) + JitterRealInvertedMin);
	}else {
		var getFake = Math.floor(Math.random() * JitterFakeMin * JitterFakeMax);
		var getReal = Math.round(Math.random() * (JitterRealMax - JitterRealMin) + JitterRealMin);
		// Inverted
		var getFakeInverted = Math.floor(Math.random() * JitterFakeInvertedMax * JitterFakeInvertedMin);
		var getRealInverted = Math.round(Math.random() * (JitterRealInvertedMax - JitterRealInvertedMin) + JitterRealInvertedMin);
	}

	if(UI.GetValue( ["Rage", "General", "General", "Key assignment", "Jitter Delta"]) && UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"])) {
		AntiAim.SetOverride(1);
		AntiAim.SetFakeOffset(0);
		AntiAim.SetRealOffset(getRealInverted); 
		AntiAim.SetLBYOffset(getFakeInverted);
	}else if(UI.GetValue( ["Rage", "General", "General", "Key assignment", "Jitter Delta"])) { 
		AntiAim.SetOverride(1);
		AntiAim.SetFakeOffset(0);
		AntiAim.SetRealOffset(getReal);
		AntiAim.SetLBYOffset(getFake);
	}
}

// Jitter Delta -- End

// Legit AA on Key -- Start

var Inverter = "AA Durection inverter"
function legitaa() {
    localplayer_index = Entity.GetLocalPlayer( ); // need
    if (UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Legit AA"], "Legit AA") == 1 && UI.GetValue(["Rage", "Anti Aim", "SHEET_MGR", "General", "Key assignment", "AA Direction inverter"]) == 1) { // check if enabled + inverted
		UI.SetValue(["Cheat", "SHEET_MGR", "General", "Restrictions"], 0);
        UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Directions", "Yaw offset"], 180); // changed value if enabled
		UI.SetValue(["Rage", "Anti Aim", "General", "Pitch mode"], 0);
        AntiAim.SetOverride(1);
        AntiAim.SetFakeOffset(0); // idk maybe this rotate legs work i will test working and it is work good
        AntiAim.SetRealOffset(-60);
        AntiAim.SetLBYOffset(120);
	}else if(UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Legit AA"], "Legit AA") == 1) { // check if only the key is enabled
		UI.SetValue(["Cheat", "SHEET_MGR", "General", "Restrictions"], 0);
	    UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Directions", "Yaw offset"], 180); // changed value if enabled
		UI.SetValue(["Rage", "Anti Aim", "General", "Pitch mode"], 0);
		AntiAim.SetOverride(1);
        AntiAim.SetFakeOffset(0); // idk maybe this rotate legs work i will test working and it is work good
        AntiAim.SetRealOffset(60);
        AntiAim.SetLBYOffset(-120);
	}else { // if disabled
		UI.SetValue(["Cheat", "SHEET_MGR", "General", "Restrictions"], 1);
        UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Directions", "Yaw offset"], 0);
		UI.SetValue(["Rage", "Anti Aim", "General", "Pitch mode"], 1);
    }
}

// Legit AA on Key -- end

// Limit Fake -- Start

UI.AddHotkey( ["Rage", "Anti Aim", "General", "Key assignment"], "Limit Fake", "Limit Fake")

function LimFake() {
	var LBYDelta = UI.GetValue(["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "LBY Delta"]);
	var RealDelta = UI.GetValue(["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Real Delta"]);
	var InvertedLBYDelta = UI.GetValue(["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Inverted LBY Delta"]);
	var InvertedRealDelta = UI.GetValue(["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Inverted Real Delta"]);
	
	//--------------------------------------------------------------------------------------//
	if (UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Limit Fake"], "Limit Fake") == 1 && UI.GetValue(["Rage", "Anti Aim", "SHEET_MGR", "General", "Key assignment", "AA Direction inverter"]) == 1) {
		AntiAim.SetOverride(1);
		AntiAim.SetFakeOffset(0);
		AntiAim.SetRealOffset(InvertedRealDelta);
		AntiAim.SetLBYOffset(InvertedLBYDelta);
	}else if (UI.GetValue(["Rage", "Anti Aim", "General", "Key assignment", "Limit Fake"], "Limit Fake") == 1) {
		AntiAim.SetOverride(1);
		AntiAim.SetFakeOffset(0);
		AntiAim.SetRealOffset(RealDelta);
		AntiAim.SetLBYOffset(LBYDelta);
	}
}

// Limit Fake -- End

//Reverse Freestanding -- Start

function Freestanding() {
	angles = Local.GetViewAngles();
    right = getWallDistance(Entity.GetLocalPlayer(), [0, angles[1] + 60]);
    left = getWallDistance(Entity.GetLocalPlayer(), [0, angles[1] - 60]);
	front = getWallDistance(Entity.GetLocalPlayer(), [0, angles[1]]);
    diff = Math.abs(left - right);
	if (UI.GetValue( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Freestanding Mode"]) != 0 && !UI.GetValue( ["Rage", "Anti Aim", "General", "Key assignment", "Slow walk"])) {
        if (front < 40) {
            if (UI.GetValue( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Freestanding Mode"]) == 2 && UI.GetValue( ["Rage", "Anti Aim", "General", "Key assignment", "Freestanding"]) == 1) {
                setInvert(right < left);
                } else if (UI.GetValue( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Freestanding Mode"]) == 1 && UI.GetValue( ["Rage", "Anti Aim", "General", "Key assignment", "Freestanding"]) == 1) {
				setInvert(left < right);
            }
		}
	}
}


//Reverse Freestanding -- End

//Math shit -- Start

function DEG2RAD(degree) {
    return (Math.PI / 180) * degree;
}

function ANGLE2VEC(angle) {
    pitch = angle[0];
    yaw = angle[1];
    return [Math.cos(DEG2RAD(pitch)) * Math.cos(DEG2RAD(yaw)), Math.cos(DEG2RAD(pitch)) * Math.sin(DEG2RAD(yaw)), -Math.sin(DEG2RAD(pitch))];
}

function getWallDistance(entity, angle) {
    vector = ANGLE2VEC(angle);
    origin = Entity.GetRenderOrigin(entity);
    origin[2] += Entity.GetProp(entity, "CBasePlayer", "m_vecViewOffset[2]")[0];
    end = [origin[0] + vector[0] * 8192, origin[1] + vector[1] * 8192, origin[2] + vector[2] * 8192];
    result = Trace.Line(entity, origin, end);
    if (result[1] != 1) {
        wall = [origin[0] + vector[0] * result[1] * 8192, origin[1] + vector[1] * result[1] * 8192, origin[2] + vector[2] * result[1] * 8192];
        distance = Math.sqrt(Math.pow(origin[0] - wall[0], 2) + Math.pow(origin[1] - wall[1], 2) + Math.pow(origin[2] - wall[2], 2));
        return distance;
    } else {
        return 0;
    }
}

//Math shit -- End

//Inverter -- Start

function setInvert(shouldInvert) {
    if (shouldInvert) {
        if (!UI.GetValue( ["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"])) {
            UI.ToggleHotkey( ["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"]);
        }
    } else {
        if (UI.GetValue( ["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"])) {
            UI.ToggleHotkey( ["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"]);
        }
    }
}

//Inverter -- End

//Clamping -- Start

function adjustAngle(angle) {
    if (angle < 0) {
        angle = (90 + angle * (-1));
    } else if (angle > 0) {
        angle = (90 - angle);
    }

    return angle;
}

//Clamping -- End

// Anti-Bruteforce -- Start

function RADTODEGA(radians){
    return radians * 180 / Math.PI
}
function calcAngle(source,entityPos){
    var delta = []
    delta[0] = source[0] - entityPos[0]
    delta[1] = source[1] - entityPos[1]
    delta[2] = source[2] - entityPos[2]
    var angles = []
    var viewangles = Local.GetViewAngles()
    angles[0] = RADTODEGA(Math.atan(delta[2] / Math.hypot(delta[0], delta[1]))) - viewangles[0]
    angles[1] = RADTODEGA(Math.atan(delta[1] / delta[0])) - viewangles[1]
    angles[2] = 0
    if(delta[0] >= 0)
        angles[1] += 180

    return angles
}

var shots = 0
function onBulletImpact(){
    var ent = Entity.GetEntityFromUserID(Event.GetInt("userid"))
    if(ent == Entity.GetLocalPlayer() || Entity.IsTeammate(ent))
        return
    var pos = [Event.GetFloat("x"), Event.GetFloat("y"), Event.GetFloat("z")]
    var ang = calcAngle(Entity.GetEyePosition(ent), pos)
    var angToLocal = calcAngle(Entity.GetEyePosition(ent), Entity.GetHitboxPosition(Entity.GetLocalPlayer(), 0))
    var delta = [angToLocal[0]-ang[0],angToLocal[1]-ang[1],0]
    var FOV = Math.sqrt(delta[0] * delta[0] + delta[1] * delta[1])
    if(FOV < UI.GetValue(["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Max Brute FOV"]))
        UI.ToggleHotkey(["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"])
    if(UI.GetValue(["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Anti-Onetap"])){
        shots++
        if(!(shots % 4)) UI.ToggleHotkey( ["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"])
    }
}
function playerhurt() {
	if(UI.GetValue( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Max Brute FOV"]) == 0) {
		
	}else{
		if(Entity.GetEntityFromUserID(Event.GetInt("userid")) == Entity.GetLocalPlayer()) {
			UI.ToggleHotkey( ["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"])
		}
	}
}

// Anti-Bruteforce -- End

// Disable AA Override -- Start

function disableaaoverride() {
	AntiAim.SetOverride(0)
}

// Disable AA Override -- End

// Better DT -- Start

function BetterDT() {
	var getSpeed = UI.GetValue( ["Rage", "Exploits", "General", "Better DT"] )
	var setShift = Exploit.OverrideShift
	var setTol = Exploit.OverrideTolerance
	
	
	if(getSpeed == 0) {
		setShift(12)
		setTol(2)
	}else if(getSpeed == 1) {
		setShift(13)
		setTol(1)
	}else if(getSpeed == 2) {
		setShift(14)
		setTol(1)
	}else if(getSpeed == 3) {
		setShift(14)
		setTol(0)
	}else if(getSpeed == 4) {
		setShift(15)
		setTol(0)
	}
}

// Better DT -- End

// hp/2 doubletap -- Start

function hp2()
{
	
	var gethp2 = UI.GetValue( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "hp/2 double tap"])
	var getdt1 = UI.GetValue( ["Rage", "Exploits", "Keys", "Key assignment","Double tap"])
	
    chargestate = Exploit.GetCharge()
    if (gethp2 == 1 && getdt1 == 1 && chargestate == 1) {

        var enemies = Entity.GetEnemies()

        for (j in enemies)
        {
            var hp = Entity.GetProp(enemies[j],"CBasePlayer", "m_iHealth")

            Ragebot.ForceTargetMinimumDamage(enemies[j], hp / 2 )    
        }
    }
}

// hp/2 doubletap -- End

// Clantag -- Start

var lasttime = 0;
function onRender( )
{
    var tag = UI.GetValue( ["Visuals", "Moonlight", "SHEET_MGR", "Moonlight", "Clantag"]);
	var speed = 2;
    var time = parseInt((Globals.Curtime() * speed))
    if (time != lasttime)
    {
		
        if(tag == 1)
            {
            switch((time) % 24)
            {
            case 1: { Local.SetClanTag("                  "); break; }
            case 2: { Local.SetClanTag("             Mo"); break; }
            case 3: { Local.SetClanTag("            Moo"); break; }
            case 4: { Local.SetClanTag("           Moon"); break; }
            case 5: { Local.SetClanTag("          Moonl"); break; }
            case 6: { Local.SetClanTag("         Moonli"); break; }
            case 7: { Local.SetClanTag("        Moonlig"); break; }
            case 8: { Local.SetClanTag("       Moonligh"); break; }
            case 8: { Local.SetClanTag("      Moonlight"); break; }
            case 8: { Local.SetClanTag("     Moonlight "); break; }
            case 8: { Local.SetClanTag("    Moonlight  "); break; }
            case 9: { Local.SetClanTag("   Moonlight   "); break; }
            case 10:{ Local.SetClanTag("  Moonlight    "); break; }
            case 11:{ Local.SetClanTag(" Moonlight     "); break; }
            case 12:{ Local.SetClanTag("Moonlight      "); break; }
            case 13:{ Local.SetClanTag("Moonlight      "); break; }
            case 14:{ Local.SetClanTag("Moonlight      "); break; }
            case 15:{ Local.SetClanTag("Moonlight      "); break; }
            case 16:{ Local.SetClanTag("oonlight       "); break; }
            case 17:{ Local.SetClanTag("onlight        "); break; }
            case 18:{ Local.SetClanTag("nlight         "); break; }
            case 19:{ Local.SetClanTag("light          "); break; }
            case 20:{ Local.SetClanTag("ight           "); break; }
            case 21:{ Local.SetClanTag("ght            "); break; }
            case 22:{ Local.SetClanTag("ht             "); break; }
            case 23:{ Local.SetClanTag("t              "); break; }
            case 24:{ Local.SetClanTag("               "); break; }
            }
        }
    }
    lasttime = time;
}
Cheat.RegisterCallback("Draw", "onRender");

// Clantag -- End

// Ragebot logs -- Start

function on_fire()
{ 

    ragebot_shot = true;
    shot_tick = Globals.Tickcount();

    /* Simplified hitboxes cause the end user doesn't need the exact hitbox location and it looks better with general hitgroups*/
    const simplified_hitboxes = [
        "head",
        "head",
        "stomach",
        "body",
        "chest",
        "chest",
        "upper chest",
        "left leg",
        "right leg",
        "left leg",
        "right leg",
        "left leg",
        "right leg",
        "left arm",
        "right arm",
        "left arm",
        "left arm",
        "right arm",
        "right arm",
        "generic"
      ];

    eye_pos = Entity.GetEyePosition(Entity.GetLocalPlayer())
    target_index = Event.GetInt("target_index");

    hitbox_index = Event.GetInt("hitbox");
    hitbox_pos = Entity.GetHitboxPosition(target_index, hitbox_index)

    hitchance = Event.GetInt("hitchance")

    fire_trace = Trace.Bullet(Entity.GetLocalPlayer(), target_index, eye_pos, hitbox_pos) 
    string = " fired shot " + "at " + Entity.GetName(target_index) + "'s " + (simplified_hitboxes[hitbox_index])+ ", hitchance: " + Event.GetInt("hitchance") + ", Predicted damage " + fire_trace[1] + " , safepoint: " + (Event.GetInt("safepoint") == 1 ? "enabled" : "disabled");
    


    if (UI.GetValue( ["Rage", "Moonlight AA", "SHEET_MGR", "Moonlight AA", "Ragebot logs"]) == 1)
    {
       Cheat.Print("[")
       Cheat.PrintColor([0, 20, 40,255], "Moonlight")
       Cheat.Print("]")
       Cheat.Print(string + "\n")
    }
}

Cheat.RegisterCallback("ragebot_fire", "on_fire");

// Ragebot logs -- End

// Show/Hide chat && Show/Hide shit in console -- Start
/*
function showhide() {
	// Hide chat
	
	if(UI.GetValue( ["Visuals", "Moonlight", "SHEET_MGR", "Moonlight", "Hide chat"]) == 1) {
		Cheat.ExecuteCommand("cl_chatfilters 0");
	}else{
		Cheat.ExecuteCommand("cl_chatfilters 63");
	}
	
	if(UI.GetValue( ["Visuals", "Moonlight", "SHEET_MGR", "Moonlight", "Only show logs in console"]) == 1) {
		Convar.SetString("con_filter_text_out", " ");
	}else {
		Convar.SetString("con_filter_text_out", "");
	}
	
	var setAspect = UI.GetValue( ["Visuals", "Moonlight", "SHEET_MGR", "Moonlight", "Aspect ratio"])
	setAspect = setAspect.toString();
	Convar.SetString("r_aspectratio", setAspect)
}
*/
//Cheat.RegisterCallback("Draw", "showhide")
//Global.RegisterCallback( "FrameStageNotify", "showhide" );

// Show/Hide chat && Show/Hide shit in console -- End

// Watermark -- Start

function watermark() {
	var font = Render.AddFont( "SegoeUI.ttf", 13, 800 )
    var watermarkstyle = UI.GetValue(["Visuals", "Moonlight", "SHEET_MGR", "Moonlight", "Watermark style"])
    var username;
	v = ""
	var getname = Cheat.GetUsername();
	
    if (watermarkstyle == 0) {
        return;
	}
    else if (watermarkstyle == 1) {
        username = " | " + getname + " | ";
		v = 239
	}
    else if (watermarkstyle == 2) {
        username = " [Moonlight] | " + getname + " | ";
		v = 281
	}
	if(World.GetServerString() == "local server") {
		ping = "0"
	}else{
		ping = Math.floor(Global.Latency() * 1000 / 1.5 )
	}
	if(World.GetServerString() == "") {
		server = "main menu"
	}else{
		server = World.GetServerString()
	}
	
	text = "onetap" + username + server + " | ping " + ping + "ms";
	
	x = Render.GetScreenSize()[0]
    y = Render.GetScreenSize()[1]
    w = Render.TextSize(text, font)[0] + 24;
	//w = 239;

    Render.GradientRect(x - w, 6, w, 22, 1, [0, 0, 0, 0], [0, 0, 0, 130]);
    Render.String(x - w + 18, 6, 0, text, [255, 255, 255, 255], font);
}

// Watermark -- End

// Skinchanger -- End

// Cache our old weapon index for optimization purposes
var old_index = -1;

// Combobox indexes based on our weapon indexes
// For further info, access tf2b.com/itemlist.php?gid=730
const weapons = {
    1: 5,
    2: 6,
    3: 8,
    4: 11,
    7: 0,
    8: 1,
    9: 2,
    10: 7,
    11: 9,
    13: 10,
    14: 13,
    16: 14,
    17: 16,
    19: 24,
    23: 19,
    24: 31,
    25: 33,
    26: 3,
    27: 17,
    28: 21,
    29: 26,
    30: 30,
    32: 12,
    33: 18,
    34: 20,
    35: 22,
    36: 23,
    38: 27,
    39: 28,
    40: 29,
    60: 15,
    61: 32,
    63: 4,
    64: 25,
    500: 34,
    503: 48,
    505: 35,
    506: 36,
    507: 37,
    508: 38,
    509: 45,
    512: 40,
    514: 44,
    515: 39,
    516: 42,
    519: 47,
    520: 41,
    522: 43,
    523: 46,
    517: 49,
    518: 50,
    521: 51,
    525: 52
}

/**
 * Where the magic happens
 *
 * @return {void}
 */
function schanger()
{
    // Get our properties
    const player = Entity.GetLocalPlayer();

    const wpn_index = Entity.GetProp(Entity.GetWeapon(player), "CBaseAttributableItem", "m_iItemDefinitionIndex") & 0xFFFF;

    // If our weapon hasn't changed then no need to update
    if (wpn_index === old_index)
        return;

    // Otherwise, cache our weapon index
    old_index = wpn_index;

    // If our current weapon index is inside our weapons table, then it is valid for skins.
    if (wpn_index in weapons)
    {
        // Get the checkbox index that matches our weapon index
        const menu = weapons[wpn_index];

        // Update the menu
        UI.SetValue( ["Misc.", "Skins", "Skins", "Weapon"], menu);
    }
}

// Skinchanger -- End

// Fast recharge -- Start

var time, delay, fillbar, shotsfired;

function can_shift_shot(ticks_to_shift) {
    var me = Entity.GetLocalPlayer();
    var wpn = Entity.GetWeapon(me);

    if (me == null || wpn == null)
        return false;

    var tickbase = Entity.GetProp(me, "CCSPlayer", "m_nTickBase");
    var curtime = Globals.TickInterval() * (tickbase-ticks_to_shift)

    if (curtime < Entity.GetProp(me, "CCSPlayer", "m_flNextAttack"))
        return false;

    if (curtime < Entity.GetProp(wpn, "CBaseCombatWeapon", "m_flNextPrimaryAttack"))
        return false;

    return true;
}

function _TBC_CREATE_MOVE() {
    var is_charged = Exploit.GetCharge()

    Exploit[(is_charged != 1 ? "Enable" : "Disable") + "Recharge"]()

    if (can_shift_shot(17) && is_charged != 1) {
        Exploit.DisableRecharge();
        Exploit.Recharge();
    }
}

function _TBC_UNLOAD() {
    Exploit.EnableRecharge();
}

// Fast rechaarge -- End

// Dynamic autostrafer -- Start

function clamp(min, max, value)
{
    if ( max > min )
        return Math.min( max, Math.max(min, value) );
    else
        return Math.min( min, Math.max(max, value) );
}

function strafeHelper()
{
	var getDynamic = UI.GetValue( ["Misc.", "Movement", "General", "Dynamic turn speed"])
    var sv_airaccelerate = Convar.GetInt("sv_airaccelerate");
    var turnSpeed = 100;
    turnSpeed = clamp(70, 500, sv_airaccelerate * 3.45 );
	if(getDynamic == 1) {
		UI.SetValue(["Misc.", "Movement", "Turn speed"], turnSpeed);
	}
}

// Dynamic autostrafer -- End

//Force head -- Start

//Storing User's Chosen Hitboxes.
autoHitboxes = (UI.GetValue( ["Rage", "Target", "SCAR20", "Hitboxes"]))
autotHitboxes = (UI.GetValue( ["Rage", "Target", "G3SG1", "Hitboxes"]))
awpHitboxes = (UI.GetValue( ["Rage", "Target", "AWP", "Hitboxes"]))
scoutHitboxes = (UI.GetValue( ["Rage", "Target", "SSG08", "Hitboxes"]))
r8Hitboxes = (UI.GetValue( ["Rage", "Target", "Revolver", "Hitboxes"]))
deagleHitboxes = (UI.GetValue( ["Rage", "Target", "Deagle", "Hitboxes"]))
generalHitboxes = (UI.GetValue( ["Rage", "Target", "General", "Hitboxes"]))

var original = true;

function forceheadonkey() {
	var menuitems = (["Rage","Target", "Min DMG", "SHEET_MGR", "Min DMG"])
    if (World.GetServerString() !== "") { 
        
        var forceHeadOnly = UI.GetValue( ["Rage", "General", "General", "Key assignment", "Force Head"], "Force Head")
        
        //Detecting if the hotkeys are pressed, if not make a small indicator in the bottom left corner.
        if (forceHeadOnly == 1) {
            if (original === true) {
                autoHitboxes = (UI.GetValue( ["Rage", "Target", "SCAR20", "Hitboxes"]))
				autotHitboxes = (UI.GetValue( ["Rage", "Target", "G3SG1", "Hitboxes"]))
				awpHitboxes = (UI.GetValue( ["Rage", "Target", "AWP", "Hitboxes"]))
				scoutHitboxes = (UI.GetValue( ["Rage", "Target", "SSG08", "Hitboxes"]))
				r8Hitboxes = (UI.GetValue( ["Rage", "Target", "Revolver", "Hitboxes"]))
				deagleHitboxes = (UI.GetValue( ["Rage", "Target", "Deagle", "Hitboxes"]))
				generalHitboxes = (UI.GetValue( ["Rage", "Target", "General", "Hitboxes"]))
                original = false
            }
                UI.SetValue( ["Rage", "Target", "SCAR20", "Hitboxes"], 1)
				UI.SetValue( ["Rage", "Target", "G3SG1", "Hitboxes"], 1)
                UI.SetValue( ["Rage", "Target", "AWP", "Hitboxes"], 1)
                UI.SetValue( ["Rage", "Target", "SSG08", "Hitboxes"], 1)
                UI.SetValue( ["Rage", "Target", "Revolver", "Hitboxes"], 1)
                UI.SetValue( ["Rage", "Target", "Deagle", "Hitboxes"], 1)
                UI.SetValue( ["Rage", "Target", "General", "Hitboxes"], 1)
            } else {
				if (original !== true) {
                UI.SetValue( ["Rage", "Target", "SCAR20", "Hitboxes"], autoHitboxes)
				UI.SetValue( ["Rage", "Target", "G3SG1", "Hitboxes"], autotHitboxes)
                UI.SetValue( ["Rage", "Target", "AWP", "Hitboxes"], awpHitboxes)
                UI.SetValue( ["Rage", "Target", "SSG08", "Hitboxes"], scoutHitboxes)
                UI.SetValue( ["Rage", "Target", "Revolver", "Hitboxes"], r8Hitboxes)
                UI.SetValue( ["Rage", "Target", "Deagle", "Hitboxes"], deagleHitboxes)
                UI.SetValue( ["Rage", "Target", "General", "Hitboxes"], generalHitboxes)
                original = true;
            }
        }
    }
}

//Force Head -- End

//DMG Override -- Start

var first_call = false;
UI.AddSubTab( ["Rage", "SUBTAB_MGR"], "Min DMG")
UI.AddHotkey( ["Rage", "General", "General", "Key assignment"], "Damage Override", "Damage Override" )

UI.AddDropdown(["Rage", "Min DMG", "SHEET_MGR", "Min DMG"],"Weapon type",["General", "G3GS1", "Scar20", "Scout", "Awp","Revolver", "Deagle"], 0)
UI.AddSliderInt(["Rage", "Min DMG", "SHEET_MGR", "Min DMG"], "Revolver mindamage override",0 , 130 )
UI.AddSliderInt(["Rage", "Min DMG", "SHEET_MGR", "Min DMG"], "Deagle mindamage override",0 ,130 )
UI.AddSliderInt(["Rage", "Min DMG", "SHEET_MGR", "Min DMG"], "Scout mindamage override",0 ,130 )
UI.AddSliderInt(["Rage", "Min DMG", "SHEET_MGR", "Min DMG"], "SCAR20 mindamage override",0 ,130 )
UI.AddSliderInt(["Rage", "Min DMG", "SHEET_MGR", "Min DMG"], "G3SG1 mindamage override",0 ,130 )
UI.AddSliderInt(["Rage", "Min DMG", "SHEET_MGR", "Min DMG"], "Awp mindamage override",0 ,130 )
UI.AddSliderInt(["Rage", "Min DMG", "SHEET_MGR", "Min DMG"], "General mindamage override",0 ,130 )

damage_values = function(_override_damage, _restore_damage) 
{
    this.override_damage = _override_damage;
    this.restore_damage = _restore_damage;
}

/* fucking gay damage values */
var general = new damage_values(UI.GetValue(["Rage", "Min DMG", "SHEET_MGR", "Min DMG", "General mindamage override"]), UI.GetValue(["Rage", "Target", "General", "Minimum damage"]));
var deagle = new damage_values(UI.GetValue(["Rage", "Min DMG", "SHEET_MGR", "Min DMG", "Deagle mindamage override"]), UI.GetValue(["Rage", "Target", "Deagle", "Minimum damage"]));
var revolver = new damage_values(UI.GetValue(["Rage", "Min DMG", "SHEET_MGR", "Min DMG", "Revolver mindamage override"]), UI.GetValue(["Rage", "Target", "Revolver", "Minimum damage"]));
var scout = new damage_values(UI.GetValue(["Rage", "Min DMG", "SHEET_MGR", "Min DMG", "Scout mindamage override"]), UI.GetValue(["Rage", "Target", "SSG08", "Minimum damage"]));
var awp = new damage_values(UI.GetValue(["Rage", "Min DMG", "SHEET_MGR", "Min DMG", "Awp mindamage override"]), UI.GetValue(["Rage","Target",  "AWP", "Minimum damage"]));
var scar20 = new damage_values(UI.GetValue(["Rage", "Min DMG", "SHEET_MGR", "Min DMG", "SCAR20 mindamage override"]), UI.GetValue(["Rage", "Target", "SCAR20", "Minimum damage"]));
var g3sg1 = new damage_values(UI.GetValue(["Rage", "Min DMG", "SHEET_MGR", "Min DMG", "G3SG1 mindamage override"]), UI.GetValue(["Rage", "Target", "G3SG1", "Minimum damage"]));


function on_cm()
{
    if (UI.IsMenuOpen())
    {
        if (UI.GetValue(["Rage", "General", "General", "Key assignment", "Damage Override"], "Damage Override") == 1)
            UI.ToggleHotkey(["Rage", "General", "General", "Key assignment", "Damage Override"], "Damage Override" == 0)

          /*
           we want to set our restore damage back to the original value
           this will only get called once each time the menu gets opened
          */
        if (!first_call)
        {
            UI.SetValue(["Rage", "Target", "General", "Minimum damage"], general.restore_damage);
            UI.SetValue(["Rage", "Target", "Deagle", "Minimum damage"],deagle.restore_damage);
            UI.SetValue(["Rage", "Target", "Revolver","Minimum damage"],  revolver.restore_damage);
            UI.SetValue(["Rage", "Target", "SSG08", "Minimum damage"], scout.restore_damage);
            UI.SetValue(["Rage", "Target", "AWP", "Minimum damage"], awp.restore_damage);
            UI.SetValue(["Rage", "Target", "SCAR20", "Minimum damage"], scar20.restore_damage);
			UI.SetValue(["Rage", "Target", "G3SG1", "Minimum damage"], g3sg1.restore_damage);

            first_call = true;
        }

        /*while you're in the menu you could make changes to either */
        /* the script sliders or the onetap damage sliders so we want to store both incase that happens */
        
        //store the restore damage values in a weapon object
        general.restore_damage = UI.GetValue(["Rage", "Target", "General", "Minimum damage"]);
        deagle.restore_damage = UI.GetValue(["Rage", "Target", "Deagle", "Minimum damage"]);
        revolver.restore_damage = UI.GetValue(["Rage", "Target", "Revolver", "Minimum damage"]);
        scout.restore_damage = UI.GetValue(["Rage", "Target", "SSG08", "Minimum damage"]);
        awp.restore_damage = UI.GetValue(["Rage", "Target", "AWP", "Minimum damage"]);
        scar20.restore_damage = UI.GetValue(["Rage", "Target", "SCAR20", "Minimum damage"]);
		g3sg1.restore_damage = UI.GetValue(["Rage", "Target", "G3SG1", "Minimum damage"]);

        //store the override damage values in the same objects
        general.override_damage = UI.GetValue(["Rage", "Min DMG", "SHEET_MGR", "Min DMG", "General mindamage override"]);
        deagle.override_damage = UI.GetValue(["Rage", "Min DMG", "SHEET_MGR", "Min DMG", "Deagle mindamage override"]);
        revolver.override_damage = UI.GetValue(["Rage", "Min DMG", "SHEET_MGR", "Min DMG", "Revolver mindamage override"]);
        scout.override_damage = UI.GetValue(["Rage", "Min DMG", "SHEET_MGR", "Min DMG", "Scout mindamage override"]);
        awp.override_damage = UI.GetValue(["Rage", "Min DMG", "SHEET_MGR", "Min DMG", "Awp mindamage override"]);
        scar20.override_damage = UI.GetValue(["Rage", "Min DMG", "SHEET_MGR", "Min DMG", "SCAR20 mindamage override"]);
		g3sg1.override_damage = UI.GetValue(["Rage", "Min DMG", "SHEET_MGR", "Min DMG", "G3SG1 mindamage override"]);

        /*so now  all weapon objects hold both the restore damage and the override damage */

        /*  this code will keep looping while the menu is open */
        /*so whenever you change something it will update live without fucking up and just reseting your mindamage to the old restore value*/
    }
    else
    {
        //whenever the menu is not open:
        //store if our hotkey is true or false in a variable
        var hotkey_state = (UI.GetValue(["Rage", "General", "General", "Key assignment", "Damage Override"], "Damage Override") == 1)

        /* set our actual minimum damage slider to either our restore damage or our override damage */
        
        UI.SetValue(["Rage", "Target", "General", "Minimum damage"], hotkey_state ? general.override_damage : general.restore_damage);
        UI.SetValue(["Rage", "Target", "Deagle", "Minimum damage"], hotkey_state ? deagle.override_damage : deagle.restore_damage);
        UI.SetValue(["Rage", "Target", "Revolver", "Minimum damage"], hotkey_state ? revolver.override_damage : revolver.restore_damage);
        UI.SetValue(["Rage", "Target", "SSG08", "Minimum damage"], hotkey_state ? scout.override_damage : scout.restore_damage);
        UI.SetValue(["Rage", "Target", "AWP", "Minimum damage"], hotkey_state ? awp.override_damage : awp.restore_damage);
        UI.SetValue(["Rage", "Target", "SCAR20", "Minimum damage"], hotkey_state ? scar20.override_damage : scar20.restore_damage);
		UI.SetValue(["Rage", "Target", "G3SG1", "Minimum damage"], hotkey_state ? g3sg1.override_damage : g3sg1.restore_damage);

        /* this code will keep looping */
        /*we want our script to set our damage sliders back to the restore damage when our menu is open so we can edit it*/
        /*setting first_call to false will trigger the if on line 31 again when the menu gets opened*/
        
        first_call = false;
    }
    script_debug()
}

function ondraw() {
//UI.SetEnabled(menuitems, "Mindamage override", rage_switch)


    var index = UI.GetValue(["Rage", "Min DMG", "SHEET_MGR", "Min DMG", "Weapon type"]);
    var rage_switch = true;
	var menuitems = (["Rage","SUBTAB_MGR", "Min DMG", "SHEET_MGR", "Min DMG"])

    UI.SetEnabled(menuitems, "Weapon type", rage_switch)
    
    UI.SetEnabled(menuitems.concat("General mindamage override"), index == 0 ? 1 : 0);

    UI.SetEnabled(menuitems.concat("G3SG1 mindamage override"),   index == 1 ? 1 : 0);

    UI.SetEnabled(menuitems.concat("SCAR20 mindamage override") ,  index == 2 ? 1 : 0); 

    UI.SetEnabled(menuitems.concat("Scout mindamage override"),  index == 3 ? 1 : 0);

    UI.SetEnabled(menuitems.concat( "Awp mindamage override"),  index == 4 ? 1 : 0);
   
    UI.SetEnabled(menuitems.concat("Revolver mindamage override"),  index == 5 ? 1 : 0);

    UI.SetEnabled(menuitems.concat("Deagle mindamage override"),  index == 6 ? 1 : 0);
  

     

    /* debug code 
    var heavymd = "" + UI.GetValue("Rage", "Revolver", ""Rage", "Target"", "Minimum damage") 
    var scoutmd = "" +UI.GetValue("Rage", "SCOUT", ""Rage", "Target"", "Minimum damage")
    var awpmd = "" +UI.GetValue("Rage", "AWP", ""Rage", "Target"", "Minimum damage")
    var SCAR20md = "" +UI.GetValue("Rage", "SCAR20", ""Rage", "Target"", "Minimum damage")
    var Deaglemd = "" +UI.GetValue("Rage", "Deagle", ""Rage", "Target"", "Minimum damage")
    var generalmd = "" +UI.GetValue("Rage", "GENERAL", ""Rage", "Target"", "Minimum damage")

    Cheat.Print("SCAR20 : " + SCAR20md + " Scout : " + scoutmd + " Awp : " + awpmd + " Revolvers : " + heavymd + " Deagles : " + Deaglemd + " Generals : " + generalmd + "\n") */
}

function script_debug()
{
    var heavymd = "" + UI.GetValue(["Rage", "Target", "Revolver", "Minimum damage"]) 
    var deaglemd = " " + UI.GetValue(["Rage", "Target", "Deagle", "Minimum damage"])
    var scoutmd = "" +UI.GetValue(["Rage", "Target", "SSG08", "Minimum damage"])
    var awpmd = "" +UI.GetValue(["Rage", "Target", "AWP", "Minimum damage"])
    var SCAR20md = "" +UI.GetValue(["Rage", "Target", "SCAR20", "Minimum damage"])
    var g3md = "" +UI.GetValue(["Rage", "Target", "G3SG1", "Minimum damage"])
    var generalmd = "" +UI.GetValue(["Rage", "Target", "General", "Minimum damage"])

    //Cheat.Print("SCAR20 : " + SCAR20md + " g3gs1 : " + g3md + " Scout : " + scoutmd + " Awp : " + awpmd + " Revolvers : " + heavymd + " Deagle : " + deaglemd + " Generals : " + generalmd + "\n")
}

//DMG Override -- End

//Cheat.Print( UI.GetValue(["Rage", "Anti Aim", "SHEET_MGR", "General", "Key assignment", "AA Direction inverter"]) + '\n')
//Cheat.Print( UI.GetChildren(["Rage", "Anti Aim", "SHEET_MGR", "General", "Key assignment"]) + '\n')
//Cheat.Print( UI.GetChildren(["Cheat", "SHEET_MGR", "General"]) + '\n')
//Cheat.Print( UI.GetChildren(["Rage", "Anti Aim", "SHEET_MGR", "Directions", "Yaw offset"]) + '\n')

//Callbacks -- Start

Cheat.RegisterCallback("CreateMove", "disableaaoverride")
Cheat.RegisterCallback("Draw", "drawmenu")
Cheat.RegisterCallback("Draw", "ondraw")
Cheat.RegisterCallback("Draw", "forceheadonkey")
Cheat.RegisterCallback("Draw", "watermark")
Cheat.RegisterCallback("Draw", "BetterDT")
Cheat.RegisterCallback("Draw", "strafeHelper")
Cheat.RegisterCallback("CreateMove", "on_cm")
Cheat.RegisterCallback("CreateMove", "legitaa")
Cheat.RegisterCallback("CreateMove", "LimFake")
Cheat.RegisterCallback("CreateMove", "JitterDelta")
Cheat.RegisterCallback("CreateMove", "on_create_move")
Cheat.RegisterCallback("CreateMove", "Freestanding")
Cheat.RegisterCallback("CreateMove","hp2")
Cheat.RegisterCallback("CreateMove", "schanger")
Cheat.RegisterCallback("CreateMove", "_TBC_CREATE_MOVE")
Cheat.RegisterCallback("Unload", "_TBC_UNLOAD")
Cheat.RegisterCallback("player_hurt", "playerhurt")
Cheat.RegisterCallback("bullet_impact", "onBulletImpact")

//Callbacks -- End