var Ticklast = 0;
var eazy = 0;
Custom_Text = "<ChangeMe>";//Change here for custom then reload
//UI
Global.RegisterCallback( "CreateMove", "main" );
Global.RegisterCallback ( "player_death" , "Kill" );
UI.AddHotkey("                                  Set Key :");
UI.AddLabel("<|---------------| Spam |---------------|>");
UI.AddCheckbox("Enable Spammer");
UI.AddTextbox("Message");
UI.AddLabel("<|---------------| Clear |---------------|>");
UI.AddCheckbox("ClearChat");
UI.AddLabel("<|--------------| Custom |--------------|>");
UI.AddCheckbox("Custom");
UI.AddLabel("<|-----------------| EZ |-----------------|>");
UI.AddCheckbox("EZ");
UI.AddLabel("<|---------------| death |---------------|>");
UI.AddCheckbox("Enable on death");
UI.AddTextbox("Message on death");
UI.AddLabel("<|-----------------| kill |-----------------|>");
UI.AddCheckbox("Enable kill");
UI.AddTextbox("Message kill");

//main Fonction
function main()
{
        verif();

        if (UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script Items","setKey :") == true && UI.GetValue ( "Script Items" , "Enable Spammer"))
            if (Delay(44))
                Global.ExecuteCommand("say " + UI.GetString("Message"));
        
        if (UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script Items","Set Key :") == true && UI.GetValue ( "Script Items" , "ClearChat"))
            if (Delay(44))
                ClearChat();
        
        if (UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script Items","Set Key :") == true && UI.GetValue ( "Script Items" , "Custom"))
            if (Delay(44))
                Global.ExecuteCommand("say " + Custom_Text);
        
        if (UI.IsHotkeyActive("Misc", "JAVASCRIPT", "Script Items","Set Key :") == true && UI.GetValue ( "Script Items" , "EZ"))
            if (Delay(44))
                EZ();
    return;
}

function EZ()
{
    if (eazy == 0)
    {
        Global.ExecuteCommand("say █▀▀ ▀▀█");
        eazy += 1;
    }
    else if (eazy == 1)
    {
        Global.ExecuteCommand("say █▀▀ ▄▀░");
        eazy += 1;
    }
    else if (eazy == 2)
    {
        Global.ExecuteCommand("say ▀▀▀ ▀▀▀");
        eazy = 0;
    }
    return;
}

function ClearChat() //
{
    Delay(100);
    
    Global.ExecuteCommand("say ﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽ ﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽ ﷽﷽ ﷽﷽ ﷽﷽﷽ ﷽﷽﷽ ﷽ ﷽﷽ ﷽﷽﷽ ﷽﷽");
    return;
}

function verif() //not 2 at once
{
    if(UI.GetValue ( "Script Items" , "Enable Spammer") == true)
    {
        enable(4,false);enable(3,false);enable(2,false);
    }
    else if(UI.GetValue( "Script Items" , "ClearChat") == false && UI.GetValue ( "Script Items" , "Custom") == false && UI.GetValue ( "Script Items" , "EZ") == false)
    {
        enable(4,true);enable(3,true);enable(2,true);
    }
    
    if(UI.GetValue ("Script Items" , "ClearChat") == true)
    {
        enable(4,false);enable(3,false);enable(1,false);
    }
    else if(UI.GetValue( "Script Items" , "Enable Spammer") == false && UI.GetValue ( "Script Items" ,"Custom") == false && UI.GetValue ( "Script Items" , "EZ") == false)
    {
        enable(4,true);enable(3,true);enable(1,true);
    }
    
    if(UI.GetValue ( "Script Items" , "Custom") == true)
    {
        enable(4,false);enable(2,false);enable(1,false);
    }
    else if (UI.GetValue( "Script Items" , "Enable Spammer") == false && UI.GetValue ( "Script Items" , "ClearChat") == false && UI.GetValue ( "Script Items" , "EZ") == false)
    {
        enable(4,true);enable(2,true);enable(1,true);
    }
    
    if(UI.GetValue ( "Script Items" , "EZ") == true)
    {
        enable(3,false);enable(2,false);enable(1,false);
    }
    else if (UI.GetValue( "Script Items" , "Enable Spammer") == false && UI.GetValue ( "Script Items" , "ClearChat") == false && UI.GetValue ( "Script Items" ,"Custom") == false)
    {
        enable(3,true);enable(2,true);enable(1,true);
        eazy = 0;
    }
    return;
}

function enable(n, bool)
{
    switch(n)
    {
        case 1: UI.SetEnabled("Misc", "JAVASCRIPT", "Script Items","Enable Spammer","Enabled",bool);
                UI.SetEnabled("Misc", "JAVASCRIPT", "Script Items","Message","Enabled",bool);
                break;
        case 2: UI.SetEnabled("Misc", "JAVASCRIPT", "Script Items","ClearChat","Enabled",bool);
                break;
        case 3: UI.SetEnabled("Misc", "JAVASCRIPT", "Script Items","Custom","Enabled",bool);
                break;
        case 4: UI.SetEnabled("Misc", "JAVASCRIPT", "Script Items","EZ","Enabled",bool);
                break;
    }
    return;
}

function Delay(d)
{
    delay = d;
    
    if (Ticklast == 0)
    {
        Ticklast = Global.Tickcount();
        return;
    }
    
    var TickCount = Global.Tickcount();
    if ( TickCount - Ticklast < delay )
    {
        return;
    }
    else if ( TickCount - Ticklast > delay )
    {
        Ticklast = TickCount;
    }
    Ticklast = 0;
    return true;
}

function Kill()
{
    dead = Event.GetInt ( "userid" );
    killer = Event.GetInt ( "attacker" );
    dead_id = Entity.GetEntityFromUserID ( dead );
    killer_id = Entity.GetEntityFromUserID ( killer );
    
    if ( Entity.GetLocalPlayer( ) == dead_id  && UI.GetValue ( "Script Items" , "Enable on death" ))
    {
        Global.ExecuteCommand ( "say " + UI.GetString("Message on death"));
    }
    
    if ( Entity.GetLocalPlayer( ) == killer_id && Entity.GetLocalPlayer( ) !== dead_id && UI.GetValue ( "Script Items" , "Enable kill" ) )
        Global.ExecuteCommand ( "say " +  UI.GetString("Message kill"));
    return;
}