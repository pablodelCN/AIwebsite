const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// app.use(express.static(path.join(__dirname, 'public')));
// app.set('view engine', 'ejs');


// //Esta es la ruta principal
// app.get('/', (req, rest) => {
//     rest.send('<h1>¡Mi página de IA está viva!</h1><p> Proximamente contenido increíble</p>');
//     // res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/perfil/:nombre', (req, res) => {
//     const usuario = req.params.nombre;
//     //Aquí decides que inyectar en la plantilla 
//     res.render('perfil', {nombreUsuario: usuario });
// });

// app.listen(port, () => {
//     console.log(`Servidor corriendo en http://localhost:${port}`);
// });

const axios = require('axios');

app.use(express.json()); //Para que express entienda el texto que envía el chat

app.post('/api/chat/', async (req,res) => {
    const {mensaje} = req.body;

    try {
        //Aquí conectaras con un servicio AI
        //Por ahora simularemos la respuesta para que simule la interfaz
        const respuestaIA = `Recibí tu mensaje: "${mensaje}". Como IA, te recuerdo: Entrena tu musculo límite.`;

        res.json({respuesta:    respuestaIA });
    } catch (error) {
        res.status(500).json({error: "Error al conectar con la IA" });
    }
});