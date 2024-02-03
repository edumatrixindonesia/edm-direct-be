import Tags from "../../models/Tags/TagsKedinasanModel.js";

export const getTags = async(req, res) =>{
    try {
        const response = await Tags.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getTagsById = async(req, res) =>{
    try {
        const response = await Tags.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createTags = async(req, res) =>{
    try {
        await Tags.create(req.body);
        res.status(201).json({msg: "Tags Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateTags = async(req, res) =>{
    try {
        await Tags.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Tags Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteTags = async(req, res) =>{
    try {
        await Tags.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Tags Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}