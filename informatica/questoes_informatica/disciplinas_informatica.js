const disciplinas = [
    {name: 'Hardware e Software', url: 'hardware_software.html'},
    {name: 'Internet', url: 'internet.html'},
    {name: 'Windows', url: 'windows.html'}
];

let currentPage = 0;
const itemsPerPage = 10;

function renderPage() {
    const container = document.getElementById('disciplinasContainer');
    container.innerHTML = '';

    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;

    disciplinas.slice(start, end).forEach(disciplina => {
        const link = document.createElement('a');
        link.href = disciplina.url;
        link.className = 'disciplina';
        link.textContent = disciplina.name;
        container.appendChild(link);
    });

    updatePaginationButtons();
}

function changePage(offset) {
    const totalPages = Math.ceil(disciplinas.length / itemsPerPage);
    currentPage = Math.min(Math.max(currentPage + offset, 0), totalPages - 1);
    renderPage();
}

function updatePaginationButtons() {
    const totalPages = Math.ceil(disciplinas.length / itemsPerPage);
    document.querySelector('.pagination button:first-child').disabled = currentPage === 0;
    document.querySelector('.pagination button:last-child').disabled = currentPage === totalPages - 1;
}

function searchDisciplinas() {
    const query = document.getElementById('searchBar').value.toLowerCase();
    const filteredDisciplinas = disciplinas.filter(disciplina => disciplina.name.toLowerCase().includes(query));

    const container = document.getElementById('disciplinasContainer');
    container.innerHTML = '';

    filteredDisciplinas.forEach(disciplina => {
        const link = document.createElement('a');
        link.href = disciplina.url;
        link.className = 'disciplina';
        link.textContent = disciplina.name;
        container.appendChild(link);
    });
}

// Inicializa a primeira página
renderPage();

