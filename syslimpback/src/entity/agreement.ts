import {Entity,Column, PrimaryGeneratedColumn} from 'typeorm';
@Entity({name: "agreement"})
export class Agreement{
    @PrimaryGeneratedColumn({name: "seqagree"})
    seqagree: number;
    @Column({name: "ruc"})
    ruc: string;
    @Column({name: "name"})
    name: string;
    @Column({name: "location"})
    location: string;
    @Column({name: "principallocation"})
    principallocation: string;
    @Column({name: "phone"})
    phone: string;
    @Column({name: "type"})
    type: string;
    @Column({name: "datestart"})
    datestart: string;
    @Column({name: "dateend"})
    dateend: string;
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