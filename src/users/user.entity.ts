
import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
  } from 'typeorm';
  import { Blog } from '../blog/blog.entity';
  
  @Entity('User')
  export class User extends BaseEntity {
    @PrimaryGeneratedColumn({
      comment: 'userIds',
    })
    id: number;
  
    @Column({
      type: 'varchar',
    })
    name: string;
  
  
    @Column({
      type: Number,
    })
    role: number;
  
    @Column({
      type: 'text',
    })
  
    email: string;
  
    @Column({
      type: 'text',nullable: true
    })
    password: string;

    
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    LastUpdated: Date;
  
    @OneToMany(() => Blog, (blogs) => blogs.user)
    blogs: Blog[];
  }
  