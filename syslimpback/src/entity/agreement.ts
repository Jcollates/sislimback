import {Entity,Column, PrimaryGeneratedColumn} from 'typeorm';
@Entity({name: "agreement"})
export class Agreement{
    @PrimaryGeneratedColumn({name: "seqagree"})
    seqagree: number;
    @Column({name: "ruc"})
    ruc: number;
    @Column({name: "name"})
    name: string;
    @Column({name: "location"})
    location: string;
    @Column({name: "principallocation"})
    principallocation: string;
    @Column({name: "phone"})
    phone: number;
    @Column({name: "type"})
    type: string;
    @Column({name: "datestart"})
    datestart: Date;
    @Column({name: "dateend"})
    dateend: Date;
    @Column({name: "schedule"})
    schedule: string;
    @Column({name: "servicedetail"})
    servicedetail: string;
    @Column({name: "subtotal"})
    subtotal: number;
    @Column({name: "area"})
    area: number;
    @Column({name: "legalperson_seqlegalperson"})
    loginuser_codeuser: number;

}