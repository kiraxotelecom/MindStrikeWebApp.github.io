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
