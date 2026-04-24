import type { CharacterSkillTreeData } from './types';

export const DATA: CharacterSkillTreeData = {
  character: 'zer0',
  actionSkill: {
    name: 'Decepti0n',
    description:
      '<skill>Action Skill.</skill> Press Action Skill to create a <skill>holographic decoy</skill> and <skill>vanish</skill> for 15 seconds. While you are invisible, you drain your <health>health</health> and <shock>shield</shock>, and you deal less <skill>damage</skill> but you cannot be detected by enemies. When your <shock>health</shock> reaches <health>1</health>, you unvanish. Make sure you do this when not in the middle of combat...',
    details: [],
  },
  skills: {
    green: {
      name: 'Longshot',
      description:
        'Silent sights align | Barrels whisper, lead takes flight | One shot, fate is sealed. - Provides gun damage buffs, critical hit buffs & accuracy',
      items: [
        {
          position: {
            row: 0,
            col: 1,
          },
          name: 'F0cu53d M4rk5m4n (CriticalAscention)',
          description:
            "Scoring a <skill>critical hit</skill> grants a stack of <corrosive>F0cused Marksman</corrosive>. Increases your <skill>Gun Damage</skill> and <skill>Critical Hit Damage</skill> for each stack of <corrosive>F0cused Marksman</corrosive> you have. <br /> <br /> Stacks slowly decay if you haven't scored a critical hit in a while.",
          details: [
            {
              name: 'Gun Damage',
              prefix: '+',
              value: 1,
              suffix: '%',
            },
            {
              name: 'Critical Hit Damage',
              prefix: '+',
              value: 1,
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
          name: '4p3x Hun73r (Headsh0t)',
          description: `Increases all your <skill>Damage</skill> while your <health>health</health> is <corrosive>full</corrosive>.`,
          details: [
            {
              name: 'Damage',
              prefix: '+',
              value: 15,
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
          name: 'D34d3y3 (0ptics)',
          description: `Increases your <skill>Accuracy</skill> and <skill>Zoom</skill> with all gun types. Additionally, your aim is not disrupted as much when taking damage.`,
          details: [
            {
              name: 'Accuracy',
              prefix: '+',
              value: 5,
              suffix: '%',
            },
            {
              name: 'Zoom',
              prefix: '+',
              value: 5,
              suffix: '%',
            },
            {
              name: 'Aim Steadiness',
              prefix: '+',
              value: 15,
              suffix: '%',
            },
            {
              name: 'Aim Speed',
              prefix: '+',
              value: 15,
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
          name: '7r1gg3r D15c1p71n3 (Kill C0nfirmed)',
          description:
            'While in <skill>D3c3p710n</skill> and not firing your gun, you gain stacks of <skill>7r1gg3r D15c1p71n3</skill>. Increases <skill>Gun Damage, Accuracy and Recoil Reduction</skill> per stack of <skill>7r1gg3r D15c1p71n3</skill> you have, up to 5 stacks. Firing your weapon will remove all your stacks of <skill>7r1gg3r D15c1p71n3</skill>.',
          details: [
            {
              name: 'Gun Damage',
              prefix: '+',
              value: 20,
              suffix: '%',
            },
            {
              name: 'Accuracy',
              prefix: '+',
              value: 20,
              suffix: '%',
            },
            {
              name: 'Recoil Reduction',
              prefix: '+',
              value: 20,
              suffix: '%',
            },
          ],
          maxPoints: 5,
        },
        {
          position: {
            row: 2,
            col: 1,
          },
          name: '4lph4 4nd 0m3g4 (OneShotOneKill)',
          description:
            'The <skill>first shot</skill> and <skill>last shot</skill> of a magazine deal <skill>greatly increased damage</skill>.',
          details: [
            {
              name: 'Damage',
              prefix: '+',
              value: 20,
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
          name: 'Fu77 M3t47 J4ck3t',
          description: 'Your bullets have a chance to ignore shields.',
          details: [
            {
              name: 'Chance to Ignore Shields',
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
            col: 0,
          },
          name: '571p57r34m (Killer)',
          description:
            '<explosive>Kill Skill</explosive>: Killing an enemy increases your <skill>Critical Hit Damage</skill>, <skill>Swap Speed</skill> and <skill>Reload Speed</skill> for a short period of time.',
          details: [
            {
              name: 'Critical Hit Damage',
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
            row: 3,
            col: 2,
          },
          name: 'R4p1d 1mp4c7 (Velocity)',
          description:
            'Increases <skill>Bullet Speed</skill>, <skill>Gun Damage</skill>, and <skill>Critical Hit Damage</skill> with all guns.',
          details: [
            {
              name: 'Bullet Speed',
              prefix: '+',
              value: 20,
              suffix: '%',
            },
            {
              name: 'Critical Hit Damage',
              prefix: '+',
              value: 20,
              suffix: '%',
            },
            {
              name: 'Gun Damage',
              prefix: '+',
              value: 20,
              suffix: '%',
            },
          ],
          maxPoints: 5,
        },
        {
          position: {
            row: 4,
            col: 1,
          },
          name: 'P3n37r4701n',
          description:
            '<incendiary>Game Changer</incendiary>: Your shots pierce through enemies. If your shot hits an enemy after piercing an enemy, it deals increased damage. <skill>P3n37t4710n</skill> does not work with some rockets and some special projectiles. While <skill>D3c3p710n</skill> is active, your visor will highlight enemy crit locations.',
          details: [
            {
              name: 'P3n37r4710n Multiplier',
              prefix: '+',
              value: 100,
              suffix: '%',
            },
            {
              name: 'Enemy Crit Spots Highlighted',
              prefix: '+',
              value: 100,
              suffix: '%',
            },
          ],
          maxPoints: 1,
        },
        {
          position: {
            row: 5,
            col: 1,
          },
          name: 'Z3r03d 1n (AtOneWithTheGun)',
          description:
            '<incendiary>Game Changer</incendiary>: <skill>Aiming down sights</skill> will grant you <skill>Zer0ed In</skill>. While <skill>Zer0ed In</skill> is active, you gain greatly improved <skill>Critical Hit Damage</skill>.<br /> <br /> This bonus is improved further while <skill>Zer0ed In</skill> is active during <skill>Decepti0n</skill>.',
          details: [
            {
              name: 'Critical Hit Damage',
              prefix: '+',
              value: 50,
              suffix: '%',
            },
            {
              name: 'D3c3p710n Bonus',
              prefix: '+',
              value: 50,
              suffix: '%',
            },
          ],
          maxPoints: 1,
        },
      ],
    },
    blue: {
      name: 'Shadow',
      description:
        'Quick hands, clever tricks | Tools reload, sights shift with ease | Steel bends to my will. - Provides gun handling buffs & various utilities for melee & guns',
      items: [
        {
          position: {
            row: 0,
            col: 1,
          },
          name: 'M0m4n7um',
          description:
            'Each successful ranged or melee attack grants a stack of <skill>M0m3n7um</skill>. Increases <skill>Gun Damage, Melee Damage & Movement Speed</skill> for each stack of <skill>M0m3n7um</skill> you have, up to 5 stacks. Faster weapons can gain more stacks quickly, but slower weapons retain stacks for a longer period of time.',
          details: [
            {
              name: 'Gun Damage per M0m3n7um Stack',
              prefix: '+',
              value: 2,
              suffix: '%',
            },
            {
              name: 'Melee Damage per M0m3n7um Stack',
              prefix: '+',
              value: 2,
              suffix: '%',
            },
            {
              name: 'Movement Speed per M0m3n7um Stack',
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
            col: 0,
          },
          name: 'H1ghw4ym4n (Be Like Water)',
          description:
            '<health>Damaging</health> an enemy with <skill>Ranged Damage</skill> increases your <skill>Melee Damage</skill>. <health>Damaging</health> an enemy with <skill>Melee Damage</skill> increases your <skill>Ranged Damage</skill>. The <corrosive>active bonus</corrosive> is indicated above your experience bar.',
          details: [
            {
              name: 'Ranged Damage',
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
          ],
          maxPoints: 5,
        },
        {
          position: {
            row: 1,
            col: 1,
          },
          name: '4cc3l3r473d 4mmun1710n (FastHands)',
          description:
            'Increases <skill>Reload Speed</skill>, <skill>Swap Speed</skill> and <skill>Fire Rate</skill> based on the <skill>remaining ammunition</skill> in your <skill>magazine</skill>. The <skill>more ammo remaining</skill>, the <corrosive>greater the bonus</corrosive>.',
          details: [
            {
              name: 'Reload Speed',
              prefix: '+',
              value: 20,
              suffix: '%',
            },
            {
              name: 'Swap Speed',
              prefix: '+',
              value: 20,
              suffix: '%',
            },
            {
              name: 'Fire Rate',
              prefix: '+',
              value: 20,
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
          name: 'Cl4p84ck (CounterStrike)',
          description:
            "After getting hit, there's a <skill>50%</skill> chance that your next <skill>ranged or melee attack</skill> will deal <skill>massively increased damage</skill>.<br /> <br /> <shock>Thanks for the name, Raidsauced!</shock>",
          details: [
            {
              name: 'Cl4p84ck Damage',
              prefix: '+',
              value: 70,
              suffix: '%',
            },
          ],
          maxPoints: 5,
        },
        {
          position: {
            row: 2,
            col: 1,
          },
          name: 'M4rk3d (DeathMark)',
          description:
            'Melee attacks <skill>mark</skill> the target for <health>death</health> for a short period of time. <skill>Marked</skill> targets take <skill>additional damage</skill> from all sources.',
          details: [
            {
              name: 'Additional Damage',
              prefix: '+',
              value: 150,
              suffix: '%',
            },
          ],
          maxPoints: 1,
        },
        {
          position: {
            row: 3,
            col: 0,
          },
          name: '53c0nd W1nd (Grim)',
          description:
            '<explosive>Kill Skill</explosive>: Killing an enemy causes your <health>health</health> and <shock>shield</shock> to <skill>quickly regenerate</skill> for a short period of time.',
          details: [
            {
              name: 'Health Regeneration',
              prefix: '+',
              value: 1,
              suffix: '%',
            },
            {
              name: 'Shield Regeneration',
              prefix: '+',
              value: 1,
              suffix: '%',
            },
          ],
          maxPoints: 5,
          killSkill: true,
        },
        {
          position: {
            row: 3,
            col: 1,
          },
          name: '7w0-71m3r (TwoFang)',
          description:
            'Every time you <skill>fire a gun</skill>, you have a chance to <skill>fire twice</skill>. The <skill>more ammo remaining</skill> in your magazine, the <corrosive>greater the bonus</corrosive>.',
          details: [
            {
              name: 'Double Shot Chance',
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
            col: 2,
          },
          name: 'C0rr0d3r473 (Unforseen)',
          description:
            '<slag>Augment</slag>: While in <skill>Decepti0n</skill>, <skill>meleeing</skill> an enemy will release a <corrosive>Corrosive Nova</corrosive>. This nova counts as <skill>melee damage</skill> and can apply <skill>Marked</skill> to nearby enemies.',
          details: [
            {
              name: 'Corrosive Novas go brrrr',
            },
          ],
          maxPoints: 5,
          augment: true,
        },
        {
          position: {
            row: 4,
            col: 1,
          },
          name: '5w1f7 5h4d0w (Innervate)',
          description:
            'While <skill>Decepti0n</skill> is active, you gain increased <skill>Gun Damage</skill>, <skill>Melee Damage</skill>, <health>Health Regeneration</health> and <skill>Movement Speed</skill>.',
          details: [
            {
              name: 'Gun Damage',
              prefix: '+',
              value: 5,
              suffix: '%',
            },
            {
              name: 'Melee Damage',
              prefix: '+',
              value: 5,
              suffix: '%',
            },
            {
              name: 'Health Regeneration',
              prefix: '+',
              value: 1,
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
            row: 5,
            col: 1,
          },
          name: 'H1dd3n 8l4d35 (DeathBlossom)',
          description:
            '<incendiary>Game Changer</incendiary>: Press Action Skill while <skill>Decepti0n</skill> is active to throw a handful of <skill>kunai</skill>. Each <skill>kunai</skill> will explode with a <skill>random</skill> <explosive>elemental</explosive> <skill>type</skill>. <skill>Kunai</skill> do not benefit from the <skill>Decepti0n</skill> damage bonuses, but throwing kunai does not end <skill>Decepti0n</skill> and can apply <skill>Marked</skill>.',
          details: [
            {
              name: '5 kunai per cooldown',
            },
          ],
          maxPoints: 1,
        },
      ],
    },
    red: {
      name: 'Bushido',
      description:
        'Blades flash, fury roars | Wounds heal fast, strength surges high | Steel carves through the weak. - Provides melee damage buffs & health regeneration',
      items: [
        {
          position: {
            row: 0,
            col: 0,
          },
          name: '4rm0ur3d W4rr10r (Ir0n Hand)',
          description:
            'Increases your <health>Maximum Health</health>, <shock>Maximum Shield Capacity</shock> and <skill>Melee Damage</skill>, but lengthens <shock>Shield Recharge Delay</shock>.',
          details: [
            {
              name: 'Maximum Health',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Maximum Shield Capacity',
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
              name: 'Shield Recharge Delay',
              prefix: '+',
              value: 5,
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
          name: 'Un8urd3n3d (Fearless)',
          description:
            'While your <shock>shield</shock> is <health>depleted</health>, you gain increased <skill>Gun Damage</skill>, <skill>Melee Damage</skill> and <skill>Fire Rate</skill>.',
          details: [
            {
              name: 'Fire Rate',
              prefix: '+',
              value: 5,
              suffix: '%',
            },
            {
              name: 'Gun Damage',
              prefix: '+',
              value: 5,
              suffix: '%',
            },
            {
              name: 'Melee Damage',
              prefix: '+',
              value: 5,
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
          name: 'Un533n 7hr347 (Ambush)',
          description:
            '<skill>Increases damage</skill> dealt when attacking an enemy who is <skill>targeting someone other than you</skill>, or when <skill>attacking from behind</skill>.<br><br>Your <skill>melee attacks</skill> deal <skill>even more damage</skill> when <skill>attacking from behind</skill>.',
          details: [
            {
              name: 'Assassin Damage',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Backstab Damage Bonus',
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
          name: 'W4r70rd (Backstab)',
          description:
            'Increases your <skill>Melee Damage</skill>. The lower your <skill>health</skill>, the more powerful your melee attacks become.',
          details: [
            {
              name: 'Melee Damage',
              prefix: '+',
              value: 20,
              suffix: '%',
            },
          ],
          maxPoints: 5,
        },
        {
          position: {
            row: 2,
            col: 1,
          },
          name: '71g3r 57r1ke (Execute)',
          description:
            '<incendiary>Game Changer</incendiary>: While <skill>D3c3p710n</skill> is active and a target is under your crosshairs, press Melee to <skill>dash forward</skill> a short distance and perform a <skill>special melee strike</skill>, dealing massive damage. The more <skill>Movement Speed</skill> you have, the further you will dash.',
          details: [
            {
              name: '71g3r 57r1ke Range: 5 meters',
            },
          ],
          maxPoints: 1,
        },
        {
          position: {
            row: 3,
            col: 0,
          },
          name: '8700d5h3d (Followthrough)',
          description:
            '<explosive>Kill Skill</explosive>: Killing an enemy increases your <skill>Movement Speed</skill>, <skill>Melee Damage</skill>, and <skill>Gun Damage</skill> for a short period of time.',
          details: [
            {
              name: 'Movement Speed',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
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
          ],
          maxPoints: 5,
          killSkill: true,
        },
        {
          position: {
            row: 3,
            col: 1,
          },
          name: 'Wh1r7w1nd 5pr1n7 (LikeTheWind)',
          description:
            'While moving, you have a chance to <skill>dodge bullets</skill> and <skill>status effects</skill>. Additionally, increases your <corrosive>Corrosive Damage</corrosive>.',
          details: [
            {
              name: 'Corrosive Damage',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Bullet Dodge Chance',
              prefix: '+',
              value: 5,
              suffix: '%',
            },
            {
              name: 'Status Effect Dodge Chance',
              prefix: '+',
              value: 5,
              suffix: '%',
            },
          ],
          maxPoints: 5,
        },
        {
          position: {
            row: 3,
            col: 2,
          },
          name: '3x3cu710n (KillingBlow)',
          description:
            'Massively increases <skill>Melee Damage</skill> against enemies with <health>low health</health>.',
          details: [
            {
              name: 'Melee Damage',
              prefix: '+',
              value: 120,
              suffix: '%',
            },
          ],
          maxPoints: 5,
        },
        {
          position: {
            row: 4,
            col: 1,
          },
          name: '8r347h 0f L1f3 (Resurgence)',
          description:
            '<skill>Killing an enemy</skill> with a <skill>melee attack</skill> restores <health>health</health>. The <health>lower your health</health>, the <corrosive>greater the health regeneration</corrosive>.',
          details: [
            {
              name: 'Health Regeneration (At Maximum Health)',
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
          name: 'M31y0 70 K3nry0ku (ManyMustFall)',
          description:
            '<incendiary>Game Changer</incendiary>: Time appears to <skill>distort</skill> while in <skill>Decepti0n</skill>, slowing down <skill>enemy movement speed, fire rate, projectile speed & reload speed</skill>. Additionally, <skill>killing an enemy</skill> with a <skill>melee attack</skill> while <skill>Decepti0n</skill> is active causes you to deploy another holographic decoy and re-stealth. This can be done <skill>multiple times</skill> in succession.',
          details: [],
          maxPoints: 1,
        },
      ],
    },
  },
};
