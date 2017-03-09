var Koa = require( 'koa' );
var app = new Koa();

app.use( ( ctx ) => {
  ctx.body = 'Hello, world!';
} );

app.listen( 3000 );
