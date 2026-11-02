// Paste the share links of your Google Forms here (Send > link icon > copy).
// Leave a link empty and its button will show as "Link not set yet".
window.SESSION_CONFIG = {
  forms: {
    poll: "",        // Opening poll: Which of these use AI?
    alien: "",       // Teach the Alien: group answers
    teachable: "",   // Teachable Machine: what broke our model
    exit: ""         // Exit ticket
  },
  // Word the facilitator says aloud to unlock the Teach the Alien answers.
  revealWord: "GOZO"
};

// Fills every <a data-form="..."> with the matching link.
document.addEventListener("DOMContentLoaded", function () {
  var forms = (window.SESSION_CONFIG && window.SESSION_CONFIG.forms) || {};
  document.querySelectorAll("a[data-form]").forEach(function (a) {
    var url = forms[a.getAttribute("data-form")];
    if (url) {
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener";
    } else {
      a.classList.add("disabled");
      a.setAttribute("aria-disabled", "true");
      a.textContent = a.textContent + " (link not set yet)";
    }
  });
});
