import Office from "../models/OfficeModel.js";

export const getOffice = async(req, res) =>{
    try {
        const response = await Office.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getOfficeById = async(req, res) =>{
    try {
        const response = await Office.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createOffice = async(req, res) =>{
    try {
        await Office.create(req.body);
        res.status(201).json({msg: "Office Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateOffice = async(req, res) =>{
    try {
        await Office.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Office Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteOffice = async(req, res) =>{
    try {
        await Office.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Office Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}