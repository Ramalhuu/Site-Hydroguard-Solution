const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.btnSlide.prev');
  const nextBtn = document.querySelector('.btnSlide.next');
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('ativo', i === index);
    });
  }

  prevBtn.addEventListener('click', () => {
    current = (current === 0) ? slides.length - 1 : current - 1;
    showSlide(current);
  });

  nextBtn.addEventListener('click', () => {
    current = (current === slides.length - 1) ? 0 : current + 1;
    showSlide(current);
  });

  showSlide(current);
const quizData = [
      { question: "1. O que são enchentes?", options: ["Chuvas fracas", "Inundações causadas por excesso de água", "Falta de água nas cidades", "Tempestades de areia"], answer: 1 },
      { question: "2. Qual tecnologia pode ajudar a prever enchentes?", options: ["Sensores de nível e Arduino", "Lâmpadas LED", "Fones de ouvido", "Smart TV"], answer: 0 },
      { question: "3. Qual o principal objetivo de um sistema de alerta de enchentes?", options: ["Entretenimento", "Aumentar vendas", "Proteger vidas e bens", "Melhorar a internet"], answer: 2 },
      { question: "4. Qual plataforma pode ser usada para avisos em tempo real?", options: ["Aplicativo móvel", "Jornais impressos", "Rádio AM", "Outdoor"], answer: 0 },
      { question: "5. Qual é um benefício de um sistema inteligente contra enchentes?", options: ["Baixo consumo de energia", "Automatização de alertas", "Transmissão de vídeos", "Iluminação de ruas"], answer: 1 },
      { question: "6. Quem é o público-alvo principal?", options: ["Fãs de tecnologia", "Estudantes de arte", "Moradores em áreas de risco", "Turistas"], answer: 2 },
      { question: "7. O que o Arduino faz nesse sistema?", options: ["Faz chamadas", "Monitora níveis de água", "Tira fotos", "Filma enchentes"], answer: 1 },
      { question: "8. Qual componente mede o nível da água?", options: ["Microfone", "Sensor de umidade", "Sensor de nível", "Motor DC"], answer: 2 },
      { question: "9. Como o usuário é alertado sobre risco de enchente?", options: ["Sinal de fumaça", "Mensagem no aplicativo", "Som ambiente", "Pombo-correio"], answer: 1 },
      { question: "10. Por que as enchentes são perigosas?", options: ["Deixam a cidade mais fria", "Podem causar danos e mortes", "Interrompem a TV", "Molham as roupas"], answer: 1 }
    ];

    let currentQuestion = 0;
    let score = 0;

    const quizEl = document.getElementById("quiz");
    const botaoProximo = document.getElementById("botao-proximo");
    const resultEl = document.getElementById("result");

    function showQuestion() {
      const q = quizData[currentQuestion];
      quizEl.innerHTML = `
        <div class="question">${q.question}</div>
        <div class="options">
          ${q.options.map((opt, i) => `
            <label>
              <input type="radio" name="answer" value="${i}"> ${opt}
            </label>`).join('')}
        </div>
      `;
    }

    botaoProximo.addEventListener("click", () => {
      const selected = document.querySelector('input[name="answer"]:checked');
      if (!selected) {
        alert("Selecione uma resposta.");
        return;
      }

      const resposta = parseInt(selected.value);
      if (resposta === quizData[currentQuestion].answer) {
        score++;
      }

      currentQuestion++;
      if (currentQuestion < quizData.length) {
        showQuestion();
      } else {
        quizEl.style.display = "none";
        botaoProximo.style.display = "none";
        resultEl.innerHTML = `Você acertou ${score} de ${quizData.length} perguntas.`;
      }
    });

    showQuestion();