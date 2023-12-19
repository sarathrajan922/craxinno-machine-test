import { Application, Request } from "express";
import authRoutes from "./routes/auth";
import userRoutes from "./routes/user";


const routes = (app:Application)=>{
    app.use('/api/auth', authRoutes())
    app.use('/api/user',userRoutes())
  
}

export default routes;