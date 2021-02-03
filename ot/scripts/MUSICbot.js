

// Created by svyanov
// https://discord.gg/9fqW4Cv - Free Help, Sounds, Scripts. Ask any questions, i'll help you!
// rand_kill - Kill sound array
// rand_dead - Death sound array
// offtime - delay to stop mic after play
// dir - Directory with sounds

// Be sure your sound are in .wav format and have 22050hz.
script_version = 3.0;
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// SoundBase script | Config by "svyanov" | Script version: 3

dir = "D:\\sounds\\mario\\";
rand_kill = [
"coin.wav", // You can write without .wav
"jump1", // Or with.wav if you want
"jump2.wav"
];
rand_kill_head = [
"mushroom1",
"mushroom2.wav"
];
rand_dead = [
"tunnel",
"lose.wav"
];
mvp = [
"win1.wav",
"win2.wav"
];
rand_assist = [
"cannon.wav" // If you want to play only 1 sound on this event, set only 1 sound
];

offtime = 2

prefix = "LEZI";
soundbase_killsound = true;
soundbase_hsound = false;
soundbase_deathsound = false;
soundbase_assistsound = false;
soundbase_mvpsound = false;
soundbase_drawsound = false;
soundbase_prefix = false;
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// ========== END CONFIG ==========









// DO NOT TOUCH NEXT LINES IF YOU DON'T UNDERSTAND WHAT ARE YOU DOING
function print(str)
{
Cheat.PrintColor( [ 0, 255, 0, 255 ], "[SoundBase] " + str + "\n" );
Cheat.PrintChat("[SoundBase] " + str + "\n")
}

function ExportConfig()
{
// It's not possible to do it in 1 var and just print this var, due to overflow => crash.
dirtext = dir.replace(/\\/g, "\\\\");
print("Copy this config:");
print("\\/\\/\\/\\/\\/\\/\\/\\/\n")
Cheat.Print("// SoundBase script | Config by \"" + Cheat.GetUsername() + "\" | Script version: " + script_version + "\n\n");
Cheat.Print("dir = \"" + dirtext + "\";\n");
Cheat.Print("rand_kill = [\n");
rand_kill.forEach(function(sound){
Cheat.Print(" \"" + sound + "\",\n");
});
Cheat.Print("];\nrand_kill_head = [\n");
rand_kill_head.forEach(function(sound){
Cheat.Print(" \"" + sound + "\",\n");
});
Cheat.Print("];\nrand_dead = [\n");
rand_dead.forEach(function(sound){
Cheat.Print(" \"" + sound + "\",\n");
});
Cheat.Print("];\nmvp = [\n");
mvp.forEach(function(sound){
Cheat.Print(" \"" + sound + "\",\n");
});
Cheat.Print("];\nrand_assist = [\n");
rand_assist.forEach(function(sound){
Cheat.Print(" \"" + sound + "\",\n");
});
Cheat.Print("];\n\nofftime = " + offtime + "\n\nprefix = \"" + prefix + "\";\n");
Cheat.Print("soundbase_killsound = " + GetVar("Kill Sound") + ";\n");
Cheat.Print("soundbase_hsound = " + GetVar("HeadShot Sound") + ";\n");
Cheat.Print("soundbase_assistsound = " + GetVar("Assist Sound") + ";\n");
Cheat.Print("soundbase_deathsound = " + GetVar("Death Sound") + ";\n");
Cheat.Print("soundbase_mvpsound = " + GetVar("MVP Sound") + ";\n");
Cheat.Print("soundbase_drawsound = " + GetVar("Draw Next Sound") + ";\n");
Cheat.Print("soundbase_prefix = " + GetVar("Prefix") + ";\n\n");
print("/\\/\\/\\/\\/\\/\\/\\/\\")
}

function validate_arr(arr)
{
var i = 0;
arr.forEach(function(k) {
if (k.endsWith(".wav")) {
arr[i] = k.replace(/.wav/g, "");
print('Fixing arr var "' + k + '" -> "' + arr[i] + '"');
i = i + 1
}
});
}
// fproof
dir = dir.replace(/\/\//g, "\\");
dir = dir.replace(/\//g, "\\"); // replace / to \
if (!dir.endsWith("\\")) {
dir = dir + "\\"; // Add \ to end of dir
print("Added \\ to end of dir. Now it's: " + dir );
}
validate_arr(rand_kill);
validate_arr(rand_kill_head);
validate_arr(rand_dead);
validate_arr(rand_assist);
validate_arr(mvp);
// end

UI.AddLabel("<||| SoundBase " + script_version + " |||>");
UI.AddCheckbox("Kill Sound");
UI.AddCheckbox("HeadShot Sound");
UI.AddCheckbox("Assist Sound");
UI.AddCheckbox("Death Sound");
UI.AddCheckbox("MVP Sound");
UI.AddCheckbox("Draw Next Sound");
UI.AddCheckbox("Prefix");

UI.AddCheckbox("Export config to console");

function SetConfig(varr, value)
{
UI.SetValue("Misc", "JAVASCRIPT", "Script Items", varr, value);
}

SetConfig("Kill Sound", soundbase_killsound);
SetConfig("HeadShot Sound", soundbase_hsound);
SetConfig("Assist Sound", soundbase_assistsound);
SetConfig("Death Sound", soundbase_deathsound);
SetConfig("MVP Sound", soundbase_mvpsound);
SetConfig("Draw Next Sound", soundbase_drawsound);
SetConfig("Prefix", soundbase_prefix);

mirkostate = false

function arrRandom(arr) {
return arr[Math.floor(Math.random()*arr.length)];
}

item_kill = arrRandom(rand_kill);
item_kill_head = arrRandom(rand_kill_head);
item_assist = arrRandom(rand_assist);
item_dead = arrRandom(rand_dead);
item_mpv = arrRandom(mvp);

var curTime = Globals.Curtime();

offplay = 0

function GetVar(cat)
{
return UI.GetValue("Misc", "JAVASCRIPT", "Script Items", cat)==1?true:false;
}
function drawKSound()
{
curTime = Globals.Curtime();
screen_size = Render.GetScreenSize();
ScrW = screen_size[0];
ScrH = screen_size[1];
if (mirkostate && curTime > offplay) {
Sound.StopMicrophone();
mirkostate = false
}

if (GetVar("Draw Next Sound")) {
Render.String( 100, ScrH - 400, 1, "Kill: " + item_kill + "\n" + (GetVar("HeadShot Sound")?"Headshot: " + item_kill_head:"") + "\n" + (GetVar("Death Sound")?"Death: " + item_dead:"") + "\n" + (GetVar("Assist Sound")?"Assist: " + item_assist:"") + "\n" + (GetVar("MVP Sound")?"MVP Sound: " + item_mpv:""), [ 255, 255, 255, 255 ] );
}
if (GetVar("Export config to console")) {
UI.SetValue( "Misc", "JAVASCRIPT", "Script Items", "Export config to console", false );
ExportConfig();
Cheat.PrintChat("[SoundBase] config printed, check console!")
for (i = 0; i < 10; i++) {
Cheat.PrintChat(" ")
}
Cheat.PrintChat("[SoundBase] config printed, check console!")
Cheat.PrintChat("[SoundBase] config printed, check console!")
Cheat.PrintChat("[SoundBase] config printed, check console!")
Cheat.PrintChat("[SoundBase] config printed, check console!")
Cheat.PrintChat("[SoundBase] config printed, check console!")
}
}

Cheat.RegisterCallback("Draw", "drawKSound")

function GenRand()
{
item_kill = arrRandom(rand_kill);
item_kill_head = arrRandom(rand_kill_head);
item_dead = arrRandom(rand_dead);
item_assist = arrRandom(rand_assist);
item_mpv = arrRandom(mvp);
}

function PlaySound(sound)
{
mirkostate = true;
Sound.PlayMicrophone(dir+sound+".wav");
Sound.Play(dir+sound+".wav");
if (GetVar("Prefix")) {
Local.SetClanTag(prefix);
}
GenRand();
offplay = curTime + offtime
}


function playSoundOnKill()
{
lp = Entity.GetLocalPlayer();
attacker = Entity.GetEntityFromUserID(Event.GetInt("attacker"));
ishead = Event.GetInt("headshot");
assister = Entity.GetEntityFromUserID(Event.GetInt("assister"));
deadpl = Entity.GetEntityFromUserID(Event.GetInt("userid"))
if (lp == attacker) {
if (GetVar("Kill Sound")) {
if (GetVar("HeadShot Sound") && ishead == 1) {
PlaySound(item_kill_head);
} else {
PlaySound(item_kill);
}
}
} else if(lp == deadpl) {
if (GetVar("Death Sound")) {
PlaySound(item_dead);
}
} else if (lp == assister) {
if (GetVar("Assist Sound")) {
PlaySound(item_assist);
}
}
}

Cheat.RegisterCallback("player_death", "playSoundOnKill");
function playBabkaMVP()
{
lp = Entity.GetLocalPlayer();
mvppl = Entity.GetEntityFromUserID(Event.GetInt("userid"))
if (lp == mvppl && UI.GetValue("MVP Sound", "Enabled") == 1) {
PlaySound(item_mpv);
}
}
Cheat.RegisterCallback("round_mvp", "playBabkaMVP")

