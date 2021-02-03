//         ______    _____      ___  ___          _            
//         | ___ \  /  __ \     |  \/  |         | |           
//     ___ | |_/ /__| /  \/___  | .  . | __ _ ___| |_ ___ _ __ 
//    / __||  __/ _ \ |   / __| | |\/| |/ _` / __| __/ _ \ '__|
//    \__ \| | |  __/ \__/\__ \ | |  | | (_| \__ \ ||  __/ |   
//    |___/\_|  \___|\____/___/ \_|  |_/\__,_|___/\__\___|_|                                                           
//     _____           _       _           _____ 
//    /  ___|         (_)     | |         |____ |
//    \ `--.__ __ __ _ _ __   | |_  __   __   / /
//     `--. \/ __| '__| | '_ \| __| \ \ / /   \ \
//    /\__/ / (__| |  | | |_) | |_   \ V /.___/ /
//    \____/ \___|_|  |_| .__/ \__|   \_/ \____/ 
//                      | |                      
//                      |_|                      


const path = {
    "Master": ["Legit", "sPeC's Semirage", "sPeC's Semirage"],

    "Legit": ["Legit", "General", "General", "Enabled"],
    "lAntiAim": ["Legit", "Anti Aim", "General", "Enabled"],
    "extendAngle": ["Legit", "Anti Aim", "General", "Extend angle"],
    "legitInverter": ["Legit", "General", "General", "Key assignment", "AA Direction inverter"],
    "lFakeLag": ["Legit", "Fake Lag", "General", "Enabled"],
    "lFLLimit": ["Legit", "Fake Lag", "General", "Limit"],
    "lFLJitter": ["Legit", "Fake Lag", "General", "Jitter"],
    "lFLTrigLimit": ["Legit", "Fake Lag", "General", "Trigger limit"],
    "lFLTrigs": ["Legit", "Fake Lag", "General", "Triggers"],

    "Rage": ["Rage", "General", "General", "Enabled"],
    "forceBaim": ["Rage", "General", "General", "Key assignment", "Force body aim"],
    "rAntiAim": ["Rage", "Anti Aim", "General", "Enabled"],
    "rAAPitch": ["Rage", "Anti Aim", "General", "Pitch mode"],
    "rageInverter": ["Rage", "Anti Aim", "General", "Key assignment", "AA Direction inverter"],
    "rFakeLag": ["Rage", "Fake Lag", "General", "Enabled"],
    "rFLLimit": ["Rage", "Fake Lag", "General", "Limit"],
    "rFLJitter": ["Rage", "Fake Lag", "General", "Jitter"],
    "rFLTrigLimit": ["Rage", "Fake Lag", "General", "Trigger limit"],
    "rFLTrigs": ["Rage", "Fake Lag", "General", "Triggers"],

    "Clantag": ["Misc.", "Helpers", "Client", "Clantag changer"],
    "customClantag": ["Misc.", "Helpers", "Client", "Custom clantag"],
    "clanTagAnim": ["Misc.", "Helpers", "Client", "Animated clantag"],
    "clanTagSpeed": ["Misc.", "Helpers", "Client", "Animation speed"],

    "Thirdperson": ["Misc.", "Keys", "General", "Key assignment", "Thirdperson"],
    "thirdPersonWhileSpec": ["Misc.", "View", "General", "Thirdperson while spectating"],
    "Restrictions": ["Config", "Cheat", "General", "Restrictions"],

    "Antiflicker": ["Legit", "sPeC's Semirage", "sPeC's Semirage", "Anti flicker"],
    "Antitrigger": ["Legit", "sPeC's Semirage", "sPeC's Semirage", "Anti trigger"],
    "DynamicFOV": ["Legit", "sPeC's Semirage", "sPeC's Semirage", "Dynamic FOV"],
    "MarkPlayers": ["Legit", "sPec's Semirage", "sPec's Semirage", "Mark players"],
    "RageOnKey": ["Legit", "sPeC's Semirage", "sPeC's Semirage", "Rage on key"],
    "Slowwalk": ["Legit", "sPeC's Semirage", "sPeC's Semirage", "Slow walk"],
};

var wCategory = {
    "usp s": "USP",
    "glock 18": "Glock",
    "p2000": "P2000",
    "cz75 auto": "CZ-75",
    "five seven": "Five Seven",
    "dual berettas": "Dualies",
    "r8 revolver": "Revolver",
    "desert eagle": "Deagle",
    "p250": "P250",
    "tec 9": "Tec-9",
    "mp9": "MP9",
    "mp7": "MP7",
    "mac 10": "Mac10",
    "pp bizon": "PP-Bizon",
    "ump 45": "UMP45",
    "mp5 sd": "MP5",
    "p90": "P90",
    "ak 47": "AK47",
    "sg 553": "SG553",
    "aug": "AUG",
    "famas": "FAMAS",
    "galil ar": "GALIL",
    "m4a1 s": "M4A1-S",
    "m4a4": "M4A4",
    "ssg 08": "SSG08",
    "awp": "AWP",
    "g3sg1": "G3SG1",
    "scar 20": "SCAR20",
    "nova": "Nova",
    "xm1014": "XM1014",
    "sawed off": "Sawed off",
    "mag 7": "MAG7",
    "m249": "M249",
    "negev": "Negev"
};

var visPeeking = false;
var doSwitch = false;
var aMedia = false;
var screenSize = Render.GetScreenSize();
var tickRate = Globals.Tickcount();
var localEnt = Entity.GetLocalPlayer();
var enemies = Entity.GetEnemies();
var velocity = Entity.GetProp(localEnt, "DT_CSPlayer", "m_vecVelocity[0]");
var weapon, isTrigger, oCTag, oCCTag, oACTag;
var delays = [];
var marked = [];
var names = [];
var gTime = Globals.Realtime();
var aMedia = 0;
var indX = 0;
var indY = 0;
var buffer = 15;
var font;

function updateNames() {
    for (e = 0; e < enemies.length; e++) {
        names[e] = Entity.GetName(enemies[e]);
    }
    UI.UpdateList(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Players"], names);
}

function setupUI() {
    UI.AddSubTab(["Legit", "SUBTAB_MGR"], "sPeC's Semirage");
    UI.AddSliderInt(path.Master, "                 -> sPeC's Master Script <-", 0, 0);
    UI.AddCheckbox(path.Master, "Anti flicker");
    UI.AddSliderInt(path.Master, "Max ping", 100, 200);
    UI.AddSliderInt(path.Master, "", 0, 0);
    UI.AddCheckbox(path.Master, "Anti trigger");
    UI.AddSliderInt(path.Master, "Base limit", 0, 14);
    UI.AddSliderInt(path.Master, "Base jitter", 0, 100);
    UI.AddSliderInt(path.Master, "Base trigger limit", 0, 14);
    UI.AddMultiDropdown(path.Master, "Base triggers", ["In air", "On peek", "On shot", "On land", "While reloading", "On weapon switch", "On velocity change", "Break lag compensation"]);
    UI.AddSliderInt(path.Master, "Exposed limit", 0, 14);
    UI.AddSliderInt(path.Master, "Exposed jitter", 0, 100);
    UI.AddSliderInt(path.Master, "Exposed trigger limit", 0, 14);
    UI.AddMultiDropdown(path.Master, "Exposed triggers", ["In air", "On peek", "On shot", "On land", "While reloading", "On weapon switch", "On velocity change", "Break lag compensation"]);
    UI.AddSliderInt(path.Master, "", 0, 0);
    UI.AddCheckbox(path.Master, "Dynamic FOV");
    UI.AddSliderInt(path.Master, "Minimum FOV", 0, 180);
    UI.AddSliderInt(path.Master, "Maximum FOV", 0, 180);
    UI.AddSliderInt(path.Master, "", 0, 0);
    UI.AddCheckbox(path.Master, "Mark players");
    UI.AddColorPicker(path.Master, "Mark color");
    UI.AddMultiDropdown(path.Master, "Players", [names]);
    UI.AddDropdown(path.Master, "Mark icon", ["!", "X", "$", "+"], 0);
    UI.AddSliderInt(path.Master, "", 0, 0);
    UI.AddCheckbox(path.Master, "Rage on key");
    UI.AddCheckbox(path.Master, "Use trigger ragebot");
    UI.AddSliderInt(path.Master, "", 0, 0);
    UI.AddCheckbox(path.Master, "Slow walk");
    UI.AddSliderInt(path.Master, "Slow walk speed", 0, 130);
    UI.AddSliderInt(path.Master, "", 0, 0);
    UI.AddDropdown(path.Master, "Determination Mode", ["Legit", "Semi rage", "Rage"], 0);
    UI.AddMultiDropdown(path.Master, "Quick switch", ["AWP", "SSG", "Deagle", "Rifles", "Pistols"], 0);
    UI.AddMultiDropdown(path.Master, "Indicators", ["FOV", "Force baim", "Legit autowall", "Rage autowall", "Desync arrows"]);
    UI.AddDropdown(path.Master, "Indicator position", ["Crosshair", "Center left", "Bottom left"], 0);
    UI.AddColorPicker(path.Master, "FOV color");
    UI.AddColorPicker(path.Master, "Arrows base color");
    UI.AddColorPicker(path.Master, "Arrows active color");
    UI.AddColorPicker(path.Master, "Enemy peeking indicator");
    UI.AddSliderInt(path.Master, "", 0, 0);
    UI.AddCheckbox(path.Master, "Anti media");
    UI.AddCheckbox(path.Master, "Auto stop");
    UI.AddCheckbox(path.Master, "Better ragebot targeting");
    UI.AddCheckbox(path.Master, "Keep bots in spawn");
    UI.AddCheckbox(path.Master, "Show votes");
    UI.AddCheckbox(path.Master, "Toggle legit autowall");
    UI.AddCheckbox(path.Master, "Toggle third person while dead");
    UI.AddSliderInt(path.Master, "                                -> v3 <-", 0, 0);

    UI.AddHotkey(["Legit", "General", "Key assignment"], "Rage key", "Rage key");
    UI.AddHotkey(["Legit", "General", "Key assignment"], "Slow walk key", "Slow walk");
    UI.AddHotkey(["Legit", "General", "Key assignment"], "Toggle legit autowall", "");
    UI.AddHotkey(["Legit", "General", "Key assignment"], "Toggle rage autowall", "");
    UI.AddHotkey(["Legit", "General", "Key assignment"], "Valve fake duck", "Fake duck");

    UI.SetColor(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Mark color"], [0, 0, 0, 0]);
    UI.SetColor(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Enemy peeking indicator"], [0, 0, 0, 0]);
    UI.SetColor(["Legit", "sPeC's Semirage", "sPeC's Semirage", "FOV color"], [0, 255, 255, 255]);
    UI.SetColor(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Arrows base color"], [0, 0, 0, 160]);
    UI.SetColor(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Arrows active color"], [0, 255, 255, 255]);

    Cheat.PrintColor([0, 255, 255, 255], "\n\n======================================================================\n");
    Cheat.PrintColor([0, 255, 255, 255], "\n    - - - > sPeC's Legit Master Script v3 has been loaded! < - - -");
    Cheat.PrintColor([0, 255, 255, 255], "\n\n======================================================================\n");
    Cheat.PrintChat(" \x06sPeC's Legit Master Script has been loaded! \x0E[ \x06v3 \x0E] ");
}

function getVal(item) {
    return UI.GetValue(["Legit", "sPeC's Semirage", "sPeC's Semirage", item]);
}

function weaponType() {
    var localEnt = Entity.GetLocalPlayer();
    var weapon = Entity.GetName(Entity.GetWeapon(localEnt));
    if (wCategory[weapon] == undefined)
        return "";

    return wCategory[weapon];
}

function vectorangles(forward) {
    var angles = []
    if (forward[1] == 0 && forward[0] == 0) {
        angles[0] = forward[2] > 0 ? 270 : 90
        angles[1] = 0
    } else {
        angles[0] = Math.atan2(-forward[2], Math.sqrt(forward[0] * forward[0] + forward[1] * forward[1])) * -180 / Math.PI
        angles[1] = Math.atan2(forward[1], forward[0]) * 180 / Math.PI
        if (angles[1] > 90)
            angles[1] -= 180
        else if (angles[1] < 90)
            angles[1] += 180
        else if (angles[1] == 90)
            angles[1] = 0
    }
    return angles
}

function anglevectors(angles) {
    var sy = Math.sin(angles[1] * 180 / Math.PI)
    var cy = Math.cos(angles[1] * 180 / Math.PI)
    var sp = Math.sin(angles[0] * 180 / Math.PI)
    var cp = Math.cos(angles[0] * 180 / Math.PI)
    return [cp * cy, cp * sy, -sp]
}

function vectorLength(a) {
    return Math.sqrt(a[0] ** 2 + a[1] ** 2 + a[2] ** 2);
}

function vectorSub(a, b) {
    return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}

function vecNew(data) {
    return {
        x: data[0],
        y: data[1],
        z: data[2]
    };
}

function vecOperate(vec, vec2, operation) {
    switch (operation) {
        case '+':
            return {
                x: vec.x + vec2.x,
                    y: vec.y + vec2.y,
                    z: vec.z + vec2.z
            };

        case '-':
            return {
                x: vec.x - vec2.x,
                    y: vec.y - vec2.y,
                    z: vec.z - vec2.z
            };

        case '*':
            return {
                x: vec.x * vec2.x,
                    y: vec.y * vec2.y,
                    z: vec.z * vec2.z
            };

        case '/':
            return {
                x: vec.x / vec2.x,
                    y: vec.y / vec2.y,
                    z: vec.z / vec2.z
            };

        default:
            throw new Error("[Vector] Invalid operation type.");
    }
}

function fovTo(localHead, eHead, vAngle) {
    const angles = vecAngle(vecOperate(eHead, localHead, '-'));

    const delta = vecNew(
        [
            Math.abs(vAngle.x - angles.x),
            Math.abs(vAngle.y % 360 - angles.y % 360) % 360,
            0
        ]
    );

    if (delta.y > 180)
        delta.y = 360 - delta.y;

    return length2d(delta);
}

function vecAngle(vec) {
    return {
        x: -Math.atan2(vec.z, length2d(vec)) * 180 / Math.PI,
        y: Math.atan2(vec.y, vec.x) * 180 / Math.PI,
        z: 0
    };
}

function length2d(vec) {
    return Math.sqrt(vec.x * vec.x + vec.y * vec.y);
}

function get_closest_target() {
    const players = Entity.GetEnemies();
    const localEnt = Entity.GetLocalPlayer();
    const data = {
        id: null,
        fov: 180
    };

    for (var i = 0; i < players.length; i++) {
        const e = players[i];

        const eHead = vecNew(Entity.GetHitboxPosition(e, 0));
        localHead = vecNew(Entity.GetEyePosition(localEnt));
        const vAngle = vecNew(Local.GetViewAngles());

        const fov = fovTo(localHead, eHead, vAngle);

        if (fov < data.fov) {
            data.id = e;
            data.fov = fov;
        }
    }
    return data.id;
}

function clamp(val, min, max) {
    return Math.max(min, Math.min(max, val));
}

function getDropdownValue(value, index) {
    var mask = 1 << index;
    return value & mask ? true : false;
}

function setDropdownValue(value, index, enable) {
    var mask = 1 << index;
    return enable ? (value | mask) : (value & ~mask);
}

function Delay(delay, func, times) {
    this.delay = delay;
    this.resume = Globals.Curtime() + delay;
    this.func = func;
    this.times = 0;
    this.max = times || 1;
    delays.push(this);
}

Delay.prototype.run = function () {
    this.func();
    this.times++;
    this.resume += this.delay;
    return this.times >= this.max;
}

function checkDelays() {
    currTime = Globals.Curtime();

    delays.forEach(function (delay, index) {
        currTime >= delay.resume && delay.run() && delays.splice(index, 1);
    })
}

function switchSlot1() {
    Cheat.ExecuteCommand("slot1");
    doSwitch = false;
}

function switchSlot2() {
    Cheat.ExecuteCommand("slot2");
    doSwitch = false;
}

function switchSlot3() {
    Cheat.ExecuteCommand("slot3");
    doSwitch = false;
}

function keepBots() {
    Cheat.ExecuteCommand("holdpos");
}

function paint() {
    updateNames();
    count();
    if (getVal("Anti flicker")) {
        antiFlicker();
        UI.SetEnabled(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Max ping"], 1);
    } else {
        UI.SetEnabled(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Max ping"], 0);
    }

    if (getVal("Anti trigger")) {
        antiTrigger();
        UI.SetEnabled(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Base limit"], 1);
        UI.SetEnabled(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Base jitter"], 1);
        UI.SetEnabled(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Base trigger limit"], 1);
        UI.SetEnabled(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Base triggers"], 1);
        UI.SetEnabled(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Exposed limit"], 1);
        UI.SetEnabled(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Exposed jitter"], 1);
        UI.SetEnabled(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Exposed trigger limit"], 1);
        UI.SetEnabled(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Exposed triggers"], 1);
    } else {
        UI.SetEnabled(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Base limit"], 0);
        UI.SetEnabled(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Base jitter"], 0);
        UI.SetEnabled(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Base trigger limit"], 0);
        UI.SetEnabled(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Base triggers"], 0);
        UI.SetEnabled(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Exposed limit"], 0);
        UI.SetEnabled(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Exposed jitter"], 0);
        UI.SetEnabled(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Exposed trigger limit"], 0);
        UI.SetEnabled(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Exposed triggers"], 0);
    }

    if (getVal("Dynamic FOV")) {
        dynamicFOV();
        UI.SetEnabled(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Minimum FOV"], 1);
        UI.SetEnabled(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Maximum FOV"], 1);
    } else {
        UI.SetEnabled(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Minimum FOV"], 0);
        UI.SetEnabled(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Maximum FOV"], 0);
    }

    if (getVal("Mark players")) {
        markPlayers();
        UI.SetEnabled(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Mark color"], 1);
        UI.SetEnabled(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Players"], 1);
        UI.SetEnabled(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Mark icon"], 1);
    } else {
        UI.SetEnabled(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Mark color"], 0);
        UI.SetEnabled(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Players"], 0);
        UI.SetEnabled(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Mark icon"], 0);
    }

    if (getVal("Rage on key")) {
        rageOnKey();
        UI.SetEnabled(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Use trigger ragebot"], 1);
    } else {
        UI.SetEnabled(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Use trigger ragebot"], 0);
    }

    if (getVal("Slow walk")) {
        UI.SetEnabled(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Slow walk speed"], 1);
    } else {
        UI.SetEnabled(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Slow walk speed"], 0);
    }

    if (getVal("Quick switch") != 0) {
        quickSwitch();
    }

    if (getVal("Anti media")) {
        antiMedia();
    } else {
        if (aMedia) {
            if (oCTag == 0) {
                UI.SetValue(path.Clantag, 0);
            } else if (oCTag == 1) {
                UI.SetValue(path.Clantag, 1);
            } else if (oCTag == 2) {
                UI.SetValue(path.Clantag, 2);
                UI.SetValue(path.customClantag, oCCTag);
                UI.SetValue(path.clanTagAnim, oACTag);
                UI.SetValue(path.clanTagSpeed, oACTSpeed);
            } else if (oCTag == 3) {
                UI.SetValue(path.Clantag, 3);
            }
            aMedia = false;
        }
    }

    var peekingIndColor = UI.GetColor(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Enemy peeking indicator"]);
    if (peekingIndColor[0] != 0 || peekingIndColor[1] != 0 || peekingIndColor[2] != 0 || peekingIndColor[3] != 0) {
        peekingInd();
    }

    if (getVal("Toggle third person while dead")) {
        thirdPerson();
    }
    var indicators = getVal("Indicators");
    if (indicators != 0) {
        UI.SetEnabled(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Indicator position"], 1);
        indString = UI.GetString(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Indicators"]);

        if (indString.includes("FOV")) {
            drawFOV();
            UI.SetEnabled(["Legit", "sPeC's Semirage", "sPeC's Semirage", "FOV color"], 1);
        } else {
            UI.SetEnabled(["Legit", "sPeC's Semirage", "sPeC's Semirage", "FOV color"], 0);
        }

        if (indString.includes("baim")) {
            drawBaim();
        }

        if (indString.includes("Legit")) {
            drawLegitAwall();
        }

        if (indString.includes("Rage")) {
            drawRageAwall();
        }

        if (indString.includes("arrows")) {
            drawArrows();
            UI.SetEnabled(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Arrows base color"], 1);
            UI.SetEnabled(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Arrows active color"], 1);
        } else {
            UI.SetEnabled(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Arrows base color"], 0);
            UI.SetEnabled(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Arrows active color"], 0);
        }
    } else {
        UI.SetEnabled(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Indicator position"], 0);
        UI.SetEnabled(["Legit", "sPeC's Semirage", "sPeC's Semirage", "FOV color"], 0);
        UI.SetEnabled(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Arrows base color"], 0);
        UI.SetEnabled(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Arrows active color"], 0);
    }

    if (UI.GetHotkey(["Legit", "General", "General", "Key assignment", "Toggle rage autowall"]) != 0) {
        handleRAWall();
    }

    if (UI.GetHotkey(["Legit", "General", "General", "Key assignment", "Toggle legit autowall"]) != 0) {
        handleLAWall();
    }
}

function drawFOV() {
    var localEnt = Entity.GetLocalPlayer();
    var weapon = Entity.GetName(Entity.GetWeapon(localEnt));
    if (wCategory[weapon] == "" || wCategory[weapon] == undefined) return;
    var screenSize = Render.GetScreenSize();
    switch (getVal("Indicator position")) {
        case 0:
            indX = screenSize[0] / 2;
            indY = screenSize[1] / 2;
            var font = Render.AddFont("Verdana.ttf", 16, 800);
            var buffer = 15;
            break;
        case 1:
            indX = 80;
            indY = screenSize[1] / 2;
            var font = Render.AddFont("Verdana.ttf", 26, 800);
            var buffer = 25;
            break;
        case 2:
            indX = screenSize[0] / 10;
            indY = (screenSize[1] * 2) / 2.42;
            var font = Render.AddFont("Verdana.ttf", 26, 800);
            var buffer = 25;
            break;
    }
    Render.String(indX, indY + (buffer + 5), 1, "FOV: " + UI.GetValue(["Rage", "Target", wCategory[weapon], "Field of view"]).toString(), UI.GetColor(["Legit", "sPeC's Semirage", "sPeC's Semirage", "FOV color"]), font);
}

function drawBaim() {
    var localEnt = Entity.GetLocalPlayer();
    var weapon = Entity.GetName(Entity.GetWeapon(localEnt));
    if (wCategory[weapon] == "" || wCategory[weapon] == undefined) return;
    var screenSize = Render.GetScreenSize();
    switch (getVal("Indicator position")) {
        case 0:
            indX = screenSize[0] / 2;
            indY = screenSize[1] / 2;
            var font = Render.AddFont("Verdana.ttf", 16, 800);
            var buffer = 15;
            break;
        case 1:
            indX = 80;
            indY = screenSize[1] / 2;
            var font = Render.AddFont("Verdana.ttf", 26, 800);
            var buffer = 25;
            break;
        case 2:
            indX = screenSize[0] / 10;
            indY = (screenSize[1] * 2) / 2.42;
            var font = Render.AddFont("Verdana.ttf", 26, 800);
            var buffer = 25;
            break;
    }
    if (UI.GetValue(path.forceBaim)) {
        Render.String(indX, indY + ((buffer * 2) + 5), 1, "BAIM", [0, 255, 0, 255], font);
    } else {
        Render.String(indX, indY + ((buffer * 2) + 5), 1, "BAIM", [255, 0, 0, 255], font);
    }
}

function drawLegitAwall() {
    var localEnt = Entity.GetLocalPlayer();
    var weapon = Entity.GetName(Entity.GetWeapon(localEnt));
    if (wCategory[weapon] == "" || wCategory[weapon] == undefined) return;
    var screenSize = Render.GetScreenSize();
    switch (getVal("Indicator position")) {
        case 0:
            indX = screenSize[0] / 2;
            indY = screenSize[1] / 2;
            var font = Render.AddFont("Verdana.ttf", 16, 800);
            var buffer = 15;
            break;
        case 1:
            indX = 80;
            indY = screenSize[1] / 2;
            var font = Render.AddFont("Verdana.ttf", 26, 800);
            var buffer = 25;
            break;
        case 2:
            indX = screenSize[0] / 10;
            indY = (screenSize[1] * 2) / 2.42;
            var font = Render.AddFont("Verdana.ttf", 26, 800);
            var buffer = 25;
            break;
    }
    if (UI.GetValue(["Legit", "Triggerbot", wCategory[weapon], "Autowall"])) {
        Render.String(indX, indY + ((buffer * 3) + 5), 1, "L AWALL", [0, 255, 0, 255], font);
    } else {
        Render.String(indX, indY + ((buffer * 3) + 5), 1, "L AWALL", [255, 0, 0, 255], font);
    }
}

var num = 0.00;
var globaltime = Globals.Realtime();

function count() {
    if (Globals.Realtime() > (globaltime + 0.1)) {
        num += 0.02;
    }
}

function drawArrows() {
    var screenSize = Render.GetScreenSize();
    var invBaseColor = UI.GetColor(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Arrows base color"]);
    var invActiveColor = UI.GetColor(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Arrows active color"]);
    const alpha = Math.sin(num) * 127 + 128;
    var invActiveAlpha = [invActiveColor[0], invActiveColor[1], invActiveColor[2], (alpha / 2)];
    if (!Entity.IsAlive(Entity.GetLocalPlayer())) return;
    // left
    Render.Polygon([
        [(screenSize[0] / 2) - 100, (screenSize[1] / 2)],
        [((screenSize[0] / 2) - 50), ((screenSize[1] / 2) - 20)],
        [((screenSize[0] / 2) - 70), ((screenSize[1] / 2))]
    ], invBaseColor);
    Render.Polygon([
        [(screenSize[0] / 2) - 100, (screenSize[1] / 2)],
        [((screenSize[0] / 2) - 70), ((screenSize[1] / 2))],
        [((screenSize[0] / 2) - 50), ((screenSize[1] / 2) + 20)]
    ], invBaseColor);

    // right
    Render.Polygon([
        [(screenSize[0] / 2) + 100, (screenSize[1] / 2)],
        [((screenSize[0] / 2) + 50), ((screenSize[1] / 2) + 20)],
        [((screenSize[0] / 2) + 70), ((screenSize[1] / 2))]
    ], invBaseColor);
    Render.Polygon([
        [(screenSize[0] / 2) + 100, (screenSize[1] / 2)],
        [((screenSize[0] / 2) + 70), ((screenSize[1] / 2))],
        [((screenSize[0] / 2) + 50), ((screenSize[1] / 2) - 20)]
    ], invBaseColor);

    if (UI.GetValue(path.rageInverter) || UI.GetValue(path.legitInverter)) {
        Render.Polygon([
            [(screenSize[0] / 2) - 100, (screenSize[1] / 2)],
            [((screenSize[0] / 2) - 50), ((screenSize[1] / 2) - 20)],
            [((screenSize[0] / 2) - 70), ((screenSize[1] / 2))]
        ], invActiveAlpha);
        Render.Polygon([
            [(screenSize[0] / 2) - 100, (screenSize[1] / 2)],
            [((screenSize[0] / 2) - 70), ((screenSize[1] / 2))],
            [((screenSize[0] / 2) - 50), ((screenSize[1] / 2) + 20)]
        ], invActiveAlpha);
        Render.Line((screenSize[0] / 2) - 100, (screenSize[1] / 2), ((screenSize[0] / 2) - 50), ((screenSize[1] / 2) - 20), invActiveColor);
        Render.Line(((screenSize[0] / 2) - 50), ((screenSize[1] / 2) - 20), ((screenSize[0] / 2) - 70), (screenSize[1] / 2), invActiveColor);
        Render.Line(((screenSize[0] / 2) - 70), (screenSize[1] / 2), ((screenSize[0] / 2) - 50), ((screenSize[1] / 2) + 20), invActiveColor);
        Render.Line(((screenSize[0] / 2) - 50), ((screenSize[1] / 2) + 20), (screenSize[0] / 2) - 100, (screenSize[1] / 2), invActiveColor);

    } else if (!UI.GetValue(path.rageInverter) || !UI.GetValue(path.legitInverter)) {
        Render.Polygon([
            [(screenSize[0] / 2) + 100, (screenSize[1] / 2)],
            [((screenSize[0] / 2) + 50), ((screenSize[1] / 2) + 20)],
            [((screenSize[0] / 2) + 70), ((screenSize[1] / 2))]
        ], invActiveAlpha);
        Render.Polygon([
            [(screenSize[0] / 2) + 100, (screenSize[1] / 2)],
            [((screenSize[0] / 2) + 70), ((screenSize[1] / 2))],
            [((screenSize[0] / 2) + 50), ((screenSize[1] / 2) - 20)]
        ], invActiveAlpha);
        Render.Line((screenSize[0] / 2) + 100, (screenSize[1] / 2), ((screenSize[0] / 2) + 50), ((screenSize[1] / 2) + 20), invActiveColor);
        Render.Line(((screenSize[0] / 2) + 50), ((screenSize[1] / 2) + 20), ((screenSize[0] / 2) + 70), (screenSize[1] / 2), invActiveColor);
        Render.Line(((screenSize[0] / 2) + 70), (screenSize[1] / 2), ((screenSize[0] / 2) + 50), ((screenSize[1] / 2) - 20), invActiveColor);
        Render.Line(((screenSize[0] / 2) + 50), ((screenSize[1] / 2) - 20), (screenSize[0] / 2) + 100, (screenSize[1] / 2), invActiveColor);
    }
}

function drawRageAwall() {
    var localEnt = Entity.GetLocalPlayer();
    var weapon = Entity.GetName(Entity.GetWeapon(localEnt));
    if (wCategory[weapon] == "" || wCategory[weapon] == undefined) return;
    var screenSize = Render.GetScreenSize();
    switch (getVal("Indicator position")) {
        case 0:
            indX = screenSize[0] / 2;
            indY = screenSize[1] / 2;
            var font = Render.AddFont("Verdana.ttf", 16, 800);
            var buffer = 15;
            break;
        case 1:
            indX = 80;
            indY = screenSize[1] / 2;
            var font = Render.AddFont("Verdana.ttf", 26, 800);
            var buffer = 25;
            break;
        case 2:
            indX = screenSize[0] / 10;
            indY = (screenSize[1] * 2) / 2.42;
            var font = Render.AddFont("Verdana.ttf", 26, 800);
            var buffer = 25;
            break;
    }
    if (UI.GetValue(["Rage", "Target", wCategory[weapon], "Disable autowall"])) {
        Render.String(indX, indY + ((buffer * 4) + 5), 1, "R AWALL", [255, 0, 0, 255], font);
    } else {
        Render.String(indX, indY + ((buffer * 4) + 5), 1, "R AWALL", [0, 255, 0, 255], font);
    }
}

function cm() {
    checkDelays();
    var enemPeekColor = UI.GetColor(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Enemy peeking indicator"]);
    if (getVal("Anti trigger") || getVal("Use trigger ragebot") || getVal("Auto stop") || enemPeekColor[0] != 0 || enemPeekColor[1] != 0 || enemPeekColor[2] != 0 || enemPeekColor[3] != 0) {
        determinationMode();
    }
    if (getVal("Slow walk")) {
        slowWalk();
    }

    if (getVal("Auto stop")) {
        autoStop();
    }

    if (getVal("Better ragebot targeting")) {
        betterTargeting();
    }

    if (UI.GetHotkey(["Legit", "General", "General", "Key assignment", "Valve fake duck"]) != null) {
        fakeDuck();
    }
}

function init() {
    setupUI();
    Cheat.RegisterCallback("Draw", "paint");
    Cheat.RegisterCallback("CreateMove", "cm");
    Cheat.RegisterCallback("weapon_fire", "onWeaponFire");
    Cheat.RegisterCallback("round_start", "botSpawn");
    Cheat.RegisterCallback("vote_options", "onVoteOptions");
    Cheat.RegisterCallback("vote_cast", "onVoteCast");
}

init();

const oLegit = UI.GetValue(path.Legit);
const oLegitAA = UI.GetValue(path.lAntiAim);
const oRage = UI.GetValue(path.Rage);
const oRageAA = UI.GetValue(path.rAntiAim);
const oCTag = UI.GetValue(path.Clantag);
const oCCTag = UI.GetValue(path.customClantag);
const oACTag = UI.GetValue(path.clanTagAnim);
const oACTSpeed = UI.GetValue(path.clanTagSpeed);

function determinationMode() {

    dMode = getVal("Determination Mode");
    var enemies = Entity.GetEnemies();
    var localEnt = Entity.GetLocalPlayer();
    var localEyePos = Entity.GetEyePosition(localEnt);

    var inclusiveArrayHB = [];
    var dmgArray = [];

    var headHitbox = Array();
    var pelvisHitbox = Array();
    var bodyHitbox = Array();
    var chestHitbox = Array();
    var leftFootHitbox = Array();
    var rightFootHitbox = Array();
    var leftHandHitbox = Array();
    var rightHandHitbox = Array();

    var headToHeadBT = Array();
    var headToLeftHandBT = Array();
    var headToRightHandBT = Array();
    var headToLeftFootBT = Array();
    var headToRightFootBT = Array();
    var headToChestBT = Array();
    var headToPelvisBT = Array();
    var headToBodyBT = Array();
    var rFootToBodyBT = Array();
    var lFootToBodyBT = Array();
    var rFootToPelvisBT = Array();
    var lFootToPelvisBT = Array();
    var rFootToRFootBT = Array();
    var rFootToLFootBT = Array();
    var lFootToRFootBT = Array();
    var lFootToLFootBT = Array();

    switch (dMode) {
        case 0:
            for (var j = 0; j < enemies.length; j++) {
                localEyePos = Entity.GetEyePosition(localEnt);
                headHitbox[j] = Entity.GetHitboxPosition(enemies[j], 0);
                chestHitbox[j] = Entity.GetHitboxPosition(enemies[j], 5);
                leftHandHitbox[j] = Entity.GetHitboxPosition(enemies[j], 13);
                rightHandHitbox[j] = Entity.GetHitboxPosition(enemies[j], 14);

                inclusiveArrayHB = [
                    headToHeadBT, headToChestBT, headToLeftHandBT, headToRightHandBT
                ];

                if ((headHitbox[j] == 0 || headHitbox[j] == null) || (leftHandHitbox[j] == 0 || leftHandHitbox[j] == null) || (rightHandHitbox[j] == 0 || rightHandHitbox[j] == null) || (chestHitbox[j] == 0 || chestHitbox[j] == null)) {
                    for (var ind = 0; ind < inclusiveArrayHB.length; ind++) {
                        inclusiveArrayHB[ind][j] = 0;
                    }
                } else {
                    headToHeadBT[j] = Trace.Line(localEnt, localEyePos, headHitbox[j]);
                    headToChestBT[j] = Trace.Line(localEnt, localEyePos, chestHitbox[j]);
                    headToLeftHandBT[j] = Trace.Line(localEnt, localEyePos, leftHandHitbox[j]);
                    headToRightHandBT[j] = Trace.Line(localEnt, localEyePos, rightHandHitbox[j]);

                    for (var ind = 0; ind < inclusiveArrayHB.length; ind++) {
                        dmgArray.push(inclusiveArrayHB[ind][j][1]);
                    }

                    // ONLY USEFUL FOR PRINTING DMGARRAY VALUES
                    /*for (var lol = 0; lol < dmgArray.length; lol++) {
                        Cheat.Print("\n" + "DMG ARRAY # " + lol.toString() + " " + dmgArray[lol].toString() + '\n');
                    }*/
                }
            }

            function gThanPoint7(element) {
                return element > .75;
            }

            if (dmgArray != null && typeof dmgArray !== 'undefined') {
                if (dmgArray.some(gThanPoint7)) {
                    visPeeking = true;
                } else {
                    visPeeking = false;
                }
            } else {
                Cheat.Print("\nnot populating frac array \n");
            }
            break;
        case 1:
            for (var j = 0; j < enemies.length; j++) {
                localEyePos = Entity.GetEyePosition(localEnt);
                headHitbox[j] = Entity.GetHitboxPosition(enemies[j], 0);
                pelvisHitbox[j] = Entity.GetHitboxPosition(enemies[j], 2);
                bodyHitbox[j] = Entity.GetHitboxPosition(enemies[j], 3);
                chestHitbox[j] = Entity.GetHitboxPosition(enemies[j], 5);
                leftFootHitbox[j] = Entity.GetHitboxPosition(enemies[j], 11);
                rightFootHitbox[j] = Entity.GetHitboxPosition(enemies[j], 12);
                leftHandHitbox[j] = Entity.GetHitboxPosition(enemies[j], 13);
                rightHandHitbox[j] = Entity.GetHitboxPosition(enemies[j], 14);

                inclusiveArrayHB = [
                    headToHeadBT, headToChestBT, headToBodyBT, headToPelvisBT, headToLeftHandBT, headToRightHandBT, headToLeftFootBT, headToRightFootBT
                ];

                if ((headHitbox[j] == 0 || headHitbox[j] == null) || (leftFootHitbox[j] == 0 || leftFootHitbox[j] == null) || (rightFootHitbox[j] == 0 || rightFootHitbox[j] == null) || (leftHandHitbox[j] == 0 || leftHandHitbox[j] == null) || (rightHandHitbox[j] == 0 || rightHandHitbox[j] == null) || (chestHitbox[j] == 0 || chestHitbox[j] == null) || (pelvisHitbox[j] == 0 || pelvisHitbox[j] == null) || (bodyHitbox[j] == 0 || bodyHitbox[j] == null)) {
                    for (var ind = 0; ind < inclusiveArrayHB.length; ind++) {
                        inclusiveArrayHB[ind][j] = 0;
                    }
                } else {
                    headToHeadBT[j] = Trace.Line(localEnt, localEyePos, headHitbox[j]);
                    headToChestBT[j] = Trace.Line(localEnt, localEyePos, chestHitbox[j]);
                    headToBodyBT[j] = Trace.Line(localEnt, localEyePos, bodyHitbox[j]);
                    headToPelvisBT[j] = Trace.Line(localEnt, localEyePos, pelvisHitbox[j]);
                    headToLeftHandBT[j] = Trace.Line(localEnt, localEyePos, leftHandHitbox[j]);
                    headToRightHandBT[j] = Trace.Line(localEnt, localEyePos, rightHandHitbox[j]);
                    headToLeftFootBT[j] = Trace.Line(localEnt, localEyePos, leftFootHitbox[j]);
                    headToRightFootBT[j] = Trace.Line(localEnt, localEyePos, rightFootHitbox[j]);

                    for (var ind = 0; ind < inclusiveArrayHB.length; ind++) {
                        dmgArray.push(inclusiveArrayHB[ind][j][1]);
                    }

                    // ONLY USEFUL FOR PRINTING DMGARRAY VALUES
                    /*for (var lol = 0; lol < dmgArray.length; lol++) {
                        Cheat.Print("\n" + "DMG ARRAY # " + lol.toString() + " " + dmgArray[lol].toString() + '\n');
                    }*/
                }
            }

            function gThanPoint7(element) {
                return element > .75;
            }

            if (dmgArray != null && typeof dmgArray !== 'undefined') {
                if (dmgArray.some(gThanPoint7)) {
                    visPeeking = true;
                } else {
                    visPeeking = false;
                }
            } else {
                Cheat.Print("\nnot populating frac array \n");
            }
            break;
        case 2:
            for (var j = 0; j < enemies.length; j++) {
                localEyePos = Entity.GetEyePosition(localEnt);
                localLFootPos = Entity.GetHitboxPosition(localEnt, 11);
                localRFootPos = Entity.GetHitboxPosition(localEnt, 12);
                localLHandPos = Entity.GetHitboxPosition(localEnt, 13);
                localRHandPos = Entity.GetHitboxPosition(localEnt, 14);

                headHitbox[j] = Entity.GetHitboxPosition(enemies[j], 0);
                pelvisHitbox[j] = Entity.GetHitboxPosition(enemies[j], 2);
                bodyHitbox[j] = Entity.GetHitboxPosition(enemies[j], 3);
                chestHitbox[j] = Entity.GetHitboxPosition(enemies[j], 5);
                leftFootHitbox[j] = Entity.GetHitboxPosition(enemies[j], 11);
                rightFootHitbox[j] = Entity.GetHitboxPosition(enemies[j], 12);
                leftHandHitbox[j] = Entity.GetHitboxPosition(enemies[j], 13);
                rightHandHitbox[j] = Entity.GetHitboxPosition(enemies[j], 14);

                inclusiveArrayHB = [
                    headToHeadBT, headToChestBT, rFootToBodyBT, lFootToBodyBT, rFootToPelvisBT, lFootToPelvisBT, rFootToRFootBT, rFootToLFootBT, lFootToLFootBT, lFootToRFootBT
                ];

                if ((headHitbox[j] == 0 || headHitbox[j] == null) || (leftFootHitbox[j] == 0 || leftFootHitbox[j] == null) || (rightFootHitbox[j] == 0 || rightFootHitbox[j] == null) || (leftHandHitbox[j] == 0 || leftHandHitbox[j] == null) || (rightHandHitbox[j] == 0 || rightHandHitbox[j] == null) || (chestHitbox[j] == 0 || chestHitbox[j] == null) || (pelvisHitbox[j] == 0 || pelvisHitbox[j] == null) || (bodyHitbox[j] == 0 || bodyHitbox[j] == null)) {
                    for (var ind = 0; ind < inclusiveArrayHB.length; ind++) {
                        inclusiveArrayHB[ind][j] = 0;
                    }
                } else {
                    headToHeadBT[j] = Trace.Bullet(localEnt, enemies[j], localEyePos, headHitbox[j]);
                    headToChestBT[j] = Trace.Bullet(localEnt, enemies[j], localEyePos, chestHitbox[j]);
                    rFootToBodyBT[j] = Trace.Bullet(localEnt, enemies[j], localRFootPos, bodyHitbox[j]);
                    lFootToBodyBT[j] = Trace.Bullet(localEnt, enemies[j], localLFootPos, bodyHitbox[j]);
                    rFootToPelvisBT[j] = Trace.Bullet(localEnt, enemies[j], localRFootPos, pelvisHitbox[j]);
                    lFootToPelvisBT[j] = Trace.Bullet(localEnt, enemies[j], localLFootPos, pelvisHitbox[j]);
                    rFootToRFootBT[j] = Trace.Bullet(localEnt, enemies[j], localRFootPos, rightFootHitbox[j]);
                    rFootToLFootBT[j] = Trace.Bullet(localEnt, enemies[j], localLFootPos, leftFootHitbox[j]);
                    lFootToRFootBT[j] = Trace.Bullet(localEnt, enemies[j], localLFootPos, rightFootHitbox[j]);
                    lFootToLFootBT[j] = Trace.Bullet(localEnt, enemies[j], localLFootPos, leftFootHitbox[j]);

                    // IND is BT array, e checks index of that BT array, 1 gets damage value
                    for (var ind = 0; ind < inclusiveArrayHB.length; ind++) {
                        dmgArray[dmgArray.length] = inclusiveArrayHB[ind][j][1];
                    }

                    // ONLY USEFUL FOR PRINTING DMGARRAY VALUES
                    //for (var lol = 0; lol < dmgArray.length; lol++) {
                    //    Cheat.Print("\n" + "DMG ARRAY # " + lol.toString() + " " + dmgArray[lol].toString() + '\n');
                    //}
                }
            }

            function isBiggerThan1(element) {
                return element >= 1;
            }

            if (dmgArray != null && typeof dmgArray !== 'undefined') {
                if (dmgArray.some(isBiggerThan1)) {
                    visPeeking = true;
                } else {
                    visPeeking = false;
                }
            } else {
                Cheat.Print("\nnot populating frac array \n");
            }
            break;
    }
}

function antiFlicker() {
    if (getVal("Anti trigger")) {
        UI.SetValue(path.Antitrigger, 0);
    }
    var maxPing = getVal("Max ping");
    var tickRate = Globals.Tickcount();
    var fps = Math.floor(1 / Global.Frametime());
    var ping = Math.floor(Global.Latency() * 1000 / 1.5);
    UI.SetValue(path.lFLLimit, 0);
    UI.SetValue(path.lFLJitter, 0);
    UI.SetValue(path.lFLTrigs, 2);
    UI.SetValue(path.lFLTrigLimit, 0);
    UI.SetValue(path.rFLLimit, 0);
    UI.SetValue(path.rFLJitter, 0);
    UI.SetValue(path.rFLTrigs, 2);
    UI.SetValue(path.rFLTrigLimit, 0);

    if (fps <= tickRate) {
        if (UI.GetValue(path.lAntiAim)) {
            UI.SetValue(path.lAntiAim, 0);
        } else if (UI.GetValue(path.rAntiAim)) {
            UI.SetValue(path.rAntiAim, 0);
        }
    } else {
        if (oLegitAA == 1) {
            UI.SetValue(path.lAntiAim, 1);
        } else if (oRageAA == 1) {
            UI.SetValue(path.rAntiAim, 1);
        }
    }

    if (ping >= maxPing) {
        if (UI.GetValue(path.lAntiAim)) {
            UI.SetValue(path.lAntiAim, 0);
        } else if (UI.GetValue(path.rAntiAim)) {
            UI.SetValue(path.rAntiAim, 0);
        }
    } else {
        if (oLegitAA == 1) {
            UI.SetValue(path.lAntiAim, 1);
        } else if (oRageAA == 1) {
            UI.SetValue(path.rAntiAim, 1);
        }
    }
}

function antiTrigger() {
    if (getVal("Anti flicker")) {
        UI.SetValue(path.Antiflicker, 0);
    }

    bLimit = getVal("Base limit");
    bJitter = getVal("Base jitter");
    bTLimit = getVal("Base trigger limit");
    bTrigs = getVal("Base triggers");
    eLimit = getVal("Exposed limit");
    eJitter = getVal("Exposed jitter");
    eTLimit = getVal("Exposed trigger limit");
    eTrigs = getVal("Exposed triggers");

    if (visPeeking) {
        UI.SetValue(path.lFLLimit, eLimit);
        UI.SetValue(path.lFLJitter, eJitter);
        UI.SetValue(path.lFLTrigs, eTrigs);
        UI.SetValue(path.lFLTrigLimit, eTLimit);
        UI.SetValue(path.rFLLimit, eLimit);
        UI.SetValue(path.rFLJitter, eJitter);
        UI.SetValue(path.rFLTrigs, eTrigs);
        UI.SetValue(path.rFLTrigLimit, eTLimit);
    } else {
        UI.SetValue(path.lFLLimit, bLimit);
        UI.SetValue(path.lFLJitter, bJitter);
        UI.SetValue(path.lFLTrigs, bTrigs);
        UI.SetValue(path.lFLTrigLimit, bTLimit);
        UI.SetValue(path.rFLLimit, bLimit);
        UI.SetValue(path.rFLJitter, bJitter);
        UI.SetValue(path.rFLTrigs, bTrigs);
        UI.SetValue(path.rFLTrigLimit, bTLimit);
    }
}

function dynamicFOV() {
    var minFOV = getVal("Minimum FOV");
    var maxFOV = getVal("Maximum FOV");
    var localEnt = Entity.GetLocalPlayer();
    var enemies = Entity.GetEnemies();
    var localOrigin = Entity.GetRenderOrigin(localEnt);
    var closest = Infinity;
    var weapon = Entity.GetName(Entity.GetWeapon(localEnt));
    if (wCategory[weapon] == "" || wCategory[weapon] == undefined) return;

    for (var i = 0; i < enemies.length; i++) {
        const enemyIndex = enemies[i];
        const distance = vectorLength(vectorSub(localOrigin, Entity.GetRenderOrigin(enemyIndex)));
        if (closest > distance) {
            closest = distance;
        }
    }
    const newFov = closest != Infinity ? clamp((5500 / closest) * 2, minFOV, maxFOV) : minFOV;

    if (wCategory[weapon] != "") {
        UI.SetValue(["Rage", "Target", wCategory[weapon], "Field of view"], newFov);
    }
}

function markPlayers() {
    var mColor = UI.GetColor(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Mark color"])
    var mIcon = getVal("Mark icon");
    var font = Render.AddFont("Tahoma.ttf", 24, 900)
    for (z = 0; z < enemies.length; z++) {
        var value = getVal("Players");
        if (getDropdownValue(value, z) && Entity.IsAlive(enemies[z]) && Entity.IsValid(enemies[z]) && !Entity.IsDormant(enemies[z])) {
            markedPos = Entity.GetHitboxPosition(enemies[z], 0);
            atscreen = Render.WorldToScreen(markedPos);
            switch (mIcon) {
                case 0:
                    Render.String(atscreen[0], atscreen[1] - 40, 0, "!", mColor, font);
                    break;
                case 1:
                    Render.String(atscreen[0], atscreen[1] - 40, 0, "X", mColor, font);
                    break;
                case 2:
                    Render.String(atscreen[0], atscreen[1] - 40, 0, "$", mColor, font);
                    break;
                case 3:
                    Render.String(atscreen[0], atscreen[1] - 50, 0, "+", mColor, font);
                    break;
            }
        }
    }
}

function rageOnKey() {
    UI.SetHotkeyState(["Legit", "General", "General", "Key assignment", "Rage key"], "Hold");
    var rKey = UI.GetValue(["Legit", "General", "General", "Key assignment", "Rage key"]);
    var restrictions = UI.GetValue(path.Restrictions);
    var legitAA = UI.GetValue(path.lAntiAim);
    localEnt = Entity.GetLocalPlayer();
    weapon = Entity.GetName(Entity.GetWeapon(localEnt));

    if (UI.GetValue(path.Legit) && UI.GetValue(path.Rage)) {
        UI.SetValue(path.Rage, 0);
        UI.SetValue(path.Legit, 1);
    }

    if (rKey) {
        if (getVal("Use trigger ragebot")) {
            if (visPeeking) {
                if (legitAA && restrictions == 0) {
                    UI.SetValue(path.lAntiAim, 0);
                    UI.SetValue(path.Legit, 0);
                    UI.SetValue(path.Rage, 1);
                    UI.SetValue(path.rAntiAim, 1);
                } else {
                    UI.SetValue(path.Legit, 0);
                    UI.SetValue(path.Rage, 1);
                }
            }
        } else {
            if (legitAA && restrictions == 0) {
                UI.SetValue(path.lAntiAim, 0);
                UI.SetValue(path.Legit, 0);
                UI.SetValue(path.Rage, 1);
                UI.SetValue(path.rAntiAim, 1);
            } else {
                UI.SetValue(path.Legit, 0);
                UI.SetValue(path.Rage, 1);
            }
        }
    } else {
        if (UI.GetValue(path.rAntiAim)) {
            UI.SetValue(path.rAntiAim, 0);
        }
        UI.SetValue(path.Rage, 0);
        UI.SetValue(path.Legit, 1);
        if (oLegitAA) {
            UI.SetValue(path.lAntiAim, 1);
        } else {
            UI.SetValue(path.lAntiAim, 0);
        }
    }
}

function handleLAWall() {
    localEnt = Entity.GetLocalPlayer();
    weapon = Entity.GetName(Entity.GetWeapon(localEnt));
    if (wCategory[weapon] == "" || wCategory[weapon] == undefined) return;
    var lAWallKey = UI.GetValue(["Legit", "General", "General", "Key assignment", "Toggle legit autowall"]);
    var curLAWall = UI.GetValue(["Legit", "Triggerbot", wCategory[weapon], "Autowall"]);
    UI.SetHotkeyState(["Legit", "General", "General", "Key assignment", "Toggle legit autowall"], "Hold");

    if (lAWallKey && (Globals.Realtime() > gTime + 0.2)) {
        gTime = Globals.Realtime();
        if (curLAWall) {
            UI.SetValue(["Legit", "Triggerbot", wCategory[weapon], "Autowall"], 0);
        } else {
            UI.SetValue(["Legit", "Triggerbot", wCategory[weapon], "Autowall"], 1);
        }
    }
}

function handleRAWall() {
    localEnt = Entity.GetLocalPlayer();
    weapon = Entity.GetName(Entity.GetWeapon(localEnt));
    if (wCategory[weapon] == "" || wCategory[weapon] == undefined) return;
    var rAWallKey = UI.GetValue(["Legit", "General", "General", "Key assignment", "Toggle rage autowall"]);
    var curRAWall = UI.GetValue(["Rage", "Target", wCategory[weapon], "Disable autowall"]);
    UI.SetHotkeyState(["Legit", "General", "General", "Key assignment", "Toggle rage autowall"], "Hold");

    if (rAWallKey && (Globals.Realtime() > gTime + 0.2)) {
        gTime = Globals.Realtime();
        if (curRAWall) {
            UI.SetValue(["Rage", "Target", wCategory[weapon], "Disable autowall"], 0);
        } else {
            UI.SetValue(["Rage", "Target", wCategory[weapon], "Disable autowall"], 1);
        }
    }
}

function fakeDuck() {
    var buttons = UserCMD.GetButtons();
    var valve = Entity.GetProp(Entity.GetGameRulesProxy(), "CCSGameRulesProxy", "m_bIsValveDS");
    var maxLevel = 28;
    var fdKey = UI.GetValue(["Legit", "General", "General", "Key assignment", "Valve fake duck"]);

    if (valve) {
        if (fdKey) {
            enableFakeLag = false;
            duckAmount = Entity.GetProp(Entity.GetLocalPlayer(), "CCSPlayer", "m_flDuckAmount");
            UserCMD.Choke();

            if (duckAmount <= maxLevel / 100) {
                crouched = true
            };
            if (duckAmount >= 0.8) {
                crouched = false;
                UserCMD.Send()
            };
            if (crouched) {
                UserCMD.SetButtons(buttons | (1 << 2));
            } else {
                UserCMD.SetButtons(buttons | (1 << 22));
            }
        } else {
            UserCMD.SetButtons(buttons | (1 << 22));
            enableFakeLag = true;
        }
    }
}

function slowWalk() {
    var slowWalkKey = UI.GetValue(["Legit", "General", "General", "Key assignment", "Slow walk key"]);
    var speed = getVal("Slow walk speed");

    if (slowWalkKey) {
        dir = [0, 0, 0];
        // WA, WD
        if (Input.IsKeyPressed(0x57) && Input.IsKeyPressed(0x44)) {
            dir[0] += speed;
            dir[1] += speed;
        }
        if (Input.IsKeyPressed(0x57) && Input.IsKeyPressed(0x41)) {
            dir[0] += speed;
            dir[1] -= speed;
        }

        //SA, SD
        if (Input.IsKeyPressed(0x53) && Input.IsKeyPressed(0x44)) {
            dir[0] -= speed;
            dir[1] += speed;
        }
        if (Input.IsKeyPressed(0x53) && Input.IsKeyPressed(0x41)) {
            dir[0] -= speed;
            dir[1] -= speed;
        }

        // W,S -- Forward, Backwards
        if (Input.IsKeyPressed(0x57)) {
            dir[0] += speed;
        }
        if (Input.IsKeyPressed(0x53)) {
            dir[0] -= speed;
        }

        // D,A -- Right, Left
        if (Input.IsKeyPressed(0x44)) {
            dir[1] += speed;
        }
        if (Input.IsKeyPressed(0x41)) {
            dir[1] -= speed;
        }
        UserCMD.SetMovement(dir);
    }
}

function onWeaponFire(userid) {
    qSwitch = getVal("Quick switch");
    if (qSwitch == 0) return;
    var localEnt = Entity.GetLocalPlayer();
    userID = Event.GetInt("userid");
    userID_index = Entity.GetEntityFromUserID(userID);
    if (userID_index == localEnt) {
        doSwitch = true;
    } else {
        doSwitch = false;
    }
}

function quickSwitch() {
    if (!doSwitch) return;
    var localEnt = Entity.GetLocalPlayer();
    var weapon = Entity.GetName(Entity.GetWeapon(localEnt));
    qSwitch = getVal("Quick switch");
    switchString = UI.GetString(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Quick switch"]);
    if (wCategory[weapon] == "" || wCategory[weapon] == undefined) return;
    if (switchString.includes("AWP") || switchString.includes("SSG") || switchString.includes("Rifles")) {
        if (wCategory[weapon] == "MP9" || wCategory[weapon] == "MP7" || wCategory[weapon] == "Mac10" || wCategory[weapon] == "PP-Bizon" || wCategory[weapon] == "UMP45" || wCategory[weapon] == "MP5" || wCategory[weapon] == "P90" || wCategory[weapon] == "AK47" || wCategory[weapon] == "SG553" || wCategory[weapon] == "AUG" || wCategory[weapon] == "FAMAS" || wCategory[weapon] == "GALIL" || wCategory[weapon] == "M4A1-S" || wCategory[weapon] == "M4A4" || wCategory[weapon] == "SSG08" || wCategory[weapon] == "AWP" || wCategory[weapon] == "G3SG1" || wCategory[weapon] == "SCAR20" || wCategory[weapon] == "Nova" || wCategory[weapon] == "XM1014" || wCategory[weapon] == "Sawed off" || wCategory[weapon] == "MAG7" || wCategory[weapon] == "M249" || wCategory[weapon] == "Negev") {
            new Delay(0.1, switchSlot3);
            new Delay(0.3, switchSlot1);
        }
    }

    if (switchString.includes("Deagle") || switchString.includes("Pistols")) {
        if (wCategory[weapon] == "USP" || wCategory[weapon] == "Glock" || wCategory[weapon] == "P2000" || wCategory[weapon] == "CZ-75" || wCategory[weapon] == "Five Seven" || wCategory[weapon] == "Dualies" || wCategory[weapon] == "Revolver" || wCategory[weapon] == "Deagle" || wCategory[weapon] == "P250" || wCategory[weapon] == "Tec-9") {
            new Delay(0.1, switchSlot3);
            new Delay(0.3, switchSlot2);
        }
    }
}

function antiMedia() {
    if (aMedia == false) {
        Local.SetClanTag("\n".repeat(10));
        aMedia = true;
    }
}

function autoStop() {
    var isTrigger = UI.GetValue(["Legit", "General", "General", "Key assignment", "Triggerbot activation"]);
    localEnt = Entity.GetLocalPlayer();
    velocity = Entity.GetProp(localEnt, "DT_CSPlayer", "m_vecVelocity[0]");
    var speed = Math.sqrt((velocity[0] * velocity[0]) + (velocity[1] * velocity[2]) + (velocity[2] * velocity[2]));
    var direction = vectorangles(velocity);
    direction[1] = Local.GetViewAngles()[1] - direction[1];
    var forward = anglevectors(direction);
    var negative = [];

    if (visPeeking && isTrigger) {
        negative[0] = forward[0] * speed;
        negative[1] = forward[1] * speed;
        negative[2] = forward[2] * speed;
        UserCMD.SetMovement([negative[0], negative[1], 0]);
    }
}

function betterTargeting() {
    closest = get_closest_target();
    target = Ragebot.GetTarget();
    if (closest == null) return;
    if (target != closest) {
        Ragebot.ForceTarget(closest);
    }
}

function peekingInd() {
    localEnt = Entity.GetLocalPlayer();
    if (!Entity.IsAlive(localEnt)) return;
    var indColor = UI.GetColor(["Legit", "sPeC's Semirage", "sPeC's Semirage", "Enemy peeking indicator"]);

    if (visPeeking) {
        //top bottom
        Render.GradientRect(0, 0, screenSize[1] / 3, screenSize[0] * 2, 1, [indColor[0], indColor[1], indColor[2], indColor[3]], [0, 0, 0, 0]);
        Render.GradientRect(screenSize[0] / 1.2, 0, screenSize[1] / 3, screenSize[0] * 2, 1, [0, 0, 0, 0], [indColor[0], indColor[1], indColor[2], indColor[3]]);
        Render.GradientRect(0, 0, screenSize[0], screenSize[0] / 4, 0, [indColor[0], indColor[1], indColor[2], indColor[3]], [0, 0, 0, 0]);
        Render.GradientRect(0, screenSize[1] / 1.3, screenSize[0], screenSize[1] / 4, 0, [0, 0, 0, 0], [indColor[0], indColor[1], indColor[2], indColor[3]]);

        //left right

    }
}

function botSpawn() {
    if (getVal("Keep bots in spawn")) {
        team = Entity.GetTeammates();
        for (i = 0; i < team.length; i++) {
            if (Entity.IsValid(team[i]) && Entity.IsAlive(team[i]) && Entity.IsBot(team[i])) {
                new Delay(17, keepBots);
                new Delay(20, keepBots);
            }
        }
    }
}

function keepBots() {
    Cheat.ExecuteCommand("holdpos");
}

var vOptions = []

function onVoteOptions() {
    vOptions[0] = Event.GetString("option1")
    vOptions[1] = Event.GetString("option2")
    vOptions[2] = Event.GetString("option3")
    vOptions[3] = Event.GetString("option4")
    vOptions[4] = Event.GetString("option5")
}

function onVoteCast() {
    if (getVal("Show Votes")) {
        var entid = Event.GetInt("entityid");
        if (entid) {
            var team = Event.GetInt("team");
            var option = Event.GetInt("vote_option");
            var name = Entity.GetName(entid);
            var chTeam = "null";
            switch (team) {
                case 0:
                    chTeam = "[N] ";
                    break;
                case 1:
                    chTeam = "[SPECTATOR] ";
                    break;
                case 2:
                    chTeam = "[TERRORIST] ";
                    break;
                case 3:
                    chTeam = "[COUNTER-TERRORIST] ";
                    break;
                default:
                    chTeam = "[UNKOWN] ";
                    break;
            }
            var vote = vOptions[option];

            if (chTeam == "[COUNTER-TERRORIST] ") {
                teamC = "\x0B";
            } else if (chTeam == "[TERRORIST] ") {
                teamC = "\x07";
            }
            if (vote == "Yes") {
                voteC = "\x04";
            } else if (vote == "No") {
                voteC = "\x07";
            }

            Cheat.PrintColor(UI.GetColor(["Config", "Cheat", "General", "Log color"]), "[onetap.com] \0");
            Cheat.Print(chTeam + name + " voted " + vote + "\n");
            Cheat.PrintChat(teamC + chTeam + "\x0E" + name + teamC + " voted " + voteC + vote);
        }
    }
}

function thirdPerson() {
    localEnt = Entity.GetLocalPlayer();
    if (Entity.IsAlive(localEnt)) return;
    thirdPersonKey = UI.GetValue(path.Thirdperson);
    if (thirdPersonKey && UI.GetValue(path.thirdPersonWhileSpec)) {
        UI.ToggleHotkey(path.thirdPerson);
        UI.SetValue(path.thirdPersonWhileSpec, 0);
    } else if (thirdPersonKey && !UI.GetValue(path.thirdPersonWhileSpec)) {
        UI.ToggleHotkey(path.thirdPerson);
        UI.SetValue(path.thirdPersonWhileSpec, 1);
    }
}