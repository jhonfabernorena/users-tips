import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Tip {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: true })
  img_url?: string;

  @Column()
  title: string;

  @Column()
  body: string;

  @Column({ nullable: true })
  link?: string;

  @Column()
  available: boolean;

  @Column('jsonb', { nullable: true })
  level?: string[]; 

  @Column('jsonb', { nullable: true })
  technology?: string[]; 

  @Column('jsonb', { nullable: true })
  subtechnology?: string[]; 

  @Column('jsonb', { nullable: true })
  lang?: string[]; 

  @Column({ type: 'timestamp', nullable: true })
  createdAt?: Date;

  @Column({ nullable: true })
  createBy?: string;

  @Column({ type: 'timestamp', nullable: true })
  updatedAt?: Date;

  @Column({ nullable: true })
  updateBy?: string;

  @Column({ type: 'timestamp', nullable: true })
  deletedAt?: Date;

  @Column({ nullable: true })
  deleteBy?: string;
}
