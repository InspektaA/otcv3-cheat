    var screensize = Global.GetScreenSize();
    UI.AddCheckbox("Anti-Aim");
    UI.AddSliderInt(" X", -45, screensize[0]);
    UI.AddSliderInt(" Y", 0, screensize[1]);
    UI.AddColorPicker("Text");
    UI.AddColorPicker("Underline");
    UI.SetColor("Script items", "Text", [255, 255, 255, 255]);
    UI.SetColor("Script items", "Underline", [255, 255, 255, 255]);

function values(name) {
    var value = UI.GetValue("MISC", "JAVASCRIPT", "Script items", name);
    return value;
}
function AntiHit() {
         Color = UI.GetColor("Script items","Text");
         Color2 = UI.GetColor("Script items","Underline");
         x = values(" X");
         y = values(" Y");
        var lp = Entity.GetLocalPlayer();
        var velocity = Math.round(getVelocity(lp)).toString();
        var b = Math.sqrt( 255 + velocity)
        var a = Math.sqrt( 255 + velocity + b)

    if (!UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "Anti-Aim"))

        return;

        Render.String(x + 78, y + 13, 0, "Anti-Aim", Color, 4, 3);
        Render.Line( x + 78, y + 26, x + 134, y + 26, Color2 );
        Render.Circle( x + 84, y + 35, 4, [ b, a, 0, 225 ] );
        Render.Circle( x + 84, y + 35, 5, [ b, a, 0, 55 ] );
        Render.Circle( x + 84, y + 35, 6, [ b, a, 0, 25 ] );
        if (b < 55) {
            Render.String(x + 96, y + 29, 0, "Good", [0, 232, 2, 255], 4, 3);
        }else if(b < 205) {
            Render.String(x + 96, y + 29, 0, "Alright", [180, 212, 2, 255], 4, 3);
        }else if (b > 225) {
        Render.String(x + 96, y + 29, 0, "Bad", [240, 102, 2, 255], 4, 3);
        }else {
        Render.String(x + 96, y + 29, 0, "Not Alive", [4, 2, 2, 255], 4, 3);
        }
}

function getVelocity(index) {
    players = Entity.GetPlayers();
    for (i=0; i < players.length; i++) {
        var velocity = Entity.GetProp( index, "CBasePlayer", "m_vecVelocity[0]" );
        var speed = Math.sqrt( velocity[0] * velocity[0] + velocity[1] * velocity[1] );
    }
    return speed;
}

Global.RegisterCallback("Draw", "AntiHit");