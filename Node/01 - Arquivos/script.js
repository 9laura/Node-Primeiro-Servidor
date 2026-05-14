const fs = require('fs')

fs.writeFileSync(
    "mensagem.txt",
    "Criei um bloco de notas com node.js"
)

console.log("Arquivo criado com sucesso!")

/*crie um bloco de notas com seu nome, turma, curso e filme favorito*/

//JSON  
const dados = {
    nome: "João",
    turma: "DS",
    curso: "Desenvolvimento de Sistemas",
    filmeFavorito: "Vingadores"
}

fs.writeFileSync(
    "dados.json",
    JSON.stringify(dados, null, 2)
)

console.log("Arquivo JSON criado com sucesso!")

//JSON  
const pessoa = {
    nome: "Laura",
    idade: "25",
    cidade: "Suzano"
}

fs.writeFileSync(
    "pessoa.json",
    JSON.stringify(pessoa)
)

console.log("Json criado com sucesso!")

/*Crie um arquivo JSON chamado "informacoes" com
seu nome, idade, telefone e email*/

//npm install docx -> biblioteca do word

//Importar partes específicas da biblioteca word
const {
    Document,
    Packer,
    Paragraph,
    TextRun
} = require("docx");

const doc = new Document({

    sections: [
        {
            properties: {},

            children: [
                new Paragraph({
                    children: [
                        new TextRun("Arquivo Word")
                    ]
                }),

                new Paragraph({
                    children: [
                        new TextRun("Criei um arquivo word usando node.js")
                    ]
                })
            ]
        }
    ]
})
Packer.toBuffer(doc)
.then((buffer) => {
    fs.writeFileSync (
        "relatorio.docx",
        buffer
    )
    console.log("O word foi criado")
})

const informacoes = {
    nome: "Laura",
    idade: "25",
    telefone: "11999999999",
    email: "laura@email.com"
}

fs.writeFileSync(
    "informacoes.json",
    JSON.stringify(informacoes)
)

console.log("Arquivo JSON criado com sucesso!")