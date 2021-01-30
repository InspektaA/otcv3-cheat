UI.AddHotkey("Extend")

function ext_on_key() {
    if (UI.IsHotkeyActive("Script items", "Extend")) {
        UI.SetValue ("Anti-Aim", "Legit Anti-Aim", "Extend angle", true)
        
    } else {
        UI.SetValue ("Anti-Aim", "Legit Anti-Aim", "Extend angle", false)
    }   
} ext_on_key();

function indicator(){
    if(UI.GetValue ("Anti-Aim", "Legit Anti-Aim", "Extend angle", true)) {
        Render.String( 125, 992 -5, 0, "AA", [0, 255, 0, 1505], 4)
    } else {
        Render.String( 125, 992 -5, 0, "AA", [255, 0, 0, 1505], 4)
    }   

}
Cheat.RegisterCallback("CreateMove", "ext_on_key");
Cheat.RegisterCallback("Draw", "indicator");


