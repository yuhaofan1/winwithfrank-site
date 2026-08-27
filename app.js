const trades = [
  {
    id: "field-lead", icon: "🏗️", category: "build",
    title: "Field Lead", subtitle: "On-site construction management",
    pay: "$500+ / Day", payLabel: "PAY", payUnit: "", bonus: "Project-based bonus", xp: 900, demand: "Active hiring", openings: "4 openings",
    skills: ["Location: Northern California Area", "Experience: 5 Years+"],
    work: "Lead daily field operations, coordinate trades, protect the schedule, and maintain project quality and safety.",
    requirements: ["5+ years of construction experience", "Strong trade coordination and scheduling skills", "Clear daily reporting and communication", "Reliable on-site leadership"]
  },
  {
    id: "electricians", icon: "⚡", category: "systems",
    title: "Electricians", subtitle: "Wire up buildings to code.",
    pay: "$300+ / Day", payLabel: "PAY", payUnit: "", bonus: "Performance bonus up to 20%", xp: 650, demand: "Active hiring",
    skills: ["Location: Northern California Area", "Experience: 5 Years+", "Familiar with NEC Standards"],
    work: "Partner on service upgrades, new circuits, lighting packages, EV readiness, and full remodel electrical scopes with clear plans.",
    requirements: ["5+ years of electrical experience", "Familiarity with NEC standards", "Applicable electrical license", "Current insurance and safety practices"]
  },
  {
    id: "plumbers", icon: "💧", category: "systems",
    title: "Plumbers", subtitle: "Let water flow and sewers drain—from rough to finish.",
    pay: "$120K+ / Project", payLabel: "PAY", payUnit: "", xp: 650, demand: "Active hiring",
    skills: ["Location: Northern California Area", "Rough plumbing", "Fixtures", "Repipes"],
    work: "Handle rough and finish plumbing for kitchens, baths, additions, and property upgrades. Coordinate inspections and flag field conditions early.",
    requirements: ["Applicable plumbing license", "General liability coverage", "Inspection-ready workmanship", "Clear material and allowance breakdowns"]
  },
  {
    id: "hvac", icon: "❄️", category: "systems",
    title: "HVAC Specialists", subtitle: "Keeping it cool when life gets heated.",
    pay: "$250+ / Day", payLabel: "PAY", payUnit: "", xp: 600, demand: "Active hiring",
    skills: ["Location: Northern California Area", "Mini-Splits", "HERS Testing", "Ducting"],
    work: "Design and install appropriately sized HVAC solutions for renovations, additions, and efficiency upgrades, including commissioning and owner handoff.",
    requirements: ["Required mechanical certifications", "Load-calculation capability", "Equipment warranty documentation", "Startup and commissioning checklist"]
  },
  {
    id: "solar", icon: "☀️", category: "systems",
    title: "Solar", subtitle: "Turn sunlight into clean power.",
    pay: "Project-Based", payLabel: "PAY", payUnit: "", xp: 600, demand: "Active hiring",
    skills: ["Location: Northern California Area", "PV Installation", "Battery Storage", "Code Compliance"],
    work: "Install residential and multifamily solar systems, coordinate electrical tie-ins, and deliver safe, inspection-ready projects.",
    requirements: ["Proven solar installation experience", "Applicable licensing and certifications", "Roof and electrical safety knowledge", "Commissioning and closeout documentation"]
  },
  {
    id: "carpenters", icon: "🪚", category: "build",
    title: "Carpenters & Framers", subtitle: "Turn drawings into durable structure and detail.",
    pay: "$300K+ / Project", payLabel: "PAY", payUnit: "", xp: 600, demand: "Active hiring",
    skills: ["Location: Northern California Area", "Framing", "Finish carpentry", "Millwork"],
    work: "Support structural framing, layout, blocking, exterior details, doors, trim, and custom finish packages.",
    requirements: ["Demonstrated layout and plan-reading skill", "Trade-appropriate tools and insurance", "Portfolio or recent references", "Clean, organized daily work areas"]
  },
  {
    id: "painters", icon: "🎨", category: "finish",
    title: "Tape, Paint & Finish", subtitle: "Make it picture-perfect with the finishing touches.",
    pay: "$30K+ / Project", payLabel: "PAY", payUnit: "", xp: 450, demand: "Active hiring",
    skills: ["Location: Northern California Area", "Interior", "Exterior", "Cabinet finish"],
    work: "Complete preparation and coating scopes with accurate color schedules, protected work areas, crisp finishes, and dependable punch completion.",
    requirements: ["Surface-preparation standards", "Insurance and safe material handling", "Detailed inclusions and exclusions", "Final touch-up commitment"]
  },
  {
    id: "roofers", icon: "🏠", category: "exterior",
    title: "Roofers", subtitle: "Protect each investment from the top down.",
    pay: "$30K–$50K", xp: 650, demand: "Active hiring",
    skills: ["Location: Northern California Area", "Shingle", "Low slope", "Flashing"],
    work: "Provide repair, replacement, waterproofing, and flashing scopes with photo documentation and clear warranties.",
    requirements: ["Roofing license where required", "Liability and workers’ compensation coverage", "Manufacturer installation compliance", "Written labor and material warranties"]
  },
  {
    id: "stucco", icon: "🧱", category: "exterior",
    title: "Stucco", subtitle: "Smooth walls. Strong finishes.",
    pay: "$50K–$100K / Project", payLabel: "PAY", payUnit: "", xp: 550, demand: "Active hiring",
    skills: ["Location: Northern California Area", "Lath", "Scratch & Brown Coat", "Finish Coat"],
    work: "Install complete exterior stucco systems from weather barrier and lath through base coats, texture, color, and final finish.",
    requirements: ["Proven stucco installation experience", "Trade-appropriate tools and insurance", "Weatherproofing and flashing knowledge", "Clean finish and punch-list commitment"]
  },
  {
    id: "trash-clean", icon: "🚛", category: "exterior",
    title: "Trash & Clean", subtitle: "Clear the site and keep projects moving.",
    pay: "$500–$1,000 / Truck", payLabel: "PAY", payUnit: "", xp: 500, demand: "Active hiring", openings: "2 openings",
    skills: ["Location: Northern California Area", "Trash Removal", "Jobsite Cleanup", "Hauling"],
    work: "Remove construction debris, haul waste, and leave active jobsites clean, safe, and ready for the next trade.",
    requirements: ["Reliable truck and hauling equipment", "Appropriate insurance", "Legal disposal practices", "Responsive scheduling and communication"]
  },
  {
    id: "material-suppliers", icon: "📦", category: "build",
    title: "Material Suppliers", subtitle: "We buy $15M+ in materials per year. Be our supplier.",
    pay: "By Purchase Order", payLabel: "PAY", payUnit: "", xp: 500, demand: "Active hiring", showOpenings: false,
    skills: ["Location: Northern California Area", "Building Materials", "Volume Pricing", "Jobsite Delivery"],
    work: "Supply dependable construction materials with competitive pricing, accurate lead times, and coordinated delivery to active jobsites.",
    requirements: ["Reliable product availability", "Competitive contractor pricing", "Accurate order and delivery tracking", "Responsive account support"]
  }
];

trades.forEach((trade) => {
  if (trade.showOpenings !== false && !trade.openings) trade.openings = `${(Math.floor(Math.random() * 4) + 3) * 2} openings`;
});

const grid = document.querySelector("#trade-grid");
const tradeSlider = document.querySelector("#trade-slider");
const tradeSliderPrev = document.querySelector("#trade-slider-prev");
const tradeSliderNext = document.querySelector("#trade-slider-next");
const dialog = document.querySelector("#trade-dialog");
const dialogContent = document.querySelector("#dialog-content");
const dealDialog = document.querySelector("#deal-dialog");
const dealForm = document.querySelector("#deal-form");
const dealFormTrigger = document.querySelector("#deal-form-trigger");
const dealFormStatus = document.querySelector("#deal-form-status");
const dealEmailFallback = document.querySelector("#deal-email-fallback");
const dealFormSubmit = document.querySelector("#deal-form-submit");
const agentEmailCopies = document.querySelectorAll(".agent-email-copy");
const copyToast = document.querySelector("#copy-toast");
let copyToastTimer;

async function copyAgentEmail(event) {
  const email = event.currentTarget?.dataset.email;
  if (!email) return;
  try {
    await navigator.clipboard.writeText(email);
  } catch (error) {
    const temporaryInput = document.createElement("textarea");
    temporaryInput.value = email;
    temporaryInput.setAttribute("readonly", "");
    temporaryInput.style.position = "fixed";
    temporaryInput.style.opacity = "0";
    document.body.appendChild(temporaryInput);
    temporaryInput.select();
    document.execCommand("copy");
    temporaryInput.remove();
  }
  if (!copyToast) return;
  window.clearTimeout(copyToastTimer);
  copyToast.hidden = false;
  window.requestAnimationFrame(() => copyToast.classList.add("is-visible"));
  copyToastTimer = window.setTimeout(() => {
    copyToast.classList.remove("is-visible");
    window.setTimeout(() => { copyToast.hidden = true; }, 200);
  }, 2000);
}

agentEmailCopies.forEach((button) => button.addEventListener("click", copyAgentEmail));

function renderTrades() {
  grid.innerHTML = trades.map((trade) => `
    <article class="trade-card">
      <button class="trade-open" data-trade="${trade.id}" aria-label="View ${trade.title} opportunity details">
        <div class="trade-compact-icon ${trade.category}"><span>${trade.icon}</span></div>
        <div class="trade-compact-copy"><h3>${trade.title}</h3></div>
        <span class="trade-compact-arrow" aria-hidden="true">→</span>
      </button>
    </article>`).join("");

  document.querySelectorAll(".trade-open").forEach((button) => {
    button.addEventListener("click", () => openTrade(button.dataset.trade));
  });
}

function moveTradeSlider(direction) {
  const card = tradeSlider?.querySelector(".trade-card");
  if (!tradeSlider || !card) return;
  const gap = 14;
  const step = card.getBoundingClientRect().width + gap;
  const maxScroll = tradeSlider.scrollWidth - tradeSlider.clientWidth;
  let nextPosition = tradeSlider.scrollLeft + direction * step;
  if (direction > 0 && nextPosition >= maxScroll - 4) nextPosition = 0;
  if (direction < 0 && nextPosition < 0) nextPosition = maxScroll;
  tradeSlider.scrollTo({ left: nextPosition, behavior: "smooth" });
}

let tradeSliderTimer;

function startTradeSliderAutoplay() {
  window.clearInterval(tradeSliderTimer);
  if (!tradeSlider || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  tradeSliderTimer = window.setInterval(() => moveTradeSlider(1), 2000);
}

tradeSliderPrev?.addEventListener("click", () => { moveTradeSlider(-1); startTradeSliderAutoplay(); });
tradeSliderNext?.addEventListener("click", () => { moveTradeSlider(1); startTradeSliderAutoplay(); });
tradeSlider?.addEventListener("mouseenter", () => window.clearInterval(tradeSliderTimer));
tradeSlider?.addEventListener("mouseleave", startTradeSliderAutoplay);
tradeSlider?.addEventListener("focusin", () => window.clearInterval(tradeSliderTimer));
tradeSlider?.addEventListener("focusout", startTradeSliderAutoplay);

function openTrade(id) {
  const trade = trades.find((item) => item.id === id);
  if (!trade) return;
  dialogContent.innerHTML = `
    <div class="dialog-hero ${trade.category}">
      <span class="dialog-icon">${trade.icon}</span><p>${trade.demand}</p>
      <h2 id="dialog-title">${trade.title}</h2><span class="dialog-xp">PROJECT OPPORTUNITY</span>
    </div>
    <div class="dialog-body">
      <section><span class="step-label">YOUR ROLE</span><h3>How we work together</h3><p>${trade.work}</p></section>
      <section><span class="step-label">LOADOUT</span><h3>What you’ll need</h3><ul class="check-list">${trade.requirements.map((item) => `<li>${item}</li>`).join("")}</ul></section>
      <section><span class="step-label">JOBS COMPLETED</span><h3>Long-Term Partnership</h3><div class="bonus-grid"><span><b>1st Job</b>First call on the second job</span><span><b>3+ Jobs</b>Bonus reward package</span><span><b>5 Jobs</b>Project lead</span></div></section>
      <a href="#trades" class="dialog-cta" id="dialog-cta">Back to trade opportunities <span>→</span></a>
    </div>`;
  dialog.showModal();
  document.body.classList.add("dialog-open");
  document.querySelector("#dialog-cta").addEventListener("click", closeDialog);
}

function closeDialog() {
  dialog.close();
  document.body.classList.remove("dialog-open");
}

document.querySelector("#dialog-close").addEventListener("click", closeDialog);
dialog.addEventListener("click", (event) => { if (event.target === dialog) closeDialog(); });
dialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));

function openDealDialog() {
  dealFormStatus.textContent = "";
  dealEmailFallback.hidden = true;
  dealDialog.showModal();
  document.body.classList.add("dialog-open");
  window.requestAnimationFrame(() => document.querySelector("#deal-agent-name").focus());
}

function closeDealDialog() {
  dealDialog.close();
}

function dealValue(formData, name) {
  return String(formData.get(name) || "").trim();
}

function buildDealEmail(formData) {
  const propertyAddress = dealValue(formData, "propertyAddress");
  const lines = [
    "New agent deal submission",
    "",
    "AGENT",
    `Name: ${dealValue(formData, "agentName")}`,
    `Email: ${dealValue(formData, "agentEmail")}`,
    `Phone: ${dealValue(formData, "agentPhone") || "Not provided"}`,
    "",
    "PROPERTY",
    `Address: ${propertyAddress}`,
    `Market status: ${dealValue(formData, "marketStatus")}`,
    `Asking price: ${dealValue(formData, "askingPrice")}`,
    `Units: ${dealValue(formData, "units") || "Not provided"}`,
    `Listing / OM: ${dealValue(formData, "dealLink") || "Not provided"}`,
    "",
    "NOTES",
    dealValue(formData, "notes") || "No additional notes."
  ];
  return {
    subject: `Agent deal: ${propertyAddress}`,
    body: lines.join("\n")
  };
}

function submitDealForm(event) {
  event.preventDefault();
  const requiredTextFields = ["deal-agent-name", "deal-agent-email", "deal-address", "deal-price", "deal-link"];
  requiredTextFields.forEach((id) => {
    const field = document.querySelector(`#${id}`);
    field.setCustomValidity(field.value.trim() ? "" : "Please complete this field.");
  });
  if (!dealForm.checkValidity()) {
    dealForm.reportValidity();
    dealForm.querySelector(":invalid")?.focus();
    return;
  }

  const formData = new FormData(dealForm);
  const recipient = dealForm.dataset.recipient;
  const message = buildDealEmail(formData);
  const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(message.subject)}&body=${encodeURIComponent(message.body)}`;

  dealEmailFallback.href = mailtoUrl;
  dealEmailFallback.textContent = `Email ${recipient} directly`;
  dealEmailFallback.hidden = false;
  dealFormStatus.textContent = "Your email app is opening. Review the message and press Send to finish.";
  dealFormSubmit.disabled = true;
  window.location.href = mailtoUrl;
  window.setTimeout(() => { dealFormSubmit.disabled = false; }, 1200);
}

dealFormTrigger?.addEventListener("click", openDealDialog);
document.querySelector("#deal-dialog-close")?.addEventListener("click", closeDealDialog);
dealDialog?.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
  dealFormTrigger?.focus();
});

dealForm?.addEventListener("input", (event) => event.target.setCustomValidity?.(""));
dealForm?.addEventListener("submit", submitDealForm);

const partnerCarousel = document.querySelector("#partner-carousel");
const partnerSlides = [...document.querySelectorAll(".partner-slide")];
const progressDots = [...document.querySelectorAll(".carousel-progress span")];

function updateCarouselProgress() {
  const activeIndex = partnerSlides.reduce((closest, slide, index) => {
    const distance = Math.abs(slide.offsetLeft - partnerCarousel.scrollLeft);
    return distance < closest.distance
      ? { index, distance }
      : closest;
  }, { index: 0, distance: Infinity }).index;
  progressDots.forEach((dot, index) => dot.classList.toggle("active", index === activeIndex));
}

function moveCarousel(direction) {
  const distance = partnerSlides[0].offsetWidth + 18;
  partnerCarousel.scrollBy({ left: direction * distance, behavior: "smooth" });
}

document.querySelector("#carousel-prev").addEventListener("click", () => moveCarousel(-1));
document.querySelector("#carousel-next").addEventListener("click", () => moveCarousel(1));
partnerCarousel.addEventListener("scroll", updateCarouselProgress, { passive: true });
window.addEventListener("resize", updateCarouselProgress);

function enableAchievementSlideshow() {
  const image = document.querySelector("#achievement-slide");
  const controls = document.querySelector(".achievement-slide-controls");
  const dots = document.querySelector("#achievement-dots");
  const previousButton = document.querySelector("#achievement-prev");
  const nextButton = document.querySelector("#achievement-next");
  const card = document.querySelector(".achievement-card");
  const address = document.querySelector("#achievement-project-address");
  const value = document.querySelector("#achievement-project-value");
  if (!image || !controls || !dots || !card || !address || !value) return;

  const randomMarketValue = () => `$${((Math.floor(Math.random() * 41) + 50) / 10).toFixed(1)}M`;
  const projectLabel = (project) => {
    const streetNumber = project.address.match(/^\d+/)?.[0] || "00";
    return `Project #${streetNumber.slice(-2).padStart(2, "0")}`;
  };
  const projects = [
    { address: "1530 W 37th St", image: "https://images.ctfassets.net/zkvnng49bjf3/OFHp28dduZKE4Jqsrjikf/aa9c9319c4692eeeb0614005fb984f68/1530-W-37th-St----Housing-near-USCKtown__1_.jpg" },
    { address: "1186 W 37th Pl", image: "https://images.ctfassets.net/zkvnng49bjf3/4UYqaSdkyK9jyc6XyYmGbW/ae2cc4c5d825ce63405db2e08b8ba155/Screenshot_2025-08-26_at_5.51.22%C3%A2__PM.png" },
    { address: "1270 Rolland Curtis Pl", image: "https://images.ctfassets.net/zkvnng49bjf3/b7HCqYwdPxp9trLwFVTN7/8ba01a21b2dc67102b6bfd63055ee5fb/IMG_9818.JPG" },
    { address: "1419 W 35th St", image: "https://images.ctfassets.net/zkvnng49bjf3/343T2Kfn7BDxY2a8GXe096/8dd175709887a789c97b573d816cdd53/Screenshot_2025-08-26_at_4.15.37%C3%A2__PM.png" },
    { address: "1348 W 37th Pl", image: "https://images.ctfassets.net/zkvnng49bjf3/6nn4h4sxQzWGKpKDQ1RXRw/14dbf6569361f7a29c69f5386563b5f2/1348_W_37th_Pl-USC_Student_Housing.jpg" },
    { address: "3111 Walton Ave", image: "https://images.ctfassets.net/zkvnng49bjf3/53BBGbmu7DrG9IYeBMac2b/e01d69d4133e160d52c1c85bd9a20d87/3111_Walton_Ave-USC_Student_Housing.jpg" },
    { address: "1314 W 35th Pl", image: "https://images.ctfassets.net/zkvnng49bjf3/5jHFE5bO4wvzWPplgRf2iW/d0ccab1c748b68ce60854d93c0e4e34d/Screenshot_2025-08-26_at_5.02.00%C3%A2__PM.png" },
    { address: "3001 Van Buren Pl", image: "https://images.ctfassets.net/zkvnng49bjf3/5VoOrjoCbTjfwtso4qFNBJ/2a5a4372b558a4ce9967ab9ff52a2ccc/3001_Van_Buren_Pl-USC_Student_Housing.jpg" },
    { address: "1204 W 37th Dr", image: "https://images.ctfassets.net/zkvnng49bjf3/5b4qfpkU1tWq6Qph9CMWf6/69341d21acb6a3b396efb4a0ea5cbe32/photo-ee5c4b051a7e414fadd1ee8f43fd9e3e.jpg" },
    { address: "1181 Rolland Curtis Pl", image: "https://images.ctfassets.net/zkvnng49bjf3/4YC0mjktvpoJW8brU3ORcB/744e71b8da93bb5407dfaba8dc8c5e00/Screenshot_2025-08-26_at_5.39.26%C3%A2__PM.png" },
    { address: "3430 Walton Ave", image: "https://images.ctfassets.net/zkvnng49bjf3/xlFllrjFpqtNBAbRGwGTW/9a8f937bd17d7a852aaca55df259fe6f/photo-54478a75fda9414a8b5e99ca7657a72c.jpg" },
    { address: "1223 W 37th Dr", image: "https://images.ctfassets.net/zkvnng49bjf3/1yj47VELxDpC2eJyKYOBPf/4ceea4614dcfb885214ec94fa566856a/1223_W_37th_Dr-USC_Student_Apartments2.webp" },
    { address: "3507 S Budlong Ave", image: "https://images.ctfassets.net/zkvnng49bjf3/55fsg9qzLXmQExlJXX571n/b06655ef34ef69264f952cc924a5da78/3507_S_Budlong_Ave-USC_Student_Housing.jpg" },
    { address: "1151 W 37th Dr", image: "https://images.ctfassets.net/zkvnng49bjf3/1ADgmNTrSkRZzybYtIqQgk/48299ddbe01248b3eeaff76664164f2a/1151_W_37th_Dr-USC_Student_Housing.jpg" },
    { address: "1638 N Soto St", image: "https://images.ctfassets.net/zkvnng49bjf3/1PaWOlByXn26WPqhe1EJDb/13eacee55268f570ef88f7e514407a4a/USC_Keck_Student_Housing.png" },
    { address: "1377 W 36th Pl", image: "https://images.ctfassets.net/zkvnng49bjf3/3eu7EXP2tUPkMjmAQk9upD/2fe49fbaa67c53db4813f655b06746b6/1377_W_36th_Pl-USC_Student_Housing2.jpg" },
    { address: "1348 W 35th Pl", image: "https://images.ctfassets.net/zkvnng49bjf3/4RGRDKfdv5RQlwr6R05T28/ee0b3b552ed163c20ad4ace9b106a8d0/21-web-or-mls-1346_W_35th_Pl-003.jpg" },
    { address: "416 N La Fayette Park Pl", image: "https://images.ctfassets.net/zkvnng49bjf3/5tdogQPOAOcVmUzezham8U/c7b888cba65a79ab13268f464d56377b/Screenshot_2025-08-26_at_4.44.26%C3%A2__PM.png" },
    { address: "3509 S Budlong Ave", image: "https://images.ctfassets.net/zkvnng49bjf3/6SxPc4EPa08u5zOyeX6ZGK/a8f3b16a1d16d09753240318500d729e/3509_S._Budlong_Avenue-USC_Student_Housing.JPG" },
    { address: "1171 W 37th Pl", image: "https://images.ctfassets.net/zkvnng49bjf3/7K2fTsEG4LZQeXmUIZg9zm/bb20c6350891e8503e235e813d5f6709/Screenshot_2025-08-26_at_4.25.19%C3%A2__PM.png" },
    { address: "1252 W 37th St", image: "https://images.ctfassets.net/zkvnng49bjf3/56kPw4k1V33MAIcrNNCOdm/fe276b9bacdead71a8eb331da0280624/Screenshot_2025-08-28_at_1.40.29%C3%A2__PM.png" },
    { address: "11088 Ophir Dr Apt", image: "https://images.ctfassets.net/zkvnng49bjf3/714xcwtfddzEvhNB6S5e0/a2ae71310bf91f19deac511373f84585/11088_Ophir_Dr_Apt-UCLA_Student_Housing.JPG" },
    { address: "3437 S Catalina St", image: "https://images.ctfassets.net/zkvnng49bjf3/42f8dZkusqYEJjD0bTr0rF/55b411d57167fbf5dd08d55ca2622b7d/3437_S_Catalina_St-USC_Student_Housing.jpg" },
    { address: "546 N Harvard Blvd", image: "https://images.ctfassets.net/zkvnng49bjf3/5NkkhTKr1VoOxIS6rBUUNW/a85f1d27ac4c4aa523de6a078f031ba3/Screenshot_2025-08-26_at_3.57.34%C3%A2__PM.png" },
    { address: "5401 Carlin St", image: "https://images.ctfassets.net/zkvnng49bjf3/JeWxHc1ttkBIR3Jw1jEy5/c0d59a409c368547f41f287b6a301c72/Screenshot_2025-08-26_at_5.30.17%C3%A2__PM.png" },
    { address: "3505 Raymond Ave", image: "https://images.ctfassets.net/zkvnng49bjf3/6R4IjHErPMOvwdUUbmAqj4/6c498e6d5659c193e8e53eb3f9756b91/3505_Raymond_Ave-USC_Student_Housing.jpg" },
    { address: "10811 Ashton Ave", image: "https://images.ctfassets.net/zkvnng49bjf3/28LxmPaeySpqEIuYISuRSB/73a9015f99e3fef43efb5b206c793e74/10811_Ashton_Ave-UCLA_Student_Housing.jpg" },
    { address: "1571 W 37th St", image: "https://images.ctfassets.net/zkvnng49bjf3/aYw86puuLkUDJOjZo49vu/9f09874c0f9cfb6eef5c9300a2bb7d70/Screenshot_2025-08-28_at_2.04.14%C3%A2__PM.png" },
    { address: "1438 W 37th Dr", image: "https://images.ctfassets.net/zkvnng49bjf3/goOcxshxlQY8bJ049eiSo/769a42fec183267c86ef5fa71aa639d2/%C3%A6_%C2%AA%C3%A5__2026-03-21_%C3%A4__%C3%A5__5.18.02.png" },
    { address: "1587 W 37th St", image: "https://images.ctfassets.net/zkvnng49bjf3/5UFTzpDYJ9OzcxNLuEkEeJ/01038e08f380203733666d2a868b08bf/Screenshot_2025-08-28_at_4.50.07%C3%A2__PM.png" },
    { address: "1606 W 11th Pl", image: "https://images.ctfassets.net/zkvnng49bjf3/53wCypzy7hf4PyxBe9IqA0/d26d1dd08ca99b11e37e9d3eef867bf3/Screenshot_2025-08-28_at_2.10.47%C3%A2__PM.png" }
  ].map((project) => ({ ...project, marketValue: randomMarketValue() }));
  let activeIndex = 0;
  let timer;

  dots.innerHTML = '<span class="achievement-count"></span>';
  const slideCounter = dots.firstElementChild;
  controls.hidden = projects.length < 2;

  function showSlide(index) {
    activeIndex = (index + projects.length) % projects.length;
    const project = projects[activeIndex];
    const label = projectLabel(project);
    slideCounter.textContent = `${activeIndex + 1} / ${projects.length}`;
    address.textContent = label;
    value.textContent = project.marketValue;
    if (image.src === new URL(project.image, window.location.href).href) {
      image.classList.remove("is-changing");
      return;
    }
    image.classList.add("is-changing");
    window.setTimeout(() => {
      image.onload = image.onerror = () => image.classList.remove("is-changing");
      image.src = project.image;
      image.alt = label;
    }, 220);
  }

  function startAutoplay() {
    window.clearInterval(timer);
    if (projects.length > 1 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      timer = window.setInterval(() => showSlide(activeIndex + 1), 5000);
    }
  }

  previousButton.addEventListener("click", () => { showSlide(activeIndex - 1); startAutoplay(); });
  nextButton.addEventListener("click", () => { showSlide(activeIndex + 1); startAutoplay(); });
  card.addEventListener("mouseenter", () => window.clearInterval(timer));
  card.addEventListener("mouseleave", startAutoplay);
  showSlide(0);
  startAutoplay();
}

function enableLocalLiveReload() {
  if (!["127.0.0.1", "localhost"].includes(window.location.hostname)) return;
  const assets = ["index.html", "styles.css", "app.js", "assets/achievements/"];
  const versions = new Map();

  async function checkForUpdates() {
    try {
      const responses = await Promise.all(
        assets.map((asset) => fetch(asset, { method: "HEAD", cache: "no-store" }))
      );
      responses.forEach((response, index) => {
        const version = [
          response.headers.get("last-modified"),
          response.headers.get("content-length"),
          response.headers.get("etag")
        ].join("|");
        const previous = versions.get(assets[index]);
        versions.set(assets[index], version);
        if (previous && previous !== version) window.location.reload();
      });
    } catch (error) {
      // The local server may be restarting; try again on the next interval.
    }
  }

  checkForUpdates();
  window.setInterval(checkForUpdates, 1500);
}

function enableSectionNavigation() {
  const navigation = document.querySelector(".site-nav");
  const sectionLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')].map((link) => ({
    link,
    section: document.querySelector(link.getAttribute("href"))
  })).filter((item) => item.section);
  let scheduled = false;
  let activeLink = null;

  function updateActiveLink() {
    const marker = window.scrollY + window.innerHeight * 0.34;
    const isAtPageEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;
    const activeItem = isAtPageEnd ? sectionLinks.at(-1) : sectionLinks.find(({ section }) => {
      const top = section.offsetTop;
      return marker >= top && marker < top + section.offsetHeight;
    });
    sectionLinks.forEach(({ link }) => {
      const isActive = link === activeItem?.link;
      link.classList.toggle("is-active", isActive);
      if (isActive) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
    if (activeItem?.link && activeItem.link !== activeLink && navigation) {
      activeLink = activeItem.link;
      const targetLeft = activeLink.offsetLeft - navigation.offsetLeft - (navigation.clientWidth - activeLink.offsetWidth) / 2;
      if (Math.abs(navigation.scrollLeft - targetLeft) > 4) {
        navigation.scrollTo({ left: targetLeft, behavior: "auto" });
      }
    }
    scheduled = false;
  }

  function scheduleUpdate() {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(updateActiveLink);
  }

  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);
  if ("ResizeObserver" in window) new ResizeObserver(scheduleUpdate).observe(document.body);
  updateActiveLink();
}

function enableInvestmentPreview() {
  const amountInput = document.querySelector("#investment-amount");
  const yearsInput = document.querySelector("#investment-years");
  const amountOutput = document.querySelector("#investment-amount-output");
  const yearsOutput = document.querySelector("#investment-years-output");
  const valueOutput = document.querySelector("#investment-value-output");
  const dividendOutput = document.querySelector("#investment-dividend-output");
  const annualizedReturnOutput = document.querySelector("#investment-return-output");
  if (!amountInput || !yearsInput || !amountOutput || !yearsOutput || !valueOutput || !dividendOutput || !annualizedReturnOutput) return;

  const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  });
  const percentage = new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: 1,
    maximumFractionDigits: 1
  });

  function updateRangeFill(input) {
    const progress = ((Number(input.value) - Number(input.min)) / (Number(input.max) - Number(input.min))) * 100;
    input.style.setProperty("--range-fill", `${progress}%`);
  }

  function calculateProjection(investment, years) {
    const completedFiveYearCycles = Math.floor(years / 5);
    const activeCapital = investment * Math.pow(3, completedFiveYearCycles);
    const completedPeriodsInCurrentCycle = Math.floor((years - (completedFiveYearCycles * 5)) / 2.5);
    const estimatedValue = activeCapital * (1 + completedPeriodsInCurrentCycle);
    const capitalCohorts = [{ amount: investment, startYear: 0 }];
    for (let cycle = 1; cycle <= completedFiveYearCycles; cycle += 1) {
      capitalCohorts.push({
        amount: investment * 2 * Math.pow(3, cycle - 1),
        startYear: cycle * 5
      });
    }
    let minimumAnnualCashFlow = 0;
    let maximumAnnualCashFlow = 0;
    let minimumCumulativeCashFlow = 0;
    let maximumCumulativeCashFlow = 0;
    for (const cohort of capitalCohorts) {
      const completedCohortPeriods = Math.floor((years - cohort.startYear) / 2.5);
      minimumAnnualCashFlow += cohort.amount * completedCohortPeriods * 0.04;
      maximumAnnualCashFlow += cohort.amount * completedCohortPeriods * 0.06;
      for (let period = 1; period <= completedCohortPeriods; period += 1) {
        const periodStart = cohort.startYear + (period * 2.5);
        const yearsAtThisRate = Math.max(0, Math.min(years, periodStart + 2.5) - periodStart);
        minimumCumulativeCashFlow += cohort.amount * period * 0.04 * yearsAtThisRate;
        maximumCumulativeCashFlow += cohort.amount * period * 0.06 * yearsAtThisRate;
      }
    }
    const minimumAnnualizedReturn = years === 0 ? 0 : Math.pow((estimatedValue + minimumCumulativeCashFlow) / investment, 1 / years) - 1;
    const maximumAnnualizedReturn = years === 0 ? 0 : Math.pow((estimatedValue + maximumCumulativeCashFlow) / investment, 1 / years) - 1;
    return {
      estimatedValue,
      minimumAnnualCashFlow,
      maximumAnnualCashFlow,
      minimumAnnualizedReturn,
      maximumAnnualizedReturn
    };
  }

  const chart = document.querySelector("#investment-growth-chart");

  function compactCurrency(value) {
    if (value >= 1000000) return `$${Number((value / 1000000).toFixed(1))}M`;
    if (value >= 1000) return `$${Number((value / 1000).toFixed(0))}K`;
    return currency.format(value);
  }

  function updateGrowthChart(investment, selectedYears) {
    if (!chart) return;
    const width = Math.max(280, Math.round(chart.getBoundingClientRect().width));
    const height = width < 500 ? 330 : 360;
    const margin = { top: 32, right: width < 500 ? 54 : 72, bottom: 42, left: width < 500 ? 54 : 68 };
    const plotWidth = width - margin.left - margin.right;
    const plotHeight = height - margin.top - margin.bottom;
    const samples = Array.from({ length: 31 }, (_, index) => {
      const years = index * 0.5;
      return { years, ...calculateProjection(investment, years) };
    });
    const maximumEquity = Math.max(...samples.map((sample) => sample.estimatedValue));
    const maximumDistribution = Math.max(...samples.map((sample) => sample.maximumAnnualCashFlow), 1);
    const x = (years) => margin.left + ((years / 15) * plotWidth);
    const equityY = (value) => margin.top + plotHeight - ((value / maximumEquity) * plotHeight);
    const distributionY = (value) => margin.top + plotHeight - ((value / maximumDistribution) * plotHeight);
    const stepPath = (key, scale) => samples.reduce((path, sample, index) => {
      const pointX = x(sample.years);
      const pointY = scale(sample[key]);
      if (index === 0) return `M ${pointX} ${pointY}`;
      const previousY = scale(samples[index - 1][key]);
      return `${path} L ${pointX} ${previousY} L ${pointX} ${pointY}`;
    }, "");
    const bandEdge = (key, scale) => samples.flatMap((sample, index) => {
      const point = [x(sample.years), scale(sample[key])];
      if (index === 0) return [point];
      return [[point[0], scale(samples[index - 1][key])], point];
    });
    const upperBand = bandEdge("maximumAnnualCashFlow", distributionY);
    const lowerBand = bandEdge("minimumAnnualCashFlow", distributionY).reverse();
    const bandPath = [...upperBand, ...lowerBand].map((point, index) => `${index === 0 ? "M" : "L"} ${point[0]} ${point[1]}`).join(" ") + " Z";
    const horizontalTicks = [0, 0.25, 0.5, 0.75, 1];
    const yearTicks = width < 500 ? [0, 5, 10, 15] : [0, 2.5, 5, 7.5, 10, 12.5, 15];
    const selected = calculateProjection(investment, selectedYears);
    const selectedX = x(selectedYears);
    const selectedDistributionMidpoint = (selected.minimumAnnualCashFlow + selected.maximumAnnualCashFlow) / 2;
    chart.setAttribute("viewBox", `0 0 ${width} ${height}`);
    chart.innerHTML = `
      <title id="investment-chart-title">Investment growth over time</title>
      <desc id="investment-chart-description">Earned equity and annual cash distribution ranges from Day 1 through 15 years.</desc>
      <rect class="chart-frame" x="${margin.left}" y="${margin.top}" width="${plotWidth}" height="${plotHeight}" />
      ${horizontalTicks.map((tick) => {
        const tickY = margin.top + plotHeight - (tick * plotHeight);
        return `<line class="chart-grid" x1="${margin.left}" y1="${tickY}" x2="${width - margin.right}" y2="${tickY}" />
          <text class="chart-tick" x="${margin.left - 8}" y="${tickY + 4}" text-anchor="end">${compactCurrency(maximumEquity * tick)}</text>
          <text class="chart-tick" x="${width - margin.right + 8}" y="${tickY + 4}" text-anchor="start">${compactCurrency(maximumDistribution * tick)}</text>`;
      }).join("")}
      ${yearTicks.map((tick) => `<text class="chart-tick" x="${x(tick)}" y="${height - 15}" text-anchor="middle">${tick}</text>`).join("")}
      <text class="chart-axis-label" x="${margin.left}" y="16">EQUITY</text>
      <text class="chart-axis-label" x="${width - margin.right}" y="16" text-anchor="end">ANNUAL DISTRIBUTION</text>
      <text class="chart-axis-label" x="${margin.left + (plotWidth / 2)}" y="${height - 1}" text-anchor="middle">YEARS</text>
      <path class="chart-distribution-band" d="${bandPath}" />
      <path class="chart-distribution-line" d="${stepPath("maximumAnnualCashFlow", distributionY)}" />
      <path class="chart-distribution-line" d="${stepPath("minimumAnnualCashFlow", distributionY)}" />
      <path class="chart-equity-line" d="${stepPath("estimatedValue", equityY)}" />
      <line class="chart-selected-line" x1="${selectedX}" y1="${margin.top}" x2="${selectedX}" y2="${margin.top + plotHeight}" />
      <circle class="chart-equity-point" cx="${selectedX}" cy="${equityY(selected.estimatedValue)}" r="5" />
      <circle class="chart-distribution-point" cx="${selectedX}" cy="${distributionY(selectedDistributionMidpoint)}" r="5" />`;
  }

  function updatePreview() {
    const investment = Number(amountInput.value);
    const years = Number(yearsInput.value);
    const {
      estimatedValue,
      minimumAnnualCashFlow,
      maximumAnnualCashFlow,
      minimumAnnualizedReturn,
      maximumAnnualizedReturn
    } = calculateProjection(investment, years);
    amountOutput.value = currency.format(investment);
    yearsOutput.value = years === 0 ? "Day 1" : `${years} ${years === 1 ? "year" : "years"}`;
    valueOutput.textContent = currency.format(estimatedValue);
    dividendOutput.textContent = minimumAnnualCashFlow === 0
      ? currency.format(0)
      : `${currency.format(minimumAnnualCashFlow)}–${currency.format(maximumAnnualCashFlow)}`;
    annualizedReturnOutput.textContent = Math.abs(maximumAnnualizedReturn - minimumAnnualizedReturn) < 0.0005
      ? percentage.format(minimumAnnualizedReturn)
      : `${percentage.format(minimumAnnualizedReturn)}–${percentage.format(maximumAnnualizedReturn)}`;
    updateGrowthChart(investment, years);
    updateRangeFill(amountInput);
    updateRangeFill(yearsInput);
  }

  amountInput.addEventListener("input", updatePreview);
  yearsInput.addEventListener("input", updatePreview);
  if (chart && "ResizeObserver" in window) new ResizeObserver(() => updateGrowthChart(Number(amountInput.value), Number(yearsInput.value))).observe(chart);
  updatePreview();
}

function enableFeaturedVideo() {
  const video = document.querySelector("#featured-video");
  const projectOverlay = document.querySelector("#video-project-overlay");
  const lifestyleOverlay = document.querySelector("#video-lifestyle-overlay");
  const editPauseButton = document.querySelector("#video-edit-pause");
  if (!video) return;
  const playlist = [
    { src: "assets/building-highlights-original.mp4?v=four-buildings-five-seconds", playbackRate: 0.625, type: "projects" },
    { src: "assets/building-construction-highlight.m4v?v=construction-1", playbackRate: 0.625, type: "construction" },
    { src: "assets/building-interior-highlight.m4v?v=interiors-1", playbackRate: 1, type: "interiors" },
  ];
  const projectDetails = [
    [
      { project: "Project #86", marketValue: "$12,500,000", builtYear: "2023" },
      { project: "Project #546", marketValue: "$6,500,000", builtYear: "2023" },
      { project: "Project #14", marketValue: "$7,050,000", builtYear: "2024" },
      { project: "Project #01", marketValue: "$7,200,000", builtYear: "2023" },
    ],
    [{ project: "Project #77", marketValue: "$6,500,000", builtYear: "2024" }],
    [],
  ];
  const projectCueOverrides = [
    [{ start: 3, end: 4, project: "Project #48", marketValue: "$5,500,000", builtYear: "2025" }],
    [],
    [],
  ];
  const lifestyleMessages = ["Modern Design", "Newly Constructed", "Fully Furnished", "High-Class Living"];
  let playlistIndex = 0;
  let activeProjectKey = "";
  let activeLifestyleKey = "";
  video.defaultMuted = true;
  video.muted = true;

  function applyCurrentPlaybackRate() {
    const playbackRate = playlist[playlistIndex].playbackRate;
    video.defaultPlaybackRate = playbackRate;
    video.playbackRate = playbackRate;
  }

  applyCurrentPlaybackRate();

  function playMuted() {
    video.muted = true;
    video.play().catch(() => {
      // The autoplay attributes remain in place if the browser delays playback.
    });
  }

  function updateEditPauseButton() {
    if (!editPauseButton) return;
    const isPaused = video.paused;
    editPauseButton.textContent = isPaused ? "Resume video" : "Pause video";
    editPauseButton.setAttribute("aria-pressed", String(isPaused));
  }

  editPauseButton?.addEventListener("click", () => {
    if (video.paused) playMuted();
    else video.pause();
    updateEditPauseButton();
  });
  video.addEventListener("play", updateEditPauseButton);
  video.addEventListener("pause", updateEditPauseButton);

  function updateProjectOverlay() {
    if (!projectOverlay) return;
    const isInteriorReel = playlist[playlistIndex].type === "interiors";
    const isStairShot = playlistIndex === 0 && video.currentTime >= 18;
    const isExteriorShot = playlist[playlistIndex].type === "projects" && !isStairShot;
    projectOverlay.classList.toggle("is-visible", isExteriorShot);
    projectOverlay.setAttribute("aria-hidden", String(!isExteriorShot));
    lifestyleOverlay?.classList.toggle("is-visible", isInteriorReel);
    lifestyleOverlay?.setAttribute("aria-hidden", String(!isInteriorReel));
    if (!isExteriorShot) {
      projectOverlay.classList.remove("has-updated");
    }
    if (isInteriorReel) {
      const messageIndex = Math.min(Math.floor(video.currentTime / 5), lifestyleMessages.length - 1);
      const lifestyleKey = `${playlistIndex}-${messageIndex}`;
      if (lifestyleOverlay && lifestyleKey !== activeLifestyleKey) {
        lifestyleOverlay.querySelector("strong").textContent = lifestyleMessages[messageIndex];
        lifestyleOverlay.classList.remove("has-updated");
        void lifestyleOverlay.offsetWidth;
        lifestyleOverlay.classList.add("has-updated");
        activeLifestyleKey = lifestyleKey;
      }
      return;
    }
    lifestyleOverlay?.classList.remove("has-updated");
    if (!isExteriorShot) return;
    const detailsForReel = projectDetails[playlistIndex];
    const detailIndex = Math.min(Math.floor(video.currentTime / 5), detailsForReel.length - 1);
    const cueOverride = projectCueOverrides[playlistIndex].find(({ start, end }) => video.currentTime >= start && video.currentTime < end);
    const details = cueOverride || detailsForReel[detailIndex];
    const projectKey = cueOverride ? `${playlistIndex}-cue-${cueOverride.start}` : `${playlistIndex}-${detailIndex}`;
    if (projectKey !== activeProjectKey) {
      projectOverlay.querySelector(":scope > div:first-child > strong").textContent = details.project;
      projectOverlay.querySelector(":scope > div:nth-child(2) > strong").textContent = details.marketValue;
      const builtYearGroup = projectOverlay.querySelector("[data-built-year]");
      if (builtYearGroup) {
        builtYearGroup.hidden = !details.builtYear;
        builtYearGroup.querySelector("strong").textContent = details.builtYear || "";
        projectOverlay.classList.toggle("has-built-year", Boolean(details.builtYear));
      }
      projectOverlay.classList.remove("has-updated");
      void projectOverlay.offsetWidth;
      projectOverlay.classList.add("has-updated");
      activeProjectKey = projectKey;
    }
  }

  if (video.readyState >= 2) playMuted();
  else video.addEventListener("canplay", playMuted, { once: true });
  video.addEventListener("loadedmetadata", applyCurrentPlaybackRate);
  video.addEventListener("timeupdate", updateProjectOverlay);
  video.addEventListener("loadeddata", updateProjectOverlay);
  video.addEventListener("ended", () => {
    playlistIndex = (playlistIndex + 1) % playlist.length;
    video.src = playlist[playlistIndex].src;
    video.load();
    applyCurrentPlaybackRate();
    updateProjectOverlay();
    playMuted();
  });
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && video.paused) playMuted();
  });
  updateProjectOverlay();
  updateEditPauseButton();
}

function enableThanksGallery() {
  const track = document.querySelector("#thanks-gallery-track");
  const previousButton = document.querySelector("#thanks-gallery-prev");
  const nextButton = document.querySelector("#thanks-gallery-next");
  const slides = track ? [...track.querySelectorAll(".thanks-gallery-slide")] : [];
  const dots = [...document.querySelectorAll(".thanks-gallery-progress span")];
  if (!track || !previousButton || !nextButton || !slides.length) return;
  let currentIndex = 0;
  let autoplayTimer;

  function showSlide(index) {
    currentIndex = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    slides.forEach((slide, slideIndex) => slide.setAttribute("aria-hidden", String(slideIndex !== currentIndex)));
    dots.forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === currentIndex));
  }

  function startAutoplay() {
    window.clearInterval(autoplayTimer);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    autoplayTimer = window.setInterval(() => showSlide(currentIndex + 1), 5000);
  }

  previousButton.addEventListener("click", () => {
    showSlide(currentIndex - 1);
    startAutoplay();
  });
  nextButton.addEventListener("click", () => {
    showSlide(currentIndex + 1);
    startAutoplay();
  });
  showSlide(0);
  startAutoplay();
}

if (grid) {
  renderTrades();
  startTradeSliderAutoplay();
}
updateCarouselProgress();
enableAchievementSlideshow();
enableLocalLiveReload();
enableSectionNavigation();
enableInvestmentPreview();
enableFeaturedVideo();
enableThanksGallery();
