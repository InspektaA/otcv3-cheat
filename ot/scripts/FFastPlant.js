var local = Entity.GetLocalPlayer();
var plant_time = 0;

UI.AddCheckbox("Fast Plant");
UI.AddHotkey("Fast Plant Key");
UI.AddColorPicker("Fast Plant Indicator Enabled");
UI.AddColorPicker("Fast Plant Indicator Planting");

function plant() {
    if (!UI.GetValue("Script items", "Fast Plant") || !UI.IsHotkeyActive("Script items", "Fast Plant Key")) {
        local = Entity.GetLocalPlayer();
        inSite = false;
        isHoldingBomb = false;
        if (plant_time != 0) {
            Cheat.ExecuteCommand("-use");
            plant_time = 0;
        }
        return;
    }

    inSite = Entity.GetProp(local, "CCSPlayer", "m_bInBombZone");
    isHoldingBomb = Entity.GetName(Entity.GetWeapon(local)) == "c4 explosive";


    if (inSite && Entity.IsAlive(local) && isHoldingBomb && plant_time == 0) {
        Cheat.ExecuteCommand("+use");
        plant_time = Globals.Curtime();
    }

    if ((Globals.Curtime() - plant_time >= 3 && plant_time != 0)) {
        Cheat.ExecuteCommand("-use");
        plant_time = 0;
    }

    active_color = UI.GetColor("Script items", "Fast Plant Indicator Enabled");
    plant_color = UI.GetColor("Script items", "Fast Plant Indicator Planting");
    screen_size = Render.GetScreenSize();
    font = Render.AddFont("Arial Black", 20, 100);
    Render.StringCustom(22, screen_size[1] - 100, 0, "PLANT", (plant_time == 0) ? active_color : plant_color, font);
}

Cheat.RegisterCallback("Draw", "plant");