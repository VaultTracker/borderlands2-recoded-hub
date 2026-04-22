import type { ChracterSkillDataType } from './types';
export const DATA: ChracterSkillDataType = {
  character: 'gaige',
  actionSkill: {
    name: 'Summoner',
    description:
      '<skill>Action Skill</skill>. Press Action Skill to summon a <skill>Minion</skill> to fight for you. <br /> <skill>Minions</skill> will fight for you until either one of you dies. <br /> <br /> You can have endless <skill>Minions</skill> fighting for you.',
    details: [],
  },
  skills: {
    green: {
      name: 'Curses',
      description:
        'Accept the Curses of the Mechromancer in exchange for buffs for you & your minions. Grants health buffs, shield nerfs & minion changes',
      items: [
        {
          position: {
            row: 0,
            col: 0,
          },
          name: 'Necessary Compromises (CloseEnough)',
          description:
            'Increases your <shock>Maximum Shield Capacity</shock> and <shock>Shield Recharge Rate</shock>, but <health>increases</health> your <shock>Shield Recharge Delay</shock>..',
          details: [
            {
              name: 'Maximum Shield Capacity',
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
              name: 'Shield Recharge Rate',
              prefix: '+',
              value: 20,
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
          name: 'Cooking Up Trouble (CookingUpTrouble)',
          description: "While your gun's <skill>Magazine</skill> is full, you <health>regenerate health</health>.",
          details: [
            {
              name: 'Health Regeneration',
              prefix: '+',
              value: 0.5,
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
          name: 'Rush (Fancy Mathematics)',
          description: `Increases your <skill>Movement Speed</skill> and <skill>Damage Resistance</skill>. The lower your <health>health</health>, the greater the bonus.`,
          details: [
            {
              name: 'Movement Speed',
              prefix: '+',
              value: 15,
              suffix: '%',
            },
            {
              name: 'Damage Resistance',
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
            col: 1,
          },
          name: 'Hollow Shield (BuckUp)',
          description: 'While your <shock>shield</shock> is empty, your <health>Maximum Health</health> is doubled.',
          details: [
            {
              name: 'Maximum Health',
              prefix: '+',
              value: 100,
              suffix: '% (while shield is empty)',
            },
          ],
          maxPoints: 1,
        },
        {
          position: {
            row: 1,
            col: 2,
          },
          name: 'Shielded Favours (TheBetterHalf)',
          description:
            'When your <shock>shield</shock> is below <health>50%</health>, you gain increased <skill>Fire Rate</skill> and <skill>Swap Speed</skill>.',
          details: [
            {
              name: 'Fire Rate',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Swap Speed',
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
            col: 0,
          },
          name: 'Fortitude (Potent as a Pony)',
          description: `Increases <health>Maximum Health</health> for you and your friends, and your <skill>minions</skill>.`,
          details: [
            {
              name: 'Maximum Health',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Maximum Ally Health',
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
          name: 'Self-Sufficient (20PercentCooler)',
          description:
            'Increases <skill>Gun Damage</skill> and <skill>Melee Damage</skill> for you and your friends, and your <skill>minions</skill>.',
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
          ],
          maxPoints: 5,
        },
        {
          position: {
            row: 3,
            col: 0,
          },
          name: 'Bio Degradation',
          description:
            '<explosive>Kill Skill</explosive>: Killing an enemy <slag>causes</slag> nearby enemies, decreasing their <skill>Gun Damage</skill>, <skill>Melee Damage</skill>, <skill>Weapon Accuracy</skill> and <skill>Damage Resistance</skill> for a short period of time.',
          details: [
            {
              name: 'Gun Damage',
              prefix: '-',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Melee Damage',
              prefix: '-',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Weapon Accuracy',
              prefix: '-',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Damage Resistance',
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
            col: 2,
          },
          name: 'Turtle Up! (UnstoppableForce)',
          description:
            'Increases <skill>Damage Resistance</skill> and <health>Life Steal</health> for you and your friends, and your <skill>minions</skill>.',
          details: [
            {
              name: 'Damage Resistance',
              prefix: '+',
              value: 5,
              suffix: '%',
            },
            {
              name: 'Health Regeneration',
              prefix: '+',
              value: 2,
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
          name: 'Explosive Clap (ExplosiveClap)',
          description:
            'Minions create an <explosive>explosive blast</explosive> with their hands, dealing <explosive>Explosive Damage</explosive> to all nearby enemies.',
          details: [
            {
              name: 'Explosive clap...',
            },
          ],
          maxPoints: 1,
        },
        {
          position: {
            row: 4,
            col: 1,
          },
          name: 'Sharing is Caring (SharingIsCaring)',
          description:
            '<incendiary>Game Changer</incendiary>: Grants a copy of your <shock>shield</shock> to your <skill>minions</skill>, complete with all the bonuses and benefits your <shock>shield</shock> provides.',
          details: [
            {
              name: 'Grants shield to minions',
            },
          ],
          maxPoints: 1,
        },
        {
          position: {
            row: 5,
            col: 1,
          },
          name: 'Resurrect the Dead (UpshotRobot)',
          description:
            '<incendiary>Game Changer</incendiary>: Killing an enemy instantly replenishes your <skill>Action Skill</skill>.',
          details: [
            {
              name: 'Instantly recharge Action Skill on kill',
            },
          ],
          maxPoints: 1,
        },
      ],
    },
    blue: {
      name: 'GunMage',
      description:
        "You can't be a necromancer without a good gun! Grants gun buffs & elemental damage buffs, as well as elemental changes to your minions.",
      items: [
        {
          position: {
            row: 0,
            col: 0,
          },
          name: 'Spray and Pray (More Pep)',
          description:
            'Increases your <skill>Magazine Size</skill>, <skill>Reload Speed</skill> and <skill>Gun Damage</skill>.',
          details: [
            {
              name: 'Magazine Size',
              prefix: '+',
              value: 15,
              suffix: '%',
            },
            {
              name: 'Reload Speed',
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
          ],
          maxPoints: 5,
        },
        {
          position: {
            row: 0,
            col: 2,
          },
          name: 'Swift Shot (Myelin)',
          description: 'Increases <skill>Projectile Speed</skill> and <skill>Fire Rate</skill>.',
          details: [
            {
              name: 'Projectile Speed',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Projectile Damage',
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
          name: "Large Caliber (Wires Don't Talk)",
          description:
            'Increases <skill>Gun Damage</skill> and <skill>Reload Speed</skill>, but decreases <skill>Magazine Size</skill>.',
          details: [
            {
              name: 'Gun Damage',
              prefix: '+',
              value: 15,
              suffix: '%',
            },
            {
              name: 'Reload Speed',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Magazine Size',
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
            col: 1,
          },
          name: 'Blazing Optics (TheStare)',
          description:
            '<slag>Augment</slag>: Your <skill>minions</skill> can now shoot a beam that deals <incendiary>Incendiary Damage</incendiary>.',
          details: [
            {
              name: 'SCIENCE!',
            },
          ],
          maxPoints: 1,
          augment: true,
        },
        {
          position: {
            row: 1,
            col: 2,
          },
          name: 'Chromantic Augmentation',
          description: 'Increases <skill>Status Effect Chance</skill> for all <skill>Elemental Damage types</skill>.',
          details: [
            {
              name: 'Status Effect Chance',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Status Effect Damage',
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
            col: 0,
          },
          name: 'Necrotic Touch (Electrical Burn)',
          description: '<slag>Augment</slag>: Dealing damage to an enemy has a small chance to <slag>slag</slag> them.',
          details: [
            {
              name: 'Slag Chance',
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
            row: 2,
            col: 2,
          },
          name: 'Caustic Blood',
          description:
            '<slag>Augment</slag>: Taking damage causes you to unleash a <corrosive>Corrosive Explosion</corrosive>. This can occur <skill>once</skill> every <skill>3 seconds</skill>.',
          details: [
            {
              name: 'My blood seeps into the cracks of society, and scalds those why falsely idoilze',
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
          name: 'Brain Power (Shock Storm)',
          description:
            '<slag>Augment</slag>: <skill>Critical hits</skill> cause an <explosive>Explosion</explosive>, dealing <explosive>Explosive Damage</explosive> to nearby enemies. Can occur once every second.',
          details: [
            {
              name: 'Rank',
              value: 1,
              suffix: 'Brain Power Damage',
            },
          ],
          maxPoints: 5,
        },
        {
          position: {
            row: 3,
            col: 1,
          },
          name: 'Ikarus (OneTwoBoom)',
          description:
            '<incendiary>Game Changer</incendiary>: Your <skill>minions</skill> now can shoot out a small <incendiary>sun</incendiary> at an enemy. Shooting the <incendiary>sun</incendiary> will cause it to explode, dealing massive <incendiary>Incendiary Damage</incendiary> to nearby enemies.',
          details: [
            {
              name: `Don't step too close!`,
            },
          ],
          maxPoints: 1,
        },
        {
          position: {
            row: 3,
            col: 2,
          },
          name: 'Burning Sensation (EvilEnchantress)',
          description:
            '<explosive>Kill Skill</explosive>: Killing an enemy increases <skill>Status Effect Damage</skill> and <explosive>Explosive Damage</explosive> for a short period of time.',
          details: [
            {
              name: 'Status Effect Damage',
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
          ],
          maxPoints: 5,
          killSkill: true,
        },
        {
          position: {
            row: 4,
            col: 1,
          },
          name: 'Order and Chaos (Rational Anarchist)',
          description:
            'Decreases your <health>Maximum Health</health> but increases your <skill>Fight For Your Life time</skill> and increases your <skill>Fire Rate</skill>.',
          details: [
            {
              name: 'Maximum Health',
              prefix: '-',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Fight For Your Life Time',
              prefix: '+',
              value: 20,
              suffix: '%',
            },
            {
              name: 'Fire Rate',
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
          name: 'Elemental Equilibrium (MakeItSparkle)',
          description:
            '<incendiary>Game Changer</incendiary>: Shooting a <skill>minion</skill> with an elemental weapon <skill>charges them with that element</skill>. Each <skill>Element</skill> has a different effect on your <skill>minion</skill>. <skill>Minions</skill> can only be charged with an <skill>element</skill> once.',
          details: [
            {
              name: 'Fire - Deals additional Incendiary damage',
            },
            {
              name: 'Corrosion - Applies Corrosive DoT on hit',
            },
            {
              name: 'Shock - Shock Novas on hit',
            },
            {
              name: 'Slag - Single Slag AoE',
            },
          ],
          maxPoints: 1,
        },
      ],
    },
    red: {
      name: 'ReapersStrike',
      description:
        'When all else fails, take matters into your own hands... literally. Focused around Close Combat, the Anarchy replacement, as well as other melee buffs & FFYL bonuses',
      items: [
        {
          position: {
            row: 0,
            col: 1,
          },
          name: 'Rolling Sentry (Smaller Lighter Faster)',
          description: `<skill>Decreases</skill> all <skill>Melee Damage</skill> taken and increases <skill>Movement Speed</skill> for each stack of <corrosive>Close Combat</corrosive> you have.`,
          details: [
            {
              name: 'Melee Damage Reduction',
              prefix: '-',
              value: 1,
              suffix: '%',
            },
            {
              name: 'Movement Speed',
              prefix: '+',
              value: 1,
              suffix: '%',
            },
          ],
          maxPoints: 1,
        },
        {
          position: {
            row: 0,
            col: 2,
          },
          name: 'Close Combat (Anarchy)',
          description:
            '<incendiary>Game Changer</incendiary>: Meleeing an enemy grants you a stack of <corrosive>Close Combat</corrosive>. Increases your <skill>Melee Damage</skill> for each stack of <corrosive>Close Combat</corrosive> you have. <br /> <br /> Manually reloading or dying consumes your stacks. <skill>Critical melee hits</skill> and <skill>bladed weapons</skill> grant an additional stack of <corrosive>Close Combat</corrosive>.',
          details: [
            {
              name: 'Max Close Combat stacks',
              prefix: '+',
              value: 25,
            },
            {
              name: 'Melee Damage',
              prefix: '+',
              suffix: '1% per stack',
            },
            {
              name: 'Gun Damage',
              prefix: '-',
              suffix: '1% per stack',
            },
          ],
          maxPoints: 4,
        },
        {
          position: {
            row: 1,
            col: 0,
          },
          name: 'Quick Charge (Preshrunk Cyberpunk)',
          description:
            'Increases your <skill>Reload Speed</skill>, further increased for each stack of <corrosive>Close Combat</corrosive> you have.',
          details: [
            {
              name: 'Reload Speed',
              prefix: '+',
              value: 5,
              suffix: '%',
            },
            {
              name: 'Reload Speed per stack',
              prefix: '+',
              value: 0.2,
              suffix: '% per stack',
            },
          ],
          maxPoints: 5,
        },
        {
          position: {
            row: 1,
            col: 1,
          },
          name: 'Extreme Circumstances (Discord)',
          description:
            '<incendiary>Game Changer</incendiary>: Manually reloading activates <skill>Extreme Circumstances</skill> and slowly consumes your <corrosive>Close Combat</corrosive> stacks. While <skill>Extreme Circumstances</skill> is active, you gain increased <skill>Damage Reduction</skill> for each stack of <corrosive>Close Combat</corrosive> you have and the bonus for <skill>Melee Damage</skill> and <skill>Gun Damage</skill> replace each other. <skill>Manually reloading</skill> again will deactivate <skill>Extreme Circumstances</skill>.',
          details: [
            {
              name: 'Damage Reduction',
              prefix: '+',
              value: 2.5,
              suffix: '% per stack',
            },
            {
              name: 'Gun Damage',
              prefix: '+',
              value: 1,
              suffix: '% per stack',
            },
            {
              name: 'Melee Damage',
              prefix: '-',
              value: 1,
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
          name: 'Rampage (Robot Rampage)',
          description:
            '<slag>Augment</slag>: Your <skill>minions</skill> now lash out with a flurry of attacks that deal <slag>Slag Damage</slag> and end with a very high damaging <explosive>Explosive Attack</explosive>.',
          details: [
            {
              name: 'Slag & Explosive flurry',
            },
          ],
          maxPoints: 1,
        },
        {
          position: {
            row: 2,
            col: 2,
          },
          name: 'Mind Flayer (TypecastIconoclast)',
          description: 'Increases <skill>Critical Melee Damage</skill> and <skill>Critical Gun Damage</skill>.',
          details: [
            {
              name: 'Critical Melee Damage',
              prefix: '+',
              value: 25,
              suffix: '%',
            },
            {
              name: 'Critical Gun Damage',
              prefix: '+',
              value: 25,
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
          name: 'Substitution (Annoyed Android)',
          description:
            'Increases your <health>Maximum Health</health> but reduces your <shock>Maximum Shield Capacity</shock>.',
          details: [
            {
              name: 'Maximum Health',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Maximum Shield Capacity',
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
            col: 1,
          },
          name: 'Brassless Boost (TheNthDegree)',
          description:
            'Decreases your <skill>Magazine Size</skill> but increases your <health>Maximum Health</health> and <health>Health Regeneration</health>.',
          details: [
            {
              name: 'Magazine Size',
              prefix: '-',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Maximum Health',
              prefix: '+',
              value: 2,
              suffix: '%',
            },
            {
              name: 'Health Regeneration',
              prefix: '+',
              value: 2,
              suffix: '%/sec',
            },
          ],
          maxPoints: 5,
        },
        {
          position: {
            row: 4,
            col: 1,
          },
          name: "That's Gotta Hurt (InterspersedOutburst)",
          description:
            '<incendiary>Game Changer</incendiary>: Not meleeing an enemy for a short duration grants you a stack of <health>Hurt</health>. Meleeing an enemy consumes all stacks of <health>Hurt</health> and unleashes a damaging <skill>Nova</skill> close to you. Damage is increased for each stack of <health>Hurt</health> consumed.',
          details: [
            {
              name: 'Max 5 stacks of Fetch',
            },
          ],
          maxPoints: 1,
        },
        {
          position: {
            row: 4,
            col: 2,
          },
          name: 'Retaliation (BloodSoakedShields)',
          description:
            'Gain a chance to <skill>deflect bullets</skill> to enemies, dealing reduced <skill>damage</skill> to you and increased <skill>damage</skill> to them.',
          details: [
            {
              name: 'Deflection Chance',
              prefix: '+',
              value: 10,
              suffix: '%',
            },
            {
              name: 'Damage Reduction',
              prefix: '+',
              value: 20,
              suffix: '%',
            },
            {
              name: 'Deflected Bullet Damage',
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
            col: 0,
          },
          name: 'Aerial Anarchy',
          description:
            '<augment>Augment</augment>: While <skill>airborne</skill>, your <skill>melee attacks</skill> deal additional <slag>Slag Damage</slag>',
          details: [
            {
              name: 'Additional Slag Chance',
              prefix: '+',
              value: 100,
              suffix: '%',
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
          name: 'With Claws (WithClaws)',
          description:
            '<incendiary>Game Changer</incendiary>: While you have a stack of <corrosive>Close Combat</corrosive>, press Melee to unleash a double <skill>melee attack with claws</skill>, dealing damage based on the number of <corrosive>Close Combat</corrosive> stacks you currently have and <health>restoring health</health>. The lower your health, the greater the <health>health restoration</health>.',
          details: [
            {
              name: 'Melee Damage',
              prefix: '+',
              value: 10,
              suffix: '% per Close Combat stack',
            },
          ],
          maxPoints: 1,
        },
      ],
    },
  },
};
