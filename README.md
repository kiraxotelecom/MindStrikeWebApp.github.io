# MindStrike: Number Wars (offline web app)

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
