const Users = require("./user.model")

const createUser = async (req) => {
    const user = new Users(req.body);
    return await user.save();
};

const getAll = async () => {
    return await Users.find();
}

const getById = async (req) =>{
    const { id } = req.params;
    return await Users.findById(id)
}

const updateUser = async (req)=>{
    const { id } = req.params
    return await Users.findByIdAndUpdate(id, req.body)
}

const deleteUser = async (req) => {
    const { id } = req.params;
    return await Users.findByIdAndDelete(id)
}

module.exports = { createUser, getAll, getById, updateUser, deleteUser }