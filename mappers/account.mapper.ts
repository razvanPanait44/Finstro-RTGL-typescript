import { AccountModel } from "../dto/account.model";
import { Account as AccountEntity } from "../entities/account.entity";

export class AccountMapper {

    public mapDtoToEntity(dto: AccountModel): AccountEntity {
        const entity: AccountEntity = {
            id: dto.accountId,
            name: dto.accountName
        }
        return entity;
    }

    public mapEntityToDto(entity: AccountEntity): AccountModel {
        const dto: AccountModel = {
            accountId: entity.id,
            accountName: entity.name
        }
        return dto;
    }
}