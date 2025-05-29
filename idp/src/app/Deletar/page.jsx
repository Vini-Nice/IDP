export default function deletar() {
    
    document.getElementById('noticiaForm').addEventListener('submit', async function(event) {
        event.preventDefault();

        const noticiaId = document.getElementById('noticiaId').value;

        if (!noticiaId) {
            document.getElementById('responseContent').textContent = 'ID da noticia inexistente ou errado.';
            return;
        }

        try {
            const response = await fetch(`http://localhost:3000/noticias/${noticiaId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': 'SEGREDO' // Substitua pelo seu token JWT
                }
            });

            const data = await response.json();
            document.getElementById('responseContent').textContent = JSON.stringify(data, null, 2);

             // Aguarda 1 segundo para o usuário ver a resposta, depois recarrega a página
            setTimeout(() => {
                location.reload();
            }, 1000);
        } catch (error) {
            console.error('Erro:', error);
            document.getElementById('responseContent').textContent = 'Erro ao enviar dados'
        }
    });

    return (
        <>
  <h1>Excluir Noticia</h1>
  <form id="noticiaForm">
    <p>Insira o Id da noticia para deletar.</p>
    <label htmlFor="noticiaId">ID da noticia:</label>
    <input type="text" id="noticiaId" name="noticiaId" required="" />
    <button type="submit">Excluir Noticia</button>
  </form>
  <div id="response">
    Resposta do Servidor:
    <pre id="responseContent" />
  </div>
</>
    )
}