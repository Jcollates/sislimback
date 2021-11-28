import {Entity,Column, PrimaryGeneratedColumn} from 'typeorm';
@Entity({name: "legalperson"})
export class LegalPerson{
    @PrimaryGeneratedColumn({name: "seqlegalperson"})
    seqlegalperson: number;
    @Column({name: "dni"})
    dni: number;
    @Column({name: "name"})
    name: string;
    @Column({name: "lastname"})
    lastname: string;
    @Column({name: "position"})
    position: string;
    @Column({name: "homeadrees"})
    homeadrees: string;
    @Column({name: "phonenumber"})
    phonenumber: number;
    @Column({name: "datecreate"})
    datecreate: Date;
    @Column({name: "datelastmodify"})
    datelastmodify: Date;
}