# AI for Secondary Teachers: Session 1

Participant pages for Session 1, "How AI works". Plain HTML, CSS and a little JavaScript, with no build step.

## Pages

| File | What it is |
|---|---|
| `index.html` | Session hub: the Slido code and links to every activity in order |
| `sort.html` | The nesting dolls (AI, ML, deep learning, generative AI) and the rule-based or learned sort |
| `alien.html` | Teach the Alien (unplugged): training set, six test creatures, unlockable reveal and debrief |
| `teachable.html` | Cats vs dogs with a different picture set per group: train, audit, predict, hunt for failures, post to the Moodle forum (template included). Subject cards as an extension |
| `robo.html` | The Robo-Marker (unplugged): a model learns to mark science answers, with unlockable reveal and debrief |
| `chain.html` | Word by word: the next-word prediction game |
| `slido-setup.html` | Facilitator only: the 15 Slido polls in the order you use them |

## Publishing on GitHub Pages

1. Create a repository and upload the whole folder, keeping `assets/` alongside the HTML files.
2. In the repository go to Settings, then Pages, choose "Deploy from a branch", select `main` and `/ (root)`, and save.
3. After a minute or two the site appears at `https://<your-username>.github.io/<repository-name>/`.

## Before the session

Create the Slido event using `slido-setup.html`, which also has the Moodle forum settings. Then open `assets/config.js` and fill in `slidoLink` and `slidoCode`, plus `moodleImages` (where the 15 picture sets are) and `moodleForum` (where groups post their failures).

The unlock words for the two reveals are also in `config.js` (defaults `GOZO` for the Alien, `THUNDER` for the Robo-Marker). Because the site is public, a determined participant could find them in the source, so treat them as a speed bump rather than a lock.

## Linking from Google Sites

Use Insert, then Embed, then By URL to place a page inside a Google Sites page, or add an ordinary link or button. The pages are easier to use on tablets when opened in their own tab.
