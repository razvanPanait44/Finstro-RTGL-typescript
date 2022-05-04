import { AccountMapper } from "../../mappers/account.mapper";
import { AccountModel } from "../../dto/account.model";
import { AccountRepositoryService } from "../../repositories-service/account.repository-service";

export class AccountService {

    private accountRepository: AccountRepositoryService = new AccountRepositoryService;

    private accountMapper: AccountMapper = new AccountMapper();

    public async getAccount(request: AccountModel, TENANT_ID: string): Promise<AccountModel> {
        try {
            const accountDto: AccountModel = this.accountMapper.mapEntityToDto(await this.accountRepository.get(1));
            return accountDto
        } catch (error) {
            throw error;
        }
    }
}