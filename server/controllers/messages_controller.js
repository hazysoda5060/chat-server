let messages = []
let id = 0

module.exports = {
    getMsg: (req, res) => {
        res.status(200).send(messages)
    },
    createMsg: (req, res) => {
        const {text, time} = req.body
        messages.push({id, text, time})
        id++
        res.status(200).send(messages)
    },
    deleteMsg: (req, res) => {
        const {id} = req.params
        const index = messages.findIndex(e => e.id === +id)
        messages.splice(index, 1)
        res.status(200).send(messages)
    },
    editMsg: (req, res) => {
        const {text} = req.body
        const {id} = req.params
        const index = messages.findIndex(e => e.id === +id)
        messages[index] = {
            id: +id,
            text: text || messages.text,
            time: messages.time
        }
        res.status(200).send(messages)
    },
}