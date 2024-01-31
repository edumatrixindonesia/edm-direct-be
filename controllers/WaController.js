import Whatsapp from "../models/WaModel.js"

export const getWhatsapp = async(req, res) =>{
    try {
        const response = await Whatsapp.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getWhatsappById = async(req, res) =>{
    try {
        const response = await Whatsapp.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createWhatsapp = async(req, res) =>{
    try {
        await Whatsapp.create(req.body);
        res.status(201).json({msg: "Whatsapp Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateWhatsapp = async(req, res) =>{
    try {
        await Whatsapp.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Whatsapp Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteWhatsapp = async(req, res) =>{
    try {
        await Whatsapp.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Whatsapp Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}