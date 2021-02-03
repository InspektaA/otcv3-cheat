Cheat.RegisterCallback("CreateMove", "cMove");
Cheat.RegisterCallback("Draw", "drawFunc");
Cheat.RegisterCallback("bomb_defused", "defuseFunc");

var bombEntity = undefined;
var tooLate = false;

function cMove() {
    bombEntity = Entity.GetEntitiesByClassID(128)[0];
    if (bombEntity == undefined) return;
    if (Entity.GetProp(bombEntity, "CPlantedC4", "m_flC4Blow") - Globals.Curtime() <= Entity.GetProp(bombEntity, "CPlantedC4", "m_flDefuseLength") + 1) UI.SetValue("Misc", "GENERAL", "Miscellaneous", "Auto defuse", 1);
}

function drawFunc() {
    if (bombEntity == undefined || !Entity.IsValid(bombEntity)) return;
    var bombScreenPos = Render.WorldToScreen(Entity.GetRenderOrigin(bombEntity));
    Render.String(bombScreenPos[0], bombScreenPos[1], 1, Entity.GetProp(bombEntity, "CPlantedC4", "m_flC4Blow") < Globals.Curtime() ? "BOOM" : (Entity.GetProp(bombEntity, "CPlantedC4", "m_flC4Blow") - Globals.Curtime()).toString(), [255, 255, 0, 255]);
}

function defuseFunc() {
    if (bombEntity == undefined) return;
    var curTick = Globals.Curtime();
    Cheat.PrintChat("winter2019: You defused with " + (curTick - Entity.GetProp(bombEntity, "CPlantedC4", "m_flC4Blow")).toString() + " ticks  to spare!");
}