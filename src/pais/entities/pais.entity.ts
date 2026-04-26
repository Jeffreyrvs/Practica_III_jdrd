import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class Pais {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column( { unique: true})
    nombre!: string;

    @Column()
    habitantes!: number;

    @Column( {unique: true})
    presidente!: string;

    @Column()
    moneda!: string;

    @Column( { unique: true})
    capital!: string;
}
