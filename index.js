// import express from "express"
// import db from "./config/Database.js"
// import router from "./routes/index.js"
// import cookieParser from "cookie-parser"
// import dotenv from "dotenv"
// import cors from "cors"
// import ReservasiRoute from "./routes/ReservasiRoute.js"
// // import OfficeRoute from "./routes/OfficeRoute.js"
// import SequelizeStore from "connect-session-sequelize"
// import session from "express-session";

// import WhatsappRoute from "./routes/WaRoute.js"
// dotenv.config()

// const app = express();

// try {
//     await db.authenticate();
//     console.log('Database connect...');
// } catch (error) {
//     console.log(error);
// }

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

// app.use(cors({credentials:true, origin: 'http://localhost:3000'}))
// // app.use(cors({ origin: '*'}))
// app.use(cookieParser());
// app.use(express.json());
// app.use(router)

// app.use(ReservasiRoute);
// app.use(WhatsappRoute);
// // app.use(OfficeRoute);

// app.listen(8000, ()=> console.log("Server Running"))



//================================


import express from "express";
import cors from "cors";
import FileUpload from "express-fileupload";
import session from "express-session";
import SequelizeStore from "connect-session-sequelize"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import ReservasiRoute from "./routes/ReservasiRoute.js"
import db from "./config/Database.js";
import path from 'path'
import { fileURLToPath } from "url";
// import AuthRoute from "./routes/AuthRoute.js"
// import OfficeRoute from "./routes/OfficeRoute.js"
import WhatsappRoute from "./routes/WaRoute.js"
import UserRoute from "./routes/index.js"
import OfficeRoute from "./routes/OfficeRoute.js"
import GuruRoute from "./routes/GuruRoute.js"
import AsalSekolah from "./routes/AsalSekolahRoute.js"
import MapelRoute from "./routes/MapelRoute.js"
import KotaRoute from "./routes/KotaRoute.js"
import KelasRoute from "./routes/KelasRoute.js"
import LayananRoute from "./routes/LayananRoute.js"
import ProgramRoute from "./routes/ProgramRoute.js"
import FaqRoute from "./routes/FaqRoute.js"
import KeunggulanRoute from "./routes/KeunggulanRoute.js"
import FiturProgramRoute from "./routes/FiturProgramRoute.js"
import PilihanProgramRoute from "./routes/PilihanProgramRoute.js"
import PromoRoute from "./routes/PromoRoute.js"

//TAGS
import TagsRoute from "./routes/Tags/TagsKedinasanRoute.js"
//KELAS
import KedinasanRoute from "./routes/Kelas/KedinasanRoute.js"


dotenv.config();

const app = express();
const sessionStore = SequelizeStore(session.Store)

const store = new sessionStore({
    db:db
})

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

// app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(FileUpload());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(ReservasiRoute)
app.use(UserRoute)
app.use(WhatsappRoute)
app.use(OfficeRoute)
app.use(GuruRoute)
app.use(AsalSekolah)
app.use(MapelRoute)
app.use(KotaRoute)
app.use(KelasRoute)
app.use(LayananRoute)
app.use(ProgramRoute)
app.use(FaqRoute)
app.use(KeunggulanRoute)
app.use(FiturProgramRoute)
app.use(PilihanProgramRoute)
app.use(PromoRoute)

//TAGS
app.use(TagsRoute)

//KELAS
app.use(KedinasanRoute)



app.listen(process.env.APP_PORT, ()=> {
    console.log("Server up and running...");
})