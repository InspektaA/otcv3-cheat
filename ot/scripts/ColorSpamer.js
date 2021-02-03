UI.AddCheckbox("Send Test Message");
UI.AddTextbox("Message");
UI.AddDropdown("Colour", ["Blue", "Green", "White", "Gold", "Dark Red", "Lightgreen", "Lightred", "Lime", "Orchid", "Yellow", "Palered"]);
UI.AddCheckbox("send");
function send(){
    if (UI.GetValue ("Misc", "JAVASCRIPT", "script items","send")){
        var chatmsg = UI.GetString ("Misc", "JAVASCRIPT", "script items","Message");
        var color = UI.GetValue ("Misc", "JAVASCRIPT", "script items","Colour");
        if (color == 0){
            Global.ExecuteCommand("say "+ " " + chatmsg);
        }
        if (color == 1){
            Global.ExecuteCommand("say "+ "" + chatmsg);
        }
        if (color == 2){
            Global.ExecuteCommand("say "+ "" + chatmsg);
        }
        if (color == 3){
            Global.ExecuteCommand("say "+ "" + chatmsg);
        }
        if (color == 4){
            Global.ExecuteCommand("say "+ "" + chatmsg);
        }
        if (color == 5){
            Global.ExecuteCommand("say "+ "" + chatmsg);
        }
        if (color == 6){
            Global.ExecuteCommand("say "+ "" + chatmsg);
        }
        if (color == 7){
            Global.ExecuteCommand("say "+ "" + chatmsg);
        }
        if (color == 8){
            Global.ExecuteCommand("say "+ "" + chatmsg);
        }
        if (color == 9){
            Global.ExecuteCommand("say "+ "   " + chatmsg);
        }
        if (color == 10){
            Global.ExecuteCommand("say "+ "" + chatmsg);
        }
    
        
        UI.SetValue ("Misc", "JAVASCRIPT", "script items","send", false);
    }

    if (UI.GetValue ("Misc", "JAVASCRIPT", "script items","Send Test Message")){
        UI.SetValue ("Misc", "JAVASCRIPT", "script items","Send Test Message", false);
        Global.ExecuteCommand("say "+ "white green blue darkblue darkred gold grey lightgreen lightred lime orchid   yellow palered");
    }
}
Global.RegisterCallback("Draw", "send");