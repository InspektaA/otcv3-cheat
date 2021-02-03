

function loopFunc() {   
    darkness = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Darkness:");
    rainbowCol = HSVtoRGB(Global.Realtime() * UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Speed:"), 1, 1);
 
    if (UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enabled:")) {
        Convar.SetFloat('mat_ambient_light_r', (rainbowCol.r  - darkness) / 100);
        Convar.SetFloat('mat_ambient_light_g', (rainbowCol.g  - darkness) / 100);
        Convar.SetFloat('mat_ambient_light_b', (rainbowCol.b  - darkness) / 100);
    }
    else {
        Convar.SetFloat('mat_ambient_light_r', (0));
        Convar.SetFloat('mat_ambient_light_g', (0));
        Convar.SetFloat('mat_ambient_light_b', (0));
    }
    
    

}

function main() {
    UI.AddCheckbox("Enabled:");
    
    UI.AddSliderInt("Darkness:", 0, 255);
    UI.AddSliderFloat("Speed:", 0, 3);
    
    Cheat.RegisterCallback("CreateMove", "loopFunc");
}

main();

function HSVtoRGB(h, s, v)
{
    var r, g, b, i, f, p, q, t;

    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);

    switch (i % 6)
    {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }

    return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
}

