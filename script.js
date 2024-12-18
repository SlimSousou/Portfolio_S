
const quizData = [
  { 
      question: "Que signifie HTML ?", a: "Hyper Text Markup Language",
       b: "Hyper Text Machine Language", c: "High Text Markup Language",
        d: "Hyper Tool Markup Language",
         correct: "a" 
      },
  { question: "Quelle balise est utilisée pour les titres principaux ?", a: "<head>", b: "<h1>", c: "<title>", d: "<header>", correct: "b" },
  { question: "Quelle propriété CSS permet de changer la couleur du texte ?", a: "font-color", b: "text-style", c: "color", d: "text-color", correct: "c" },
  { question: "Quel attribut permet d'ajouter un lien dans une balise <a> ?", a: "src", b: "href", c: "link", d: "url", correct: "b" },
  { question: "Quel langage est utilisé pour ajouter des interactivités sur une page web ?", a: "HTML", b: "CSS", c: "JavaScript", d: "PHP", correct: "c" },
  { question: "Quel sélecteur CSS cible toutes les balises d'un type donné ?", a: "#id", b: ".class", c: "*", d: "balise", correct: "d" },
  { question: "Quelle balise est utilisée pour inclure du code JavaScript ?", a: "<style>", b: "<script>", c: "<js>", d: "<code>", correct: "b" },
  { question: "Quelle méthode JavaScript affiche un message dans la console ?", a: "console.log()", b: "alert()", c: "print()", d: "log()", correct: "a" },
  { question: "Comment centrer un élément avec CSS ?", a: "text-align: center", b: "align: center", c: "margin: auto", d: "center: true", correct: "c" },
  { question: "Quelle est l'extension d'un fichier JavaScript ?", a: ".html", b: ".css", c: ".js", d: ".java", correct: "c" },
];
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
  deselectAnswers()
  const currentQuizData = quizData[currentQuiz]
  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
  let answer
  answerEls.forEach(answerEl => {
      if (answerEl.checked) {
          answer = answerEl.id
      }
  })
  return answer
}
submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if (answer) {
      if (answer === quizData[currentQuiz].correct) {
          score++
      }
      currentQuiz++
      if (currentQuiz < quizData.length) {
          loadQuiz()
      } else {
          quiz.innerHTML = `
     <h2>You answered ${score}/${quizData.length} questions correctly</h2>
     <button onclick="location.reload()">Reload</button>
     `
      }
  }
})
