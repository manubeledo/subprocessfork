console.log('conectandome desde mi primer proceso hijo')

process.on('msg', function(msg) {
    console.log(`Mensaje recibido del padre: ${msg}`)
    process.send('hola desde el hijo')
})

function createRandom(num) {
    console.log(`desde la funcion createRandom`)
    // const num = req.query.cant
    console.log(num)
    let random = []
    let repeat = {}
    if(num) {
        for (i=0; i< num; i++){
        random.push(Math.floor(1 + Math.random()*num))
        }
    } else {
        res.send('usted ha ingreso un valor invalido')
    }
    random.sort()

    random.forEach((numero) => repeat[numero] = (repeat[numero] || 0) + 1);

    return repeat
}