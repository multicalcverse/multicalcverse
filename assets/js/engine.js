async function loadFormulaData() {
  const response = await fetch('/data/formulas.json');
  const data = await response.json();
  return data;
}

function calculateSimpleInterest(p, r, t) {
  return (p * r * t) / 100;
}

document.addEventListener("DOMContentLoaded", async () => {
  const formulas = await loadFormulaData();

  const btn = document.getElementById("calculateBtn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const p = parseFloat(document.getElementById("principal").value);
    const r = parseFloat(document.getElementById("rate").value);
    const t = parseFloat(document.getElementById("time").value);

    if (isNaN(p) || isNaN(r) || isNaN(t)) {
      alert("Please enter valid values");
      return;
    }

    const interest = calculateSimpleInterest(p, r, t);
    const total = p + interest;

    document.getElementById("interestResult").innerText =
      "Simple Interest = ₹" + interest.toFixed(2);

    document.getElementById("totalResult").innerText =
      "Total Amount = ₹" + total.toFixed(2);
  });
});
