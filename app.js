const express = require('express');
const app = express();
const filme = require('./models/filme')

app.use(express.json());



app.get("/retornarFilmes", async (req, res) => {
    const filmes = await filme.findAll();
    res.status(200).json({ filmes });

});

app.get('/retornarGenero/:genero', async (req, res) => {
    const generos = await filme.findAll({
      where: {
        genero: req.params.genero,
      },
    });
  
    res.status(200).json({ generos });
  });


app.delete('/deletar/:id', async (req, res) => {
    await filme.destroy({
        where: {
            id: req.params.id,
        },
    }).then(() => {
        return res.json({
            erro: false,
            mensagem: "Filme deletado com sucesso!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: filme não deletado com  sucesso!"
        });
    })
})


app.put('/atualizar/:id', async (req, res) => {


    await filme.update(
        req.body,
        {
            where: { id: req.params.id },
        }

    ).then(() => {
        return res.json({
            erro: false,
            mensagem: "Filme Atualizado com sucesso!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Filme não atualizado com sucesso!"
        });

    });
});


app.post("/cadastrar", async (req, res) => {
    console.log(req.body)

    await filme.create(req.body)
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "Filme cadastrado com sucesso!"
            });
        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Filme não cadastrado com sucesso!"
            });

        });



});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080 ")
})