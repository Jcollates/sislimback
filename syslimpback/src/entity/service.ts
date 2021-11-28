import {Entity,Column, PrimaryGeneratedColumn} from 'typeorm';
@Entity({name: "service"})
export class Service{
    @PrimaryGeneratedColumn({name: "seqservice"})
    seqservice: number;
    @Column({name: "name"})
    name: string;
    @Column({name: "type"})
    type: string;
    @Column({name: "price"})
    price: number;
    @Column({name: "img"})
    img: string;
    @Column({name: "basecost"})
    basecost: string;
    @Column({name: "datecreate"})
    datecreate: Date;
    @Column({name: "datelastmodify"})
    datelastmodify: Date;
    @Column({name: "meet_seqmeet"})
    meet_seqmeet: number;
}