const db = require('./dbConfig');

module.export = {
    findBy,
    update
}

async function findBy(filter) {
    try {
        const guest = await db("guests").select("*").where(filter);
        return db("guests").select("*").where({ group: guest.group });
    } catch (error) {
        return error;
    }
}

function update(changes) {
    try {
        let numChanged = 0;
        for ({ id, ...rest } in changes) {
            numChanged += db("guests").where({ id }).update(rest);
        }
        return numChanged;
    } catch (error) {
        return error;
    }
}