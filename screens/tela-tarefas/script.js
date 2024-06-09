document.getElementById('medicamento-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('medicamento-nome').value;
    const horario = document.getElementById('medicamento-horario').value;

    const lista = document.getElementById('medicamento-lista');
    
    const novoItem = document.createElement('li');
    novoItem.textContent = `${nome} - ${horario}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Remover';
    deleteButton.addEventListener('click', function() {
        lista.removeChild(novoItem);
    });
    
    novoItem.appendChild(deleteButton);
    lista.appendChild(novoItem);

    document.getElementById('medicamento-form').reset();
});
