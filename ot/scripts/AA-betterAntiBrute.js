function RADTODEG(radians){
    return radians * 180 / Math.PI
}
function calcAngle(source,entityPos){
    var delta = []
    delta[0] = source[0] - entityPos[0]
    delta[1] = source[1] - entityPos[1]
    delta[2] = source[2] - entityPos[2]
    var angles = []
    var viewangles = Local.GetViewAngles()
    angles[0] = RADTODEG(Math.atan(delta[2] / Math.hypot(delta[0], delta[1]))) - viewangles[0]
    angles[1] = RADTODEG(Math.atan(delta[1] / delta[0])) - viewangles[1]
    angles[2] = 0
    if(delta[0] >= 0)
        angles[1] += 180

    return angles
}
UI.AddSliderInt("Max Brute FOV", 0, 35)
UI.AddCheckbox("Anti-Onetap ;)")
var cur_fakeyaw = Local.GetFakeYaw();
var cur_realyaw = Local.GetRealYaw();
var shots = 0
//getCurrentYaw();

function onBulletImpact(){
    var ent = Entity.GetEntityFromUserID(Event.GetInt("userid"))
    if(ent == Entity.GetLocalPlayer() || !Entity.IsTeammate(ent))
        return
    var pos = [Event.GetFloat("x"), Event.GetFloat("y"), Event.GetFloat("z")]
    var ang = calcAngle(Entity.GetEyePosition(ent), pos)
    var angToLocal = calcAngle(Entity.GetEyePosition(ent), Entity.GetHitboxPosition(Entity.GetLocalPlayer(), 0))
    var delta = [angToLocal[0]-ang[0],angToLocal[1]-ang[1],0]
    var FOV = Math.sqrt(delta[0] * delta[0] + delta[1] * delta[1])
    //getCurrentYaw();
    if(FOV < UI.GetValue("Max Brute FOV")) {
        AntiAim.SetOverride(1);
        AntiAim.SetFakeOffset(cur_fakeyaw - 30);
        AntiAim.SetRealOffset(cur_realyaw - 30);
    }
    if(UI.GetValue("Anti-Onetap ;)")) {
        shots++
    }
        if(!(shots % 4)) {
            //getCurrentYaw();
            AntiAim.SetOverride(1);
            AntiAim.SetFakeOffset(cur_fakeyaw + 30);
            AntiAim.SetRealOffset(cur_realyaw + 30);
        }
}
function playerhurt(){
    if(Entity.GetEntityFromUserID(Event.GetInt("userid")) == Entity.GetLocalPlayer()) {
        //getCurrentYaw();
        AntiAim.SetOverride(1);
        AntiAim.SetFakeOffset(cur_fakeyaw + 30);
        AntiAim.SetRealOffset(cur_realyaw + 30);
    }
}

Cheat.RegisterCallback("player_hurt", "playerhurt")
Cheat.RegisterCallback("bullet_impact", "onBulletImpact")
Cheat.RegisterCallback("CreateMove", "playerhurt")
Cheat.RegisterCallback("CreateMove", "onBulletImpact")