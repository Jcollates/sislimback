import {Entity,Column, PrimaryGeneratedColumn} from 'typeorm';
@Entity({name: "employee"})
export class Employee{
    @PrimaryGeneratedColumn({name: "seqemploy"})
    seqemploy: number;
    @Column({name: "dni"})
    dni: number;
    @Column({name: "name"})
    name: string;
    @Column({name: "lastname"})
    lastname: string;
    @Column({name: "position"})
    position: string;
    @Column({name: "birthday"})
    birthday: Date;
    @Column({name: "assigmentdayte"})
    assigmentdayte: Date;
    @Column({name: "img"})
    img: string;
    @Column({name: "datelastmodify"})
    datelastmodify: Date;
    @Column({name: "datecreate"})
    datecreate: Date;

}