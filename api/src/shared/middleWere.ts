import { Request, Response, NextFunction } from 'express';
import ENV from '../ENV'

export default function middleWere(req: Request, res: Response, next: NextFunction): void {
    // res.header('Access-Control-Allow-Origin', ENV.host);  //  TODO
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
}
