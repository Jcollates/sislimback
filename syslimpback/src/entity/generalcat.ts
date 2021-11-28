import {Entity,Column, PrimaryGeneratedColumn} from 'typeorm';
@Entity({name: "generalcatalogue"})
export class GeneralCat{
    @PrimaryGeneratedColumn({name: "seqGeneralCat"})
    seqGeneralCat: number;
    @Column({name: "codeCat"})
    codeCat: string;
    @Column({name: "nameItem"})
    nameItem: string;
    @Column({name: "decription"})
    decription: string;
}