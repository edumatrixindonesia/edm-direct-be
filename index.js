import express from "express"
import db from "./config/Database.js"
import router from "./routes/index.js"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import cors from "cors"
import ReservasiRoute from "./routes/ReservasiRoute.js"
// import OfficeRoute from "./routes/OfficeRoute.js"
import SequelizeStore from "connect-session-sequelize"
import session from "express-session";
dotenv.config()

const app = express();

try {
    await db.authenticate();
    console.log('Database connect...');
} catch (error) {
    console.log(error);
}

const sessionStore = SequelizeStore(session.Store)

const store = new sessionStore({
    db:db
})

app.use(session({
    secret: 'somevalue',
    // secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}))

app.use(cors({credentials:true, origin: 'http://localhost:3000'}))
app.use(cookieParser())
app.use(express.json())
app.use(router)

app.use(ReservasiRoute);
// app.use(OfficeRoute);

app.listen(8000, ()=> console.log("Server Running"))



//================================


// import express from "express";
// import cors from "cors";
// import FileUpload from "express-fileupload";
// import session from "express-session";
// import SequelizeStore from "connect-session-sequelize"
// import dotenv from "dotenv"
// import cookieParser from "cookie-parser";
// import ReservasiRoute from "./routes/ReservasiRoute.js"
// import db from "./config/Database.js";
// // import AuthRoute from "./routes/AuthRoute.js"
// import OfficeRoute from "./routes/OfficeRoute.js"
// import asalSekolah from "./routes/AsalSekolahRoute.js"


// dotenv.config();

// const app = express();
// const sessionStore = SequelizeStore(session.Store)

// const store = new sessionStore({
//     db:db
// })

// app.use(session({
//     secret: 'somevalue',
//     // secret: process.env.SESS_SECRET,
//     resave: false,
//     saveUninitialized: true,
//     store: store,
//     cookie: {
//         secure: 'auto'
//     }
// }))

// // app.use(cors());
// app.use(cors({
//     credentials: true,
//     origin: 'http://localhost:3000'
// }));
// app.use(express.json());
// app.use(FileUpload())
// app.use(cookieParser())


// // app.use(UserRoute);
// app.use(ReservasiRoute)
// // app.use(AuthRoute)
// app.use(OfficeRoute)
// app.use(asalSekolah)


// app.listen(process.env.APP_PORT, ()=> {
//     console.log("Server up and running...");
// })