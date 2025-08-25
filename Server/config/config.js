//PORT
process.env.PORT = process.env.PORT || 3080;

process.env.APP_URI = "http://localhost:3080"

//Auth Port
process.env.AuthPORT = "http://localhost:9000/api"

//DB

process.env.DB_USER = 'neuroneAdmin';

process.env.DB_PWD = 'DK,V-Dk6-*Pd-PM';

//process.env.URI = "mongodb://localhost:27017/neuronegm";
//fixed to use .env variable (mongodb URI)
process.env.URI = process.env.URI || "mongodb://localhost:27017/neuronegm";

process.env.TOKEN_SECRET = "supersecretoken"

