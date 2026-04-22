import type { ChracterSkillDataType } from './types';
export const DATA: ChracterSkillDataType = {
  character: 'maya',
  actionSkill: {
    name: 'Phaselock',
    description:
      '<skill>Action Skill</skill>. Press <action-skill></action-skill> to lock an enemy in another dimension, preventing them from fighting back for a short while. Some enemies cannot be <skill>Phaselocked</skill> and instead instantly take damage. Additionally, while phaselock is active you and your friends all deal bonus <skill>Elemental Effect Damage</skill>.<br /> <br /> <skill>Killing a Phaselocked enemy</skill> will cause Phaselock to seek out another nearby target briefly. You can also use Phaselock in <skill>Fight for Your Life</skill>.',
    details: [
      {
        name: 'Cooldown',
        value: 12,
        suffix: 's',
      },
    ],
  },
  skills: {
    green: {
      name: 'Opha',
      description: 'Become the Guardian Angel for your team. Provides healing & shield buffs, as well as team buffs',
      items: [
        {
          position: {
            row: 0,
            col: 0,
          },
          name: 'Nurturer (Elated)',
          description:
            'While an enemy is <skill>Phaselocked</skill>, you and your friends gain <health>Health Regeneration</health>.',
          details: [
            {
              name: 'Health Regeneration',
              prefix: '+',
              value: 0.25,
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
          name: 'Swiftness (Fleet)',
          description:
            'While an enemy is <skill>Phaselocked</skill>, you and your friends gain increased <skill>Movement Speed</skill>.',
          details: [
            {
              name: 'Movement Speed',
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
          name: 'Gushing Love (SweetRelease)',
          description:
            "When a <skill>Phaselocked</skill> dies, they release a <health>Life Orb</health> that automatically seeks out and <skill>heals</skill> you and your friends. The healing is stronger when you or your friends' <health>health</health> is low.",
          details: [
            {
              name: 'Life Orbs',
              prefix: '+',
              value: 2,
            },
          ],
          maxPoints: 5,
        },
        {
          position: {
            row: 1,
            col: 2,
          },
          name: 'Aegis (Ward)',
          description:
            'Increases <shock>Maximum Shield Capacity</shock>, <shock>Shield Recharge Rate</shock> and <shock>Shield Recharge Delay</shock> for you and your friends.',
          details: [
            {
              name: 'Shield Capacity',
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
              prefix: '-',
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
          name: 'Healthy (Restoration)',
          description:
            'Increases <health>Maximum Health</health> and <shock>Maximum Shield Capacity</shock> for you and your friends.',
          details: [
            {
              name: 'Maximum Health',
              prefix: '+',
              value: 2,
              suffix: '%',
            },
            {
              name: 'Maximum Shield Capacity',
              prefix: '+',
              value: 2,
              suffix: '%',
            },
            {
              name: 'Healing Damage',
              prefix: '+',
              value: 8,
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
          name: 'Concentration (Quicken)',
          description:
            'Increases your <skill>Action Skill Duration</skill> and <skill>Action Skill Cooldown Rate</skill>.',
          details: [
            {
              name: 'Action Skill Duration',
              prefix: '+',
              value: 1,
              suffix: 's',
            },
            {
              name: 'Action Skill Cooldown Rate',
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
            col: 0,
          },
          name: 'Sanguine Bond (LifeTap)',
          description:
            '<explosive>Kill Skill</explosive>: Killing an enemy grants increased <health>Health Regeneration</health> and <health>Life Steal</health> for you and your friends.',
          details: [
            {
              name: 'Health Regeneration',
              prefix: '+',
              value: 1,
              suffix: '%',
            },
            {
              name: 'Life Steal',
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
          name: 'Guardian Angel (Res)',
          description:
            '<incendiary>Game Changer</incendiary>: <skill>Phaselocking</skill> a downed ally will revive them with <health>maximum health</health>. You also grant you and your team increased <skill>Fight For Your Life duration</skill>, as well as <skill>Second Wind health</skill> per player on the team.',
          details: [
            {
              name: 'Fight For Your Life Duration',
              prefix: '+',
              value: 15,
              suffix: '%',
            },
            {
              name: 'Action Skill Cooldown Rate',
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
            col: 2,
          },
          name: 'Domino Effect (SubSequence)',
          description:
            '<slag>Augment</slag>: When a <skill>Phaselocked</skill> enemy dies, <skill>Phaselock</skill> has a chance to seek out a new target. Additionally, increases your <skill>Kill Skill Duration</skill>',
          details: [
            {
              name: 'Seek Out Chance',
              prefix: '+',
              value: 20,
              suffix: '%',
            },
            {
              name: 'Kill Skill Duration',
              prefix: '+',
              value: 3,
              suffix: 's',
            },
          ],
          maxPoints: 5,
          killSkill: true,
          augment: true,
        },
        {
          position: {
            row: 4,
            col: 1,
          },
          name: 'What Goes Around (KineticReflection)',
          description:
            '<explosive>Kill Skill</explosive>: Killing an enemy gives you a chance to <skill>deflect bullets</skill>. Deflected bullets deal reduced damage to you. When an enemy deals direct health damage to you, there is a chance they take <skill>double the damage</skill> that you lost.',
          details: [
            {
              name: 'Damage Reduction',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Damage on Reflection',
              prefix: '-',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Returned Enemy Damage',
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
            row: 5,
            col: 1,
          },
          name: 'Guardian Possession (ThoughtLock)',
          description:
            '<incendiary>Game Changer</incendiary>: While an enemy is <skill>Phaselocked</skill>, you gain increased <health>Maximum Health</health>, <shock>Maximum Shield Capacity</shock>, <shock>Shield Recharge Rate</shock> and <shock>Shield Recharge Delay</shock>.<br /> <br /> Your team gains increased <skill>Gun Damage</skill>, <skill>Fire Rate</skill>, <skill>Reload Speed</skill> and <skill>Movement Speed</skill>.',
          details: [
            {
              name: 'Maximum Health',
              prefix: '+',
              value: 15,
              suffix: '%',
            },
            {
              name: 'Maximum Shield Capacity',
              prefix: '+',
              value: 15,
              suffix: '%',
            },
            {
              name: 'Shield Recharge Rate',
              prefix: '+',
              value: 15,
              suffix: '%',
            },
            {
              name: 'Shield Recharge Delay',
              prefix: '-',
              value: 15,
              suffix: '%',
            },
            {
              name: 'Gun Damage',
              prefix: '+',
              value: 15,
              suffix: '%',
            },
            {
              name: 'Fire Rate',
              prefix: '+',
              value: 15,
              suffix: '%',
            },
            {
              name: 'Reload Speed',
              prefix: '+',
              value: 15,
              suffix: '%',
            },
            {
              name: 'Movement Speed',
              prefix: '+',
              value: 25,
              suffix: '%',
            },
            {
              name: 'Action Skill Duration',
              prefix: '+',
              value: 15,
              suffix: 's',
            },
          ],
          maxPoints: 1,
        },
      ],
    },
    blue: {
      name: 'Sera',
      description: 'You are the storm that is approaching. Provides gun buffs, as well as status effect buffs',
      items: [
        {
          position: {
            row: 0,
            col: 0,
          },
          name: 'E-Tech Mags (Foresight)',
          description:
            'Increases <skill>Magazine Size</skill> and <skill>Reload Speed</skill> for you and your friends. Also, grants <skill>Ammo Regeneration</skill> for your currently wielded gun.',
          details: [
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
            {
              name: 'Ammo Regeneration',
              prefix: '+',
              value: 0.2,
              suffix: 'ammo/s',
            },
          ],
          maxPoints: 5,
        },
        {
          position: {
            row: 0,
            col: 2,
          },
          name: 'Wrath (Wreck)',
          description:
            'While an enemy is <skill>Phaselocked</skill>, you and your friends gain increased <skill>Fire Rate</skill> and <skill>Gun Damage</skill>.',
          details: [
            {
              name: 'Fire Rate',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Gun Damage',
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
          name: 'Rapid Reload (Suspension)',
          description:
            'Increases <skill>Reload Speed</skill> and <skill>Weapon Swap Speed</skill> for you and your friends.',
          details: [
            {
              name: 'Reload Speed',
              prefix: '+',
              value: 5,
              suffix: '%',
            },
            {
              name: 'Weapon Swap Speed',
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
          name: 'Kinetic Momentum (Accelerate)',
          description:
            'Increases <skill>Gun Damage</skill>, <skill>Projectile Speed</skill> and <skill>Fire Rate</skill> for you and your friends.',
          details: [
            {
              name: 'Gun Damage',
              prefix: '+',
              value: 4,
              suffix: '%',
            },
            {
              name: 'Projectile Speed',
              prefix: '+',
              value: 4,
              suffix: '%',
            },
            {
              name: 'Fire Rate',
              prefix: '+',
              value: 4,
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
          name: 'Critical Thinking (MindsEye)',
          description:
            'Increases <skill>Critical Hit Damage</skill> and <skill>Status Effect Damage</skill> for you and your friends.',
          details: [
            {
              name: 'Critical Hit Damage',
              prefix: '+',
              value: 5,
              suffix: '%',
            },
            {
              name: 'Status Effect Damage',
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
          name: 'Frenzy (Sustenance)',
          description:
            'Increases your <skill>Fire Rate</skill> and <skill>Reload Speed</skill> while your <shock>shields</shock> are not empty.',
          details: [
            {
              name: 'Fire Rate',
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
            row: 3,
            col: 0,
          },
          name: 'Infusion (Immolate)',
          description:
            '<explosive>Kill Skill</explosive>: Killing an enemy gives your bullets additional <slag>Slag</slag> damage. Also, increases <shock>Shock Status Effect Chance</shock> and <slag>Slag Status Effect Chance</slag> for you and your friends.',
          details: [
            {
              name: 'Slag Chance',
              prefix: '+',
              value: 20,
              suffix: '%',
            },
            {
              name: 'Status Effect Chance',
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
          name: 'Elemental Enhancement (Recompense)',
          description:
            'Increases <skill>Elemental Damage</skill> and <skill>Status Effect Damage</skill> while wielding <skill>Elemental</skill> guns.',
          details: [
            {
              name: 'Elemental Damage',
              prefix: '+',
              value: 5,
              suffix: '%',
            },
            {
              name: 'Status Effect Damage',
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
          name: 'Storm (CloudKill)',
          description:
            '<incendiary>Game Changer</incendiary>: Damaging an enemy with <shock>Shock Damage</shock> creates a lingering <skill>Shock Cloud</skill>, dealing constant <shock>Shock Damage</shock> to enemies who touch it. <br /> <br /> Enemies in this cloud suffer increased <skill>Elemental</skill> damage. <br /> <br /> Additionally increases <skill>Phaselock Duration</skill> by 5 seconds.',
          details: [
            {
              name: 'Enemy Elemental Resistance',
              prefix: '-',
              value: 40,
              suffix: '%',
            },
            {
              name: 'Phaselock Duration',
              prefix: '+',
              value: 5,
              suffix: 's',
            },
          ],
          maxPoints: 1,
        },
        {
          position: {
            row: 4,
            col: 1,
          },
          name: 'Empowered Marksman (Inertia)',
          description:
            '<explosive>Kill Skill</explosive>: Killing an enemy grants increased <skill>accuracy</skill> and a chance to <skill>ricochet</skill> fired bullets towards the nearest enemy.',
          details: [
            {
              name: 'Reflection Chance',
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
          killSkill: true,
        },
        {
          position: {
            row: 5,
            col: 1,
          },
          name: 'Eridian Herald (Flicker)',
          description:
            '<slag>Augment</slag>: Increases your <skill>Gun Damage</skill>, <skill>Fire Rate</skill>, <skill>Critical Hit Damage</skill> and <skill>Status Effect Damage</skill> by as much <slag>Eridium</slag> as you currently have.',
          details: [
            {
              name: '+0.05% at 1 Eridium, +25% at 500 Eridium',
            },
          ],
          maxPoints: 1,
          augment: true,
        },
      ],
    },
    red: {
      name: 'Spectre',
      description:
        'Cleave through your foes with haste. Provides melee buffs, as well as movement speed & shield buffs',
      items: [
        {
          position: {
            row: 0,
            col: 0,
          },
          name: 'Resilience (Ruin_Feedback)',
          description:
            'Increases <skill>Damage Resistance</skill> and <skill>Status Damage Resistance</skill> for you and your friends.',
          details: [
            {
              name: 'Damage Resistance',
              prefix: '+',
              value: 2,
              suffix: '%',
            },
            {
              name: 'Status Effect Resistance',
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
          name: 'Revenant (Reaper)',
          description: 'Increases your <skill>Melee Damage</skill> & <skill>Action Skill Cooldown Rate</skill>.',
          details: [
            {
              name: 'Melee Damage',
              prefix: '+',
              value: 20,
              suffix: '%',
            },
            {
              name: 'Action Skill Cooldown Rate',
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
          name: 'Untapped Potential (Recompense_Feedback)',
          description:
            'Increases your <skill>Movement Speed</skill>, <health>Health Regeneration</health> and <skill>Melee Damage</skill> while your <shock>shields</shock> are not empty.',
          details: [
            {
              name: 'Movement Speed',
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
              name: 'Melee Damage',
              prefix: '+',
              value: 30,
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
          name: 'Conduction (Helios)',
          description:
            '<skill>Phaselocking</skill> an enemy creates a <shock>Shock</shock> explosion, dealing <shock>Shock Skill Damage</shock>.',
          details: [
            {
              name: 'Shock Effect Chance',
              prefix: '+',
              value: 100,
              suffix: '%',
            },
            {
              name: 'Up to 2M Shock damage at level 5',
            },
          ],
          maxPoints: 5,
        },
        {
          position: {
            row: 2,
            col: 0,
          },
          name: 'Keep It Rolling (Backdraft_Feedback)',
          description:
            '<explosive>Kill Skill</explosive>: Killing an enemy increases your <skill>Movement Speed</skill>, <skill>Reload Speed</skill> and <skill>Melee Speed</skill>.',
          details: [
            {
              name: 'Movement Speed',
              prefix: '+',
              value: 5,
              suffix: '%',
            },
            {
              name: 'Reload Speed',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Melee Speed',
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
            row: 2,
            col: 2,
          },
          name: 'Discharge (Backdraft)',
          description:
            'Your melee attacks deal additional <shock>Shock Damage</shock>. Additionally, on shield break, you release a <shock>Shock Nova</shock> that damages nearby enemies. Your <shock>shield</shock> must fully recharge between Novas.',
          details: [
            {
              name: 'Up to 350k melee damage & up to 6M Shock Nova damage at level 5',
            },
          ],
          maxPoints: 5,
        },
        {
          position: {
            row: 3,
            col: 0,
          },
          name: 'Scorn (Scorn)',
          description:
            '<incendiary>Game Changer</incendiary>: Pressing Melee launches a <shock>Shock Orb</shock> a short distance from you that constantly <shock>shocks</shock> enemies near it. After some time, the orb will explode for <slag>Slag Damage</slag> in a large area. <br /> <br /> This ability has a <health>15</health> second cooldown. Pressing Melee when <skill>Scorn</skill> is on cooldown will perform a regular melee attack.',
          details: [
            {
              name: 'Melee Range',
              prefix: '+',
              value: 200,
              suffix: '%',
            },
          ],
          maxPoints: 1,
        },
        {
          position: {
            row: 3,
            col: 1,
          },
          name: 'Power Draw (Converge)',
          description:
            '<slag>Augment</slag>: <skill>Phaselock</skill> now creates a <skill>singularity</skill> that pulls in nearby enemies, dealing <skill>Physical Skill Damage</skill>. Additionally, increases <shock>Shield Recharge Rate</shock> for you and your friends.',
          details: [
            {
              name: 'Shield Recharge Rate',
              prefix: '+',
              value: 2,
              suffix: '%',
            },
          ],
          maxPoints: 5,
          augment: true,
        },
        {
          position: {
            row: 3,
            col: 2,
          },
          name: 'Anathema (ChainReaction)',
          description:
            '<incendiary>Game Changer</incendiary>: Reduces your <health>Maximum Health</health> but increases your <skill>Melee Damage</skill> and provides <health>Life Steal</health>.',
          details: [
            {
              name: 'Maximum Health',
              prefix: '-',
              value: 50,
              suffix: '%',
            },
            {
              name: 'Melee Damage',
              prefix: '+',
              value: 300,
              suffix: '%',
            },
            {
              name: 'Life Steal',
              prefix: '+',
              value: 2,
              suffix: '%',
            },
            {
              name: 'Melee Range',
              prefix: '+',
              value: 200,
              suffix: '%',
            },
          ],
          maxPoints: 1,
        },
        {
          position: {
            row: 4,
            col: 1,
          },
          name: "Elder's Grace (BlightPhoenix)",
          description:
            "<explosive>Kill Skill</explosive>. Killing an enemy causes you to <skill>push away</skill> and deal constant <shock>Shock</shock> and <slag>Slag</slag> damage to nearby enemies. The damage is based on your level, and the level of <skill>Elder's Grace</skill>.",
          details: [
            {
              name: 'Up to 500k Slag Damage & Shock Damage at level 5',
            },
          ],
          maxPoints: 5,
          killSkill: true,
        },
        {
          position: {
            row: 5,
            col: 1,
          },
          name: 'Elemental Ruin (Ruin)',
          description:
            '<incendiary>Game Changer</incendiary>: <skill>Phaselock</skill> now <slag>slags</slag>, <shock>shocks</shock>, <corrosive>corrodes</corrosive> and <incendiary>ignites</incendiary> all nearby enemies.',
          details: [
            {
              name: 'Elemental ruin!',
            },
          ],
          maxPoints: 1,
        },
      ],
    },
  },
};
