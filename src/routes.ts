import { Router } from 'express';
import multer from 'multer';

import CategoryController from './controllers/Category/CategoryController';
import ProductController from './controllers/Product/ProductController';
import AuthUserController from './controllers/user/AuthUserController';
import UserController from './controllers/user/UserController';
import { isAuthenticated } from './middlewares/isAuthenticated';

import uploadConfig from './config/multerConfig';

const routes = Router();

const upload = multer(uploadConfig.upload('./temp'));

//AUTH ROUTES
routes.post('/session', AuthUserController.handle);
//MIDDLEWARE
// routes.use(isAuthenticated);
//USER ROUTES
routes.get('/users', isAuthenticated, UserController.index);
routes.post('/userDetail', isAuthenticated, UserController.find);
routes.post('/user', isAuthenticated, UserController.store);
routes.put('/user/:id', isAuthenticated, UserController.update);
routes.delete('/user/:id', isAuthenticated, UserController.delete);
//CATEGORY ROUTES
routes.post('/category', isAuthenticated, CategoryController.store);
routes.get('/categories', isAuthenticated, CategoryController.index);
routes.put('/category', isAuthenticated, CategoryController.update);
//PRODUCT ROUTES
routes.post(
  '/product',
  isAuthenticated,
  upload.single('file'),
  ProductController.store
);
routes.get('/products', isAuthenticated, ProductController.index);
routes.put('product', isAuthenticated, ProductController.update);

export default routes;
