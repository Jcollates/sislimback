import {Entity,Column, PrimaryGeneratedColumn} from 'typeorm';
@Entity({name: "provider"})
export class Provider{
    @PrimaryGeneratedColumn({name: "seqprovider"})
    seqprovider: number;
    @Column({name: "namenterprice"})
    namenterprice: string;
    @Column({name: "email"})
    email: string;
    @Column({name: "location"})
    location: string;
    @Column({name: "province"})
    province: string;
    @Column({name: "city"})
    city: string;
    @Column({name: "phone"})
    phone: string;
    @Column({name: "detail"})
    detail: string;
    @Column({name: "paytype"})
    paytype: string;
    @Column({name: "salername"})
    salername: string;
    @Column({name: "datecreate"})
    datecreate: Date;
    @Column({name: "datelastmodify"})
    datelastmodify: Date;
    @Column({name: "dni"})
    dni: string;
}