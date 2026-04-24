import type { CharacterSkillTreeData } from './types';

export const DATA: CharacterSkillTreeData = {
  character: 'axton',
  actionSkill: {
    name: 'Sabre Turret',
    description:
      '<skill>Action Skill</skill>. Press Action Skill to deploy a <skill>Sabre Turret</skill> that automatically fires at enemies. Your <skill>Sabre Turret</skill> will remain on the battlefield until it is destroyed. <br /> <br /> You can also deploy the <skill>Sabre Turret</skill> while in <skill>Fight For Your Life</skill>.',
    details: [],
  },
  skills: {
    green: {
      name: 'Engineer',
      description:
        "Buildin' a sentry! Boosts basically everything about your Sabre Turret, including how it shoots, how it operates and providing sentry buffs.",
      items: [
        {
          position: {
            row: 0,
            col: 0,
          },
          name: 'Batallion (Sentry)',
          description:
            'Increases the <skill>Burst Fire Shot Count</skill>, <skill>Gun Damage</skill> and <skill>Magazine Size</skill> for your <skill>Sabre Turret</skill>. Additionally, increases <skill>Gun Damage</skill> and <skill>Magazine Size</skill> for you and your <skill>Sabre Turret</skill>.',
          details: [
            {
              name: 'Gun Damage',
              prefix: '+',
              value: 20,
              suffix: '%',
            },
            {
              name: 'Magazine Size',
              prefix: '+',
              value: 20,
              suffix: '%',
            },
            {
              name: 'Burst Fire Shot Count',
              prefix: '+',
              value: 2,
            },
          ],
          maxPoints: 5,
        },
        {
          position: {
            row: 0,
            col: 2,
          },
          name: 'Rangefinder (LaserSight)',
          description:
            'Increases the <skill>Accuracy</skill> and <skill>Recoil Reduction</skill> of your <skill>Sabre Turret</skill>. Additionally, while your <skill>Sabre Turret</skill> is deployed, increases <skill>Accuracy</skill> and <skill>Recoil Reduction</skill> for you and your friends.',
          details: [
            {
              name: 'Accuracy',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Recoil Reduction',
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
            col: 0,
          },
          name: 'Fort & Fury (Battlefront)',
          description:
            'While your <skill>Sabre Turret</skill> is deployed, you gain increased <skill>Gun Damage</skill>, <explosive>Explosive Damage</explosive> and <skill>Reload Speed</skill>',
          details: [
            {
              name: 'Gun Damage',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Explosive Damage',
              prefix: '+',
              value: 10,
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
            row: 1,
            col: 2,
          },
          name: 'Hunker Down (Resourceful)',
          description:
            'Increases <skill>Burst Fire Shot Count</skill>, <skill>Magazine Size</skill> and <health>Health Regeneration</health> for you and your Sabre Turret.',
          details: [
            {
              name: 'Magazine Size',
              prefix: '+',
              value: 20,
              suffix: '%',
            },
            {
              name: 'Burst Fire Shot Count',
              prefix: '+',
              value: 2,
            },
            {
              name: 'Health Regeneration',
              prefix: '+',
              value: 1,
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
          name: 'EMP Shield (Phalanx Shield)',
          description: `<slag>Augment</slag>: Your <skill>Sabre Turret</skill> projects a large <skill>protective shield</skill> that blocks <health>enemy</health> ranged attacks but lets <corrosive>friendly</corrosive> ranged attacks pass through. Enemy movement and melee attacks are not affected.<br/><br/>Enemies within the <shock>shield's radius</shock> have their <shock>shield regeneration</shock> <health>disabled</health> and they receive <skill>increased damage</skill> from all sources.`,
          details: [
            {
              name: 'damage from all sources within range',
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
            row: 2,
            col: 1,
          },
          name: 'Charged Cavalry (Mag-Lock)',
          description:
            'While your <skill>Sabre Turret</skill> is deployed, you gain increased <shock>Maximum Shield Capacity</shock>, <shock>Shield Recharge Delay</shock> and <shock>Shield Recharge Rate</shock> for you, your friends and your <skill>Sabre Turret</skill>.',
          details: [
            {
              name: 'Maximum Shield Capacity',
              prefix: '+',
              value: 5,
              suffix: '%',
            },
            {
              name: 'Shield Recharge Rate',
              prefix: '+',
              value: 5,
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
            row: 2,
            col: 2,
          },
          name: 'Suction Cups (LongBowTurret)',
          description:
            '<slag>Augment</slag>: Your <skill>Sabre Turret</skill> can now be deployed using <skill>Sticky Longbow</skill> technology, allowing you to deploy it much further away, and attach to walls & ceilings.',
          details: [
            {
              name: 'Longbow & Sticky turrets',
            },
          ],
          maxPoints: 1,
          augment: true,
        },
        {
          position: {
            row: 3,
            col: 1,
          },
          name: 'Elemental Bombardment (ScorchedEarth)',
          description:
            '<slag>Augment</slag>: Adds powerful <skill>Multi-Rocket Pods</skill> to your <skill>Sabre Turret</skill> that deal <skill>ALL elemental damage types</skill> on impact.',
          details: [
            {
              name: '25 rockets per volley',
            },
          ],
          maxPoints: 1,
          augment: true,
        },
        {
          position: {
            row: 4,
            col: 0,
          },
          name: 'Blackpowder Blaster (Double Up)',
          description: `<slag>Augment</slag>: Adds a <skill>second gun</skill> to your <skill>Sabre Turret</skill> that shoots <explosive>explosive rounds</explosive> and changes your original turret to shoot <slag>slag rounds</slag>. Additionally increases your <skill>turret's</skill> <health>Maximum Health</health> and <skill>Damage Resistance</skill>.`,
          details: [
            {
              name: 'Explosive rounds',
            },
            {
              name: 'Turret Maximum Health',
              prefix: '+',
              value: 25,
              suffix: '%',
            },
            {
              name: 'Turret Damage Resistance',
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
            row: 4,
            col: 2,
          },
          name: 'Reinforcements (Gemini)',
          description:
            '<slag>Augment</slag>: Allows you to deploy <skill>two Sabre Turrets</skill>. Once the first <skill>Sabre Turret</skill> is deployed press Action Skill again to deploy the second. Increases the <skill>Fire Rate</skill> and the <skill>Burst Fire Shot Count</skill> for your <skill>Sabre Turret</skill> .',
          details: [
            {
              name: 'Turret Fire Rate',
              prefix: '+',
              value: 30,
              suffix: '%',
            },
            {
              name: 'Burst Fire Shot Count',
              prefix: '+',
              value: 3,
            },
            {
              name: 'Turret',
              prefix: '+',
              value: 1,
            },
          ],
          maxPoints: 1,
          augment: true,
        },
        {
          position: {
            row: 5,
            col: 1,
          },
          name: 'Atomic Warfare (Nuke)',
          description:
            '<incendiary>Game Changer</incendiary>: Deploying your <skill>Sabre Turret</skill> sets off an <skill>explosion</skill> at its location, with a direct hit dealing <incendiary>massive</incendiary> damage. Additionally, you gain increased <explosive>Explosive</explosive> damage for you and your <skill>Sabre Turret</skill>.',
          details: [
            {
              name: 'Explosive Damage',
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
      name: 'Spartan',
      description:
        'Our duty as soldiers is to protect humanity, whatever the cost. Further military training has turned you into the ultimate Soldier. Provides gun buffs, as well as explosive damage buffs & resistance.',
      items: [
        {
          position: {
            row: 0,
            col: 1,
          },
          name: 'Gunpowder General (Impact)',
          description:
            'Damaging an enemy with <explosive>Explosive Damage</explosive> grants a stack of <skill>Gunpowder General</skill>. Increases <explosive>Explosive Damage</explosive>, <explosive>Explosive Damage Resistance</explosive> and <skill>Fire Rate</skill> for each stack of <skill>Gunpowder General</skill> you have.',
          details: [
            {
              name: 'Explosive Damage',
              prefix: '+',
              value: 1,
              suffix: '% per stack',
            },
            {
              name: 'Explosive Damage Resistance',
              prefix: '+',
              value: 1,
              suffix: '% per stack',
            },
          ],
          maxPoints: 1,
        },
        {
          position: {
            row: 1,
            col: 0,
          },
          name: 'Demolitionist (Steady)',
          description:
            'Increases <skill>Grenade and Rocket Damage</skill> and <skill>Grenade Damage and Rocket Damage Resistance</skill>.',
          details: [
            {
              name: 'Grenade Damage',
              prefix: '+',
              value: 5,
              suffix: '%',
            },
            {
              name: 'Rocket Damage',
              prefix: '+',
              value: 5,
              suffix: '%',
            },
            {
              name: 'Grenade Damage Resistance',
              prefix: '+',
              value: 5,
              suffix: '%',
            },
            {
              name: 'Rocket Damage Resistance',
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
            col: 1,
          },
          name: 'Ammo Cache (Overload)',
          description:
            'Increases <skill>Magazine Size</skill> and <skill>Ammo Capacity</skill> with all weapon types for you and your friends.',
          details: [
            {
              name: 'Magazine Size',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Ammo Capacity',
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
            col: 2,
          },
          name: 'Speed Loader (Ready)',
          description:
            'Increases <skill>Reload Speed</skill>, <skill>Weapon Swap Speed</skill>, and <skill>Shield Recharge Rate</skill> for you and your friends.',
          details: [
            {
              name: 'Reload Speed',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Weapon Swap Speed',
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
          ],
          maxPoints: 5,
        },
        {
          position: {
            row: 2,
            col: 1,
          },
          name: 'Bombardier (Grenadier)',
          description:
            'Increases your <skill>Grenade Damage</skill>, <skill>Maximum Grenade Capacity</skill>, <skill>Grenade Blast Radius</skill> and <skill>Grenade Fuse Time</skill>.',
          details: [
            {
              name: 'Grenade Capacity',
              prefix: '+',
              value: 2,
            },
            {
              name: 'Grenade Damage',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Grenade Blast Radius',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Grenade Fuse Time',
              prefix: '-',
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
          name: 'Supressing Fire (Metal Storm)',
          description: `<explosive>Kill Skill</explosive>: Killing an enemy increases your <skill>Fire Rate</skill> and reduces <skill>Recoil</skill> for a short period of time.`,
          details: [
            {
              name: 'Fire Rate',
              prefix: '+',
              value: 15,
              suffix: '%',
            },
            {
              name: 'Recoil Reduction',
              prefix: '-',
              value: 15,
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
          name: 'ADSoldier (Expertise)',
          description:
            'Increases your <skill>Aim Speed</skill>, <skill>Movement Speed</skill>, <skill>Fire Rate</skill> and <skill>Accuracy</skill> while <skill>aiming down sights</skill>.',
          details: [
            {
              name: 'ADS speed',
              prefix: '+',
              value: 20,
              suffix: '%',
            },
            {
              name: 'Movement Speed',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Fire Rate',
              prefix: '+',
              value: 5,
              suffix: '%',
            },
            {
              name: 'Accuracy',
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
          name: 'Action Hero (Onslaught)',
          description:
            '<explosive>Kill Skill</explosive>: Killing an enemy increases your <skill>Gun Damage</skill> and <skill>Movement Speed</skill> for a short time.',
          details: [
            {
              name: 'Gun Damage',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Movement Speed',
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
          name: 'Malleable manufacturers (Duty Calls)',
          description: `Increases <skill>various stats</skill> for each <skill>manufacturer</skill> and provides <skill>Gun Damage</skill> for all guns.`,
          details: [
            {
              name: 'Gun Damage',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Atlas Fire Rate',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Dahl shots per burst',
              prefix: '+',
              value: 2,
            },
            {
              name: 'Hyperion Accuracy',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Jakobs Critical Damage',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Maliwan Status Effect Chance',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'S&S Ammo Regen',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Tediore Magazine Size',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Torgue Explosive Damage',
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
          name: 'Hold the Line (CrisisManagement)',
          description:
            'Increases your <skill>Damage Reduction</skill>, <health>Maximum Health</health> and <explosive>Explosive Damage</explosive> while your <shock>shield</shock> is <health>depleted</health>.',
          details: [
            {
              name: 'Damage Reduction',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Maximum Health',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Explosive Damage',
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
          name: 'Military Regime (Ranger)',
          description: 'Further military training makes you better at basically <skill>everything</skill>.',
          details: [
            {
              name: 'Gun & Critical Damage',
              prefix: '+',
              value: 2,
              suffix: '%',
            },
            {
              name: 'Accuracy & Fire Rate',
              prefix: '+',
              value: 2,
              suffix: '%',
            },
            {
              name: 'Reload & Swap Speed',
              prefix: '+',
              value: 2,
              suffix: '%',
            },
            {
              name: 'Magazine Size & Recoil Reduction',
              prefix: '+',
              value: 2,
              suffix: '%',
            },
          ],
          maxPoints: 50,
        },
      ],
    },
    red: {
      name: 'Terminator',
      description:
        'Come with me if you want to live! Focused around survivability & making Axton the tankiest Vault Hunter in all of Pandora! Boosts health, shields and damage resistance.',
      items: [
        {
          position: {
            row: 0,
            col: 0,
          },
          name: 'Shield Utilitarian (Willing)',
          description: 'Increases your <skill>Shield Ability</skill> <skill>proficiency</skill>.',
          details: [
            {
              name: 'Shield Ability',
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
          name: 'Blood & Brass (HealthY)',
          description: 'Increases your <health>Maximum Health</health> and <skill>Damage Resistance</skill>.',
          details: [
            {
              name: 'Maximum Health',
              prefix: '+',
              value: 5,
              suffix: '%',
            },
            {
              name: 'Damage Resistance',
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
          name: 'Contingency (Preparation)',
          description:
            'Increases your <health>Maximum Health</health> and <health>Health Regeneration</health> while your <shock>shield</shock> is <health>depleted</health>.',
          details: [
            {
              name: 'Maximum Shield Capacity',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Maximum Health',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Health Regeneration',
              prefix: '+',
              value: 1,
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
          name: 'Rally the Troops! (Able)',
          description:
            'While your <skill>Sabre Turret</skill> is deployed, gain increased <health>Health Regeneration</health> and <skill>Ammo Regeneration</skill> for you and your friends.',
          details: [
            {
              name: 'Health Regeneration',
              prefix: '+',
              value: 1,
              suffix: '%',
            },
            {
              name: 'Ammo Regeneration',
              prefix: '+',
              value: 1,
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
          name: 'Bolstered Defences (Forbearance)',
          description:
            'While your <skill>Sabre Turret</skill> is deployed, gain increased <health>Maximum Health</health> and <skill>Damage Resistance</skill> for you and your friends.',
          details: [
            {
              name: 'Damage Resistance',
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
            col: 1,
          },
          name: 'Spark of Hope (QuickCharge)',
          description:
            '<explosive>Kill Skill</explosive>: Killing an enemy grants you <health>Health Regeneration</health> and <shock>Shield Regeneration</shock> for a short time.',
          details: [
            {
              name: 'Health Regeneration',
              prefix: '+',
              value: 3,
              suffix: '%',
            },
            {
              name: 'Shield Regeneration',
              prefix: '+',
              value: 3,
              suffix: '%',
            },
          ],
          maxPoints: 5,
          killSkill: true,
        },
        {
          position: {
            row: 3,
            col: 0,
          },
          name: 'Poly-Kryten Plating (Last Ditch Effort)',
          description:
            'Increases your <skill>Bullet Resistance</skill> and gives you a chance to <skill>deflect bullets</skill>. While your <shock>shield</shock> is <health>depleted</health>, your <skill>Bullet Resistance</skill> and <skill>Deflect Chance</skill> are further increased.',
          details: [
            {
              name: 'Bullet Resistance',
              prefix: '+',
              value: 5,
              suffix: '%',
            },
            {
              name: 'Deflect Chance',
              prefix: '+',
              value: 5,
              suffix: '%',
            },
            {
              name: 'Shield Down Bullet Resistance',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Shield Down Deflect Chance',
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
          name: 'FUBAR (Pressure)',
          description:
            'Improves your <skill>Reload Speed</skill>, <skill>Fire Rate</skill> and <shock>Shield Recharge Delay</shock>. The <health>lower</health> your <health>health</health>, the <corrosive>higher</corrosive> the bonus.',
          details: [
            {
              name: 'Reload Speed',
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
            {
              name: 'Recoil Reduction',
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
            col: 1,
          },
          name: 'Last Resort (DoOrDie)',
          description:
            '<incendiary>Game Changer</incendiary>: Allows you to <skill>throw grenades</skill> while in <skill>Fight For Your Life</skill>. Additionally, greatly increases your <skill>Fight For Your Life Time</skill> and increases your <skill>Grenade Damage</skill> and <skill>Rocket Damage</skill>.',
          details: [
            {
              name: 'Grenade Damage',
              prefix: '+',
              value: 20,
              suffix: '%',
            },
            {
              name: 'Rocket Damage',
              prefix: '+',
              value: 20,
              suffix: '%',
            },
            {
              name: 'Explosive Damage',
              prefix: '+',
              value: 20,
              suffix: '%',
            },
            {
              name: 'FFYL Time',
              prefix: '+',
              value: 100,
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
          name: "I'm Still Standing (Grit)",
          description:
            '<incendiary>Game Changer</incendiary>: You gain a chance to <skill>ignore damage that would otherwise kill you</skill>. In addition to not taking damage from the attack, you will instantly <skill>regain all of your</skill> <health>Maximum Health</health>.',
          details: [
            {
              name: 'Chance to ignore death',
              prefix: '+',
              value: 25,
              suffix: '%',
            },
          ],
          maxPoints: 1,
        },
      ],
    },
  },
};
