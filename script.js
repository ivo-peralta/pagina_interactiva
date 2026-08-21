const searchInput = document.querySelector('#search-input');
const animalButtons = [...document.querySelectorAll('[data-raza]')];
const resultCount = document.querySelector('#result-count');
const emptyState = document.querySelector('#empty-state');

// Permite buscar sin diferenciar mayúsculas ni acentos.
function normalizarTexto(texto) {
	return texto
		.toLocaleLowerCase('es')
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '');
}

// Muestra solo los animales cuyo nombre coincide con la búsqueda.
function filtroAnimalRaza(texto) {
	const termino = normalizarTexto(texto.trim());
	let visibles = 0;

	animalButtons.forEach((button) => {
		const nombre = normalizarTexto(button.dataset.animal || button.dataset.raza || '');
		const coincide = nombre.includes(termino);
		button.hidden = !coincide;
		if (coincide) visibles += 1;
	});

	resultCount.textContent = `${visibles} ${visibles === 1 ? 'especie' : 'especies'}`;
	emptyState.hidden = visibles !== 0;
}

// Ejecuta el filtro cada vez que cambia el texto.
function filtroBusqueda(evento) {
	filtroAnimalRaza(evento.target.value);
}

searchInput.addEventListener('input', filtroBusqueda);
