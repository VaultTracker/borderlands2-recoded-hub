import type { ChracterSkillDataType } from './types';
export const DATA: ChracterSkillDataType = {
  character: 'krieg',
  actionSkill: {
    name: 'Buzz Axe Rampage',
    description:
      '<skill>Action Skill</skill>. Press Action Skill to enter <skill>Buzz Axe Rampage</skill>. While active, <health>Bloodlust</health> will decay much slower. You can <skill>switch</skill> between modes at any time. <br /> <br /> <skill>Attack:</skill> <br /> <skill>Throw Axe:</skill> Aim, then',
    details: [],
  },
  skills: {
    green: {
      name: 'Mutilation',
      description:
        'Rip, tear & shred through enemies using your unbridled anger & your very large buzzaxe. Provides melee & health buffs through Bloodlust stacks',
      items: [
        {
          position: {
            row: 0,
            col: 1,
          },
          name: 'Bloodlust (_Bloodlust)',
          description:
            'Taking damage from an enemy, or damaging an enemy with <skill>Melee Damage</skill> grants a stack of <health>Bloodlust</health>. Increases your <skill>Melee Damage</skill> for each stack of <health>Bloodlust</health> you have. <br /> <br /> <health>Bloodlust</health> stacks decay after not dealing any Melee Damage for 10 seconds while in <skill>Buzz Axe Rampage</skill>, or much faster while not in <skill>Buzz Axe Rampage</skill>.',
          details: [
            {
              name: 'Maximum Stacks',
              suffix: '100',
            },
            {
              name: 'Melee Damage',
              prefix: '+',
              value: 0.5,
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
          name: 'Polycythemia (BloodyRevival)',
          description:
            'Increases your <health>Maximum Health</health> for each stack of <health>Bloodlust</health> you have.',
          details: [
            {
              name: 'Maximum Health',
              prefix: '+',
              value: 0.02,
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
          name: 'Haemochromatosis (TasteOfBlood)',
          description:
            'Increases your <skill>Damage Resistance</skill> during <skill>Buzz Axe Rampage</skill> for each stack of <health>Bloodlust</health> you have. <br /> <br /> Additionally, killing an enemy during <skill>Buzz Axe Rampage</skill> grants extra stacks of <health>Bloodlust</health>.',
          details: [
            {
              name: 'Damage Reduction',
              prefix: '+',
              value: 0.01,
              suffix: '%',
            },
            {
              name: 'Bloodlust stacks',
              prefix: '+',
              value: 4,
              suffix: 'Bloodlust stacks',
            },
          ],
          maxPoints: 5,
        },
        {
          position: {
            row: 1,
            col: 2,
          },
          name: 'Rapid Circulation (BloodTrance)',
          description:
            'Increases your <skill>Movement Speed</skill> during <skill>Buzz Axe Rampage</skill> for each stack of <health>Bloodlust</health> you have.',
          details: [
            {
              name: 'Movement Speed',
              prefix: '+',
              value: 0.2,
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
          name: 'Vampirism (Boiling Blood)',
          description: 'While in <skill>Buzz Axe Rampage</skill>, you gain <health>Life Steal</health>.',
          details: [
            {
              name: 'Life Steal',
              prefix: '+',
              value: 1.5,
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
          name: 'Blood-Soaked Blade (EmptyRage)',
          description:
            'Increases <skill>Melee Damage</skill>. This if further increased if your <shock>shield</shock> <skill>is down</skill>.',
          details: [
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
            row: 3,
            col: 0,
          },
          name: 'Explosive Hemorrhage (Fuel the Blood)',
          description:
            '<explosive>Kill Skill</explosive>: Killing an enemy with <skill>Melee Damage</skill> increases <skill>Grenade Damage</skill> for each stack of <health>Bloodlust</health> you have.<br><br>Additionally, grants extra stacks of <health>Bloodlust</health>.',
          details: [
            {
              name: 'Bloodlust stacks',
              prefix: '+',
              value: 2,
            },
          ],
          maxPoints: 5,
        },
        {
          position: {
            row: 3,
            col: 1,
          },
          name: 'Clot Factor (BloodfilledGuns)',
          description:
            'Increases your <skill>Damage Resistance</skill>. This is further increased if your <shock>shield</shock> <skill>is down</skill>.',
          details: [
            {
              name: 'Damage Resistance',
              prefix: '+',
              value: 4,
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
          name: 'All I See Is Red (FuelTheRampage)',
          description:
            'Increases your <health>Maximum Health</health> and <skill>Melee Damage</skill> for each stack of <health>Bloodlust</health> you have. <br /> <br /> You can now be <health>damaged</health> by teammates.',
          details: [
            {
              name: 'Maximum Health at 100 Bloodlust stack',
              prefix: '+',
              value: 20,
              suffix: '%',
            },
            {
              name: 'Melee Damage at 100 Bloodlust stack',
              prefix: '+',
              value: 100,
              suffix: '%',
            },
          ],
          maxPoints: 5,
        },
        {
          position: {
            row: 4,
            col: 0,
          },
          name: 'My Inner Voice Cares (Redeem the Soul)',
          description: `<incendiary>Game Changer</incendiary>: You can <corrosive>instantly revive</corrosive> downed teammates. Doing so will put <health>yourself</health> into <skill>Fight For Your Life</skill>. <br /> <br /> Increases <skill>Fight For Your Life</skill> duration for each stack of <health>Bloodlust</health> you have.`,
          details: [],
          maxPoints: 1,
        },
        {
          position: {
            row: 4,
            col: 2,
          },
          name: 'SHUT UP SHUT UP SHUT UP! (Silence The Voices)',
          description: `<incendiary>Game Changer</incendiary>: Greatly increases your <skill>Melee Damage</skill>. When performing a <skill>melee attack</skill>, there is a chance you will <health>hit yourself</health>.`,
          details: [
            {
              name: 'Melee Damage',
              prefix: '+',
              value: 40,
              suffix: '%',
            },
            {
              name: 'Self-Attack Chance',
              prefix: '+',
              value: 2,
            },
          ],
          maxPoints: 5,
        },
        {
          position: {
            row: 5,
            col: 1,
          },
          name: `NOW YOU'VE MADE ME ANGRY! (Release the Beast)`,
          description:
            '<incendiary>Game Changer</incendiary>: Activating <skill>Buzz Axe Rampage</skill> when at or below 33% of your <health>Maximum Health</health> remaining grants transforms you into a <skill>Badass Psycho Mutant</skill>. Increases your <skill>Melee Damage</skill> and <skill>Damage Reduction</skill> for the duration of the rampage.<br>[funstat]<font color="#70FFFF">There is an ! next to the health bar when below 33%.</font>[-funstat]',
          details: [],
          maxPoints: 1,
        },
      ],
    },
    blue: {
      name: 'Eradication',
      description: 'Blast away all the meatbags standing in your way. Provides gun & shield buffs.',
      items: [
        {
          position: {
            row: 0,
            col: 1,
          },
          name: 'Going Ape Shit (SaltTheWound)',
          description:
            'Taking <health>health damage</health> or dealing <explosive>Explosive Damage</explosive> adds a stack of <explosive>Ape Shit</explosive>. Increases <skill>Rocket Damage</skill> for each stack of <explosive>Ape Shit</explosive> you have. <br /> <br /> <explosive>Ape Shit</explosive> stacks gradually decay over time.',
          details: [
            {
              name: 'Rocket Damage per Ape Shit stack',
              prefix: '+',
              value: 0.25,
              suffix: '%',
            },
            {
              name: 'Maximum Stacks',
              suffix: '100',
            },
          ],
          maxPoints: 1,
        },
        {
          position: {
            row: 1,
            col: 0,
          },
          name: 'Explosive-Tipped Rounds (Blood Bath)',
          description:
            '<explosive>Kill Skill</explosive>: Killing an enemy with a <skill>bullet</skill> increases <skill>Grenade Damage</skill> and <skill>Rocket Damage</skill> for each stack of <explosive>Ape Shit</explosive> you have. Enemies killed this way have a greater chance of dropping grenade ammo.',
          details: [
            {
              name: 'Grenade Damage per Ape Shit stack',
              prefix: '+',
              suffix: '0.5%',
            },
            {
              name: 'Rocket Damage per Ape Shit stack',
              prefix: '+',
              suffix: '0.5%',
            },
            {
              name: 'Grenade Ammo Chance',
              prefix: '+',
              value: 20,
              suffix: '%',
            },
          ],
          maxPoints: 5,
          killSkill: true,
        },
        {
          position: {
            row: 1,
            col: 1,
          },
          name: 'NEVER STOP THE KILLING! (BloodyTwitch)',
          description:
            '<explosive>Kill Skill</explosive>: Killing an enemy increases your <skill>Weapon Swap Speed</skill> and <skill>Reload Speed</skill> for each stack of <explosive>Ape Shit</explosive> you have.',
          details: [
            {
              name: 'Weapon Swap Speed per Ape Shit stack',
              prefix: '+',
              value: 0.2,
              suffix: '%',
            },
            {
              name: 'Reload Speed per Ape Shit stack',
              prefix: '+',
              value: 0.2,
              suffix: '%',
            },
          ],
          maxPoints: 5,
          killSkill: true,
        },
        {
          position: {
            row: 1,
            col: 2,
          },
          name: 'Round-Tipped Explosives (BloodOverdrive)',
          description:
            '<explosive>Kill Skill</explosive>: Killing an enemy with a <skill>grenade or rocket</skill> increases <skill>Gun Damage</skill> for each stack of <explosive>Ape Shit</explosive> you have.',
          details: [
            {
              name: 'Gun Damage per Ape Shit stack',
              prefix: '+',
              value: 0.2,
              suffix: '%',
            },
          ],
          maxPoints: 5,
          killSkill: true,
        },
        {
          position: {
            row: 2,
            col: 1,
          },
          name: 'Duct-Taped Grenade Mod (BuzzAxeBombadier)',
          description:
            '<slag>Augment</slag>: Your buzzaxe now has <explosive>dynamite</explosive> attached to it. When thrown, it explodes on impact dealing <skill>Grenade Damage</skill>.',
          details: [
            {
              name: 'Explosive axe!',
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
          name: 'Martyrdom (Pull the Pin)',
          description:
            '<incendiary>Game Changer</incendiary>: Upon <health>death</health>, you drop a <skill>copy of your current grenade</skill>. Enemies killed with this <skill>grenade</skill> grant <skill>double experience</skill>. <br /> <br /> Additionally, increases <skill>Grenade Damage</skill> by <health>25</health>% for you and your friends.',
          details: [
            {
              name: 'Grenade Damage',
              prefix: '+',
              value: 25,
              suffix: '%',
            },
          ],
          maxPoints: 1,
        },
        {
          position: {
            row: 3,
            col: 2,
          },
          name: 'When All Else Fails (LightTheFuse)',
          description:
            '<incendiary>Game Changer</incendiary>: <skill>Fight For Your Life</skill> is replaced with <explosive>When All Else Fails</explosive>. During <explosive>When All Else Fails</explosive>, you pull out a <explosive>live bundle of dynamite</explosive> and can move normally. The bundle detonates when the timer runs out and if you kill someone, you are <corrosive>revived</corrosive>.<br /> <br /> Getting a revive with <explosive>When All Else Fails</explosive> grants you increased <skill>movement speed</skill> and <health>health regeneration</health> for the remaining duration of <explosive>When All Else Fails</explosive>.<br /> <br /> Throw dynamite sticks with .<br /> Detonate bundle by holding .',
          details: [
            {
              name: 'Movement Speed',
              prefix: '+',
              value: 50,
              suffix: '%',
            },
            {
              name: 'Health Regeneration',
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
          name: 'Explosive Consequences (Strip the Flesh)',
          description:
            'Increases <explosive>Explosive Damage</explosive> for you and your friends. This bonus is further increased when in <skill>Fight For Your Life</skill>.',
          details: [
            {
              name: 'Explosive Damage',
              prefix: '+',
              value: 20,
              suffix: '%',
            },
            {
              name: 'FFYL Explosive Damage',
              prefix: '+',
              value: 50,
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
          name: 'Drink the Juices (ThrillOfTheKill)',
          description:
            'A percentage of <skill>Overkill Damage</skill> is returned to you as <health>health</health>. <health>The lower your health</health>, <corrosive>the higher the percentage</corrosive>.',
          details: [
            {
              name: 'Overkill Damage returned as health',
              prefix: '+',
              value: 20,
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
          name: 'Sanguine Detonation (Bloodsplosion)',
          description:
            '<incendiary>Game Changer</incendiary>: Killing an enemy causes them to explode with an <skill>Elemental Nova</skill> matching the <skill>element of the damage that killed them</skill>, with <skill>non-elemental damage</skill> creating an <explosive>Explosive Nova</explosive>. <skill>Nova damage</skill> is increased for each stack of <health>Bloodlust</health> you have. <br /> <br /> Any <skill>Overkill Damage</skill> is also added to damage caused by an <skill>Elemental Nova</skill>. <br /> <br /> Additionally, grants <skill>Health Regeneration</skill> and <skill>Damage Resistance</skill>.',
          details: [
            {
              name: 'Health Regeneration',
              prefix: '+',
              value: 2.5,
              suffix: '%',
            },
            {
              name: 'Damage Resistance',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
          ],
          maxPoints: 1,
        },
      ],
    },
    red: {
      name: 'Incineration',
      description:
        'Watch the world burn...including yourself. Provides Incendiary status effect damage & chance buffs through Immolation stacks',
      items: [
        {
          position: {
            row: 0,
            col: 1,
          },
          name: 'Immolation (ElementalElation)',
          description:
            'While you are <incendiary>on fire</incendiary> or damaging an enemy with <incendiary>Incendiary damage</incendiary> grants a stack of <incendiary>Immolation</incendiary>. Increases your <incendiary>Incendiary</incendiary> <skill>Status Effect Damage</skill> and <incendiary>Incendiary</incendiary> <skill>Status Effect Chance</skill> for each stack of <incendiary>Immolation</incendiary> you have. <br /> <br /> <incendiary>Immolation</incendiary> stacks will not decay while you are <incendiary>on fire</incendiary>.',
          details: [
            {
              name: 'Status Effect Damage per Immolation stack',
              prefix: '+',
              value: 1,
              suffix: '%',
            },
            {
              name: 'Maximum Stacks',
              suffix: '100',
            },
          ],
          maxPoints: 5,
        },
        {
          position: {
            row: 1,
            col: 0,
          },
          name: 'Scorching Swiftness (Burn Baby Burn)',
          description:
            '[incendiary]While you are on fire[-incendiary], gain increased [skill]Movement Speed[-skill], [skill]Fire Rate[-skill] and [skill]Reload Speed[-skill].<br>[funstat]<font color="#70FFFF">Chance to light yourself on fire when you DoT an enemy.</font>[-funstat]',
          details: [
            {
              name: 'Movement Speed',
              prefix: '+',
              value: 5,
              suffix: '%',
            },
            {
              name: 'Fire Rate & Reload Speed',
              prefix: '+',
              value: 5,
              suffix: '%',
            },
            {
              name: 'Self-Ignite Chance per level',
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
          name: 'Heating Up (FuelTheFire)',
          description:
            '<explosive>Kill Skill</explosive>: Killing an enemy increases your <incendiary>Incendiary</incendiary> <skill>Status Effect Damage</skill> and <incendiary>Incendiary</incendiary> <skill>Status Effect Chance</skill>.<br /> <font>Chance to light yourself on fire when you DoT an enemy.</font>[-funstat]',
          details: [
            {
              name: 'Incendiary Status Effect Damage & Chance',
              prefix: '+',
              value: 5,
              suffix: '%',
            },
            {
              name: 'Self-Ignite Chance per level',
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
            row: 1,
            col: 2,
          },
          name: 'Well-Baked Bullets (PainIsPower)',
          description:
            'Increases your <skill>Gun Damage</skill> for each stack of <incendiary>Immolation</incendiary> you have. This is further increased while you are <incendiary>on fire</incendiary>.',
          details: [
            {
              name: 'Gun Damage per Immolation stack per Immolation stack',
              prefix: '+',
              value: 0.05,
              suffix: '%',
            },
            {
              name: 'Self-Ignited Gun Damage per Immolation stack per Immolation stack',
              prefix: '+',
              value: 0.1,
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
          name: 'All-Consuming Arson (DelusionalDamage)',
          description:
            '<incendiary>Game Changer</incendiary>: <skill>Melee attacks</skill>, <explosive>Explosive Damage</explosive>, <skill>Grenades</skill> and <skill>Rockets</skill> have a chance to deal bonus <incendiary>Incendiary Damage</incendiary> to enemies. This is a guaranteed chance <incendiary>while you are on fire</incendiary>.<br /> <br /> Additionally, grants <skill>Health Regeneration</skill>.',
          details: [
            {
              name: 'Bonus Incendiary Damage Chance',
              prefix: '+',
              value: 33,
              suffix: '%',
            },
            {
              name: 'Health Regeneration',
              prefix: '+',
              value: 5,
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
          name: 'Made Of Clay (Numbed Nerves)',
          description:
            'A percentage of <incendiary>Incendiary Status Effect Damage</incendiary> done to enemies <health>heals</health> you.',
          details: [
            {
              name: 'Damage Reduction',
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
          name: 'Heartwarmer (ElementalEmpathy)',
          description:
            'A percentage of <incendiary>Incendiary Status Effect Damage</incendiary> done to enemies <health>heals</health> you.',
          details: [
            {
              name: 'Status Effect Damage Healing',
              prefix: '+',
              value: 5,
            },
          ],
          maxPoints: 5,
        },
        {
          position: {
            row: 4,
            col: 1,
          },
          name: 'Reignition Complex (FlameFlare)',
          description:
            "Increases the duration of all <incendiary>Incendiary Status Effects</incendiary> on you. Each time you apply a <incendiary>Incendiary Status Effect</incendiary> to an enemy, there's a chance another <incendiary>Incendiary Status Effect</incendiary> will be applied after a short time that can <skill>spread</skill> to other enemies. You also gain <incendiary>Incendiary Damage Resistance</incendiary>.",
          details: [
            {
              name: 'Burn Duration',
              prefix: '+',
              value: 20,
              suffix: '%',
            },
            {
              name: 'Reignition Chance',
              prefix: '+',
              value: 18,
              suffix: '%',
            },
            {
              name: 'Burn Damage Resistance',
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
            col: 0,
          },
          name: 'Prince of Justice (Raving Retirbution)',
          description:
            '<slag>Augment</slag>: <incendiary>While you are on fire</incendiary>, taking damage from enemies will spawn <incendiary>homing balls of fire</incendiary> that seek out the attacker and explode on impact. Fireballs can only trigger once per second.<br><br>Additionally, grants <skill>Health Regeneration</skill> and <incendiary>Incendiary Status Effect Damage</incendiary>.',
          details: [
            {
              name: 'Health Regeneration',
              prefix: '+',
              value: 5,
              suffix: '%',
            },
            {
              name: 'Incendiary Status Damage',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
          ],
          maxPoints: 1,
          augment: true,
        },
        {
          position: {
            row: 5,
            col: 2,
          },
          name: 'Habanero Halitosis (HellfireHalitosis)',
          description:
            '<slag>Augment</slag>: Pressing Melee causes you to <incendiary>breathe fire</incendiary> in a cone in front of you. This breath can gain <health>Bloodlust</health> and <incendiary>Immolation</incendiary> stacks. <br /> <br /> Additionally, grants <skill>Health Regeneration</skill>.',
          details: [
            {
              name: 'Health Regeneration',
              prefix: '+',
              value: 5,
              suffix: '%',
            },
          ],
          maxPoints: 1,
          augment: true,
        },
      ],
    },
  },
};
