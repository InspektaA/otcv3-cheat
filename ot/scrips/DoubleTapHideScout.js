

function DisableExploits()
{
    localplayer_index = Entity.GetLocalPlayer( );
    localplayer_weapon = Entity.GetWeapon(localplayer_index);
    weapon_name = Entity.GetName(localplayer_weapon);
}

function Exploits()
{

    var scriptitems = ["Misc", "JAVASCRIPT", "Script Items"];
    var enableddt = UI.GetValue(scriptitems, "dt on auto (only)");
    var enabledhs = UI.GetValue(scriptitems, "hs on auto (only)");

if(enableddt){

if(weapon_name == "g3sg1") {
    UI.SetValue("Rage", "Exploits", "Doubletap", true);
}

if(weapon_name == "scar 20") {
    UI.SetValue("Rage", "Exploits", "Doubletap", true);
}

if(weapon_name == "ssg 08") {
    UI.SetValue("Rage", "Exploits", "Doubletap", false);
}

if(weapon_name == "awp") {
    UI.SetValue("Rage", "Exploits", "Doubletap", false);
}

if(weapon_name == "r8 revolver") {
    UI.SetValue("Rage", "Exploits", "Doubletap", false);
}
}

if(enabledhs){

if(weapon_name == "g3sg1") {
    UI.SetValue("Rage", "Exploits", "Hide shots", true);
}

if(weapon_name == "scar 20") {
    UI.SetValue("Rage", "Exploits", "Hide shots", true);
}

if(weapon_name == "ssg 08") {
    UI.SetValue("Rage", "Exploits", "Hide shots", true);
}

if(weapon_name == "awp") {
    UI.SetValue("Rage", "Exploits", "Hide shots", false);
}

if(weapon_name == "r8 revolver") {
    UI.SetValue("Rage", "Exploits", "Hide shots", false);
}
}


}

function main()
{

UI.AddLabel("-----------------------------------------");
UI.AddCheckbox("dt on auto (only)");
UI.AddCheckbox("hs on auto (only)");
UI.AddLabel("by LukazEL#5695 & Kizera#6078")
UI.AddLabel("-----------------------------------------");

Cheat.RegisterCallback("Draw", "Exploits");
Cheat.RegisterCallback("Draw", "DisableExploits");
}
main()



