import knex from "knex";
import { config } from './knex/knex'

export async function connect() {

    const connection = knex(config)
    // Waiting for a connection to be established
    await connection.raw('SELECT 1')

    return connection

}