import express from "express";
import cors from "cors";
import FileUpload from "express-fileupload";
import session from "express-session";
import SequelizeStore from "connect-session-sequelize";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import ReservasiRoute from "./routes/ReservasiRoute.js";
import db from "./config/Database.js";
import path from "path";
import { fileURLToPath } from "url";
import WhatsappRoute from "./routes/WaRoute.js";
import UserRoute from "./routes/index.js";
import OfficeRoute from "./routes/OfficeRoute.js";
import AsalSekolah from "./routes/AsalSekolahRoute.js";
import MapelRoute from "./routes/MapelRoute.js";
import KotaRoute from "./routes/KotaRoute.js";
import KelasRoute from "./routes/KelasRoute.js";
import LayananRoute from "./routes/LayananRoute.js";
import ProgramRoute from "./routes/ProgramRoute.js";
import FaqRoute from "./routes/FaqRoute.js";
import KeunggulanRoute from "./routes/KeunggulanRoute.js";
import FiturProgramRoute from "./routes/FiturProgramRoute.js";
import PilihanProgramRoute from "./routes/PilihanProgramRoute.js";
import PromoRoute from "./routes/PromoRoute.js";
import TestimoniRoute from "./routes/TestimoniRoute.js";
import KotaTestRoute from "./routes/KotaTestRoute.js";
import MapelWilayahRoute from "./routes/Mapel-WilayahRoute.js";
import GuruRoute from "./routes/GuruRoute.js";
import KecamatanRoute from "./routes/KecamatanRoute.js";
import SliderHeaderRoute from "./routes/SliderHeaderRoute.js";
import SliderHeaderRoute2 from "./routes/SliderHeaderRoute2.js";

// PROGRAM
// TNI
import SliderHeaderTni from "./routes/Program/BimbelTniPolri/SliderHeaderTniRoute.js";
import BestProgramTni from "./routes/Program/BimbelTniPolri/BestProgramTniRoute.js";
import BestProgramTni2 from "./routes/Program/BimbelTniPolri/BestProgramTniRoute2.js";
import GaleriKegiatanTni from "./routes/Program/BimbelTniPolri/GaleriKegiatanTniRoute.js";
import Kotatni from "./routes/Program/BimbelTniPolri/KotaTniRoute.js";
import Kelastni from "./routes/Program/BimbelTniPolri/KelasTniRoute.js";
import KelasperKotaTni from "./routes/Program/BimbelTniPolri/KelasperKotaTniRoute.js"
import FaqTni from "./routes/Program/BimbelTniPolri/FaqTniRoute.js"
import TestimoniTni from "./routes/Program/BimbelTniPolri/TestimoniTniRoute.js"
import GuruTni from "./routes/Program/BimbelTniPolri/GuruTniRoute.js"
// SNBT
import SliderHeaderSnbt from "./routes/Program/BimbelSnbt/SliderHeaderSnbtRoute.js"
import BestProgramSnbt from "./routes/Program/BimbelSnbt/BestProgramSnbtRoute.js"
import KotaSnbt from "./routes/Program/BimbelSnbt/KotaSnbtRoute.js"
import KelasSnbt from "./routes/Program/BimbelSnbt/KelasSnbtRoute.js"
import BestProgramSnbt2 from "./routes/Program/BimbelSnbt/BestProgramSnbtRoute2.js"
import SliderHeaderSnbt2 from "./routes/Program/BimbelSnbt/SliderHeaderSnbtRoute2.js"
// SUPERCAMP
import SliderHeaderSupercamp from "./routes/Program/BimbelSupercamp/SliderHeaderSupercampRoute.js"
import SliderHeaderSupercamp2 from "./routes/Program/BimbelSupercamp/SliderHeaderSupercampRoute2.js"
// LPDP
import SliderHeaderLpdp from "./routes/Program/BimbelLpdp/SliderHeaderLpdpRoute.js"
import SliderHeaderLpdp2 from "./routes/Program/BimbelLpdp/SliderHeaderLpdpRoute2.js"
// PRIVAT
import SliderHeaderPrivat from "./routes/Program/BimbelPrivat/SliderHeaderPrivatRoute.js"
import SliderHeaderPrivat2 from "./routes/Program/BimbelPrivat/SliderHeaderPrivatRoute2.js"
import KelasPrivat from "./routes/Program/BimbelPrivat/KelasPrivatRoute.js"
// CPNS
import SliderHeaderCpns from "./routes/Program/BimbelCpns/SliderHeaderCpnsRoute.js"
// BUMN
import SliderHeaderBumn from "./routes/Program/BimbelBumn/SliderHeaderBumnRoute.js"
// IGCSE
import SliderHeaderIgcse from "./routes/Program/BimbelIgcse/SliderHeaderIgcseRoute.js"
// IUP/KKI
import SliderHeaderIup from "./routes/Program/BimbelIupKki/SliderHeaderIupKki.js"
// OSN
import SliderHeaderOsn from "./routes/Program/BimbelOsn/SliderHeaderOsnRoute.js"
// TOEFL
import SliderHeaderToefl from "./routes/Program/BimbelToefl/SliderHeaderToeflRoute.js"

//TAGS
import TagsRoute from "./routes/Tags/TagsKedinasanRoute.js";
//KELAS
import KedinasanRoute from "./routes/Kelas/PilihanKelasRoute.js";
import IbuKotaKab from "./routes/IbuKotaKabRoute.js";
import KelasperKotaRoute from "./routes/KelasperKotaRoute.js";
import ThirdPartyGuruRoute from "./routes/ThirdParty/ThirdPartyGuruRoute.js";
import BestProgramRoute from "./routes/Program/BestProgramRoute.js";
import BestProgramRoute2 from "./routes/Program/BestProgramRoute2.js";
import PilihanKelasPolriRoute from "./routes/Kelas/PilihanKelasPolriRoute.js";
import PilihanKelasCpnsRoute from "./routes/Kelas/PilihanKelasCpnsRoute.js";
import PilihanKelasOsnRoute from "./routes/Kelas/PilihanKelasOsnRoute.js";
import PilihanKelasPrivatRoute from "./routes/Kelas/PilihanKelasPrivatRoute.js";
import AboutUsRoute from "./routes/AboutUsRoute.js";

dotenv.config();

const app = express();
const router = express.Router();
const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
  db: db,
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(
  session({
    secret: "somevalue",
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: "auto",
    },
  })
);

app.set("views", path.join(__dirname, "views"));
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(FileUpload());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(ReservasiRoute);
app.use(UserRoute);
app.use(WhatsappRoute);
app.use(OfficeRoute);
app.use(AsalSekolah);
app.use(MapelRoute);
app.use(KotaRoute);
app.use(KelasRoute);
app.use(LayananRoute);
app.use(ProgramRoute);
app.use(FaqRoute);
app.use(KeunggulanRoute);
app.use(FiturProgramRoute);
app.use(PilihanProgramRoute);
app.use(PromoRoute);
app.use(IbuKotaKab);
app.use(TestimoniRoute);
app.use(KotaTestRoute);
app.use(MapelWilayahRoute);
app.use(GuruRoute);
app.use(KecamatanRoute);
app.use(SliderHeaderRoute);
app.use(SliderHeaderRoute2);
app.use(BestProgramRoute);
app.use(BestProgramRoute2);
app.use(AboutUsRoute);

//TAGS
app.use(TagsRoute);

//KELAS
app.use(KedinasanRoute);
app.use(KelasperKotaRoute);
app.use(PilihanKelasPolriRoute);
app.use(PilihanKelasCpnsRoute);
app.use(PilihanKelasOsnRoute);
app.use(PilihanKelasPrivatRoute);

//PROGRAM TNI
app.use(SliderHeaderTni);
app.use(BestProgramTni);
app.use(BestProgramTni2);
app.use(GaleriKegiatanTni);
app.use(Kotatni);
app.use(Kelastni);
app.use(KelasperKotaTni)
app.use(FaqTni)
app.use(TestimoniTni)
app.use(GuruTni)
//PROGRAM SNBT
app.use(SliderHeaderSnbt)
app.use(SliderHeaderSnbt2)
app.use(BestProgramSnbt)
app.use(KotaSnbt)
app.use(KelasSnbt)
app.use(BestProgramSnbt2)
//PROGRAM SUPERCAMP
app.use(SliderHeaderSupercamp)
app.use(SliderHeaderSupercamp2)
//PROGRAM LPDP
app.use(SliderHeaderLpdp)
app.use(SliderHeaderLpdp2)
//PROGRAM PRIVAT
app.use(SliderHeaderPrivat)
app.use(SliderHeaderPrivat2)
app.use(KelasPrivat)
//PROGRAM CPNS
app.use(SliderHeaderCpns)
//PROGRAM BUMN
app.use(SliderHeaderBumn)
//PROGRAM IGCSE
app.use(SliderHeaderIgcse)
//PROGRAM IUP/KKI
app.use(SliderHeaderIup)
//PROGRAM OSN
app.use(SliderHeaderOsn)
//PROGRAM TOEFL
app.use(SliderHeaderToefl)




//THIRD PARTY
app.use(ThirdPartyGuruRoute);

app.listen(process.env.APP_PORT, () => {
  console.log("Server up and running...");
});

// router.get('/', (req, res) => {
//     res.send(" Express Homepage is running...");
// });
