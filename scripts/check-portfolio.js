const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

const home = read("index.html");
const seminars = read("pages/seminars.html");
const whereNow = read("pages/where-am-i-now.html");
const profilePath = path.join(root, "assets", "img", "profile.png");
const eventCertificatePath = path.join(root, "assets", "img", "innovative-research-certificate.png");
const eventAwardingPath = path.join(root, "assets", "img", "innovative-research-awarding.png");

assert(fs.existsSync(profilePath), "Expected copied profile image at assets/img/profile.png");
assert(fs.existsSync(eventCertificatePath), "Expected seminar certificate image at assets/img/innovative-research-certificate.png");
assert(fs.existsSync(eventAwardingPath), "Expected seminar awarding image at assets/img/innovative-research-awarding.png");
assert(home.includes("assets/img/profile.png"), "Expected Home page to reference the profile image");
assert(home.includes("Sebastian Angelo T. Meer"), "Expected Home page to include the student's full name with middle initial");
assert(seminars.includes("Innovative Research Horizons"), "Expected Seminars page to include the first seminar title");
assert(seminars.includes("Engr. Aisa Mijeno-Labastilla"), "Expected Seminars page to include the speaker name");
assert(seminars.includes("Jupyter Notebook"), "Expected Seminars page to include the hands-on tool from the journal");
assert(seminars.includes("February 03, 2026"), "Expected Seminars page to include the seminar date");
assert(seminars.includes("../assets/img/innovative-research-certificate.png"), "Expected Seminars page to show the seminar certificate");
assert(seminars.includes("../assets/img/innovative-research-awarding.png"), "Expected Seminars page to show the awarding photo");
assert(whereNow.includes("Jupyter Notebook"), "Expected Where Am I Now page to include the seminar's practical next step");

console.log("Portfolio content checks passed.");
