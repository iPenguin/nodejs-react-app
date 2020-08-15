const MongoClient = require('mongodb').MongoClient;
const db_uri = "mongodb+srv://admin:password@localhost/notesjs";

export default class Connection {
  constructor() {
    //super();

    this._client = new MongoClient( db_uri );
  }

  db() {
    return this._client.db();
  }
}
