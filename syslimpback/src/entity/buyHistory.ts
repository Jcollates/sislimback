import {Entity,Column, PrimaryGeneratedColumn} from 'typeorm';
@Entity({name: "buy_history"})
export class BuyHistory{
    @PrimaryGeneratedColumn({name: "seqbuyhistory"})
    seqbuyhistory: number;
    @Column({name: "codeuser"})
    codeuser: number;
    @Column({name: "boughtdate"})
    boughtdate: Date;
    @Column({name: "whatbought"})
    whatbought: string;
    @Column({name: "cost"})
    cost: number;
    @Column({name: "detail"})
    detail: string;
    @Column({name: "authorizationby"})
    authorizationby: number;
    @Column({name: "nameauthorizator"})
    nameauthorizator: string;
}