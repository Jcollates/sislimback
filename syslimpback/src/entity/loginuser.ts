import {Entity,Column, PrimaryGeneratedColumn} from 'typeorm';
@Entity({name: "loginuser"})
export class LoginUser{
    @PrimaryGeneratedColumn({name: "codeuser"})
    codeuser: number;
    @Column({name: "username"})
    username: string;
    @Column({name: "password"})
    password: string;
    @Column({name: "changepassnextenter"})
    changepassnextenter: string;
    @Column({name: "duedatepass"})
    duedatepass: Date;
    @Column({name: "salt"})
    salt: string;
    @Column({name: "status"})
    status: string;
    @Column({name: "datecreate"})
    datecreate: Date;
    @Column({name: "datelastmodify"})
    datelastmodify: Date;
    @Column({name: "loginusercol"})
    loginusercol: string;
    @Column({name: "token"})
    token: string;

}