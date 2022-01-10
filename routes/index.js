const { Router } = require("express");
const router = Router();
const { fork } = require("child_process")


function serverRouter(app){
    app.use("/api", router);

    router.get('/random', (req, res) => {
        let cant = req.query.cant

        console.log(cant)

        const child_process = fork('child_process.js')

        child_process.send('hola desde el padre')

        child_process.on('msg', msg => {
            res.send(`Mensaje desde el hijo: ${msg}`)
        })
    })
}

module.exports = serverRouter;