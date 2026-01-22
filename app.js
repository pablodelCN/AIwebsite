const express = require('express');
const app = express();
const port = 3000;

//Esta es la ruta principal
app.get('/', (req, rest) => {
    rest.send('<h1>¡Mi página de IA está viva!</h1><p> Proximamente contenido increíble</p>');
});

app.listen(port, () => {
    console.log('Servidor corriendo en http://localhost:${port}');
});