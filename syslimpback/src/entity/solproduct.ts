import {Entity,Column, PrimaryGeneratedColumn} from 'typeorm';
@Entity({name: "solproduct"})
export class SolProduct{
    @PrimaryGeneratedColumn({name: "seqsolproduct"})
    seqsolproduct: number;
    @Column({name: "codeuser"})
    codeuser: number;
    @Column({name: "products"})
    products: string;
    @Column({name: "nameuser"})
    nameuser: string;
    @Column({name: "contacnumber"})
    contacnumber: string;
    @Column({name: "email"})
    email: string;
    @Column({name: "dateCreate"})
    dateCreate: Date;
    @Column({name: "status"})
    status: string;
}