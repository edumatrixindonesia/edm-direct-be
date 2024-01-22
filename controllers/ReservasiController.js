import Reservasi from "../models/ReservasiModel.js";

export const getReservasi = async(req, res) =>{
    try {
        const response = await Reservasi.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getReservasiById = async(req, res) =>{
    try {
        const response = await Reservasi.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createReservasi = async(req, res) =>{
    try {
        await Reservasi.create(req.body);
        res.status(201).json({msg: "Reservasi Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateReservasi = async(req, res) =>{
    try {
        await Reservasi.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Reservasi Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteReservasi = async(req, res) =>{
    try {
        await Reservasi.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Reservasi Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}