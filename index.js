const express = require('express');
const script = express();

let contador = 0;
let incrementar1Count = 0;
let incrementar5Count = 0;

script.get('/contador', (req, res) => {
  res.send(`Valor atual do contador: ${contador}`);
});

script.get('/incrementar1', (req, res) => {
  contador += 1;
  incrementar1Count += 1;
  res.send(`Valor atual do contador após incrementar 1: ${contador}`);
});

script.get('/incrementar5', (req, res) => {
  contador += 5;
  incrementar5Count += 1;
  res.send(`Valor atual do contador após incrementar 5: ${contador}`);
});

script.get('/relatorio', (req, res) => {
  const relatorio = {
    valorAtual: contador,
    incrementar1Count: incrementar1Count,
    incrementar5Count: incrementar5Count
  };
  res.json(relatorio);
});
script.get('/alterarcontador/:valor', (req, res) => {
    const novoValor = parseInt(req.params.valor);
    contador = novoValor;
    res.send(`Contador alterado para: ${contador}`);
  });
  script.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
  });