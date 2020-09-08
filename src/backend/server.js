const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const db_uri = "mongodb://admin:password@localhost/?authSource=admin&authMechanism=SCRAM-SHA-256";

let express = require('express');
let app = express();

app.get( '/pages/', ( req, res ) => {
  MongoClient.connect( db_uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }, (err, client) => {
    if(err) throw err;

    let cursor = client.db('notesjs').collection( 'Pages' ).find();

    cursor.toArray( ( err, result ) => {
      if (err) throw err;
      res.send( result );
    } );
  } );
} );

app.get( '/page/:id', ( req, res ) => {

  MongoClient.connect( db_uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }, (err, client) => {
    if(err) throw err;

    let page_id = {
      page: new ObjectID( req.params.id )
    };

    let cursor = client.db('notesjs').collection( 'Notes' ).find( page_id );

    cursor.toArray( ( err, result ) => {
      if (err) throw err;
      res.send( result );
    } );
  } );
} );

let server = app.listen( 8081, () => {
  let host = server.address().address;
  let port = server.address().port;
} );
