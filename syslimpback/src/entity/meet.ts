import {Entity,Column, PrimaryGeneratedColumn} from 'typeorm';
@Entity({name: "meet"})
export class Meet{
    @PrimaryGeneratedColumn({name: "seqmeet"})
    seqmeet: number;
    @Column({name: "date"})
    date: Date;
    @Column({name: "location"})
    location: string;
    @Column({name: "typeofservice"})
    typeofservice: string;
    @Column({name: "datecreate"})
    datecreate: Date;
    @Column({name: "datelastmodify"})
    datelastmodify: Date;
    @Column({name: "user_sequser"})
    user_sequser: Number;
    @Column({name: "agreement_seqagree"})
    agreement_seqagree: Number;

}