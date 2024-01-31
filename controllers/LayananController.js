import Layanan from "../models/LayananModel.js";

export const getLayanan = async(req, res) =>{
    try {
        const response = await Layanan.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getLayananById = async(req, res) =>{
    try {
        const response = await Layanan.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createLayanan = async(req, res) =>{
    try {
        await Layanan.create(req.body);
        res.status(201).json({msg: "Layanan Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateLayanan = async(req, res) =>{
    try {
        await Layanan.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Layanan Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteLayanan = async(req, res) =>{
    try {
        await Layanan.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Layanan Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}