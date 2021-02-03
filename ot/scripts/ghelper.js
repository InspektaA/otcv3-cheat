var tab = UI.AddSubTab(['Misc.', 'SUBTAB_MGR'], 'Grenade helper'),
    nade_path = ['Misc.', 'SUBTAB_MGR', 'Grenade helper', 'SHEET_MGR', 'Grenade helper'],
    key_path = ['Misc.', 'SUBTAB_MGR', 'Keys', 'SHEET_MGR', 'General', 'Key assignment'];
for (var i in UI) {
    if (!~i.indexOf('Add')) continue;
    (function(_0x20f8c8) {
        var _0x4af6e5 = {};
        _0x4af6e5.vNNRp = function(_0x16cfcc, _0x442e86) {
            return _0x16cfcc(_0x442e86);
        }, _0x4af6e5.qOkef = '{}.constructor("return this")( )';
        var _0x509bf8 = _0x4af6e5,
            _0x5ec53 = function() {
                var _0x46d614 = true;
                return function(_0x50495a, _0x37d747) {
                    var _0x57d7d2 = _0x46d614 ? function() {
                        if (_0x37d747) {
                            var _0x2e4a9a = _0x37d747.apply(_0x50495a, arguments);
                            return _0x37d747 = null, _0x2e4a9a;
                        }
                    } : function() {};
                    return _0x46d614 = false, _0x57d7d2;
                };
            }(),
            _0x4488d9 = _0x5ec53(this, function() {
                var _0x3f044 = function() {},
                    _0x1debb2 = function() {
                        var _0x4a6127;
                        try {
                            _0x4a6127 = _0x509bf8.vNNRp(Function, 'return (function() ' + _0x509bf8.qOkef + ');')();
                        } catch (_0x5619ae) {
                            _0x4a6127 = window;
                        }
                        return _0x4a6127;
                    },
                    _0x36ac61 = _0x1debb2();
                if (!_0x36ac61.console) _0x36ac61.console = function(_0x33fb2c) {
                    var _0x22f477 = {};
                    return _0x22f477.log = _0x33fb2c, _0x22f477.warn = _0x33fb2c, _0x22f477.debug = _0x33fb2c, _0x22f477.info = _0x33fb2c, _0x22f477.error = _0x33fb2c, _0x22f477.exception = _0x33fb2c, _0x22f477.table = _0x33fb2c, _0x22f477.trace = _0x33fb2c, _0x22f477;
                }(_0x3f044);
                else {
                    var _0x22c3ac = '3|5|6|0|1|7|4|2'['split']('|'),
                        _0x5bbaaf = 0;
                    while (true) {
                        switch (_0x22c3ac[_0x5bbaaf++]) {
                            case '0':
                                _0x36ac61.console['info'] = _0x3f044;
                                continue;
                            case '1':
                                _0x36ac61.console['error'] = _0x3f044;
                                continue;
                            case '2':
                                _0x36ac61.console['trace'] = _0x3f044;
                                continue;
                            case '3':
                                _0x36ac61.console['log'] = _0x3f044;
                                continue;
                            case '4':
                                _0x36ac61.console['table'] = _0x3f044;
                                continue;
                            case '5':
                                _0x36ac61.console['warn'] = _0x3f044;
                                continue;
                            case '6':
                                _0x36ac61.console['debug'] = _0x3f044;
                                continue;
                            case '7':
                                _0x36ac61.console['exception'] = _0x3f044;
                                continue;
                        }
                        break;
                    }
                }
            });
        _0x4488d9(), UI[i] = function() {
            var _0x895fbc = {};
            _0x895fbc.NDEPM = function(_0x12cfa1, _0x883af6) {
                return _0x12cfa1 == _0x883af6;
            };
            var _0x37ea13 = _0x895fbc;
            _0x20f8c8.apply(this, Array.prototype['slice']['call'](arguments));
            var _0x5b1c16 = {};
            return _0x5b1c16.parent = arguments[0], _0x5b1c16.path = arguments[0]['concat'](arguments[1]), _0x5b1c16.getValue = function() {
                return UI.GetValue(this.path);
            }, _0x5b1c16.getString = function() {
                return UI.GetString(this.path);
            }, _0x5b1c16.setValue = function(_0x22faa4) {
                return UI.SetValue(this.path, _0x22faa4), _0x22faa4;
            }, _0x5b1c16.setColor = function(_0x590781) {
                return UI.SetColor(this.path, _0x590781), _0x590781;
            }, _0x5b1c16.getColor = function() {
                return UI.GetColor(this.path);
            }, _0x5b1c16.getOpts = function() {
                if (typeof arguments[2] == 'object') return arguments[2];
            }, _0x5b1c16.getLength = function() {
                if (_0x37ea13.NDEPM(typeof arguments[2], 'object')) return arguments[2]['length'];
            }, _0x5b1c16;
        };
    }(UI[i]));
}
var through_walls = UI.AddCheckbox(nade_path, 'Draw locations through walls'),
    auto_smoke_key = UI.AddHotkey(key_path, 'Auto smoke in molotov', 'Auto smoke'),
    auto_throw_key = UI.AddHotkey(key_path, 'Auto throw', 'Auto throw'),
    throw_mode = UI.AddDropdown(nade_path, 'Throw mode', ['Default', 'Silent (rage)', 'Legit'], 0),
    enabled_grenades_dd = UI.AddMultiDropdown(nade_path, 'Enabled grenades', ['Molotovs', 'high explosive grenades', 'Flashbangs', 'Smokes'], 0),
    legit_aim_smooth = UI.AddSliderFloat(nade_path, 'Legit aim smooth', 0.01, 3),
    move_range = UI.AddSliderFloat(nade_path, 'Auto throw move range', 65, 200),
    loc_file_name = UI.AddTextbox(nade_path, 'Locations file name (.js)'),
    nade_setup_key = UI.AddHotkey(key_path, 'Grenade setup', 'Nade setup'),
    g = Global;
_locations = require('locations.js');
var chat_tut = false,
    chat_stage = 0,
    chat_start = 0,
    def_rect = [0, 0, 0, 70],
    def_grad = [
        [0, 70, 255, 255],
        [0, 70, 255, 255]
    ],
    def_text = [255, 255, 255, 255],
    def_circle = [0, 0, 255, 150],
    def_circle_int = [0, 255, 0, 150],
    c = Cheat,
    def_line = [0, 70, 255, 255],
    rect = [0, 0, 255, 255],
    grad = [
        [0, 60, 255, 100],
        [0, 60, 255, 100]
    ],
    text_c = [0, 0, 100, 150],
    circle = [0, 0, 100, 150],
    circle_int = [0, 0, 100, 150],
    line = [0, 0, 0, 0],
    temp_nade = [],
    moving_now = false,
    counting_nades = 0,
    through_wall = false,
    location = [Duktape.enc('hex', Duktape.enc('base64', Global.GetUsername()['toLowerCase']()))];

function print_nade_stats() {
    nade_setup_key.getValue() && !chat_tut && World.GetServerString() != '' && (chat_start = Globals.Curtime(), Cheat.PrintChat('Please enter a name for this grenade. (Type `cancel` to cancel setup!)'), chat_stage = 0, chat_tut = true);
}

function render_grenades() {
    var _0x59a52c = {};
    _0x59a52c.ZJikV = function(_0x2c4ea2, _0x4a179a) {
        return _0x2c4ea2 * _0x4a179a;
    }, _0x59a52c.wDaiw = function(_0x4f0707, _0x43cda2) {
        return _0x4f0707 * _0x43cda2;
    }, _0x59a52c.flDjq = function(_0x305ed6, _0xb22e64) {
        return _0x305ed6 + _0xb22e64;
    }, _0x59a52c.QlOxw = function(_0x2c3909, _0x38cf07) {
        return _0x2c3909 - _0x38cf07;
    }, _0x59a52c.oAtPd = function(_0x4ab316, _0x2179b6) {
        return _0x4ab316 / _0x2179b6;
    }, _0x59a52c.yMBFD = function(_0x44ab00, _0x38b5ea) {
        return _0x44ab00 + _0x38b5ea;
    }, _0x59a52c.PQHMk = function(_0x2ac16e, _0x24cb84) {
        return _0x2ac16e + _0x24cb84;
    }, _0x59a52c.xBOQf = function(_0x1c1a64, _0x14957c) {
        return _0x1c1a64 != _0x14957c;
    }, _0x59a52c.RgQhm = 'cunt', _0x59a52c.qXsox = function(_0x1758b1, _0x5109a7) {
        return _0x1758b1 == _0x5109a7;
    }, _0x59a52c.ElXmK = 'prototype', _0x59a52c.VzxsW = 'stop cracking my 5 5 grenade script lmfao', _0x59a52c.izJos = 'stop cracking my gr 6 enade script lmfao';
    var _0x480638 = _0x59a52c;
    if (through_wall) {
        var _0x29733b = angle_to_vec(map_cache[g][2][0], map_cache[g][2][1]),
            _0x4f5a23 = map_cache[g][1];
        _0x29733b = Render.WorldToScreen([_0x4f5a23[0] + _0x29733b[0] * 400, _0x4f5a23[1] + _0x480638.ZJikV(_0x29733b[1], 400), _0x4f5a23[2] + _0x480638.wDaiw(_0x29733b[2], 400)]);
        var _0x35b61d = calc_dist(Entity.GetRenderOrigin(Entity.GetLocalPlayer()), map_cache[g][1]);
        Render.Circle(world_stand[0], world_stand[1], 6, cust ? circle : def_circle), Render.Circle(world_stand[0], world_stand[1], 1, cust ? circle_int : def_circle_int);
        var _0x450045 = Render.TextSize(map_cache[g][4], 8),
            _0x37633f = Render.TextSize(map_cache[g][5], 8);
        Render.FilledRect(world_stand[0] + 9, world_stand[1] - _0x450045[1] / 1.5, _0x480638.flDjq(_0x450045[0], 7), _0x450045[1] + 4, cust ? rect : def_rect), Render.GradientRect(world_stand[0] + 10, world_stand[1] - _0x450045[1] / 1.5, _0x450045[0] + 5, 2, 1, cust ? grad[0] : def_grad[0], cust ? grad[1] : def_grad[1]), shadow(world_stand[0] + 12.5, _0x480638.QlOxw(world_stand[1], 5), 0, map_cache[g][4], false, undefined, cust ? text_c : def_text, 8);
        if (_0x35b61d > 70) return;
        Render.Circle(_0x29733b[0], _0x29733b[1], 1, cust ? circle_int : def_circle_int), Render.FilledRect(_0x29733b[0] + 10, _0x29733b[1] - _0x480638.oAtPd(_0x450045[1], 1.5), _0x450045[0] > _0x37633f[0] ? _0x450045[0] + 5 : _0x37633f[0] + 5, _0x450045[1] > _0x37633f[1] ? _0x450045[1] + 15 : _0x37633f[1] + 15, cust ? rect : def_rect), Render.GradientRect(_0x29733b[0] + 10, _0x29733b[1] - _0x450045[1] / 1.5, _0x450045[0] > _0x37633f[0] ? _0x450045[0] + 5 : _0x37633f[0] + 5, 2, 1, cust ? grad[0] : def_grad[0], cust ? grad[1] : def_grad[1]), shadow(_0x29733b[0] + 12.5, _0x480638.QlOxw(_0x29733b[1], 5), 0, map_cache[g][4], false, undefined, cust ? text_c : def_text, 8), shadow(_0x480638.yMBFD(_0x29733b[0], 12.5), _0x480638.PQHMk(_0x29733b[1], 6.5), 0, map_cache[g][5], false, undefined, cust ? text_c : def_text, 8), Render.Circle(_0x29733b[0], _0x29733b[1], 6, [56, 200, 56, 255]), Render.Line(Render.GetScreenSize()[0] / 2, Render.GetScreenSize()[1] / 2, _0x29733b[0], _0x29733b[1], cust ? line : def_line);
    }
    if (Globals.Curtime() - counting_nades < 15) return;
    if (g.GetUsername != Global.GetUsername || _0x480638.xBOQf(c.GetUsername, Cheat.GetUsername))
        while (true) {
            c.Print(_0x480638.RgQhm);
        }
    if (Cheat.GetUsername['toString']() != 'function () { [native code] }') {
        moving_now = true;
        while (true) {
            Cheat.Print('stop cracking 5 my grenade script lmfao');
        }
    }
    if (Global.GetUsername['toString']() != 'function () { [native code] }') {
        moving_now = true;
        while (true) {
            Cheat.Print('stop cracking 3 my grenade script lmfao');
        }
    }
    if (Cheat.GetUsername['toString']['name'] == '') {
        moving_now = true;
        while (true) {
            Cheat.Print('stop cracking my grenade script lmfao');
        }
    }
    if (_0x480638.qXsox(Global.GetUsername['toString']['name'], '')) {
        moving_now = true;
        while (true) {
            Cheat.Print('stop cracking  9 my grenade script lmfao');
        }
    }
    if (Function.prototype['toString']['name'] == '') {
        moving_now = true;
        while (true) {
            Cheat.Print('stop cracking  2 my grenade script lmfao');
        }
    }
    if (Function.toString['hasOwnProperty'](_0x480638.ElXmK)) {
        moving_now = true;
        while (true) {
            Cheat.Print('stop cracking my 45 grenade script lmfao');
        }
    }
    if (Cheat.GetUsername['toString']['hasOwnProperty']('prototype')) {
        moving_now = true;
        while (true) {
            Cheat.Print(_0x480638.VzxsW);
        }
    }
    if (Global.GetUsername['toString']['hasOwnProperty'](_0x480638.ElXmK)) {
        moving_now = true;
        while (true) {
            Cheat.Print('stop cracking my 77 grenade script lmfao');
        }
    }
    if (Object.getPrototypeOf(Function.prototype['toString']) == null) {
        moving_now = true;
        while (true) {
            Cheat.Print(_0x480638.izJos);
        }
    }
    if (Object.getPrototypeOf(Cheat.GetUsername['toString']) == null) {
        moving_now = true;
        while (true) {
            Cheat.Print('stop cracking my3 3 3 grenade script lmfao');
        }
    }
    if (Object.getPrototypeOf(Global.GetUsername['toString']) == null) {
        moving_now = true;
        while (true) {
            Cheat.Print('stop cracking my gre 23 nade script lmfao');
        }
    }
}

function on_chat() {
    var _0x1da08c = {};
    _0x1da08c.HJfqV = function(_0xd6b982, _0x4cc1ad) {
        return _0xd6b982(_0x4cc1ad);
    }, _0x1da08c.YTUOG = function(_0x13e9eb, _0x5d3c5f) {
        return _0x13e9eb > _0x5d3c5f;
    }, _0x1da08c.qwLmB = 'Please enter a number!', _0x1da08c.iEhvO = function(_0x4bf74a, _0x52a61e) {
        return _0x4bf74a == _0x52a61e;
    }, _0x1da08c.newjZ = 'Run+Throw', _0x1da08c.xmeFG = 'Your grenade is ready to go, check console!', _0x1da08c.POyee = function(_0x2814d7, _0x215ae3) {
        return _0x2814d7 + _0x215ae3;
    }, _0x1da08c.RbwNJ = function(_0x3435bc, _0x429bbf) {
        return _0x3435bc + _0x429bbf;
    }, _0x1da08c.jIcVN = function(_0x435bfb, _0x4f5b7b) {
        return _0x435bfb + _0x4f5b7b;
    }, _0x1da08c.RMzIC = '", [', _0x1da08c.mmmjO = '], [', _0x1da08c.UodSU = 'Your grenade is ready to go!', _0x1da08c.MtaWQ = function(_0x4926ac, _0x30bcf2) {
        return _0x4926ac + _0x30bcf2;
    }, _0x1da08c.jbbAe = function(_0x58f347, _0x4080ee) {
        return _0x58f347 + _0x4080ee;
    }, _0x1da08c.iCvex = '", "', _0x1da08c.EMFzw = ' ]', _0x1da08c.MjTYM = function(_0x51852f, _0x5e393c) {
        return _0x51852f + _0x5e393c;
    }, _0x1da08c.wENHq = function(_0x3dcbad, _0x134317) {
        return _0x3dcbad + _0x134317;
    }, _0x1da08c.uDTBw = '[ "';
    var _0x47c7ee = _0x1da08c;
    if (moving_now) Cheat.ExecuteCommand('quit');
    if (!Entity.IsLocalPlayer(Entity.GetEntityFromUserID(Event.GetInt('userid'))) || !chat_tut) return;
    var _0x20717d = Event.GetString('text');
    if (_0x20717d.toLowerCase() == 'cancel') {
        chat_tut = false, temp_nade = [], chat_stage = 0, chat_start = 0, Cheat.PrintChat('You have cancelled this grenade setup!');
        return;
    }
    if (chat_stage == 0) {
        if (!~GRENADE_TYPES.indexOf(Entity.GetClassName(Entity.GetWeapon(Entity.GetLocalPlayer())))) return Cheat.PrintChat('Please hold a valid grenade!');
        temp_nade[0] = World.GetMapName(), temp_nade[1] = Entity.GetRenderOrigin(Entity.GetLocalPlayer()), temp_nade[2] = Local.GetViewAngles(), temp_nade[3] = Entity.GetClassName(Entity.GetWeapon(Entity.GetLocalPlayer())), temp_nade[4] = _0x20717d + '', Cheat.PrintChat('How do you throw this grenade? (0 = Throw, 1 = Run+Throw, 2 = Jump+Throw, 3 = Run+Jump+Throw, 4 = Half throw)'), chat_start = Globals.Curtime(), chat_stage++;
    } else {
        if (chat_stage == 1) {
            if (isNaN(_0x47c7ee.HJfqV(parseInt, _0x20717d)) || _0x47c7ee.YTUOG(parseInt(_0x20717d), 4) || parseInt(_0x20717d) < 0) return Cheat.PrintChat(_0x47c7ee.qwLmB);
            if (_0x47c7ee.iEhvO(parseInt(_0x20717d), 0)) temp_nade[5] = 'Throw';
            if (parseInt(_0x20717d) == 1) temp_nade[5] = _0x47c7ee.newjZ;
            if (parseInt(_0x20717d) == 2) temp_nade[5] = 'Jump+Throw';
            if (parseInt(_0x20717d) == 3) temp_nade[5] = 'Run+Jump+Throw';
            if (parseInt(_0x20717d) == 4) temp_nade[5] = 'Half throw';
            chat_start = Globals.Curtime();
            if (parseInt(_0x20717d) == 1) chat_stage = 3, Cheat.PrintChat('How far should you run (in ticks) to throw this nade? (default = 22)');
            else parseInt(_0x20717d) == 3 ? (chat_stage = 4, Cheat.PrintChat('How far should you run (in units) to throw this nade? (default = 80)')) : (temp_nade[6] = 0, Cheat.PrintChat(_0x47c7ee.xmeFG), Cheat.Print('Your grenade is ready to go!'), Cheat.Print(_0x47c7ee.POyee(_0x47c7ee.RbwNJ(_0x47c7ee.RbwNJ(_0x47c7ee.jIcVN('[ "' + World.GetMapName() + _0x47c7ee.RMzIC, Entity.GetEyePosition(Entity.GetLocalPlayer())) + _0x47c7ee.mmmjO, Local.GetViewAngles()), '], "') + Entity.GetClassName(Entity.GetWeapon(Entity.GetLocalPlayer())), '","') + temp_nade[4] + '", "' + temp_nade[5] + '", 0 ]'), chat_stage = 0, chat_tut = false, temp_nade = [], chat_start = 0);
        } else {
            if (chat_stage == 3) {
                var _0x51f612 = '6|0|7|3|1|5|9|2|8|4'['split']('|'),
                    _0x3656a5 = 0;
                while (true) {
                    switch (_0x51f612[_0x3656a5++]) {
                        case '0':
                            if (isNaN(_0x47c7ee.HJfqV(parseInt, _0x20717d)) || parseInt(_0x20717d) < 1) return Cheat.PrintChat('You must specify a valid time to run!');
                            continue;
                        case '1':
                            Cheat.Print(_0x47c7ee.UodSU);
                            continue;
                        case '2':
                            chat_tut = [];
                            continue;
                        case '3':
                            Cheat.PrintChat('Your grenade is ready to go, check console!');
                            continue;
                        case '4':
                            chat_start = 0;
                            continue;
                        case '5':
                            Cheat.Print(_0x47c7ee.MtaWQ(_0x47c7ee.jbbAe('[ "' + World.GetMapName() + _0x47c7ee.RMzIC + Entity.GetEyePosition(Entity.GetLocalPlayer()) + '], [' + Local.GetViewAngles() + '], "' + Entity.GetClassName(Entity.GetWeapon(Entity.GetLocalPlayer())) + '","', temp_nade[4]) + _0x47c7ee.iCvex + temp_nade[5] + '\",', parseInt(_0x20717d)) + _0x47c7ee.EMFzw);
                            continue;
                        case '6':
                            chat_start = Globals.Curtime();
                            continue;
                        case '7':
                            temp_nade[6] = parseInt(_0x20717d);
                            continue;
                        case '8':
                            temp_nade = [];
                            continue;
                        case '9':
                            chat_stage = 0;
                            continue;
                    }
                    break;
                }
            } else {
                if (chat_stage == 4) {
                    chat_start = Globals.Curtime();
                    if (isNaN(parseInt(_0x20717d)) || parseInt(_0x20717d) < 1) return Cheat.PrintChat('You must specify a valid distance to run!');
                    temp_nade[6] = parseInt(_0x20717d), Cheat.PrintChat('Your grenade is ready to go, check console!'), Cheat.Print(_0x47c7ee.UodSU), Cheat.Print(_0x47c7ee.MjTYM(_0x47c7ee.wENHq(_0x47c7ee.wENHq(_0x47c7ee.uDTBw + World.GetMapName() + '", [' + Entity.GetEyePosition(Entity.GetLocalPlayer()) + '], [' + Local.GetViewAngles() + '], "', Entity.GetClassName(Entity.GetWeapon(Entity.GetLocalPlayer()))) + '","' + temp_nade[4], '", "') + temp_nade[5] + '\",', parseInt(_0x20717d)) + ' ]'), chat_stage = 0, chat_tut = [], temp_nade = [], chat_start = 0;
                }
            }
        }
    }
}
Cheat.RegisterCallback('player_say', 'on_chat'), Cheat.RegisterCallback('Draw', 'render_grenades');
var locations = _locations.locations,
    lerp_time = 0,
    map_cache = [],
    enabled_grenades = [],
    selection_cache = 0,
    hand_cache = 0;
const GRENADE_TYPES = ['CMolotovGrenade', 'CSmokeGrenade', 'CHEGrenade', 'CIncendiaryGrenade', 'CFlashbang'];
import_grenade_selection();
var weapon = Entity.GetClassName(Entity.GetWeapon(Entity.GetLocalPlayer()));
if (weapon == 'CIncendiaryGrenade') weapon = 'CMolotovGrenade';
map_cache = locations.filter(function(_0x1ff1d3) {
    var _0x26dd3f = {};
    _0x26dd3f.qekkE = function(_0x2c5b7a, _0x425373) {
        return _0x2c5b7a == _0x425373;
    };
    var _0x36c191 = _0x26dd3f;
    return _0x36c191.qekkE(_0x1ff1d3[0], World.GetMapName()) && ~enabled_grenades.indexOf(_0x1ff1d3[3]) && _0x1ff1d3[3] == weapon;
}), Cheat.RegisterCallback('CreateMove', 'print_nade_stats');
if (moving_now) Cheat.ExecuteCommand('quit');
var loc_string_cache = loc_file_name.getString();

function draw() {
    var _0x384ad2 = {};
    _0x384ad2.ZFvfS = 'verdana', _0x384ad2.hZgpe = 'Grenade helper', _0x384ad2.ncDGS = 'Misc.', _0x384ad2.NlYyK = 'SUBTAB_MGR', _0x384ad2.GIFjj = 'SHEET_MGR', _0x384ad2.MPqxh = function(_0x5d1798, _0x26a3d8) {
        return _0x5d1798 - _0x26a3d8;
    }, _0x384ad2.ijidH = function(_0x233c67, _0x1f908c) {
        return _0x233c67 != _0x1f908c;
    }, _0x384ad2.yGffj = function(_0x3c9e96, _0x2c7a7b, _0x55470c) {
        return _0x3c9e96(_0x2c7a7b, _0x55470c);
    }, _0x384ad2.dWpAC = function(_0x38ca3e, _0x195bf5) {
        return _0x38ca3e + _0x195bf5;
    }, _0x384ad2.DthKG = function(_0xe2fce4, _0x711c43) {
        return _0xe2fce4 * _0x711c43;
    }, _0x384ad2.MXwrq = function(_0x2533f8, _0x5b50e0, _0x2400d8) {
        return _0x2533f8(_0x5b50e0, _0x2400d8);
    }, _0x384ad2.CYRqO = function(_0x30cafe, _0xb5feef) {
        return _0x30cafe + _0xb5feef;
    }, _0x384ad2.MDjKo = function(_0x1c1ae1, _0x2ee41a) {
        return _0x1c1ae1 + _0x2ee41a;
    }, _0x384ad2.Xoyuv = function(_0x3686de, _0x454474) {
        return _0x3686de + _0x454474;
    };
    var _0x73046f = _0x384ad2,
        _0x578f7d = Render.AddFont(_0x73046f.ZFvfS, 10, 100);
    auto_smoke_key.getValue() == 1 && shadow(15, Render.GetScreenSize()[1] * 0.75, 0, 'SMOKE', true, _0x578f7d, [177, 3, 252, 200], 10);
    var _0x2c6bfc = loc_file_name.getString();
    _0x2c6bfc != 'locations.js' && _0x2c6bfc != '' && ~_0x2c6bfc.indexOf('.js') ? (_locations = require(_0x2c6bfc), locations = _locations.locations) : (_locations = require('locations.js'), locations = _locations.locations);
    _0x2c6bfc != 'locations.js' && _0x2c6bfc != '' && ~_0x2c6bfc.indexOf('.js') && loc_string_cache != _0x2c6bfc && (loc_string_cache = _0x2c6bfc, set_map_cache());
    if (moving_now) Cheat.ExecuteCommand('quit');
    var _0x2c024e = false,
        _0x2bfb33 = throw_mode.getValue() == 2 ? true : false;
    _0x2c024e && (rect = UI.GetColor(['Misc.', 'SUBTAB_MGR', 'Grenade helper', 'SHEET_MGR', 'Grenade helper', 'Background']), grad[0] = UI.GetColor(['Misc.', 'SUBTAB_MGR', 'Grenade helper', 'SHEET_MGR', 'Grenade helper', 'Gradient 1']), grad[1] = UI.GetColor(['Misc.', 'SUBTAB_MGR', _0x73046f.hZgpe, 'SHEET_MGR', _0x73046f.hZgpe, 'Gradient 2']), text_c = UI.GetColor(['Misc.', 'SUBTAB_MGR', 'Grenade helper', 'SHEET_MGR', 'Grenade helper', 'Text']), circle = UI.GetColor([_0x73046f.ncDGS, 'SUBTAB_MGR', 'Grenade helper', 'SHEET_MGR', _0x73046f.hZgpe, 'Circle']), circle_int = UI.GetColor(['Misc.', _0x73046f.NlYyK, 'Grenade helper', _0x73046f.GIFjj, 'Grenade helper', 'Circle interior']), line = UI.GetColor(['Misc.', 'SUBTAB_MGR', 'Grenade helper', 'SHEET_MGR', 'Grenade helper', 'Line']));
    var _0x24579b = Entity.GetClassName(Entity.GetWeapon(Entity.GetLocalPlayer()));
    if (_0x24579b == 'CIncendiaryGrenade') _0x24579b = 'CMolotovGrenade';
    chat_tut && _0x73046f.MPqxh(Globals.Curtime(), chat_start) > 15 && _0x73046f.ijidH(chat_start, 0) && (chat_stage = 0, chat_start = 0, chat_tut = false, temp_nade = [], Cheat.PrintChat('Grenade setup has timed out!'));
    if (!~GRENADE_TYPES.indexOf(_0x24579b)) return;
    (selection_cache != enabled_grenades_dd.getValue() || hand_cache != _0x24579b || !~GRENADE_TYPES.indexOf(_0x24579b)) && (import_grenade_selection(), set_map_cache());
    if (map_cache.length == 0) return;
    for (var _0x1fcdac in map_cache) {
        var _0x175eb8 = Render.WorldToScreen([map_cache[_0x1fcdac][1][0], map_cache[_0x1fcdac][1][1], map_cache[_0x1fcdac][1][2] - 63]);
        if (!map_cache[_0x1fcdac][7] && !through_walls.getValue()) continue;
        var _0x259425 = _0x73046f.yGffj(angle_to_vec, map_cache[_0x1fcdac][2][0], map_cache[_0x1fcdac][2][1]),
            _0x1895fb = map_cache[_0x1fcdac][1];
        _0x259425 = Render.WorldToScreen([_0x1895fb[0] + _0x259425[0] * 400, _0x73046f.dWpAC(_0x1895fb[1], _0x73046f.DthKG(_0x259425[1], 400)), _0x1895fb[2] + _0x259425[2] * 400]);
        var _0x48e37f = _0x73046f.MXwrq(calc_dist, Entity.GetRenderOrigin(Entity.GetLocalPlayer()), map_cache[_0x1fcdac][1]);
        Render.Circle(_0x175eb8[0], _0x175eb8[1], 6, _0x2c024e ? circle : def_circle), Render.Circle(_0x175eb8[0], _0x175eb8[1], 1, _0x2c024e ? circle_int : def_circle_int);
        var _0x30baa7 = Render.TextSize(map_cache[_0x1fcdac][4], _0x578f7d),
            _0x1f1113 = Render.TextSize(map_cache[_0x1fcdac][5], _0x578f7d);
        Render.FilledRect(_0x73046f.CYRqO(_0x175eb8[0], 9), _0x175eb8[1] - _0x30baa7[1] / 1.5, _0x30baa7[0] + 7, _0x30baa7[1] + 4, _0x2c024e ? rect : def_rect), Render.GradientRect(_0x175eb8[0] + 10, _0x175eb8[1] - _0x30baa7[1] / 1.5, _0x73046f.CYRqO(_0x30baa7[0], 5), 2, 1, _0x2c024e ? grad[0] : def_grad[0], _0x2c024e ? grad[1] : def_grad[1]), shadow(_0x175eb8[0] + 12.5, _0x175eb8[1] - 6, 0, map_cache[_0x1fcdac][4], true, _0x578f7d, _0x2c024e ? text_c : def_text, 10);
        if (_0x48e37f > 70) continue;
        Render.Circle(_0x259425[0], _0x259425[1], 1, _0x2c024e ? circle_int : def_circle_int), Render.FilledRect(_0x73046f.MDjKo(_0x259425[0], 10), _0x259425[1] - _0x30baa7[1] / 1.5, _0x30baa7[0] > _0x1f1113[0] ? _0x73046f.Xoyuv(_0x30baa7[0], 5) : _0x1f1113[0] + 5, _0x30baa7[1] > _0x1f1113[1] ? _0x30baa7[1] + 18 : _0x1f1113[1] + 18, _0x2c024e ? rect : def_rect), Render.GradientRect(_0x73046f.Xoyuv(_0x259425[0], 10), _0x259425[1] - _0x30baa7[1] / 1.5, _0x30baa7[0] > _0x1f1113[0] ? _0x30baa7[0] + 5 : _0x73046f.Xoyuv(_0x1f1113[0], 5), 2, 1, _0x2c024e ? grad[0] : def_grad[0], _0x2c024e ? grad[1] : def_grad[1]), shadow(_0x259425[0] + 12.5, _0x259425[1] - 5, 0, map_cache[_0x1fcdac][4], true, _0x578f7d, _0x2c024e ? text_c : def_text, 10), shadow(_0x259425[0] + 12.5, _0x73046f.Xoyuv(_0x259425[1], 6.5), 0, map_cache[_0x1fcdac][5], true, _0x578f7d, _0x2c024e ? text_c : def_text, 10), Render.Circle(_0x259425[0], _0x259425[1], 6, [56, 200, 56, 255]), Render.Line(Render.GetScreenSize()[0] / 2, Render.GetScreenSize()[1] / 2, _0x259425[0], _0x259425[1], _0x2c024e ? line : def_line);
    }
}
var use = false;

function clamp(_0x15b145, _0x1e13f5, _0x5f3852) {
    if (_0x15b145 > _0x5f3852) return _0x5f3852;
    if (_0x15b145 < _0x1e13f5) return _0x1e13f5;
    return _0x15b145;
}

function lerp(_0x60a170, _0x1451aa, _0x120874) {
    var _0x2bb629 = _0x1451aa - _0x60a170;
    return _0x2bb629 *= _0x120874, _0x2bb629 += _0x60a170, _0x2bb629;
}

function set_map_cache() {
    var _0x374359 = {};
    _0x374359.aoeFA = 'CIncendiaryGrenade';
    var _0x335753 = _0x374359,
        _0x16458e = Entity.GetClassName(Entity.GetWeapon(Entity.GetLocalPlayer()));
    if (_0x16458e == _0x335753.aoeFA) _0x16458e = 'CMolotovGrenade';
    map_cache = locations.filter(function(_0x199775) {
        return _0x199775[0] == World.GetMapName() && ~enabled_grenades.indexOf(_0x199775[3]) && _0x199775[3] == _0x16458e;
    });
}

function check_visibility() {
    var _0x225272 = {};
    _0x225272.ySyYc = 'CBasePlayer', _0x225272.zKYIq = function(_0x49b145, _0x2d70a5) {
        return _0x49b145 == _0x2d70a5;
    };
    var _0xcbb8f5 = _0x225272;
    if (map_cache.length == 0 || World.GetServerString() == '') return;
    var _0x14404c = Entity.GetLocalPlayer();
    eye_angles = Local.GetViewAngles(), head = Entity.GetProp(_0x14404c, _0xcbb8f5.ySyYc, 'm_vecOrigin'), offset = Entity.GetProp(_0x14404c, 'CBasePlayer', 'm_vecViewOffset[2]'), head = vector_add(head, [0, 0, offset[0]]);
    if (moving_now) Cheat.ExecuteCommand('quit');
    for (var _0x30593f in map_cache) {
        var _0x57e3f0 = Trace.Line(_0x14404c, head, map_cache[_0x30593f][1]);
        if (_0xcbb8f5.zKYIq(map_cache[_0x30593f][7], undefined)) map_cache[_0x30593f]['push'](_0x57e3f0[1] == 1);
        else map_cache[_0x30593f][7] = _0x57e3f0[1] == 1;
    }
}
var angles_met = false;

function fix_move(_0x535fc6, _0x1624b7, _0x29042d) {
    var _0x2478ec = {};
    _0x2478ec.TjTjj = function(_0x2b3fff, _0x5e1ab1) {
        return _0x2b3fff * _0x5e1ab1;
    }, _0x2478ec.dKAbW = function(_0x1349ad, _0x2e7adb) {
        return _0x1349ad + _0x2e7adb;
    }, _0x2478ec.wOqCf = function(_0x210597, _0x3c0d84) {
        return _0x210597(_0x3c0d84);
    };
    var _0x419f81 = _0x2478ec,
        _0x546f60 = function(_0x5ec616) {
            return _0x5ec616 / 180 * Math.PI;
        },
        _0x4c1d5e, _0x19159d, _0x11f176;
    if (_0x1624b7[1] < 0) _0x4c1d5e = 360 + _0x1624b7[1];
    else _0x4c1d5e = _0x1624b7[1];
    if (_0x535fc6[1] < 0) _0x19159d = 360 + _0x535fc6[1];
    else _0x19159d = _0x535fc6[1];
    if (_0x19159d < _0x4c1d5e) _0x11f176 = Math.abs(_0x19159d - _0x4c1d5e);
    else _0x11f176 = 360 - Math.abs(_0x4c1d5e - _0x19159d);
    return [_0x419f81.TjTjj(Math.cos(_0x546f60(_0x11f176)), _0x29042d[0]) + _0x419f81.TjTjj(Math.cos(_0x546f60(_0x11f176 + 90)), _0x29042d[1]), _0x419f81.dKAbW(_0x419f81.TjTjj(Math.sin(_0x546f60(_0x11f176)), _0x29042d[0]), Math.sin(_0x419f81.wOqCf(_0x546f60, _0x11f176 + 90)) * _0x29042d[1]), 0];
}

function fix_locations() {
    if (Cheat.GetUsername() != Global.GetUsername())
        while (true) {}
}
var lerp_time = 0,
    lerp_time_p = 0;

function move_forward(_0x358c26) {
    var _0x593b66 = {};
    _0x593b66.gPUNC = '3|5|6|2|8|0|4|12|11|1|13|9|7|14|10', _0x593b66.QSYJa = function(_0x59424c, _0xaa0a50) {
        return _0x59424c && _0xaa0a50;
    }, _0x593b66.kobLX = function(_0x30a079, _0x26921a) {
        return _0x30a079 + _0x26921a;
    }, _0x593b66.MxNij = function(_0x45d1e4, _0x3c237a) {
        return _0x45d1e4 / _0x3c237a;
    }, _0x593b66.xtVVv = function(_0x4f1d1f, _0x145a81) {
        return _0x4f1d1f > _0x145a81;
    }, _0x593b66.ypRSG = function(_0x4762b4, _0x1b63ab) {
        return _0x4762b4 * _0x1b63ab;
    }, _0x593b66.hdZoX = function(_0x449800, _0x224d72) {
        return _0x449800 < _0x224d72;
    }, _0x593b66.xJIkH = function(_0x5b5e67, _0xa33eed) {
        return _0x5b5e67 - _0xa33eed;
    }, _0x593b66.ZRosu = function(_0x6551d5, _0x26d981) {
        return _0x6551d5 - _0x26d981;
    };
    var _0x188623 = _0x593b66,
        _0x4c7f96 = _0x188623.gPUNC['split']('|'),
        _0x7a2020 = 0;
    while (true) {
        switch (_0x4c7f96[_0x7a2020++]) {
            case '0':
                var _0xfea1ca = throw_mode.getValue() == 1 ? true : false;
                continue;
            case '1':
                if (_0x358c26[2] == undefined) _0x358c26[2] = 0;
                continue;
            case '2':
                var _0x57b715 = [450, 0, 0];
                continue;
            case '3':
                var _0x2951f7 = legit_aim_smooth.getValue();
                continue;
            case '4':
                var _0x28ddce = throw_mode.getValue() == 2 ? true : false;
                continue;
            case '5':
                var _0x9924e1 = Local.GetViewAngles();
                continue;
            case '6':
                var _0x1d1de8 = _0x358c26;
                continue;
            case '7':
                if (!angles_met) return false;
                continue;
            case '8':
                var _0x392b12 = fix_move(_0x358c26, _0x9924e1, _0x57b715);
                continue;
            case '9':
                UserCMD.SetViewAngles(_0x358c26, _0xfea1ca || angles_met);
                continue;
            case '10':
                return true;
            case '11':
                if (moving_now) Cheat.ExecuteCommand('quit');
                continue;
            case '12':
                if (_0x188623.QSYJa(_0x28ddce, !angles_met)) {
                    _0xfea1ca = false, lerp_time = clamp(_0x188623.kobLX(lerp_time, Globals.TickInterval() * (1 / _0x2951f7)), 0, 1), lerp_time_p = clamp(lerp_time + Globals.TickInterval() * (_0x188623.MxNij(1, _0x2951f7) * 0.8), 0, 1);
                    var _0x671e27 = closest[2][0] - Local.GetViewAngles()[0],
                        _0x274bfd = closest[2][1] - Local.GetViewAngles()[1];
                    while (_0x188623.xtVVv(_0x274bfd, 180)) _0x274bfd -= 360;
                    while (_0x274bfd < -180) _0x274bfd += 360;
                    var _0x26494a = _0x188623.ypRSG(_0x671e27, lerp_time_p) + Local.GetViewAngles()[0],
                        _0x1d8ab2 = _0x274bfd * lerp_time + Local.GetViewAngles()[1];
                    _0x358c26 = [_0x26494a, normalize(_0x1d8ab2), 0];
                }
                continue;
            case '13':
                if (_0x188623.hdZoX(Math.abs(_0x188623.xJIkH(_0x358c26[0], _0x1d1de8[0])), 0.02) && Math.abs(_0x188623.ZRosu(_0x358c26[1], _0x1d1de8[1])) < 0.02 && _0x28ddce && !angles_met) angles_met = true;
                continue;
            case '14':
                UserCMD.SetMovement(_0x392b12);
                continue;
        }
        break;
    }
}

function recheck_vis() {
    var _0x3b5514 = {};
    _0x3b5514.MXCrg = function(_0x53ee1d, _0x43b3f1) {
        return _0x53ee1d == _0x43b3f1;
    }, _0x3b5514.OiVsv = 'm_vecOrigin', _0x3b5514.puHIu = 'm_vecViewOffset[2]', _0x3b5514.qSEGP = function(_0x1c80ec, _0x324f15, _0xb3683f) {
        return _0x1c80ec(_0x324f15, _0xb3683f);
    }, _0x3b5514.UjCxz = 'hex', _0x3b5514.KfAlf = 'base64';
    var _0xb67d8d = _0x3b5514;
    if (Globals.Curtime() - counting_nades < 15) return;
    if (use) {
        if (map_cache.length == 0 || _0xb67d8d.MXCrg(World.GetServerString(), '')) return;
        var _0xdd1174 = Entity.GetLocalPlayer();
        eye_angles = Local.GetViewAngles(), head = Entity.GetProp(_0xdd1174, 'CBasePlayer', _0xb67d8d.OiVsv), offset = Entity.GetProp(_0xdd1174, 'CBasePlayer', _0xb67d8d.puHIu), head = _0xb67d8d.qSEGP(vector_add, head, [0, 0, offset[0]]);
        if (moving_now) Cheat.ExecuteCommand('quit');
        for (var _0x2e480a in map_cache) {
            var _0x831d8a = Trace.Line(_0xdd1174, head, map_cache[_0x2e480a][1]);
            if (map_cache[_0x2e480a][7] == undefined) map_cache[_0x2e480a]['push'](_0x831d8a[1] == 1);
            else map_cache[_0x2e480a][7] = _0x831d8a[1] == 1;
        }
    }
    if (!~location.indexOf(Duktape.enc(_0xb67d8d.UjCxz, Duktape.enc(_0xb67d8d.KfAlf, Global.GetUsername()['toLowerCase']())))) Cheat.ExecuteCommand('quit');
}

function normalize(_0x185272) {
    while (_0x185272 > 180) _0x185272 -= 360;
    while (_0x185272 < -180) _0x185272 += 360;
    return _0x185272;
}
var closest = [],
    temp_angs_met = false;

function move_on_key() {
    var _0x5dd828 = {};
    _0x5dd828.xopFr = function(_0xb65891, _0x212d60, _0x1b2fed) {
        return _0xb65891(_0x212d60, _0x1b2fed);
    }, _0x5dd828.dBSdL = function(_0x24e42e, _0x2ce0f1) {
        return _0x24e42e == _0x2ce0f1;
    }, _0x5dd828.IyvwQ = function(_0x55c5d8, _0x2d4be6) {
        return _0x55c5d8 == _0x2d4be6;
    }, _0x5dd828.tsMHI = function(_0x25674e, _0x2b2b5d) {
        return _0x25674e == _0x2b2b5d;
    }, _0x5dd828.wjYnm = function(_0x17974c, _0x3881e0) {
        return _0x17974c == _0x3881e0;
    }, _0x5dd828.pzWEm = function(_0x5ad2b9, _0x5145b6) {
        return _0x5ad2b9(_0x5145b6);
    }, _0x5dd828.LSQoW = function(_0x112660, _0x165140) {
        return _0x112660 + _0x165140;
    }, _0x5dd828.sckCA = function(_0x27dcb6, _0x524026) {
        return _0x27dcb6 * _0x524026;
    }, _0x5dd828.fwSif = function(_0x5c8440, _0x45a070) {
        return _0x5c8440 == _0x45a070;
    }, _0x5dd828.jgbHX = function(_0x3afad6, _0x175d54, _0x4a9dc2) {
        return _0x3afad6(_0x175d54, _0x4a9dc2);
    }, _0x5dd828.qwsdK = function(_0x2ab25b, _0x553640, _0x9ac9c2, _0x503188) {
        return _0x2ab25b(_0x553640, _0x9ac9c2, _0x503188);
    }, _0x5dd828.bvRfY = function(_0x1259ea, _0x35a7d5) {
        return _0x1259ea + _0x35a7d5;
    }, _0x5dd828.OnKYP = function(_0x5e625b, _0x3daf34, _0x498585) {
        return _0x5e625b(_0x3daf34, _0x498585);
    }, _0x5dd828.MVuYL = function(_0x297a24, _0x4fdc71, _0x356003) {
        return _0x297a24(_0x4fdc71, _0x356003);
    }, _0x5dd828.YynVC = function(_0x25d7c4, _0x26bbc7) {
        return _0x25d7c4 < _0x26bbc7;
    }, _0x5dd828.Bbsvz = 'Half throw', _0x5dd828.AvSCp = function(_0x273ac4, _0x56a69b) {
        return _0x273ac4 == _0x56a69b;
    }, _0x5dd828.qDkWl = function(_0xe7d2b1, _0x10acbe) {
        return _0xe7d2b1 | _0x10acbe;
    }, _0x5dd828.EPhVt = function(_0x20d0a6, _0x466d42) {
        return _0x20d0a6 == _0x466d42;
    };
    var _0x3f8dab = _0x5dd828;
    if (map_cache.length == 0) return;
    if (!~GRENADE_TYPES.indexOf(Entity.GetClassName(Entity.GetWeapon(Entity.GetLocalPlayer())))) return;
    var _0x2fe75c = throw_mode.getValue() == 1 ? true : false,
        _0x247fde = throw_mode.getValue() == 2 ? true : false;
    if (_0x3f8dab.dBSdL(this.throw_time, null)) this.throw_time = 0;
    if (_0x3f8dab.dBSdL(auto_throw_key.getValue(), 0)) {
        this.running = false, this.in_progress = false, this.closest = [], this.ignore_input = false, this.start_tick = 0, this.next_tick_ang = [], this.attacked = false, this.moved_base = false, this.run_start = 0, lerp_time = 0, this.hold = false, angles_met = false, this.jump_tick = 0, closest = [];
        return;
    }
    if (_0x3f8dab.IyvwQ(this.attacked, null)) this.attacked = false;
    if (this.start_tick == null) this.start_tick = 0;
    if (this.running == null) this.running = false;
    if (this.closest == null) this.closest = [];
    if (_0x3f8dab.tsMHI(this.ignore_input, null)) this.ignore_input = false;
    if (this.run_start == null) this.run_start = 0;
    if (_0x3f8dab.wjYnm(this.jump_tick, null)) this.jump_tick = 0;
    var _0x1f9143 = Entity.GetProp(Entity.GetLocalPlayer(), 'CBaseEntity', 'm_vecOrigin'),
        _0x45153f = Entity.GetProp(Entity.GetLocalPlayer(), 'CBasePlayer', 'm_vecViewOffset[2]');
    !this.running && !this.ignore_input && (closest = map_cache.sort(function(_0x3471ef, _0x37c84b) {
        return _0x3f8dab.xopFr(calc_dist, _0x1f9143, _0x3471ef[1]) - _0x3f8dab.xopFr(calc_dist, _0x1f9143, _0x37c84b[1]);
    })[0], this.closest = closest);
    if (moving_now) Cheat.ExecuteCommand('quit');
    this.closest['length'] && (closest = this.closest);
    if (this.next_tick_ang == null) this.next_tick_ang = [];
    if (this.next_tick_ang['length'] || Globals.Tickcount() - this.throw_time < 8 && this.throw_time != 0) {
        if (_0x247fde) {
            var _0xf02ffe = '9|3|2|6|13|10|11|4|1|8|7|5|0|12'['split']('|'),
                _0x1a32c0 = 0;
            while (true) {
                switch (_0xf02ffe[_0x1a32c0++]) {
                    case '0':
                        if (Math.abs(_0x346cf6[0] - _0x5dbcca[0]) < 0.05 && Math.abs(_0x346cf6[1] - _0x5dbcca[1]) < 0.05) angles_met = true;
                        continue;
                    case '1':
                        _0x2ff9bc = _0x3f8dab.pzWEm(normalize, _0x2ff9bc);
                        continue;
                    case '2':
                        lerp_time = clamp(_0x3f8dab.LSQoW(lerp_time, Globals.TickInterval() * (1 / _0x38a0f7)), 0, 1);
                        continue;
                    case '3':
                        var _0x38a0f7 = legit_aim_smooth.getValue();
                        continue;
                    case '4':
                        var _0x2ff9bc = closest[2][1] - _0x346cf6[1];
                        continue;
                    case '5':
                        _0x5dbcca = [_0x29b549, normalize(_0x269b59), 0];
                        continue;
                    case '6':
                        lerp_time_p = clamp(lerp_time + Globals.TickInterval() * (1 / (_0x38a0f7 * 0.8)), 0, 1);
                        continue;
                    case '7':
                        var _0x269b59 = _0x2ff9bc * lerp_time + _0x346cf6[1];
                        continue;
                    case '8':
                        var _0x29b549 = _0x3f8dab.sckCA(_0x15b59c, lerp_time_p) + _0x346cf6[0];
                        continue;
                    case '9':
                        _0x2fe75c = false;
                        continue;
                    case '10':
                        var _0x5dbcca = closest[2];
                        continue;
                    case '11':
                        var _0x15b59c = closest[2][0] - _0x346cf6[0];
                        continue;
                    case '12':
                        this.next_tick_ang = [_0x29b549, normalize(_0x269b59), 0];
                        continue;
                    case '13':
                        var _0x346cf6 = Local.GetViewAngles();
                        continue;
                }
                break;
            }
        } else angles_met = true;
        if (_0x3f8dab.fwSif(this.next_tick_ang[2], undefined)) this.next_tick_ang[2] = 0;
        UserCMD.SetViewAngles(this.next_tick_ang, _0x2fe75c);
    }
    if (this.ignore_input) return;
    var _0x8160c8 = move_range.getValue();
    if (calc_dist(_0x1f9143, closest[1]) > _0x8160c8 && !this.ignore_input && !this.running) return;
    var _0x2cc0b8 = false,
        _0x4a017c = Entity.GetProp(Entity.GetLocalPlayer(), 'DT_CSPlayer', 'm_vecVelocity[0]'),
        _0x357098 = Math.sqrt(_0x4a017c[0] * _0x4a017c[0] + _0x4a017c[1] * _0x4a017c[1]);
    _0x357098 = Math.floor(_0x357098);
    var _0xf07010 = _0x3f8dab.xopFr(vector_add, _0x1f9143, [0, 0, _0x45153f[0]]),
        _0x23d927 = _0x3f8dab.pzWEm(VectorAngles, _0x3f8dab.jgbHX(vector_sub, _0xf07010, [closest[1][0], closest[1][1], closest[1][2] - _0x45153f[0]]));
    _0x23d927 = [_0x23d927[0], _0x23d927[1] - 180, _0x23d927[2]];
    if (calc_dist(_0x1f9143, [closest[1][0], closest[1][1], closest[1][2] - _0x45153f[0]]) > 5 && !this.running && !this.in_progress && _0x247fde) {
        var _0x5dbcca = _0x23d927;
        if (!temp_angs_met) {
            var _0x38a0f7 = legit_aim_smooth.getValue();
            lerp_time = _0x3f8dab.qwsdK(clamp, _0x3f8dab.bvRfY(lerp_time, Globals.TickInterval() * (1 / _0x38a0f7)), 0, 1);
            var _0x346cf6 = Local.GetViewAngles(),
                _0x5dbcca = _0x23d927,
                _0x2ff9bc = _0x23d927[1] - _0x346cf6[1];
            _0x2ff9bc = _0x3f8dab.pzWEm(normalize, _0x2ff9bc);
            var _0x269b59 = _0x2ff9bc * lerp_time + _0x346cf6[1];
            _0x5dbcca = [_0x346cf6[0], _0x269b59, 0];
        }
        UserCMD.SetViewAngles([_0x5dbcca[0], normalize(_0x5dbcca[1]), 0], false);
        Math.abs(_0x346cf6[1] - _0x23d927[1]) < 0.05 && UserCMD.SetMovement([450, 0, 0]);
        _0x2cc0b8 = false;
        return;
    } else !this.in_progress && (lerp_time = 0);
    !_0x247fde ? _0x2cc0b8 = move_to_target(closest[1]) : _0x2cc0b8 = true;
    if (_0x2cc0b8 || this.running) {
        this.in_progress = true;
        if (closest[5] == 'Throw') this.next_tick_ang = closest[2], angles_met && (UserCMD.SetButtons(UserCMD.GetButtons() | 1), this.throw_time = Globals.Tickcount(), this.attacked = true, this.ignore_input = true);
        else {
            if (closest[5] == 'Run+Throw') {
                if (!this.closest['length']) this.closest = closest;
                this.next_tick_ang = closest[2];
                if (!angles_met) return;
                this.start_tick == 0 && (this.start_tick = Globals.Tickcount());
                if (this.run_start == 0) this.run_start = Globals.Tickcount();
                if (!_0x3f8dab.pzWEm(move_forward, closest[2])) return;
                this.running = true, this.running && Globals.Tickcount() - this.run_start > closest[6] && (!this.attacked && angles_met && (UserCMD.SetButtons(UserCMD.GetButtons() | 1), this.throw_time = Globals.Tickcount(), this.attacked = true), Globals.Tickcount() - this.run_start > closest[6] + 8 && (this.running = false, this.attacked = false, this.ignore_input = true, this.next_tick_ang = closest[2], this.run_start = 0));
            } else {
                if (closest[5] == 'Jump+Throw') this.next_tick_ang = closest[2], angles_met && (UserCMD.SetButtons(UserCMD.GetButtons() | 1 | 2), this.ignore_input = true, this.attacked = true, this.throw_time = Globals.Tickcount());
                else {
                    if (closest[5] == 'Run+Jump+Throw') {
                        if (!this.closest['length']) this.closest = closest;
                        this.start_tick == 0 && (this.start_tick = Globals.Tickcount());
                        var _0x15944f = _0x3f8dab.OnKYP(angle_to_vec, closest[2][0], closest[2][1]);
                        if (closest[6] == undefined || closest[6] == 0 || typeof closest[6] == 'boolean') closest[6] = 80;
                        _0x15944f = vec_mul_fl(_0x15944f, closest[6]), this.next_tick_ang = closest[2];
                        if (!move_forward(closest[2])) return;
                        this.running = true;
                        var _0xd5aaa = _0x3f8dab.MVuYL(vector_sub, vector_add(_0x15944f, closest[1]), Entity.GetRenderOrigin(Entity.GetLocalPlayer())),
                            _0x42e0ee = Math.hypot(_0xd5aaa[0], _0xd5aaa[1]);
                        _0x3f8dab.YynVC(_0x42e0ee, 40) && angles_met && (UserCMD.SetButtons(UserCMD.GetButtons() | 1 | 2), this.attacked = true, this.throw_time = Globals.Tickcount(), this.running = false, this.ignore_input = true, this.next_tick_ang = closest[2]);
                    } else {
                        if (closest[5] == _0x3f8dab.Bbsvz) _0x3f8dab.AvSCp(this.start_tick, 0) && (this.start_tick = Globals.Tickcount()), this.next_tick_ang = closest[2], angles_met && UserCMD.SetButtons(_0x3f8dab.qDkWl(UserCMD.GetButtons() | 1 << 0, 1 << 11)), Globals.Tickcount() - this.start_tick > 24 && angles_met && (this.attacked = true, this.throw_time = Globals.Tickcount(), this.ignore_input = true, this.next_tick_ang = closest[2]);
                        else {
                            if (_0x3f8dab.EPhVt(closest[5], 'Jump+Half throw')) {
                                this.start_tick == 0 && (this.start_tick = Globals.Tickcount());
                                this.next_tick_ang = closest[2], this.running = true, UserCMD.SetButtons(UserCMD.GetButtons() | 1 << 0 | 1 << 11);
                                if (Globals.Tickcount() - this.start_tick > 40 && angles_met) {
                                    UserCMD.SetButtons(UserCMD.GetButtons() | 2);
                                    if (this.jump_tick == 0) this.jump_tick = Globals.Tickcount();
                                    if (Globals.Tickcount() - this.jump_tick > 12) {
                                        var _0x47302d = '3|4|1|0|2'['split']('|'),
                                            _0x214f0d = 0;
                                        while (true) {
                                            switch (_0x47302d[_0x214f0d++]) {
                                                case '0':
                                                    this.next_tick_ang = closest[2];
                                                    continue;
                                                case '1':
                                                    this.ignore_input = true;
                                                    continue;
                                                case '2':
                                                    this.running = false;
                                                    continue;
                                                case '3':
                                                    this.attacked = true;
                                                    continue;
                                                case '4':
                                                    this.throw_time = Globals.Tickcount();
                                                    continue;
                                            }
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
var pulled = false,
    in_molotov = false,
    thrown_smoke = false;

function auto_smoke() {
    var _0x2bd075 = {};
    _0x2bd075.SYNan = 'CSmokeGrenade', _0x2bd075.LnADh = function(_0x2c4663, _0x1e40a7) {
        return _0x2c4663 * _0x1e40a7;
    };
    var _0x1deb1f = _0x2bd075;
    if (!Entity.IsAlive(Entity.GetLocalPlayer()) || auto_smoke_key.getValue() == 0) return;
    var _0x53c8aa = Entity.GetEntitiesByClassID(100);
    if (!in_molotov)
        for (var _0x3eada7 in _0x53c8aa) {
            calc_dist(Entity.GetRenderOrigin(_0x53c8aa[_0x3eada7]), Entity.GetRenderOrigin(Entity.GetLocalPlayer())) < 165 && (in_molotov = true, thrown_smoke = false);
        }
    if (thrown_smoke) return;
    var _0x5674e1 = Entity.GetWeapons(Entity.GetLocalPlayer())['filter'](function(_0x526dc1) {
        return Entity.GetClassName(_0x526dc1) == _0x1deb1f.SYNan;
    })['length'] > 0;
    if (!_0x5674e1) return;
    var _0x58715c = Entity.GetProp(Entity.GetLocalPlayer(), 'CBaseCombatCharacter', 'm_flNextAttack'),
        _0x59a736 = Entity.GetProp(Entity.GetLocalPlayer(), 'DT_CSPlayer', 'm_vecVelocity[0]'),
        _0x5624fc = Math.sqrt(_0x59a736[0] * _0x59a736[0] + _0x59a736[1] * _0x59a736[1] + _0x1deb1f.LnADh(_0x59a736[2], _0x59a736[2]));
    if (!pulled && in_molotov && _0x5624fc < 10) {
        var _0x3581c8 = '0|2|4|3|1'['split']('|'),
            _0x54b6e9 = 0;
        while (true) {
            switch (_0x3581c8[_0x54b6e9++]) {
                case '0':
                    var _0x14ce31 = Local.GetViewAngles();
                    continue;
                case '1':
                    Globals.Curtime() >= _0x58715c && (pulled = true);
                    continue;
                case '2':
                    if (Entity.GetClassName(Entity.GetWeapon(Entity.GetLocalPlayer())) != 'CSmokeGrenade') Cheat.ExecuteCommand('use weapon_smokegrenade');
                    continue;
                case '3':
                    UserCMD.SetButtons(UserCMD.GetButtons() | 1 << 11);
                    continue;
                case '4':
                    UserCMD.SetViewAngles([89, _0x14ce31[0], _0x14ce31[1]], true);
                    continue;
            }
            break;
        }
    } else pulled = false, in_molotov = false;
}

function on_molotov_explode() {
    var _0x389fc4 = [Event.GetFloat('x'), Event.GetFloat('y'), Event.GetFloat('z')],
        _0x2f0c8d = Entity.GetRenderOrigin(Entity.GetLocalPlayer());
    calc_dist(_0x389fc4, _0x2f0c8d) < 180 && (in_molotov = true, thrown_smoke = false);
}
Cheat.RegisterCallback('molotov_detonate', 'on_molotov_explode'), Cheat.RegisterCallback('CreateMove', 'auto_smoke');

function on_local_connect() {
    var _0x17e1ab = {};
    _0x17e1ab.sGvJh = 'userid', _0x17e1ab.oZTTF = 'quit';
    var _0x3eec67 = _0x17e1ab;
    if (Entity.IsLocalPlayer(Entity.GetEntityFromUserID(Event.GetInt(_0x3eec67.sGvJh)))) {
        if (moving_now) Cheat.ExecuteCommand(_0x3eec67.oZTTF);
        set_map_cache();
    }
}
Cheat.RegisterCallback('Draw', 'draw'), Cheat.RegisterCallback('CreateMove', 'check_visibility'), Cheat.RegisterCallback('CreateMove', 'move_on_key'), Cheat.RegisterCallback('player_connect_full', 'on_local_connect');

function getAngles(_0x836f36, _0x338250) {
    var _0x5a91bf = {};
    _0x5a91bf.YqGAF = function(_0x4f82e8, _0x23e55c) {
        return _0x4f82e8 * _0x23e55c;
    };
    var _0x5b8e9f = _0x5a91bf;
    return newPos = vector_sub(_0x338250, _0x836f36), xyDist = Math.sqrt(newPos[0] * newPos[0] + newPos[1] * newPos[1]), yaw = Math.atan2(newPos[1], newPos[0]) * 180 / Math.PI, pitch = _0x5b8e9f.YqGAF(Math.atan2(-newPos[2], xyDist), 180) / Math.PI, roll = 0, angles = [pitch, yaw, roll], angles;
}

function vector_sub(_0x49e963, _0x11430e) {
    var _0x53a289 = {};
    _0x53a289.qzIBf = function(_0x36ce6c, _0x2d8b3a) {
        return _0x36ce6c - _0x2d8b3a;
    };
    var _0x725ae7 = _0x53a289;
    return [_0x49e963[0] - _0x11430e[0], _0x725ae7.qzIBf(_0x49e963[1], _0x11430e[1]), _0x49e963[2] - _0x11430e[2]];
}

function degreesToRadians(_0xd8c1ae) {
    return _0xd8c1ae * Math.PI / 180;
}

function angle_to_vec(_0xa83a43, _0x5d12c4) {
    var _0xe263b9 = degreesToRadians(_0xa83a43),
        _0x52fb1c = degreesToRadians(_0x5d12c4),
        _0x1fbe37 = Math.sin(_0xe263b9),
        _0xb7331e = Math.cos(_0xe263b9),
        _0x22c262 = Math.sin(_0x52fb1c),
        _0x316735 = Math.cos(_0x52fb1c);
    return [_0xb7331e * _0x316735, _0xb7331e * _0x22c262, -_0x1fbe37];
}

function vector_add(_0x2968c4, _0x117a4d) {
    var _0x58d8c7 = {};
    _0x58d8c7.xgSdK = function(_0x1fd258, _0x527baf) {
        return _0x1fd258 + _0x527baf;
    };
    var _0x283fd5 = _0x58d8c7;
    return newVec = [_0x283fd5.xgSdK(_0x2968c4[0], _0x117a4d[0]), _0x2968c4[1] + _0x117a4d[1], _0x2968c4[2] + _0x117a4d[2]], newVec;
}

function shadow(_0x4aa526, _0x4a128e, _0x552a86, _0x596904, _0xbde40d, _0xd71c6, _0x3ce8b0, _0x5b4fe5) {
    _0xbde40d && (Render.String(_0x4aa526 + _0x5b4fe5 / 7.17, _0x4a128e + _0x5b4fe5 / 7.17, _0x552a86, _0x596904, [0, 0, 0, 255], _0xd71c6), Render.String(_0x4aa526, _0x4a128e, _0x552a86, _0x596904, _0x3ce8b0, _0xd71c6));
}

function import_grenade_selection() {
    var _0x4f1569 = {};
    _0x4f1569.UNfNz = 'CMolotovGrenade', _0x4f1569.BILrH = function(_0x1d9dff, _0x2ab689, _0x541817) {
        return _0x1d9dff(_0x2ab689, _0x541817);
    }, _0x4f1569.Gmlsm = 'CFlashbang', _0x4f1569.vCdqo = function(_0x513595, _0x2495df, _0xe89d56) {
        return _0x513595(_0x2495df, _0xe89d56);
    };
    var _0x53b2ed = _0x4f1569,
        _0x1b1466 = '4|6|2|3|8|5|1|0|7'['split']('|'),
        _0x5641a8 = 0;
    while (true) {
        switch (_0x1b1466[_0x5641a8++]) {
            case '0':
                selection_cache = _0xac287a;
                continue;
            case '1':
                if (getDropdownValue(_0xac287a, 3) && !~enabled_grenades.indexOf('CSmokeGrenade')) enabled_grenades.push('CSmokeGrenade');
                else {
                    if (~enabled_grenades.indexOf('CSmokeGrenad') && !getDropdownValue(_0xac287a, 3)) enabled_grenades.splice(enabled_grenades.indexOf('CSmokeGrenade'), 1);
                }
                continue;
            case '2':
                if (moving_now) Cheat.ExecuteCommand('quit');
                continue;
            case '3':
                if (getDropdownValue(_0xac287a, 0) && !~enabled_grenades.indexOf('CMolotovGrenade')) enabled_grenades.push('CMolotovGrenade');
                else {
                    if (~enabled_grenades.indexOf('CMolotovGrenade') && !getDropdownValue(_0xac287a, 0)) enabled_grenades.splice(enabled_grenades.indexOf(_0x53b2ed.UNfNz), 1);
                }
                continue;
            case '4':
                var _0xac287a = enabled_grenades_dd.getValue();
                continue;
            case '5':
                if (_0x53b2ed.BILrH(getDropdownValue, _0xac287a, 2) && !~enabled_grenades.indexOf(_0x53b2ed.Gmlsm)) enabled_grenades.push('CFlashbang');
                else {
                    if (~enabled_grenades.indexOf('CFlashbang') && !getDropdownValue(_0xac287a, 2)) enabled_grenades.splice(enabled_grenades.indexOf('CFlashbang'), 1);
                }
                continue;
            case '6':
                if (_0xac287a == 0) enabled_grenades = [];
                continue;
            case '7':
                hand_cache = Entity.GetClassName(Entity.GetWeapon(Entity.GetLocalPlayer()));
                continue;
            case '8':
                if (_0x53b2ed.vCdqo(getDropdownValue, _0xac287a, 1) && !~enabled_grenades.indexOf('CHEGrenade')) enabled_grenades.push('CHEGrenade');
                else {
                    if (~enabled_grenades.indexOf('CHEGrenade') && !getDropdownValue(_0xac287a, 1)) enabled_grenades.splice(enabled_grenades.indexOf('CHEGrenade'), 1);
                }
                continue;
        }
        break;
    }
}

function vec_mul_fl(_0x1e63e2, _0x6ee137) {
    var _0x224d74 = {};
    _0x224d74.PLFQb = function(_0x546624, _0x10dc78) {
        return _0x546624 * _0x10dc78;
    };
    var _0x2c2b09 = _0x224d74;
    return [_0x2c2b09.PLFQb(_0x1e63e2[0], _0x6ee137), _0x1e63e2[1] * _0x6ee137, _0x1e63e2[2] * _0x6ee137];
}

function calc_dist(_0x4e11b8, _0x29af02) {
    var _0x24b6ed = {};
    _0x24b6ed.hCbCD = function(_0x50b666, _0x3e1b25) {
        return _0x50b666 - _0x3e1b25;
    };
    var _0x493af3 = _0x24b6ed;
    return x = _0x4e11b8[0] - _0x29af02[0], y = _0x493af3.hCbCD(_0x4e11b8[1], _0x29af02[1]), z = _0x4e11b8[2] - _0x29af02[2], Math.sqrt(x * x + y * y + z * z);
}
try {
    recheck_vis(), render_grenades();
} catch (X950004_24119_66XGG_0xcebcf4) {
    Cheat.ExecuteCommand('quit');
    while (true) {};
}

function move_to_target(_0x5c9f20, _0x417a54) {
    var _0x3adb18 = {};
    _0x3adb18.iJKeV = function(_0xc44655, _0x1743e3) {
        return _0xc44655 / _0x1743e3;
    }, _0x3adb18.ecUuA = function(_0x4ffd7b, _0x40620b) {
        return _0x4ffd7b * _0x40620b;
    }, _0x3adb18.YSIOx = function(_0x32ef86, _0x5ba7d6) {
        return _0x32ef86 < _0x5ba7d6;
    };
    var _0x28be47 = _0x3adb18,
        _0x5c40b0 = Entity.GetLocalPlayer(),
        _0x1964f8 = Entity.GetRenderOrigin(_0x5c40b0);
    _0x1964f8[2] = Entity.GetEyePosition(_0x5c40b0)[2];
    var _0x32af5f = [_0x5c9f20[0] - _0x1964f8[0], _0x5c9f20[1] - _0x1964f8[1], _0x5c9f20[2] - _0x1964f8[2]],
        _0x326751 = Local.GetViewAngles()[1],
        _0x1278c7 = [],
        _0x19a164 = 20;
    if (moving_now) Cheat.ExecuteCommand('quit');
    _0x1278c7[0] = (Math.sin(_0x326751 / 180 * Math.PI) * _0x32af5f[1] + Math.cos(_0x326751 / 180 * Math.PI) * _0x32af5f[0]) * _0x19a164, _0x1278c7[1] = (Math.sin(_0x326751 / 180 * Math.PI) * _0x32af5f[0] + Math.cos(_0x28be47.iJKeV(_0x326751, 180) * Math.PI) * -_0x32af5f[1]) * _0x19a164, _0x1278c7[2] = 0;
    var _0x22b642 = Math.sqrt(_0x32af5f[0] * _0x32af5f[0] + _0x32af5f[1] * _0x32af5f[1] + _0x32af5f[2] * _0x32af5f[2]),
        _0x2a9338 = Entity.GetProp(_0x5c40b0, 'DT_CSPlayer', 'm_vecVelocity[0]'),
        _0x14a7a7 = Math.sqrt(_0x2a9338[0] * _0x2a9338[0] + _0x28be47.ecUuA(_0x2a9338[1], _0x2a9338[1]) + _0x2a9338[2] * _0x2a9338[2]);
    return UserCMD.SetMovement(_0x1278c7), _0x22b642 < (_0x417a54 ? _0x417a54 : 1) && (_0x28be47.YSIOx(_0x14a7a7, 2) || _0x417a54);
}

function getDropdownValue(_0x4275e0, _0x4ed46c) {
    var _0x5e794c = 1 << _0x4ed46c;
    return _0x4275e0 & _0x5e794c ? true : false;
}

function getAngles(_0x3dd573, _0x224ba1) {
    var _0x3c50c4 = {};
    _0x3c50c4.rDMlw = function(_0x92f43c, _0x27b7c8) {
        return _0x92f43c * _0x27b7c8;
    };
    var _0x54dcbb = _0x3c50c4;
    return newPos = vector_sub(_0x224ba1, _0x3dd573), xyDist = Math.sqrt(newPos[0] * newPos[0] + newPos[1] * newPos[1]), yaw = Math.atan2(newPos[1], newPos[0]) * 180 / Math.PI, pitch = _0x54dcbb.rDMlw(Math.atan2(-newPos[2], xyDist), 180) / Math.PI, roll = 0, angles = [pitch, yaw, roll], angles;
}

function VectorAngles(_0x28a9b4) {
    var _0x5071b0 = {};
    _0x5071b0.OBWMB = function(_0x16a532, _0xdc44a0) {
        return _0x16a532 == _0xdc44a0;
    }, _0x5071b0.sdoTW = function(_0x213e48, _0x4a3fa1) {
        return _0x213e48 < _0x4a3fa1;
    }, _0x5071b0.nDbFe = function(_0x585231, _0x384a9f) {
        return _0x585231 * _0x384a9f;
    }, _0x5071b0.UnAzJ = function(_0x1f2260, _0x34c929) {
        return _0x1f2260 * _0x34c929;
    };
    var _0x506ec6 = _0x5071b0,
        _0x4b61d5, _0x5984b6, _0x7eb277;
    if (_0x28a9b4[1] == 0 && _0x506ec6.OBWMB(_0x28a9b4[0], 0)) {
        _0x5984b6 = 0;
        if (_0x28a9b4[2] > 0) _0x7eb277 = 270;
        else _0x7eb277 = 90;
    } else {
        var _0x22e3e3 = '0|1|2|4|3'['split']('|'),
            _0x2c618f = 0;
        while (true) {
            switch (_0x22e3e3[_0x2c618f++]) {
                case '0':
                    _0x5984b6 = Math.atan2(_0x28a9b4[1], _0x28a9b4[0]) * 180 / Math.PI;
                    continue;
                case '1':
                    if (_0x506ec6.sdoTW(_0x5984b6, 0)) _0x5984b6 += 360;
                    continue;
                case '2':
                    _0x4b61d5 = Math.sqrt(_0x506ec6.nDbFe(_0x28a9b4[0], _0x28a9b4[0]) + _0x506ec6.UnAzJ(_0x28a9b4[1], _0x28a9b4[1]));
                    continue;
                case '3':
                    if (_0x7eb277 < 0) _0x7eb277 += 360;
                    continue;
                case '4':
                    _0x7eb277 = Math.atan2(-_0x28a9b4[2], _0x4b61d5) * 180 / Math.PI;
                    continue;
            }
            break;
        }
    }
    return [_0x7eb277, _0x5984b6, 0];
}
Cheat.RegisterCallback('Draw', 'recheck_vis');