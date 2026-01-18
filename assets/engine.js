async function loadCalculator() {
  const params = new URLSearchParams(window.location.search);
  const calcId = params.get("id");

  if (!calcId) return;

 const response = await fetch("data/formulas.json");
  const data = await response.json();

const calc = data.calculators.find(item =>
  item.id === calcId);
if (!calc)
  return;

  // SEO
  document.title = calc.title;
  document.querySelector("meta[name='description']")
    .setAttribute("content", calc.meta_desc);

  // Page Content
  document.getElementById("page-title").innerText = calc.title;
  document.getElementById("intro").innerText = calc.content.intro;
  document.getElementById("explanation").innerText = calc.content.explanation;
  document.getElementById("example").innerText = calc.content.example;

  // Currency
  document.getElementById("currency").innerText = calc.currency;
}

loadCalculator();
