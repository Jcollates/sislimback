import {Entity,Column, PrimaryGeneratedColumn} from 'typeorm';
@Entity({name: "catproductos"})
export class CatProducts{
    @PrimaryGeneratedColumn({name: "seqcatproduct"})
    seqcatproduct: number;
    @Column({name: "codeproduct"})
    codeproduct: string;
    @Column({name: "nameproduct"})
    nameproduct: string;
    @Column({name: "saleprize"})
    saleprize: number;
    @Column({name: "description"})
    description: string;
    @Column({name: "img"})
    img: string;
}