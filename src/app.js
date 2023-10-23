
import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
// importing routes

import statusRoutes from "./routes/ststusRoutes"
import blogRoutes from "./routes/blogroutes";
import usersroot from "./routes/userRoutes";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import commentRoutes from "./routes/commentroutes";





// configuration

const app = express();
dotenv.config();

// documentation side

const options ={
    definition: {
      openapi : '3.0.0',
      info : {
        title: 'api project of klab',
        version: '1.0.0'
      },
      security: [
        {
          BearerAuth: [],
        },
      ],
      components: {
        securitySchemes: {
          BearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
      servers:[
        {
          // url: 'https://klabblogapi.onrender.com/',
           url: 'http://localhost:4000/'
        }
      ]
    },
    apis: ['./src/docs/*.js'], //determination of path
  }
  const swaggerSpec = swaggerJSDoc(options)
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//routes
app.use("/api/klab/info",statusRoutes);
app.use("/api/klab/blog",blogRoutes);
app.use("/api/klab/user",usersroot);
app.use("/api/klab/comment",commentRoutes);

//

app.get("/",(req,res) =>{
res.status(200).json({
    status:"succes",
    author:"niyo",
    message:"welcome to my api",
});
});

export default app