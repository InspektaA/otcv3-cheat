/* Global Variables */
var local = Entity.GetLocalPlayer();
var wepList = {
    0: "Auto",
    1: "AWP",
    2: "Scout",
    3: "Rifle",
    4: "SMG",
    5: "Heavy Pistol",
    6: "Pistol"
};
var binlib = {};
/* ---------------- */
setup();
/* Functions */


function drawInMenu() {
    var opts = UI.GetString("Ragebot customize");

    if(!UI.GetValue("Script items", "Better multipoints"))
    {
      UI.SetEnabled("Script items", "Ragebot customize" , false);
      UI.SetEnabled("Script items", "Enabled weapons" , false);
      for (var weapon in wepList) {
        for(i = 0; i < 13;i++)
        {

          if(i == 1)
            continue;
          UI.SetEnabled("Script items", wepList[weapon] + " " + get_hitbox(i) + " multipoint scale", opts == wepList[weapon]);

        }
      }
      return;

    }
    UI.SetEnabled("Script items", "Ragebot customize" , true);
    UI.SetEnabled("Script items", "Enabled weapons" , true);
    for (var weapon in wepList) {
      for(i = 0; i < 13;i++)
      {

        if(i == 1)
          continue;
        UI.SetEnabled("Script items", wepList[weapon] + " " + get_hitbox(i) + " multipoint scale", opts == wepList[weapon]);

      }
    }


}

function weaponType() {
    var weapon = Entity.GetName(Entity.GetWeapon(local));
    var weapons = {
        "usp s": "Pistol",
        "glock 18": "Pistol",
        "p2000": "Pistol",
        "dual berettas": "Pistol",
        "r8 revolver": "Heavy Pistol",
        "desert eagle": "Heavy Pistol",
        "p250": "Pistol",
        "tec9": "Pistol",
        "mp9": "SMG",
        "mac 10": "SMG",
        "ump 45": "SMG",
        "ak 47": "Rifle",
        "sg 553": "Rifle",
        "aug": "Rifle",
        "m4a1 s": "Rifle",
        "m4a4": "Rifle",
        "ssg 08": "Scout",
        "awp": "AWP",
        "g3sg1": "Auto",
        "scar 20": "Auto"
    };
    return weapons[weapon];
}

function get_hitbox(hitbox)
{
  var hitboxes = {
    "0" : "head",
    "2" : "pelvis",
    "3" : "body",
    "4" : "thorax",
    "5" : "chest",
    "6" : "upper chest",
    "7" : "left thigh",
    "8" : "right thigh",
    "9" : "left calf",
    "10" : "right calf",
    "11" : "left foot",
    "12" : "right foot"
  };
  return hitboxes[hitbox.toString()];
}

function override() {
    if(!UI.GetValue("Script items", "Better multipoints"))
      return;
    if (weaponType() == undefined)
        return;
    var enabledWeps = fetchDropdown("Enabled weapons");
    if (enabledWeps.indexOf(weaponType()) == -1)
        return;

    var should_pass = false;
    dropdown = fetchDropdown("Enabled weapons");
    for(i = 0; i < dropdown.length;i++)
    {
      weapon = dropdown[i];
      if(weapon == weaponType())
      {
        should_pass = true;
      }
    }
    if(should_pass)
    {
      for(i = 0; i < 13;i++)
      {

        if(i == 1)
          continue;
        var should_pass_hitbox = false;
        value = UI.GetValue("Script items", wepList[weapon] + " " + get_hitbox(i) + " multipoint scale");
        if(value > 0)
        {
          Ragebot.OverrideMultipointScale( i, value);
          Cheat.Print("value set")
        }

      }
    }


}

function setup() {
    UI.AddCheckbox("Better multipoints");
    createDropdown("Enabled weapons", ["Auto", "Scout", "AWP", "Rifle", "SMG", "Pistol", "Heavy Pistol"], true);
  //  createDropdown("Enabled hitboxes", ["head" , "pelvis" , "body" , "thorax" , "chest" , "upper chest" , "left thigh" , "right thigh" , "left calf" , "right calf" , "left foot" , "right foot"], true);
    UI.AddDropdown("Ragebot customize", ["Auto", "Scout", "AWP", "Rifle", "SMG", "Pistol", "Heavy Pistol"]);
    for (weapon in wepList) {
        for(i = 0; i < 13;i++)
        {

          if(i == 1)
            continue;
          UI.AddSliderInt(wepList[weapon] + " " + get_hitbox(i) + " multipoint scale", 0, 100);
        }
    }


}


function dictLength(dict) {
    var count = 0;
    for (_ in dict) {
        count++;
    }
    return count;
}

function createDropdown(name, values, multi) {
    UI[multi ? "AddMultiDropdown" : "AddDropdown"](name, values);
    binlib[name] = {
        "multi": multi,
        "values": {}
    };
    multi && values.reverse();
    var i = 0;
    for (value in values) {
        var index = multi ? (1 << (values.length - (i + 1))) : i;
        binlib[name].values[index] = values[value];
        i++;
    }
}

function fetchDropdown(name) {
    var selection = (name ? [] : {})
    var bin = UI.GetValue("Misc", name);
    !name && function() {
        for (dropdown in binlib) selection[dropdown] =
            fetchDropdown(dropdown)
    }();
    if (name) {
        !binlib[name].multi && bin == 0 && selection.push(binlib[name]
            .values[0]) && function() {
            return selection;
        }();
        for (var i = dictLength(binlib[name].values) - 1; i >=
            0; i--) {
            if (!binlib[name].multi && i == 0) continue;
            var index = binlib[name].multi ? (1 << i) : i;
            if (bin - index >= 0) {
                bin -= (index);
                selection.push(binlib[name].values[index]);
            }
        }
    }
    return selection;
}
/* --------- */
/* Callbacks */
Global.RegisterCallback("Draw", "drawInMenu");
Global.RegisterCallback("CreateMove", "override");
/* --------- */