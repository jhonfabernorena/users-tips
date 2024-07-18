import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phone: string;

  @Column()
  role: string;

  @Column('jsonb')
  emailPreferences: {
    frequency: string;
    seniority: string;
    programmingLanguages: Record<string, unknown>;
  };
}
