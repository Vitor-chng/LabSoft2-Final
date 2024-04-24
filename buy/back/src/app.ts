import express from 'express'
import { env } from './config/env'
import {logger} from './config/logger'
import { errorHandler } from "./middleware/errorHandler"
import {getRepository, MainDataSource} from './config/db/data-source'
import { ingressoRouter } from "./core/components/ingresso/router";
import { usuarioRouter } from "./core/components/usuario/router";



const PORT = env.serverPort
const log = logger({ context: 'App' })

async function main() {
	const app = express()
	const cors = require('cors')

	// Nao funciona com formdata, usar json raw
	app.use(express.json())

	await MainDataSource.initialize()
	log.info('Database connected successfully!')

	app.get(`/${env.appName}/health`, (req, res) => {
		return res.status(200).send()
	})

	app.use(cors())

	app.use(errorHandler);

	app.use("/ingresso", ingressoRouter);
	app.use("/usuario", usuarioRouter);

	app.get("/rates", (_req, res, _next) => {
		res.set({
		  "Access-Control-Allow-Origin": "*",
		  "Cache-Control": "no-cache",
		  Connection: "keep-alive", // allowing TCP connection to remain open for multiple HTTP requests/responses
		  "Content-Type": "text/event-stream", // media type for Server Sent Events (SSE)
		});
		res.flushHeaders();
	  
		const interval = setInterval(() => {
		  const stock1Rate = Math.floor(Math.random() * 100000);
		  const stock2Rate = Math.floor(Math.random() * 60000);
		  res.write(`data: ${JSON.stringify({ stock1Rate, stock2Rate })}\n\n`);
		}, 2000);
	  
		res.on("close", () => {
		  clearInterval(interval);
		  res.end();
		});
	  });


	app.listen(PORT, () => {
		console.log(`Server running on port ${PORT}`)
	})
}



main().catch(error => {
	log.error('catch main application')
	log.error(error)
	process.exit(1)
})
