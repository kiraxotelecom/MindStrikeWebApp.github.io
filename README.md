# MindStrike: Number Wars (offline web app)

Developed by **Kirabo Isa Bilal**.

1. Create a GitHub repo and upload everything in this folder to the root.
2. Settings → Pages → Deploy from branch → `main` / root.
3. Open `https://<user>.github.io/<repo>/`; after one load it works offline and can be installed (Add to Home Screen).

Bump `V` in `sw.js` whenever you change files so players get the update.

## v6 changes
On-screen keypad, temperature colours + emoji, spectrum bar, juice (shake/confetti/haptics/synth sounds), XP ranks, achievements, Daily Strike with shareable emoji result, share button, auto-pause when you leave the tab, and a real offline service worker (precache + audio Range support). Bump `V` in `sw.js` after every change.

## v12 changes
**Conquest Map** (new mode, 🗺️ button on the home screen; Skirmish/Campaign/Conquest are unchanged). Four regions — Gaul, Egypt, Carthage, Rome — with 5/6/6/7 battles. Every battle has its own rules (range, attempts, weekly-style mutators, opponent head start); the last battle of each region is a named general with a signature trick (Brennus: ambush, Khafre: sandstorm, Hanno: raid), and Kiraxo is the final boss of Rome (score target, then his shield phase). Each battle earns 1–3 stars (win · combo ×3 · no powers) and bonus coins; stars plus the region general unlock the next region (⭐7 / 17 / 29). Progress is stored in `ms_pro.cp`. Bump `V` in `sw.js` after every change.

## v13 changes
**Mini Games** (🎮 button on the home screen), unlocked by XP rank: Lightning Round (Legionary), Sniper Range (Centurion), Number Duel (Optio), Arena Gauntlet (Legatus), Treasure Hunt (Imperator). Each is a full mode with its own best score, play count and mastery level (stored in `ms_pro.mg`); mastery level-ups pay bonus coins, and every run pays coins and XP. Unlock ranks are the `rk` field of the `MINI` table in `index.html`. Bump `V` in `sw.js` after every change.

## v14 changes
**The Forge** — three gear slots in the Armory (Galea helmet, Scutum shield, Gladius blade), each with 3 coin-bought levels: extra SCAN/FOCUS, extra SHIELD charges (+1 Boss attempt at L3), bonus points and a wider weak-point zone. Stored in `ms_pro.gear`. **Relics** (one-time): Spy Glass, Second Wind, Battle Standard (`ms_pro.rel`), plus the **Roman Legion Set** (4 skins). **Today's Market**: 4 discounted bundles and one gear slot on sale, drawn from the date with the same seeded RNG as the Daily Strike (`ms_pro.dsh`).
**Coin wagers** before VS matches (25/50/100, paid ×1.5/×2/×2.5 by rank; draw refunds; quitting forfeits). **Generals**: Scipio, Crassus, Brutus, Sulla each have a doctrine, a signature trick and their own taunts (`GENS`). **Friend Challenge**: 5 seeded rounds shared as `#ch=CODE.SCORE.NAME` links (works offline once cached). Bump `V` in `sw.js` after every change.

## v15 changes
Home screen redesign: six compact tiles (Conquest, Mini Games, Daily, Challenge, Armory, Quests), Hall/How-to as a small row, compact profile card, and a proper cog Settings button in a bronze ring. Bump `V` in `sw.js` after every change.

## v16 changes
**The House**: Asante, Elijah, Imran, Christine, Kirabo, Shanita, Mariam and Nana appear as Greek/Roman/Egyptian champions (Asantius, Elijahos, Imrandros, Christinea, Kirabotep, Shanitari, Mariamne, Nanaia) replacing the generals and opponents on the Conquest Map, in quick-play (`GENS`) and in the Number Duel (`DUEL`). Hall of Glory → 👑 THE HOUSE lists them and tracks a laurel per champion you beat (`ms_pro.hk`). Bump `V` in `sw.js` after every change.

## v17 changes
Settings cog moved from the top-right to the bottom centre of the home screen. Bump `V` in `sw.js` after every change.

## v18 changes
Developer credit added: "Developed by Kirabo Isa Bilal" at the bottom of Settings, plus an author meta tag. Bump `V` in `sw.js` after every change.

## v19 changes
Opponent screen redesigned to match the rest (hero + battle cards); modes renamed **Defy the Imperator** (vs AI) and **Clash of Legions** (2 players). Campaign play buttons are now a drawn gold triangle instead of the blue ▶ emoji. Attempts are shown as hearts (RISK previews the 2 hearts it will cost). RISK can no longer be armed, or spend a charge, when fewer than 2 attempts remain. Bump `V` in `sw.js` after every change.

## v20 changes
**Boss phase**: the shield layers are shared, and when the last one falls the winner is whoever dealt the most damage (exact hit +100, chip damage, weak-point strikes), not whoever broke more shields. That was invisible, so a player who broke 1 shield could be told they won. Now there is a live damage bar, the end screen lists shields broken and damage for both sides, and How to Play explains it. **Redesign** to match the rank screen: Name, Pause, Settings, How to Play, Hall of Glory, Mini Games, Quests, The House, Armory and Conquest Map. Cards, headings and buttons share one style. Bump `V` in `sw.js` after every change.

## Roadmap (none of these are built yet)
Ordered by expected impact. **The first three are next.**

1. **Relic draft runs** (best "one more game" loop). A Gauntlet mode where you pick 1 of 3 random relics before each fight, e.g. "every 3rd guess is free" or "combo bonuses doubled". Relics are kept until you lose, so every run plays differently and a loss feels like "I almost had a great build".
2. **Rematch button and near-miss feedback.** A big REMATCH button on the end screen that starts the next game instantly, and messages like "Lost by 3, so close!" when a loss is narrow. Keeps players in the game instead of quitting at menus.
3. **Streaks they don't want to lose.** Daily Strike already has a streak. Add a visible flame that grows, milestone rewards at 3, 7 and 14 days, and one streak freeze a week.
4. **More game feel.** Combo meter that builds on screen; pitch that rises with each win in a row; short slow-motion zoom on a first-try critical hit; numbers that flip or reveal when the secret is shown; a big VICTORY stamp with confetti and a quiet beat after a loss.
5. **Make the House personal.** Quests like "Beat Mariamne without using any powers" for rewards, a unique skin or title per champion, and each kid's own taunts and trick. (Needs a few details about each child to write them.)
6. **Seasonal track.** Weekly goals that fill a progress bar toward a skin or title, alongside the existing weekly rule.
7. **Friend challenges with more bite.** Show the three best scores for a challenge code, let a friend rematch with a new seed, and turn the result into a shareable picture card.
8. **Short first-time tutorial and gentle adaptive difficulty.** After 3 losses in a row, make the next game slightly easier.
