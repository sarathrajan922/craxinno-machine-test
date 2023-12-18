import { Application, Request } from "express";
import authRoutes from "./routes/auth";

const userRoutes = ()=>{
    console.log('userRoutesCalled..')
}

const routes = (app:Application)=>{
    app.use('/api/auth', authRoutes())
    // app.use('/api/auth/ss/',userRoutes)
    // app.use('/api/user', userRoutes)
}

export default routes;