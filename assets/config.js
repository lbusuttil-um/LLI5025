// Session settings. Edit these two values before the session.
window.SESSION_CONFIG = {
  // Your Slido event: paste the participant link (slido.com > Share > copy link)
  // and the event code shown to participants, e.g. "#1234567".
  slidoLink: "",
  slidoCode: "",
  // Moodle links for the Teachable Machine activity.
  moodleImages: "",  // the page or folder holding the 15 picture sets
  moodleForum: "",   // the forum where groups post their failures
  // Words the facilitator says aloud to unlock the answers.
  revealWord: "GOZO",        // Teach the Alien
  revealWordRobo: "THUNDER"  // The Robo-Marker
};

document.addEventListener("DOMContentLoaded", function () {
  var cfg = window.SESSION_CONFIG || {};
  // Every <a data-form="slido"> opens the Slido event.
  document.querySelectorAll('a[data-form="slido"]').forEach(function (a) {
    if (cfg.slidoLink) {
      a.href = cfg.slidoLink; a.target = "_blank"; a.rel = "noopener";
    } else {
      a.href = "https://www.slido.com"; a.target = "_blank"; a.rel = "noopener";
    }
  });
  // Every <a data-link="moodleImages|moodleForum"> opens the matching Moodle page.
  document.querySelectorAll("a[data-link]").forEach(function (a) {
    var url = cfg[a.getAttribute("data-link")];
    if (url) { a.href = url; a.target = "_blank"; a.rel = "noopener"; }
    else { a.classList.add("disabled"); a.setAttribute("aria-disabled", "true"); a.textContent += " (link not set yet)"; }
  });
  // Every <span data-slido-code> shows the event code.
  document.querySelectorAll("[data-slido-code]").forEach(function (s) {
    s.textContent = cfg.slidoCode || "the code on screen";
  });
});
