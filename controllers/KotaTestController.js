import KotaTest from "../models/KotaTestModel.js";
import Kelas from "../models/KelasModel.js";
import {Op} from "sequelize";

export const getKotaTest = async (req, res) =>{
    try {
        let response;
        if(req.role === "admin"){
            response = await KotaTest.findAll({
                attributes:['kota','slug'],
                include:[{
                    model: Kelas,
                    attributes:['name','slug']
                }]
            });
        }else{
            response = await KotaTest.findAll({
                attributes:['kota','slug'],
                where:{
                    kelasId: req.kelasId
                },
                include:[{
                    model: Kelas,
                    attributes:['name','slug']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getKotaTestById = async(req, res) =>{
    try {
        const kotatest = await KotaTest.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!kotatest) return res.status(404).json({msg: "Data tidak ditemukan"});
        let response;
        if(req.role === "admin"){
            response = await KotaTest.findOne({
                attributes:['kota','slug'],
                where:{
                    id: kotatest.id
                },
                include:[{
                    model: Kelas,
                    attributes:['name','slug']
                }]
            });
        }else{
            response = await KotaTest.findOne({
                attributes:['kota','slug'],
                where:{
                    [Op.and]:[{id: kotatest.id}, {kelasId: req.kelasId}]
                },
                include:[{
                    model: Kelas,
                    attributes:['name','slug']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createKotaTest = async(req, res) =>{
    const {kota, slug} = req.body;
    try {
        await KotaTest.create({
            kota: kota,
            slug: slug,
            kelasId: req.kelasId
        });
        res.status(201).json({msg: "KotaTest Created Successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
        console.log("ini error:", error);
    }
}

export const updateKotaTest = async(req, res) =>{
    try {
        const kotatest = await KotaTest.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!kotatest) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {kota, slug} = req.body;
        if(req.role === "admin"){
            await KotaTest.update({kota, slug},{
                where:{
                    id: kotatest.id
                }
            });
        }else{
            if(req.kelasId !== kotatest.kelasId) return res.status(403).json({msg: "Akses terlarang"});
            await KotaTest.update({kota, slug},{
                where:{
                    [Op.and]:[{id: kotatest.id}, {kelasId: req.kelasId}]
                }
            });
        }
        res.status(200).json({msg: "Kotatest updated successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const deleteKotaTest = async(req, res) =>{
    try {
        const kotatest = await KotaTest.findOne({
            where:{
                uuid: req.params.id
            }
        });
        if(!kotatest) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {kota, slug} = req.body;
        if(req.role === "admin"){
            await KotaTest.destroy({
                where:{
                    id: kotatest.id
                }
            });
        }else{
            if(req.kelasId !== kotatest.kelasId) return res.status(403).json({msg: "Akses terlarang"});
            await KotaTest.destroy({
                where:{
                    [Op.and]:[{id: kotatest.id}, {kelasId: req.kelasId}]
                }
            });
        }
        res.status(200).json({msg: "Kotatest deleted successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}