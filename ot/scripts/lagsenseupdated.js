UI.AddSubTab( ["Misc.", "SUBTAB_MGR"], "Lagsync")
UI.AddDropdown( ["Misc.", "Lagsync", "SHEET_MGR", "Lagsync"], "Lagsync",["On", "Off"],1);
UI.AddDropdown( ["Misc.", "Lagsync", "SHEET_MGR", "Lagsync"], "Lagsync mode", [ "Off", "Lagsync V1", "Lagsync V2", "Lagsync V3"],1);
UI.AddSliderInt( ["Misc.", "SUBTAB_MGR", "Lagsync", "SHEET_MGR", "Lagsync"], "                  ", 0, 0);
UI.AddSliderInt( ["Misc.", "SUBTAB_MGR", "Lagsync", "SHEET_MGR", "Lagsync"], "                  ", 0, 0);
UI.AddSliderFloat(["Misc.", "SUBTAB_MGR", "Lagsync", "SHEET_MGR", "Lagsync"], "SWITCH delay",0, 5);
UI.AddDropdown(["Misc.", "Lagsync", "SHEET_MGR", "Lagsync"], "Breaker", [ "Off", "Breaker V1", "Breaker V2" ],1);


var aa=1;
var aad=1;
var lasttime = Globals.Realtime();
var realtime = Globals.Realtime();
var yawoffset =UI.GetValue(["Rage", "Anti Aim", "SHEET_MGR", "Directions", "Yaw offset"]);
var jitteroffset =UI.GetValue(["Rage", "Anti Aim", "SHEET_MGR", "Directions", "Jitter offset"]);
var de=UI.GetValue(["Misc.", "Lagsync", "General", "SWITCH delay"]);
var status=UI.GetValue(["Misc.", "Lagsync", "General", "SWITCH delay"]);
var yawnewoffset;

function randomIntFrom(min,max) // Get a random integer from [min] to [max] 
{
    return Math.floor(Math.random()*(max-min+1)+min);
} 
// -------------------------------------------------------------------- LAGSYNC V1 --------------------------------------------------------------------
function V1(){
	// Disable Breaker
	UI.SetValue(["Misc.", "Lagsync"], "Breaker", 0);
	
	// Fake Angles
	
    UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Directions", "Yaw offset"], -10);
	UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Fake Angles", "Fake desync"], 1);
	UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Fake Angles", "Avoid overlap"], 0);
	UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Fake Angles", "Lower body yaw mode"], 0)
	UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Directions", "At targets"], 1)
	
	// Fake Lag
	
	UI.SetValue(["Rage", "Fake Lag", "SHEET_MGR", "Limit"], 15);
	
}
function V2(){
	
	// Fake Angles
	
    aUI.SetValue( ["Rage", "Anti Aim", "SHEET_MGR", "Directions", "Yaw offset"], -25);
	UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Fake Angles", "Lower body yaw mode"], 1);
	
	// Fake Lag
	
	UI.SetValue(["Rage", "Fake Lag", "SHEET_MGR", "Limit"], 5);
	
}
function V3(){
	
	// Fake Angles
	
//	UI.SetValue("Anti-Aim", "Fake angles", "LBY mode", 1);
	UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Fake Angles", "Lower body yaw mode"], 2);
	UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Fake Angles", "Fake desync"], 0);
	UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Fake Angles", "Avoid overlap"], 1);
	
	// Fake Lag
	
	UI.SetValue(["Rage", "Fake Lag", "SHEET_MGR", "Limit"], 9);
	
}
// -------------------------------------------------------------------- LAGSYNC V2 --------------------------------------------------------------------

function S1(){
	// Disable Breaker
	UI.SetValue(["Misc.", "Lagsync"], "Breaker", 0);

var	yawnewoffset = randomIntFrom(-10, -20);
	
	// Fake Angles
	
    UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Directions", "Yaw offset"], yawnewoffset);
	UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Fake Angles", "Fake desync"], 0);
	UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Fake Angles", "Lower body yaw mode"], 2);
	UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Directions", "At targets"], 1)
    UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Fake Angles", "Avoid overlap"], 1);
	
}
function S2(){
	// Disable Breaker

var	yawnewoffset = randomIntFrom(-10, -20);

	UI.SetValue(["Misc.", "Lagsync"], "Breaker", 0);
		UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Fake Angles", "Fake desync"], 1);
	UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Fake Angles", "Lower body yaw mode"], 2);
	
	// Fake Angles
	
    UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Directions", "Yaw offset"], yawnewoffset);
	
}
// -------------------------------------------------------------------- LAGSYNC V3 --------------------------------------------------------------------

function A1(){
	// Disable Breaker
	UI.SetValue(["Misc.", "Lagsync"], "Breaker", 0);
	
var	yawnewoffset = randomIntFrom(-20, 20);
	
    UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Directions", "Yaw offset"], yawnewoffset);
	UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Fake Angles", "Fake desync"], 1);
	UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Fake Angles", "Lower body yaw mode"], 2);
	UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Directions", "At targets"], 1)
	UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Fake Angles", "Avoid overlap"], 1);
	
	// Fake Lag
	
	UI.SetValue(["Rage", "Fake Lag", "SHEET_MGR", "Limit"], 15);
	
}
function A2(){
	// Disable Breaker
	UI.SetValue(["Misc.", "Lagsync"], "Breaker", 0);
	
var	yawnewoffset = randomIntFrom(-20, 20);
	
	// Fake Angles
	
    UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Directions", "Yaw offset"], yawnewoffset);
	UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Fake Angles", "Avoid overlap"], 0);
	UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Fake Angles", "Lower body yaw mode"], 1);
	UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Fake Angles", "Fake desync"], 1);
	
	// Fake Lag
	
	UI.SetValue(["Rage", "Fake Lag", "SHEET_MGR", "Limit"], 5);
	
}
function A3(){
	// Disable Breaker
	UI.SetValue(["Misc.", "Lagsync"], "Breaker", 0);
	
var	yawnewoffset = randomIntFrom(-20, 20);
	
	// Fake Angles
	
	UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Directions", "Yaw offset"], yawnewoffset);
    UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Fake Angles", "Lower body yaw mode"], 2);
	UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Fake Angles", "Fake desync"], 1);
	UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Fake Angles", "Avoid overlap"], 1);
	
	// Fake Lag
	
	UI.SetValue(["Rage", "Fake Lag", "SHEET_MGR", "Limit"], 9);
	
}
// -------------------------------------------------------------------- Breaker V1 --------------------------------------------------------------------

function BR1(){
	// Disable Lagsync
	UI.SetValue(["Misc.", "Lagsync"],"Lagsync mode", 0);
	
var	yawnewoffset = randomIntFrom(-10, -20);
	
    UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Directions", "Yaw offset"], yawnewoffset);
	UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Fake Angles", "Fake desync"], 0);
	UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Fake Angles", "Lower body yaw mode"], 0);
	UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Directions", "At targets"], 1)
	UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Fake Angles", "Avoid overlap"], 1);
	
	// Fake Lag
	
	UI.SetValue(["Rage", "Fake Lag", "SHEET_MGR", "Limit"], 15);
	
}
function BR2(){
	// Disable Lagsync
	UI.SetValue(["Misc.", "Lagsync"],"Lagsync mode", 0);
	
var	yawnewoffset = randomIntFrom(-15, -25);
	
	// Fake Angles
	
    UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Directions", "Yaw offset"], yawnewoffset);
	UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Fake Angles", "Avoid overlap"], 1);
	UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Fake Angles", "Lower body yaw mode"], 1);
	UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Fake Angles", "Fake desync"], 0);
	
	// Fake Lag
	
	UI.SetValue(["Rage", "Fake Lag", "SHEET_MGR", "Limit"], 5);
	
}
function BR3(){
	// Disable Lagsync
	UI.SetValue(["Misc.", "Lagsync"],"Lagsync mode", 0);

var	yawnewoffset = randomIntFrom(-10, -10);
	
	// Fake Angles
	
	UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Directions", "Yaw offset"], yawnewoffset);
    UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Fake Angles", "Lower body yaw mode"], 2);
	UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Fake Angles", "Fake desync"], 1);
	UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Fake Angles", "Avoid overlap"], 1);
	
	// Fake Lag
	
	UI.SetValue(["Rage", "Fake Lag", "SHEET_MGR", "Limit"], 9);
	
}

// ----------------------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------- Breaker V2 --------------------------------------------------------------------

function BRR1(){
	// Disable Lagsync
	UI.SetValue(["Misc.", "Lagsync"],"Lagsync mode", 0);
	
var	yawnewoffset = randomIntFrom(-10, -34);
	
    UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Directions", "Yaw offset"], yawnewoffset);
	UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Fake Angles", "Fake desync"], 1);
	UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Fake Angles", "Lower body yaw mode"], 2);
	UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Directions", "At targets"], 1)
	UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Fake Angles", "Avoid overlap"], 1);
	
	// Fake Lag
	
	UI.SetValue(["Rage", "Fake Lag", "SHEET_MGR", "Limit"], 15);
	
}
function BRR2(){
	// Disable Lagsync
	UI.SetValue(["Misc.", "Lagsync"],"Lagsync mode", 0);
	
var	yawnewoffset = randomIntFrom(-16, -7);
	
	// Fake Angles
	
    UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Directions", "Yaw offset"], yawnewoffset);
	UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Fake Angles", "Avoid overlap"], 0);
	UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Fake Angles", "Lower body yaw mode"], 2);
	UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Fake Angles", "Fake desync"], 1);
	
	// Fake Lag
	
	UI.SetValue(["Rage", "Fake Lag", "SHEET_MGR", "Limit"], 5);
	
}
function BRR3(){
	// Disable Lagsync
	UI.SetValue(["Misc.", "Lagsync"],"Lagsync mode", 0);
	
var	yawnewoffset = randomIntFrom(2, -4);
	
	// Fake Angles
	
	UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Directions", "Yaw offset"], yawnewoffset);
    UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Fake Angles", "Lower body yaw mode"], 2);
	UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Fake Angles", "Fake desync"], 1);
	UI.SetValue(["Rage", "Anti Aim", "SHEET_MGR", "Fake Angles", "Avoid overlap"], 1);
	
	// Fake Lag
	
	UI.SetValue(["Rage", "Fake Lag", "SHEET_MGR", "Limit"], 9);
	
}
// ----------------------------------------------------------------------------------------------------------------------------------------------------
function lagsyncmain() {
	mode=UI.GetValue(["Misc.", "Lagsync", "General", "Lagsync"]);
	breakermenu=UI.GetValue(["Misc.", "Lagsync", "General","Breaker"]);
	
	if (mode==0) { lagsyncdisable(); }
	if (mode==1) { lagsyncv2(); }
	if (mode==2) { lagsyncv1(); }
	if (mode==3) { lagsyncv3(); }
	
	if (breakermenu==0) { breakerdisable(); }
	if (breakermenu==1) { breakerv1(); }
	if (breakermenu==2) { breakerv2(); }
}
function breakerv1() {
	status=UI.GetValue(["Misc.", "Lagsync", "General","Lagsync"]);
    de=UI.GetValue(["Misc.", "Lagsync", "General","SWITCH delay"]);
    realtime = Global.Realtime();
//    Global.Print(String(realtime-lasttime));
    if(realtime-lasttime>=de){
//        Global.Print(String(realtime-lasttime));
        if(status==1){
            aad=aa+1;
            if(aad>3){
                aad=1;
            }
            aa=aad;
        }
        if(aa==1){
           BR1();
        }
        if(aa==2){
            BR2();
        }
        if(aa==3){
            BR3();
        }
        lasttime = realtime;
    }
    if(realtime<lasttime){
        lasttime = Global.Realtime();
        realtime = Global.Realtime();
    }
}


// --- THIS IS LAGSYNC V1 ---

function lagsyncv2() {
	status=UI.GetValue(["Misc."], "Lagsync");
    realtime = Globals.Realtime();
//    Cheat.Print(String(realtime-lasttime));
    if(realtime-lasttime>=de){
//        Cheat.Print(String(realtime-lasttime));
        
        if(status==1){
            aad=aa+1;
            if(aad>3){
                aad=1;
            }
            aa=aad;
//            Cheat.Print(String(aad));
        }
        if(aa==1){
            V1();
        }
        if(aa==2){
            V2();
        }
        if(aa==3){
            V3();
        }
        lasttime = realtime;
    }
    if(realtime<lasttime){
        lasttime = Globals.Realtime();
        realtime = Globals.Realtime();
    }
}
// --- THIS IS LAGSYNC V2 ---

function lagsyncv1() {
	status=UI.GetValue(["Misc."], "Lagsync");
    de=UI.GetValue(["Misc.", "SUBTAB_MGR", "Lagsync", "SHEET_MGR", "Lagsync"], "SWITCH delay");
    realtime = Globals.Realtime();
//    Cheat.Print(String(realtime-lasttime));
    if(realtime-lasttime>=de){
//        Cheat.Print(String(realtime-lasttime));
        if(status==1){
            aad=aa+1;
            if(aad>2){
                aad=1;
            }
            aa=aad;
//            Cheat.Print(String(aad));
        }
        if(aa==1){
           S1();
        }
        if(aa==2){
            S2();
        }
        lasttime = realtime;
    }
    if(realtime<lasttime){
        lasttime = Globals.Realtime();
        realtime = Globals.Realtime();
    }
}
// --- THIS IS LAGSYNC V3 ---

function lagsyncv3() {
	status=UI.GetValue(["Misc."], "Lagsync");
    de=UI.GetValue(["Misc.", "SUBTAB_MGR", "Lagsync", "SHEET_MGR", "Lagsync"], "SWITCH delay");
    realtime = Globals.Realtime();
//    Cheat.Print(String(realtime-lasttime));
    if(realtime-lasttime>=de){
//        Cheat.Print(String(realtime-lasttime));
        if(status==1){
            aad=1+Math.floor(Math.random()*3);
            aa=aad;
//            Cheat.Print(String(aad));
        }
        if(status==2){
            aad=aa+1;
            if(aad>3){
                aad=1;
            }
            aa=aad;
//            Cheat.Print(String(aad));
        }
        if(aa==1){
            A1();
        }
        if(aa==2){
            A2();
        }
        if(aa==3){
            A3();
        }
        lasttime = realtime;
    }
    if(realtime<lasttime){
        lasttime = Globals.Realtime();
        realtime = Globals.Realtime();
    }
}
function main(){
    status=UI.GetValue(["Misc."], "Lagsync");
    de=UI.GetValue(["Misc.", "SUBTAB_MGR", "Lagsync", "SHEET_MGR", "Lagsync"], "SWITCH delay");
    realtime = Globals.Realtime();
//    Cheat.Print(String(realtime-lasttime));
    if(realtime-lasttime>=de){
//        Cheat.Print(String(realtime-lasttime));
        if(status==1){
            aad=1+Math.floor(Math.random()*3);
            aa=aad;
//            Cheat.Print(String(aad));
        }
        if(status==2){
            aad=aa+1;
            if(aad>3){
                aad=1;
            }
            aa=aad;
//            Cheat.Print(String(aad));
        }
        if(aa==1){
            S1();
        }
        if(aa==2){
            S2();
        }
        if(aa==3){
            S3();
        }
        lasttime = realtime;
    }
    if(realtime<lasttime){
        lasttime = Globals.Realtime();
        realtime = Globals.Realtime();
    }
	
}
UI.SetValue(["Misc.", "Lagsync","YAW Offset #1"],yawoffset);
UI.SetValue(["Misc.", "Lagsync", "JITTER Offset #1"],jitteroffset);

Cheat.RegisterCallback("Draw", "lagsyncmain")