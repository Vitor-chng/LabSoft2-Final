import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
} from 'typeorm'

@Entity({ name: 'ingresso' })
export class Ingresso {
    @PrimaryGeneratedColumn('uuid')
    	id?: string

    @Column({ nullable: false, type: 'varchar', length: 255 })
    	usuario: string

    @CreateDateColumn()
    	created_at?: Date

    @UpdateDateColumn()
    	updated_at?: Date

	@Column('int')
		assento: number;
    
    constructor(usuario: string, assento: number) {
    	this.usuario = usuario
    	this.assento = assento
    }
}