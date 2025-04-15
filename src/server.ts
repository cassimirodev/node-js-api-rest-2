/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import fastify  from 'fastify';

const app = fastify()

app.get('/hello', () => {
  return 'Hello World'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running')
  })
