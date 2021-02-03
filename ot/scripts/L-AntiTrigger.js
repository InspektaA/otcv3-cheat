function main() {
    Cheat.RegisterCallback("Draw", "antiTrigger");
 
    UI.AddLabel("----->-> sPeC's Anti Trigger <-<-----");
    UI.AddCheckbox("Master Toggle");
    UI.AddCheckbox("Show Indicator");
    UI.AddCheckbox("Ignore Bots");
    UI.AddLabel("----- <-<->-> On Peek <-<->-> -----");
    UI.AddSliderInt("Limit", 0, 16);
    UI.AddSliderInt("Jitter", 0, 100);
    UI.AddLabel("------- <-<->-> --v1.1-- <-<->-> -------");
    Cheat.PrintColor([0, 255, 255, 255], "- - - > sPeC's Anti Trigger v1.0 Loaded! < - - - \n");
    flOn = UI.GetValue("Anti-Aim", "Fake-Lag", "Enabled");
    if (flOn == 1){
        oLimit = UI.GetValue("Anti-Aim", "Fake-Lag", "Limit");
        oJitter = UI.GetValue("Anti-Aim", "Fake-Lag", "Jitter");
    } else {
        oLimit = 0;
        oJitter = 0;
    }
}
main();
peeking = false;

function antiTrigger() {
 
    if (getVal("Master Toggle")){ 
        peeking = false;
        headVis = false;
        lFootVis = false;
        rFootVis = false;
        lHandVis = false;
        rHandVis = false;
        enemies = Entity.GetEnemies();
     
        for ( i = 0; i < enemies.length; i++)
        {
            nLimit = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Limit");
            nJitter = UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Jitter");
         
            //Local Hitboxes
            localEnt = Entity.GetLocalPlayer();
            localHeadPos = Entity.GetHitboxPosition(localEnt, 0);
            localEyePos = Entity.GetEyePosition(localEnt);
            localRFootPos = Entity.GetHitboxPosition(localEnt, 12);
            localLFootPos = Entity.GetHitboxPosition(localEnt, 11);
            localLHandPos = Entity.GetHitboxPosition(localEnt, 13);
            localRHandPos = Entity.GetHitboxPosition(localEnt, 14);
         
            //Enemy Hitboxes
            headHitbox = Entity.GetHitboxPosition(enemies[i], 0);
            lFootHitbox = Entity.GetHitboxPosition(enemies[i], 11);
            rFootHitbox = Entity.GetHitboxPosition(enemies[i], 12);
            lHandHitbox = Entity.GetHitboxPosition(enemies[i], 13);
            rHandHitbox = Entity.GetHitboxPosition(enemies[i], 14);
         
            //Local Hitboxes -> Enemy Hitboxes
            //head -> head
            headToHeadBT = Trace.Bullet(enemies[i], localEnt, headHitbox, localHeadPos);
            headVis = 1;
            if (headToHeadBT != null) {    headVis = headToHeadBT[1]; }
         
            //head -> left hand
            headToLHandBT = Trace.Bullet(enemies[i], localEnt, lHandHitbox, localHeadPos);
            lHandVis = 1;
            if (headToLHandBT != null) { lHandVis = headToLHandBT[1]; }
            //left foot -> left hand
            lFootToLHandBT = Trace.Bullet(enemies[i], localEnt, lHandHitbox, localLFootPos);
            lHandVis = 1;
            if (lFootToLHandBT != null) { lHandVis = lFootToLHandBT[1]; }
         
            //head -> right hand
            headToRHandBT = Trace.Bullet(enemies[i], localEnt, rHandHitbox, localHeadPos);
            rHandVis = 1;
            if (headToRHandBT != null) { rHandVis = headToRHandBT[1]; }
            //right foot -> right hand
            rFootToRHandBT = Trace.Bullet(enemies[i], localEnt, rHandHitbox, localRFootPos);
            rHandVis = 1;
            if (rFootToRHandBT != null) { rHandVis = rFootToRHandBT[1]; }
         
            //left hand -> left foot
            lHandToLFootBT = Trace.Bullet(enemies[i], localEnt, lFootHitbox, localLHandPos);
            lFootVis = 1;
            if (lHandToLFootBT != null) { lFootVis = lHandToLFootBT[1]; }
            //left foot -> left foot
            lFootToLFootBT = Trace.Bullet(enemies[i], localEnt, lFootHitbox, localLFootPos);
            lFootVis = 1;
            if (lFootToLFootBT != null) { lFootVis = lFootToLFootBT[1]; }
         
            //right hand -> right foot
            rHandToRFootBT = Trace.Bullet(enemies[i], localEnt, rFootHitbox, localRHandPos);
            rFootVis = 1;
            if (rHandToRFootBT != null) { rFootVis = rHandToRFootBT[1]; }
            //right foot -> right foot
            rFootToRFootBT = Trace.Bullet(enemies[i], localEnt, rFootHitbox, localRFootPos);
            rFootVis = 1;
            if (rFootToRFootBT != null) { rFootVis = rFootToRFootBT[1]; }
         
            if (getVal("Ignore Bots")){ 
                    if (Entity.IsValid(enemies[i]) && !Entity.IsDormant(enemies[i]) && Entity.IsAlive(enemies[i]) &&!Entity.IsBot(enemies[i]))
                    {
                        if(headVis >= 1 || lHandVis >= 1 || rHandVis >= 1 || lFootVis >= 1 || rFootVis >= 1){
                            peeking = true;
                        }
                    }
            } else {
                if (Entity.IsValid(enemies[i]) && !Entity.IsDormant(enemies[i]) && Entity.IsAlive(enemies[i]))
                {
                    if(headVis >= 1 || lHandVis >= 1 || rHandVis >= 1 || lFootVis >= 1 || rFootVis >= 1){
                        peeking = true;
                    }
                }
            }
        }
        if (peeking) {
            UI.SetValue("Anti-Aim", "Fake-Lag", "Enabled", 1);
            UI.SetValue("Anti-Aim", "Fake-Lag", "Limit", nLimit);
            UI.SetValue("Anti-Aim", "Fake-Lag", "Jitter", nJitter);
     
            if (getVal("Show Indicator")) {
                Render.String(  -1, -1, 0, "PEEKING", [19, 19, 19, 255], 20);
                Render.String(  0, 0, 0, "PEEKING", [111, 242, 109, 255], 20);
            }
        } else {
            if (getVal("Show Indicator")) { 
                Render.String(  -1, -1, 0, "NOT PEEKING", [19, 19, 19, 255], 20);
                Render.String(  0, 0, 0, "NOT PEEKING", [209, 32, 32, 255], 20);
            }
            peeking = false;
            if(flOn == 1){
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

function getVal(valueName) {
    return UI.GetValue("Misc", "JAVASCRIPT", "Script items", valueName);
}