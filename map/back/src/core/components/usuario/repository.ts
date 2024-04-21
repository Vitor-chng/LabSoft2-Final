import { Repository } from 'typeorm'
import { Usuario } from './entity'

export class UsuarioRepository {
	constructor(private readonly db: Repository<Usuario>) { }

	async findAll(): Promise<Usuario[] | undefined> {
		return await this.db.find()
	}

	async findOneById(id: string): Promise<Usuario | undefined> {
		return await this.db.findOne({
			where: {
				id
			}
		}) ?? undefined
	}

	async findOneByEmail(email: string): Promise<Usuario | undefined> {
		return await this.db.findOne({
			where: {
				email
			}
		}) ?? undefined
	}

	async create(usuario: Usuario): Promise<Usuario> {
		return await this.db.save(usuario)
	}

	async update(usuario: Usuario): Promise<Usuario> {
		return await this.db.save(usuario)
	}


	async updateIngressos(usuario: Usuario, ingressos: number[]): Promise<Usuario> {
		usuario.ingressos = ingressos.concat(usuario.ingressos ?? [])

		return await this.db.save(usuario)
	}

	async deleteByEmail(email: string) {
		return await this.db.delete({ email: email })
	}

}