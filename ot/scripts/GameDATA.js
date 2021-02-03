Cheat.RegisterCallback("Draw", "drawGameData");

screenSize = Render.GetScreenSize();

UI.AddSliderInt("Game Data X: ", 0, screenSize[0]);
UI.AddSliderInt("Game Data Y: ", 0, screenSize[1]);
UI.AddColorPicker("Start Color:");
UI.AddColorPicker("End Color:");

function getVal(valName) {return UI.GetValue("Misc", "JAVASCRIPT", "Script items", valName);}
function getColor(valName) {return UI.GetColor("Misc", "JAVASCRIPT", "Script items", valName);}

function drawGameData() {
    data = [];


    menuSize = [200, 210];
    menuPos = [getVal("Game Data X: "), getVal("Game Data Y: ")];
    localEnt = Entity.GetLocalPlayer();

    startCol = getColor("Start Color:");
    endCol = getColor("End Color:");

    //CBaseEntity > m_iName [ string ]
    igName = Entity.GetName(localEnt);
    drawMenu(menuPos[0], menuPos[1], menuSize[0], menuSize[1], startCol, endCol, igName);

    //Get data:

    /*  duck amount */
    // CBasePlayer  > m_flDuckAmount [ int ]
    duckAmount = Entity.GetProp(localEnt, "CBasePlayer", "m_flDuckAmount");
    duckAmountStr = "Duck Amount: " + duckAmount.toString();
    if (duckAmount.toString().length > 4) duckAmountStr = "Duck Amount: " + duckAmount.toString().substring(0, 5);
    data.push(duckAmountStr);

    /* PING */
    ping = Entity.GetProp(localEnt, "CPlayerResource", "m_iPing");
    pingStr = ping.toString();
    data.push("Ping: " + pingStr);

    /* Alive */
    alive = Entity.IsAlive(localEnt);
    if (alive) data.push("Life status: Alive");
    else data.push("Life status: Dead");

    /* KDR */
    kdr = Entity.GetProp(localEnt, "CPlayerResource", "m_iKills") / Entity.GetProp(localEnt, "CPlayerResource", "m_iDeaths");
    kdrStr = "KD: " + kdr.toString();
    if (kdr.toString().length > 4) kdrStr = "KD: " + kdr.toString().substring(0, 5);
    data.push(kdrStr);
   
    /* Weapon amount */
    localWeapons = Entity.GetWeapons(localEnt);
    weaponsAmount = localWeapons.length;
    weaponsAmountStr = weaponsAmount.toString();
    data.push("Weapons: " + weaponsAmountStr);

    /* Enemy count */
    enemies = Entity.GetEnemies();
    enemyCount = enemies.length;
    enemyCountStr = enemyCount.toString();
    data.push("Enemies: " + enemyCountStr);

    /* Health */
    hp = Entity.GetProp(localEnt, "CBasePlayer", "m_iHealth");
    hpStr = hp.toString();
    data.push("HP: " + hpStr);

    /* Map name */
    mapNameStr = World.GetMapName();
    data.push("Map: " + mapNameStr);

    startYOffset = menuPos[1] + 40;

    for (var i = 0; i != data.length; i++) {
        currData = data[i];
       
        Render.String(menuPos[0] + (menuSize[0] / 2), startYOffset + (20 * i), 1, currData, [255, 255, 255, 255], 8);
    }
}

function drawMenu(x, y, sX, sY, foreColor, darkForeColor, title) {
    //We return the position of the foreground

    baseBackground = [x + 4, y + 4, sX - 8, sY - 8];

    foregroundPos = [baseBackground[0] + 4, baseBackground[1] + 28, baseBackground[2] - 8, baseBackground[3] - 32];

    //Outline
    outlineBox(x, y, sX, sY, [20, 20, 20, 255])

    //Far background
    Render.FilledRect(x, y, sX, sY, [20, 20, 20, 130]);

    //Base background outline
    outlineBox(baseBackground[0]-1, baseBackground[1]-1, baseBackground[2]+1, baseBackground[3]+1, [70, 70, 70, 255]);

    //Base background
    Render.FilledRect(baseBackground[0], baseBackground[1], baseBackground[2], baseBackground[3], [40, 40, 40, 200]);

    //Title
    Render.String( x + (sX / 2), baseBackground[1] + 5, 1, title, [230, 230, 230, 255], 8 );

    //Title 'Underline'
    stringSize = Render.TextSize(title, 8);

    Render.GradientRect(foregroundPos[0], baseBackground[1] + stringSize[1] + 5, foregroundPos[2], 5, 0, foreColor, darkForeColor);

    //Foreground outline
    outlineBox(foregroundPos[0]-1, foregroundPos[1]-1, foregroundPos[2]+1, foregroundPos[3]+1, [70, 70, 70, 255]);

    //Foreground
    Render.FilledRect(foregroundPos[0], foregroundPos[1], foregroundPos[2], foregroundPos[3], [20, 20, 20, 130]);


    return foregroundPos;
}

function outlineBox(x, y, sX, sY, color) {
    //top left -> top right
    Render.Line(x, y, x + sX, y, color);

    //top right -> bottom right
    Render.Line( x + sX, y, x + sX, y + sY, color);

    //bottom right -> bottom left
    Render.Line( x + sX, y + sY, x, y + sY, color);

    //bottom left -> top left
    Render.Line( x, y + sY, x, y, color);

}