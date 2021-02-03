UI.AddColorPicker("Velocity color")
function velocity(){
    var local = Entity.GetLocalPlayer()
    var velocity = Entity.GetProp(local,"DT_BasePlayer","m_vecVelocity[0]")
    if(!local || !Entity.IsAlive(local)) return
    var col = UI.GetColor("Script Items","Velocity color")

    if(UI.IsHotkeyActive("Visual","WORLD","Thirdperson")){
    var first = Entity.GetRenderOrigin(local)
    var shorten = 4
    var second = [first[0] + (velocity[0]/shorten), first[1] + (velocity[1]/shorten),first[2]]
    var w2s = Render.WorldToScreen(first)
    var w2s2 = Render.WorldToScreen(second)
    Render.Line(w2s[0],w2s[1],w2s2[0],w2s2[1],[col[0],col[1],col[2],255])
    }
    else{
        var first = Entity.GetRenderOrigin(local)
        var difference = [velocity[0]-first[0],velocity[1]-first[1]]
        var length = 4
        var screen = Render.GetScreenSize();screen[0]/=2;screen[1]/=2;
        var draw = function(x,y){
            Render.Line(screen[0],screen[1],screen[0]+x,screen[1]+y,[col[0],col[1],col[2],255])
        }
        var cos = function(x){
            return Math.cos(x)
        }
        var sin = function(x){
            return Math.sin(x)
        }
        var angles = Local.GetViewAngles()[1]
        angles+=90

        var velocity2 = [velocity[0]+first[0],velocity[1]+first[1],velocity[2]+first[2]]
        var val = [
            velocity[0] * cos(angles / 180 * Math.PI) + velocity[1] * sin(angles / 180 * Math.PI),
            velocity[1] * cos(angles / 180 * Math.PI) - velocity[0] * sin(angles / 180 * Math.PI)
        ]
        val[0] = -val[0]
        val[0]/=length
        val[1]/=length
        draw(val[0],val[1])
      
    }
}
Cheat.RegisterCallback("Draw","velocity")