# AI for Secondary Teachers: Session 1

Participant pages for Session 1, "How AI works". Plain HTML, CSS and a little JavaScript, with no build step.

## Pages

| File | What it is |
|---|---|
| `index.html` | Session hub with the timed plan and links to everything |
| `sort.html` | The nesting dolls (AI, ML, deep learning, generative AI) and the rule-based or learned sort |
| `alien.html` | Teach the Alien: training set, six test creatures, unlockable reveal and debrief |
| `teachable.html` | Teachable Machine subject cards and the four "break it" challenges |
| `chain.html` | Word by word: the next-word prediction game |
| `forms-setup.html` | Facilitator only: questions for the four Google Forms |

## Publishing on GitHub Pages

1. Create a repository and upload the whole folder, keeping `assets/` alongside the HTML files.
2. In the repository go to Settings, then Pages, choose "Deploy from a branch", select `main` and `/ (root)`, and save.
3. After a minute or two the site appears at `https://<your-username>.github.io/<repository-name>/`.

## Connecting the Google Forms

Build the four forms using `forms-setup.html`, then open `assets/config.js` and paste each form's share link between the quotes. Any button whose link is empty shows "link not set yet" instead of breaking.

The unlock word for the Teach the Alien answers is also in `config.js` (default `GOZO`). Because the site is public, a determined participant could read it in the source, so treat it as a speed bump rather than a lock.

## Linking from Google Sites

Use Insert, then Embed, then By URL to place a page inside a Google Sites page, or add an ordinary link or button. Embedding works, but the pages are easier to use on tablets when opened in their own tab.
