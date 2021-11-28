import {Entity,Column, PrimaryGeneratedColumn} from 'typeorm';
@Entity({name: "catservices"})
export class CatServices{
    @PrimaryGeneratedColumn({name: "seqcatservice"})
    seqcatservice: number;
    @Column({name: "codeservice"})
    codeservice: string;
    @Column({name: "nameservice"})
    nameservice: string;
    @Column({name: "description"})
    description: string;
    @Column({name: "hourprize"})
    hourprize: number;
    @Column({name: "meterprize"})
    meterprize: number;
    @Column({name: "type"})
    type: string;
    @Column({name: "img"})
    img: string;

}