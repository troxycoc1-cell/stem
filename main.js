 
const      Eng = document.getElementById('English');
const      Eng1 = document.getElementById('English1');
const      Eng2 = document.getElementById('English2');
const      All = document.getElementById('main');
const      ARB = document.getElementById('Arabic');
const      ARB1 = document.getElementById('Arabic1');
const      ARB2 = document.getElementById('Arabic2');
const      Vit = document.getElementById('Vietnamese');
const      Vit1 = document.getElementById('Vietnamese1');
const      Vit2 = document.getElementById('Vietnamese2');

function English() {
  window.location.href = 'English.html';
}

function Arabic() {
  window.location.href = 'Arabic.html';
}

function Vietnames() {
  window.location.href = 'Vietnamese.html';
}

Eng.onclick = English;
Eng1.onclick = English;
Eng2.onclick = English;

ARB.onclick = Arabic;
ARB1.onclick = Arabic;
ARB2.onclick = Arabic;

Vit.onclick = Vietnames;
Vit1.onclick = Vietnames;
Vit2.onclick = Vietnames;