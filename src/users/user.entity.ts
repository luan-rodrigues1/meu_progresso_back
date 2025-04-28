import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 150 })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @Column({
    name: 'created_at',
    type: 'timestamp',
  })
  created_at: Date;

  @Column({
    name: 'updated_at',
    type: 'timestamp',
  })
  updated_at: Date;

  @Column({ name: 'deleted_at', type: 'timestamp', nullable: true })
  deleted_at?: Date;
}
