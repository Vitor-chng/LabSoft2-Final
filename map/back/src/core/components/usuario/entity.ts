import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
} from 'typeorm'

@Entity({ name: 'usuarios' })
export class Usuario {
    @PrimaryGeneratedColumn('uuid')
    	id?: string

    @Column({ nullable: false, type: 'varchar', length: 255 })
    	name: string

    @Column({ nullable: false, type: 'varchar', length: 255, unique: true })
    	email: string

    @Column({ nullable: false, type: 'varchar', length: 255, select: false })
    	password: string

    @CreateDateColumn()
    	created_at?: Date

    @UpdateDateColumn()
    	updated_at?: Date

    @Column( "int", { array: true })
		ingressos?: number[];


    
    constructor(email: string, password: string, name: string, ingressos?: number[]) {
    	this.name = name
    	this.email = email
    	this.password = password
		if(ingressos){
			this.ingressos = ingressos
		}
    }
}