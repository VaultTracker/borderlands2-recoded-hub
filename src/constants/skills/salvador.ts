import type { CharacterSkillTreeData } from './types';

export const DATA: CharacterSkillTreeData = {
  character: 'salvador',
  actionSkill: {
    name: 'Modo Torreta',
    description:
      '<skill>Action Skill</skill>: Press Action Skill to draw a second gun and enter <skill>Modo Torreta</skill>! When entering <skill>Modo Torreta</skill>, you instantly regain <skill>50%</skill> of your <health>Maximum Health</health>. While in <skill>Modo Torreta</skill>, you gain increased <skill>Damage Resistance</skill>, <skill>Fire Rate</skill>, <health>Maximum Health</health>, <health>Health Regeneration</health> and <skill>Ammo Regeneration</skill>, while decreasing your <skill>Gun Damage</skill> and <skill>Movement Speed</skill>.',
    details: [],
  },
  skills: {
    green: {
      name: 'MaestroDeLaPistola',
      description:
        "Guns are Salvador's bread & butter. So why not make them even better? Provides various gun buffs with certain limitations",
      items: [
        {
          position: {
            row: 0,
            col: 1,
          },
          name: 'Wanted on Pandora (AllIneedIsOne)',
          description:
            'Killing an enemy increases your <skill>Wanted Level</skill>. Each <skill>Wanted Level</skill> increases <skill>all damage</skill>, but also lowers <skill>Fight For Your Life Time</skill> and increases <skill>Enemy Aggression</skill> towards you. <br /> <br /> Your <skill>Wanted Level</skill> can only be increased every <skill>3 seconds</skill>, and will slowly decay after a while, and will <skill>reset to 0</skill> upon <health>death</health>.',
          details: [
            {
              name: 'Wanted Level',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Fight For Your Life Time',
              prefix: '-',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Enemy Aggression',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
          ],
          maxPoints: 1,
        },
        {
          position: {
            row: 1,
            col: 0,
          },
          name: 'No Se Necesitan Elementos (Quick Draw)',
          description:
            'Increases your <skill>non-elemental</skill> damage but decreases your <explosive>elemental</explosive> damage.',
          details: [
            {
              name: 'Non-Elemental Damage',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Elemental Damage',
              prefix: '-',
              value: 10,
              suffix: '%',
            },
          ],
          maxPoints: 5,
        },
        {
          position: {
            row: 1,
            col: 2,
          },
          name: 'Rociar y Rezar (LockedandLoaded)',
          description:
            '<skill>Reloading</skill> your gun increases <skill>Fire Rate</skill>, <skill>Reload Speed</skill>, <skill>Swap Speed</skill> and <skill>Movement Speed</skill> for a short period of time.',
          details: [
            {
              name: 'Reload Speed',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Swap Speed',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Fire Rate',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Movement Speed',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
          ],
          maxPoints: 5,
        },
        {
          position: {
            row: 2,
            col: 0,
          },
          name: 'Municion Rapida (Auto Loader)',
          description:
            '<incendiary>Game Changer</incendiary>: Killing an enemy <skill>instantly reloads</skill> all of the guns you have equipped that are <health>not</health> currently in your hands. Swapping guns after <skill>Municion Rapida</skill> has reloaded a gun triggers <skill>Rociar y Rezar</skill>, increasing your <skill>Fire Rate</skill>, <skill>Reload Speed</skill>, <skill>Swap Speed</skill> and <skill>Movement Speed</skill> while active.',
          details: [
            {
              name: 'Reload Speed',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Swap Speed',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Fire Rate',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Movement Speed',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
          ],
          maxPoints: 1,
        },
        {
          position: {
            row: 2,
            col: 1,
          },
          name: 'Payday! (MoneyShot)',
          description:
            'The <skill>last round</skill> fired from your magazine deals <skill>massively increased damage</skill>. Guns with <skill>small magazines</skill> receive a <skill>smaller bonus</skill>.<br /> <br /> Additionally, increases your <skill>Magazine Size</skill> and <skill>Reload Speed</skill>',
          details: [
            {
              name: 'Payday Damage Bonus',
              prefix: '+',
              value: 100,
              suffix: '%',
            },
            {
              name: 'Magazine Size',
              prefix: '+',
              value: 5,
              suffix: '%',
            },
            {
              name: 'Reload Speed',
              prefix: '+',
              value: 5,
              suffix: '%',
            },
          ],
          maxPoints: 5,
        },
        {
          position: {
            row: 2,
            col: 2,
          },
          name: 'Ambidexterity (DownNotOut)',
          description:
            '<slag>Augment</slag>: You can now enter <skill>Modo Torreta</skill> while in <skill>Fight For Your Life</skill>. Additionally, you <skill>throw 2 grenades</skill> for the cost of <skill>1 ammo</skill>.',
          details: [
            {
              name: 'Modo Torreta in Fight For Your Life, plus 2 for the price of 1!',
            },
          ],
          maxPoints: 1,
          augment: true,
        },
        {
          position: {
            row: 3,
            col: 0,
          },
          name: 'El Unico (Keep It Piping Hot)',
          description:
            'While not in <skill>Modo Torreta</skill>, you gain increased <skill>Gun Damage</skill>, <skill>Melee Damage</skill> and <skill>Damage Resistance</skill>.',
          details: [
            {
              name: 'Gun Damage',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Melee Damage',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Damage Resistance',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
          ],
          maxPoints: 5,
          killSkill: true,
        },
        {
          position: {
            row: 3,
            col: 2,
          },
          name: 'Rubber Retaliation (LayWaste)',
          description:
            "<explosive>Kill Skill</explosive>: Killing an enemy increases your pistols' <skill>Critical Damage</skill> , adds <skill>2 projectiles</skill> and <skill>1 ricochet</skill> for a short period of time.",
          details: [
            {
              name: 'projectiles per shot',
              prefix: '+',
              value: 2,
            },
            {
              name: 'Pistol Damage',
              prefix: '+',
              value: 15,
              suffix: '%',
            },
            {
              name: 'Pistol Ricochet',
              prefix: '+',
              value: 1,
            },
          ],
          maxPoints: 5,
          killSkill: true,
        },
        {
          position: {
            row: 4,
            col: 0,
          },
          name: 'Manufactuer Mastery (Divergent Likeness)',
          description:
            '<slag>Augment</slag>: Increases <skill>various stats</skill> based on what <skill>gun manufacturer</skill> you are using and applies the buff to <skill>both guns you wield</skill>. The bonus is <corrosive>doubled</corrosive> if using the same <skill>gun manufacturer</skill> for both guns.<br><br>Also grants <skill>Ammo Regeneration</skill>.',
          details: [
            {
              name: 'Bandit Double Shot Chance',
              prefix: '+',
              value: 5,
              suffix: '%',
            },
            {
              name: 'Dahl Recoil Reduction',
              prefix: '+',
              value: 5,
              suffix: '%',
            },
            {
              name: 'Hyperion Accuracy',
              prefix: '+',
              value: 5,
              suffix: '%',
            },
            {
              name: 'Jakobs Crit Damage',
              prefix: '+',
              value: 5,
              suffix: '%',
            },
            {
              name: 'Maliwan DoT Damage',
              prefix: '+',
              value: 5,
              suffix: '%',
            },
            {
              name: 'Tediore Reload Speed',
              prefix: '+',
              value: 5,
              suffix: '%',
            },
            {
              name: 'Torgue Gun Damage',
              prefix: '+',
              value: 5,
              suffix: '%',
            },
            {
              name: 'Vladof Fire Rate',
              prefix: '+',
              value: 5,
              suffix: '%',
            },
          ],
          maxPoints: 5,
          augment: true,
        },
        {
          position: {
            row: 4,
            col: 2,
          },
          name: 'Weapon Wizardry (ImYourHuckleberry)',
          description:
            '<slag>Augment</slag>: Increases <skill>various stats</skill> based on what <skill>gun type</skill> you are using and applies the buff to <skill>both guns you wield</skill>. The bonus is <corrosive>doubled</corrosive> if using the same <skill>gun type</skill> for both guns. <br /> <br /> Also grants <skill>Ammo Regeneration</skill>.',
          details: [
            {
              name: 'Pistol Damage',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'SMG Fire Rate',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Assault Rifle Magazine Size',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Shotgun Spread Reduction',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Sniper Critical Damage',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Launcher Reload Speed',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
          ],
          maxPoints: 5,
          augment: true,
        },
        {
          position: {
            row: 5,
            col: 1,
          },
          name: 'My Cup Runneth Over (NoKillLikeOverkill)',
          description:
            '<incendiary>Game Changer</incendiary>: Killing an enemy grants <skill>Bonus Damage</skill> to your next shot equal to the amount of <health>excess damage</health> you dealt to the enemy you just killed.',
          details: [
            {
              name: 'THIS DAMAGE HAS BEEN UNCAPPED IN BL2: RECODED!',
            },
          ],
          maxPoints: 1,
        },
      ],
    },
    blue: {
      name: 'FuegoRapido',
      description:
        'Salvador knows how to manipulate his firearms to do whatever he wants! Provides powerful gun buffs with very heavy limitations.',
      items: [
        {
          position: {
            row: 0,
            col: 0,
          },
          name: 'Free? FREE?! FREEEEE!!! (Inconceivable)',
          description:
            'Your shots have a chance to <skill>not consume ammo</skill>. The <health>lower</health> your <health>health</health> and <shock>shields</shock>, the <corrosive>greater</corrosive> the chance of <skill>free shots</skill>.',
          details: [
            {
              name: 'Free Shot Chance',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
          ],
          maxPoints: 5,
        },
        {
          position: {
            row: 0,
            col: 1,
          },
          name: 'Fortalecer a Mis Aliados (LastLonger)',
          description:
            'While in <skill>Modo Torreta</skill>, your nearby friends gain increased <skill>Damage Resistance</skill>.',
          details: [
            {
              name: 'Team Damage Resistance',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
          ],
          maxPoints: 5,
        },
        {
          position: {
            row: 0,
            col: 2,
          },
          name: 'Brim Full of Bullets (FilledtotheBrim)',
          description:
            'Increases your <skill>Magazine Size</skill> and <skill>Fire Rate</skill>, and provides a chance to <skill>not consume ammo</skill> while firing.',
          details: [
            {
              name: 'Magazine Size',
              prefix: '+',
              value: 5,
              suffix: '%',
            },
            {
              name: 'Fire Rate',
              prefix: '+',
              value: 5,
              suffix: '%',
            },
            {
              name: 'Free Shot Chance',
              prefix: '+',
              value: 2,
              suffix: '%',
            },
          ],
          maxPoints: 5,
        },
        {
          position: {
            row: 1,
            col: 1,
          },
          name: 'Money Back Guarantee (5Shotsor6)',
          description:
            'Every shot fired has a chance to <skill>add ammunition into the magazine</skill> instead of expending ammunition.',
          details: [
            {
              name: 'Add Ammunition Chance',
              prefix: '+',
              value: 5,
              suffix: '%',
            },
          ],
          maxPoints: 5,
        },
        {
          position: {
            row: 2,
            col: 0,
          },
          name: `Apresurate (I'm Already Ready)`,
          description:
            'While not in <skill>Modo Torreta</skill>, you gain increased <skill>Reload Speed</skill>, <skill>Swap Speed</skill> and <skill>Movement Speed</skill>.',
          details: [
            {
              name: 'Reload Speed',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Swap Speed',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Movement Speed',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
          ],
          maxPoints: 5,
        },
        {
          position: {
            row: 2,
            col: 2,
          },
          name: 'Carnero de Carga (AllInTheReflexes)',
          description:
            'Increases your <skill>Melee Damage</skill> and <skill>Movement Speed</skill>. Additionally, you gain a chance to <skill>deflect bullets</skill>.',
          details: [
            {
              name: 'Movement Speed',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Reload Speed',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Bullet Deflect Chance',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
          ],
          maxPoints: 5,
        },
        {
          position: {
            row: 3,
            col: 1,
          },
          name: 'Steady On (SteadyAsSheGoes)',
          description:
            'While in <skill>Modo Torreta</skill>, your <skill>Weapon Spread</skill> with both guns is decreased the longer you hold down the <skill>trigger</skill>. Additionally, each shot that hits an enemy has a chance to <skill>improve your accuracy with both guns</skill>.',
          details: [
            {
              name: 'Weapon Spread',
              prefix: '-',
              value: 80,
              suffix: '%',
            },
            {
              name: 'Improve Accuracy Chance',
              prefix: '+',
              value: 50,
              suffix: '%',
            },
          ],
          maxPoints: 1,
        },
        {
          position: {
            row: 4,
            col: 0,
          },
          name: 'Locked and Loaded (Yippee Ki Yay)',
          description:
            '<explosive>Kill Skill</explosive>: Killing an enemy increases your <skill>Magazine Size</skill> and <skill>Fire Rate</skill> for a short period of time.',
          details: [
            {
              name: 'Magazine Size',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Fire Rate',
              prefix: '+',
              value: 10,
              suffix: '+10% Magazine Size & +10% Fire Rate per level',
            },
          ],
          maxPoints: 5,
          killSkill: true,
        },
        {
          position: {
            row: 4,
            col: 2,
          },
          name: 'Bratatata! (KeepFiring)',
          description:
            'While in <skill>Modo Torreta</skill>, increases your <skill>Fire Rate</skill> and <skill>Reload Speed</skill> the longer you <skill>hold down the trigger</skill>.',
          details: [
            {
              name: 'Fire Rate',
              prefix: '+',
              value: 20,
              suffix: '%',
            },
            {
              name: 'Reload Speed',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
          ],
          maxPoints: 5,
        },
        {
          position: {
            row: 5,
            col: 1,
          },
          name: 'Matanza (GetSome)',
          description:
            '<incendiary>Game Changer</incendiary>: Shooting an enemy grants you a stack of <health>Matanza</health>. Increases your <skill>Critical Hit Damage</skill> and <health>Maximum Health</health> for each stack of <health>Matanza</health> you have.',
          details: [
            {
              name: 'Critical Hit Damage',
              prefix: '+',
              value: 0.2,
              suffix: '%',
            },
            {
              name: 'Maximum Health',
              prefix: '+',
              value: 0.2,
              suffix: '%',
            },
            {
              name: 'Maximum Shield Capacity',
              prefix: '+',
              value: 0.2,
              suffix: '%',
            },
          ],
          maxPoints: 5,
        },
      ],
    },
    red: {
      name: 'BestiaPeligrosa',
      description: 'Take a beating and keep on ticking! Provides health & shield buffs, as well as damage resistance.',
      items: [
        {
          position: {
            row: 0,
            col: 0,
          },
          name: 'Stronger Together (Asbestos)',
          description:
            'Reduces the duration of enemy <skill>Elemental Status Effects</skill> for you and your friends.',
          details: [
            {
              name: 'Team Status Duration',
              prefix: '-',
              value: 10,
              suffix: '%',
            },
          ],
          maxPoints: 5,
        },
        {
          position: {
            row: 0,
            col: 2,
          },
          name: 'Built Like A Brick Shithouse (Diehard)',
          description: 'Increases your <health>Maximum Health</health> and <health>Health Regeneration</health>.',
          details: [
            {
              name: 'Maximum Health',
              prefix: '+',
              value: 5,
              suffix: '%',
            },
            {
              name: 'Health Regeneration',
              prefix: '+',
              value: 0.2,
              suffix: '%',
            },
          ],
          maxPoints: 5,
        },
        {
          position: {
            row: 1,
            col: 0,
          },
          name: 'Shields Are For Cobardes (JustGotReal)',
          description:
            'While your <shock>shield</shock> is <health>depleted</health>, increases <skill>Gun Damage</skill> for you and your friends.',
          details: [
            {
              name: 'Gun Damage',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
          ],
          maxPoints: 5,
        },
        {
          position: {
            row: 1,
            col: 2,
          },
          name: 'Sin Chicle (OutOfBubblegum)',
          description:
            'While your <shock>shield</shock> is <health>depleted</health>, increases <skill>Fire Rate</skill> and <skill>Accuracy</skill> for you and your friends.',
          details: [
            {
              name: 'Fire Rate',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Accuracy',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
          ],
          maxPoints: 5,
        },
        {
          position: {
            row: 2,
            col: 0,
          },
          name: '...Okay, Maybe Not... (Bus That Cant Slow Down)',
          description:
            'While in <skill>Modo Torreta</skill>, increases <shock>Maximum Shield Capacity</shock>, <shock>Shield Recharge Rate</shock> and <shock>Shield Recharge Delay</shock> for you and your friends.',
          details: [
            {
              name: 'Maximum Shield Capacity',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Shield Recharge Rate',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Shield Recharge Delay',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
          ],
          maxPoints: 5,
        },
        {
          position: {
            row: 2,
            col: 2,
          },
          name: 'Sentirse Viva! (AintGotTimeToBleed)',
          description:
            'Increases your <skill>Health Regeneration</skill>. The <health>lower</health> your <health>health</health> , the <corrosive>greater</corrosive> the <health>health regeneration</health>.',
          details: [
            {
              name: 'Health Regeneration',
              prefix: '+',
              value: 1.5,
              suffix: '%',
            },
          ],
          maxPoints: 5,
        },
        {
          position: {
            row: 3,
            col: 1,
          },
          name: 'On A Roll! (ImTheJuggernaut)',
          description:
            '<explosive>Kill Skill</explosive>: Killing an enemy increases your <skill>Damage Resistance</skill> for a short period of time.',
          details: [
            {
              name: 'Damage Resistance',
              prefix: '+',
              value: 15,
              suffix: '%',
            },
          ],
          maxPoints: 5,
          killSkill: true,
        },
        {
          position: {
            row: 4,
            col: 0,
          },
          name: '�Huir! (Incite)',
          description:
            'Taking damage from enemies increases your <skill>Movement Speed & Reload Speed</skill> for a few seconds.',
          details: [
            {
              name: 'Movement Speed',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Reload Speed',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
          ],
          maxPoints: 5,
        },
        {
          position: {
            row: 4,
            col: 2,
          },
          name: 'Tiranosaurio Caliente (SexualTyrannosaurus)',
          description:
            'Taking damage from enemies increases your <health>Health Regeneration</health> and <skill>Damage Resistance</skill> for a short period of time.',
          details: [
            {
              name: 'Damage Resistance',
              prefix: '+',
              value: 0.4,
              suffix: '%',
            },
            {
              name: 'Health Regeneration',
              prefix: '+',
              value: 0.4,
              suffix: '%',
            },
          ],
          maxPoints: 5,
        },
        {
          position: {
            row: 5,
            col: 1,
          },
          name: "Brick's Apprentice (FistfulOfHurt)",
          description:
            '<incendiary>Game Changer</incendiary>: Press Melee to throw all your weight into a punch causing <skill>massive damage</skill>, <skill>knocking back</skill> the enemy, and <health>healing</health> you. If you land the punch, you recover a greater amount of <health>health</health>.',
          details: [
            {
              name: 'Cooldown of 1s',
            },
          ],
          maxPoints: 1,
        },
      ],
    },
  },
};
