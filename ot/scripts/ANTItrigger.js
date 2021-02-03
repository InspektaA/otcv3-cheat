//
//    sPeC's Anti Trigger
//        v1.2
//    Thanks to Jeffeeee and Ultranite for answering my misc (stupid) questions :)
//
function main() {
    Cheat.RegisterCallback("Draw", "antiTrigger");

    screenSize = Render.GetScreenSize();
    UI.AddLabel("----->-> sPeC's Anti Trigger <-<-----");
    UI.AddCheckbox("Master Toggle");
    UI.AddCheckbox("Ignore Bots");
    UI.AddCheckbox("Show Indicator");
    UI.AddSliderInt("Indicator X", 0, (screenSize[0] - 80));
    UI.AddSliderInt("Indicator Y", 0, (screenSize[1] - 40));
    UI.AddSliderInt("Indicator Size", 20, 40);
    UI.AddLabel("----- <-<->-> On Peek <-<->-> -----");
    UI.AddSliderInt("Limit", 0, 16);
    UI.AddSliderInt("Jitter", 0, 100);
    UI.AddLabel("------- <-<->-> --v1.2-- <-<->-> -------");
    Cheat.PrintColor([0, 255, 255, 255], "- - - > sPeC's Anti Trigger v1.2 Loaded! < - - - \n");
    flOn = UI.GetValue("Anti-Aim", "Fake-Lag", "Enabled");
    if (flOn == 1){
        oLimit = UI.GetValue("Anti-Aim", "Fake-Lag", "Limit");
        oJitter = UI.GetValue("Anti-Aim", "Fake-Lag", "Jitter");
    } else {
        oLimit = 0;
        oJitter = 0;
    }
    UI.SetEnabled("Indicator X", false);
    UI.SetEnabled("Indicator Y", false);
    UI.SetEnabled("Indicator Size", false);
   
}
main();

function getVal(valueName) {
    return UI.GetValue("Misc", "JAVASCRIPT", "Script items", valueName);
}


function antiTrigger() {
    visPeeking = false;
    headVis = false;
    lFootVis = false;
    rFootVis = false;
    lHandVis = false;
    rHandVis = false;
    enemies = Entity.GetEnemies();
    localEnt = Entity.GetLocalPlayer();

    if (!Entity.IsAlive(localEnt) && !Entity.IsValid(localEnt)) {
        nLimit = oLimit;
        nJitter = oJitter;
        visPeeking = false;
        return;
    }

    if (getVal("Master Toggle")) {
        localEnt = Entity.GetLocalPlayer();
        indX = getVal("Indicator X");
        indY = getVal("Indicator Y");
        indS = getVal("Indicator Size");
        nLimit = getVal("Limit");
        nJitter = getVal("Jitter");

        if (getVal("Show Indicator")) {
            UI.SetEnabled("Indicator X", true);
            UI.SetEnabled("Indicator Y", true);
            UI.SetEnabled("Indicator Size", true);
        } else {
            UI.SetEnabled("Indicator X", false);
            UI.SetEnabled("Indicator Y", false);
            UI.SetEnabled("Indicator Size", false);
        }

        for (i = 0; i < enemies.length; i++) {
            localEnt = Entity.GetLocalPlayer();
            localHeadPos = Entity.GetHitboxPosition(localEnt, 0);
            localEyePos = Entity.GetEyePosition(localEnt);
            localRFootPos = Entity.GetHitboxPosition(localEnt, 12);
            localLFootPos = Entity.GetHitboxPosition(localEnt, 11);
            localLHandPos = Entity.GetHitboxPosition(localEnt, 13);
            localRHandPos = Entity.GetHitboxPosition(localEnt, 14);
            headHitbox = Entity.GetHitboxPosition(enemies[i], 0);
            lFootHitbox = Entity.GetHitboxPosition(enemies[i], 11);
            rFootHitbox = Entity.GetHitboxPosition(enemies[i], 12);
            lHandHitbox = Entity.GetHitboxPosition(enemies[i], 13);
            rHandHitbox = Entity.GetHitboxPosition(enemies[i], 14);
            headToHeadBT = Trace.Bullet(enemies[i], localEnt, headHitbox, localHeadPos);
            headVis = 1;
            if (headToHeadBT != null) { headVis = headToHeadBT[1]; }
            headToLHandBT = Trace.Bullet(enemies[i], localEnt, lHandHitbox, localHeadPos);
            lHandVis = 1;
            if (headToLHandBT != null) { lHandVis = headToLHandBT[1]; }
            lFootToLHandBT = Trace.Bullet(enemies[i], localEnt, lHandHitbox, localLFootPos);
            lHandVis = 1;
            if (lFootToLHandBT != null) { lHandVis = lFootToLHandBT[1]; }
            headToRHandBT = Trace.Bullet(enemies[i], localEnt, rHandHitbox, localHeadPos);
            rHandVis = 1;
            if (headToRHandBT != null) { rHandVis = headToRHandBT[1]; }
            rFootToRHandBT = Trace.Bullet(enemies[i], localEnt, rHandHitbox, localRFootPos);
            rHandVis = 1;
            if (rFootToRHandBT != null) { rHandVis = rFootToRHandBT[1]; }
            lHandToLFootBT = Trace.Bullet(enemies[i], localEnt, lFootHitbox, localLHandPos);
            lFootVis = 1;
            if (lHandToLFootBT != null) { lFootVis = lHandToLFootBT[1]; }
            lFootToLFootBT = Trace.Bullet(enemies[i], localEnt, lFootHitbox, localLFootPos);
            lFootVis = 1;
            if (lFootToLFootBT != null) { lFootVis = lFootToLFootBT[1]; }
            rHandToRFootBT = Trace.Bullet(enemies[i], localEnt, rFootHitbox, localRHandPos);
            rFootVis = 1;
            if (rHandToRFootBT != null) { rFootVis = rHandToRFootBT[1]; }
            rFootToRFootBT = Trace.Bullet(enemies[i], localEnt, rFootHitbox, localRFootPos);
            rFootVis = 1;
            if (rFootToRFootBT != null) { rFootVis = rFootToRFootBT[1]; }

            if (getVal("Master Toggle") && getVal("Ignore Bots")) {
                if (Entity.IsValid(enemies[i]) && !Entity.IsDormant(enemies[i]) && Entity.IsAlive(enemies[i]) && !Entity.IsBot(enemies[i])) {
                    if (headVis >= 1 || lHandVis >= 1 || rHandVis >= 1 || lFootVis >= 1 || rFootVis >= 1) {
                        visPeeking = true;
                    }
                }
            } else if (getVal("Master Toggle")) {
                if (Entity.IsValid(enemies[i]) && !Entity.IsDormant(enemies[i]) && Entity.IsAlive(enemies[i])) {
                    if (headVis >= 1 || lHandVis >= 1 || rHandVis >= 1 || lFootVis >= 1 || rFootVis >= 1) {
                        visPeeking = true;
                    }
                }
            }
        }

        if (visPeeking) {
            UI.SetValue("Anti-Aim", "Fake-Lag", "Enabled", 1);
            UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", nLimit);
            UI.SetValue("Anti-Aim", "Fake-Lag", "Jitter", nJitter);

            if (getVal("Show Indicator")) {
                Render.String((indX + 1), (indY + 1), 0, "PEEKING", [19, 19, 19, 255], indS);
                Render.String(indX, indY, 0, "PEEKING", [50, 255, 50, 255], indS);
            }
        } else {
            if (getVal("Show Indicator")) {
                Render.String((indX + 1), (indY + 1), 0, "NOT PEEKING", [19, 19, 19, 255], indS);
                Render.String(indX, indY, 0, "NOT PEEKING", [220, 20, 20, 255], indS);
            }
            visPeeking = false;
            if (flOn == 1) {
                UI.SetValue("Anti-Aim", "Fake-Lag", "Enabled", 1);
                UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", oLimit);
                UI.SetValue("Anti-Aim", "Fake-Lag", "Jitter", oJitter);
            } else {
                UI.SetValue("Anti-Aim", "Fake-Lag", "Enabled", 0);
                UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", oLimit);
                UI.SetValue("Anti-Aim", "Fake-Lag", "Jitter", oJitter);
            }
        }
    } else { return; }
}
