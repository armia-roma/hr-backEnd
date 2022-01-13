const sectionRep = require("./../repositories/section")
const Section = require("./../models/section")

exports.create = async (req, res) => {
    try{
        let section =  new Section(null, req.body.code, req.body.department, req.body.name)
        section = await sectionRep.create(section)
        res.json({
            record: section,
            message: "section created"
        })
    } catch(err) {
        res.status(400).send(err)
    }
}
exports.getAll = async (req,res) => {
    try{
        const section = await sectionRep.getAll()
        res.json(section)
    }catch(err){
        res.status(400).send(err)
    }
}