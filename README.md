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

## v21 changes
**Boss phase rule**: whoever breaks more shields wins; total damage only breaks a tie (2 and 4 layer bosses can tie). Shield icons are now steel while intact, and gold (you / Player 1) or red (Kiraxo / Player 2) once broken. The damage bar was removed; the end screen shows shields broken, and the damage totals only when a tie was decided by damage. Bump `V` in `sw.js` after every change.

## v22 changes
**Clash Online** (🌐 ONLINE on the home screen): create a room, share the 5-letter code or invite link (`#room=CODE`), and duel from any network. Uses the Firebase Realtime Database (project `mindstrike-4cabd`, Belgium) with anonymous sign-in, loaded only when you open Online, so the rest of the game still works offline. The host's phone holds the secret and judges guesses (it never goes into the database), so the host must keep the app open. Rules: 5 rounds, 5 attempts, first to crack the number scores `(10 + 5 × attempts left)`, doubled on the first try; most points wins, ties go to a tiebreak round. Paste `firebase-rules.json` into Realtime Database → Rules → Publish. Service worker now ignores cross-origin requests. Bump `V` in `sw.js` after every change.

## v23 changes
Clash Online now has a **mode menu**. **Duel of Legions** (strict turns, 20s per turn, shared hints, the starting player alternates each round, a timeout costs an attempt) and **Race for the War Code** (both guess at once with private hints, 3 rounds, 1 to 100). Match flow, scoring and the host-holds-the-secret design are unchanged. Bump `V` in `sw.js` after every change.

## v24 changes
**Secrets no longer repeat a digit** (11, 22, 77, 111...) in the main game, mini games and online (`rndS` helper). **Relic draft** between online rounds: pick 1 of 3 of Second Wind, Free Strike, Golden Laurel, Sharpshooter, Oracle, Compass, Time Lord (duel only), Last Laurel; they last the whole match. **Taunts**: six one-tap messages (fixed list, no typing). **Family record**: head-to-head wins per pair of names, saved on each phone and shown on the Online menu and the match-over screen. Bump `V` in `sw.js` after every change.

## v25 changes
**Clash Online upgrade.** (1) **Connection alerts**: a red banner when you go offline, and when your rival drops ("Shanita lost connection · waiting 30s"). Presence is tracked in the room (`pres/h`, `pres/g`, cleared by the server on disconnect); the turn timer pauses while anyone is away, and after 30s the match ends (host: back to the lobby, guest: back to the menu). The screen is kept awake during matches (Wake Lock). (2) **Rising ranges** (option on the Online menu): each round the range grows, e.g. Duel 1-20, 1-50, 1-100, 1-250, 1-500 with more attempts and a points multiplier (x1.5, x2 in the late rounds). (3) **Sealed Scrolls**, a third mode: each player seals a number for the other, then both race to crack the number their rival sealed. The setter's phone judges the guesses and watches them close in live. Secrets never touch the database; only a commit hash does, and the number is revealed at round end and checked against it. (4) **Powers online** (option): SCAN, FOCUS and MARK, one per round, -5 pts if you win that round; they only give information, so they cannot change attempts or scores. `firebase-rules.json` is unchanged. Bump `V` in `sw.js` after every change.

## v26 changes
**No more "7 — 7" giveaways.** The known-range display (main game, boss phase, daily/challenge, mini games, SCAN messages and online SCAN) now shows "🎯 Almost there!" once only 1 or 2 numbers are left, instead of printing the exact answer. Bump `V` in `sw.js` after every change.

## v31 changes
**Conquest Map star goals.** The fixed "combo ×3" star is gone: in short battles (e.g. target 15) two solved rounds already reach the target, so the star could never be earned. Every battle now has its own goal (`OBJS` in `index.html`): Combo ×n, Flawless, Swift (win within n rounds), Dominant (win by n+), Sharp (solve in ≤ n guesses), Heat-seeker (n blazing-hot guesses). `objOf()` re-checks each goal against that battle's target, attempts and score multipliers and lowers or swaps any goal that could not be reached. The goal shows on the briefing, as a live chip above the board, and on the result screen. Saved stars are unchanged.
**4 new Mini Games**: 🔐 Codebreaker (Hastatus), 🔮 Oracle’s Sequence (Signifer), 🧠 Echo Scroll (Tribune), 🃏 Fate’s Cards (Proconsul). Now 9 in total. Bump `V` in `sw.js` after every change.

## v32 changes
**Worlds** (Armory → 🌍 WORLDS): buyable themes that keep every rule, save and rank and change only the look and the words. The first is **Neon Grid** (cyber); Roman Empire stays the free default. Switching reloads the app once.
How it works: (1) the stylesheet's bronze/gold colours now follow `--hs` (hue shift) and `--ss` (saturation scale), so a world recolours the whole UI by setting two variables; background art is tinted with `--wtint`/`--wblend`, images with `--wimg`. Heat colours (hot/cold hints) are not shifted, so the game stays readable. (2) Words are themed on screen only, by a lexicon of word pairs per world (`lex`/`emo` in `WORLDS`), so names, saves and game logic are never altered. The House champions screen is left Roman (`data-nx`).
**Adding a world:** add an entry to `WORLDS` (id, name, icon, price, blurb, `lex`, `emo`) and one `html.wd-<id>{…}` CSS block. Keep replacement words free of other lexicon keys. Roman-only for now: music, background art and the House champions. A world that needs its own art can later set `--bg`-style image variables the same way.
Bump `V` in `sw.js` after every change.

## v33 changes
**Second world: Shogun’s Realm** (feudal Japan, 600 💰): ink-black panels, crimson tinted art, a Japanese serif font, 侍 in place of SPQR, and its own ranks (Apprentice → Ashigaru → Bushi → Samurai → … → Shogun), regions (Ezo, Tottori, Nagasaki, Edo), battles, generals’ titles and gear (Kabuto, Tate, Katana). It is one `WORLDS` entry plus one `html.wd-samurai` CSS block. Fix: the Worlds shelf and its switch toast are exempt from the word list (`data-nx`), so "Roman Empire" is never renamed inside another world. Bump `V` in `sw.js` after every change.

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

## v28 changes (includes v27)
**Ranks**: 13 instead of 6 — Recruit, Velite, Legionary, Hastatus, Centurion, Signifer, Optio, Tribune, Legatus, Praefect, Proconsul, Consul and **Imperator** (still the highest, 2500 XP). Old thresholds are unchanged and old rank-reward claims move to the matching new rank (`ms_pro.rv`). Every rank has a reward (`RR`); mini games still unlock at Legionary / Centurion / Optio / Legatus / Imperator.
**Quests**: 18 daily and 16 weekly quests (4 daily + 3 weekly drawn), many pay items; new types: Conquest, mini games, Daily Strike, wagers, blazing guesses, market buys. Claiming a full set pays a **Daily / Weekly Sweep** bonus.
**Market**: prices are per item (bigger upgrades and stronger power-ups cost more; rank does not change prices). Five daily offers from a bigger pool, five War Chests, more skins / Kiraxo skins / arenas, three permanent upgrades (equip one), relics Merchant's Seal (+10% coins) and Scribe's Quill (+10% XP).
**Skins you can see**: an equipped player skin gives a big glowing emblem in your HUD, a coloured aura around the arena, an entrance splash at match start, and your emblem in every victory burst. Kiraxo skins show a big emblem on his HUD and a splash. In the Armory tap a skin or arena icon to preview it; equipping plays the splash.
**Powers**: at most 2 per round (`MAXPOW`). Tap a lit-up power again (before your next guess) to take it back and get the charge refunded. Works for Secrets and Desperation too.
Bump `V` in `sw.js` after every change.

## v29 changes
Home screen reordered: logo → rank/XP card → six tiles → **ENTER THE ARENA** (between Armory/Quests and the Hall/How-to/Online row). New **install helper** card for visitors (device-aware: iPhone Safari/other, Android Chrome/Samsung/Firefox, in-app browsers, desktop; real INSTALL button when the browser offers it; hides when dismissed or installed). New **daily reminder** (opt-in on the home card and in Settings): a service-worker notification when new Daily Strike numbers are available and the player hasn't finished them, via Periodic Background Sync (installed Chrome/Edge on Android). Bump `V` in `sw.js` after every change.

## v30 changes
**First-time tutorial**: an 11-step spotlight tour of the home screen (rank card, each tile, Enter the Arena, Hall/How/Online, Settings) that starts once for brand-new players (no matches, no XP; flag `ms_tour`) and can be replayed from **Settings → Help → Replay the tutorial**. The install card is hidden while the tour runs. Bump `V` in `sw.js` after every change.


## v34 changes
- Fixed `Cannot access 'worldsH' before initialization` (Worlds runtime ran in <head> before PRO/PR existed; moved into the main script, WORLDS data stays in <head>).
- Settings: redesigned music / sound-effects sliders (no more clipped row).


## v35 changes
- New world: ICE · FROSTLANDS (Norse vocabulary: Jarl, Fjord, Valhalla, Frostlands). Glacier blue, white and silver, light-first (turns on light mode the first time it is equipped).
- Light mode is its own switch (Settings > Look > Brightness) and works in every world: Roman = parchment and ink, Shogun's Realm = washi and red seals, Neon Grid = pale glass, Ice = white and glacier blue with deep navy text.
- Technique: every hsl() lightness runs through --lt and the black overlays through --k, so future worlds get a light mode for free (just add html.light.wd-<id>{...} variables).


## v36 changes
- World art: Ice, Neon Grid and Shogun's Realm each get their own menu/gameplay background (img/<world>_menu.webp) and boss background (img/<world>_boss.webp). The old colour tint is off for these worlds so the art keeps its own colours. Roman keeps its original art.
- World music: Viking (Ice), Cyber Future (Neon Grid) and the Japan loop (Shogun's Realm) play on the menus and during normal gameplay. Boss fights still use the original boss.mp3 in every world.


## v37 changes
- Two new worlds (600 💰 each, Armory > 🌍 WORLDS):
  - **BUGANDA · KINGDOM** (royal green and gold). Ranks run Omukopi, Omuvubuka, Omumbowa, Omulwanyi, Omukungu, Omwami, Omutaka, Ssaza head, Omulangira, Omuwanika, Omulamuzi, Katikkiro, Kabaka. Regions are Buddu, Busiro, Mawokota and Mengo, and the badge reads BUGANDA instead of SPQR.
  - **GOLDEN SANDS · ARABIA** (sunset gold and black). Ranks run Mujannad, Jundi, Faris, Bahlawan, Naqib, Alamdar, Muqaddam, Aqid, Amir, Wali, Wazir, Grand Wazir, Sultan. Regions are Najd, Hejaz, Hadramawt and Baghdad, and the badge reads سلطان.
- Each world has its own menu art (img/<world>_menu.webp), boss art (img/<world>_boss.webp) and menu/gameplay music (audio/theme_<world>.mp3). Boss fights still use boss.mp3.
- Both have a light mode (html.light.wd-buganda / html.light.wd-gold) and are in the offline cache. `V` in sw.js is now mindstrike-v37.
- Technique: same recipe as v36, one WORLDS entry + one CSS block + the art/music files. bg() now matches `wd-(cyber|samurai|ice|buganda|gold)`.

## v38 changes
- **Shogun's Realm redesigned** so it no longer reads as Roman: midnight indigo panels, sakura-pink accents, silver double-line borders, flat square-cornered lacquer buttons, a seigaiha wave pattern, and the 侍 badge as a red hanko seal. Vermilion is now reserved for the seal and the boss phase. Light mode is moon-white with plum accents.
- **Boss phase colour is per world.** The five red spots (accent, button gradient, screen tint, pulsing edge glow, banner flicker) now read variables with the old red as default. Per world: Roman crimson, Shogun vermilion, Neon Grid ultraviolet magenta (cyan glitch split on the banner), Ice fire orange, Buganda blazing amber on near-black green, Golden Sands royal violet. To add one for a new world set --bA, --bS, --bR, --bB, --bV, --bG1, --bG2, --bT (and --bAL, --bSL for light mode) on its html.wd-<id> block.
- `V` in sw.js is now mindstrike-v38.

## v39 changes
**Wager is one pop-up button.** "Place your wager" no longer takes a block of the opponent screen: a single 🎲 button shows the current stake (e.g. "Wager 50 💰 → win 100") and opens a small pop-up; tapping an amount picks it and closes the pop-up.
**Online: limited chat + on-screen buttons.** Quick chat is now six emoji buttons in one row (🐢 Slow! · 😬 Close! · 👏 Nice! · 👑 Bow! · 🍀 Lucky! · ⚔️ GG), shown to your rival as a short floating bubble, with a 2.5s cooldown. Online guesses use the same on-screen keypad as the main game, so the phone keyboard no longer covers the screen. Slot order is unchanged, so v38 and v39 phones still understand each other.
**The House wears each world's names.** `KN` (names), `KT` (titles) and `KC` (labels) in `<head>` map every Roman form used in the game (`KV`) to a name per world, e.g. Buganda, Neon Grid, Shogun's Realm, Frostlands, Golden Sands. In **Buganda, ASANTE and KIRABO keep their real names**; Eliya and Kirisitina are the Luganda forms of Elijah and Christine, and Imran, Shanita and Mariam become Mubiru, Namuli and Nakibuuka. The House screen, campaign nodes, quick-match generals and toasts all follow. Bump `V` in `sw.js` after every change.

## v40 changes
- **Plain English for kids.** Only **Skirmish** was replaced: the Quick mode is now **Quick Match** and the Conquest Map battle "Harbor Skirmish" is "Harbor Fight" in every world. Campaign, Conquest, Defy the Imperator, Clash of Legions, Attempts and Victory keep their original wording.
- **Opponent, name and rank screens are centred** (they used to be pinned to the top, leaving half the screen empty).
- **A design language per world** (Roman and Shogun unchanged): **Neon Grid** = HUD corner brackets, scanline glass, slanted action bars, hex badges, glitch heading. **Ice** = frosted blue shards with hanging icicles, crystal gems, diamond rune buttons, drifting snow. **Buganda** = woven bark-cloth diamond bands, shield badges, pill buttons, rising embers. **Golden Sands** = leaf corners with a double-line frame, eight-point-star lattice, star medallions, pointed-arch buttons, drifting gold dust. All in the v40 block at the end of the CSS; ambient particles hide during matches and respect reduced-motion. `V` in sw.js is now mindstrike-v40.

### v40b
- Online menu: **Family record** and **Match options** are now two small buttons that open pop-ups, so Join Room fits on screen without scrolling.
- Power buttons are smaller in the arena and in online matches.
- Online secret number box redesigned as a vault plate that glows once a number is entered.
- Arena: the opponent intro pop-up (e.g. Mariamind) is removed. Remaining toasts (power-up explanations) now sit at the very top, above the timer, in a smaller size.

### v40c
- **Theme prices by beauty:** Ice 3,000 · Neon Grid 3,800 · Buganda 5,200 · Golden Sands 6,400 · Shogun's Realm 8,000 coins (already-owned worlds stay owned).
- **Coins are slower to earn:** every coin reward (matches, conquest, mini games, daily strike, challenges, daily chest, rank rewards, weekly rewards) is multiplied by `COINX` (0.6, set next to `PR`). Change that one number to make coins easier or harder.
- **Easy / Medium / Hard** are back on the rank cards.
- **Online pad:** number box, keypad and powers now sit together in one themed card (world ornament on top), powers below the keypad.
- **Online wording:** "YOUR SHOT" / "<name> IS GUESSING", "<name> is thinking…"; the "Pick a number from X to Y" line is gone because the range is already beside the round. Relics are now **Boosts**: Extra Attempt, Free Guess, Bonus Points, Lucky Shot, Odd or Even, Which Half?, Extra Time, Safety Points.

## v49 changes
- **Conquest star fix**: a "win N rounds in a row" goal also counts when you win the whole match with no failed round in fewer than N rounds (checked at match end only; the live goal chip is unchanged). The SWIFT goal now measures the round the target was reached, not rounds spent in the shield phase.
- **Region bosses**: the last battle of Gaul, Egypt and Carthage now plays the shield phase like Kiraxo's, with the general's own name on the intro and banner, one extra shield layer, and a signature: Asantorix ambushes (equal swings plus a damage head start), Kirabotep's sandstorm keeps jamming hints every 3rd round, Imrandros steals 30 damage whenever he breaks a shield. Per-region data lives in `CAMP[].gen` (`s`, `ly`, `tr`). `V` in sw.js is now mindstrike-v49.

## v50 changes — wagers
- **Rank-unlocked stakes**: 250 at Centurion (rank 4), 500 at Legatus (rank 8), ALL-IN at Consul (rank 11, needs 600+ coins, capped at 10,000). Stakes above your balance stay disabled.
- **Side-bets** (only after picking a stake): No Powers +0.5×, Swift +0.5× (win at or under the match's normal pace, `wbN()`), Flawless +1×. A missed side-bet only loses its bonus. Swift is dropped for Endless and Last Stand (no round pace). A live chip shows side-bet progress during the match.
- **Insurance**: costs 10% of the stake up front, returns half the stake on a loss (not for all-in). Restarting a match refunds the fee.
- **Rake**: the arena keeps 5% of the winnings (profit above the stake, minimum 1 coin) — the coin sink. Constants: `WM, WS, WR, ALLR, RAKE, INS_FEE, INS_BACK, WB`.
- Not in this version: double-or-nothing and Clash Online wagers. Conquest stays wager-free. `V` in sw.js is now mindstrike-v50.

## v51 changes
**Daily & Events hub.** The Daily tile is now **DAILY & EVENTS** and opens a hub with two cards. ☀️ **Daily Strike** is unchanged (streak, freezes, board). 🏟️ **Weekly Event** is a global challenge that runs Monday to Sunday (device-local dates) with a rotating theme: Gauntlet, Blind, Prime, Sniper (`EVS`). Everyone plays the same seeded numbers (seed = week + day + run number). **3 runs a day** (`EV_PLAYS`; a run is spent on its first guess); your best run of each day counts, the **week total** (max 3500) decides the final rank. Players see today's best + rank and week total + rank, and a leaderboard with Today / Week / Daily Strike tabs. Finished runs pay small coins + XP; the next week the hub offers a rank reward (1st, top 3, 10, 25, 100, participation). Scores are stored at `events/<week>/day/<date>/<uid>` and `events/<week>/total/<uid>`; **publish the updated `firebase-rules.json`** (adds the `events` branch, scores can only go up). Offline runs sync when you reconnect. Bump `V` in `sw.js` after every change.

## v52 changes
**Bonus run**: after the 3 free Weekly Event runs you can buy **one bonus run a day** (💰 `evCost()`, 400 × the coin factor) from the hub or the end screen (`EV_PLAYS`, `evCanBuy`). **Event quests**: a fixed weekly quest "Play 6 Weekly Event runs" (`id:'wev'`, always present), plus pool quests "Play a Weekly Event run" (daily) and "Score 300+ in one Weekly Event run" (weekly). Bump `V` in `sw.js` after every change.

## v53 changes
**Fixed event clock**: the Weekly Event week and day now follow **East Africa Time** (Monday 00:00 EAT to Sunday 24:00) for every player, using Firebase's server clock offset (`.info/serverTimeOffset`, cached in `ms_off`; falls back to the phone clock when never online). The countdown is on the hub and on the home tile. **Bonus runs**: up to 2 a day at 900 then 1800 coins (`EV_BUY`; the currency lives in `EV_SYM/evBal/evSpend`, so switching to gems later is a small change). **Badges**: rank 1 earns "👑 Week N Champion" (shown on the profile card), ranks 2-3 a Podium badge; Week 1 is the week of 9 Nov 2026 (`EV_BASE`). **Rewards**: a "played 3+ days" tier for players outside the top 100. **Name filter** (`evBad`, lists `EV_BSUB` / `EV_BWORD`) hides rude names on both boards and blocks them from being written. Bump `V` in `sw.js` after every change.

## v54 changes
**Boss skins**: five new Kiraxo skins in the Armory (KIRAXO SKINS) drawn from the boss portraits: Kabaka Kiraxo (Buganda), Sultan Kiraxo (Golden Sands), Viking Kiraxo (Frostlands), Shogun Kiraxo (Shogun's Realm) and Cyber-God Kiraxo (Neon Grid). Portraits live in `img/ks_<world>.webp`, the colour glow is `KSC`, the table is `KSI`. Equipped, the portrait sits on Kiraxo's HUD and in the entrance splash.
**Arena Trials**: the home tile "Daily & Events" is now **ARENA TRIALS** and opens a chooser with two cards, Daily Strike and Weekly Challenge, each with its own screen (`s-dstrike`, `s-weekly`). The Today's Board button moved from the home screen to the Daily Strike screen. "Weekly Event" is now "Weekly Challenge". The blue numbers emoji is gone from the tile, and Prime Week uses an abacus. Bump `V` in `sw.js` after every change.

## v55 changes
**New game icon**: the "Champions of History" artwork is now the app icon (`icon-192.png`, `icon-512.png`, plus a padded `icon-maskable-512.png` so round Android masks don't crop the title). The manifest lists them as separate `any` and `maskable` icons.
**Plainer mini game words**: Forum Trader is now **Market Change** (jars and coins, no amphorae/denarii), Rune Stones is **Stone Sums**, Oracle's Sequence is **Next Number**, Echo Scroll is **Memory Echo**, Arena Gauntlet is **Non-Stop Challenge**, Fate's Cards is **Higher or Lower**, and "the general" is "a rival". Locked mini games now also show the XP needed.
**Stone Sums timer**: much slower, 30s on round 1 shrinking to a 16s floor (was 14s down to 5s). Other mini games are unchanged; a world game can set its own `tf:[start,min,roundsPerSecond]`.
**Back button at the bottom centre** on every screen that has one, matching Settings (home) and Pause (in game). Those screens now have more room at the top. Bump `V` in `sw.js` after every change.

## v57 changes
- **Fixed: Echo (and Cards/Oracle/Stone Sums) froze after losing all lives.** The revive pop-up shared `id="mgRv"` with the LIVES counter, so the pop-up never appeared and the results screen never opened for anyone holding 3+ gems. The pop-up is now `#mgRvPop`.
- **Weekly Challenge:** 1 free run a day (was 3). Extra runs (max 2 a day) cost 💎 3 then 💎 5 gems.
- **No quitting Daily Strike / Weekly runs:** after the first guess, leaving the screen, pressing back, closing or refreshing ends the run with the score so far (back asks for confirmation). Progress is saved each round, so a killed tab is settled on the next launch.
- **XP slowed:** matches, mini games, Daily Strike, Weekly runs and friend challenges give half the XP (`XPF` constant near `RVC`).

## v56 changes
**Gems** 💎: a rare, earn-only second currency (no purchases, so online play stays fair). Stored as `PRO.gems`; one-time payouts are tracked in `PRO.gm`. `gemSync()` is idempotent and runs from `profUI()`: it pays rank-ups (1 to 8 gems per rank), mini game mastery levels (1, or 2 at L5, 4 at L10), each region three-starred (5) and each region boss cleared (2). Existing players get all of that retroactively as a one-time welcome gift. Other sources: Daily Strike streak 3/7/14/30 days (1/2/4/8), achievements (1; Boss Breaker 3, Conqueror 5), daily sweep (1), weekly sweep (3), first Weekly Challenge run each day (1).
**Gem Vault** (first tile in the Armory): Streak Freeze (3), Phoenix Token (2), 2× Armory Pack (3), 2× Boss Bane (3), Double Boost (4), plus gem-only skins Diamond Guard (30) and Crystal Kiraxo (40). A SHOP row with a 7th field (gem price) is gem-only and lists in the vault.
**Continue** in mini games: when a run ends by running out of lives (Memory Echo, Next Number, Higher or Lower and the six world games) a player with 3 gems can continue once with 1 life.
**Backup & Restore** (Settings): Save file / Copy code / Restore. The backup is the `ms_*` progress keys (`ms_pro`, `ms_ach`, `ms_lb`, `ms_set`, `ms_fam`, `ms_oopt`, `ms_tour`) as a checksummed `MS1.` code. Restore validates it, keeps the previous progress under `ms_undo` (one-step undo) and reloads. Device-only keys (`ms_inst`, `ms_rem`, `ms_remx`, `ms_off`) are not included. Progress always stays under the site address, so keep the repo and URL the same. Bump `V` in `sw.js` after every change.

## v58 changes
- **Weekly Challenge:** the play button no longer says "1 of 1 runs left" when you only have one run; the count shows only when there are several runs.
- **Conquest daily limit:** 5 free Conquest Map battles a day (local midnight reset), counted when a battle starts (including Fight Again / Replay). After that an "Out of battles" pop-up offers one more battle for 2 💎. The map header and each battle briefing show battles left. Constants `CQ_FREE`, `CQ_COST` sit next to `RVC`; state is `PRO.cq` (`d` day, `n` used, `x` extra bought, `g` gems bought with coins today).
- **Gems can now be bought with coins:** Gem Vault, "BUY A GEM", 3000 💰 each, max 3 a day (`GEM_COIN`, `GEM_COIN_DAY`). The out-of-battles pop-up also offers it when you are short on gems. Note: gems also buy extra Weekly Challenge runs, so coin-bought gems can add up to 2 extra runs a day there too.
- Bump `V` in `sw.js` after every change (now `mindstrike-v58`).

## v59 changes
- **Roman world texture:** the default Roman look now has a stone-grain texture on cards, battle rows, mode buttons, option chips, home tiles and the PLAY button, Greek-key (meander) border strips, thin inner double-line frames, squared corners, ringed medallions and a Greek-key line under screen headers. It is one CSS block (`ROMAN EMPIRE` section), scoped with `html:not([class*="wd-"])`, so the other worlds are untouched. Texture colours follow the light/dark variables. Bump `V` in `sw.js` after every change (now `mindstrike-v59`).


## v62 changes
**Astral Dominion** (7th world, Worlds tab in the Armory). Not sold for coins: needs rank PROCONSUL and 120 💎 (`gem` and `rk` on its `WORLDS` entry). Deep-indigo space with slow aurora and drifting stars, constellation-framed cards, star-metal buttons, planet home tiles with orbit rings, a supernova + star-shower victory (`supernova()`), eclipse boss shields, and its own music (`audio/theme_astral.mp3`). Kiraxo becomes the Void Eater (free skin on purchase), and the eight kids become Asantaurus, Elijaries, Imrapisces, Christilibra, Kiraboleo, Shanitaquarius, Mariamscorpio and Nanagittarius (`KN.astral`). First exclusive mini game: **Orbit Lock** (`olInit`), a real-time timing game. Constellation Connect and Gravity Well are planned. Bump `V` in `sw.js` after every change.


## v63 changes
Astral Dominion gets two more exclusive mini games, **Gravity Well** (`gwInit`, higher/lower with a planet pulled toward the hidden number, 5 wells) and **Constellation Connect** (`ccInit`, tap numbered stars smallest to largest before they fade), plus four gem-priced Astral player skins (Comet Rider, Nova Guard, Nebula Warden, Eclipse Knight) that only Astral Dominion owners can buy. Bump `V` in `sw.js` after every change.


## v64 changes
Astral Dominion darkened: dark star-metal buttons, deep-indigo planet tiles, dim stars and aurora, darker backdrops, and the warrior-name card styled to match. Bump `V` in `sw.js` after every change.

## v65 changes
**Secrets rework.** The Secrets button is hidden on Easy. Secrets no longer cost SCAN charges: **The Omen** is free once per match, and **Battle Sense, Battle Range, Secret Trait and Last Mark** each need one Scroll (`PRO.inv['s:DIRECTION' | 's:RANGE' | 's:PROPERTY' | 's:DIGIT']`), bought in the Armory (30 / 50 / 60 / 140 coins) or won from rank rewards, Daily and Weekly sweeps and weekly rank prizes. Each secret can be used once per match however many Scrolls you own; taking a secret back refunds the Scroll. 2-player matches allow only The Omen. Daily Strike and the Weekly Challenge have no powers at all. SCAN Cache is now only the SCAN power. The Light/Dark **brightness setting was removed** and the game is always dark (a saved light setting is ignored). Bump `V` in `sw.js` after every change.

## v66 changes
**Battle Friends.** The Challenge tile is now **BATTLE FRIENDS** and opens a hub screen (`s-friends`): one name field (`S.n1`, shared by Clash Online and Friend Challenge), **Live Duel** (opens Clash Online), **Send a Challenge** (the 5 seeded rounds and share link) and a **Join a friend** box. A pasted room link or challenge link opens the right place automatically; for a bare code you tap *Live room* or *Challenge*. Back from Clash Online returns to the hub. The Online button is gone from the home screen; **Settings** (⚙️ SETTINGS) now takes its place in the bottom row and the round cog button was removed. Invite links (`#room=` and `#ch=`) work as before. Bump `V` in `sw.js` after every change.

## v67 changes
**Coins a bit more lenient:** `COINX` raised from .6 to .8, so every coin reward is about a third bigger; prices are unchanged. **Gems buy the important things:** the five coin worlds are now gem-priced (Ice Frostlands 30, Neon Grid 40, Buganda 55, Golden Sands 65, Shogun's Realm 80; Astral stays 120 and rank Proconsul), the Imperial (12) and Onyx (8) arenas, and the Scholar's Chest (7) and Warlord's Chest (9). Worlds and items players already own stay owned. How to Play now has **Battle Friends** and **Coins & Gems** sections. Bump `V` in `sw.js` after every change.

## v68 changes
**First-try gems:** hitting the secret number on your very first guess now pays **1 💎 gem** in every mode (Quick, Campaign, Conquest, Eternal, Last Stand, boss shields, 2-player), through `gems(1,'🎯 First-try hit')` next to the `award()` call in the guess handler. A bullseye near-miss does not count, and the seeded runs (Daily Strike, Weekly Challenge, friend challenges) are left out because their numbers repeat. **Gem price:** buying a gem with coins is now **350 💰** (`GEM_COIN`, was 3000); the limit is still `GEM_COIN_DAY` (3) a day. Help text and Gem Vault text updated. Bump `V` in `sw.js` after every change (now `mindstrike-v68`).

## v69 changes
**First-try gems skip Easy:** the 1 💎 for a first-try hit is paid on every difficulty except Easy (`G.d!=='Easy'` in the guess handler), because Easy's 1–10 range made it too easy to farm. Help text updated. Bump `V` in `sw.js` after every change (now `mindstrike-v69`).

## v70 changes
**The Colosseum** (the Weekly Challenge, renamed everywhere in the UI). The week is now a ladder: ranges grow every day by a multiplier on each round's upper bound (`EV_DIFF`: Mon Warm-up ×0.4, Tue Easy ×0.55, Wed Steady ×0.7, Thu Tough ×0.85, Fri Fierce ×1, Sat Brutal ×1.25, Sun Finale ×1.5; `evRng`, `evDw`). **Sunday is the Finale:** the hardest ranges and every round pays double (`evMul`), so a Sunday run is worth up to 1,000 and the week maximum is **4,000**. The hub shows a 7-day strip (today highlighted, each day's best, 👑 on Sunday) and a line explaining today's tier; the run intro and end screen show the real maximum (`D.mx`, `E.last.mx`). **Publish the updated `firebase-rules.json`** (day score ≤ 1000, week total ≤ 4000), or Sunday scores above 500 and week totals above 3500 will be rejected. Bump `V` in `sw.js` after every change (now `mindstrike-v70`).

## v71 changes
**Ghost rivals.** The Colosseum boards (Today, Week, Daily Strike tabs) and the Daily Strike board now fill up to 10 rows with labelled 👻 ghosts, so a quiet board still feels like a race (`ghostMerge`, `boardRows`, `ghostNote`). Ghosts exist only on the player's screen, are never written to Firebase, show no rank number, do not change real ranks (the hub rank text and the end-of-week reward still use real players only) and each real player pushes one ghost off the board. Scores are built around the player's own score: two a little above, the rest between about 35% and 105% of it (or around 30% of the maximum before the player has played), capped at 92% of the maximum. **Names reshuffle every day** (Today and Daily boards) **and every week** (Week board), seeded by the date so they stay steady while that day or week lasts; pools are `GH_F` (names) and `GH_E` (optional epithets). Bump `V` in `sw.js` after every change (now `mindstrike-v71`).

## v72 changes
**Ghost rivals, tweaked.** The long explanation under the boards is gone; ghosts keep their 👻 marker and a one-line "👻 = ghost rival" key. English first names (Liam, Emma, Grace…) were added to the name pool `GH_F`, so each day's and week's reshuffle mixes Ugandan and English names. When ghosts are ahead of a real player's row, the board says how many ("2 ghost rivals ahead of you. Catch them!") instead of giving ghosts a rank number, so the rank shown to real players always matches the rank that decides rewards. Bump `V` in `sw.js` after every change (now `mindstrike-v72`).

## v73 changes
**Race the ghosts.** Each board's first 5 ghosts are now a stable field for the day (Today / Daily) or week: their scores no longer follow the player's score but sit at fixed shares of the board's maximum (two strong ones at 72–90%, the rest 20–70%, capped at 92%), so "beat the ghosts" is a real goal. Finishing a Colosseum run or the Daily Strike pays 💰 `cx(4)` for each of those 5 ghosts you newly beat that day (`ghostRace`, state in `PRO.gh`: `n` lifetime ghosts beaten, `d` best count per board and day), and the end screens show "Ghosts beaten x/5". The profile card has a new 👻 ghosts-beaten counter, the Colosseum hub says "Race the ghosts", and the board key now reads "👻 = ghost rival · beat them for bonus coins". Bump `V` in `sw.js` after every change (now `mindstrike-v73`).

## v74 changes
**Race a real player.** Daily Strike and Colosseum runs now record the tries per round (`D.rs`; positive = solved in n tries, negative = missed) and save them as an extra string field `r` (like `3,-7,2,4,1`) on the board record (`daily/<date>/<uid>` and `events/<week>/day/<date>/<uid>`; for the Colosseum it is the day's best run, `E.d[k].r`). A new **👤 RACE A REAL PLAYER** button (Colosseum hub, and Daily Strike while today's run is unplayed) picks a recorded run from today's board with the same number of rounds (`raceFind`): the nearest one at or above your best score, or the middle of the board if you have no score yet. While you play, a strip under the info line shows the rival's points so far against yours (`gp`), and the end screen says whether you beat them (`raceRes`; a win pays 💰 `cx(8)`). Real people only, shown with their board name. Friend challenges and Live Duel are not included (Live Duel picks fresh random numbers each time). **Publish the updated `firebase-rules.json`** (adds the `r` string field, max 60 characters). Bump `V` in `sw.js` after every change (now `mindstrike-v74`).

## v75 changes
**Astral Dominion premium pass** (CSS only, all inside the `v75` block after the v62-v64 Astral rules; the `:not(#z)` in the selectors just raises specificity above the older Astral rules). **Planet tiles:** each home tile is now a glass orbit capsule with its icon as a real sphere: lit highlight, dark limb shading, banded surface with blotches that slide slowly to fake rotation (`astRot`), and either a tilted gold/violet/pink **ring** (Arena Trials, Battle Friends, Quests) or an orbiting **moon** (the rest); planets keep their own colours (`--pl1/--pl2`). Tiles bob gently, a light sweep crosses them, and hover lifts and lights them. **Buttons** (options, menu buttons, sub-buttons, CTAs): star-metal fill with an animated aurora-gold edge, leaf-blade corners, hover glow; selected buttons get a gold edge; the PLAY button breathes with a gold-violet orbit edge. Everything stops under `prefers-reduced-motion`. Bump `V` in `sw.js` after every change (now `mindstrike-v75`).

## v76 changes
**Capital first letters.** The small captions under home tiles and cards and on the profile stats (Daily ready, All done today, New numbers today, Rewards, Streak, Wins, Medals, Gems, Ghosts, Live or by link, Boss fight, Best scores, Full rules and similar) now start with a capital letter in the text itself. A CSS fallback (`::first-letter` on `small` captions, `.bm-sub` and `.bm-kicker`) capitalises any plain caption that still starts in lower case. Captions that begin with an emoji or symbol need the capital in the text. Bump `V` in `sw.js` after every change (now `mindstrike-v76`).


## v77 changes
**Gem Vault**: coin-to-gem purchases are now 5 a day instead of 3 (`GEM_COIN_DAY` in `index.html`). **Astral Dominion** now costs 40 💎 (was 120) and unlocks at rank Proconsul (8,500 XP, with its trial): change `gem` and `rk` in the `astral` entry of the worlds table. **Astral-only visuals** (nothing changes in other worlds, all of it switches off with reduced motion): a living sky behind every menu (drifting nebulae, aurora curtain, two twinkling star layers, a glowing planet rim, shooting stars, self-drawing constellations), screens that warp in out of deep space, foil headings, an orbit ring and moon on the profile avatar, a comet XP bar, star laurels and a starfield number plate on the match screen, a glinting spectrum bar, pop-in guess chips, glass keypad keys, star-metal toasts, a tap ripple with sparks on every button and a hyperspace jump when a match starts. Bump `V` in `sw.js` after every change.

**Astral Armory (v77b)**: the Armory hub shows each category as a planet in a glass capsule, the popup is a star-metal plate over a night sky, item rows have planet icons with orbit rings and star-metal price buttons (owned items glow teal), Astral exclusives (the world, Void Eater, star skins) glow gold, and a purchase pulses the balance and throws stardust. Bump `V` in `sw.js` after every change.

## v78 changes
**The Armory in every world.** The Armory home, its popup, item rows, balance pills and price buttons now follow each world's own design language instead of the plain default: Roman (bronze plates with coin medallions), Neon Grid (cut-corner neon plates, hex medallions that pulse), Shogun's Realm (indigo plates with a red hanko seal and ring medallions), Frostlands (frosted bevelled glass with ice-gem medallions), Buganda (bark-cloth zigzag borders with drum medallions that beat) and Golden Sands (arabesque lattice plates with slowly turning 16-point star medallions). Each world only overrides a few design tokens at the top of the v78 block (`--ar`, `--tbg`, `--mclip`, `--mbg`, `--bclip` and so on), so adding or tuning a world is quick. Astral keeps its own v77 Armory. Bump `V` in `sw.js` after every change.

## v79 changes: ATLANTIS · THE DEEP (new world)
**Costs 40 💎 and needs rank Proconsul** (change `gem` and `rk` in the `atlantis` entry of the worlds table). Buying it also gives and equips the Leviathan Kiraxo boss skin. **Look:** a bioluminescent sunken city, with glass-bubble tile icons that bob and release bubbles, sea-glass buttons, a sonar-ping PLAY button, coral-glass panels and wave-glyph laurels. **Living sea behind every menu:** light rays, caustics, drifting jellyfish, marine snow, rising bubbles, passing schools of fish and, now and then, the shadow of the Leviathan. A glowing ripple and plankton sparks follow every tap. **The tide is the round timer:** the sea level climbs as time runs out, turns coral-red and surges in the last seconds, and in boss fights the Leviathan's eyes open in the deep as the water rises (with the timer off, the tide just ebbs and flows). **Boss:** Kiraxo becomes the Leviathan, shields are pressure bubbles, with generated menu and boss art and a Leviathan skin. **World content:** Atlantean rank titles (Plankton up to Tide Sovereign), regions and generals, house names (Triton, Arion, Nautilus, Nereid, Pearl, Siren, Maris, Lumina), a 64 second ambient music loop, the Armory in the Atlantis style, **Tide Turn** (the world's timing game) and **Sonar Dive** (guess the depth of a hidden wreck), four Atlantis player skins (Tidecaller, Kraken Guard, Pearl Knight, Siren Warden) and the Leviathan skin, all for Atlantis owners. Art is `img/atlantis_menu.webp`, `img/atlantis_boss.webp` and `img/ks_atlantis.webp`; music is `audio/theme_atlantis.mp3`. Everything Atlantis-only switches off with reduced motion. Bump `V` in `sw.js` after every change.

## v85 changes (v79 base + v84 look)
**Atlantis merge.** Built on v79 (tide, tiles, coral corners, effects) with v84's sea-blue water: the Atlantis colours, backdrop and boss backdrop are now blue (the old flat baked-in jellyfish were painted out of the backdrops). Jellyfish are v84's realistic SVG jellyfish (`atlJelly`-style `svg()` at the end of `index.html`), drifting behind see-through glass screens. **The Kraken** replaces Kiraxo/Leviathan in the Atlantis world: `kiraxo → kraken` in the world lexicon, new art in `img/ks_atlantis.webp` (splash "THE KRAKEN awaits you" and the opponent avatar, shown automatically in Atlantis unless another Kiraxo skin is equipped via `eKS()`), and an inline-SVG Kraken (`#atlKraken`) that lurks under the keypad in matches against the AI, blinks, sways, and flares its eyes as the tide rises. **Round timer**: the clock is a glowing pill that drains with the tide and pulses coral-red in the last 5 seconds. Bump `V` in `sw.js` after every change.

## v86 changes
**Atlantis round timer.** The round box now uses the benchmark teal-glass blue with a bright steel-blue pill that drains smoothly and turns coral-red in the last 5 seconds. When Settings > Round Timer is OFF the pill hides itself instead of showing an empty bar.

## v87 changes
**Atlantis goes blue.** Hue shift moved from 130deg to 195deg so the green/teal tints (keypad panel, hearts, depth bar, pause menu, panel icons) become blues; power buttons now use distinct blues (Scan periwinkle, Focus bright cyan, Shield royal blue).
**Sea Gates.** In Atlantis, ENTER THE ARENA now closes two coral-trimmed bulkhead doors with a rising wave, blazes a trident seal, then parts the doors on a burst of light, water and bubbles. Other worlds keep their own gate; reduced-motion skips it.

## v88 changes
**One opening per world** (tap ENTER THE ARENA). Roman keeps the wooden doors; Atlantis keeps the Sea Gates; new: Cyber (hazard-striped steel shutters, ACCESS GRANTED, laser flash), Samurai (shoji paper screens, crimson sun, blossom petals), Ice (frost floods out, a crack races down, the sheet shatters), Buganda (drums, woven reed gates swing shut on bark-cloth stripes, then open in dust and golden light), Gold (giant vault door, spinning wheel, bolts retract, door rolls away in a coin shower), Astral (nebula iris, galaxy arms, star-streak warp jump). Each is skipped with reduced-motion. Code: WG.<world> in index.html, drawn into #wGate.

## v92 changes
**2-player hearts fixed.** The single shared heart row in the middle is gone. Each player now has their own row of hearts inside their own HUD card (Player 1 left, Player 2 / Kiraxo right). The player on turn has live hearts that drain as they guess (RISK previews the 2 it will cost); the other player's row is dimmed and shows how their last turn ended. The two rows use different colours, so they can never be mistaken for one pool. Rows reset when the Boss Phase starts. Clash Online uses the same hearts.
**Hearts per world.** Roman: classic heart; Buganda: cowrie shell; Neon Grid: pixel heart; Shogun's Realm: sakura blossom; Frostlands: faceted ice gem; Golden Sands: crown; Astral: four-point star; Atlantis: water drop. Each has its own colours for Player 1 and Player 2 and its own idle animation (skipped with reduced-motion). Code: `HSH`, `hrtRow`, `hpRender` in `index.html`.
**More quests.** Daily pool 19 -> 35, weekly pool 17 -> 33, world quests 4 -> 8 daily and 4 -> 8 weekly per world. Each day now shows 4 + 1 world quest (was 3 + 1); each week 3 + 1 world + the Colosseum quest (was 2 + 1 + 1). Existing saves get the extra slot today without losing progress or an already-claimed sweep. Daily Sweep now pays 130 coins + 80 XP, Weekly Sweep 600 coins + 300 XP. Bump `V` in `sw.js` after every change.

## v93 changes
**Projectile feedback.** Every guess in the main game now fires a themed projectile (arrow in Roman and Buganda, data bolt in Neon Grid, shuriken in Shogun's Realm, ice flake in Frostlands, coin in Golden Sands, star in Astral, bubble in Atlantis) in an arc from the STRIKE button to where the guess lands on the spectrum bar, then bursts in the hint's colour (bigger on a hit). Skipped with reduced-motion. Code: `shotFx`.
**Boss tricks.** Neon Grid boss: every 3rd boss hint may be glitched one step. Atlantis boss (Kraken): only your last 2 hint chips stay readable. Both only in matches against the AI. Code: `bossGlitch`, `enterBoss` wrapper. Bump `V` in `sw.js` after every change.

## v94 changes
Neon Grid boss: a glitched hint chip now carries a ⚡ so you can tell afterwards which hint lied. Bump `V` in `sw.js` after every change.

## v95 changes
**Colourblind symbols** (Settings > Gameplay). Hint chips and spectrum pins drop the colour-only emoji for shapes plus border styles: blazing ▲▲ (double border), hot ▲ (solid), warm ● (dotted), cold ▼ (dashed), freezing ▼▼ (grooved). Code: `CBS`, `cbHist`.
**Weather particles** (Settings > Gameplay, on by default, off with reduced-motion). A light canvas over the match screen per world: embers (Roman), golden fireflies (Buganda), neon rain (Neon Grid), sakura petals (Shogun's Realm), snow (Frostlands), gold dust (Golden Sands), drifting stars (Astral), bubbles (Atlantis). Code: `WXC` and the `#wx` canvas. Bump `V` in `sw.js` after every change.

## v96 changes
Weather particles now also drift over the home screen and the Conquest Map, not just matches (same Settings > WEATHER toggle). Bump `V` in `sw.js` after every change.

## v97 changes
**Boss victory burst.** Beating a boss in a match against the AI now triggers a per-world celebration: themed emoji shower, a coloured flash and a shockwave ring, a screen shake and a banner (VICTORIA! in Roman, THE KINGDOM IS VICTORIOUS in Buganda, SYSTEM BREACHED in Neon Grid, HONOUR EARNED in Shogun's Realm, VALHALLA AWAITS in Frostlands, GOLDEN TRIUMPH in Golden Sands, THE STARS ALIGN in Astral, THE KRAKEN SINKS in Atlantis). Flash and ring are skipped with reduced-motion. Code: `WINB`, `bossCelebrate`. Bump `V` in `sw.js` after every change.

## v98 changes
Boss victory burst now also plays in 2-player (Clash of Legions) boss wins, and each world has its own short victory sting (Roman brass-like triangle, Buganda warm sine, Neon Grid square-wave chiptune, Shogun pentatonic, Frostlands and Atlantis soft sines, Golden Sands bright triangle, Astral rising star chime). Code: `STG`, `bossCelebrate`. Bump `V` in `sw.js` after every change.

## v99 changes
**Per-world keypad keys** for the six worlds that had none (Astral and Atlantis already had theirs): Roman carved stone tablets with bronze edges, Buganda woven ochre reed with a red clear key, Neon Grid dark glowing cyan monospace keys, Shogun's Realm washi-paper keys with a red seal edge, Frostlands frosted-glass keys, Golden Sands polished gold plates with a silver clear key. Digits and the clear key only; the STRIKE button and power buttons keep their own styling. CSS only. Bump `V` in `sw.js` after every change.

## v100 changes
**★ Endless Tower** (Mini Games, unlocks at rank 3 via the `rk` field of its `MINI` entry). A solo roguelike climb: each floor has a bigger range (`twHi`: 1–10, growing ×1.4 per floor up to 1–999 at floor 15) and fewer spare attempts (`twAtt`: binary-search attempts + 3, minus 1 every 4 floors, never below 2, so even a perfect player with every relic eventually falls). Clear a floor to draft 1 of 3 relics (`TWR`: Extra Attempt, Free Guess, Odd or Even, Which Half?, Head Start, Scan Pack, Focus Pack, Bonus Points, Lucky Shot, Safety Net) that last the whole climb. A failed floor ends the run; you are ranked by the highest floor reached (`ms_pro.mg.tower.f`), quitting mid-climb still counts the floor you were on. Global ranking uses Firebase `tower/<uid>` = `{n, s}` (best floor only goes up). **Paste the updated `firebase-rules.json` into Realtime Database → Rules → Publish** or the rankings stay empty. Bump `V` in `sw.js` after every change.

## v101 changes
**Rank trials on every rank from 3 up.** Ranks 10–12 already had trials; now Hastatus to Praefect have them too, each mixing Conquest, mini games, other worlds and the Tower: 3 win 2 Conquest battles + play 2 mini games · 4 defeat Gaul's general + 3 mini games · 5 earn 10 ⭐ + finish a Daily Strike · 6 defeat Egypt's general + 5 mini games · 7 mastery L1 on 3 mini games + 20 ⭐ · 8 defeat Carthage's general + Tower floor 5 · 9 win 3 matches in a non-Roman world + mastery L2 on 2 mini games · 11 now also needs Tower floor 10 · 12 also Tower floor 15. Table is `TRI` (small helpers `bs`, `bt`, `st`, `mg`, `ml`, `wd`, `tw`; counts, not region names, so new Conquest regions just work). World wins are counted per active world in `PRO.ww`. **Tower gems:** reaching floor 5/10 pays 1 💎, 15/20 pay 2, 25 and every 5th floor after pay 3, each milestone once ever (`PRO.gm.tw`, `twGemAt`). Bump `V` in `sw.js` after every change.

## v102 changes
**No grandfathered ranks for the new trials.** Existing players drop to the rank their XP and trials allow (same approach as v45); mini games and worlds above that rank lock again, and claimed rank rewards stay claimed. The profile card already caps the shown XP at the next rank's threshold while a trial is pending, so XP stays hidden until the trial is passed. A one-time migration (`PRO.rv` 5) removes any `PRO.rkh` saved by v101. Bump `V` in `sw.js` after every change.

## v103 changes
**Riddle Scrolls** (Arena Trials → 📜 Riddle Scroll). One logic puzzle a day, the same clues for every player, generated from the date (`rdMake`). Every clue is true and exactly one number in the range fits them all (verified over 400 days). Difficulty follows the weekday: Easy 10–99, Medium 50–299, Hard 100–999. 3 answers; a wrong answer shows how many clues it satisfies. Progress is stored in `ms_pro.rd` (attempts survive a reload). Solving pays coins and XP, a first-try solve pays 1 💎, and a riddle streak pays the usual streak gems. New daily quest "Solve the Riddle Scroll" and a share result (🟩🟨🟥). The Arena Trials home badge now counts the riddle. Bump `V` in `sw.js` after every change.

## v104 changes
**Garrisons** (Conquest Map). Every territory you hold (region boss beaten) can be raided each day: 1–3 raids roll from the date (`grRoll`, `ms_pro.gr`), shown in a 🛡️ Garrisons card on the map and as a badge on the Conquest tile. Tap Defend for one quick battle (a non-boss battle of that region, target ≈60%, region rules and mutator): it is free (no Conquest tickets), has one attempt, and no restarts. Win to collect tribute (coins + XP); beating every raid of the day keeps a 🔥 defence streak with a small coin bonus. An ignored or lost raid is "Plundered" and only forfeits the tribute: stars and conquests are never removed. Bump `V` in `sw.js` after every change.
