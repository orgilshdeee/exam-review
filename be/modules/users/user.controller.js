const userServices = require("./user.service")

const create = async (req, res) =>{
    try{
        const user = await userServices.createUser(req);
        res.json({
            success: true,
            data: user
        })
    }catch(err){
        res.json({
            success: false,
            error:err
        })
    }
}

const getAll = async(req, res) =>{   
    const user = await userServices.getAll(req);
    res.json({
        success: true,
        data: user
    })
}

const getUser = async (req, res) => {
    try{
        const user = await userServices.getById(req);
        res.json({
            success: true,
            data: user
        })
    }catch(err){
        res.json({
            success: false,
            error:err
        })
    }
}

const updateUser = async(req, res) => {
    try{
        const user = await userServices.updateUser(req);
        res.json({
            success: true,
            data: user
        })
    }catch(err){
        res.json({
            success: false,
            error:err
        })
    }
}

const deleteUser = async(req, res) => {
    try{
        const user = await userServices.deleteUser(req);
        res.json({
            success: true,
            data: user
        })
    }catch(err){
        res.json({
            success: false,
            error:err
        })
    }
}

module.exports = { create, getAll, getUser, updateUser, deleteUser }