const State = require('./../models/state')
const stateRep = require('./../repositories/state')

exports.create = async (req, res) => {
    try{
        console.log(req.body)
        let state = new State(null, req.body.name, req.body.code, parseInt(req.body.leaveDaysForTravel))
        state = await stateRep.create(state)
        res.json(
            {
                record: state,
                message: "State Created"
            })
    }catch(err){
        console.log(err)
        res.status(400).send(err)
    }
}