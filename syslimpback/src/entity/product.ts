import {Entity,Column, PrimaryGeneratedColumn} from 'typeorm';
@Entity({name: "product"})
export class Product{
    @PrimaryGeneratedColumn({name: "seqprod"})
    seqprod: number;
    @Column({name: "name"})
    name: string;
    @Column({name: "description"})
    description: string;
    @Column({name: "quantity"})
    quantity: number;
    @Column({name: "pricebought"})
    pricebought: number;
    @Column({name: "saleprice"})
    saleprice: number;
    @Column({name: "datebought"})
    datebought: Date;
    @Column({name: "meet_seqmeet"})
    meet_seqmeet: number;
}