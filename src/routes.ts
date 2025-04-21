import { Router } from "express";
import multer from "multer";

import CategoryController from "./controllers/Category/CategoryController";
import ProductController from "./controllers/Product/ProductController";
import AuthUserController from "./controllers/user/AuthUserController";
import UserController from "./controllers/user/UserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";

import uploadConfig from "./config/multerConfig";
import OrderController from "./controllers/Order/OrderController";
import OrderItemController from "./controllers/OrderItem/OrderItemController";

const routes = Router();

const upload = multer(uploadConfig.upload("./temp"));

//AUTH ROUTES
routes.post("/session", AuthUserController.handle);
//MIDDLEWARE
// routes.use(isAuthenticated);
//USER ROUTES
routes.get("/users", UserController.index);
routes.post("/userDetail", isAuthenticated, UserController.find);
routes.get("/me/:token", isAuthenticated, UserController.getUserDetail);
routes.post("/user", isAuthenticated, UserController.store);
routes.put("/user/:id", isAuthenticated, UserController.update);
routes.delete("/user/:id", isAuthenticated, UserController.delete);
//CATEGORY ROUTES
routes.post("/category", isAuthenticated, CategoryController.store);
routes.get("/categories", isAuthenticated, CategoryController.index);
routes.put("/category/:id", isAuthenticated, CategoryController.update);
//PRODUCT ROUTES
routes.post(
  "/product",
  isAuthenticated,
  upload.single("file"),
  ProductController.store
);
routes.get("/products", isAuthenticated, ProductController.index);
routes.get(
  "/productsByCategory/:category_id",
  isAuthenticated,
  ProductController.findByCategory
);
routes.put("product/:id", isAuthenticated, ProductController.update);
//ORDER ROUTES
routes.get("/orders", isAuthenticated, OrderController.index);
routes.get("/ordersFinished", isAuthenticated, OrderController.finishedOrders);
routes.post("/order", isAuthenticated, OrderController.store);
routes.post("/order/sendOrder", isAuthenticated, OrderController.sendOrder);
routes.put("/order/:id", isAuthenticated, OrderController.update);
routes.delete("/order/:id", isAuthenticated, OrderController.delete);
//ORDERITEM ROUTES
routes.post("/orderItem", isAuthenticated, OrderItemController.store);
routes.post(
  "/orderDetail",
  isAuthenticated,
  OrderItemController.getOrderDeatil
);
routes.post("/order/close", isAuthenticated, OrderController.closingOrder);
routes.get("/orderItem", isAuthenticated, OrderItemController.index);
routes.delete("/orderItem/:id", isAuthenticated, OrderItemController.delete);

export default routes;
