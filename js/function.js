/*global 
$
CallBack
Decimal

Inventory
Inventory_Max
Item_Equip
Item_Equip_1
Item_Equip_2
Item_Equip_1_Type
Item_Equip_2_Type
Item_Consume 
Item_Special
Inventory
Inventory_Max
Hero_Player
Hero_Team 
Hero_List 
Trophy 
Stats 
Option
Level_Zone 
Multiply_Base 
Level_Lost_Balance 
Level_Lost_Balance
Multiply_Lost_Balance
Suffixes
Notation_Options
Notation_Option
*/
var Item_Equip = {
    'Weapon': [
      { Name: 'Long Sword', Level: 0, Stats: { Dmg: { Amt: '3' } } },
      { Name: 'Cross Bow', Level: 0, Stats: { Dmg: { Amt: '1' }, Atks: 1000 } }
    ],
    'Shield': [
      { Name: 'Wooden Shield', Level: 0, Stats: { Def: { Amt: '1' }, Mvs: -100 } },
      { Name: 'Steel Shield', Level: 0, Stats: { Def: { Amt: '3' }, Mvs: -500 } }
    ],
    'Helmet': [
      { Name: 'Leather Helmet', Level: 0, Stats: { Def: { Amt: '1' } } },
      { Name: 'Iron Helmet', Level: 0, Stats: { Def: { Amt: '2' }, Mvs: -100 } }
    ],
    'Chest': [
      { Name: 'Diamond Chest', Level: 0, Stats: { Hp: { Max: '3' }, Def: { Amt: '4' }, Atks: -300 } },
      { Name: 'Gold Chest', Level: 0, Stats: { Hp: { Max: '2' }, Def: { Amt: '3' }, Atks: -200 } }
    ],
    'Leggings': [
      { Name: 'Pants', Level: 0, Stats: { Def: { Amt: '1' }, Atks: 300 } },
      { Name: 'Trouser', Level: 0, Stats: { Def: { Amt: '2' }, Atks: 350 } }
    ],
    'Gloves': [
      { Name: 'Snow Gloves', Level: 0, Stats: { Atks: 500, Dmg: { Crtch: 0.25 } } },
      { Name: 'Garden Gloves', Level: 0, Stats: { Atks: 600, Dmg: { Crtch: 0.3 } } }
    ],
    'Boots': [
      { Name: 'Rain Boots', Level: 0, Stats: { Mvs: 1000 } },
      { Name: 'Climbing Boots', Level: 0, Stats: { Mvs: 1450 } }
    ],
    'Ring': [
      { Name: 'Wedding Ring', Level: 0, Stats: { Dmg: { Crtml: 2 } } },
      { Name: 'Ruby Ring', Level: 0, Stats: { Dmg: { Crtml: 3 } } }
    ],
    'Bracelet': [
      { Name: 'Chain Bracelet', Level: 0, Stats: { Gold: { Chml: 2.5 } } },
      { Name: 'Magin Bracelet', Level: 0, Stats: { Xp: { Chml: 2.5 } } }
    ],
    'Necklace': [
      { Name: 'Round Necklace', Level: 0, Stats: { Gold: { Ch: 0.5 } } },
      { Name: 'Square Necklace', Level: 0, Stats: { Xp: { Ch: 0.5 } } }
    ],
    'Amulet': [
      { Name: 'Power Amulet', Level: 0, Stats: { Dmg: { Amt: '2' } } },
      { Name: 'Life Amulet', Level: 0, Stats: { Hp: { Max: '3' } } }
    ],
    //Craft only item
    'Weapon_Craft': [
    ],
    'Shield_Craft': [
    ],
    'Helmet_Craft': [
    ],
    'Chest_Craft': [
    ],
    'Leggings_Craft': [
    ],
    'Gloves_Craft': [
    ],
    'Boots_Craft': [
    ],
    'Ring_Craft': [
    ],
    'Bracelet_Craft': [
    ],
    'Necklace_Craft': [
    ],
    'Amulet_Craft': [
    ]
};
var Item_Consume = {
    'Potion': [
        { Name: 'Heal Potion', Level: 0, Stats: { Hp: { Apr: '8', Type: 'Amount' } } },
        { Name: 'Mana Potion', Level: 0, Stats: { Mana: { Apr: '3', Type: 'Amount' } } }
    ],
    'Spell': [
        { Name: 'Rage', Level: 0, Time: { Cool_Down: 0.00166666666666666666, Duration: 0.01, Cast_Time: 0.1 }, Stats: { Dmg: { Mul: '2' } } },
        { Name: 'Tough skin', Level: 0, Time: { Cool_Down: 0.00166666666666666666, Duration: 0.01, Cast_Time: 0.1 }, Stats: { Def: { Mul: '2' } } }
    ],
    'Material': [
        { Name: 'Iron' },
        { Name: 'Coal' },
        { Name: 'Steel' },
        { Name: 'Leather' }
    ],
    'Card': [
        { Name: 'Card of knowledge', Level: 0, Stats: {Xp: { Amt: '5' } } },
        { Name: 'Card of wealth', Level: 0, Stats: {Gold: { Amt: '5' } } },
    ],
    'Potion ingredient': [],
    'Spell scroll': [],
    'Material part': [],
    'Card piece': []
};
var Item_Special = {
    'Treasure chest': [],
    'Loot bag': [],
    'Other': [],
};
var Inventory = [],
    Inventory_Max = 6;
var Hero_Player = {
    Name: '', Class: '', Level: 0, Xp: {Amt: '0', Max: '20', Mul: '1', Ch: 0.01, Chml: 1.5}, Gold: {Mul: '1', Ch: 0.01, Chml: 1.5},
    Hp: {Amt: '0', Max: '20', Apr: '1', Type: 'Amount', Tpr: 0.00333333333333333333}, Mana: {Amt: '0', Max: '10', Apr: '1', Type: 'Amount', Tpr: 0.00166666666666666666},
    Stats: {Dmg: {Amt : '2', Crtch: 0.01, Crtml: 1.5}, Def: {Amt: '0.1', Blch: 0.01, Blml: 1.5}, Atks: 0.025, Mvs: 0.05},
    Stats: {
        Xp: {Max: '20', Mul: '1', Ch: 0.01, Chml: 1.5}, Gold: {Mul: '1', Ch: 0.01, Chml: 1.5},
        Hp: {Max: '20', Apr: '1', Tpr: 0.00333333333333333333}, Mana: {Max: '10', Apr: '1', Tpr: 0.00166666666666666666},
        Dmg: {Amt : '2', Crtch: 0.01, Crtml: 1.5}, Def: {Amt: '0.1', Blch: 0.01, Blml: 1.5}, Atks: 0.025, Mvs: 0.05
    },
    Stats_Cost: {
        Xp: {Max: '0', Mul: '0', Ch: '0', Chml: '0'}, Gold: {Mul: '0', Ch: '0', Chml: '0'},
        Hp: {Max: '0', Apr: '0', Tpr: '0'}, Mana: {Max: '0', Apr: '0', Tpr: '0'},
        Dmg: {Amt : '0', Crtch: '0', Crtml: '0'}, Def: {Amt: '0', Blch: '0', Blml: '0'}, Atks: '0', Mvs: '0'
    },
    Stats_Other: { Dps: '0', Total_Time_Atkps: 0, Dps_Overall: '0', Total_Time_Atk: 0, Total_Step: 0, Total_Time_Crt: 0, Total_Time_Lt: 0, Mons_Killed: 0},
    Equipment: { Hold: {One: null, Two: null}, Helmet: null, Chest: null, Leggings: null, Gloves: null, Boots: null,
    Necklace: {One: null, Two: null, Three: null}, Bracelet: {One: null, Two: null, Three: null, Four: null},
    Ring: {One: null, Two: null, Three: null, Four: null, Five: null, Six: null}, Amulet: {One: null, Two: null}},
    Spell: {One: null, Two: null, Three: null, Four: null, Five: null, Six: null},
    Ability: [],
    Status_Effect: {}
};
var Hero_Team = [],
    Hero_List = [],
    Trophy = {},
    Stats = {},
    Option = {};
var Level_Zone = 0;
var Multiply_Base = 1.1,
    Level_Lost_Balance = 1,
    Level_Lost_Balance_Base = 100; //100 level will multiply 1
var Multiply_Lost_Balance = Math.pow(Math.pow(Multiply_Base, Level_Lost_Balance_Base + Level_Lost_Balance), 1 / Level_Lost_Balance_Base);
var Suffixes = {};
var Notation_Options = {
    Short_Number: 1,
    Long_Number: 2,
    Scientific: 3,
    Engineering: 4,
    Exponential: 5,
};
Suffixes[Notation_Options.Short_Number] = [
  ['k', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'De'],
  ['Un', 'Du', 'Tr', 'Qa', 'Qi', 'Se', 'Sp', 'Oc', 'No'],
  ['De', 'Vi'],
  ['Ce'],
];
Suffixes[Notation_Options.Long_Number] = [
  ['Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion', 'Quintillion', 'Sextillion', 'Septillion', 'Octillion', 'Nonillion', 'Decillion'],
  ['un', 'duo', 'tre', 'quattuor', 'quinqua', 'se', 'septe', 'octo', 'nove'],
  ['deci', 'viginti', 'triginta', 'quadraginta', 'quinquaginta', 'sexaginta', 'septuaginta', 'octoginta', 'nonaginta'],
  ['centi', 'ducenti', 'trecenti', 'quadringenti', 'quingenti', 'sescenti', 'septingenti', 'octingenti', 'nongenti'],
  ['millini', 'billini', 'trillini', 'quadrillini', 'quintillini', 'sextillini', 'septillini', 'octillini', 'nonillini', 'decillini'],
];
var Notation_Option = Notation_Options.Short_Number;

function Channel_New(Channel, Callback) {
    $.jStorage.subscribe(Channel, CallBack);
}
function Save(Value, Variable_Name) {
    switch (Variable_Name) {
        case 'Inventory':
            if (Value == null) {
               $.jStorage.set(Variable_Name, window[Variable_Name]); 
            }
            Inventory.push(Value);
            if (Inventory.length > Inventory_Max) {
                Inventory.pop();
            } else {
                $.jStorage.set(Variable_Name, window[Variable_Name]);
            }
            break;
        case 'All':
            Inventory = $.jStorage.get('Inventory');
            Hero_Player = $.jStorage.get('Hero_Player');
            Hero_List = $.jStorage.get('Hero_List');
            Hero_Team = $.jStorage.get('Hero_Team');
            Trophy = $.jStorage.get('Trophy');
            break;
        default:
            $.jStorage.set(Variable_Name, window[Variable_Name]);
            break;
    }
    console.info('Saved.');
    console.log($.jStorage.storageSize() + ' bytes of memory.');
}
function Load(Variable_Name) {
    var Load_Value = null;
    switch (Variable_Name) {
        case 'All':
            Inventory = $.jStorage.get('Inventory');
            Hero_Player = $.jStorage.get('Hero_Player');
            Hero_List = $.jStorage.get('Hero_List');
            Hero_Team = $.jStorage.get('Hero_Team');
            Trophy = $.jStorage.get('Trophy');
            break;
        default:
            window[Variable_Name] = $.jStorage.get(Variable_Name);
            break;
    }
    console.log(Load_Value);
    Load_Value = null;
    console.info('Loaded.');
    console.log($.jStorage.storageSize() + ' bytes of memory.');
}
function Clear() {
    $.jStorage.flush();
    Inventory = [];
    Inventory_Max = 6;
    Hero_Player = {
        Name: '', Class: '', Level: 0, Xp: {Amt: '0', Max: '20', Mul: '1', Ch: 0.01, Chml: 1.5}, Gold: {Mul: '1', Ch: 0.01, Chml: 1.5},
        Hp: {Amt: '0', Max: '20', Apr: '1', Type: 'Amount', Tpr: 0.00333333333333333333}, Mana: {Amt: '0', Max: '10', Apr: '1', Type: 'Amount', Tpr: 0.00166666666666666666},
        Stats: {Dmg: {Amt : '2', Crtch: 0.01, Crtml: 1.5}, Def: {Amt: '0.1', Blch: 0.01, Blml: 1.5}, Atks: 0.025, Mvs: 0.05},
        Stats: {
            Xp: {Max: '20', Mul: '1', Ch: 0.01, Chml: 1.5}, Gold: {Mul: '1', Ch: 0.01, Chml: 1.5},
            Hp: {Max: '20', Apr: '1', Tpr: 0.00333333333333333333}, Mana: {Max: '10', Apr: '1', Tpr: 0.00166666666666666666},
            Dmg: {Amt : '2', Crtch: 0.01, Crtml: 1.5}, Def: {Amt: '0.1', Blch: 0.01, Blml: 1.5}, Atks: 0.025, Mvs: 0.05
        },
        Stats_Other: { Dps: '0', Total_Time_Atkps: 0, Dps_Overall: '0', Total_Time_Atk: 0, Total_Step: 0, Total_Time_Crt: 0, Total_Time_Lt: 0, Mons_Killed: 0},
        Equipment: { Hold: {One: null, Two: null}, Helmet: null, Chest: null, Leggings: null, Gloves: null, Boots: null,
        Necklace: {One: null, Two: null, Three: null}, Bracelet: {One: null, Two: null, Three: null, Four: null},
        Ring: {One: null, Two: null, Three: null, Four: null, Five: null, Six: null}, Amulet: {One: null, Two: null}},
        Spell: {One: null, Two: null, Three: null, Four: null, Five: null, Six: null},
        Ability: {},
        Status_Effect: {}
    };
    Hero_Team = [];
    Hero_List = [];
    Trophy = {};
    Stats = {};
    Option = {};
    Level_Zone = 0;
    Multiply_Base = 1.1;
    Level_Lost_Balance = 1;
    Level_Lost_Balance_Base = 100; //100 level will multiply 1
    Multiply_Lost_Balance = Math.pow(Math.pow(Multiply_Base, Level_Lost_Balance_Base + Level_Lost_Balance), 1 / Level_Lost_Balance_Base);
    Notation_Option = Notation_Options.Short_Number;
    console.info('Cleared.');
}
function Item_Generate(Item_Generate_Type, ItemTypeString, ItemIndexNumber, ItemRarityString, IsItemCraft, IsEternal) {
    Item_Equip = Item_Equip;
    var ItemType = ItemTypeString,
        ItemIndex = ItemIndexNumber,
        ItemRarity = ItemRarityString;
    var Item_Rarity_Type = Math.random() * 100,
        Item_Type_Random = 0;
    var Item_Rarity = Item_Rarity_Type > 45 ? 'Common' : Item_Rarity_Type > 22.5 ? 'Uncommon' : Item_Rarity_Type > 9 ? 'Rare' : Item_Rarity_Type > 4.5 ? 'Epic' : Item_Rarity_Type > 0.9 ? 'Fabled' : Item_Rarity_Type > 0.45 ? 'Mythical' : Item_Rarity_Type > 0.09 ? 'Legendary' : 'Artifact';
    var Item_Type = '';
    var Item_List = null;
    var Item_Index = 0;
    var Item_Chosen = null;
    var Item_Stats = null;
    var Number_Of_Stats_Bonus = 1,
        Level_Bonus = 0,
        Stats_Chosen = 0,
        Total_Level_Bonus = 0,
        Total_Level_Highest = 0;
    var Item_Stats_Has = [];
    var Item_Eternal_Chance = 0.5,
        Item_Eternal_Number = 0;
    switch (Item_Generate_Type) {
        case 'Item_Equip':
            Item_Type_Random = Number(Random_Number(0, 19, true));
            Item_Type = Item_Type_Random > 14 ? 'Weapon' : Item_Type_Random > 9 ? 'Shield' : Item_Type_Random > 8 ? 'Helmet' : Item_Type_Random > 7 ? 'Chest' : Item_Type_Random > 6 ? 'Leggings' : Item_Type_Random > 5 ? 'Gloves' : Item_Type_Random > 4 ? 'Boots' : Item_Type_Random > 3 ? 'Ring' : Item_Type_Random > 2 ? 'Bracelet' : Item_Type_Random > 1 ? 'Necklace' : 'Amulet';
            Item_List = Item_Equip[Item_Type];
            Item_Index = Math.round(Math.random() * (Item_List.length - 1));
            Item_Chosen = Item_List[Item_Index];
            Item_Stats = { Stats: {} };
            if (IsItemCraft === true) {
                Item_Type = Item_Type_Random > 14 ? 'Weapon_Craft' : Item_Type_Random > 9 ? 'Shield_Craft' : Item_Type_Random > 8 ? 'Helmet_Craft' : Item_Type_Random > 7 ? 'Chest_Craft' : Item_Type_Random > 6 ? 'Leggings_Craft' : Item_Type_Random > 5 ? 'Gloves_Craft' : Item_Type_Random > 4 ? 'Boots_Craft' : Item_Type_Random > 3 ? 'Ring_Craft' : Item_Type_Random > 2 ? 'Bracelet_Craft' : Item_Type_Random > 1 ? 'Necklace_Craft' : 'Amulet_Craft';
            }
            if (ItemType != null) {
                Item_List = Item_Equip[ItemType];
            }
            if (ItemIndex != null) {
                Item_Chosen = Item_List[ItemIndex];
            }
            if (ItemRarity != null) {
                Item_Rarity = ItemRarity;
            }
            Item_Stats.Name = Item_Chosen.Name;
            if (Item_Chosen.Stats.Xp != null) {
                if (Item_Chosen.Stats.Xp.Mul != null) {
                    if (Item_Stats.Stats.Xp == null) {
                        Item_Stats.Stats.Xp = {};
                    }
                    Item_Stats.Stats.Xp.Mul = new Decimal(new Decimal(new Decimal(Multiply_Base).pow(Level_Zone).mul(new Decimal(Item_Chosen.Stats.Xp.Mul))).floor()).toString();
                    Item_Stats_Has.push(0);
                }
                if (Item_Chosen.Stats.Xp.Ch != null) {
                    if (Item_Stats.Stats.Xp == null) {
                        Item_Stats.Stats.Xp = {};
                    }
                    Item_Stats.Stats.Xp.Ch = Item_Chosen.Stats.Xp.Ch;
                    Item_Stats_Has.push(1);
                }
                if (Item_Chosen.Stats.Xp.Chml != null) {
                    if (Item_Stats.Stats.Xp == null) {
                        Item_Stats.Stats.Xp = {};
                    }
                    Item_Stats.Stats.Xp.Chml = Item_Chosen.Stats.Xp.Chml;
                    Item_Stats_Has.push(2);
                }
            }
            if (Item_Chosen.Stats.Gold != null) {
                if (Item_Chosen.Stats.Gold.Mul != null) {
                    if (Item_Stats.Stats.Gold == null) {
                        Item_Stats.Stats.Gold = {};
                    }
                    Item_Stats.Stats.Gold.Mul = new Decimal(new Decimal(new Decimal(Multiply_Base).pow(Level_Zone).mul(new Decimal(Item_Chosen.Stats.Gold.Mul))).floor()).toString();
                    Item_Stats_Has.push(3);
                }
                if (Item_Chosen.Stats.Gold.Ch != null) {
                    if (Item_Stats.Stats.Gold == null) {
                        Item_Stats.Stats.Gold = {};
                    }
                    Item_Stats.Stats.Gold.Ch = Item_Chosen.Stats.Gold.Ch;
                    Item_Stats_Has.push(4);
                }
                if (Item_Chosen.Stats.Gold.Chml != null) {
                    if (Item_Stats.Stats.Gold == null) {
                        Item_Stats.Stats.Gold = {};
                    }
                    Item_Stats.Stats.Gold.Chml = Item_Chosen.Stats.Gold.Chml;
                    Item_Stats_Has.push(5);
                }
            }
            if (Item_Chosen.Stats.Hp != null) {
                if (Item_Chosen.Stats.Hp.Max != null) {
                    if (Item_Stats.Stats.Hp == null) {
                        Item_Stats.Stats.Hp = {};
                    }
                    Item_Stats.Stats.Hp.Max = new Decimal(new Decimal(new Decimal(Multiply_Base).pow(Level_Zone).mul(new Decimal(Item_Chosen.Stats.Hp.Max))).floor()).toString();
                    Item_Stats_Has.push(6);
                }
                if (Item_Chosen.Stats.Hp.Apr != null) {
                    if (Item_Stats.Stats.Hp == null) {
                        Item_Stats.Stats.Hp = {};
                    }
                    Item_Stats.Stats.Hp.Apr = new Decimal(new Decimal(new Decimal(Multiply_Base).pow(Level_Zone).mul(new Decimal(Item_Chosen.Stats.Hp.Apr))).floor()).toString();
                    Item_Stats_Has.push(7);
                }
                if (Item_Chosen.Stats.Hp.Tpr != null) {
                    if (Item_Stats.Stats.Hp == null) {
                        Item_Stats.Stats.Hp = {};
                    }
                    Item_Stats.Stats.Hp.Tpr = Math.floor(Item_Chosen.Stats.Hp.Tpr);
                    Item_Stats_Has.push(8);
                }
            }
            if (Item_Chosen.Stats.Mana != null) {
                if (Item_Chosen.Stats.Mana.Max != null) {
                    if (Item_Stats.Stats.Mana == null) {
                        Item_Stats.Stats.Mana = {};
                    }
                    Item_Stats.Stats.Mana.Max = new Decimal(new Decimal(new Decimal(Multiply_Base).pow(Level_Zone).mul(new Decimal(Item_Chosen.Stats.Mana.Max))).floor()).toString();
                    Item_Stats_Has.push(9);
                }
                if (Item_Chosen.Stats.Mana.Apr != null) {
                    if (Item_Stats.Stats.Mana == null) {
                        Item_Stats.Stats.Mana = {};
                    }
                    Item_Stats.Stats.Mana.Apr = new Decimal(new Decimal(new Decimal(Multiply_Base).pow(Level_Zone).mul(new Decimal(Item_Chosen.Stats.Mana.Apr))).floor()).toString();
                    Item_Stats_Has.push(10);
                }
                if (Item_Chosen.Stats.Mana.Tpr != null) {
                    if (Item_Stats.Stats.Mana == null) {
                        Item_Stats.Stats.Mana = {};
                    }
                    Item_Stats.Stats.Mana.Tpr = Math.floor(Item_Chosen.Stats.Mana.Tpr);
                    Item_Stats_Has.push(11);
                }
            }
            if (Item_Chosen.Stats.Dmg != null) {
                if (Item_Chosen.Stats.Dmg.Amt != null) {
                    if (Item_Stats.Stats.Dmg == null) {
                        Item_Stats.Stats.Dmg = {};
                    }
                    Item_Stats.Stats.Dmg.Amt = new Decimal(new Decimal(new Decimal(Multiply_Base).pow(Level_Zone).mul(new Decimal(Item_Chosen.Stats.Dmg.Amt))).floor()).toString();
                    Item_Stats_Has.push(12);
                }
                if (Item_Chosen.Stats.Dmg.Crtch != null) {
                    if (Item_Stats.Stats.Dmg == null) {
                        Item_Stats.Stats.Dmg = {};
                    }
                    Item_Stats.Stats.Dmg.Crtch = Item_Chosen.Stats.Dmg.Crtch;
                    Item_Stats_Has.push(13);
                }
                if (Item_Chosen.Stats.Dmg.Crtml != null) {
                    if (Item_Stats.Stats.Dmg == null) {
                        Item_Stats.Stats.Dmg = {};
                    }
                    Item_Stats.Stats.Dmg.Crtml = Item_Chosen.Stats.Dmg.Crtml;
                    Item_Stats_Has.push(14);
                }
            }
            if (Item_Chosen.Stats.Def != null) {
                if (Item_Chosen.Stats.Def.Amt != null) {
                    if (Item_Stats.Stats.Def == null) {
                        Item_Stats.Stats.Def = {};
                    }
                    Item_Stats.Stats.Def.Amt = new Decimal(new Decimal(new Decimal(Multiply_Base).pow(Level_Zone).mul(new Decimal(Item_Chosen.Stats.Def.Amt))).floor()).toString();
                    Item_Stats_Has.push(15);
                }
                if (Item_Chosen.Stats.Def.Blch != null) {
                    if (Item_Stats.Stats.Def == null) {
                        Item_Stats.Stats.Def = {};
                    }
                    Item_Stats.Stats.Def.Blch = Item_Chosen.Stats.Def.Blch;
                    Item_Stats_Has.push(16);
                }
                if (Item_Chosen.Stats.Def.Blml != null) {
                    if (Item_Stats.Stats.Def == null) {
                        Item_Stats.Stats.Def = {};
                    }
                    Item_Stats.Stats.Def.Blml = Item_Chosen.Stats.Def.Blml;
                    Item_Stats_Has.push(17);
                }
            }
            if (Item_Chosen.Stats.Atks != null) {
                Item_Stats.Stats.Atks = Math.floor(Item_Chosen.Stats.Atks);
                Item_Stats_Has.push(18);
            }
            if (Item_Chosen.Stats.Mvs != null) {
                Item_Stats.Stats.Mvs = Math.floor(Item_Chosen.Stats.Mvs);
                Item_Stats_Has.push(19);
            }
            Item_Stats.Level = Level_Zone;
            Item_Stats.Type = 'Item_Equip';
            switch (Item_Rarity) {
                case 'Common':
                    Stats_Calculate_And_Bonus(1, 1, 1, 0, 0);
                    Item_Stats.Rarity = 'Common';
                    break;
                case 'Uncommon':
                    Stats_Calculate_And_Bonus(1, 1.025, 1.05, 0, 1);
                    Item_Stats.Rarity = 'Uncommon';
                    break;
                case 'Rare':
                    Stats_Calculate_And_Bonus(2, 1.025, 1.075, 0, 2);
                    Item_Stats.Rarity = 'Rare';
                    break;
                case 'Epic':
                    Stats_Calculate_And_Bonus(2, 1.05, 2, 0, 3);
                    Item_Stats.Rarity = 'Epic';
                    break;
                case 'Fabled':
                    Stats_Calculate_And_Bonus(3, 1.075, 2.025, 1, 4);
                    Item_Stats.Rarity = 'Fabled';
                    break;
                case 'Mythical':
                    Stats_Calculate_And_Bonus(3, 2, 2.5, 2, 5);
                    Item_Stats.Rarity = 'Mythical';
                    break;
                case 'Legendary':
                    Stats_Calculate_And_Bonus(4, 2.25, 2.75, 3, 6);
                    Item_Stats.Rarity = 'Legendary';
                    break;
                case 'Artifact':
                    Stats_Calculate_And_Bonus(5, 2.5, 3, 4, 8);
                    Item_Stats.Rarity = 'Artifact';
                    break;
            }
            Item_Eternal_Number = Random_Number(0, 100);
            if (Item_Eternal_Number <= Item_Eternal_Chance || IsEternal == true) {
                Item_Stats.Eternal = {};
                Item_Stats.Eternal.IsTrFl = true;
                Item_Stats.Eternal.Combine_Time = 2;
            }
            if (Item_Stats.Stats.Xp != null) {
                if (Item_Stats.Stats.Xp.Mul == null || Item_Stats.Stats.Xp.Mul == {}) {
                    delete Item_Stats.Stats.Xp.Mul;
                }
                if (Item_Stats.Stats.Xp.Ch == null || Item_Stats.Stats.Xp.Ch == {}) {
                    delete Item_Stats.Stats.Xp.Ch;
                }
                if (Item_Stats.Stats.Xp.Chml == null || Item_Stats.Stats.Xp.Chml == {}) {
                    delete Item_Stats.Stats.Xp.Chml;
                }
            } else {
                delete Item_Stats.Stats.Xp;
            }
            if (Item_Stats.Stats.Gold != null) {
                if (Item_Stats.Stats.Gold.Mul == null || Item_Stats.Stats.Gold.Mul == {}) {
                    delete Item_Stats.Stats.Gold.Mul;
                }
                if (Item_Stats.Stats.Gold.Ch == null || Item_Stats.Stats.Gold.Ch == {}) {
                    delete Item_Stats.Stats.Gold.Ch;
                }
                if (Item_Stats.Stats.Gold.Chml == null || Item_Stats.Stats.Gold.Chml == {}) {
                    delete Item_Stats.Stats.Gold.Chml;
                }
            } else {
                delete Item_Stats.Stats.Gold;
            }
            if (Item_Stats.Stats.Hp != null) {
                if (Item_Stats.Stats.Hp.Max == null || Item_Stats.Stats.Hp.Max == {}) {
                    delete Item_Stats.Stats.Hp.Max;
                }
                if (Item_Stats.Stats.Hp.Apr == null || Item_Stats.Stats.Hp.Apr == {}) {
                    delete Item_Stats.Stats.Hp.Apr;
                }
                if (Item_Stats.Stats.Hp.Tpr == null || Item_Stats.Stats.Hp.Tpr == {}) {
                    delete Item_Stats.Stats.Hp.Tpr;
                }
            } else {
                delete Item_Stats.Stats.Hp;
            }
            if (Item_Stats.Stats.Mana != null) {
                if (Item_Stats.Stats.Mana.Max == null || Item_Stats.Stats.Mana.Max == {}) {
                    delete Item_Stats.Stats.Mana.Max;
                }
                if (Item_Stats.Stats.Mana.Apr == null || Item_Stats.Stats.Mana.Apr == {}) {
                    delete Item_Stats.Stats.Mana.Apr;
                }
                if (Item_Stats.Stats.Mana.Tpr == null || Item_Stats.Stats.Mana.Tpr == {}) {
                    delete Item_Stats.Stats.Mana.Tpr;
                }
            } else {
                delete Item_Stats.Stats.Mana;
            }
            if (Item_Stats.Stats.Dmg != null) {
                if (Item_Stats.Stats.Dmg.Amt == null || Item_Stats.Stats.Dmg.Amt == {}) {
                    delete Item_Stats.Stats.Dmg.Amt;
                }
                if (Item_Stats.Stats.Dmg.Crtch == null || Item_Stats.Stats.Dmg.Crtch == {}) {
                    delete Item_Stats.Stats.Dmg.Crtch;
                }
                if (Item_Stats.Stats.Dmg.Crtml == null || Item_Stats.Stats.Dmg.Crtml == {}) {
                    delete Item_Stats.Stats.Dmg.Crtml;
                }
            } else {
                delete Item_Stats.Stats.Dmg;
            }
            if (Item_Stats.Stats.Def != null) {
                if (Item_Stats.Stats.Def.Amt == null || Item_Stats.Stats.Def.Amt == {}) {
                    delete Item_Stats.Stats.Def.Amt;
                }
                if (Item_Stats.Stats.Def.Blch == null || Item_Stats.Stats.Def.Blch == {}) {
                    delete Item_Stats.Stats.Def.Blch;
                }
                if (Item_Stats.Stats.Def.Blml == null || Item_Stats.Stats.Def.Blml == {}) {
                    delete Item_Stats.Stats.Def.Blml;
                }
            } else {
                delete Item_Stats.Stats.Def;
            }
            if (Item_Stats.Stats.Atks == null || Item_Stats.Stats.Atks == {}) {
                delete Item_Stats.Stats.Atks;
            }
            if (Item_Stats.Stats.Mvs == null || Item_Stats.Stats.Mvs == {}) {
                delete Item_Stats.Stats.Mvs;
            }
            document.getElementById('demo').innerHTML = Item_Rarity + ' ' + Item_Stats.Name + ' --- ' + 'Level: ' + Item_Stats.Level + 
            (Item_Stats.Eternal != null ? ' --- (Eternal Item)' : '') + '<br>' + 
            (Item_Stats.Stats.Xp == null ? '' : (Item_Stats.Stats.Xp.Mul != null ? 'Xp multiply: ' + Item_Stats.Stats.Xp.Mul + '<br>' : '') + 
            (Item_Stats.Stats.Xp.Ch != null ? 'Bonus xp chance: ' + Item_Stats.Stats.Xp.Ch + '<br>' : '') + 
            (Item_Stats.Stats.Xp.Chml != null ? 'Bonus xp multiply: ' + Item_Stats.Stats.Xp.Chml + '<br>' : '')) + 
            (Item_Stats.Stats.Gold == null ? '' : (Item_Stats.Stats.Gold.Mul != null ? 'Gold multiply: ' + Item_Stats.Stats.Gold.Mul + '<br>' : '') + 
            (Item_Stats.Stats.Gold.Ch != null ? 'Bonus gold chance: ' + Item_Stats.Stats.Gold.Ch + '<br>' : '') + 
            (Item_Stats.Stats.Gold.Chml != null ? 'Bonus gold multiply: ' + Item_Stats.Stats.Gold.Chml + '<br>' : '')) + 
            (Item_Stats.Stats.Hp == null ? '' : (Item_Stats.Stats.Hp.Max != null ? 'Max hp: ' + Number_Format(Item_Stats.Stats.Hp.Max) + '<br>' : '') + 
            (Item_Stats.Stats.Hp.Apr != null ? 'Hp per regen: ' + Number_Format(Item_Stats.Stats.Hp.Apr) + '<br>' : '') + 
            (Item_Stats.Stats.Hp.Tpr != null ? 'Time per hp regen: ' + Item_Stats.Stats.Hp.Tpr + '<br>' : '')) + 
            (Item_Stats.Stats.Mana == null ? '' : (Item_Stats.Stats.Mana.Max != null ? 'Max mana: ' + Item_Stats.Stats.Mana.Max + '<br>' : '') + 
            (Item_Stats.Stats.Mana.Apr != null ? 'Mana per regen: ' + Item_Stats.Stats.Mana.Apr + '<br>' : '') + 
            (Item_Stats.Stats.Mana.Tpr != null ? 'Time per mana regen: ' + Item_Stats.Stats.Mana.Tpr + '<br>' : '')) + 
            (Item_Stats.Stats.Dmg == null ? '' : (Item_Stats.Stats.Dmg.Amt != null ? 'Damage: ' + Number_Format(Item_Stats.Stats.Dmg.Amt) + '<br>' : '') + 
            (Item_Stats.Stats.Dmg.Crtch != null ? 'Critical chance: ' + Item_Stats.Stats.Dmg.Crtch + '<br>' : '') + 
            (Item_Stats.Stats.Dmg.Crtml != null ? 'Critical multiply: ' + Item_Stats.Stats.Dmg.Crtml + '<br>' : '')) + 
            (Item_Stats.Stats.Def == null ? '' : (Item_Stats.Stats.Def.Amt != null ? 'Defense: ' + Number_Format(Item_Stats.Stats.Def.Amt) + '<br>' : '') + 
            (Item_Stats.Stats.Def.Blch != null ? 'Block chance: ' + Item_Stats.Stats.Def.Blch + '<br>' : '') + 
            (Item_Stats.Stats.Def.Blml != null ? 'Block multiply: ' + Item_Stats.Stats.Def.Blml + '<br>' : '')) + 
            (Item_Stats.Stats.Atks != null ? 'Attack speed: ' + Item_Stats.Stats.Atks + 'ms' + '<br>' : '') + 
            (Item_Stats.Stats.Mvs != null ? 'Move speed: ' + Item_Stats.Stats.Mvs + 'ms' + '<br>' : '');
            Save(Item_Stats, 'Inventory');
            Item_Stats = { Stats: {} };
            Item_Stats_Has = [];
            break;
        case 'Item_Consume':
            Item_Consume = Item_Consume;
            Item_Type_Random = Number(Random_Number(0, 26, true));
            Item_Type = Item_Type_Random > 20 ? 'Potion ingredient' :
                        Item_Type_Random > 14 ? 'Material part' :
                        Item_Type_Random > 10 ? 'Spell scroll' :
                        Item_Type_Random > 8 ? 'Card piece' :
                        Item_Type_Random > 5 ? 'Potion' :
                        Item_Type_Random > 2 ? 'Material' :
                        Item_Type_Random > 0 ? 'Spell' : 'Card';
            Item_List = Item_Consume[Item_Type];
            Item_Index = Math.round(Math.random() * (Item_List.length - 1));
            Item_Chosen = Item_List[Item_Index];
            Item_Stats = {};
            if (ItemType != null) {
                Item_List = Item_Consume[ItemType];
            }
            if (ItemIndex != null) {
                Item_Chosen = Item_List[ItemIndex];
            }
            if (ItemRarity != null) {
                Item_Rarity = ItemRarity;
            }
            if (Item_Type != 'Potion' || Item_Type != 'Spell' || Item_Type != 'Card') {
                if (Object_Array_Index(Inventory, 'Name', Item_Chosen.Name) > -1) {
                    Item_Stats = Inventory[Object_Array_Index(Inventory, 'Name', Item_Chosen.Name)];
                    Inventory.splice(Inventory.indexOf(Inventory[Object_Array_Index(Inventory, 'Name', Item_Chosen.Name)]), 1);
                    Item_Stats.Amount += 1;
                    Item_Stats.Type = "Item_Consume";
                    Save(Item_Stats, 'Inventory');
                } else {
                    Item_Stats.Name = Item_Chosen.Name;
                    Item_Stats.Amount = 1;
                    Item_Stats.Type = "Item_Consume";
                    Save(Item_Stats, 'Inventory');
                }
            } else {
                
            }
            break;
        default:
        
            break;
    }
    function Stats_Calculate_And_Bonus(Number_Of_Stats_Bonus_Max, Multiply_Bonus_Min, Multiply_Bonus_Max, Level_Bonus_Min, Level_Bonus_Max) {
        function Stats_Reset() {
            Level_Bonus = Number(Random_Number(Level_Bonus_Min, Level_Bonus_Max, true));
            Total_Level_Bonus = Number(Level_Zone) + Number(Level_Bonus);
            if (Total_Level_Highest < Total_Level_Bonus) {
                Total_Level_Highest = Total_Level_Bonus;
            }
            if (Number_Of_Stats_Bonus <= 0) {
                Total_Level_Bonus = Number(Level_Zone);
                Number_Of_Stats_Bonus = 0;
            }
            Stats_Chosen = Random_Number(0, Item_Stats_Has.length - 1, true);
        }
        Number_Of_Stats_Bonus = Number(Random_Number(Item_Stats_Has.length, Number_Of_Stats_Bonus_Max, true, Number_Of_Stats_Bonus_Max, 0) + 1);
        Stats_Reset();
        var Multiply_Bonus = Number(Random_Number(Multiply_Bonus_Min, Multiply_Bonus_Max));
        for (Number_Of_Stats_Bonus; Number_Of_Stats_Bonus > 0; Number_Of_Stats_Bonus--) {
            switch (Item_Stats_Has[Stats_Chosen]) {
                case 0:
                    Item_Stats.Stats.Xp.Mul = new Decimal(new Decimal(new Decimal(Multiply_Base).pow(Total_Level_Bonus).mul(new Decimal(Item_Chosen.Stats.Xp.Mul).mul(Multiply_Bonus))).floor()).toString();
                    Stats_Reset();
                    break;
                case 1:
                    Item_Stats.Stats.Xp.Ch = Item_Chosen.Stats.Xp.Ch * Multiply_Bonus;
                    Stats_Reset();
                    break;
                case 2:
                    Item_Stats.Stats.Xp.Chml = Item_Chosen.Stats.Xp.Chml * Multiply_Bonus;
                    Stats_Reset();
                    break;
                case 3:
                    Item_Stats.Stats.Gold.Mul = new Decimal(new Decimal(new Decimal(Multiply_Base).pow(Total_Level_Bonus).mul(new Decimal(Item_Chosen.Stats.Gold.Mul).mul(Multiply_Bonus))).floor()).toString();
                    Stats_Reset();
                    break;
                case 4:
                    Item_Stats.Stats.Gold.Ch = Item_Chosen.Stats.Gold.Ch * Multiply_Bonus;
                    Stats_Reset();
                    break;
                case 5:
                    Item_Stats.Stats.Gold.Chml = Item_Chosen.Stats.Gold.Chml * Multiply_Bonus;
                    Stats_Reset();
                    break;
                case 6:
                    Item_Stats.Stats.Hp.Max = new Decimal(new Decimal(new Decimal(Multiply_Base).pow(Total_Level_Bonus).mul(new Decimal(Item_Chosen.Stats.Hp.Max).mul(Multiply_Bonus))).floor()).toString();
                    Stats_Reset();
                    break;
                case 7:
                    Item_Stats.Stats.Hp.Apr = new Decimal(new Decimal(new Decimal(Multiply_Base).pow(Total_Level_Bonus).mul(new Decimal(Item_Chosen.Stats.Hp.Apr).mul(Multiply_Bonus))).floor()).toString();
                    Stats_Reset();
                    break;
                case 8:
                    if (Item_Chosen.Stats.Hp.Tpr > 0) {
                        Item_Stats.Stats.Hp.Tpr = Math.floor(Item_Chosen.Stats.Hp.Tpr * Multiply_Bonus);
                    } else if (Item_Chosen.Stats.Tpmr < 0) {
                        Item_Stats.Stats.Hp.Tpr = Math.floor(Item_Chosen.Stats.Hp.Tpr / Multiply_Bonus);
                    }
                    Stats_Reset();
                    break;
                case 9:
                    Item_Stats.Stats.Mana.Max = new Decimal(new Decimal(new Decimal(Multiply_Base).pow(Total_Level_Bonus).mul(new Decimal(Item_Chosen.Stats.Mana.Max).mul(Multiply_Bonus))).floor()).toString();
                    Stats_Reset();
                    break;
                case 10:
                    Item_Stats.Stats.Mana.Apr = new Decimal(new Decimal(new Decimal(Multiply_Base).pow(Total_Level_Bonus).mul(new Decimal(Item_Chosen.Stats.Mana.Apr).mul(Multiply_Bonus))).floor()).toString();
                    Stats_Reset();
                    break;
                case 11:
                    if (Item_Chosen.Stats.Mana.Tpr > 0) {
                        Item_Stats.Stats.Mana.Tpr = Math.floor(Item_Chosen.Stats.Mana.Tpr * Multiply_Bonus);
                    } else if (Item_Chosen.Stats.Tpmr < 0) {
                        Item_Stats.Stats.Mana.Tpr = Math.floor(Item_Chosen.Stats.Mana.Tpr / Multiply_Bonus);
                    }
                    Stats_Reset();
                    break;
                case 12:
                    Item_Stats.Stats.Dmg.Amt = new Decimal(new Decimal(new Decimal(Multiply_Base).pow(Total_Level_Bonus).mul(new Decimal(Item_Chosen.Stats.Dmg.Amt).mul(Multiply_Bonus))).floor()).toString();
                    Stats_Reset();
                    break;
                case 13:
                    Item_Stats.Stats.Dmg.Crtch = Item_Chosen.Stats.Dmg.Crtch * Multiply_Bonus;
                    Stats_Reset();
                    break;
                case 14:
                    Item_Stats.Stats.Dmg.Crtml = Item_Chosen.Stats.Dmg.Crtml * Multiply_Bonus;
                    Stats_Reset();
                    break;
                case 15:
                    Item_Stats.Stats.Def.Amt = new Decimal(new Decimal(new Decimal(Multiply_Base).pow(Total_Level_Bonus).mul(new Decimal(Item_Chosen.Stats.Def.Amt).mul(Multiply_Bonus))).floor()).toString();
                    Stats_Reset();
                    break;
                case 16:
                    Item_Stats.Stats.Def.Blch = Item_Chosen.Stats.Def.Blch * Multiply_Bonus;
                    Stats_Reset();
                    break;
                case 17:
                    Item_Stats.Stats.Def.Blml = Item_Chosen.Stats.Def.Blml * Multiply_Bonus;
                    Stats_Reset();
                    break;
                case 18:
                    if (Item_Chosen.Stats.Atks > 0) {
                        Item_Stats.Stats.Atks = Math.floor(Item_Chosen.Stats.Atks * Multiply_Bonus);
                    } else if (Item_Chosen.Stats.Atks < 0) {
                        Item_Stats.Stats.Atks = Math.floor(Item_Chosen.Stats.Atks / Multiply_Bonus);
                    }
                    Stats_Reset();
                    break;
                case 19:
                    if (Item_Chosen.Stats.Mvs > 0) {
                        Item_Stats.Stats.Mvs = Math.floor(Item_Chosen.Stats.Mvs * Multiply_Bonus);
                    } else if (Item_Chosen.Stats.Mvs < 0) {
                        Item_Stats.Stats.Mvs = Math.floor(Item_Chosen.Stats.Mvs / Multiply_Bonus);
                    }
                    Stats_Reset();
                    break;
            }
        }
        Number_Of_Stats_Bonus = 0;
        if (Total_Level_Highest > 0) {
            Item_Stats.Level = Total_Level_Highest;
        } else if (Total_Level_Highest === 0) {
            Item_Stats.Level = Level_Zone;
        }
    }
}
function Blacksmith_Combine(Item_Equip_1_Type, Item_Equip_2_Type, Is_ObjIdx) {
    var Item_Equip_Combined = { Stats: {} };
    var Item_Equip_1 = null;
    var Item_Equip_2 = null;
    var Item_Eternal_Check_Number_1 = 0;
    var Item_Eternal_Check_Number_2 = 0;
    if (Is_ObjIdx == false) {
        Item_Equip_1 = Inventory[Item_Equip_1_Type];
        Item_Equip_2 = Inventory[Item_Equip_2_Type];
    } else if (Is_ObjIdx == true) {
        Item_Equip_1 = Item_Equip_1_Type;
        Item_Equip_2 = Item_Equip_2_Type;
    }
    if (Item_Equip_1.Eternal != null) {
        Item_Equip_2.Eternal = {};
    } else if (Item_Equip_2.Eternal != null) {
        Item_Equip_1.Eternal = {};
    }
    if (Item_Equip_1.Eternal != null || Item_Equip_2.Eternal != null) {
        if (Item_Equip_1.Eternal == null) {
            Item_Equip_1.Eternal = {};
        } else if (Item_Equip_2.Eternal == null) {
            Item_Equip_2.Eternal = {};
        }
        if (Item_Equip_1.Eternal.IsTrFl == true || Item_Equip_2.Eternal.IsTrFl == true) {
            if (Item_Equip_1.Eternal.Combine_Time <= 0 || Item_Equip_2.Eternal.Combine_Time <= 0) {
                return;
            }
            Item_Eternal_Check_Number_1 = 5;
            Item_Eternal_Check_Number_2 = 5;
            Item_Equip_Combined.Eternal = {};
            Item_Equip_Combined.Eternal.IsTrFl = true;
            if (Item_Equip_1.Eternal.IsTrFl == true && Item_Equip_2.Eternal.IsTrFl == true) {
                Item_Equip_Combined.Eternal.Combine_Time = ((Item_Equip_1.Eternal.Combine_Time + Item_Equip_2.Eternal.Combine_Time) / 2) - 1;
            } else if (Item_Equip_1.Eternal.IsTrFl == true || Item_Equip_2.Eternal.IsTrFl == true) {
                if (Item_Equip_1.Eternal.IsTrFl == true) {
                    Item_Equip_Combined.Eternal.Combine_Time = Item_Equip_1.Eternal.Combine_Time - 1;
                } else if (Item_Equip_2.Eternal.IsTrFl == true) {
                    Item_Equip_Combined.Eternal.Combine_Time = Item_Equip_2.Eternal.Combine_Time - 1;
                }
            }
        } else {
            Non_Eternal_Checking();
            Item_Eternal_Check_Number_1 = 1;
            Item_Eternal_Check_Number_2 = 2;
        }
    } else {
        Non_Eternal_Checking();
        Item_Eternal_Check_Number_1 = 1;
        Item_Eternal_Check_Number_2 = 2;
    }
    if (Item_Equip_1_Type != null && Item_Equip_2_Type != null) {
        var String_1 = Item_Equip_1.Name, String_2 = Item_Equip_2.Name;
        var x_1 = String_1.slice(0, String_1.search(' ')), y_1 = String_1.slice(String_1.search(' '));
        var x_2 = String_2.slice(0, String_2.search(' ')), y_2 = String_2.slice(String_2.search(' '));
        Item_Equip_Combined.Name = x_1.slice(0, x_1.length / 2) + x_2.slice(x_2.length / 2) + y_1.slice(0, y_1.length / 2) + y_2.slice(y_2.length / 2);
        var String_3 = Item_Equip_1.Rarity, String_4 = Item_Equip_2.Rarity;
        Item_Equip_Combined.Rarity = Item_Equip_1.Rarity == Item_Equip_2.Rarity ? Item_Equip_1.Rarity : String_3.slice(0, String_3.length / 2) + String_4.slice(String_4.length / 2, String_4.length);
        Item_Equip_Combined.Level = Number(Math.floor((Item_Equip_1.Level + Item_Equip_2.Level) / Item_Eternal_Check_Number_2));
        Item_Equip_Combined.Type = 'Item_Equip_Combined';
        if (Item_Equip_1.Stats.Xp != null || Item_Equip_2.Stats.Xp != null) {
            if (Item_Equip_1.Stats.Xp == null) {
                Item_Equip_1.Stats.Xp = {};
            } else if (Item_Equip_2.Stats.Xp == null) {
                Item_Equip_2.Stats.Xp = {};
            }
            if (Item_Equip_1.Stats.Xp.Mul != null || Item_Equip_2.Stats.Xp.Mul != null) {
                if (Item_Equip_Combined.Stats.Xp == null) {
                    Item_Equip_Combined.Stats.Xp = {};
                }
                Item_Equip_Combined.Stats.Xp.Mul = Stats_Calculate_Combine(Item_Equip_1.Stats.Xp.Mul, Item_Equip_2.Stats.Xp.Mul, true, false, Item_Eternal_Check_Number_2, 1);
                //(new Decimal(Value_1).plus(new Decimal(Value_2))).div(Item_Eternal_Check_Number_2).toString();
            }
            if (Item_Equip_1.Stats.Xp.Ch != null || Item_Equip_2.Stats.Xp.Ch != null) {
                if (Item_Equip_Combined.Stats.Xp == null) {
                    Item_Equip_Combined.Stats.Xp = {};
                }
                Item_Equip_Combined.Stats.Xp.Ch = Stats_Calculate_Combine(Item_Equip_1.Stats.Xp.Ch, Item_Equip_2.Stats.Xp.Ch, false, false, Item_Eternal_Check_Number_2, 1e-300);
                //(new Decimal(Value_1).plus(new Decimal(Value_2))).div(Item_Eternal_Check_Number_2).toString();
            }
            if (Item_Equip_1.Stats.Xp.Chml != null || Item_Equip_2.Stats.Xp.Chml != null) {
                if (Item_Equip_Combined.Stats.Xp == null) {
                    Item_Equip_Combined.Stats.Xp = {};
                }
                Item_Equip_Combined.Stats.Xp.Chml = Stats_Calculate_Combine(Item_Equip_1.Stats.Xp.Chml, Item_Equip_2.Stats.Xp.Chml, false, false, Item_Eternal_Check_Number_2, 1);
                //(new Decimal(Value_1).plus(new Decimal(Value_2))).div(Item_Eternal_Check_Number_2).toString();
            }
        }
        if (Item_Equip_1.Stats.Gold != null || Item_Equip_2.Stats.Gold != null) {
            if (Item_Equip_1.Stats.Gold == null) {
                Item_Equip_1.Stats.Gold = {};
            } else if (Item_Equip_2.Stats.Gold == null) {
                Item_Equip_2.Stats.Gold = {};
            }
            if (Item_Equip_1.Stats.Gold.Mul != null || Item_Equip_2.Stats.Gold.Mul != null) {
                if (Item_Equip_Combined.Stats.Gold == null) {
                    Item_Equip_Combined.Stats.Gold = {};
                }
                Item_Equip_Combined.Stats.Gold.Mul = Stats_Calculate_Combine(Item_Equip_1.Stats.Gold.Mul, Item_Equip_2.Stats.Gold.Mul, true, false, Item_Eternal_Check_Number_2, 1);
            }
            if (Item_Equip_1.Stats.Gold.Ch != null || Item_Equip_2.Stats.Gold.Ch != null) {
                if (Item_Equip_Combined.Stats.Gold == null) {
                    Item_Equip_Combined.Stats.Gold = {};
                }
                Item_Equip_Combined.Stats.Gold.Ch = Stats_Calculate_Combine(Item_Equip_1.Stats.Gold.Ch, Item_Equip_2.Stats.Gold.Ch, false, false, Item_Eternal_Check_Number_2, 1e-300);
            }
            if (Item_Equip_1.Stats.Gold.Chml != null || Item_Equip_2.Stats.Gold.Chml != null) {
                if (Item_Equip_Combined.Stats.Gold == null) {
                    Item_Equip_Combined.Stats.Gold = {};
                }
                Item_Equip_Combined.Stats.Gold.Chml = Stats_Calculate_Combine(Item_Equip_1.Stats.Gold.Chml, Item_Equip_2.Stats.Gold.Chml, false, false, Item_Eternal_Check_Number_2, 1);
            }
        }
        if (Item_Equip_1.Stats.Hp != null || Item_Equip_2.Stats.Hp != null) {
            if (Item_Equip_1.Stats.Hp == null) {
                Item_Equip_1.Stats.Hp = {};
            } else if (Item_Equip_2.Stats.Hp == null) {
                Item_Equip_2.Stats.Hp = {};
            }
            if (Item_Equip_1.Stats.Hp.Max != null || Item_Equip_2.Stats.Hp.Max != null) {
                if (Item_Equip_Combined.Stats.Hp == null) {
                    Item_Equip_Combined.Stats.Hp = {};
                }
                Item_Equip_Combined.Stats.Hp.Max = Stats_Calculate_Combine(Item_Equip_1.Stats.Hp.Max, Item_Equip_2.Stats.Hp.Max, true, true, Item_Eternal_Check_Number_1);
            }
            if (Item_Equip_1.Stats.Hp.Apr != null || Item_Equip_2.Stats.Hp.Apr != null) {
                if (Item_Equip_Combined.Stats.Hp == null) {
                    Item_Equip_Combined.Stats.Hp = {};
                }
                Item_Equip_Combined.Stats.Hp.Apr = Stats_Calculate_Combine(Item_Equip_1.Stats.Hp.Apr, Item_Equip_2.Stats.Hp.Apr, true, true, Item_Eternal_Check_Number_2);
            }
            if (Item_Equip_1.Stats.Hp.Tpr != null || Item_Equip_2.Stats.Hp.Tpr != null) {
                if (Item_Equip_Combined.Stats.Hp == null) {
                    Item_Equip_Combined.Stats.Hp = {};
                }
                Item_Equip_Combined.Stats.Hp.Tpr = Stats_Calculate_Combine(Item_Equip_1.Stats.Hp.Tpr, Item_Equip_2.Stats.Hp.Tpr, false, false, Item_Eternal_Check_Number(Item_Equip_1.Stats.Hp.Tpr, Item_Equip_2.Stats.Hp.Tpr), null, 100);
            }
        }
        if (Item_Equip_1.Stats.Mana != null || Item_Equip_2.Stats.Mana != null) {
            if (Item_Equip_1.Stats.Mana == null) {
                Item_Equip_1.Stats.Mana = {};
            } else if (Item_Equip_2.Stats.Mana == null) {
                Item_Equip_2.Stats.Mana = {};
            }
            if (Item_Equip_1.Stats.Mana.Max != null || Item_Equip_2.Stats.Mana.Max != null) {
                if (Item_Equip_Combined.Stats.Mana == null) {
                    Item_Equip_Combined.Stats.Mana = {};
                }
                Item_Equip_Combined.Stats.Mana.Max = Stats_Calculate_Combine(Item_Equip_1.Stats.Mana.Max, Item_Equip_2.Stats.Mana.Max, true, true, Item_Eternal_Check_Number_2);
            }
            if (Item_Equip_1.Stats.Mana.Apr != null || Item_Equip_2.Stats.Mana.Apr != null) {
                if (Item_Equip_Combined.Stats.Mana == null) {
                    Item_Equip_Combined.Stats.Mana = {};
                }
                Item_Equip_Combined.Stats.Mana.Apr = Stats_Calculate_Combine(Item_Equip_1.Stats.Mana.Apr, Item_Equip_2.Stats.Mana.Apr, true, true, Item_Eternal_Check_Number_2);
            }
            if (Item_Equip_1.Stats.Mana.Tpr != null || Item_Equip_2.Stats.Mana.Tpr != null) {
                if (Item_Equip_Combined.Stats.Mana == null) {
                    Item_Equip_Combined.Stats.Mana = {};
                }
                Item_Equip_Combined.Stats.Mana.Tpr = Stats_Calculate_Combine(Item_Equip_1.Stats.Mana.Tpr, Item_Equip_2.Stats.Mana.Tpr, false, false, Item_Eternal_Check_Number(Item_Equip_1.Stats.Mana.Tpr, Item_Equip_2.Stats.Mana.Tpr), null, 100);
            }
        }
        if (Item_Equip_1.Stats.Dmg != null || Item_Equip_2.Stats.Dmg != null) {
            if (Item_Equip_1.Stats.Dmg == null) {
                Item_Equip_1.Stats.Dmg = {};
            } else if (Item_Equip_2.Stats.Dmg == null) {
                Item_Equip_2.Stats.Dmg = {};
            }
            if (Item_Equip_1.Stats.Dmg.Amt != null || Item_Equip_2.Stats.Dmg.Amt != null) {
                if (Item_Equip_Combined.Stats.Dmg == null) {
                    Item_Equip_Combined.Stats.Dmg = {};
                }
                Item_Equip_Combined.Stats.Dmg.Amt = Stats_Calculate_Combine(Item_Equip_1.Stats.Dmg.Amt, Item_Equip_2.Stats.Dmg.Amt, true, true, Item_Eternal_Check_Number_1);
            }
            if (Item_Equip_1.Stats.Dmg.Crtch != null || Item_Equip_2.Stats.Dmg.Crtch != null) {
                if (Item_Equip_Combined.Stats.Dmg == null) {
                    Item_Equip_Combined.Stats.Dmg = {};
                }
                Item_Equip_Combined.Stats.Dmg.Crtch = Stats_Calculate_Combine(Item_Equip_1.Stats.Dmg.Crtch, Item_Equip_2.Stats.Dmg.Crtch, false, false, Item_Eternal_Check_Number_2, 1e-300);
            }
            if (Item_Equip_1.Stats.Dmg.Crtml != null || Item_Equip_2.Stats.Dmg.Crtml != null) {
                if (Item_Equip_Combined.Stats.Dmg == null) {
                    Item_Equip_Combined.Stats.Dmg = {};
                }
                Item_Equip_Combined.Stats.Dmg.Crtml = Stats_Calculate_Combine(Item_Equip_1.Stats.Dmg.Crtml, Item_Equip_2.Stats.Dmg.Crtml, false, false, Item_Eternal_Check_Number_2, 1);
            }
        }
        if (Item_Equip_1.Stats.Def != null || Item_Equip_2.Stats.Def != null) {
            if (Item_Equip_1.Stats.Def == null) {
                Item_Equip_1.Stats.Def = {};
            } else if (Item_Equip_2.Stats.Def == null) {
                Item_Equip_2.Stats.Def = {};
            }
            if (Item_Equip_1.Stats.Def.Amt != null || Item_Equip_2.Stats.Def.Amt != null) {
                if (Item_Equip_Combined.Stats.Def == null) {
                    Item_Equip_Combined.Stats.Def = {};
                }
                Item_Equip_Combined.Stats.Def.Amt = Stats_Calculate_Combine(Item_Equip_1.Stats.Def.Amt, Item_Equip_2.Stats.Def.Amt, true, true, Item_Eternal_Check_Number_1);
            }
            if (Item_Equip_1.Stats.Def.Blch != null || Item_Equip_2.Stats.Def.Blch != null) {
                if (Item_Equip_Combined.Stats.Def == null) {
                    Item_Equip_Combined.Stats.Def = {};
                }
                Item_Equip_Combined.Stats.Def.Blch = Stats_Calculate_Combine(Item_Equip_1.Stats.Def.Blch, Item_Equip_2.Stats.Def.Blch, false, false, Item_Eternal_Check_Number_2, 1e-300);
            }
            if (Item_Equip_1.Stats.Def.Blml != null || Item_Equip_2.Stats.Def.Blml != null) {
                if (Item_Equip_Combined.Stats.Def == null) {
                    Item_Equip_Combined.Stats.Def = {};
                }
                Item_Equip_Combined.Stats.Def.Blml = Stats_Calculate_Combine(Item_Equip_1.Stats.Def.Blml, Item_Equip_2.Stats.Def.Blml, false, false, Item_Eternal_Check_Number_2, 1);
            }
        }
        if (Item_Equip_1.Stats.Atks != null || Item_Equip_2.Stats.Atks != null) {
            Item_Equip_Combined.Stats.Atks = Stats_Calculate_Combine(Item_Equip_1.Stats.Atks, Item_Equip_2.Stats.Atks, false, true, Item_Eternal_Check_Number_2, null, 100);
        }
        if (Item_Equip_1.Stats.Mvs != null || Item_Equip_2.Stats.Mvs != null) {
            Item_Equip_Combined.Stats.Mvs = Stats_Calculate_Combine(Item_Equip_1.Stats.Mvs, Item_Equip_2.Stats.Mvs, false, true, Item_Eternal_Check_Number_2, null, 100);
        }
        if (Is_ObjIdx == false) {
            Inventory.splice(Inventory.indexOf(Inventory[Item_Equip_1_Type]), 1);
            Inventory.splice(Inventory.indexOf(Inventory[Item_Equip_2_Type]), 1);
        }
        Save(Item_Equip_Combined, 'Inventory');
        Item_Equip_Combined = { Stats: {} };
    }
    function Stats_Calculate_Combine(Var_1, Var_2, Is_Decimal, Is_Rounded, Eternal_Number, Not_Smaller_Than, Not_Larger_Than) {
        var Value_1 = Var_1 != null ? Var_1 : 0;
        var Value_2 = Var_2 != null ? Var_2 : 0;
        var Result = null;
        if (Is_Decimal == true) {
            if (Is_Rounded == true) {
                Result = (new Decimal(Value_1).plus(new Decimal(Value_2))).div(Eternal_Number).floor().toString();
                if (Not_Smaller_Than != null && new Decimal(String(Result)).cmp(new Decimal(Not_Smaller_Than)) == -1) {
                    return String(Not_Smaller_Than);
                } else {
                    return String(Result);
                }
            } else if (Is_Rounded == false) {
                Result = (new Decimal(Value_1).plus(new Decimal(Value_2))).div(Eternal_Number).toString();
                if (Not_Smaller_Than != null && new Decimal(String(Result)).cmp(new Decimal(Not_Smaller_Than)) == -1) {
                    return String(Not_Smaller_Than);
                } else {
                    return String(Result);
                }
            }
        } else if (Is_Decimal == false) {
            if (Is_Rounded == true) {
                Result = Number(Math.floor(Number(Value_1 + Value_2) / Eternal_Number));
                if (Not_Smaller_Than != null && Not_Smaller_Than >= Result) {
                    return Number(Not_Smaller_Than);
                } else {
                    if (Not_Larger_Than != null && Not_Larger_Than <= Result) {
                        return Number(Not_Larger_Than);
                    } else {
                        return Number(Result);
                    }
                }
            } else if (Is_Rounded == false) {
                Result = Number(Number(Value_1 + Value_2) / Eternal_Number);
                if (Not_Smaller_Than != null && Not_Smaller_Than >= Result) {
                    return Number(Not_Smaller_Than);
                } else {
                    if (Not_Larger_Than != null && Not_Larger_Than <= Result) {
                        return Number(Not_Larger_Than);
                    } else {
                        return Number(Result);
                    }
                }
            }
        }
    }
    function Item_Eternal_Check_Number(x, y) {
        if (x < 0 && y < 0) {
            if (x > 0 && y > 0) {
                return 5;
            }
            return 2;
        }
        return 2;
    }
    function Non_Eternal_Checking() {
        if (Item_Equip_1.Type == 'Item_Equip_Combined' || Item_Equip_2.Type == 'Item_Equip_Combined') {
            return;
        }
    }
}
function Blacksmith_Crafting(Material_1_Type, Material_2_Type, Material_3_Type, Material_4_Type, Is_ObjIdx) {
    var Material_1 = null,
        Material_2 = null,
        Material_3 = null,
        Material_4 = null;
    if (Is_ObjIdx == true) {
        Material_1 = Material_1_Type;
        Material_2 = Material_2_Type;
        Material_3 = Material_3_Type;
        Material_4 = Material_4_Type;
    } else {
        Material_1 = Inventory[Material_1_Type];
        Material_2 = Inventory[Material_2_Type];
        Material_3 = Inventory[Material_3_Type];
        Material_4 = Inventory[Material_4_Type];
    }
    var Amount_1 = Material_1 != null ? Material_1.Amount : 0,
        Amount_2 = Material_2 != null ? Material_2.Amount : 0,
        Amount_3 = Material_3 != null ? Material_3.Amount : 0,
        Amount_4 = Material_4 != null ? Material_4.Amount : 0;
    if (Material_1 != null || Material_2 != null || Material_3 != null || Material_4 != null) {
        Item_Equip = Item_Equip;
        Item_Consume = Item_Consume;
        var Formula = '';
        if (Material_1 != null && Material_2 != null && Material_3 != null && Material_4 != null) {
            Formula = Material_1.Name + '_' + Material_1.Amount + Material_2.Name + '_' + Material_2.Amount + Material_3.Name + '_' + Material_3.Amount + Material_4.Name + '_' + Material_4.Amount;
        } else if (Material_1 != null && Material_2 != null && Material_3 != null) {
            Formula = Material_1.Name + '_' + Material_1.Amount + Material_2.Name + '_' + Material_2.Amount + Material_3.Name + '_' + Material_3.Amount;
        } else if (Material_1 != null && Material_2 != null) {
            Formula = Material_1.Name + '_' + Material_1.Amount + Material_2.Name + '_' + Material_2.Amount;
        } else if (Material_1 != null) {
            Formula = Material_1.Name + '_' + Material_2.Amount;
        } else {
            return;
        }
        var Result = {};
        switch (Formula) {
            case 'Iron_1_Coal_1':
                
                break;
            case '':
                Result = {};
                break;
        };
        if (Result != {}) {
            Save(Result, 'Inventory');
        };
        Result = {};
    };
    function Item_Delete(item) {
        
    };
};
function getCount() {
    var base = 0,
    ratio = 0,
    number = 0,
    amount = 0,
    money = 0;
    var cost = Math.floor(base * Math.pow(ratio, number) * (1 - Math.pow(ratio, amount)) / (1 - ratio));
    // ((((new Decimal(base).mul(new Decimal(ratio).pow(number))).mul(new Decimal(1).sub(new Decimal(ratio).pow(amount)))).div(new Decimal(1).sub(ratio))).floor()).toString();
    var count2 = Math.floor(Math.log(money / cost / base + 1) / Math.log(ratio));
    document.getElementById('cost').innerHTML = Number_Format(cost);
    document.getElementById('count2').innerHTML = count2;
};
function Number_Format_Option(type) {
    if (type in Notation_Options) Notation_Option = Notation_Options[type];
}
function Number_Format(number) {
    Notation_Options = Notation_Options;
    Notation_Option = Notation_Option;
    var digits = new Decimal(String(number)).cmp(new Decimal(1)) <= 0 ? 0 : Decimal.log10(String(number)).floor().toNumber();
    var position = 2 - digits % 3;
    var r = (Math.abs(number) < 1000) ? new Decimal(number).floor() : (new Decimal(String(number)).div(new Decimal(10).pow((new Decimal(digits).div(3)).floor().mul(3).sub(position))).div(new Decimal(10).pow(position).floor())).floor().toString();
    var thousands = Math.floor(digits / 3) - 1;
    if (Notation_Option == Notation_Options.Scientific || Notation_Option == Notation_Options.Exponential) {
        Decimal.config({
            rounding: 4
        });
        var num = new Decimal(String(number)).div(digits - 3 < 1 ? 1 : new Decimal(10).pow(Number(digits - 3))).floor().mul(new Decimal(String(number)).cmp(1000) == -1 ? 1 : 0.001);
        var Num = new Decimal(String(number)).cmp(1000) == -1 ? num : num.toFixed(3);
        return (new Decimal(String(number)).cmp(1000) == 1 ? Num : Number(number)) + (new Decimal(String(number)).cmp(1000) == 1 ? 'e+' + digits : '');
    } else if (Notation_Option == Notation_Options.Engineering) {
        return r + (digits > 2 ? 'e+' + String((thousands + 1) * 3) : '');
    } else {
        return r + Create_Suffix(Notation_Option, thousands);
    }
}
function Create_Suffix(Notation_Option, Format_Number) {
    Suffixes = Suffixes;
    Notation_Options = Notation_Options;
    var replaceChars = {};
    var charAt = null;
    var a0 = Suffixes[Notation_Option][0],
        a1 = Suffixes[Notation_Option][1],
        a2 = Suffixes[Notation_Option][2],
        a3 = Suffixes[Notation_Option][3],
        a4 = Suffixes[Notation_Option][4];
    var Number_1000 = Math.floor(Format_Number / 1000) % 10;
    var Number_100 = Math.floor(Format_Number / 100) % 10;
    var Number_10 = Math.floor(Format_Number / 10) % 10;
    var Number_1 = Math.floor(Format_Number / 1) % 10;
    var Number_1000_String = '';
    var Number_100_String = '';
    var Number_10_String = '';
    var Number_1_String = '';
    var Number_Lillion_String = 'illion';
    if (Format_Number == -1) {
        return '';
    } else if (Format_Number <= 10) {
        return ' ' + a0[Format_Number];
    } else if (Format_Number < 10000) {
        switch (Notation_Option) {
            case Notation_Options.Short_Number:
                Number_1000_String = (Number_1000 === 0 ? '' : a0[Number_1000]);
                if (Number_1000 === 0) {
                    Number_1000_String = '';
                } else if (Number_1000 == 1 || Number_1000 == 2 || Number_1000 == 3) {
                    Number_1000_String = Number_1000_String + 'i';
                }
                if (Number_100 === 0) {
                    Number_100_String = '';
                } else if (Number_100 == 1) {
                    Number_100_String = a3[0];
                    if (Number_10 !== 0 || Number_1 !== 0) {
                        if (Number_1000 === 0) {
                            Number_100_String = Number_100_String.replace('e', '');
                        }
                    }
                } else {
                    Number_100_String = a1[Number_100 - 1];
                    replaceChars = {
                        2: 'u',
                        3: 'r',
                        8: 'c',
                        9: 'o'
                    };
                    if (Number_100 in replaceChars) {
                        if (Number_1000 === 0) {
                            Number_100_String = Number_100_String.replace(replaceChars[Number_100], '');
                        }
                    }
                }
                Number_10_String = Number_10 === 0 ? '' : a2[Number_10 - 1] != null ? a2[Number_10 - 1] : a1[Number_10 - 1];
                if (Number_100 === 0) {
                    Number_10_String = Number_10 == 1 || Number_10 == 2 ? a2[Number_10 - 1] : a1[Number_10 - 1];
                    if (Number_1 !== 0) {
                        replaceChars = {
                            1: 'e',
                            2: 'i',
                            3: 'r',
                            8: 'c',
                            9: 'o'
                        };
                        if (Number_10 in replaceChars) {
                            Number_10_String = Number_10_String.replace(replaceChars[Number_10], '');
                        }
                    }
                }
                Number_1_String = Number_1 === 0 ? '' : a1[Number_1 - 1];
                if (Number_1 == 6) {
                    charAt = Number_10 === 0 ? Number_100_String.charAt(0) : Number_10_String.charAt(0);
                    if (['C', 'O'].indexOf(charAt) != -1) {
                        Number_1_String = Number_1_String.replace('e', 'x');
                    } else if (['Q', 'T', 'V'].indexOf(charAt) != -1) {
                        Number_1_String = Number_1_String.replace('e', 's');
                    }
                }
                if (Number_1 === 0) {
                    Number_1_String = '';
                }
                if (Number_10 === 0) {
                    Number_10_String = '';
                }
                if (Number_100 === 0) {
                    Number_100_String = '';
                }
                Number_Lillion_String = '';
                break;
            case Notation_Options.Long_Number:
                Number_1000_String = (Number_1000 === 0 ? '' : a4[Number_1000 - 1]);
                Number_100_String = Number_100 === 0 ? '' : a3[Number_100 - 1];
                Number_10_String = Number_10 === 0 ? '' : a2[Number_10 - 1];
                if (Number_10 == 1 || Number_10 == 2) {
                    Number_10_String = a2[Number_10 - 1];
                    if (Number_1000 === 0 & Number_100 === 0) {
                        Number_Lillion_String = 'llion';
                    }
                } else if ([3, 4, 5, 6, 7, 8, 9].indexOf(Number_10) != -1) {
                    if (Number_1000 === 0 & Number_100 === 0) {
                        Number_10_String = a2[Number_10 - 1].slice(0, a2[Number_10 - 1].length - 1);
                    } else {
                        Number_Lillion_String = 'llion';
                    }
                }
                Number_1_String = Number_1 === 0 ? '' : a1[Number_1 - 1];
                charAt = Number_10 === 0 ? Number_100_String.charAt(0) : Number_10_String.charAt(0);
                if (Number_1 == 3 && ['c', 'o', 'q', 't', 'v'].indexOf(charAt) != -1) {
                    Number_1_String += 's';
                } else if (Number_1 == 6) {
                    if (['c', 'o'].indexOf(charAt) != -1) {
                        Number_1_String += 'x';
                    } else if (['q', 't', 'v'].indexOf(charAt) != -1) {
                        Number_1_String += 's';
                    }
                } else if (Number_1 == 7 || Number_1 == 9) {
                    if (['c', 'd', 'q', 's', 't'].indexOf(charAt) != -1) {
                        Number_1_String += 'n';
                    } else if (['o', 'v'].indexOf(charAt) != -1) {
                        Number_1_String += 'm';
                    }
                }
                break;
        }
        return ' ' + Cap_First_Letter(String(Number_1_String + Number_10_String + Number_100_String + Number_1000_String + Number_Lillion_String));
    } else {
        return 'e+' + String((Format_Number + 1) * 3);
    }
}
// Abadoned function, do not touch.
function Random_Number(min, max, Is_Rounded, Result_If_Min_Larger_Max, Result_If_Equal) {
    var Random_Result = Number(Math.random() * (max - min + 1) + min);
    if (Is_Rounded == true) {
        Random_Result = Number(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    if (min > max) {
        if (Result_If_Min_Larger_Max == null) {
            Random_Result = 0;
        } else {
            Random_Result = Result_If_Min_Larger_Max;
        }
        return Random_Result;
    } else if (min == max) {
        if (Result_If_Equal == null) {
            Random_Result = min;
        } else {
            Random_Result = Result_If_Equal;
        }
        return Random_Result;
    } else if (min < max) {
        return Random_Result;
    }
}
function Cap_First_Letter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function Math_Floor_Or_Ceil(n) {
    return (Math.abs(n) - Math.abs(Math.floor(n)) >= 0.9999999999999991) ? Math.ceil(n) : Math.floor(n);
}
function getBaseLog(x, y) {
    return Math.log(x) / Math.log(y);
}
function Get_Object_Address(string) {
    var object = window[string.slice(0, string.search('~'))];
    var String_Address = string.slice(string.search('~') + 1);
    String_Address = String_Address.replace(/\[(\w+)\]/g, '.$1');
    String_Address = String_Address.replace(/^\./, '');
    var a = String_Address.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (k in object) {
            object = object[k];
        } else {
            return;
        }
    }
    return object;
}
function Get_Object_Value(object, address, value) {
    if (typeof address == 'string')
        return Get_Object_Value(object,address.split('.'), value);
    else if (address.length==1 && value!==undefined)
        return object[address[0]] == value;
    else if (address.length===0)
        return object;
    else
        return Get_Object_Value(object[address[0]],address.slice(1), value);
}
function Object_Array_Index(array, address, value) {
    var result_index = null;
    result_index = String(array.map(function(obj, index) {
        if(Get_Object_Value(obj, address) == value) {
            return index;
        }
    }).filter(isFinite));
    if (result_index === '') {
        return -1;
    } else {
        return Number(result_index);
    }
}
function Interval_Calculate(Value, Is_Reverse) {
    if (Is_Reverse == false) {
        return (100 / Value) * 10;
    } else if (Is_Reverse == true) {
        return 100 / (Value / 10);
    }
}
function Set_Timer(action, interval) {
    var expected = Date.now() + interval;
    setTimeout(step, interval);
    function step() {
    var dt = Date.now() - expected; // the drift (positive for overshooting)
        if (dt > interval) {
            // something really bad happened. Maybe the browser (tab) was inactive?
            // possibly special handling to avoid futile "catch up" run
        }
        action();
        expected += interval;
        setTimeout(step, Math.max(0, interval - dt)); // take into account drift
    }
}
/*function Get_Object_Address(object, String_Address, Is_Object_String) {
    if (Is_Object_String == true) {
        object = window[object];
    }
    String_Address = String_Address.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    String_Address = String_Address.replace(/^\./, '');           // strip a leading dot
    var a = String_Address.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (k in object) {
            object = object[k];
        } else {
            return;
        }
    }
    return object;
}*/
/* function If_Value_In_Array(value, array) {
    function Value_Has(x) {
        return x >= value;
    };
    return array.find(Value_Has);
};  This function don't work on phone.
/* function getElementsById(ids) {
    var idList = ids.split(' ');
    var results = [], item;
    for (var i = 0; i < idList.length; i++) {
        item = document.getElementById(idList[i]);
        if (item) {
            results.push(item);
        }
    }
*/
/*window.BigNumberFormatter = new function() {
		var notations = {
			SHORT_NUMBER: 1, 
			LONG_NUMBER: 2, 
			EXPONENTIAL: 3, 
			SCIENTIFIC: 3, 
			ENGINEERING: 4, 
		};
		
		var suffixes = {};
		suffixes[notations.SHORT_NUMBER] = [
			[ 'M',   'B',   'T',   'Qa',   'Qi',   'Sx',   'Sp',   'Oc',   'No', ], 
			[ 'U',   'D',   'T',   'Qa',   'Qi',   'Sx',   'Sp',   'Oc',   'No', ], 
			[ 'Dc',  'Vg',  'Tg',  'Qag',  'Qig',  'Sxg',  'Spg',  'Ocg',  'Nog', ], 
			[ 'Cn',  'DCn', 'TCn', 'QaCn', 'QiCn', 'SxCn', 'SpCn', 'OcCn', 'NoCn', ], 
			[ 'Mil', ], 
		];
		suffixes[notations.LONG_NUMBER] = [
			[ 'M',      'B',      'Tr',     'Quadr',      'Quint',      'Sext',    'Sept',      'Oct',      'Non', ], 
			[ 'Un',     'Duo',    'Tre',    'Quattuor',   'Quin',       'Sex',     'Septen',    'Octo',     'Novem', ], 
			[ 'Dec',    'Vigin',  'Trigin', 'Quadragin',  'Quinquagin', 'Sexagin', 'Septuagin', 'Octogin',  'Nonagin', ], 
			[ 'Cen',    'DuoCen', 'TreCen', 'Quadringen', 'Quingen',    'Sescen',  'Septingen', 'Octingen', 'Nongen', ], 
			[ 'Millia', ], 
		];
		
		var generateSuffix = function(digits, notation) {
			// Attempt to get the suffixes for the given notation
			if (!(notation in suffixes))
				notation = notations.LONG_NUMBER;
			var suffixList = suffixes[notation];
			
			// Convert from digit count to latin power number
			var thousands = Math.floor((digits - 1) / 3);
			var latinPower = thousands - 1;
			
			// Compile the suffix in groups of 1000
			var suffix = '';
			var thousandPart = '';
			for (var powersLeft = latinPower; powersLeft >= 1; ) {
				// Take the lowest thousand-part (ie last three digits) from the latin power count
				var newPowersLeft = Math.floor(powersLeft / 1000);
				var current = powersLeft - newPowersLeft * 1000;
				
				// Split off the hundreds, tens, and units
				var hundreds = Math.floor(current / 100) % 10;
				var tens = Math.floor(current / 10) % 10;
				var units = Math.floor(current / 1) % 10;
				
				// Convert into the suffix parts for hundreds, tens, and units
				var hundredPart = (hundreds >= 1) ? suffixList[3][hundreds - 1] : '';
				var tenPart = (tens >= 1) ? suffixList[2][tens - 1] : '';
				var unitPart = (units >= 1) ? suffixList[(latinPower < 10) ? 0 : 1][units - 1] : '';
				
				// Combine the suffix parts, and add the generated thousand-part suffix to the result
				var part = hundredPart + unitPart + tenPart;
				part = (part != '') ? part + thousandPart : part;
				suffix = part + suffix;
				
				// Update the remaining latin powers, and add to the thousand suffix part
				powersLeft = newPowersLeft;
				thousandPart += suffixList[4][0];
			}
			
			// Compute the ending part, and return the final result
			var ending = '';
			if (notation === notations.LONG_NUMBER)
				var ending = (latinPower >= 20) ? 'tillion' : (latinPower >= 1) ? 'illion' : '';
			
			return suffix + ending;
		};
		
		this.notations = notations;
		this.GenerateSuffix = generateSuffix;
	};
 */
