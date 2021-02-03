
// BlorpGneezer#8932 https://www.onetap.com/members/mredoz.60729/
																												// Ignore the Underscores, ^, and v its a way for me to know where the functions/options/aa end and start easier

																												//______________________Start of Menu													vvvvvvvvvvvvvvvvvvvv
		UI.AddSubTab(["Config", "SUBTAB_MGR"], "Anti-Aim++");

		//UI.AddLabel("=========Advanced AA=========");	
		UI.AddSliderInt(["Config", "Anti-Aim++", "Anti-Aim++"], "--Advanced AA--", 0, 0);								
		UI.AddHotkey(["Config", "Scripts", "Keys", "JS Keybinds"], "Random Invert", "");
		UI.AddSliderInt(["Config", "Anti-Aim++", "Anti-Aim++"], "Random Invert Chance  : ", 0, 100);
		
		//UI.AddLabel("========Fake Offset========");	
		UI.AddSliderInt(["Config", "Anti-Aim++", "Anti-Aim++"], "--Fake Offset--", 0, 0);
		UI.AddSliderInt(["Config", "Anti-Aim++", "Anti-Aim++"], "Fake Offset", -55, 55);	
		UI.AddCheckbox(["Config", "Anti-Aim++", "Anti-Aim++"], "Random Fake Offset" );

		//UI.AddLabel("=========Real Sway=========");
		UI.AddSliderInt(["Config", "Anti-Aim++", "Anti-Aim++"], "--Real Sway--", 0, 0);
		UI.AddSliderInt(["Config", "Anti-Aim++", "Anti-Aim++"], "Real Sway Angle A", -65, 65);
		UI.AddSliderInt(["Config", "Anti-Aim++", "Anti-Aim++"], "Real Sway Angle B", -65,65);
		UI.AddSliderInt(["Config", "Anti-Aim++", "Anti-Aim++"], "Real Sway Speed", 0, 10);	

		//UI.AddLabel("=========LBY Sway=========");
		UI.AddSliderInt(["Config", "Anti-Aim++", "Anti-Aim++"], "--LBY Sway--", 0, 0);
		UI.AddSliderInt(["Config", "Anti-Aim++", "Anti-Aim++"], "LBY Sway Angle A", -55, 55);
		UI.AddSliderInt(["Config", "Anti-Aim++", "Anti-Aim++"], "LBY Sway Angle B", -55, 55);
		UI.AddSliderInt(["Config", "Anti-Aim++", "Anti-Aim++"], "LBY Sway Speed", 0, 5);
		
		//UI.AddLabel("=======Yaw & Jitter=======");
		UI.AddSliderInt(["Config", "Anti-Aim++", "Anti-Aim++"], "--Yaw & Jitter--", 0, 0);
		UI.AddSliderInt(["Config", "Anti-Aim++", "Anti-Aim++"], "Additional Yaw", -30, 30);
		UI.AddSliderInt(["Config", "Anti-Aim++", "Anti-Aim++"], "Yaw & Jitter", -30, 30);
		UI.AddCheckbox(["Config", "Anti-Aim++", "Anti-Aim++"], "Random Yaw & Jitter" );

		//UI.AddLabel("=======FakeLag=======");
		UI.AddSliderInt(["Config", "Anti-Aim++", "Anti-Aim++"], "--FakeLag--", 0, 0);
		UI.AddSliderInt(["Config", "Anti-Aim++", "Anti-Aim++"], "Fakelag Max", 0, 6);
		UI.AddSliderInt(["Config", "Anti-Aim++", "Anti-Aim++"], "Fakelag Min", 0, 6);
		UI.AddSliderInt(["Config", "Anti-Aim++", "Anti-Aim++"], "Fakelag Speed", 0, 200);
		UI.AddCheckbox(["Config", "Anti-Aim++", "Anti-Aim++"], "FakeLag On Move" );
		UI.AddCheckbox(["Config", "Anti-Aim++", "Anti-Aim++"], "Fakelag On Auto Stop" );

		//UI.AddLabel("=======Anti-Brute=======");
		UI.AddSliderInt(["Config", "Anti-Aim++", "Anti-Aim++"], "--Anti-Brute--", 0, 0);
		UI.AddCheckbox(["Config", "Anti-Aim++", "Anti-Aim++"], "On Hurt" );
		UI.AddCheckbox(["Config", "Anti-Aim++", "Anti-Aim++"], "On Enemy Shot" );
		UI.AddCheckbox(["Config", "Anti-Aim++", "Anti-Aim++"], "On shot desync" );	
		UI.AddSliderInt(["Config", "Anti-Aim++", "Anti-Aim++"], "Ignore Brute", 0, 3);
		UI.AddSliderInt(["Config", "Anti-Aim++", "Anti-Aim++"], "BreakLeg Speed", 0, 40);
		//UI.AddLabel("=========Advanced AA=========");
	
																												//______________________End of Menu															^^^^^^^^^^^^^^^^^^^^
var real = -60;
var up = true
var LBY = -60;
var down = true
var Fakelag = true
var Loop = 1;
var Loop2 = 1;
var Shot = 0;
var BreakLeg = true

function RandomInvert () {	
var InvertChance =	(UI.GetValue(["Config", "Anti-Aim++", "Anti-Aim++", "Random Invert Chance  : "]))				//______________________Inverter spam 														vvvvvvvvvvvvvvvvvvvv
	if (UI.GetHotkeyState(["Config", "Scripts", "Keys", "Random Invert"]) == "Always" || UI.GetHotkeyState(["Config", "Scripts", "Keys", "Random Invert"]) == "Hold") {												// I want it to work when I slow walk so i have it OnKey
		if((Math.floor(Math.random() * InvertChance)) == 1){
			UI.ToggleHotkey(["Rage", "Anti Aim", "General", "AA Direction inverter"]);
		}
	}
}																												//______________________Inverter Spam						 								^^^^^^^^^^^^^^^^^^^^

function LBYsway () {																							//______________________LBY SWAY															vvvvvvvvvvvvvvvvvvvv
var speed2 = (UI.GetValue(["Config", "Anti-Aim++", "Anti-Aim++", "LBY Sway Speed"]))
var AngleC = (UI.GetValue(["Config", "Anti-Aim++", "Anti-Aim++", "LBY Sway Angle A"]))							// ANGLE A HAS TO BE HIGHER THAN ANGLE B
var AngleD = (UI.GetValue(["Config", "Anti-Aim++", "Anti-Aim++", "LBY Sway Angle B"]))							// ANGLE A HAS TO BE HIGHER THAN ANGLE B
AngleD = 0 - AngleD;
	if  (down === true) {
			if (LBY <= AngleC && down == true) {
				LBY = LBY + speed2;																				//speed is number to subtract by, the higher, the faster
			}
		if (LBY >= AngleC) {
			down = false;
		}
	}
	if (down == false) {
			if (LBY >= -AngleD && down == false) {
				LBY = LBY - speed2;																				//speed is number to subtract by, the higher, the faster
			}
		if ( LBY <= -AngleD){	
			down = true;
		}
	}
}																												//______________________LBY SWAY															^^^^^^^^^^^^^^^^^^^^

function realsway () {																							//______________________REAL SWAY															vvvvvvvvvvvvvvvvvvvv
var speed = (UI.GetValue(["Config", "Anti-Aim++", "Anti-Aim++", "Real Sway Speed"]))
var AngleA = (UI.GetValue(["Config", "Anti-Aim++", "Anti-Aim++", "Real Sway Angle A"]))							// ANGLE C HAS TO BE HIGHER THAN ANGLE D
var AngleB = (UI.GetValue(["Config", "Anti-Aim++", "Anti-Aim++", "Real Sway Angle B"]))							// ANGLE C HAS TO BE HIGHER THAN ANGLE D
AngleB = 0 - AngleB;
	if  (up === true) {
			if (real <= AngleA && up == true) {
				real = real + speed;																			//speed is number to subtract by, the higher, the faster
			}
		if (real >= AngleA) {
			up = false;
		}	
	}
	if (up == false) {
			if (real >= -AngleB && up == false) {
				real = real - speed;																			//speed is number to subtract by, the higher, the faster
			}	
		if ( real <= -AngleB){	
			up = true;
		}
	}
}																												//______________________REAL SWAY															^^^^^^^^^^^^^^^^^^^^

function Options () {
	var AddYaw = UI.GetValue(["Config", "Anti-Aim++", "Anti-Aim++", "Additional Yaw"])
	var MaxYaw = UI.GetValue(["Config", "Anti-Aim++", "Anti-Aim++", "Yaw & Jitter"])								//______________________JITTER START														vvvvvvvvvvvvvvvvvvvv
	var MinYaw = 0 - UI.GetValue(["Config", "Anti-Aim++", "Anti-Aim++", "Yaw & Jitter"])
	var yaw = Math.random() * (MaxYaw - MinYaw) + MinYaw;														//yaw is a random number in between YawA and YawB		UI.SetValue("Anti-Aim", "Rage Anti-Aim", "Yaw offset", yaw);

	var RandomYawJitter = UI.GetValue(["Config", "Anti-Aim++", "Anti-Aim++", "Random Yaw & Jitter"])

	if (RandomYawJitter == 1 ) {
		UI.SetValue(["Rage", "Anti Aim", "Directions", "Jitter offset"], yaw + AddYaw);
		UI.SetValue(["Rage", "Anti Aim", "Directions", "Jitter offset"], yaw + AddYaw);
	}else {
		UI.SetValue(["Rage", "Anti Aim", "Directions", "Jitter offset"], MaxYaw);
		UI.SetValue(["Rage", "Anti Aim", "Directions", "Jitter offset"], MaxYaw);
	}
																												//______________________Jitter End															^^^^^^^^^^^^^^^^^^^^

	var MaxFake = UI.GetValue(["Config", "Anti-Aim++", "Anti-Aim++", "Fake Offset"])								//______________________Fake offset START													vvvvvvvvvvvvvvvvvvvv
	var MinFake = 0 - MaxFake ;
	var offset = Math.random() * (MaxFake - MinFake) + MinFake;
	
	var RandomFakeOffset = UI.GetValue(["Config", "Anti-Aim++", "Anti-Aim++", "Random Fake Offset"])
	
		
	if (RandomFakeOffset == true ) {
		AntiAim.SetFakeOffset(offset)
	}else {
		AntiAim.SetFakeOffset(MaxFake)
	}																											//______________________Fake offset END  													^^^^^^^^^^^^^^^^^^^^
	
	var FakeLagSpeed = UI.GetValue(["Config", "Anti-Aim++", "Anti-Aim++", "Fakelag Speed"])						//______________________Fakelag Start														vvvvvvvvvvvvvvvvvvvv
	UI.SetValue(["Rage", "Fake Lag", "General", "Enabled"], 1);
	if (Fakelag === false) {
		var MaxFakelag = UI.GetValue(["Config", "Anti-Aim++", "Anti-Aim++", "Fakelag Max"])							
		if ( Loop > FakeLagSpeed ){																				// The higher the FakeLag speed the less Often you get MinFakelag
			UI.SetValue(["Rage", "Fake Lag", "General", "Limit"], MaxFakelag);
			Loop = 0
		}
		Loop = Loop + 1 ;
		Fakelag = true;
	}
	if (Fakelag === true) {
		var MinFakelag = UI.GetValue(["Config", "Anti-Aim++", "Anti-Aim++", "Fakelag Min"])
		if ( Loop > FakeLagSpeed ){																				// The higher the FakeLag speed the less Often you get MinFakelag
			UI.SetValue(["Rage", "Fake Lag", "General", "Limit"], MinFakelag);
			Loop = 0
		}
		Loop = Loop + 1 ;
		Fakelag = false
																												//______________________FakeLag End															^^^^^^^^^^^^^^^^^^^^
	}
}

 function antiaim () {
	if(UI.GetHotkeyState(["Rage", "Anti Aim", "General", "AA Direction inverter"])){
			AntiAim.SetOverride(1)
			AntiAim.SetRealOffset(real)
			AntiAim.SetLBYOffset(LBY) 
	}else{
			AntiAim.SetOverride(1)
			AntiAim.SetRealOffset(0 - real)																		// Inverted aa
			AntiAim.SetLBYOffset(0 - LBY)																		// Inverted aa
    }
}

function onUnload() {
    AntiAim.SetOverride(0);
}
																												//______________________BruteForce Start													vvvvvvvvvvvvvvvvvvvv
																												// anti brute on hit
function Brute(){
	if ( UI.GetValue(["Config", "Anti-Aim++", "Anti-Aim++", "On Hurt"]) == 1 ) {
        UI.ToggleHotkey(["Rage", "Anti Aim", "General", "AA Direction inverter"])
	}
}
																												// anti brute on shot Pasted from:  https://www.onetap.com/threads/help-detect-bullet-tracer.22489/
function on_bullet_impact(){	
																				// 	Thanks to : https://www.onetap.com/members/alphanine.2437/
																			
	var Ignore = UI.GetValue(["Config", "Anti-Aim++", "Anti-Aim++", "Ignore Brute"]) 
	var Onshot_on = UI.GetValue(["Config", "Anti-Aim++", "Anti-Aim++", "On Enemy Shot"])
	if ( Onshot_on == 1 ) {
		var entity_index = Entity.GetEntityFromUserID(Event.GetInt("userid"));
		if(Entity.IsEnemy(entity_index)){
			Shot =	Shot + 1;
			if ( Shot > Ignore ) {
				UI.ToggleHotkey(["Rage", "Anti Aim", "General", "AA Direction inverter"]);
				Cheat.Print("Inverted");
				Shot = 0;
			}
		}
	}
}
																												//______________________BruteForce End														^^^^^^^^^^^^^^^^^^^^
function Functions (){
	antiaim ();
	realsway ();
	LBYsway ();
	RandomInvert ();
	Options();
	BreakLegSpam();
	clantag();
}

function BreakLegSpam () {
	
	var Amount = 10 * UI.GetValue(["Config", "Anti-Aim++", "Anti-Aim++", "BreakLeg Speed"])
	if (BreakLeg == 1) {
		if ( Loop2 > Amount ) {
			UI.SetValue(["Misc\." , "Movement" , "General" , "Slide walk"], 1 )
			Loop2 = 0;
			BreakLeg = false
		}
	}else if (BreakLeg == 0) {
		if ( Loop2 > Amount ){ 
			UI.SetValue(["Misc\." , "Movement" , "General" , "Slide walk"], 0 )
			Loop2 = 0;
			BreakLeg = true
		}
	}
	//UI.GetValue(Loop2); //debug
	Loop2 = Loop2 + 1;
}

function getVelocity(index) {
    var velocity = Entity.GetProp(index, 'CBasePlayer', 'm_vecVelocity[0]');
    return Math.sqrt(velocity[0] * velocity[0] + velocity[1] * velocity[1]);
}

function clantag() {
	var velocity = getVelocity(Entity.GetLocalPlayer())
	if (UI.GetValue(["Config", "Anti-Aim++", "Anti-Aim++", "FakeLag On Move"]) == 1){
		if ( velocity > 90 ) {
			UI.SetValue(["Rage", "Fake Lag", "General", "Limit"], UI.GetValue(["Config", "Anti-Aim++", "Anti-Aim++", "Fakelag Min"]));
		//	UI.GetValue(velocity)  //testing
		}
	} 
	if (UI.GetValue(["Config", "Anti-Aim++", "Anti-Aim++","Fakelag On Auto Stop"]) == 1){
		if ( velocity < 90 ) {
			UI.SetValue(["Rage", "Fake Lag", "General", "Limit"], 6 );
			
		}
	}
}
function OnFire (){
	if ( UI.GetValue(["Config", "Anti-Aim++", "Anti-Aim++","On shot desync"])) {
		UI.SetValue(["Rage", "Fake Lag", "General", "Limit"], 0);
		UI.ToggleHotkey(["Rage", "Anti Aim", "General", "AA Direction inverter"]);
	}
}

		


																												//Cheat.register
																												
																												
Cheat.RegisterCallback("bullet_impact", "on_bullet_impact");
Cheat.RegisterCallback("player_hurt", "Brute")
Cheat.RegisterCallback("Unload", "onUnload");
Cheat.RegisterCallback("Draw", "Functions");
Cheat.RegisterCallback("ragebot_fire", "OnFire");


// BlorpGneezer#8932 https://www.onetap.com/members/mredoz.60729/
