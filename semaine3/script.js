const etudiants = [
  { nom: "Awa", note: 15 },
  { nom: "Paul", note: 8 },
  { nom: "Fatou", note: 12 },
  { nom: "Eric", note: 6 },
  { nom: "Kevin", note: 14 }, 
];

const noms = etudiants.map((etudiant) => etudiant.nom);

const admis = etudiants.filter((etudiant) => etudiant.note >= 10);

const somme = etudiants.reduce((total, etudiant) => total + etudiant.note, 0);

const moyenne = somme / etudiants.length;

console.log(`Noms : ${noms}`);
console.log("Étudiants ayant la moyenne :", admis);
console.log(`Somme des notes : ${somme}`);
console.log(`Moyenne générale : ${moyenne}`);
