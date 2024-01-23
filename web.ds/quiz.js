const questions = [
  {
    question: "1.Qu'est-ce que HTML signifie?",
    answers: ["a) Hyper Text Markup Language" , "b) High-level Text Manipulation Language", "c) Hyperlink and Text Markup Language", "d) Home Tool Markup Language"],
    correctAnswer: "a"
  },
  {
    question: "2.Comment insère-t-on un lien hypertexte dans HTML?",
    answers: ["a) la balise link", "b) la balise a ", "c) la balise href", "d) la balise url"],
    correctAnswer: "b"
  },
  {
    question: "3.Quelle balise est utilisée pour définir une liste non ordonnée?",
    answers: ["a) la balise ul", "b) la balise ol ", "c) la balise li", "d) la balise list"],
    correctAnswer: "a"
  },
  {
    question: " 4. Qu'est-ce que CSS signifie?",
    answers: ["a) Counter Strike: Source", "b) Computer Style Sheets", "c)  Creative Style Sheets", "d) Cascading Style Sheets"],
    correctAnswer: "d"
  },

  {
    question: " 5. Comment sélectionne-t-on tous les éléments de la balise p  avec CSS?",
    answers: ["a)  all: (balise p )", "b) p:all", "c)  p { }", "d) la balise p { }"],
    correctAnswer: "a"
  },
  {
  question: " 6.Quelle propriété CSS est utilisée pour définir la couleur du texte?",
  answers: ["a)  text-color", "b) color", "c) font-color ", "d) text-style"],
  correctAnswer: "b"
   },
   {
    question: " 7.Quel est le rôle de JavaScript dans une page web?",
    answers: ["a)  Gérer la mise en page", "b)Ajouter des styles", "c)Ajouter des fonctionnalités interactives ", "d)Gérer la base de données"],
    correctAnswer: "c"
     },
     {
      question: " 8.Comment déclare-t-on une variable en JavaScript?",
      answers: ["a)  new variable;", "b)var myVar;", "c)variable = myVar; ", "d)declare myVar;"],
      correctAnswer: "b"
       },
       {
       question: "9.Quelle fonction JavaScript est utilisée pour afficher une boîte de dialogue avec un message?",
      answers: ["a)  alert()", "b)prompt()", "c)confirm() ", "d)display()"],
      correctAnswer: "a"
       },
       {
        question: "10. Quel est le langage de balisage utilisé pour structurer le contenu des pages web?",
        answers: ["a) HTML", "b) CSS", "c) JavaScript", "d) Python"],
        correctAnswer: "a"
      },
      {
        question: "11. Quel est le plus grand océan de la Terre?",
        answers: ["a) Océan Atlantique", "b) Océan Indien", "c) Océan Arctique", "d) Océan Pacifique"],
        correctAnswer: "d"
      },
      {
        question: "12. Quelle est la capitale du Japon?",
        answers: ["a) Pékin", "b) Séoul", "c) Tokyo", "d) Bangkok"],
        correctAnswer: "c"
      },
      {
        question: "13. Qui a peint la Joconde?",
        answers: ["a) Vincent van Gogh", "b) Pablo Picasso", "c) Léonard de Vinci", "d) Claude Monet"],
        correctAnswer: "c"
      },
  
];

   
         

//Ces lignes récupèrent les éléments HTML avec les identifiants "quiz-web" et "submit-btn" pour les utiliser dans le scrip
const quizweb = document.getElementById("quiz-web ");
const submitButton = document.getElementById("submit-btn");


//Initialisation de la variable de score
let score = 0;


//showResults() :Cette fonction parcourt chaque question, vérifie la réponse sélectionnée par l'utilisateur, et incrémente le score en cas de réponse correcte.
//Ensuite, elle affiche une alerte indiquant le score total.
function showResults() {
  questions.forEach((question, i) => {
    const selectedInput = document.querySelector(`input[name="q${i}"]:checked`);

    if (selectedInput && selectedInput.value === question.correctAnswer) {
      score++;
    }
  });

  alert(`Votre score est : ${score}/${questions.length}`);
}
//Cette ligne ajoute un écouteur d'événement sur le bouton de soumission ("submit-btn"), de sorte que lorsque le bouton est cliqué, la fonction showResults est appelée.
submitButton.addEventListener("click", showResults);

