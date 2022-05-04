import { Account } from '../entities/account.entity'
import { KnexRepository } from '../util/knex.repository'

// now, we have all code implementation from BaseRepository
export class AccountRepository extends KnexRepository<Account> {
    // here, we can create all specific stuffs of Product Repository
    isSomething(id: string): Promise<boolean> {
        return this.qb.where(id).first('count')
    }
}