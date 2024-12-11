const flashcards = document.querySelector(".flashcards");
const cardForm = document.querySelector(".card-form");
const question = document.querySelector("#question");
const answer = document.querySelector("#answer");
const filterInput = document.querySelector("#filter");

let id = 0;

let myLocal = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

function create() {
  cardForm.style.display = "flex";
}

function cancel() {
  cardForm.style.display = "none";
}

function removeAll() {
  if (confirm("Deseja mesmo excluir todos os cards?")) {
    localStorage.clear();
    flashcards.innerHTML = "";
    myLocal = [];
  }
}

function save() {
  const subject = document.querySelector("#subject").value;
  const topic = document.querySelector("#topic").value;
	
  if (question.value.length >= 1 && answer.value.length >= 1) {
    let flashcardInfo = {
      question: question.value,
      answer: answer.value,
      subject: subject || "Geral",
      topic: topic || "Geral",
      id: id,
    };

    myLocal.push(flashcardInfo);
    localStorage.setItem("items", JSON.stringify(myLocal));

    addCard(myLocal[myLocal.length - 1]);
    question.value = "";
    answer.value = "";
    document.querySelector("#subject").value = "";
    document.querySelector("#topic").value = "";
  }
}

myLocal.forEach(addCard);

// Adicionar flashcards ao DOM ao carregar ou criar
function addCard(card) {
  cardForm.style.display = "none";

  if (card.question.length >= 1 && card.answer.length >= 1) {
    let div = document.createElement("div");
    let h2question = document.createElement("h2");
    let h2answer = document.createElement("h2");
    let btn = document.createElement("button");
    let remove = document.createElement("span");
    let number = document.createElement("span");
    let subject = document.createElement("p");
    let topic = document.createElement("p");

    div.className = "flashcard";
    div.setAttribute("id", id);
    div.dataset.subject = card.subject || ""; // Matéria
    div.dataset.topic = card.topic || ""; // Assunto

    remove.className = "remove";
    number.className = "number";

    h2question.setAttribute("style", "text-align: justify");
    h2question.innerHTML = card.question;

    h2answer.setAttribute(
      "style",
      "text-align: center; display: none; color: green"
    );
    h2answer.innerHTML = card.answer;
    
    subject.innerHTML = `Matéria: ${card.subject || "Geral"}`;
    subject.style.fontStyle = "italic";

    btn.innerHTML = "mostrar";
    remove.innerHTML = "x";
    number.innerHTML = id + 1;

    div.appendChild(h2question);
    div.appendChild(h2answer);
    div.appendChild(subject);
    div.appendChild(topic);
    div.appendChild(btn);
    div.appendChild(remove);
    div.appendChild(number);

    flashcards.appendChild(div);

    btn.addEventListener("click", () => {
      h2answer.style.display === "none"
        ? (h2answer.style.display = "block")
        : (h2answer.style.display = "none");

      btn.innerHTML === "mostrar"
        ? (btn.innerHTML = "esconder")
        : (btn.innerHTML = "mostrar");
    });

    remove.addEventListener("click", (e) => {
      let flashcardId = e.target.parentNode.id;
      if (confirm(`Deseja mesmo excluir o card ${Number(flashcardId) + 1}?`)) {
        myLocal.splice(flashcardId, 1);
        localStorage.setItem("items", JSON.stringify(myLocal));
        window.location.reload();
      }
    });

    id++;
  }
}

//Exportar flashcards como JSON
function exportJSON() {
  const dataStr = JSON.stringify(myLocal);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement("a");
  a.href = url;
  a.download = "flashcards.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// Importar flashcards de um arquivo JSON
function importJSON() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".json";
  
  input.onchange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = (e) => {
      const content = e.target.result;
      try {
        const importedCards = JSON.parse(content);
        myLocal = importedCards; // Atualiza o array com os dados importados
        localStorage.setItem("items", JSON.stringify(myLocal));
        flashcards.innerHTML = ""; // Limpa os cards existentes
        importedCards.forEach(addCard); // Adiciona os cards importados ao DOM
      } catch (error) {
        alert("Erro ao importar o arquivo JSON.");
      }
    };
    
    reader.readAsText(file);
  };
  
  input.click(); // Abre o seletor de arquivos
}

// Filtrar flashcards
filterInput.addEventListener("input", () => {
	const filterText = filterInput.value.toLowerCase();
	
	document.querySelectorAll(".flashcard").forEach((card) => {
		const question = card.querySelector("h2").innerText.toLowerCase();
		const subject = card.dataset.subject?.toLowerCase() || "";
		const topic = card.dataset.topic?.toLowerCase() || "";
		
		if (
			question.includes(filterText) ||
			subject.includes(filterText) ||
			topic.includes(filterText) 
		)	{
			card.style.display = "block";
		} else {
			card.style.display = "none";
		}
	 });
 });

// Inicia os flashcards salvos
myLocal.forEach(addCard);
