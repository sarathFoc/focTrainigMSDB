
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm"
import { User } from "../users/user.entity";

@Entity('blog')

export class Blog extends BaseEntity {
    
    @PrimaryGeneratedColumn({
        comment: "Unique identifier"
    })

    id: number;

    @Column({
        type: 'varchar',
    })

    title: string;

    @Column({
        type: 'text'
    })

    blog: string

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    LastUpdated:Date

    @ManyToOne(() => User, (user) => user.blogs)
    user: User
}

