var spells_3 = [
  {
    name: "Animate Dead",
    level: 3,
    school: "Necromancy",
    casting_time: "1 Minute",
    ritual: "-",
    concentration: "-",
    components: "V, S, M",
    class: "Cleric, Wizard",
    duration: "Instantaneous",
    range: "10 feet",
    description: "(a drop of blood, a piece of flesh, and a pinch of bone dust) - This spell creates an undead servant. Choose a pile of bones or a corpse of a Medium or Small humanoid within range. Your spell imbues the target with a foul mimicry of life, raising it as an undead creature. The target becomes a skeleton if you chose bones or a zombie if you chose a corpse (the DM has the creature’s game statistics). On each of your turns, you can use a bonus action to mentally command any creature you made with this spell if the creature is within 60 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete. The creature is under your control for 24 hours, after which it stops obeying any command you’ve given it. To maintain the control of the creature for another 24 hours, you must cast this spell on the creature again before the current 24-hour period ends. This use of the spell reasserts your control over up to four creatures you have animated with this spell, rather than animating a new one. When you cast this spell using a spell slot of 4th level or higher, you animate or reassert control over two additional undead creatures for each slot level above 3rd. Each of the creatures must come from a different corpse or pile of bones."
  },
  {
    name: "Aura of Vitality",
    level: 3,
    school: "Evocation",
    casting_time: "1 Action",
    ritual: "-",
    concentration: "Yes",
    components: "V",
    class: "Paladin",
    duration: "Concentration, up to 1 minute",
    range: "Self, 30 foot radius",
    description: "Healing energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you, centered on you. You can use a bonus action to cause one creature in the aura (including you) to regain 2d6 hit points."
  },
  {
    name: "Beacon of Hope",
    level: 3,
    school: "Abjuration",
    casting_time: "1 Action",
    ritual: "-",
    concentration: "Yes",
    components: "V, S",
    class: "Cleric",
    duration: "Concentration, up to 1 minute",
    range: "30 feet",
    description: "This spell bestows hope and vitality. Choose any number of creatures within range. For the duration, each target has advantage on Wisdom saving throws and death saving throws, and regains the maximum number of hit points possible from any healing."
  },
  {
    name: "Bestow Curse",
    level: 3,
    school: "Necromancy",
    casting_time: "1 Action",
    ritual: "-",
    concentration: "Yes",
    components: "V, S",
    class: "Bard, Cleric, Wizard",
    duration: "Concentration, up to 1 minute",
    range: "Touch",
    description: "You touch a creature, and that creature must succeed on a Wisdom saving throw or become cursed for the duration of the spell. When you cast this spell, choose the nature of the curse from the following options: Choose one ability score. While cursed, the target has disadvantage on ability checks and saving throws made with that ability score. * While cursed, the target has disadvantage on attack rolls against you. * While cursed, the target must make a Wisdom saving throw at the start of each of its turns. If it fails, it wastes its action that turn doing nothing. * While the target is cursed, your attacks and spells deal an extra 1d8 necrotic damage to the target. - If you cast this spell using a spell slot of 4th level or higher, the duration is concentration, up to 10 minutes. If you use a spell slot of 5th level or higher, the duration is 8 hours. If you use a spell slot of 7th level or higher, the duration is 24 hours. If you use a 9th level spell slot, the spell lasts until it is dispelled.  Using a spell slot of 5th level or higher grants a duration that doesn’t require concentration."
  },
  {
    name: "Blinding Smite",
    level: 3,
    school: "Evocation",
    casting_time: "1 Bonus",
    ritual: "-",
    concentration: "Yes",
    components: "V",
    class: "Paladin",
    duration: "Concentration, up to 1 minute",
    range: "Self",
    description: "The next time you hit a creature with a melee weapon attack during this spell’s duration, you weapon flares with a bright light, and the attack deals an extra 3d8 radiant damage to the target. Additionally, the target must succeed on a Constitution saving throw or be blinded until the spell ends. A creature blinded by this spell makes another Constitution saving throw at the end of each of its turns. On a successful save, it is no longer blinded."
  },
  {
    name: "Blink",
    level: 3,
    school: "Transmutation",
    casting_time: "1 Action",
    ritual: "-",
    concentration: "-",
    components: "V, S",
    class: "Sorcerer, Wizard",
    duration: "1 minute",
    range: "Self",
    description: "Roll a d20 at the end of each of your turns for the duration of the spell. On a roll of 11 or higher, you vanish from your current plane of existence and appear in the Etheral Plane (the spell fails and the casting is wasted if you were already on that plane). At the start of you next turn, and when the spell ends if you are on the Etheral Plane, you return to an unoccupied space of your choice that you can see within 10 feet of the space you vanished from. If no unoccupied space is available within that rang, you appear in the nearest unoccupied space (chosen at random if more that one space is equally near). You can dismiss this spell as an action. While on the Ethereal Plane, you can see and hear the plane you originated from, which is cast in shades of gray, and you can’t see anything more than 60 feet away.You can only affect and be affected by other reatures on the Ethereal Plane. Creature that aren’t there can’t perceive you or interact with you, unless they have the ability to do so."
  },
  {
    name: "Call Lightning",
    level: 3,
    school: "Conjuration",
    casting_time: "1 Action",
    ritual: "-",
    concentration: "Yes",
    components: "V, S",
    class: "Druid",
    duration: "Concentration, up to 10 minutes",
    range: "120 feet",
    description: "A storm cloud appears in the shape of a cylinder that is 10 feet tall with a 60-foot radius, centered on a point you can see 100 feet directly above you. The spell fails if you can’t see a point in the air where the storm cloud could appear (for example, if you are in a room that can’t accommodate the cloud). When you cast the spell, choose a point you can see within range. A bolt of lightning flashes down from the cloud to that point. Each creature within 5 feet of that point must make a Dexterity saving throw. A creature takes 3d10 lightning damage on a failed save, or half as much damage on a successful one. On each of your turns until the spell ends, you can use your action to call down lightning in this way again, targeting the same point or a different one. If you are outdoors in stormy conditions when you cast this spell, the spell gives you control over the existing storm instead of creating a new one. Under such conditions, the spell’s damage increases by 1d10. When you cast this spell using a spell slot of 4th or higher level, the damage increases by 1d10 for each slot level above 3rd."
  },
  {
    name: "Clairvoyance",
    level: 3,
    school: "Divination",
    casting_time: "10 Minutes",
    ritual: "-",
    concentration: "Yes",
    components: " V, S, M",
    class: "Bard, Cleric, Sorcerer, Wizard",
    duration: "Concentration, up to 10 minutes",
    range: "1 mile",
    description: "(a focus worth at least 100 gp, either a jeweled horn for hearing or a glass eye for seeing) - You create an invisible sensor within range in a location familiar to you (a place you have visited or seen before) or in an obvious location that is unfamiliar to you (such as behind a door, around a corner, or in a grove of trees). The sensor remains in place for the duration, and it can’t be attacked or otherwise interacted with. When you cast the spell, you choose seeing or hearing. You can use the chosen sense through the sensor as if you were in its space. As your action, you can switch between seeing and hearing. A creature that can see the sensor (such as a creature benefitting from see invisibility or truesight) sees a luminous, intangible orb about the size of your fist."
  },
  {
    name: "Conjure Animals",
    level: 3,
    school: "Conjuration",
    casting_time: "1 Action",
    ritual: "-",
    concentration: "Yes",
    components: "V, S",
    class: "Druid, Ranger",
    duration: "1 Hour",
    range: "60 feet",
    description: "You summon fey spirits that take the form of beasts and appear in unoccupied spaces that you can see within range. Choose one of the following options for what appears: - One beast of challenge rating 2 or lower - Two beasts of challenge rating 1 or lower - Four beasts of challenge rating 1/2 or lower - Eight beasts of challenge rating 1/4 or lower. Each beast is also considered fey, and it disappears when it drops to 0 hit points or when the spell ends. The summoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which has its own turns. They obey any verbal commands that you issue to them (no action required by you). If you don’t issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions. The DM has the creatures’ statistics. When you cast this spell using certain higher-level spell slots, you choose one of the summoning options above, and more creatures appear: - twice as many with a 5th-level slot - three times as many with a 7th-level slot - four times as many with a 9th-level slot."
  },
  {
    name: "Conjure Barrage",
    level: 3,
    school: "Conjuration",
    casting_time: "1 Action",
    ritual: "-",
    concentration: "-",
    components: "V, S, M",
    class: "Ranger",
    duration: "Instantaneous",
    range: "Self",
    description: "You throw a nonmagical weapon or fire a piece of nonmagical ammunition into the air to create a cone of identical weapons that shoot forward and then disappear. Each creature in a 60-foot cone must succeed on a Dexterity saving throw. A creature takes 3d8 damage on a failed save, or half as much damage on a successful one. The damage type is the same as that of the weapon or ammunition used as a component."
  },
  {
    name: "Counterspell",
    level: 3,
    school: "Abjuration",
    casting_time: "Special",
    ritual: "-",
    concentration: "-",
    components: "S",
    class: "Sorcerer, Warlock, Wizard",
    duration: "Instantaneous",
    range: "60 feet",
    description: "1 reaction, which you take when you see a creature within 60 feet of you casting a spell. You attempt to interrupt a creature in the process of casting a spell. If the creature is casting a spell of 3rd level or lower, its spell fails and has no effect. If it is casting a spell of 4th level or higher, make an ability check using your spellcasting ability. The DC equals 10+ the spell’s level. On a success, the creature’s spell fails and has no effect. When you cast this spell using a spell slot of 4th level or higher, the interrupted spell has no effect if its level is less than or equal to the level of the spell slot you used."
  },
  {
    name: "Create Food and Water",
    level: 3,
    school: "Conjuration",
    casting_time: "1 Action",
    ritual: "-",
    concentration: "-",
    components: "V, S",
    class: "Cleric, Paladin",
    duration: "Instantaneous",
    range: "30 feet",
    description: "You create 45 pounds of food and 30 gallons of water on the ground or in containers within range, enough to sustain up to fifteen humanoids or five steeds for 24 hours. The food is bland but nourishing, and spoils if uneaten after 24 hours. The water is clean and doesn’t go bad."
  },
  {
    name: "Crusader’s Mantle",
    level: 3,
    school: "Evocation",
    casting_time: "1 Action",
    ritual: "-",
    concentration: "Yes",
    components: "V",
    class: "Paladin",
    duration: "1 Minute",
    range: "Self",
    description: "Holy power radiates from you in an aura with a 30-foot radius, awakening boldness in friendly creatures. Until the spell ends, the aura moves with you, centered on you. While in the aura, each nonhostile creature in the aura (including you) deals an extra 1d4 radiant damage when it hits with a weapon attack."
  },
  {
    name: "Daylight",
    level: 3,
    school: "Evocation",
    casting_time: "1 Action",
    ritual: "-",
    concentration: "-",
    components: "V, S",
    class: "Cleric, Druid, Paladin, Ranger, Sorcerer",
    duration: "1 Hour",
    range: "60 feet",
    description: "A 60-foot-radius sphere of light spreads out from a point you choose within range. The sphere is bright light and sheds dim light for an additional 60 feet. If you chose a point on an object you are holding or one that isn’t being worn or carried, the light shines from the object with and moves with it. Completely covering the affected object with an opaque object, such as a bowl or a helm, blocks the light. If any of this spell’s area overlaps with an area of darkness created by a spell of 3rd level or lower, the spell that created the darkness is dispelled."
  },
  {
    name: "Dispel Magic",
    level: 3,
    school: "Abjuration",
    casting_time: "1 Action",
    ritual: "-",
    concentration: "-",
    components: "V, S",
    class: "Bard, Cleric, Druid, Paladin, Sorcerer, Warlock, Wizard",
    duration: "Instantaneous",
    range: "120 feet",
    description: "Choose any creature, object, or magical effect within range. Any spell of 3rd level or lower on the target ends. For each spell of 4th level or higher on the target, make an ability check using your spellcasting ability. The DC equals 10 + the spell’s level. On a successful check, the spell ends. When you cast this spell using a spell slot of 4th level or higher, you automatically end the effects of a spell on the target if the spell’s level is equal to or less than the level of the spell slot you used."
  },
  {
    name: "Elemental Weapon",
    level: 3,
    school: "Transmutation",
    casting_time: "1 Action",
    ritual: "-",
    concentration: "Yes",
    components: "V, S",
    class: "Paladin",
    duration: "1 Hour",
    range: "Touch",
    description: "A nonmagical weapon you touch becomes a magic weapon. Choose one of the following damage types: acid, cold, fire, lightning, or thunder. For the duration, the weapon has a +1 bonus to attack rolls and deals an extra 1d4 damage of the chosen type when it hits. When you cast this spell using a spell slot of 5th or 6th level, the bonus to attack rolls increases to +2 and the extra damage increases to 2d4. When you use a spell slot of 7th level or higher, the bonus increases to +3 and the extra damage increases to 3d4."
  },
  {
    name: "Erupting Earth",
    level: 3,
    school: "Transmutation",
    casting_time: "1 Action",
    ritual: "-",
    concentration: "-",
    components: "V, S, M",
    class: "Druid, Sorcerer, Wizard",
    duration: "Instantaneous",
    range: "120 feet",
    description: "(a piece of obsidian) - Choose a point you can see on the ground within range. A fountain of churned earth and stone erupts in a 20-foot cube centered on that point. Each creature in that area must make a Dexterity saving throw. A creature takes 3d12 bludgeoning damage on a failed save, or half as much damage on a successful one. Additionally, the ground in that area becomes difficult terrain until cleared away. Each 5-foot-square portion of the area requires at least 1 minute to clear by hand. When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d12 for each slot level above 2nd."
  },
  {
    name: "Fear",
    level: 3,
    school: "Illusion",
    casting_time: "1 Action",
    ritual: "-",
    concentration: "Yes",
    components: "V, S, M",
    class: "Bard, Sorcerer, Warlock, Wizard",
    duration: "Concentration, up to 1 minute",
    range: "Self (30-foot cone)",
    description: "(a white feather or the heart of a hen) - You project a phantasmal image of a creature’s worst fears. Each creature in a 30-foot cone must succeed on a Wisdom saving throw or drop whatever it is holding and become frightened for the duration. While frightened by this spell, a creature must take the Dash action and move away from you by the safest available route on each of its turns, unless there is nowhere to move. If the creature ends its turn in a location where it doesn’t have line of sight to you, the creature can make a Wisdom saving throw. On a successful save, the spell ends for that creature."
  },
  {
    name: "Feign Death (Ritual)",
    level: 3,
    school: "Necromancy",
    casting_time: "1 Action",
    ritual: "Yes",
    concentration: "-",
    components: "V, S, M",
    class: "Bard, Cleric, Druid, Wizard",
    duration: "Instantaneous",
    range: "Touch",
    description: "(a pinch of graveyard dirt) - You touch a willing creature and put it into a cataleptic state that is indistinguishable from death. For the spell’s duration, or until you use an action to touch the target and dismiss the spell, the target appears dead to all outward inspection and to spells used to determine the target’s status. The target is blinded and incapacitated, and its speed drops to 0. The target has resistance to all damage except psychic damage. If the target is diseased or poisoned when you cast the spell, or becomes diseased or poisoned while under the spell’s effect, the disease and poison have no effect until the spell ends."
  },
  {
    name: "Fireball",
    level: 3,
    school: "Evocation",
    casting_time: "1 Action",
    ritual: "-",
    concentration: "-",
    components: "V, S, M",
    class: "Sorcerer, Wizard",
    duration: "Instantaneous",
    range: "150 feet",
    description: "(a tiny ball of bat guano and sulfur) - A bright streak flashes from your pointing finger to a point you choose within range then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot radius must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one. The fire spreads around corners. It ignites flammable objects in the area that aren’t being worn or carried. When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd."
  },
  {
    name: "Flame Arrows",
    level: 3,
    school: "Transmutation",
    casting_time: "1 Action",
    ritual: "-",
    concentration: "Yes",
    components: "V, S",
    class: "Druid, Ranger, Sorcerer, Wizard",
    duration: "Concentration, up to 1 hour",
    range: "Touch",
    description: "You touch a quiver containing arrows or bolts. When a target is hit by a ranged weapon attack using a piece of ammunition drawn from the quiver, the target takes an extra 1d6 fire damage. The spell’s magic ends on the piece of ammunition when it hits or misses, and the spell ends when twelve pieces of ammunition have been drawn from the quiver. At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the number of pieces of ammunition you can affect with this spell increases by two for each slot level above 3rd."
  },
  {
    name: "Fly",
    level: 3,
    school: "Transmutation",
    casting_time: "1 Action",
    ritual: "-",
    concentration: "Yes",
    components: "V, S, M",
    class: "Sorcerer, Warlock, Wizard",
    duration: "Concentration, up to 10 minutes",
    range: "Touch",
    description: "(a wing feather from any bird) - You touch a willing creature. The target gains a flying speed of 60 feet for the duration. When the spell ends, the target falls if it is still aloft, unless it can stop the fall. When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd."
  },
  {
    name: "Gaseous Form",
    level: 3,
    school: "Transmutation",
    casting_time: "1 Action",
    ritual: "-",
    concentration: "Yes",
    components: "V, S, M",
    class: "Sorcerer, Warlock, Wizard",
    duration: "Concentration, up to 1 hour",
    range: "Touch",
    description: "(a bit of gauze and a wisp of smoke) - You transform a willing creature you touch, along with everything it’s wearing and carrying, into a misty cloud for the duration. The spell ends if the creature drops to 0 hit points. An incorporeal creature isn’t affected. While in this form, the target’s only method of movement is a flying speed of 10 feet. The target can enter and occupy the space of another creature. The target has resistance to nonmagical damage, and it has advantage on Strength, Dexterity, and Constitution saving throws. The target can pass through small holes, narrow openings, and even mere cracks, though it treats liquids as though they were solid surfaces. The target can’t fall and remains hovering in the air even when stunned or otherwise incapacitated. While in the form of a misty cloud, the target can’t talk or manipulate objects, and any objects it was carrying or holding can’t be dropped, used, or otherwise interacted with. The target can’t attack or cast spells."
  },
  {
    name: "Glyph of Warding",
    level: 3,
    school: "Abjuration",
    casting_time: "1 Hour",
    ritual: "-",
    concentration: "-",
    components: "V, S, M",
    class: "Bard, Cleric, Wizard",
    duration: "Until dispelled or triggered",
    range: "Touch",
    description: "(incense and powdered diamond worth at least 200 gp, which the spell consumes) - When you cast this spell, you inscribe a glyph that harms other creatures, either upon a surface (such as a table or a section of floor or wall) or within an object that can be closed (such as a book, a scroll, or a treasure chest) to conceal the glyph. If you choose a surface, the glyph can cover an area of the surface no larger than 10 feet in diameter. If you choose an object, that object must remain in its place; if the object is moved more than 10 feet from where you cast this spell, the glyph is broken, and the spell ends without being triggered. The glyph is nearly invisible and requires a successful Intelligence (Investigation) check against your spell save DC to be found. You decide what triggers the glyph when you cast the spell. For glyphs inscribed on a surface, the most typical triggers include touching or standing on the glyph, removing another object covering the glyph, approaching within a certain distance of the glyph, or manipulating the object on which the glyph is inscribed. For glyphs inscribed within an object, the most common triggers include opening that object, approaching within a certain distance of the object, or seeing or reading the glyph. Once a glyph is triggered, this spell ends. You can further refine the trigger so the spell activates only under certain circumstances or according to physical characteristics (such as height or weight), creature kind (for example, the ward could be set to affect aberrations or drow), or alignment. You can also set conditions for creatures that don’t trigger the glyph, such as those who say a certain password. When you inscribe the glyph, choose explosive runes or a spell glyph. Explosive Runes: When triggered, the glyph erupts with magical energy in a 20-foot-radius sphere centered on the glyph. The sphere spreads around corners. Each creature in the area must make a Dexterity saving throw. A creature takes 5d8 acid, cold, fire, lightning, or thunder damage on a failed saving throw (your choice when you create the glyph), or half as much damage on a successful one. Spell Glyph: You can store a prepared spell of 3rd level or lower in the glyph by casting it as part of creating the glyph. The spell must target a single creature or an area. The spell being stored has no immediate effect when cast in this way. When the glyph is triggered, the stored spell is cast. If the spell has a target, it targets the creature that triggered the glyph. If the spell affects an area, the area is centered on that creature. If the spell summons hostile creatures or creates harmful objects or traps, they appear as close as possible to the intruder and attack it. If the spell requires concentration, it lasts until the end of its full duration. When you cast this spell using a spell slot of 4th level or higher, the damage of an explosive runes glyph increases by 1d8 for each slot level above 3rd. If you create a spell glyph, you can store any spell of up to the same level as the slot you use for the glyph of warding."
  },
];
