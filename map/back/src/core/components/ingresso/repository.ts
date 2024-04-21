import { Repository } from 'typeorm'
import { Ingresso } from './entity'

export class IngressoRepository {
	constructor(private readonly db: Repository<Ingresso>) {}

	async findOneById(id: string): Promise<Ingresso | undefined> {
		return await this.db.findOne({
			where: {
				id
			}
		}) ?? undefined
	}

	async findAll(): Promise<Ingresso[] | undefined> {
		return await this.db.find()
	}


	async create (ingresso: Ingresso): Promise<Ingresso> {
		return await this.db.save(ingresso)
	}

}