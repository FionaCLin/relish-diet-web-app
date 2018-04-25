var express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser'),
	cons = require('consolidate'),
	dust = require('dustjs-helpers'),
	pg = require('pg'),
	app = express();

// const { Pool, Client } = require('pg')
// const client = new Client()




// DB connect string this is how we login.
const connectionString = 'postgresql://admin:davidphan@localhost:5432/recipesDB'
// Assign Dust Engine To .dust Files
app.engine('dust', cons.dust);

// Set .dust as default extension
app.set('view engine', 'dust');
app.set('views', __dirname + '/views');

// set public folder
app.use(express.static(path.join(__dirname, 'public')))

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//route for now
app.get('/', function(req, res) {
	//this is the login pool sequence. allows access to shit.
	const pool = new pg.Pool({
		connectionString : connectionString,
	})

	pool.connect((err, client, done) => {
		if (err) throw err
		client.query('SELECT * FROM recipes', (err, result) => {
			if(err) {
				return console.error('error running query', err);
			}
			// console.log(result)
			// returns result.rows into my index.dust
			res.render('index', {recipes: result.rows});
			done();
		})
	})
	// res.render('index');
});

// Server
app.listen(3000, function() {
	console.log('Server started on port 3000');
});
