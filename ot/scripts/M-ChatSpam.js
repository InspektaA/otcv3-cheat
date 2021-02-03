var groups = [
    [
        " ",
        "hhh",
        "huh",
        "Chat Clear",
        "1",
    ],
    [
        " ",
        "hhh",
        "huh",
        "﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽ ﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽ ﷽﷽ ﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽ ﷽﷽ ﷽﷽﷽ ﷽﷽",
        "1",
    ],
    [
        " ",
        "chat",
        "go",
        "rush",
        "help",  //Statements
    ]
];

UI.AddSliderInt("                   Chat V7", 0, 0);
UI.AddLabel("-----------------------------------------");
UI.AddCheckbox("ChatEnabled");
UI.AddDropdown("Select thesaurus", ["Disabled", "hhh", "huh", "Chat Clear","1"]);  //Set the group name and order here. The first item cannot be modified.
UI.AddSliderInt("Delay", 42, 150);
UI.AddLabel("-----------------------------------------");

var Freeze_time = Global.Tickcount();
var i = 0;

function hsv_to_rgb(h, s, v) {  //RGB palette
    var r, g, b;
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}

function draw1(x2, y2, width2, height2) {  //Add visible box
    var rgbcolor = hsv_to_rgb(Global.Realtime() * UI.GetValue(), 1, 1);

    Render.Rect(x2 + 45, y2 + 2, width2 + 60, height2 + -21, [rgbcolor.g, rgbcolor.b, rgbcolor.r, 200]);
    Render.FilledRect(x2 + 46, y2 + 3, width2 + 58, height2 + -23, [55, 55, 55, 200]);
    Render.Rect(x2 + 50, y2 + 43, width2 - -50, height2 + -68, [rgbcolor.g, rgbcolor.b, rgbcolor.r, 200]);
    Render.FilledRect(x2 + 51, y2 + 44, width2 - -48, height2 - 70, [30, 30, 30, 200]);
}

function draw2() {  //Add text in visible boxes
    var isEnabled = UI.GetValue("ChatEnabled");
    var tag = UI.GetString("Select thesaurus");
    if (isEnabled) {
        x1 = 120;
        y1 = 400;
        draw1(x1 - 150, y1, 140, 100);
        Render.String(x1 + -96, y1 + 8, 0, "Chat :", [26, 230, 148, 255], 22);
        Render.String(x1 + -96, y1 + 52, 0, tag, [255, 255, 255, 255], 12);
    }
}

Global.RegisterCallback("Draw", "draw2")

function main() {  //Main function code
    var tag = UI.GetValue("Select thesaurus");
    var group = groups[tag - 1];
    var curTickCount = Global.Tickcount();
    var isEnabled = UI.GetValue("ChatEnabled");

    UI.SetEnabled("Select thesaurus", isEnabled);
    UI.SetEnabled("Delay", isEnabled);

    if (tag == 0) return;
    if (i > (group.length - 1)) i = 0;

    if (isEnabled) {  //Show when button is enabled
        if (curTickCount - Freeze_time > (UI.GetValue("Delay"))) {
            Global.ExecuteCommand("say " + group[i]);
            Freeze_time = curTickCount;
            i++;
        }
    }
}

Global.RegisterCallback("Draw", "main")