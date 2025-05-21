CREATE DATABASE Site_noticias;

USE Site_noticias;

CREATE TABLE Noticias (
	id_noticias INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	titulo TEXT(65535) NOT NULL,
	descricao TEXT(65535) NOT NULL,
	data DATE NOT NULL,
	imagem BLOB,
	usuario INT NOT NULL,
	categoria VARCHAR(255) NOT NULL
);

CREATE TABLE Usuarios (
	id_usuario INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	nome VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	senha INT NOT NULL,
	cargo VARCHAR(255) NOT NULL
);

INSERT INTO Usuarios (nome, email, senha, cargo) 
VALUES
    ('Ana Silva', 'ana.silva@gestao.com', 784512, 'adm'),
    ('Carlos Oliveira', 'carlos.oliveira@gestao.com', 965823, 'adm'),

    ('Mariana Costa', 'mariana.costa@professor.com', 147258, 'professor'),
    ('Pedro Santos', 'pedro.santos@professor.com', 258369, 'professor'),
    ('Juliana Pereira', 'juliana.pereira@professor.com', 369147, 'professor'),
    ('Ricardo Almeida', 'ricardo.almeida@professor.com', 482573, 'professor'),
    ('Fernanda Lima', 'fernanda.lima@professor.com', 573684, 'professor'),
    ('Roberto Souza', 'roberto.souza@professor.com', 684795, 'professor'),
    ('Patricia Rocha', 'patricia.rocha@professor.com', 795816, 'professor'),
    ('Marcos Ferreira', 'marcos.ferreira@professor.com', 816927, 'professor'),
    ('Lucia Mendes', 'lucia.mendes@professor.com', 927138, 'professor'),
    ('Gustavo Barbosa', 'gustavo.barbosa@professor.com', 138249, 'professor'),

    ('João Gomes', 'joao.gomes@gremio.com', 451267, 'gremio'),
    ('Maria Ribeiro', 'maria.ribeiro@gremio.com', 562378, 'gremio'),
    ('Lucas Martins', 'lucas.martins@gremio.com', 673489, 'gremio'),
    ('Sofia Cardoso', 'sofia.cardoso@gremio.com', 784591, 'gremio'),
    ('Mateus Dias', 'mateus.dias@gremio.com', 895612, 'gremio'),
    ('Laura Teixeira', 'laura.teixeira@gremio.com', 916723, 'gremio'),
    ('Enzo Moreira', 'enzo.moreira@gremio.com', 127834, 'gremio'),
    ('Valentina Nunes', 'valentina.nunes@gremio.com', 238945, 'gremio'),
    ('Gabriel Castro', 'gabriel.castro@gremio.com', 349156, 'gremio'),
    ('Helena Carvalho', 'helena.carvalho@gremio.com', 451267, 'gremio'),

    ('Rafael Pinto', 'rafael.pinto@aluno.com', 567812, 'aluno'),
    ('Beatriz Ramos', 'beatriz.ramos@aluno.com', 678923, 'aluno'),
    ('Bruno Azevedo', 'bruno.azevedo@aluno.com', 789134, 'aluno'),
    ('Isabela Correia', 'isabela.correia@aluno.com', 891245, 'aluno'),
    ('Diego Gonçalves', 'diego.goncalves@aluno.com', 912356, 'aluno'),
    ('Larissa Lopes', 'larissa.lopes@aluno.com', 123467, 'aluno'),
    ('Thiago Monteiro', 'thiago.monteiro@aluno.com', 234578, 'aluno'),
    ('Yasmin Barros', 'yasmin.barros@aluno.com', 345689, 'aluno'),
    ('Eduardo Freitas', 'eduardo.freitas@aluno.com', 456791, 'aluno'),
    ('Clara Andrade', 'clara.andrade@aluno.com', 567812, 'aluno'),
    ('Felipe Vasconcelos', 'felipe.vasconcelos@aluno.com', 678923, 'aluno'),
    ('Marina Magalhães', 'marina.magalhaes@aluno.com', 789134, 'aluno'),
    ('Vinícius Peixoto', 'vinicius.peixoto@aluno.com', 891245, 'aluno'),
    ('Luiza Tavares', 'luiza.tavares@aluno.com', 912356, 'aluno'),
    ('Igor Fonseca', 'igor.fonseca@aluno.com', 123467, 'aluno'),
    ('Manuela Menezes', 'manuela.menezes@aluno.com', 234578, 'aluno'),
    ('Daniel Brito', 'daniel.brito@aluno.com', 345689, 'aluno'),
    ('Giovanna Leal', 'giovanna.leal@aluno.com', 456791, 'aluno'),
    ('Leonardo Cunha', 'leonardo.cunha@aluno.com', 567812, 'aluno'),
    ('Camila Rezende', 'camila.rezende@aluno.com', 678923, 'aluno'),
    ('André Silveira', 'andre.silveira@aluno.com', 789134, 'aluno'),
    ('Bruna Figueiredo', 'bruna.figueiredo@aluno.com', 891245, 'aluno'),
    ('Otávio Prado', 'otavio.prado@aluno.com', 912356, 'aluno'),
    ('Natalia Souza', 'natalia.souza@aluno.com', 123467, 'aluno'),
    ('Henrique Rocha', 'henrique.rocha@aluno.com', 234578, 'aluno'),
    ('Letícia Fernandes', 'leticia.fernandes@aluno.com', 345689, 'aluno'),
    ('Caio Almeida', 'caio.almeida@aluno.com', 456791, 'aluno'),
    ('Lorena Pires', 'lorena.pires@aluno.com', 567812, 'aluno'),
    ('Alexandre Cruz', 'alexandre.cruz@aluno.com', 678923, 'aluno'),
    ('Aline Santana', 'aline.santana@aluno.com', 789134, 'aluno'),
    ('Hugo Batista', 'hugo.batista@aluno.com', 891245, 'aluno'),
    ('Rafaela Dias', 'rafaela.dias@aluno.com', 912356, 'aluno'),
    ('Vitor Neves', 'vitor.neves@aluno.com', 123467, 'aluno'),
    ('Melissa Lopes', 'melissa.lopes@aluno.com', 234578, 'aluno'),
    ('Renan Queiroz', 'renan.queiroz@aluno.com', 345689, 'aluno'),
    ('Tatiane Moura', 'tatiane.moura@aluno.com', 456791, 'aluno');
        
INSERT INTO Noticias (titulo, descricao, data, imagem, usuario, categoria) VALUES
(
    'Lançamento de Novo Celular Revoluciona o Mercado',
    'O novo modelo promete desempenho superior e tecnologia inédita em câmeras.',
    '2025-05-10',
    LOAD_FILE('/caminho/imagens/celular.jpg'),
    1,
    'Tecnologia'
),
(
    'Evento de Esportes Reúne Atletas do Brasil Todo',
    'O campeonato nacional de atletismo começa neste fim de semana em São Paulo.',
    '2025-05-12',
    LOAD_FILE('/caminho/imagens/esportes.jpg'),
    2,
    'Esporte'
),
(
    'Governo Anuncia Novo Programa de Educação',
    'Investimento promete melhorar a qualidade de ensino nas escolas públicas.',
    '2025-05-13',
    LOAD_FILE('/caminho/imagens/educacao.jpg'),
    3,
    'Educação'
),
(
    'Nova Série da TV Bate Recordes de Audiência',
    'A produção nacional alcançou mais de 10 milhões de telespectadores na estreia.',
    '2025-05-14',
    LOAD_FILE('/caminho/imagens/serie.jpg'),
    4,
    'Entretenimento'
),
(
    'Feira de Empregos Abre Mil Vagas em Diversas Áreas',
    'O evento ocorrerá no centro de convenções e terá entrada gratuita.',
    '2025-05-15',
    LOAD_FILE('/caminho/imagens/empregos.jpg'),
    5,
    'Economia'
);

        
SELECT nome, email
FROM Usuarios
WHERE cargo = 'aluno';

SELECT nome, email
FROM Usuarios
WHERE cargo = 'gremio';

SELECT nome, email
FROM Usuarios
WHERE cargo = 'professor';

SELECT nome, email
FROM Usuarios
WHERE cargo = 'adm';