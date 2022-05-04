import knex from 'knex';
import config from 'knex';
import { Account } from '../entities/account.entity';
import { AccountRepository } from '../repository/account.repository';
import { connect } from '../database'

export class AccountRepositoryService {

    public async get(id: number): Promise<Account> {
        const db = await connect();
        const repository = new AccountRepository(db, 'accounts');
        const account = await repository.findOne({
            id: id,
        });
        return account
    }

}