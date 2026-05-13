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
const profilePath = path.join(root, "assets", "img", "profile.jpg");
const eventCertificatePath = path.join(root, "assets", "img", "innovative-research-certificate.jpg");
const eventAwardingPath = path.join(root, "assets", "img", "innovative-research-awarding.png");

assert(fs.existsSync(profilePath), "Expected optimized profile image at assets/img/profile.jpg");
assert(fs.existsSync(eventCertificatePath), "Expected optimized seminar certificate image at assets/img/innovative-research-certificate.jpg");
assert(fs.existsSync(eventAwardingPath), "Expected seminar awarding image at assets/img/innovative-research-awarding.png");
assert(fs.statSync(profilePath).size < 600000, "Expected profile image to be optimized below 600 KB");
assert(fs.statSync(eventCertificatePath).size < 600000, "Expected certificate image to be optimized below 600 KB");
assert(home.includes("assets/img/profile.jpg"), "Expected Home page to reference the optimized profile image");
assert(home.includes("Sebastian Angelo T. Meer"), "Expected Home page to include the student's full name with middle initial");
assert(seminars.includes("Innovative Research Horizons"), "Expected Seminars page to include the first seminar title");
assert(seminars.includes("Engr. Aisa Mijeno-Labastilla"), "Expected Seminars page to include the speaker name");
assert(seminars.includes("Jupyter Notebook"), "Expected Seminars page to include the hands-on tool from the journal");
assert(seminars.includes("February 03, 2026"), "Expected Seminars page to include the seminar date");
assert(seminars.includes("../assets/img/innovative-research-certificate.jpg"), "Expected Seminars page to show the optimized seminar certificate");
assert(seminars.includes("../assets/img/innovative-research-awarding.png"), "Expected Seminars page to show the awarding photo");
assert(whereNow.includes("Jupyter Notebook"), "Expected Where Am I Now page to include the seminar's practical next step");

console.log("Portfolio content checks passed.");
