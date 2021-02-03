// Add hotkeys to the menu.
UI.AddHotkey(["Config", "SUBTAB_MGR", "Scripts", "SHEET_MGR", "Keys", "JS Keybinds"], "Fake duck", "Fake duck");
UI.AddHotkey(["Config", "SUBTAB_MGR", "Scripts", "SHEET_MGR", "Keys", "JS Keybinds"], "Matchmaking fake duck", "Fake duck");

function cm() {
    // Get buttons.
    var buttons = UserCMD.GetButtons();

    // Enable fast duck.
    UserCMD.SetButtons(buttons | (1 << 22))

    var chokedcommands;

    // Keybinds.
    const fakeduck = UI.GetValue(["Config", "SUBTAB_MGR", "Scripts", "SHEET_MGR", "Keys", "JS Keybinds", "Fake duck"])
    const mmfakeduck = UI.GetValue(["Config", "SUBTAB_MGR", "Scripts", "SHEET_MGR", "Keys", "JS Keybinds", "Matchmaking fake duck"])

    // HvH choke amount.
    if ( fakeduck ) {
        UI.SetValue(["Rage", "Fake Lag", "General", "Limit"], 14)
        chokedcommands = Globals.ChokedCommands() <= 7;
    }

    // Matchmaking choke amount.
    if ( mmfakeduck ) {
        UI.SetValue(["Rage", "Fake Lag", "General", "Limit"], 8)
        chokedcommands = Globals.ChokedCommands() <= 3;
    }


    // Are we holding the fake duck key?
    if ( fakeduck || mmfakeduck) {
        // Make sure we're lagging.
        UI.SetValue(["Rage", "Fake Lag", "General", "Enabled"], 1)

        // Are we on the ground?
        if (!Entity.GetProp(Entity.GetLocalPlayer(), "CBasePlayer", "m_hGroundEntity")) {
            // We shouldn't duck just yet... Let's stand up instead!
            if (chokedcommands) {
                UserCMD.SetButtons(buttons &= ~(1 << 2));
            }

            // Duck if we're choking more than the required ticks.
            else {
                UserCMD.SetButtons(buttons |= (1 << 2));
            }
        }
    }
}
Cheat.RegisterCallback("CreateMove", "cm")