# ![The Game](logo.png)

Progressively generated game. Each level adds a small new feature or enemy. The objective of each level is to reach the door to the next level. The Game can be played at any stage of development because each level is a finished product. If the next level has not been created the door will show up as locked.

Players can load progress with an old-school passcode system.

Assets can be updated at any stage of the game but they may not affect previous levels.

E.g.

* Level 1: Characters are represented by stick figures.
* Level 100: Characters are 2d sprites.

Level 1 must remain as stick figures.

## The Premise

> Darkness seems to reveal more in this world than light.

The Game is set in The World, a heaven-like plane with simple objects and entities, with it slowly being consumed by darkness. Haro wakes up inside his house and finds cryptic glyphs telling him to go right. He grabs a broken sword and sets out on a quest to the right end of the world.

As Haro moves to the right, tiny bits of the world's vague lore is revealed. The world starts out minimalist and well-lighted and very slowly becomes darker and more intricate. Soon, Haro encounters foot soldiers who attack him on sight. These soliders become more and more corrupted by darkness as he pushes right. Hero cannot re-enter doors to his left, as they have been consumed by the Darkness.

Haro periodically encounters Rivald, who communicates through miming a few actions. On their first encounter, Rivald points to the left side of the screen and draws his sword to fight Haro. Once defeated, Rivald retreats to the right side.

Hero also encounters some glyphs which point left. They are the opposite color of the ones in his house. He has the option to interact with them, which makes them fade out.

## The Characters

 * Haro - the hero of the story. We don't know much about him. He seems determined to keep travelling to the right. His skills and power grows the game goes on.
 * Rivald - the rival of Haro. His motivations are also shrouded in mystery but he seems determined to stop Haro from moving to the right. He always pushes towards the left. He grows stronger with each encounter, gaining new abilities (some that Haro has, some that he has yet to learn) and new attack patterns.
 * The Writer - mysterious entity leaving the glyphs that Haro follows. These glyphs are helpful as they provide the world's tutorials.
 * The Darkness - mysterious substance that shrouds and corrupts The World. Stronger enemies have more of the Darkness wrapped around them.

## Levels

Levels introduce some kind of new mechanic and/or enemy. They can be permanent or temporary but must not affect previous levels, ever. Items that were acquired from past levels may or may not carry over to the next level depending on the current level's developer's discretion. Once an item is not carried over, it is lost forever though a "version 2" of the item may appear in later levels. This is to keep the game's continuity.

Keep in mind these are just guides, there is all the room in the world for change.

 1. ~~Walk hero from left to right into door.~~ @marksteve
 2. Jump hero over obstacle.
 3. Crouch.
 4. Destory an obstacle with a light attack.
 5. Destroy an obstacle with a jumping light attack.
 6. Perform a crouch attack.
 7. Avoid falling into spikes.
 8. Pick up a health powerup.
 9. Perform a ranged attack to clear an obstacle.
 10. Perform a crouching ranged attack.
 11. Defeat an enemy that moves from left to right and damages on collision.
 12. Defeat an enemy that moves from left to right and shoots on sight.
 13. Defeat a small number of both enemies.
 14. Defeat a boss with a simple pattern of 1 heavy attack.
 15. Perform a heavy attack.
 16. Perform a heavy jumping attack.
 17. Pick up a potion and use it.
 18. Defeat an enemy immune to ranged attack.
 19. Defeat an enemy immune to melee attacks.
 20. Defeat an enemy who can only be damaged by heavy attacks.
 21. Charge your ranged weapon and shoot an obstacle.
 22. Defeat enemy who can only be beaten by charge attack.
 23. Beat a couple of copies of the previous 3 enemies.
 24. Beat a room filled with all regular enemies.
 25. Obtain a shield.
 26. Block a melee attack.
 27. Block a ranged attack.
 28. Fight an enemy that has high damage but can be blocked but cannot be countered.
 29. Fight an enemy whose heavy attack cannot be blocked.
 30. Encounter a boss who can counter your melee attacks.
 31. Encounter his second form that can reflect ranged attacks.
 32. Counter a melee attack.
 33. Reflect a ranged attack.
 34. Encounter enemies who explode when they get too close.
 35. Encounter ranged enemies who can reflect ranged attacks.
 36. Encounter previous enemies together.
 37. Obtain a stronger weapon.
 38. Encounter a mix of previous 4 enemies.
 39. Encounter a boss who teleports behind you and stabs your back.
 40. Learn backstab.
 41. Encounter an enemy you can only defeat by backstabbing.
 42. Learn firebolt.
 43. Encounter enemies who can only be killed by magic.
 44. Encounter a mix of previous 2 enemies.
 45. Learn to wall jump.
 46. Encounter an area with ranged enemies where you must wall jump.
 47. Learn to shoot ranged weapon while sliding down on wall. (Can charge, can use magic)
 48. Encounter a boss you must fight while jumping between walls. Backstab also does a lot of damage.
 49. Obtain a suit of armor that makes you slower but immune to light attacks. You can equip/remove this at will.
 50. Encounter enemies who try to sneak up and backstab you (through your armor)
 51. Clear a room full of basic ranged and melee enemies but also with backstabby enemies.
 52. Encounter your rival: with all your skills but repetitive attack patterns. He also has a combo which is performed by mixing melee and ranged buttons with arrow keys. He has a 2 hit combo.
 53. Obtain the 2 hit combo.

## Development

```
npm install
npm start
```

