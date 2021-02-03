UI.AddCheckbox("The Better Doubletap");

var exploits = ["Rage", "Exploits"];
var rage_anti_aim = ["Anti-Aim", "Rage Anti-Aim"];

function drawDT()
{
    local_player = Entity.GetLocalPlayer();
    get_wp = Entity.GetWeapon(local_player);
    get_classname = Entity.GetClassName(get_wp);

    if ((get_classname == "CWeaponAWP" || get_classname == "CWeaponSSG08" || get_classname == "CWeaponTaser" || get_classname == "CWeaponSawedoff" || get_classname == "CWeaponNOVA" || get_classname == "CWeaponNOVA"))
    {
        UI.SetValue(exploits, "Doubletap", false);
    }
    else
    {
        UI.SetValue(exploits, "Doubletap", true);
    }
}

function onShot()
{
    local_player = Entity.GetLocalPlayer();
    get_wp = Entity.GetWeapon(local_player);
    get_classname = Entity.GetClassName(get_wp);
    ragebot_target = Event.GetInt("exploit");
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "The Better Doubletap"))
    {
        if (ragebot_target == 0)
        {
            UI.SetValue(exploits, "Doubletap instant", false);
            UI.SetValue(exploits, "Doubletap hitchance", 0);
            UI.SetValue(rage_anti_aim, "At targets", true);

        }
        else
        {
            UI.SetValue(rage_anti_aim, "At targets", false);
        }
        if (!UI.IsHotkeyActive(exploits, "Doubletap") || (ragebot_target == 1))
        {
            UI.SetValue(exploits, "Doubletap instant", true);
            UI.SetValue(exploits, "Doubletap hitchance", 19);
            UI.SetValue(rage_anti_aim, "At targets", true);
        }
        else
        {
            UI.SetValue(rage_anti_aim, "At targets", false);

        }
        if (!UI.IsHotkeyActive(exploits, "Doubletap instant"))
        {
            if (ragebot_target == 0)
            {
                UI.SetValue(exploits, "Doubletap instant", false);
                UI.SetValue(exploits, "Doubletap hitchance", 0);
                UI.SetValue(rage_anti_aim, "At targets", true);
            }
        }
        else
        {
            UI.SetValue(rage_anti_aim, "At targets", false);

        }
    }
}

function Start()
{
    UI.SetValue(exploits, "Doubletap instant", true);
}

function footStep()
{
    UI.SetValue(exploits, "Doubletap instant", true);
}

Global.RegisterCallback("Draw", "drawDT");
Global.RegisterCallback("ragebot_fire", "onShot");
Global.RegisterCallback("round_start", "Start");
Global.RegisterCallback("player_footstep", "footStep");