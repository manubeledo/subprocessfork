let data = {
        args: process.argv.slice(2),
        plataforma: process.platform,
        version: process.version,
        memoria: process.memoryUsage(),
        path: process.argv[1],
        processid: process.pid,
        carpeta: process.cwd()
}

module.exports = data