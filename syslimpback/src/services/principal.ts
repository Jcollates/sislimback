import { createConnection, getConnection } from "typeorm";
export class Principal {
    async createPoolTypeORM() {
        createConnection().then(async connection => {
            console.log('CONEXION EXPRESS-MYSQL CREADA TYPE ORM');

        }).catch(error => console.log("ERROR Metodo createPoolTypeORM:", error));
    }
}

