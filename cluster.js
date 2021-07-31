const cluster = require('cluster')
const os = require('os')
const pid = process.pid

if(cluster.isMaster){
	const cpusCount = os.cpus().length
	console.log(cpusCount)
	console.log(pid)
	for (var i = 0; i < cpusCount - 1; i++) {
		const worker = cluster.fork()
		worker.on('exit', ()=>{
			console.log(`Worker died. Pid: ${pid}`)
			cluster.fork()
		})
	}
	
}

if(cluster.isWorker){
	require('./worker.js')
}