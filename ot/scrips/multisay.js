// Made by MikiMiki ;)
// UI Stuff
UI.AddSliderInt("", 0, 0);
UI.AddLabel("MultiSay by MikiMiki");
UI.AddCheckbox("Enable Killsay");
UI.AddTextbox("Say(s)");
UI.AddCheckbox("Enable Killsound");
UI.AddTextbox("Filename(s)");
UI.AddCheckbox("Hear Killsound");
UI.AddSliderFloat("Play Length", 0.0, 10.0);
UI.AddLabel("Note: Set length to longest sound");
UI.AddSliderInt("", 0, 0);

// Functions to return killsays and killsounds
function rand_chat() {
    string = UI.GetString("Misc", "JAVASCRIPT", "Script items", "Say(s)");
    killsays = string.split(", ");
    return killsays[randint(0, killsays.length)];
}

function rand_sound() {
    string = UI.GetString("Misc", "JAVASCRIPT", "Script items", "Filename(s)");
    sounds = string.split(", ");
    return sounds[randint(0, sounds.length)] + ".wav";
    }

// Killsay Section

// Function to create killsay
function killsay() {
    if (!UI.GetValue("Misc", "JAVASCRIPT", "Script items", "Enable Killsay")) return;
    if (Entity.GetEntityFromUserID(Event.GetInt("attacker")) == Entity.GetLocalPlayer()) {
        string = (Entity.GetName(Entity.GetEntityFromUserID(Event.GetInt("userid"))) + " " + rand_chat());
        display(string);
    }
}

// Function used to send in chat
function display(string) {
    Global.ExecuteCommand("say " + string);
}

// Function that returns random ints (for indexes)
function randint(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Killsound Section

// Variables used by killsound functions
var playing = false;
var started = 0.0

// Function that plays killsound
function killsound() {
    if (!UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "Enable Killsound")) return;
    if (Entity.GetEntityFromUserID(Event.GetInt("attacker")) != Entity.GetLocalPlayer()) return;
    if (Entity.GetEntityFromUserID(Event.GetInt("userid")) == Entity.GetLocalPlayer()) return;

    started = Global.Realtime();
    playing = true;

    if (UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "Hear Killsound")) {
        Global.ExecuteCommand("voice_loopback 1");
    }

    Sound.PlayMicrophone('C:\\Program Files (x86)\\Steam\\steamapps\\common\\Counter-Strike Global Offensive\\' + rand_sound());
}

// Function to handle when to stop playing killsound
function soundreset() {
    if (playing && Math.abs(started + UI.GetValue("Misc", "JAVASCRIPT", "Script Items", "Play Length") - Global.Realtime()) < 0.05) {
        playing = false;
        Sound.StopMicrophone();
        Global.ExecuteCommand("voice_loopback 0");
    }
}

// Callbacks
Global.RegisterCallback("player_death", "killsay");
Global.RegisterCallback("player_death", "killsound");
Global.RegisterCallback("FrameStageNotify", "soundreset");