let bitState = 0;

function toggleBit() {
  bitState = bitState ? 0 : 1;
  const bit = document.getElementById("bit");
  bit.textContent = bitState;
  bit.classList.toggle("active");
}

function updateProb(value) {
  document.getElementById("prob").textContent = value;
}

function entangle() {
  const value = Math.random() > 0.5 ? 1 : 0;
  document.getElementById("e1").textContent = value;
  document.getElementById("e2").textContent = value;
}

function measure() {
  document.getElementById("result").textContent =
    Math.random() > 0.5 ? "1" : "0";
}
const quantumConceptsData = [
  {
    title: "Superposition",
    description: "A qubit can exist in multiple states (0 and 1) simultaneously until measured."
  },
  {
    title: "Entanglement",
    description: "Entangled qubits share a linked quantum state, regardless of distance."
  },
  {
    title: "Quantum Gates",
    description: "Quantum gates manipulate probability amplitudes instead of fixed binary values."
  },
  {
    title: "Measurement",
    description: "Measuring a qubit collapses it into a definite classical state."
  }
];

const conceptsContainer = document.getElementById("quantumConcepts");

quantumConceptsData.forEach(concept => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h3>${concept.title}</h3>
    <p>${concept.description}</p>
  `;
  conceptsContainer.appendChild(card);
});
