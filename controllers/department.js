const Department = require('./../models/department');
const departmentRep = require('./../repositories/department');
exports.create = async (req, res) => {
    try{
        let department = new Department(null,req.body.code, req.body.name, req.body.type);
        department = await departmentRep.create(department);
        res.json({
            message: 'department create',
            record: department
        })
    }catch(err) {
        console.log(err )
        res.status(500).send(err)
    }
}

// get by code even name of department
exports.search = async (req, res) => {
    try{
        let department = await departmentRep.search(req.query.code);
        res.json({id: department.id, name: department.getDisplayName()})
    }
    catch(err) {
        res.status(500).json(err)
    }
}

//get department by id 
exports.findOne = async (req, res) => {
    try{
        let department = await departmentRep.findById(req.params.id);
        res.json( department )
    }catch(err) {
        res.status(400).send(err)
    }
}

//get all department
exports.getAll = async (req, res) => {
    try{
        let departments = await departmentRep.getAll()
        res.json({
            record: departments.map((department) => { return { id : department.id , name : department.getDisplayName() }})

        })
    } catch(err) {
        res.status(400).send(err)
    }
}
exports.update = async (req, res) => {
    try{
        const id = req.params.id;
        const updateRecord = req.body.data;
        let department = await departmentRep.update(id, updateRecord);
        res.json({
            record: department,
            message: "record updated"
        })
    }catch(err){
        console.log(err)
    }
}
exports.delete = async (req, res) => {
    const id = req.params.id
}