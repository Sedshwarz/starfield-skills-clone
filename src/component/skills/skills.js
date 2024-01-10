export const skillTabs = ['physical', 'social', 'combat', 'science', 'tech'];

export const SkillsAry = [
    {
        title: "physical",
        totalPoints: 0,
        cascading1: [
            {
                id: 1,
                skillTitle: "BOXING",
                description: "Once considered a 'sport of kings', boxing is still practiced as a recreational competitive activity, but its combat applications can't be denied.",
                rankSituation: 0,
                active: true,
                rank1: {
                    challange: "Kill 20 enemies with an unarmed attack.",
                    bonuses: "Unarmed attacks do 25% more damage. 25% less O2 used when using a power attack.",
                    target: 20,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Kill 50 enemies with an unarmed attack.",
                    bonuses: "Unarmed attacks do 50% more damage. 50% less O2 used when using a power attack.",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Kill 100 enemies with an unarmed attack.",
                    bonuses: "Unarmed attacks do 75% more damage. While in a fight and unarmed, running consumes 30% less O2.",
                    target: 100,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "Unarmed attacks do 100% more damage and have a chance to knock down opponents.",
                }
            },
            {
                id: 2,
                skillTitle: "FITNESS",
                description: "In space, the greatest commodity is oxygen, and the increased lung capacity gained by a regular physical fitness regimen is essential to survival.",
                rankSituation: 0,
                active: true,
                rank1: {
                    challange: "Use up all available Oxygen 20 times.",
                    bonuses: "You have 10% more oxygen available.",
                    target: 20,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Use up all available Oxygen 50 times.",
                    bonuses: "You have 20% more oxygen available.",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Use up all available Oxygen 100 times.",
                    bonuses: "You have 30% more oxygen available.",
                    target: 100,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "Sprinting and power attacks now use significantly less oxygen.",
                }
            },
            {
                id: 3,
                skillTitle: "STEALTH",
                description: "For a combatant who values discretion above all else, the ability to approach a target while undetected and kill with a silenced weapon is as terrifying as it is effective.",
                rankSituation: 0,
                active: true,
                rank1: {
                    challange: "Perform 10 sneak attacks.",
                    bonuses: "Adds a Stealth Meter. You are 25% more difficult to detect when sneaking. Suppressed weapons do an additional 5% sneak attack Damage.",
                    target: 10,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Perform 20 sneak attacks.",
                    bonuses: "Upgrades the Stealth Meter. You are 50% more difficult to detect when sneaking. Suppressed weapons do an additional 10% sneak attack Damage.",
                    target: 20,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Perform 40 sneak attacks.",
                    bonuses: "You are 75% more difficult to detect when sneaking. Suppressed weapons do an additional 15% sneak attack Damage.",
                    target: 40,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "You are 100% more difficult to detect when sneaking. Suppressed weapons do an additional 20% sneak attack Damage. Doors you interact with while in stealth no longer alert enemies.",
                }
            },
            {
                id: 4,
                skillTitle: "WEIGHT LIFTING",
                description: "Weight training can significantly increase one's ability to carry weapons and equipment, both in space and on the ground.",
                rankSituation: 0,
                active: true,
                rank1: {
                    challange: "Sprint for 1000 meters while at 75% or more of your maximum load capacity.",
                    bonuses: "Increase total carrying capacity by 10 kilograms.",
                    target: 1000,
                    step: 100,
                    score: 0
                },
                rank2: {
                    challange: "Sprint for 2500 meters while at 75% or more of your maximum load capacity.",
                    bonuses: "Increase total carrying capacity by 25 kilograms.",
                    target: 2500,
                    step: 100,
                    score: 0
                },
                rank3: {
                    challange: "Sprint for 5000 meters while at 75% or more of your maximum load capacity.",
                    bonuses: "Increase total carrying capacity by 50 kilograms.",
                    target: 5000,
                    step: 100,
                    score: 0
                },
                rank4: {
                    bonuses: "Increase total carrying capacity by 100 kilograms. Gain 50% resistance to stagger.",
                }
            },
            {
                id: 5,
                skillTitle: "WELLNESS",
                description: "By embracing an active lifestyle and good nutrition habits, one may improve their overall sense of health, and even gain prolonged life expectancy.",
                rankSituation: 0,
                active: true,
                rank1: {
                    challange: "Heal 200 damage.",
                    bonuses: "Increase your maximum health by 10%.",
                    target: 200,
                    step: 20,
                    score: 0
                },
                rank2: {
                    challange: "Heal 500 damage.",
                    bonuses: "Increase your maximum health by 20%.",
                    target: 500,
                    step: 20,
                    score: 0
                },
                rank3: {
                    challange: "Heal 1,000 damage.",
                    bonuses: "Increase your maximum health by 30%.",
                    target: 1000,
                    step: 20,
                    score: 0
                },
                rank4: {
                    bonuses: "Increase your maximum health by 40%.",
                }
            }
        ],
        cascading2: [
            {
                id: 6,
                skillTitle: "ENERGY WEAPON DISSIPATION",
                description: "Considering the widespread use of energy weapons in the Settled Systems, specialized training to minimize damage is considered invaluable.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Take 150 points of energy damage.",
                    bonuses: "Energy damage is reduced by 5%.",
                    target: 150,
                    step: 15,
                    score: 0
                },
                rank2: {
                    challange: "Take 350 points of energy damage.",
                    bonuses: "Energy damage is reduced by 10%.",
                    target: 350,
                    step: 15,
                    score: 0
                },
                rank3: {
                    challange: "Take 750 points of energy damage.",
                    bonuses: "Energy damage is reduced by 15%.",
                    target: 750,
                    step: 15,
                    score: 0
                },
                rank4: {
                    bonuses: "25% chance to reflect energy damage back to an attacker when your health is below 50%.",
                }
            },
            {
                id: 7,
                skillTitle: "ENVIRONMENTAL CONDITIONING",
                description: "In the Settled Systems, even oxygen-rich planets and moons may have an atmosphere that is hazardous to human beings.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Take 100 environmental damage",
                    bonuses: "Gain 10 resistance to Airborne environmental damage.",
                    target: 100,
                    step: 10,
                    score: 0
                },
                rank2: {
                    challange: "Take 250 environmental damage",
                    bonuses: "Gain 10 resistance to Thermal environmental damage.",
                    target: 250,
                    step: 10,
                    score: 0
                },
                rank3: {
                    challange: "Take 500 environmental damage",
                    bonuses: "Gain 10 resistance to Corrosive and Radiation environmental damage.",
                    target: 500,
                    step: 10,
                    score: 0
                },
                rank4: {
                    bonuses: "Reduced chance to gain afflictions from environmental damage sources.",
                }
            },
            {
                id: 8,
                skillTitle: "GYMNASTICS",
                description: "From navigating the elevations of alien landscapes to exploring derelict ships in Zero-G, gymnastic training is invaluable for improving both safety and maneuverability.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Take 100 fall damage.",
                    bonuses: "Unlock the ability to combat slide. Take 15% less fall damage.",
                    target: 100,
                    step: 10,
                    score: 0
                },
                rank2: {
                    challange: "Kill 5 enemies in Zero-G environments.",
                    bonuses: "Move faster in Zero-G. Take 20% less fall damage.",
                    target: 5,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Kill 20 enemies in Zero-G environments.",
                    bonuses: "Become more stable while firing in Zero-G. Take 30% less fall damage. Replenish some O2 after mantling.",
                    target: 20,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "Increased jump height. Run faster after combat sliding or mantling.",
                }
            },
            {
                id: 9,
                skillTitle: "NUTRITION",
                description: "Advanced nutritional science is no substitute for good life choices, and knowing how much and when to eat can be just as important as the food itself.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Consume 10 food or drinks.",
                    bonuses: "Food and drink are 10% more effective.",
                    target: 10,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Consume 30 food or drinks.",
                    bonuses: "Food and drink are now 20% more effective.",
                    target: 30,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Consume 75 food or drinks.",
                    bonuses: "Food and drink are now 30% more effective.",
                    target: 75,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "Food and drink are now 50% more effective.",
                }
            },
            {
                id: 10,
                skillTitle: "PAIN TOLERANCE",
                description: "Pain hurts - but only if you're not strong enough to take it.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Take 250 points of physical damage.",
                    bonuses: "Physical damage is reduced by 5%.",
                    target: 250,
                    step: 25,
                    score: 0
                },
                rank2: {
                    challange: "Take 500 points of physical damage.",
                    bonuses: "Physical damage is reduced by 10%.",
                    target: 500,
                    step: 25,
                    score: 0
                },
                rank3: {
                    challange: "Take 1,000 points of physical damage.",
                    bonuses: "Physical damage is reduced by 15%.",
                    target: 1000,
                    step: 25,
                    score: 0
                },
                rank4: {
                    bonuses: "5% change to ignore physical damage when your health is low.",
                }
            }
        ],
        cascading3: [
            {
                id: 11,
                skillTitle: "CELLULAR REGENERATION",
                description: "Whether through secret experimentation or just plain healthy living, boosting the body's ability to naturally recover from injuries can mean the difference between life and death.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Recover from 5 injuries",
                    bonuses: "Slightly increased chance to recover from injuries naturally.",
                    target: 5,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Recover from 10 injuries",
                    bonuses: "Moderately increased chance to recover from injuries naturally.",
                    target: 10,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Recover from 30 injuries.",
                    bonuses: "Noticeably increased chance to recover from injuries naturally.",
                    target: 30,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "20% chance of not gaining an injury when you otherwise would.",
                }
            },
            {
                id: 12,
                skillTitle: "DECONTAMINATION",
                description: "Decontamination can be very slow to level, unless the player is putting their character in situations where they would get infected often.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Recover from 5 infections",
                    bonuses: "Slightly increased chance to recover from infections naturally.",
                    target: 5,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Recover from 15 infections",
                    bonuses: "Moderately increased chance to recover from infections naturally.",
                    target: 15,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Recover from 30 infections",
                    bonuses: "Noticeably increased chance to recover from infections naturally.",
                    target: 30,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "20% chance of not gaining an infection when you otherwise would.",
                }
            },
            {
                id: 13,
                skillTitle: "MARTIAL ARTS",
                description: "The player will simply need to fight unarmed, and do so frequently. Many of the challenges are probability-based, so progress may not be fast.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Deal 250 damage with unarmed attacks.",
                    bonuses: "15% increased chance to crit with a melee or unarmed attack.",
                    target: 250,
                    step: 25,
                    score: 0
                },
                rank2: {
                    challange: "Disarm 10 enemies using melee or unarmed attacks.",
                    bonuses: "15% chance to disarm an opponent with a melee or unarmed power attack.",
                    target: 10,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Disarm 30 enemies using melee or unarmed attacks.",
                    bonuses: "While unarmed or wielding a melee weapon, take 10% less damage.",
                    target: 30,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "Reflect 50% damage back when blocking a melee or unarmed attack.",
                }
            }
        ],
        cascading4: [
            {
                id: 14,
                skillTitle: "CONCEALMENT",
                description: "Few skills capture the imagination like the ability to remain undetected, used by assassins, special forces operatives, and simple thieves alike for centuries.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Perform 10 melee/unarmed sneak attacks.",
                    bonuses: "You no longer set off enemy mines. Ranged sneak attacks do 2.5x normal damage and your melee sneak attacks do 4X normal damage.",
                    target: 10,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Perform 30 melee/unarmed sneak attacks.",
                    bonuses: "Running while sneaking doesn't affect stealth. Ranged sneak attacks do 3x normal damage and you melee sneak attacks do 5x normal damage.",
                    target: 30,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Perform 75 melee/unarmed sneak attacks.",
                    bonuses: "You gain a Chameleon-like ability when completely still and sneaking. Ranged sneak attacks do 3.5x normal damage and your melee sneak attacks do 8x normal damage.",
                    target: 75,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "Engaging stealth causes distant enemies to lose you. Ranged sneak attacks do 4x normal damage and your melee sneak attacks do 10x normal damage.",
                }
            },
            {
                id: 15,
                skillTitle: "NEUROSTRIKES",
                description: "Neurostrikes will be leveled as long as the player fights unarmed. As long as the player continues to go into combat, completing the challenges shouldn't be a problem. However, the challenges can take time.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Stun 10 enemies with an unarmed attack.",
                    bonuses: "10% chance to stun an NPC with an unarmed attack.",
                    target: 10,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Stun 30 enemies with an unarmed attack.",
                    bonuses: "Unarmed attacks now do additional EM damage.",
                    target: 30,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Stun 75 enemies with an unarmed attack.",
                    bonuses: "20% chance to stun an NPC with an unarmed attack.",
                    target: 75,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "After stunning an enemy, you also knock down any enemies within close range.",
                }
            },
            {
                id: 16,
                skillTitle: "REJUVENATION",
                description: "Utilizing both ancient meditation techniques and newly developed breathing exercises, it's possible for one to actually trigger their body's natural healing ability.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Fall below 25% health 3 times and fully heal",
                    bonuses: "Slow regenerate health outside of combat.",
                    target: 3,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Fall below 25% health 8 times and fully heal",
                    bonuses: "Regenerate health more quickly outside of combat.",
                    target: 8,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Fall below 25% health 15 times and fully heal",
                    bonuses: "Regenerate health much faster outside of combat. You can now slowly regenerate no health while in combat.**",
                    target: 15,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "Regenerate health even faster outside of combat. You can still regenerate no health quickly while in combat.**",
                }
            }
        ]
    },
    {
        title: "social",
        totalPoints: 0,
        cascading1: [
            {
                id: 17,
                skillTitle: "COMMERCE",
                description: "In the Settled Systems' free market economy, almost anyone with the right skillset can open and run a successful business.",
                rankSituation: 0,
                active: true,
                rank1: {
                    challange: "Buy or sell 25 unique items.",
                    bonuses: "Buy for 5% less and sell for 10% more.",
                    target: 25,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Buy or sell 75 unique items.",
                    bonuses: "Buy for 10% less and sell for 15% more.",
                    target: 75,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Buy for 15% less and sell for 20% more.",
                    bonuses: "Unarmed attacks do 75% more damage. While in a fight and unarmed, running consumes 30% less O2.",
                    target: 150,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "Buy for 20% less and sell for 25% more.",
                }
            },
            {
                id: 18,
                skillTitle: "GASTRONOMY",
                description: "Access to brand new worlds means access to brand new ingredients, and there is almost no limit to the delicious foods and drinks a talented chef can prepare.",
                rankSituation: 0,
                active: true,
                rank1: {
                    challange: "Create 5 food or drink items.",
                    bonuses: "You can craft specialty food and drinks, and research additional recipes at a Research Lab.",
                    target: 5,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Create 25 food and drink items.",
                    bonuses: "You can research and craft gourmet food and drinks.",
                    target: 25,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Create 50 food and drink items.",
                    bonuses: "You can research and craft food and drink delicacies.",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "Crafting food and drinks occasionally doesn't use up resources. You can research and craft exotic recipes.",
                }
            },
            {
                id: 19,
                skillTitle: "PERSUASION",
                description: "In the Settled Systems, the nuanced ability to listen and discuss can often accomplish far more than simply shooting first and asking questions later.",
                rankSituation: 0,
                active: true,
                rank1: {
                    challange: "Succeed in 3 speech challenges.",
                    bonuses: "10% increased chance of success when persuading someone.",
                    target: 3,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Succeed in 5 speech challenges.",
                    bonuses: "20% increased chance of success when persuading someone.",
                    target: 5,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Succeed in 10 speech challenges.",
                    bonuses: "30% increased chance of success when persuading someone.",
                    target: 10,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "50% increased chance of success when persuading someone.",
                }
            },
            {
                id: 20,
                skillTitle: "SCAVENGING",
                description: "There are those who can find just about anything, and their success is usually dependent on knowing how, and where, to look.",
                rankSituation: 0,
                active: true,
                rank1: {
                    challange: "Loot 25 containers.",
                    bonuses: "There's a chance you'll find extra credits when searching containers.",
                    target: 25,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Loot 75 containers.",
                    bonuses: "There's a chance you'll find extra ammo when searching containers.",
                    target: 75,
                    step: 5,
                    score: 0
                },
                rank3: {
                    challange: "Loot 150 containers.",
                    bonuses: "There's a chance you'll find extra aid items, like Med Packs or chems, when searching containers.",
                    target: 150,
                    step: 5,
                    score: 0
                },
                rank4: {
                    bonuses: "Tracked resources will get highlighted when using the hand scanner.",
                }
            },
            {
                id: 21,
                skillTitle: "THEFT",
                description: "While not entirely honorable, and certainly not legal, it is nonetheless occasionally necessary to discreetly remove property from someone's person.",
                rankSituation: 0,
                active: true,
                rank1: {
                    challange: "Successfully pickpocket 5 times.",
                    bonuses: "Unlock the ability to pickpocket targets.",
                    target: 5,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Successfully pickpocket 10 times.",
                    bonuses: "10% greater chance to successfully pickpocket.",
                    target: 10,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Successfully pickpocket 20 times.",
                    bonuses: "30% greater chance to successfully pickpocket.",
                    target: 20,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "50% greater chance to successfully pickpocket. Can now pickpocket holstered weapons.",
                }
            }
        ],
        cascading2: [
            {
                id: 22,
                skillTitle: "DECEPTION",
                description: "Smuggling and piracy are both immoral and highly illegal, and considered plagues upon the Settled Systems. But certain undercover work may require a certain criminal skillset.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Convince 5 ships to surrender.",
                    bonuses: "Ships 10% stronger will automatically surrender to piracy demands. Enemy contraband scans are 10% less effective.",
                    target: 5,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Convince 10 ships to surrender.",
                    bonuses: "Ships 20% stronger will automatically surrender to piracy demands. Enemy contraband scans are 20% less effective.",
                    target: 10,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Convince 20 ships to surrender.",
                    bonuses: "Ships 30% stronger will automatically surrender to piracy demands. Enemy contraband scans are 30% less effective.",
                    target: 20,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "Ships 50% stronger will automatically surrender to piracy demands. Enemy contraband scans are 50% less effective.",
                }
            },
            {
                id: 23,
                skillTitle: "DIPLOMACY",
                description: "There are two schools of thought with diplomacy: avoid combat entirely, or divide and conquer. Avoiding combat means using diplomacy, and then running away.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Successfully use Diplomacy on 5 different people.",
                    bonuses: "You can force a target NPC at or below your level to stop fighting for a while.",
                    target: 5,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Successfully use Diplomacy on 25 different people.",
                    bonuses: "You can force a target NPC up to 10 levels higher than you to stop fighting for a while.",
                    target: 25,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Successfully use Diplomacy on 50 different people.",
                    bonuses: "You can force a target NPC up to 20 levels higher than you to stop fighting for a while.",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "You can force target NPC's to permanently stop fighting (unless they're attacked again.)",
                }
            },
            {
                id: 24,
                skillTitle: "INTIMIDATION",
                description: "The ability to strike fear into an opponent, causing them to flee so that you can escape or attack first, can prove critical in a battle.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Successfully intimidate 5 different people.",
                    bonuses: "You can force a target NPC at or below your level to flee for a limited time.",
                    target: 5,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Successfully intimidate 25 different people.",
                    bonuses: "You can force a target NPC up to 10 levels higher than you to flee for a limited time.",
                    target: 25,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Successfully intimidate 50 different people.",
                    bonuses: "You can force a target NPC up to 20 levels higher than you to flee for a limited time.",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "Intimidated targets now flee for a substantial amount of time.",
                }
            },
            {
                id: 25,
                skillTitle: "NEGOTIATION",
                description: "In certain, more challenging communications, skillfully supplementing words with credits may help achieve the desired results.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Bribe 3 times through persuasion.",
                    bonuses: "You now have access to Bribery in speech challenges.",
                    target: 3,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Bribe 5 times through persuasion.",
                    bonuses: "Reduces Bribery cost by 25%.",
                    target: 5,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Bribe 10 times through persuasion.",
                    bonuses: "Reduces Bribery cost by 50%.",
                    target: 10,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "Occasionally, Bribery won't cost any money.",
                }
            },
            {
                id: 26,
                skillTitle: "ISOLATION",
                description: "By eschewing team tactics and embracing the the advantages of 'lone wolf' operations, one can vastly improve their combat effectiveness.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Kill 20 enemies while not in command of a follower.",
                    bonuses: "Do +10% weapon damage and gain 15 Damage Resistance for each Spacesuit and Helmet equipped when you don't have a companion or any crew.",
                    target: 20,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Kill 50 enemies while not in command of a follower.",
                    bonuses: "Do +20% weapon damage and gain 30 Damage Resistance for each Spacesuit and Helmet equipped when you don't have a companion or any crew.",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Kill 100 enemies while not in command of a follower.",
                    bonuses: "Do +30% weapon damage and gain 45 Damage Resistance for each Spacesuit and Helmet equipped when you don't have a companion or any crew.",
                    target: 100,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "Do +40% weapon damage and gain 60 Damage Resistance for each Spacesuit and Helmet equipped when you don't have a companion or any crew.",
                }
            }
        ],
        cascading3: [
            {
                id: 27,
                skillTitle: "INSTIGATION",
                description: "When combat is required, it can be advantageous to convince others to do the fighting for you.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Successfully Instigate 5 different people.",
                    bonuses: "You can force a target NPC at or below your level to attack their allies for a limited time.",
                    target: 5,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Successfully Instigate 25 different people.",
                    bonuses: "You can force a target NPC up to 10 levels higher than you to attack their allies for a limited time.",
                    target: 25,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Successfully Instigate 50 different people.",
                    bonuses: "You can force a target NPC up to 20 levels higher than you to attack their allies for a limited time.",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "Enemies affected by instigation will attack their allies until they are dead.",
                }
            },
            {
                id: 28,
                skillTitle: "LEADERSHIP",
                description: "Teamwork is the cornerstone of the galactic survival, and nothing motivates a team more than a trained, decisive leader.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Sprint 1000 meters with an active follower.",
                    bonuses: "Companions gain affinity 25% faster.",
                    target: 1000,
                    step: 50,
                    score: 0
                },
                rank2: {
                    challange: "Sprint 2,500 meters with an active follower.",
                    bonuses: "Companions have 50 more health and 50kg more carrying capacity.",
                    target: 2500,
                    step: 50,
                    score: 0
                },
                rank3: {
                    challange: "Sprint 5,000 meters with an active follower.",
                    bonuses: "Companions will occasionally heal you when you get low health.",
                    target: 5000,
                    step: 50,
                    score: 0
                },
                rank4: {
                    bonuses: "Doubles the bonuses of Combat and Physical Crew Skills on Companions. Companions have a chance to pick themselves up from a downed state.",
                }
            },
            {
                id: 29,
                skillTitle: "OUTPOST MANAGEMENT",
                description: "While constructing an outpost offers its own challenges, properly managing that outpost takes a special personality type, and specialized training.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Build cargo links on 6 different planets.",
                    bonuses: "Additional Cargo links can be placed at outposts.",
                    target: 6,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Construct 8 robots at outposts.",
                    bonuses: "Additional Robots can be constructed at outposts.",
                    target: 8,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Construct 10 crew stations at outposts.",
                    bonuses: "Additional Crew can be assigned at outposts.",
                    target: 10,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "Outpost extractors produce twice as fast.",
                }
            }
        ],
        cascading4: [
            {
                id: 30,
                skillTitle: "MANIPULATION",
                description: "Recent studies have shown that suggestion is not an art, but a science, and as such can be weaponized to exert control over the susceptible.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Successfully Manipulate 5 different people.",
                    bonuses: "You can force a target NPC at or below your level to obey commands for a limited time.",
                    target: 5,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Successfully Manipulate 25 different people.",
                    bonuses: "You can force a target NPC up to 10 levels higher than you to to obey commands for a limited time.",
                    target: 25,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Successfully Manipulate 50 different people.",
                    bonuses: "You can force a target NPC up to 20 levels higher than you to to obey commands for a limited time.",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "Manipulated targets now obey commands for a substantial amount of time.",
                }
            },
            {
                id: 31,
                skillTitle: "SHIP COMMAND",
                description: "They say a ship is only as good as its crew, but that is contingent upon that crew having the right captain to lead them.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Destroy or board 5 ships with a crew of two or more.",
                    bonuses: "You can have up to four active crew members.",
                    target: 5,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Destroy or board 25 ships with a crew of four or more.",
                    bonuses: "You can have up to five active crew members.",
                    target: 25,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Destroy or board 50 ships with a crew of six or more.",
                    bonuses: "You can have up to six active crew members.",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "You can have up to eight active crew members.",
                }
            },
            {
                id: 32,
                skillTitle: "XENOSOCIOLOGY",
                description: "Xenosociology is a Master Social Skill. It allows the player to control alien fauna.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Successfully use Pacify on 15 different aliens.",
                    bonuses: "You can force a target alien creature up to 10 levels higher than you to stop fighting for a limited time.",
                    target: 15,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Successfully use Flee on 15 different aliens.",
                    bonuses: "You can force a target alien creature up to 10 levels higher than you to flee for a limited time.",
                    target: 15,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Successfully use Frenzy on 15 different aliens.",
                    bonuses: "You can force a target alien creature up to 10 levels higher than you to attack their allies for a limited time.",
                    target: 15,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "You can force a target alien creature up to 10 levels higher than you to obey commands for a limited time.",
                }
            }
        ]
    },
    {
        title: "combat",
        totalPoints: 0,
        cascading1: [
            {
                id: 33,
                skillTitle: "BALLISTICS",
                description: "Centuries of conflict have proven that when it comes to threat elimination, few things stack up to the reliable power of combustion.",
                rankSituation: 0,
                active: true,
                rank1: {
                    challange: "Kill 20 Enemies with a Ballistic Weapon.",
                    bonuses: "Ballistic weapons do 10% more damage.",
                    target: 20,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Kill 50 Enemies with a Ballistic Weapon.",
                    bonuses: "Ballistic weapons do 20% more damage.",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Kill 250 enemies with a Ballistic Weapon.",
                    bonuses: "Ballistic weapons do 30% more damage.",
                    target: 250,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "Ballistic weapons range is increased by 30%.",
                }
            },
            {
                id: 34,
                skillTitle: "DUELING",
                description: "Considered by many to be a lost art, close attacks with a melee weapon can often be deadlier than ranged combat when carried out by a skilled practitioner.",
                rankSituation: 0,
                active: true,
                rank1: {
                    challange: "Kill 20 enemies with a melee weapon.",
                    bonuses: "Melee weapons do 25% more damage. Take 10% less damage while wielding a melee weapon.",
                    target: 20,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Kill 50 enemies with a melee weapon.",
                    bonuses: "Melee kills make you run 20% faster for 10 seconds.",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Kill 100 enemies with a melee weapon.",
                    bonuses: "Melee weapons do 50% more damage. Take 15% less damage while wielding a melee weapon.",
                    target: 100,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "Melee kills heal you for 10% of your health.",
                }
            },
            {
                id: 35,
                skillTitle: "LASERS",
                description: "Lasers is straightforward to level. Laser weapons are usually less common than ballistics, but still very common. Getting all the kills required may take time.",
                rankSituation: 0,
                active: true,
                rank1: {
                    challange: "Kill 20 enemies with a laser weapon.",
                    bonuses: "Laser weapons do 10% more damage.",
                    target: 20,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Kill 50 enemies with a laser weapon.",
                    bonuses: "Laser weapons do 20% more damage.",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Kill 100 enemies with a laser weapon.",
                    bonuses: "Laser weapons do 30% more damage.",
                    target: 100,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "Laser weapons have a 5% chance to set a target on fire.",
                }
            },
            {
                id: 36,
                skillTitle: "PISTOL CERTIFICATION",
                description: "Considering the popularity of the personal sidearm in the Settled Systems, familiarity with such weapons is often considered essential.",
                rankSituation: 0,
                active: true,
                rank1: {
                    challange: "Kill 20 enemies with a pistol.",
                    bonuses: "Pistols do 10% more damage.",
                    target: 20,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Kill 50 enemies with a pistol.",
                    bonuses: "Pistols do 25% more damage.",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Kill 100 enemies with a pistol.",
                    bonuses: "Pistols do 50% more damage.",
                    target: 100,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "	Pistol kills grant +25% critical hit chance for 5 seconds.",
                }
            },
            {
                id: 37,
                skillTitle: "SHOTGUN CERTIFICATION",
                description: "To progress this skill, the player should use a shotgun in engagements. Getting enough kills may take time.",
                rankSituation: 0,
                active: true,
                rank1: {
                    challange: "Kill 20 enemies with a shotgun.",
                    bonuses: "Shotguns do 10% more Damage.",
                    target: 20,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Kill 50 enemies with a shotgun.",
                    bonuses: "Shotguns do 20% more Damage.",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Kill 100 enemies with a shotgun.",
                    bonuses: "Shotguns do 30% more Damage.",
                    target: 100,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "Shotgun kills grant a small chance to Stun additional targets with shotguns for a limited time.",
                }
            }
        ],
        cascading2: [
            {
                id: 38,
                skillTitle: "DEMOLITIONS",
                description: "Explosives will almost never be a player's primary damage output. They are too rare and too expensive. However, they can greatly increase a player's flexibility in ground combat.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Kill 20 enemies with explosives.",
                    bonuses: "Throwing grenades now shows a trajectory arc. Explosives have a 25% larger radius.",
                    target: 20,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Kill 50 enemies with explosives.",
                    bonuses: "Explosives do 25% more damage.",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Kill 100 enemies with explosives.",
                    bonuses: "Reduce damage taken from explosives by 25%.",
                    target: 100,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "All previous bonuses are doubled.",
                }
            },
            {
                id: 39,
                skillTitle: "HEAVY WEAPON CERTIFICATION",
                description: "Heavy Weapons (and sometimes their ammo) can be rare and/or expensive, so leveling Heavy Weapon Certification can be difficult. Other than that, it's pretty straightforward.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Kill 20 enemies with a heavy weapon.",
                    bonuses: "Heavy weapons do 10% more damage.",
                    target: 20,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Kill 50 enemies with a heavy weapon.",
                    bonuses: "Heavy weapons do 20% more damage.",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Kill 100 enemies with a heavy weapon.",
                    bonuses: "Heavy weapons do 30% more damage.",
                    target: 100,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "Gain 25% Physical resistance while aiming down sights with a heavy weapon.",
                }
            },
            {
                id: 40,
                skillTitle: "INCAPACITATION",
                description: "Incapacitation is leveled in a similar fashion to other combat skills: use the right gun and get a lot of kills, invest skill points as needed.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Deal 400 EM damage.",
                    bonuses: "EM weapons do 5% more damage.",
                    target: 400,
                    step: 20,
                    score: 0
                },
                rank2: {
                    challange: "Deal 1000 EM damage.",
                    bonuses: "EM weapons do 10% more damage.",
                    target: 1000,
                    step: 20,
                    score: 0
                },
                rank3: {
                    challange: "Deal 2500 EM damage.",
                    bonuses: "EM weapons do 15% more damage.",
                    target: 2500,
                    step: 20,
                    score: 0
                },
                rank4: {
                    bonuses: "EM weapons have a 15% chance to do 300% EM damage.",
                }
            },
            {
                id: 41,
                skillTitle: "RIFLE CERTIFICATION",
                description: "As long as the player uses rifles when going questing, getting all the kills required shouldn't be a problem.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Kill 20 enemies with a rifle",
                    bonuses: "Rifles do 10% more damage",
                    target: 20,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Kill 50 enemies with a rifle",
                    bonuses: "Rifles do 20% more damage",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Kill 100 enemies with a rifle",
                    bonuses: "Rifles do 30% more damage",
                    target: 100,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "Reload rifles 30% faster while you're standing still.",
                }
            }
        ],
        cascading3: [
            {
                id: 42,
                skillTitle: "MARKSMANSHIP",
                description: "The player will have to use a semi-automatic weapon, and go for critical hits. Other than that, standard questing to accumulate all the kills required.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Deal 10 ranged critical hits.",
                    bonuses: "Increase critical hit chance with non-automatic ranged weapons by 3%.",
                    target: 10,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Deal 30 ranged critical hits.",
                    bonuses: "Increase critical hit chance with non-automatic ranged weapons by 8%.",
                    target: 30,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Deal 75 ranged critical hits.",
                    bonuses: "Increase critical hit chance with non-automatic ranged weapons by 15%.",
                    target: 75,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "Critical hits using a non-automatic ranged weapon without a scope do double damage and those with scopes knock down enemies on the next shot.",
                }
            },
            {
                id: 43,
                skillTitle: "PARTICLE BEAMS",
                description: "The player will have to use a particle beam weapon, and go for critical hits. Other than that, standard questing to accumulate all the kills required.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Kill 20 enemies with a particle beam weapon.",
                    bonuses: "Particle beam weapons do 10% more damage.",
                    target: 20,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Kill 50 enemies with a particle beam weapon.",
                    bonuses: "Particle beam weapons do 20% more damage.",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Kill 100 enemies with a particle beam weapon.",
                    bonuses: "Particle beam weapons do 30% more damage.",
                    target: 100,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "Particle beam weapons have +5% crit chance.",
                }
            },
            {
                id: 44,
                skillTitle: "RAPID RELOADING",
                description: "In the chaos of combat, the seconds needed to reload your weapon could be the difference between life and death.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Reload 30 empty magazines.",
                    bonuses: "Reload Ballistic weapons 30% faster.",
                    target: 30,
                    step: 5,
                    score: 0
                },
                rank2: {
                    challange: "Reload 75 empty magazines.",
                    bonuses: "Reload Energy and EM weapons 30% faster.",
                    target: 75,
                    step: 5,
                    score: 0
                },
                rank3: {
                    challange: "Reload 150 empty magazines.",
                    bonuses: "Reload Particle Beam weapons 30% faster. 50% chance to avoid getting interrupted while reloading.",
                    target: 150,
                    step: 5,
                    score: 0
                },
                rank4: {
                    bonuses: "Chance on hitting enemies to increase reload speed for all weapons by 50% for 15 seconds.",
                }
            },
            {
                id: 45,
                skillTitle: "SNIPER CERTIFICATION",
                description: "Only a trained sniper truly understands all the elements necessary to patiently and effectively neutralize a target at excessive range.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Kill 50 enemies using a scoped weapon.",
                    bonuses: "Scoped weapons are steadier and have less sway.",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Kill 125 enemies using a scoped weapon.",
                    bonuses: "You can hold your breath longer with scoped weapons.",
                    target: 125,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Kill 250 enemies using a scoped weapon.",
                    bonuses: "Headshots while aiming with a scoped weapons have a +25% critical hit chance.",
                    target: 250,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "Scoped weapons do 50% more damage while using the scope.",
                }
            },
            {
                id: 46,
                skillTitle: "TARGETING",
                description: "Only a trained sniper truly understands all the elements necessary to patiently and effectively neutralize a target at excessive range.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Kill 50 enemies without aiming with a ranged weapon.",
                    bonuses: "Increased accuracy and range when shooting without aiming. Marks up to one enemy within 25m that damages you.",
                    target: 20,
                    step: 5,
                    score: 0
                },
                rank2: {
                    challange: "Kill 125 enemies without aiming with a ranged weapon.",
                    bonuses: "Notably Increased accuracy and range when shooting without aiming. Marks up to two enemies within 50m that damages you.",
                    target: 5,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Kill 250 enemies without aiming with a ranged weapon.",
                    bonuses: "Greatly increased accuracy and range when shooting without aiming. Marks up to three enemies within 75m that damage you.",
                    target: 250,
                    step: 25,
                    score: 0
                },
                rank4: {
                    bonuses: "Greatly increased accuracy and range when shooting without aiming. Marks up to four enemies within 100m that damage you.",
                }
            }
        ],
        cascading4: [
            {
                id: 47,
                skillTitle: "ARMOR PENETRATION",
                description: "By identifying gaps or weak points in body armor, an attacker can often gain a tactical advantage in combat.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Kill 20 enemies with a non-automatic weapon.",
                    bonuses: "Attacks ignore 15% of a target's armor.",
                    target: 20,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Kill 50 enemies with a non-automatic weapon.",
                    bonuses: "Attacks ignore 30% of a target's armor.",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Kill 100 enemies with a non-automatic weapon.",
                    bonuses: "Attacks ignore 50% of a target's armor.",
                    target: 100,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "Enemy armor is decreased by 25 % for 6 seconds after a critical hit.",
                }
            },
            {
                id: 48,
                skillTitle: "CRIPPLING",
                description: "Specifically targeting the pressure points and nerves of various limbs can disable an opponent, limiting their combat effectiveness.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Put 20 enemies into the bleedout state.",
                    bonuses: "Human enemies have a 30% increased chance to enter a downed state after taking enough damage.",
                    target: 20,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Put 50 enemies into the bleedout state.",
                    bonuses: "Humanoid enemies have a 50% increased chance to not naturally recover from a downed state.",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Put 100 enemies into the bleedout state.",
                    bonuses: "Human enemies now can enter a downed state earlier.",
                    target: 100,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "Previous ranks now apply to all enemy types. You now do 100% more damage to downed enemies.",
                }
            },
            {
                id: 49,
                skillTitle: "CRIPPLING",
                description: "Specifically targeting the pressure points and nerves of various limbs can disable an opponent, limiting their combat effectiveness.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Deal 50 ranged critical hits.",
                    bonuses: "Increase headshot critical damage by 50% with ranged weapons.",
                    target: 20,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Deal 125 ranged critical hits.",
                    bonuses: "Increase critical damage to enemy legs by 50% with ranged weapons.",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Deal 250 ranged critical hits.",
                    bonuses: "Increase all critical damage to enemies by 50% with ranged weapons.",
                    target: 100,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "Ranged critical hit kills increase your critical hit chance with all ranged weapons by 25% for 20 seconds.",
                }
            }
        ]
    },
    {
        title: "science",
        totalPoints: 0,
        cascading1: [
            {
                id: 50,
                skillTitle: "ASTRODYNAMICS",
                description: "Advanced technology is one thing, but it takes skill, patience, and a little bit of love to coax even more capability out of a ship's grav drive.",
                rankSituation: 0,
                active: true,
                rank1: {
                    challange: "Make 5 grav jumps.",
                    bonuses: "Increase grav jump range of jump drives by 15%.",
                    target: 5,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Make 15 grav jumps.",
                    bonuses: "Reduced fuel cost of jump drives by 15%.",
                    target: 15,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Make 30 grav jumps.",
                    bonuses: "Increased grav jump range and reduced fuel cost of jump drives by 30%.",
                    target: 30,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "Reduced fuel cost of jump drives by 50%.",
                }
            },
            {
                id: 51,
                skillTitle: "GEOLOGY",
                description: "Newly discovered minerals mined from alien planets and moons have directly led to some incredible technological advancements.",
                rankSituation: 0,
                active: true,
                rank1: {
                    challange: "Harvest inorganic resources from 20 sources",
                    bonuses: "Get more common and uncommon inorganic resources from surface objects.",
                    target: 20,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Harvest inorganic resources from 50 sources",
                    bonuses: "Get more rare inorganic resources from surface objects.",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Harvest inorganic resources from 100 sources",
                    bonuses: "Get more exotic inorganic resources from surface objects.",
                    target: 100,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "Occasionally harvest additional rarer resources from surface objects.",
                }
            },
            {
                id: 52,
                skillTitle: "MEDICINE",
                description: "Only through advancements in medical training and technology has humanity been able to withstand the galaxy's many dangers.",
                rankSituation: 0,
                active: true,
                rank1: {
                    challange: "Use healing items 20 times while wounded.",
                    bonuses: "Med Packs, Trauma Packs, and Emergency Kits restore 10% additional Health 10% faster.",
                    target: 20,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Use healing items 50 times while wounded.",
                    bonuses: "Med Packs, Trauma Packs, and Emergency Kits restore 20% additional Health 20% faster.",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Use healing items 100 times while wounded.",
                    bonuses: "Med Packs, Trauma Packs, and Emergency Kits restore 30% additional Health 30% faster.",
                    target: 100,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "Med Packs, Trauma Packs, and Emergency Kits restore 50% additional Health 50% faster, and have a chance to cure an affliction.",
                }
            },
            {
                id: 53,
                skillTitle: "RESEARCH METHODS",
                description: "By skillfully employing both new and time tested methods, a researcher may complete projects faster and even gain unexpected insights.",
                rankSituation: 0,
                active: true,
                rank1: {
                    challange: "Craft 5 unique food, drinks, drugs, weapon mods, or equipment mods.",
                    bonuses: "Resources required to craft items and complete research projects is reduced by 10%.",
                    target: 5,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Craft 10 unique food, drinks, drugs, weapon mods, or equipment mods.",
                    bonuses: "Resources required to craft items and complete research projects is reduced by 20%.",
                    target: 10,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Craft 15 unique food, drinks, drugs, weapon mods, or equipment mods.",
                    bonuses: "Resources required to craft items and complete research projects is reduced by 40%.",
                    target: 15,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "Sudden developments during research are twice as common. Resources required to craft items and complete research projects is reduced by 60%.",
                }
            },
            {
                id: 54,
                skillTitle: "SURVEYING",
                description: "Humanity now has access to untold alien worlds, and the ability to decipher all that data while on the ground has become an essential skillset.",
                rankSituation: 0,
                active: true,
                rank1: {
                    challange: "Use the hand scanner to scan 10 unique resources, flora, or fauna.",
                    bonuses: "Adds an optional zoom to the hand scanner, and scan distance is increased to 20 meters.",
                    target: 20,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Use the hand scanner to scan 25 unique resources, flora, or fauna.",
                    bonuses: "Adds another level of zoom to the hand scanner, and scan distance is increased to 30 meters.",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Use the hand scanner to scan 50 unique resources, flora, or fauna.",
                    bonuses: "Adds another level of zoom to the hand scanner, and scan distance is increased to 40 meters.",
                    target: 100,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "Adds another level of zoom to the hand scanner, and scan distance is increased to 50 meters.",
                }
            }
        ],
        cascading2: [
            {
                id: 55,
                skillTitle: "BOTANY",
                description: "Botany isn't difficult to level. Simply explore habitable worlds until the challenges are complete.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Harvest 20 organic resources from plants.",
                    bonuses: "Get more common and uncommon organic resources from plants, learn additional info about them from the scanner, and allows some plants to be cultivated at your outposts.",
                    target: 20,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Harvest 50 organic resources from plants.",
                    bonuses: "Get more rare organic resources from plants, and learn information about them more quickly using the scanner",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Harvest 100 organic resources from plants.",
                    bonuses: "Get more exotic organic resources from plants, and learn information about them more quickly using the scanner",
                    target: 100,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "Occasionally harvest additional rarer resources from plants, and learn information about them more quickly using the scanner",
                }
            },
            {
                id: 56,
                skillTitle: "SCANNING",
                description: "While anyone can use a ship's scanner, it takes a specially trained operator to detect hard-to-find planetary resources, or uncover the details of nearby ships.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Scan 5 planets or moons.",
                    bonuses: "You can detect uncommon inorganic resources on planet and moon surfaces, and more information about ships in space.",
                    target: 5,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Scan 15 planets or moons.",
                    bonuses: "You can detect rare inorganic resources on planet and moon surfaces, and more information about ships in space.",
                    target: 15,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Scan 30 planets or moons.",
                    bonuses: "You can detect exotic inorganic resources on planet and moon surfaces, and gain better combat information on ships in space.",
                    target: 30,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "You can detect unique inorganic resources on planet and moon surfaces, and gain a complete list of cargo on ships in space.",
                }
            },
            {
                id: 57,
                skillTitle: "SPACESUIT DESIGN",
                description: "While a basic spacesuit can protect one from the vacuum of space, it takes a specialized design to withstand the rigors of many alien worlds.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Craft 5 spacesuit, helmet, or pack mods",
                    bonuses: "You can craft improved spacesuit, helmet, and pack mods, and research additional mods at a Research Lab.",
                    target: 5,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Craft 15 spacesuit, helmet, or pack mods",
                    bonuses: "You can research and craft superior spacesuit, helmet, and pack mods.",
                    target: 15,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Craft 30 spacesuit, helmet, or pack mods.",
                    bonuses: "You can research and craft cutting-edge spacesuit, helmet, and pack mods.",
                    target: 30,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "	Construction of spacesuit, helmet, and pack mods occasionally doesn't cost resources.",
                }
            },
            {
                id: 58,
                skillTitle: "WEAPON ENGINEERING",
                description: "Life in the 24th century can be exceedingly dangerous, and the ability to maintain and modify personal weapons can be essential to one's survival.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Craft 5 weapon mods.",
                    bonuses: "You can craft improved weapon mods at a Weapon Workbench, and research additional weapon mods at a Research Lab.",
                    target: 5,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Craft 15 weapon mods.",
                    bonuses: "You can research and craft superior weapon mods.",
                    target: 15,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Craft 30 weapon mods.",
                    bonuses: "You can research and craft cutting-edge weapon mods.",
                    target: 30,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "You can research and craft master-level weapon mods.",
                }
            },
            {
                id: 59,
                skillTitle: "ZOOLOGY",
                description: "No one could have expected the number of new species encountered on alien worlds, or the importance of those skilled in their behavior and domestication.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Harvest organic resources from 20 creatures",
                    bonuses: "Get more common organic resources from creatures and harvest from them without harming them, learn additional info about them from the scanner, and allows you to produce animal resources at your outposts.",
                    target: 20,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Harvest organic resources from 50 creatures",
                    bonuses: "Get more uncommon organic resources from creatures, and learn information about them more quickly using the scanner.",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Harvest organic resources from 100 creatures",
                    bonuses: "Get more rare organic resources from creatures, and learn information about them more quickly using the scanner.",
                    target: 100,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "Occasionally harvest additional rarer resources from creatures, and learn information about them more quickly using the scanner.",
                }
            }
        ],
        cascading3: [
            {
                id: 60,
                skillTitle: "ASTROPHYSICS",
                description: "Astrophysics can be useful, but is a bit niche. Discovering planetary traits reduces the time needed to survey the planet once the player lands.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Scan 10 unique planets or moons.",
                    bonuses: "You can scan the moons of your current planet. You have a 10% chance to discover a trait when scanning.",
                    target: 10,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Scan 25 unique planets or moons.",
                    bonuses: "You can scan any planet or moon in this system. You have a 20% chance to discover a trait when scanning.",
                    target: 25,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Scan 50 unique planets or moons.",
                    bonuses: "You can scan any planet or moon within 16 Light Years. You have a 30% chance to discover a trait when scanning.",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "You can scan any planet or moon within 30 Light Years. You have a 50% chance to discover a trait when scanning.",
                }
            },
            {
                id: 61,
                skillTitle: "CHEMISTRY",
                description: "Chemistry is easy to level, especially if the player is willing to purchase crafting materials. If no other place is available, the basement of The Lodge is a good place to craft.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Create 10 chems.",
                    bonuses: "You can create improved chems, and research additional chems at a Research Lab.",
                    target: 10,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Create 25 chems.",
                    bonuses: "You can research and create superior chems.",
                    target: 25,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Create 50 chems.",
                    bonuses: "You can research and create cutting-edge chems.",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "Crafting chems occasionally triples the amount created",
                }
            },
            {
                id: 62,
                skillTitle: "OUTPOST ENGINEERING",
                description: "Assuming the player has enough crafting materials to build the modules required. If the player chooses to collect the materials manually, it can be more time consuming.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Build 5 different outpost modules",
                    bonuses: "You can construct improved outpost modules and research additional modules at a Research Station.",
                    target: 5,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Build 25 different outpost modules",
                    bonuses: "You can research and construct superior outpost modules.",
                    target: 25,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Build 50 different outpost modules",
                    bonuses: "You can research and construct cutting-edge outpost modules.",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "Outpost modules now cost 50% fewer resources to build",
                }
            }
        ],
        cascading4: [
            {
                id: 63,
                skillTitle: "ANEUTRONIC FUSION",
                description: "Is it possible to maximize a ship's energy output by specifically direction the unique nuclear processes that occur within its reactor.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Destroy 5 ships.",
                    bonuses: "Ship reactors produce 1 extra unit of power.",
                    target: 20,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Destroy 25 ships.",
                    bonuses: "Ship reactors produce 2 extra unit of power.",
                    target: 25,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Destroy 50 ships.",
                    bonuses: "Ship reactors produce 3 extra unit of power.",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "Ship reactors produce 5 extra unit of power.",
                }
            },
            {
                id: 64,
                skillTitle: "PLANETARY HABITATION",
                description: "While outpost building is always challenging, doing so on a world with a dangerous environment requires specialized training.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Build habitable outposts on 3 different planets.",
                    bonuses: "You can build outposts on planets with extreme temperatures (Deep Freeze and Inferno). Increase the maximum number of Outposts you can build by 4.",
                    target: 3,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Build habitable outposts on 5 different planets.",
                    bonuses: "You can build outposts on planets with extreme pressure. Increase the maximum number of Outposts you can build by 8.",
                    target: 5,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Build habitable outposts on 10 different planets.",
                    bonuses: "You can build outposts on planets with toxic or corrosive atmospheres. Increase the maximum number of Outposts you can build by 12.",
                    target: 10,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "You can build outposts on planets with extreme gravity. Increase the maximum number of Outposts you can build by 16.",
                }
            },
            {
                id: 65,
                skillTitle: "SPECIAL PROJECTS",
                description: "Big guns are great, but in the Settled Systems, sometimes the best weapon is simply an old adage: Knowledge is Power.",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "Craft 10 common or uncommon manufactured components",
                    bonuses: "You can research experimental projects at a Research Lab.",
                    target: 10,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "Craft 10 rare manufactured components",
                    bonuses: "You can craft rare manufactured components at an Industrial Workbench.",
                    target: 10,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Craft 10 exotic manufactured components",
                    bonuses: "You can craft exotic manufactured components at an Industrial Workbench.",
                    target: 10,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "You can craft unique manufactured components at an Industrial Workbench. Outpost extractors have a chance to produce additional resources.",
                }
            }
        ]
    },
    {
        title: "tech",
        totalPoints: 49,
        cascading1: [
            {
                id: 66,
                skillTitle: "BALLISTIC WEAPON SYSTEMS",
                description: "While there have been significant advancements in ship-borne weaponry, sometimes the simplest tool is the most effective.",
                rankSituation: 3,
                active: true,
                rank1: {
                    challange: "Deal 1000 damage to enemy ships with ballistic weapons.",
                    bonuses: "Ballistic ship weapons have 10% increased damage and cost 20% less to use in Targeting Mode.",
                    target: 1000,
                    step: 100,
                    score: 1000
                },
                rank2: {
                    challange: "Deal 4000 damage to enemy ships with ballistic weapons.",
                    bonuses: "Ballistic ship weapons have 20% increased damage and recharge 15% faster.",
                    target: 4000,
                    step: 100,
                    score: 4000
                },
                rank3: {
                    challange: "Deal 10000 damage to enemy ships with ballistic weapons.",
                    bonuses: "Ballistic ship weapons have 30% increased damage and recharge 30% faster.",
                    target: 10000,
                    step: 100,
                    score: 2400
                },
                rank4: {
                    bonuses: "Ballistic ship weapons do 50% more damage to individual systems.",
                }
            },
            {
                id: 67,
                skillTitle: "BOOST PACK TRAINING",
                description: "Specialized training and innovations in personal mobility systems have allowed for unfettered exploration on alien worlds.",
                rankSituation: 4,
                active: true,
                rank1: {
                    challange: "Boost jump 10 times while in combat.",
                    bonuses: "You can now utilize boost packs.",
                    target: 10,
                    step: 1,
                    score: 10
                },
                rank2: {
                    challange: "Boost jump 25 times while in combat.",
                    bonuses: "Using a boost pack expends less fuel.",
                    target: 25,
                    step: 1,
                    score: 25
                },
                rank3: {
                    challange: "Boost jump 50 times while in combat.",
                    bonuses: "Boost pack fuel regenerates more quickly.",
                    target: 50,
                    step: 1,
                    score: 50
                },
                rank4: {
                    bonuses: "Doubles previous bonuses.",
                }
            },
            {
                id: 68,
                skillTitle: "PILOTING",
                description: "As more people journey into space, the number of those certified to effectively pilot various types of spacecraft has increased dramatically.",
                rankSituation: 0,
                active: true,
                rank1: {
                    challange: "Destroy 5 ships.",
                    bonuses: "You can now utilize ship thrusters.",
                    target: 5,
                    step: 1,
                    score: 5
                },
                rank2: {
                    challange: "Destroy 15 ships.",
                    bonuses: "Increased ship turning rate and maneuverability.",
                    target: 15,
                    step: 1,
                    score: 15
                },
                rank3: {
                    challange: "Destroy 30 ships.",
                    bonuses: "Unlock the ability to pilot Class B ships.",
                    target: 30,
                    step: 1,
                    score: 15
                },
                rank4: {
                    bonuses: "Unlock the ability to pilot Class C ships.",
                }
            },
            {
                id: 69,
                skillTitle: "SECURITY",
                description: "While the standardized digital locking mechanism is renowned for its security, any code can be broken with the proper training.",
                rankSituation: 1,
                active: true,
                rank1: {
                    challange: "Pick 5 locks.",
                    bonuses: "You can attempt to hack Advanced locks, and 2 auto attempts can be banked.",
                    target: 20,
                    step: 1,
                    score: 20
                },
                rank2: {
                    challange: "Pick 15 locks.",
                    bonuses: "You can attempt to hack Expert locks, and 3 auto attempts can be banked. Rings now turn blue when the pick can be slotted.",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Pick 25 locks.",
                    bonuses: "You can attempt to hack Master-level locks, and 4 auto attempts can be banked.",
                    target: 100,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "Expend a digipick to eliminate keys that aren't required to solve the puzzle. 5 auto attempts can be banked.",
                }
            },
            {
                id: 70,
                skillTitle: "TARGETING CONTROL SYSTEMS",
                description: "Missile weapons are favored because they can lock onto an enemy ship, but an intimate knowledge of tracking systems can make them even more effective.",
                rankSituation: 2,
                active: true,
                rank1: {
                    challange: "Destroy 5 enemy ships while in targeting mode.",
                    bonuses: "Unlocks ships targeting functionality.",
                    target: 5,
                    step: 1,
                    score: 5
                },
                rank2: {
                    challange: "Destroy 15 enemy ships while in targeting mode.",
                    bonuses: "Time to lock onto enemy ships is reduced by 15%. Target-locked ships fire at you 25% slower",
                    target: 15,
                    step: 1,
                    score: 10
                },
                rank3: {
                    challange: "Destroy 30 enemy ships while in targeting mode.",
                    bonuses: "Time to lock onto enemy ships is reduced by 30%. You have a 10% increased chance of critically Hitting a target-locked ship.",
                    target: 30,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "Time to lock onto enemy ships is reduced by 60%. Deal 20% increased system damaged in targeting mode.",
                }
            }
        ],
        cascading2: [
            {
                id: 71,
                skillTitle: "ENERGY WEAPON SYSTEMS",
                description: "In the 24th century, advancements in energy weapons technology have revolutionized combat, as much in space as on the ground.",
                rankSituation: 4,
                active: true,
                rank1: {
                    challange: "Deal 1000 damage to enemy ships with energy weapons.",
                    bonuses: "Energy ship weapons have 10% increased damage and cost 15% less to use in Targeting Mode.",
                    target: 1000,
                    step: 100,
                    score: 1000
                },
                rank2: {
                    challange: "Deal 4000 damage to enemy ships with energy weapons.",
                    bonuses: "Energy ship weapons have 20% increased damage and cost 30% less to use in Targeting Mode.",
                    target: 4000,
                    step: 100,
                    score: 4000
                },
                rank3: {
                    challange: "Deal 10000 damage to enemy ships with energy weapons.",
                    bonuses: "Energy ship weapons have 30% increased damage and cost 45% less to use in Targeting Mode.",
                    target: 10000,
                    step: 100,
                    score: 10000
                },
                rank4: {
                    bonuses: "Energy ship weapons recharge 30% faster.",
                }
            },
            {
                id: 72,
                skillTitle: "ENGINE SYSTEMS",
                description: "Space is both vast and dangerous, and the ability to push a ship's engine to increase speed can be done safely and effectively, with the right trainning.",
                rankSituation: 3,
                active: true,
                rank1: {
                    challange: "Boost 5 times with your spaceship while in combat.",
                    bonuses: "Your ship's top speed is increased by 10%.",
                    target: 5,
                    step: 1,
                    score: 5
                },
                rank2: {
                    challange: "Boost 25 times with your spaceship while in combat.",
                    bonuses: "Ship boosts last longer and the cooldown is shorter.",
                    target: 25,
                    step: 1,
                    score: 25
                },
                rank3: {
                    challange: "Boost 50 times with your spaceship while in combat.",
                    bonuses: "Your ship's top speed is increased by 20%.",
                    target: 50,
                    step: 1,
                    score: 30
                },
                rank4: {
                    bonuses: "While boosting, all enemies disengage the player and can only reacquire them as a target after the player stops boosting.",
                }
            },
            {
                id: 73,
                skillTitle: "PAYLOADS",
                description: "Any pilot can haul cargo, but it takes special determination and training to maximize cargo space.",
                rankSituation: 2,
                active: true,
                rank1: {
                    challange: "Make 10 grav jumps with 75% or more of maximum cargo capacity.",
                    bonuses: "Ship cargo holds have 10% more capacity.",
                    target: 20,
                    step: 1,
                    score: 20
                },
                rank2: {
                    challange: "Make 25 grav jumps with 75% or more of maximum cargo capacity.",
                    bonuses: "Ship cargo holds have 20% more capacity.",
                    target: 50,
                    step: 1,
                    score: 13
                },
                rank3: {
                    challange: "Make 50 grav jumps with 75% or more of maximum cargo capacity.",
                    bonuses: "Ship cargo holds have 30% more capacity.",
                    target: 100,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "Ship cargo holds have 50% more capacity.",
                }
            },
            {
                id: 74,
                skillTitle: "SHIELD SYSTEMS",
                description: "Regardless of the power allocated by the reactor, a ship's shields can be further bolstered by direct manipulation of the system harmonics.",
                rankSituation: 4,
                active: true,
                rank1: {
                    challange: "Take 150 shield damage.",
                    bonuses: "Your ship has 20% increased shield capacity.",
                    target: 150,
                    step: 15,
                    score: 150
                },
                rank2: {
                    challange: "Take 350 shield damage.",
                    bonuses: "Your ship has 40% increased shield capacity.",
                    target: 350,
                    step: 15,
                    score: 350
                },
                rank3: {
                    challange: "Take 750 shield damage.",
                    bonuses: "Your ship has 60% increased shield capacity.",
                    target: 750,
                    step: 15,
                    score: 750
                },
                rank4: {
                    bonuses: "Your shields will occasionally resist 100% of all damage received.",
                }
            }
        ],
        cascading3: [
            {
                id: 75,
                skillTitle: "MISSILE WEAPON SYSTEMS",
                description: "In space, few weapons can match the range and destructive power of missiles, especially in the hands of a skilled tactician.",
                rankSituation: 4,
                active: true,
                rank1: {
                    challange: "Deal 1000 damage to enemy ships with missile weapons",
                    bonuses: "Ship missile weapons do 10% more damage, and their Targeting mode cost is reduced by 20%.",
                    target: 1000,
                    step: 100,
                    score: 1000
                },
                rank2: {
                    challange: "Deal 4000 damage to enemy ships with missile weapons",
                    bonuses: "Ship missile weapons do 20% more damage, and their Targeting mode cost is reduced by 40%.",
                    target: 4000,
                    step: 100,
                    score: 4000
                },
                rank3: {
                    challange: "Deal 10000 damage to enemy ships with missile weapons",
                    bonuses: "Ship missile weapons do 30% more damage, and their Targeting mode cost is reduced by 60%.",
                    target: 10000,
                    step: 100,
                    score: 10000
                },
                rank4: {
                    bonuses: "Ship missiles have a 20% increased Range, Travel Speed, and Reload Speed.",
                }
            },
            {
                id: 76,
                skillTitle: "PARTICLE BEAM WEAPON SYSTEMS",
                description: "Ship weapons utilizing particle beam technology are the preferred choice for captains who prefer to damage multiple ship systems at once.",
                rankSituation: 3,
                active: true,
                rank1: {
                    challange: "Deal 1000 damage to enemy ships with particle beam weapons",
                    bonuses: "Ship particle beam weapons do 10% more damage, and Targeting mode cost is reduced by 10%",
                    target: 1000,
                    step: 100,
                    score: 1000
                },
                rank2: {
                    challange: "Deal 4000 damage to enemy ships with particle beam weapons",
                    bonuses: "Ship particle beam weapons do 20% more damage, and Targeting mode cost is reduced by 20%",
                    target: 4000,
                    step: 100,
                    score: 4000
                },
                rank3: {
                    challange: "Deal 10000 damage to enemy ships with particle beam weapons",
                    bonuses: "Ship particle beam weapons do 30% more damage, and Targeting mode cost is reduced by 30%",
                    target: 10000,
                    step: 100,
                    score: 2600
                },
                rank4: {
                    bonuses: "Increase critical hit chance with ship particle beam weapons.",
                }
            },
            {
                id: 77,
                skillTitle: "ROBOTICS",
                description: "In an age where robots and autonomous turrets are employed in a combat capacity, the study of robotics can be instrumental in gaining a tactical edge.",
                rankSituation: 1,
                active: true,
                rank1: {
                    challange: "Destroy 5 robots.",
                    bonuses: "You deal 10% more damage to Robots and Turrets. You can force a target robot up to 10 levels higher than you to stop fighting for a limited time.",
                    target: 5,
                    step: 1,
                    score: 5
                },
                rank2: {
                    challange: "Destroy 25 robots.",
                    bonuses: "You deal 20% more damage to Robots and Turrets. You can force a target robot up to 10 levels higher than you to flee for a limited time.",
                    target: 25,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "Destroy 50 robots.",
                    bonuses: "You deal 30% more damage to Robots and Turrets. You can force a target robot up to 10 levels higher than you to attack their allies for a limited time.",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "You can force a target robot up to 10 levels higher than you to obey commands for a limited time.",
                }
            },
            {
                id: 78,
                skillTitle: "STARSHIP DESIGN",
                description: "As with 'car culture' on Earth centuries ago, there are those who pride themselves on the ability to modify their own spaceships.",
                rankSituation: 3,
                active: true,
                rank1: {
                    challange: "Install 5 unique ship modules.",
                    bonuses: "Allows the installation of improved ship modules.",
                    target: 5,
                    step: 1,
                    score: 5
                },
                rank2: {
                    challange: "Install 15 unique ship modules.",
                    bonuses: "Allows the installation of superior ship modules.",
                    target: 15,
                    step: 1,
                    score: 15
                },
                rank3: {
                    challange: "Install 30 unique ship modules.",
                    bonuses: "Allows the installation of cutting-edge ship modules.",
                    target: 30,
                    step: 1,
                    score: 30
                },
                rank4: {
                    bonuses: "Allows the installation of experimental ship modules.",
                }
            },
            {
                id: 79,
                skillTitle: "STARSHIP ENGINEERING",
                description: "As long as the player has the parts. To powerlevel this skill, the player could engage low-level enemies and power down their shields to take minor damage for repairs.",
                rankSituation: 4,
                active: true,
                rank1: {
                    challange: "Use 5 ship repair kits.",
                    bonuses: "All ship systems repair 10% faster.",
                    target: 5,
                    step: 1,
                    score: 5
                },
                rank2: {
                    challange: "Use 10 ship repair kits.",
                    bonuses: "Ship systems have 25% increased damage mitigation.",
                    target: 10,
                    step: 1,
                    score: 10
                },
                rank3: {
                    challange: "Use 15 ship repair kits.",
                    bonuses: "All ship systems repair 25% faster.",
                    target: 15,
                    step: 1,
                    score: 15
                },
                rank4: {
                    bonuses: "Occasionally, repairing one block of a system will repair the entire system.",
                }
            }
        ],
        cascading4: [
            {
                id: 80,
                skillTitle: "AUTOMATED WEAPON SYSTEMS",
                description: "Turret weapons are known for their easy-to-use, autonomous nature, but they can be made even deadlier with some specific technical adjustments.",
                rankSituation: 3,
                active: true,
                rank1: {
                    challange: "Deal 1000 damage to enemy ships with automated turret weapons.",
                    bonuses: "Automated ship weapons do 10% more damage and reduce all targeting mode costs by 20%.",
                    target: 1000,
                    step: 100,
                    score: 1000
                },
                rank2: {
                    challange: "Deal 4000 damage to enemy ships with automated turret weapons.",
                    bonuses: "Automated ship weapons do 20% more damage and reduce all targeting mode costs by 30%. Your ship takes 20% less damage while in targeting mode.",
                    target: 4000,
                    step: 100,
                    score: 4000
                },
                rank3: {
                    challange: "Deal 10000 damage to enemy ships with automated turret weapons.",
                    bonuses: "Automated ship weapons do 30% more damage and reduce all targeting mode costs by 40%. Increases crit chance against targeted sub-systems by 20%.",
                    target: 10000,
                    step: 100,
                    score: 1000
                },
                rank4: {
                    bonuses: "Ship turret weapons recharge 40% faster and do 20% more damage to targeted sub-systems.",
                }
            },
            {
                id: 81,
                skillTitle: "BOOST ASSAULT TRAINING",
                description: "Combat training with boost packs allows for more shock and awe tactics.",
                rankSituation: 4,
                active: true,
                rank1: {
                    challange: "Deal 200 damage to enemies using the boost pack",
                    bonuses: "Nearby enemies take damage when you boost and have a chance to catch on fire.",
                    target: 200,
                    step: 20,
                    score: 200
                },
                rank2: {
                    challange: "Knockdown 20 enemies with a boost.",
                    bonuses: "Chance to knockdown nearby enemies when you boost.",
                    target: 20,
                    step: 4,
                    score: 20
                },
                rank3: {
                    challange: "Deal 500 damage to enemies using the boost pack.",
                    bonuses: "Aiming down sights while boosting will let you hover in place. Fuel is still expended until empty.",
                    target: 500,
                    step: 50,
                    score: 500
                },
                rank4: {
                    bonuses: "While hovering, time slows down and the world moves 70% slower around you.",
                }
            },
            {
                id: 82,
                skillTitle: "EM WEAPON SYSTEMS",
                description: "In the hands of a capable pilot, no weapons can disable an enemy ship faster than those that deliver electromagnetic damage.",
                rankSituation: 4,
                active: true,
                rank1: {
                    challange: "Deal 1000 damage to enemy ships with EM weapons",
                    bonuses: "EM ship weapons have 10% increased damage and cost 15% less to use in Targeting Mode.",
                    target: 1000,
                    step: 100,
                    score: 1000
                },
                rank2: {
                    challange: "Deal 4000 damage to enemy ships with EM weapons.",
                    bonuses: "EM ship weapons have 20% increased damage and cost 30% less to use in Targeting Mode.",
                    target: 4000,
                    step: 100,
                    score: 4000
                },
                rank3: {
                    challange: "Deal 10000 damage to enemy ships with EM weapons.",
                    bonuses: "EM ship weapons have 30% increased damage and cost 45% less to use in Targeting Mode.",
                    target: 10000,
                    step: 100,
                    score: 10000
                },
                rank4: {
                    bonuses: "EM ship weapons have a small chance of instantly disabling enemy engines.",
                }
            }
        ]
    }
];

























































































/*

{
        title: "social",
        totalPoints: 0,
        cascading1: [
            {
                id: 33,
                skillTitle: "",
                description: "",
                rankSituation: 0,
                active: true,
                rank1: {
                    challange: "",
                    bonuses: "",
                    target: 20,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "",
                    bonuses: "",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "",
                    bonuses: "",
                    target: 100,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "",
                }
            },
            {
                id: 34,
                skillTitle: "",
                description: "",
                rankSituation: 0,
                active: true,
                rank1: {
                    challange: "",
                    bonuses: "",
                    target: 20,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "",
                    bonuses: "",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "",
                    bonuses: "",
                    target: 100,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "",
                }
            },
            {
                id: 35,
                skillTitle: "",
                description: "",
                rankSituation: 0,
                active: true,
                rank1: {
                    challange: "",
                    bonuses: "",
                    target: 20,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "",
                    bonuses: "",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "",
                    bonuses: "",
                    target: 100,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "",
                }
            },
            {
                id: 36,
                skillTitle: "",
                description: "",
                rankSituation: 0,
                active: true,
                rank1: {
                    challange: "",
                    bonuses: "",
                    target: 20,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "",
                    bonuses: "",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "",
                    bonuses: "",
                    target: 100,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "",
                }
            },
            {
                id: 37,
                skillTitle: "",
                description: "",
                rankSituation: 0,
                active: true,
                rank1: {
                    challange: "",
                    bonuses: "",
                    target: 20,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "",
                    bonuses: "",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "",
                    bonuses: "",
                    target: 100,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "",
                }
            }
        ],
        cascading2: [
            {
                id: 1,
                skillTitle: "",
                description: "",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "",
                    bonuses: "",
                    target: 20,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "",
                    bonuses: "",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "",
                    bonuses: "",
                    target: 100,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "",
                }
            },
            {
                id: 1,
                skillTitle: "",
                description: "",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "",
                    bonuses: "",
                    target: 20,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "",
                    bonuses: "",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "",
                    bonuses: "",
                    target: 100,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "",
                }
            },
            {
                id: 1,
                skillTitle: "",
                description: "",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "",
                    bonuses: "",
                    target: 20,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "",
                    bonuses: "",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "",
                    bonuses: "",
                    target: 100,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "",
                }
            },
            {
                id: 1,
                skillTitle: "",
                description: "",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "",
                    bonuses: "",
                    target: 20,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "",
                    bonuses: "",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "",
                    bonuses: "",
                    target: 100,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "",
                }
            },
            {
                id: 1,
                skillTitle: "",
                description: "",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "",
                    bonuses: "",
                    target: 20,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "",
                    bonuses: "",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "",
                    bonuses: "",
                    target: 100,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "",
                }
            }
        ],
        cascading3: [
            {
                id: 1,
                skillTitle: "",
                description: "",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "",
                    bonuses: "",
                    target: 20,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "",
                    bonuses: "",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "",
                    bonuses: "",
                    target: 100,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "",
                }
            },
            {
                id: 1,
                skillTitle: "",
                description: "",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "",
                    bonuses: "",
                    target: 20,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "",
                    bonuses: "",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "",
                    bonuses: "",
                    target: 100,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "",
                }
            },
            {
                id: 1,
                skillTitle: "",
                description: "",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "",
                    bonuses: "",
                    target: 20,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "",
                    bonuses: "",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "",
                    bonuses: "",
                    target: 100,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "",
                }
            }
        ],
        cascading4: [
            {
                id: 1,
                skillTitle: "",
                description: "",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "",
                    bonuses: "",
                    target: 20,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "",
                    bonuses: "",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "",
                    bonuses: "",
                    target: 100,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "",
                }
            },
            {
                id: 1,
                skillTitle: "",
                description: "",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "",
                    bonuses: "",
                    target: 20,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "",
                    bonuses: "",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "",
                    bonuses: "",
                    target: 100,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "",
                }
            },
            {
                id: 1,
                skillTitle: "",
                description: "",
                rankSituation: 0,
                active: false,
                rank1: {
                    challange: "",
                    bonuses: "",
                    target: 20,
                    step: 1,
                    score: 0
                },
                rank2: {
                    challange: "",
                    bonuses: "",
                    target: 50,
                    step: 1,
                    score: 0
                },
                rank3: {
                    challange: "",
                    bonuses: "",
                    target: 100,
                    step: 1,
                    score: 0
                },
                rank4: {
                    bonuses: "",
                }
            }
        ]
    }

*/