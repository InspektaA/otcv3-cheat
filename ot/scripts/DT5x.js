var time, delay, fillbar, shotsfired;

function can_shift_shot(ticks_to_shift) {
    var me = Entity.GetLocalPlayer();
    var wpn = Entity.GetWeapon(me);

    if (me == null || wpn == null)
        return false;

    var tickbase = Entity.GetProp(me, "CCSPlayer", "m_nTickBase");
    var curtime = Globals.TickInterval() * (tickbase-ticks_to_shift)

    if (curtime < Entity.GetProp(me, "CCSPlayer", "m_flNextAttack"))
        return false;

    if (curtime < Entity.GetProp(wpn, "CBaseCombatWeapon", "m_flNextPrimaryAttack"))
        return false;

    return true;
}

function _TBC_CREATE_MOVE() {
    Exploit.OverrideMaxProcessTicks(18); //Declamep our shift
    var is_charged = Exploit.GetCharge()

    Exploit[(is_charged != 1 ? "Enable" : "Disable") + "Recharge"]()

    if (can_shift_shot(16) && is_charged != 1) { //Check maximum processed ticks on normal community servers
        Exploit.DisableRecharge();
        Exploit.Recharge();
    }

    Exploit.OverrideTolerance(0);
    Exploit.OverrideShift(16);  //Override to maximum still will be super buggy but hey it's what you idiots want :)
}