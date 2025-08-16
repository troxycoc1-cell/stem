"use strict";

document.addEventListener("DOMContentLoaded", () => {

  // --- Back/Home button ---
  const Home = document.getElementById("goingback");
  if (Home) {
    Home.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

  // --- English1 / English2 buttons (example) ---
  const Eng1 = document.getElementById("English1");
  if (Eng1) {
    Eng1.addEventListener("click", () => {
      console.log("English1 clicked");
      // add your code here
    });
  }

  const Eng2 = document.getElementById("English2");
  if (Eng2) {
    Eng2.addEventListener("click", () => {
      console.log("English2 clicked");
      // add your code here
    });
  }

  // --- Route data ---
  const routeData = {
    "Fairfield Forum-FHS": [
      { busNumber: "817", time: "12 mins", frequency: "Every 15 mins" },
      { busNumber: "814", time: "18 mins", frequency: "Every 20 mins" }
    ],
    "FHS-PBCF": [
      { busNumber: "808", time: "10 mins", frequency: "Every 10 mins" },
      { busNumber: "800", time: "14 mins", frequency: "Every 15 mins" },
      { busNumber: "817", time: "20 mins", frequency: "Every 30 mins" }
    ],
    "PBCF-Fairfield Forum": [
      { busNumber: "8", time: "25 mins", frequency: "Every 40 mins" }
    ]
  };

  function ensureBidirectional(data) {
    const out = { ...data };
    Object.keys(data).forEach((key) => {
      const [a, b] = key.split("-");
      const reverseKey = `${b}-${a}`;
      if (!out[reverseKey]) {
        out[reverseKey] = data[key].map(item => ({ ...item }));
      }
    });
    return out;
  }

  const biRouteData = ensureBidirectional(routeData);

  // --- Route info UI ---
  const busStop1 = document.getElementById("busStop1");
  const busStop2 = document.getElementById("busStop2");
  const routeTableBody = document.getElementById("routeTableBody");

  function renderRows(list) {
    routeTableBody.innerHTML = "";
    if (!list || list.length === 0) {
      routeTableBody.innerHTML = `<tr><td colspan="3">No buses available</td></tr>`;
      return;
    }
    list.forEach(bus => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${bus.busNumber ?? "-"}</td>
        <td>${bus.time ?? "-"}</td>
        <td>${bus.frequency ?? "-"}</td>
      `;
      routeTableBody.appendChild(tr);
    });
  }

  function updateRouteInfo() {
    const start = (busStop1?.value || "").trim();
    const end = (busStop2?.value || "").trim();

    if (!start || !end || start === end) {
      routeTableBody.innerHTML = `<tr><td colspan="3">--</td></tr>`;
      return;
    }

    const key = `${start}-${end}`;
    renderRows(biRouteData[key] || []);
  }

  if (busStop1 && busStop2) {
    busStop1.addEventListener("change", updateRouteInfo);
    busStop2.addEventListener("change", updateRouteInfo);
  }
});

