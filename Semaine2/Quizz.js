const questions = [
    {
        question: "Quel langage permet de rendre une page web interactive ?",
        reponses: ["HTML", "CSS", "JavaScript", "SQL"],
        bonneReponse: "JavaScript"
    },

    {
        question: "Quelle instruction permet d'afficher quelque chose dans la console ?",
        reponses: ["print()", "console.log()", "display()", "write()"],
        bonneReponse: "console.log()"
    },

    {
        question: "Quel mot-clé permet de déclarer une constante ?",
        reponses: ["let", "var", "const", "constant"],
        bonneReponse: "const"
    }
];

let score = 0;

for (let i = 0; i < questions.length; i++) {

    const reponse = prompt(questions[i].question);

    if (reponse === questions[i].bonneReponse) {
        score++;
    }
}

console.log(`Votre score est : ${score}/${questions.length}`);