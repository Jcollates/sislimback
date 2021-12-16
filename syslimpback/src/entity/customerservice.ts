import {Entity,Column, PrimaryGeneratedColumn} from 'typeorm';
@Entity({name: "customer_service"})
export class CustomerService{
    @PrimaryGeneratedColumn({name: "seqcustomer"})
    seqcustomer: number;
    @Column({name: "dnicliente"})
    dnicliente: string;
    @Column({name: "dateobservation"})
    dateobservation: Date;
    @Column({name: "nameclient"})
    nameclient: string;
    @Column({name: "lastnameclient"})
    lastnameclient: string;
    @Column({name: "observation"})
    observation: string;
    @Column({name: "phonenumber"})
    phonenumber: string;
    @Column({name: "address"})
    address: string;
    @Column({name: "employeename"})
    employeename: string;
    @Column({name: "servicedetail"})
    servicedetail: string;

    @Column({name: "email"})
    email: string;
    @Column({name: "city"})
    city: string;
    @Column({name: "province"})
    province: string;
    @Column({name: "servicetype"})
    servicetype: string;
    @Column({name: "codeemployee"})
    codeemployee: string;
    @Column({name: "servicedate"})
    servicedate: Date;
    

}