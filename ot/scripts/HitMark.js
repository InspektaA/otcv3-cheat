var disableTime;
var hitmarkerTime;
function draw() {
    var localplayer = Entity.GetLocalPlayer();
    if (!Entity.IsAlive(localplayer)) return;
    var screenSize = Global.GetScreenSize();
    var sx = screenSize[0] / 2;
    var sy = screenSize[1] / 2;
    if (disableTime > Global.Curtime()) {
        var color = UI.GetColor("Misc", "JAVASCRIPT", "Script items", "Hitmarker color");
        var a = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Hitmarker deadzone");
        var p = (disableTime - Global.Curtime()) / hitmarkerTime;
        if (!UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Hitmarker fade")) p = 1;
        var b = a + (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Hitmarker size") * p);
        color[3] *= p;
        Render.Line(sx - b, sy - b, sx - a, sy - a, color); //LU
        Render.Line(sx - b, sy + b, sx - a, sy + a, color); //LD
        Render.Line(sx + b, sy + b, sx + a, sy + a, color); //RD
        Render.Line(sx + b, sy - b, sx + a, sy - a, color); //RU
    }
} function damage() {
    var attacker = Event.GetString("attacker");
    var attackerplayer = Entity.GetEntityFromUserID(attacker)
    var localplayer = Entity.GetLocalPlayer();
    var time = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Hitmarker time");
    if (attackerplayer == localplayer) {
        disableTime = Global.Curtime() + time;
        hitmarkerTime = time;
    }
} function setup() {
    UI.AddSliderFloat("Hitmarker time", 0.0, 3.0);
    UI.AddSliderInt("Hitmarker deadzone", 0, 50);
    UI.AddSliderInt("Hitmarker size", 0, 50);
    UI.AddColorPicker("Hitmarker color");
    UI.AddCheckbox("Hitmarker fade");

    UI.SetColor("Misc", "JAVASCRIPT", "Script items", "Hitmarker color", [255,255,255,255]);
    UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Hitmarker deadzone", 5);
    UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Hitmarker size", 6);
    UI.SetValue("Misc", "JAVASCRIPT", "Script items", "Hitmarker time", .55);
    Cheat.RegisterCallback("player_hurt", "damage");
    Cheat.RegisterCallback("Draw", "draw");  
} setup();

