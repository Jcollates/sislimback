import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import userRoutes from './routes/user.routes';
import meetRoutes from './routes/meet.routes';
import loginUserRoutes from './routes/loginUser.routes';
import agreementRoutes from './routes/agreement.routes';
import employesRoutes from './routes/employee.routes';
import legalpersonRoutes from './routes/legalperson.routes';
import productRoutes from './routes/product.routes';
import servicesRoutes from './routes/service.routes';
import providerRoutes from './routes/provider.routes';
import catproductsRoutes from './routes/catproducts.routes';
import catservicesRoutes from './routes/catservices.routes';
import generalCatRoutes from './routes/generalcats.routes';
import {createConnection} from 'typeorm';
import 'reflect-metadata';
const app = express();
createConnection();
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
//middlewares

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use(userRoutes);
app.use(meetRoutes);
app.use(loginUserRoutes);
app.use(agreementRoutes);
app.use(employesRoutes);
app.use(legalpersonRoutes);
app.use(productRoutes);
app.use(productRoutes);
app.use(servicesRoutes);
app.use(providerRoutes);
app.use(catproductsRoutes);
app.use(catservicesRoutes);
app.use(generalCatRoutes);
app.listen(3000);
console.log("Server on port", 3000);