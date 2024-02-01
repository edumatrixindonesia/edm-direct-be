import PilihanProgram from "../models/PilihanProgramModel.js"

export const getPilihanProgram = async(req, res) =>{
    try {
        const response = await PilihanProgram.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getPilihanProgramById = async(req, res) =>{
    try {
        const response = await PilihanProgram.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createPilihanProgram = async(req, res) =>{
    try {
        await PilihanProgram.create(req.body);
        res.status(201).json({msg: "PilihanProgram Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePilihanProgram = async(req, res) =>{
    try {
        await PilihanProgram.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "PilihanProgram Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePilihanProgram = async(req, res) =>{
    try {
        await PilihanProgram.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "PilihanProgram Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}