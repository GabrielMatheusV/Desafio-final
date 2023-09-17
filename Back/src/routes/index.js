import {router} from 'express';

const routes = new router();

routes.get('/', (req, res) =>{
    res.status(200).json({òk: 'connected'});
});

routes.get('usuario', )
export default routes;