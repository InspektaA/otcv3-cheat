

UI.AddCheckbox("Enable Auto-Hold-Pos");

function on_freeze_end() {
    if (!UI.GetValue("Script items", "Enable Auto-Hold-Pos")) return;

    enemies = Entity.GetTeammates();

    for (e in enemies) {
        enemy = enemies[e];

        if (Entity.IsBot(enemy)) {
            Cheat.ExecuteCommand("holdpos");
            return;
        }
    }
}

Cheat.RegisterCallback("round_freeze_end", "on_freeze_end");

