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
import WhatsappRoute from "./routes/WaRoute.js"
import UserRoute from "./routes/index.js"
import OfficeRoute from "./routes/OfficeRoute.js"
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
import TestimoniRoute from "./routes/TestimoniRoute.js"
import KotaTestRoute from "./routes/KotaTestRoute.js"
import MapelWilayahRoute from "./routes/Mapel-WilayahRoute.js"
import GuruRoute from "./routes/GuruRoute.js"
import KecamatanRoute from "./routes/KecamatanRoute.js"
import SliderHeaderRoute from "./routes/SliderHeaderRoute.js"
import SliderHeaderRoute2 from "./routes/SliderHeaderRoute2.js"

//TAGS
import TagsRoute from "./routes/Tags/TagsKedinasanRoute.js"
//KELAS
import KedinasanRoute from "./routes/Kelas/PilihanKelasRoute.js"
import IbuKotaKab from "./routes/IbuKotaKabRoute.js"
import KelasperKotaRoute from "./routes/KelasperKotaRoute.js"
import ThirdPartyGuruRoute from "./routes/ThirdParty/ThirdPartyGuruRoute.js"
import BestProgramRoute from "./routes/Program/BestProgramRoute.js"
import BestProgramRoute2 from "./routes/Program/BestProgramRoute2.js"
import PilihanKelasPolriRoute from "./routes/Kelas/PilihanKelasPolriRoute.js"
import PilihanKelasCpnsRoute from "./routes/Kelas/PilihanKelasCpnsRoute.js"
import PilihanKelasOsnRoute from "./routes/Kelas/PilihanKelasOsnRoute.js"
import PilihanKelasPrivatRoute from "./routes/Kelas/PilihanKelasPrivatRoute.js"


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
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}))

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
app.use(IbuKotaKab)
app.use(TestimoniRoute)
app.use(KotaTestRoute)
app.use(MapelWilayahRoute)
app.use(GuruRoute)
app.use(KecamatanRoute)
app.use(SliderHeaderRoute)
app.use(SliderHeaderRoute2)
app.use(BestProgramRoute);
app.use(BestProgramRoute2);

//TAGS
app.use(TagsRoute);

//KELAS
app.use(KedinasanRoute);
app.use(KelasperKotaRoute);
app.use(PilihanKelasPolriRoute);
app.use(PilihanKelasCpnsRoute);
app.use(PilihanKelasOsnRoute);
app.use(PilihanKelasPrivatRoute);

//THIRD PARTY
app.use(ThirdPartyGuruRoute)


app.listen(process.env.APP_PORT, ()=> {
    console.log("Server up and running...");
})