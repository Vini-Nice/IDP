export default funciton Criar

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teste de Upload de Livro</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        form {
            display: flex;
            flex-direction: column;
            max-width: 400px;
            margin-bottom: 20px;
        }
        label {
            margin-top: 10px;
        }
        input[type="text"],
        input[type="file"] {
            padding: 8px;
            margin-top: 5px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        button {
            padding: 10px 15px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        #response {
            margin-top: 20px;
            padding: 15px;
            border: 1px solid #ccc;
            border-radius: 4px;
            background-color: #f9f9f9;
        }
    </style>
</head>
<body>

    <h1>Adicionar Nova Noticia</h1>

    <form id="noticiaForm">
        <label for="titulo">Título:</label>
        <input type="text" id="titulo" name="titulo" required>

        <label for="descricao">Descrição:</label>
        <input type="text" id="descricao" name="descricao" required>

        <label for="data">Data da Postagem:</label>
        <input type="date" id="data" name="data" required>

        <label for="imagem">Imagem da Postagem:</label>
        <input type="file" id="imagem" name="imagem" accept="image/*" required>

        <label for="usuario">ID do Usuário:</label>
        <input type="text" id="usuario" name="usuario" required>

        <label for="categoria">Categoria da Noticia:</label>
        <input type="text" id="categoria" name="categoria" required>

        <button type="submit">Adicionar Noticia</button>
    </form>

    <div id="response">
        Resposta do Servidor:
        <pre id="responseContent"></pre>
    </div>

    
</body>
</html>