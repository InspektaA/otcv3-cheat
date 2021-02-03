

void Resolver::PlakhovCode1()
{
    for (int i = 1; i <= g_GlobalVars->maxClients; i++)
    {
        C_BasePlayer *player = C_BasePlayer::GetPlayerByIndex(i);
        if (!player || !player->IsAlive() || player->IsDormant() || player == g_LocalPlayer)
            continue;

        if (!g_Options.new_resolver)
            return;

        auto feet_yaw = player->GetAnimOverlay(3)->m_flCycle > 0.9f && player->GetAnimOverlay(3)->m_flWeight > 0.9f && player->m_vecVelocity().Length2D() < 0.1f;
        auto body_max_rotation = 60.f;
        if (feet_yaw <= 60)
        {
            if (-60 > feet_yaw)
                player->m_angEyeAngles().yaw = body_max_rotation + player->m_angEyeAngles().yaw;
        }
        else
        {
            player->m_angEyeAngles().yaw = body_max_rotation - player->m_angEyeAngles().yaw;
        }
        if (player->GetAnimOverlay(3)->m_flCycle > 0.9)
        {
            for (int resolve_delta = 60.f; resolve_delta < -60.f; resolve_delta = resolve_delta - 20.f)
            {
                player->m_angEyeAngles().yaw = resolve_delta;
            }
        }
    }
}



