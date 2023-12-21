// Função para adicionar uma nova tarefa à lista
function adicionarTarefa() {
    var novaTarefa = $('#tarefa').val();

    // Verificar se o campo não está vazio
    if (novaTarefa.trim() !== '') {
        // Criar um novo item de lista (li) com a tarefa
        var novoItem = $('<li>' + novaTarefa + '</li>');

        // Adicionar o novo item à lista
        $('#listaTarefas').append(novoItem);

        // Limpar o campo de entrada
        $('#tarefa').val('');

        // Adicionar um evento de clique ao novo item para marcar como concluído
        novoItem.click(function() {
            $(this).toggleClass('completed');
        });
    }
}