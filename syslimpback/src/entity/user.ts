import {Entity,Column, PrimaryGeneratedColumn} from 'typeorm';
@Entity({name: "user"})
export class User{
    @PrimaryGeneratedColumn({name: "sequser"})
    sequser: number;
    @Column({name: "name"})
    name: string;
    @Column({name: "lastname"})
    lastname: string;
    @Column({name: "email"})
    email: string;
    @Column({name: "phonenumber"})
    phonenumber: number;
    @Column({name: "province"})
    province: string;
    @Column({name: "city"})
    city: string;
    @Column({name: "datecreate"})
    datecreate: Date;
    @Column({name: "datelastmodify"})
    datelastmodify: Date;
    @Column({name: "loginuser_codeuser"})
    loginuser_codeuser: number;
}