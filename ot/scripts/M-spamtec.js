UI.AddLabel("Spamtec OT Extension!")
UI.AddLabel("developed by Cri and JacobH")

function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}


function drawSnapLines( )
{
    screen_center = Render.GetScreenSize( );
    screen_center[0] = screen_center[0] / 2;
    screen_center[1] = screen_center[1] / 2;

    if ( UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "Snaplines" ) )
    {
        entities = Entity.GetEnemies();

        for ( i = 0; i < entities.length; i++ )
        if ( Entity.IsAlive(entities[i]) == true && Entity.IsDormant(entities[i]) == false)
{
            world_pos = Entity.GetRenderOrigin( entities[i] );
            screen_pos = Render.WorldToScreen( world_pos );
            switch (UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "Snapline Color")) {
                case 0:
                    Render.Line( screen_center[0], screen_center[1], screen_pos[0], screen_pos[1], [255, 0, 0, 255] );
                    break;
            
                case 1:
                    Render.Line( screen_center[0], screen_center[1], screen_pos[0], screen_pos[1], [255, 165, 0, 255] );
                    break;
                case 2:
                    Render.Line( screen_center[0], screen_center[1], screen_pos[0], screen_pos[1], [0, 255, 0, 255] );
                    break;
                    
                case 3:
                    Render.Line( screen_center[0], screen_center[1], screen_pos[0], screen_pos[1], [0, 0, 255, 255] );
                    break;

                case 4:
                    Render.Line( screen_center[0], screen_center[1], screen_pos[0], screen_pos[1], [255, 192, 203, 255] );
                    break;

                case 5:
                    Render.Line( screen_center[0], screen_center[1], screen_pos[0], screen_pos[1], [0, 0, 0, 255] );
                    break;

                case 6:
                    tickcount = Globals.Tickcount();
                    color = HSVtoRGB(tickcount % 350 / 350, 1, 1, 1, 255);
                    Render.Line( screen_center[0], screen_center[1], screen_pos[0], screen_pos[1], [color.r, color.g, color.b, 255] );
                    break;

            }
}
        }
    }

function on_player_death()
{
    var roasts = ['You just got smacked by Spamtec.cc...', 'Is that a paste? ROFL', '*DEAD*', 'You are actually trash jfc','Get good, get spamtec.cc','get dicked retard']
    var roast = roasts[Math.floor(Math.random()*roasts.length)];
    if(!UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Kill Say")) return;
    
    if(UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Kill Say Include Name")) {
        attacker = Event.GetInt("attacker");
        attacker_index = Entity.GetEntityFromUserID(attacker);
        victim = Event.GetInt("userid");
        victim_index = Entity.GetEntityFromUserID(victim);
        victim_name = Entity.GetName(victim_index);

        if (attacker_index == Entity.GetLocalPlayer())
        {
        Cheat.ExecuteCommand("say " + victim_name + ", " + roast + "\n");
        }
    } else {
        attacker = Event.GetInt("attacker");
        attacker_index = Entity.GetEntityFromUserID(attacker);
        victim = Event.GetInt("userid");
        victim_index = Entity.GetEntityFromUserID(victim);
        victim_name = Entity.GetName(victim_index);

        if (attacker_index == Entity.GetLocalPlayer())
        {
        Cheat.ExecuteCommand("say " + roast + "\n");
        }
    }  
}

//INFO Blockbot
// UI
UI.AddLabel("[+]-----------------------------------[+]")
UI.AddLabel("[+]          Trolling Options          [+]")
var UIOnKey = "Blockbot Targeting Key";
var UIDoBlock = "Blockbot On Key";
var UIMode = "Blockbot Mode";
var UIBHop = "Blockbot BHop Retreat";

var MODE_MATCH_SPEED = "Match Speed";
var MODE_MAX_SPEED = "Maximum Speed";

var blockbotModes = [
    MODE_MATCH_SPEED,
    MODE_MAX_SPEED
];

UI.AddHotkey( UIDoBlock );
UI.AddHotkey( UIOnKey );
UI.AddDropdown( UIMode, blockbotModes );
UI.AddCheckbox( UIBHop );

// Shared
var Target = null;
var CrouchBlock = false;
var LocalPlayer = null;
var NextVector = null;

// Less hard-baked stuff.
var types = {
    DEFAULT : "default",
    HOTKEY  : "hotkey"
};

var entities = {
    CCSPlayer : 40
};

// Vector stuff
function print3(desc, vec) {
    Cheat.Print( desc + ": " + vec[ 0 ] + " | " + vec[ 1 ] + " | " + vec[ 2 ] + "\n" );
};

function yaw3(v) {
    var x = v[ 0 ];
    var y = v[ 1 ];
    var z = v[ 2 ];

    return Math.atan2( y, x ) * 180 / Math.PI;
};

function dist3(a, b) {
    var ax = a[ 0 ];
    var ay = a[ 1 ];
    var az = a[ 2 ];
    var bx = b[ 0 ];
    var by = b[ 1 ];
    var bz = b[ 2 ];

    var dx = ax - bx;
    var dy = ay - by;
    var dz = az - bz;

    return Math.sqrt( dx * dx + dy * dy + dz * dz );
};

function sub3(a, b) {
    var ax = a[ 0 ];
    var ay = a[ 1 ];
    var az = a[ 2 ];
    var bx = b[ 0 ];
    var by = b[ 1 ];
    var bz = b[ 2 ];

    return [ ax - bx, ay - by, az - bz ];
};

function add3(a, b) {
    var ax = a[ 0 ];
    var ay = a[ 1 ];
    var az = a[ 2 ];
    var bx = b[ 0 ];
    var by = b[ 1 ];
    var bz = b[ 2 ];

    return [ ax + bx, ay + by, az + bz ];
};

function len3(v) {
    return dist3(v, [0,0,0]);
};

// UI helpers
function getUIVal(name, type) {
    type = type || "default";
    var value = null;

    if ( type == types.HOTKEY ) {
        value = UI.IsHotkeyActive( "Misc", "JAVASCRIPT", "Script Items", name );
    } else {
        value = UI.GetValue( "Misc", "JAVASCRIPT", "Script Items", name );
    }

    return value;
};

function setUIVal(name, value, type) {
    if ( type == types.HOTKEY ) {
        return UI.ToggleHotkey( "Misc", "JAVASCRIPT", "Script Items", name );
    }

    return UI.SetValue( "Misc", "JAVASCRIPT", "Script Items", name, value );
};

// Helpers
// I would expect to get a single float out of m_vecVelocity[0] but it actually gives me the array.
function getEntityVelocity( entity ) {
    return Entity.GetProp( Target, "CBasePlayer", "m_vecVelocity[0]" ); // This actually resolves to a vec3 instead of the first float of the vec3
};

function degToRad(deg) {
    return deg * Math.PI / 180;
};

// blockbot.
function OnFrameMain() {
    LocalPlayer = Entity.GetLocalPlayer();

    if ( !LocalPlayer ) return;

    if ( NextVector ) {
        var screenCoords = Render.WorldToScreen( NextVector );
        Render.String( screenCoords[ 0 ] - ( Render.TextSize( "x" )[ 0 ] / 2 ), screenCoords[ 1 ], 0, "x", [ 255, 0, 255, 255 ] );
    }

    if ( Target && Entity.IsAlive( LocalPlayer ) && Entity.IsAlive( Target ) ) {
        var NearPlayer_toScreen = Render.WorldToScreen( Entity.GetHitboxPosition( Target, 5 ) );
        var targetHitboxPosition = Entity.GetHitboxPosition( Target, 0 );
        var playerOrigin = Entity.GetRenderOrigin( LocalPlayer );
        var targetOrigin = Entity.GetRenderOrigin( Target );
        var color = null;

        if ( (targetHitboxPosition[ 2 ] < playerOrigin[ 2 ] && dist3( playerOrigin, targetOrigin ) < 100) ) {
            CrouchBlock = true;
            color = [ 255, 255, 0, 255 ];
        } else {
            CrouchBlock = false;
            color = [ 255, 0, 0, 255 ];
        }
           
        if ( NearPlayer_toScreen[ 0 ] != null && NearPlayer_toScreen[ 1 ] != null ) {
            Render.String( NearPlayer_toScreen[ 0 ] - ( Render.TextSize( "x" )[ 0 ] / 2 ), NearPlayer_toScreen[ 1 ], 0, "x", color );
        }
    }

    if ( !getUIVal( UIOnKey, types.HOTKEY ) || !Entity.IsAlive( LocalPlayer ) ) {
        //Cheat.Print( "Key not pressed or not alive; Bail...\n" );
        return;
    }

    if ( getUIVal( UIOnKey, types.HOTKEY ) ) {
        //Cheat.Print( "No target selected, looking for victims...\n" );

        var cEntities = Entity.GetEntitiesByClassID( entities.CCSPlayer );
   
        for ( var i = 0; i < cEntities.length; i++ ) {
            var cEntity = cEntities[ i ];

            if ( cEntity != LocalPlayer && Entity.IsAlive( cEntity ) ) {
                if ( !Target ) {
                    Target = cEntity;
                    Cheat.PrintChat( "Selected #" + Target + " - " + Entity.GetName( Target ) + " as Target.\n" );
                } else {
                    var playerOrigin = Entity.GetRenderOrigin( LocalPlayer );
                    var entityOrigin = Entity.GetRenderOrigin( cEntity );
                    var targetOrigin = Entity.GetRenderOrigin( Target );

                       if ( dist3( playerOrigin, targetOrigin ) > dist3( playerOrigin, entityOrigin ) ) {
                           // If entity is closer than target, use entity as target
                           Target = cEntity;
                           Cheat.PrintChat( "Selected #" + Target + " - " + Entity.GetName( Target ) + " as Target (closer than previous target).\n" );
                       }
                }
            }
        }
    } else if ( !getUIVal( UIOnKey, types.HOTKEY ) || !Entity.IsAlive( Target ) ) {   
        //Cheat.Print( "Key not pressed or target not alive; De-selecting...\n" );
        Target = null;
    }
};

function OnCreateMoveMain() {
    if ( Target && getUIVal( UIDoBlock, types.HOTKEY ) ) {
        var LocalAngles = Local.GetViewAngles();
        var VecForward = sub3( Entity.GetRenderOrigin( Target ), Entity.GetRenderOrigin( LocalPlayer ) );
        var otherYaw = yaw3( VecForward );
        var TargetSpeed = len3( getEntityVelocity( Target ) );

        if ( CrouchBlock ) {
            var cmdMove = [ 0, 0, 0 ];

            if ( blockbotModes[ getUIVal( UIMode ) ] == MODE_MATCH_SPEED ) {
                cmdMove[ 0 ] = ( (Math.sin(degToRad(LocalAngles[1]) ) * VecForward[1]) + (Math.cos(degToRad(LocalAngles[1]) ) * VecForward[0]) ) * 10;
                cmdMove[ 1 ] = ( (Math.cos(degToRad(LocalAngles[1]) ) * -VecForward[1]) + (Math.sin(degToRad(LocalAngles[1]) ) * VecForward[0]) ) * 10;
            } else if ( blockbotModes[ getUIVal( UIMode ) ] == MODE_MAX_SPEED ) {
                cmdMove[ 0 ] = ( (Math.sin(degToRad(LocalAngles[1]) ) * VecForward[1]) + (Math.cos(degToRad(LocalAngles[1]) ) * VecForward[0]) ) * 200;
                cmdMove[ 1 ] = ( (Math.cos(degToRad(LocalAngles[1]) ) * -VecForward[1]) + (Math.sin(degToRad(LocalAngles[1]) ) * VecForward[0]) ) * 200;
            }

            UserCMD.SetMovement( cmdMove );
        } else {
            var cmdMove = [ 0, 0, 0 ];
            var DiffYaw = otherYaw - LocalAngles[ 1 ];

            if ( DiffYaw > 180 ) {
                DiffYaw = DiffYaw - 360;
            } else if ( DiffYaw < -180 ) {
                DiffYaw = DiffYaw + 360;
            }
       
            if ( TargetSpeed > 285 && getUIVal( UIBHop ) ) {
                cmdMove[ 0 ] = -Math.abs( TargetSpeed );
            }
       
            if ( blockbotModes[ getUIVal( UIMode ) ] == MODE_MATCH_SPEED ) {
                if ( Math.abs( DiffYaw ) > 0.75 ) {
                    cmdMove[ 1 ] = 450 * -DiffYaw;
                }
            } else if ( blockbotModes[ getUIVal( UIMode ) ] == MODE_MAX_SPEED ) {
                if ( DiffYaw > 0.25 ) {
                    cmdMove[ 1 ] = -450;
                } else if ( DiffYaw < -0.25 ) {
                    cmdMove[ 1 ] = 450;
                }
            }
            UserCMD.SetMovement( cmdMove );
        }
    }
};




var g_LastSendMessageTime = 0;

function onCreateMove()
{
    if(UI.IsHotkeyActive("MISC", "JAVASCRIPT", "Script Items", "Chat Spammer")) {
        var spamText = UI.GetString("MISC", "JAVASCRIPT", "Script Items", "Chat spammer text");
        if(spamText === "") {
            spamText = UI.GetString("MISC", "JAVASCRIPT", "Script Items", "Chat Spammer Presets");
            var g_CurrentTime = Globals.Realtime();
            
            if(g_CurrentTime - g_LastSendMessageTime > UI.GetValue("MISC", "JAVASCRIPT", "Script Items", "Chat spammer delay"))
            {
                Cheat.ExecuteCommand("say " + spamText);
                g_LastSendMessageTime = g_CurrentTime;
            }
        } else {
            var g_CurrentTime = Globals.Realtime();
            
            if(g_CurrentTime - g_LastSendMessageTime > UI.GetValue("MISC", "JAVASCRIPT", "Script Items", "Chat spammer delay"))
            {
                Cheat.ExecuteCommand("say " + spamText);
                g_LastSendMessageTime = g_CurrentTime;
            }
        }
       
    }
}




var tickcount = Globals.Tickcount();

function ClearChat()
{
var ClearChatSpeed = ( UI.GetValue( "MISC", "JAVASCRIPT", "Script Items", "Clear chat speed" ) );

if ( UI.GetValue( "MISC", "JAVASCRIPT", "Script Items", "Enable clear chat" ) )
{
if ( Globals.Tickcount() - tickcount > ClearChatSpeed )
{
Cheat.ExecuteCommand("say " + "﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽﷽");
tickcount = Globals.Tickcount();
}
}
}

function Draw()
{
    screenSize = Render.GetScreenSize();

    if (UI.IsMenuOpen())
        switch (UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "Menu Background Color")) {
            case 0:
                Render.FilledRect( 0, 0, screenSize[0], screenSize[1], [ 255, 0, 0,  UI.GetValue("Misc", "JAVASCRIPT", "Menu background alpha")] );
                break;
        
            case 1:
                Render.FilledRect( 0, 0, screenSize[0], screenSize[1], [ 255, 165, 0,  UI.GetValue("Misc", "JAVASCRIPT", "Menu background alpha")] );
                break;
            case 2:
                Render.FilledRect( 0, 0, screenSize[0], screenSize[1], [ 0, 255, 0,  UI.GetValue("Misc", "JAVASCRIPT", "Menu background alpha")] );
                break;
                
            case 3:
                Render.FilledRect( 0, 0, screenSize[0], screenSize[1], [ 0, 0, 255,  UI.GetValue("Misc", "JAVASCRIPT", "Menu background alpha")] );
                break;

            case 4:
                Render.FilledRect( 0, 0, screenSize[0], screenSize[1], [ 255, 192, 203,  UI.GetValue("Misc", "JAVASCRIPT", "Menu background alpha")] );
                break;

            case 5:
                Render.FilledRect( 0, 0, screenSize[0], screenSize[1], [ 0, 0, 0,  UI.GetValue("Misc", "JAVASCRIPT", "Menu background alpha")] );
                break;

            case 6:
                tickcount = Globals.Tickcount();
                color = HSVtoRGB(tickcount % 350 / 350, 1, 1, 1, 255);
                Render.FilledRect( 0, 0, screenSize[0], screenSize[1], [ color.r, color.g, color.b,  UI.GetValue("Misc", "JAVASCRIPT", "Menu background alpha")] );
                break;

        }
}
  

function partyMode() {
    if ( UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "Party Mode" ) ) {
        tickcount = Globals.Tickcount();
        color = HSVtoRGB(tickcount % 350 / 350, 1, 1, 1, 255);
        Render.FilledRect( 0, 0, screenSize[0], screenSize[1], [ color.r, color.g, color.b,  UI.GetValue("Misc", "JAVASCRIPT", "Party Mode alpha")] );
    }
}

function wtf() {
    if ( UI.GetValue( "Misc", "JAVASCRIPT", "Script items", "Wtf??" ) ) {
        tickcount = Globals.Tickcount();
        color = HSVtoRGB(tickcount % 350 / 350, 1, 1, 1, 255);
        Render.FilledRect( 0, 0, screenSize[0], screenSize[1], [ color.r, color.g, color.b,  255] );
    }
}


function Main( )
{
    UI.AddLabel("[+]-----------------------------------[+]")
    UI.AddLabel("[+]                 Visuals                 [+]")
    Cheat.PrintChat("Spamtec JS Initialized" + "\n");
    UI.AddCheckbox("Snaplines");
    UI.AddDropdown("Snapline Color", [ "Red", "Orange", "Green", "Blue", "Pink", "Black", "Rainbow" ]);
    UI.AddSliderInt( "Menu background alpha", 80, 225 );
    UI.AddDropdown("Menu Background Color", [ "Red", "Orange", "Green", "Blue", "Pink", "Black", "Rainbow" ]);
    UI.AddCheckbox("Wtf??");
    UI.AddCheckbox("Party Mode");
    UI.AddSliderInt( "Party Mode alpha", 10, 50 );
    Cheat.RegisterCallback("Draw", "Draw")
    UI.AddLabel("[+]-----------------------------------[+]")
    UI.AddLabel("[+]      Killsay And ChatSpam      [+]")
    UI.AddCheckbox("Kill Say");
    UI.AddCheckbox("Kill Say Include Name");
    UI.AddHotkey("Chat Spammer")
    UI.AddSliderFloat("Chat spammer delay", 0.05, 180.0);
    UI.AddTextbox("Chat spammer text");
    UI.AddDropdown( "Chat Spammer Presets", [ "Spamtec.cc on top", "https://Spamtec.cc", "https://discord.gg/j6SgAdW", "( ͡ʘ ͜ʖ ͡ʘ)  Fuck bitches get aids  ( ͡ʘ ͜ʖ ͡ʘ)", "Cri has big pp", "Jacob has big pp", "Cri's E-GF has a fat ass forehead UWU" ] );
    UI.AddCheckbox("Enable clear chat");
    
    UI.AddSliderInt("Clear chat speed", 1, 100);

    UI.AddLabel("[+]-----------------------------------[+]")
    
    UI.SetValue( "MISC", "JAVASCRIPT", "Script Items", "Enable clear chat", false ) // Disable by default
    UI.SetValue( "MISC", "JAVASCRIPT", "Script Items", "Clear chat speed", 22 ) // Set speed to 22 by default
    Cheat.RegisterCallback( "Draw", "drawSnapLines" );
    Cheat.RegisterCallback("player_death", "on_player_death");
    Cheat.RegisterCallback( "Draw", "OnFrameMain" );
    Cheat.RegisterCallback( "CreateMove", "OnCreateMoveMain" );
    Cheat.RegisterCallback("CreateMove", "ClearChat");
    Cheat.RegisterCallback("CreateMove", "onCreateMove");
    Cheat.RegisterCallback("Draw", "partyMode");
    Cheat.RegisterCallback("Draw", "wtf");
}

Main( );