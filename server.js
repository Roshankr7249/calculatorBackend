const express=require('express');
const connectDB=require('./config/db');

require('dotenv').config()


const userRoutes=require('./routes/userRouter')
const calculatorRoutes=require('./routes/calculatorrouter')
const app = express();

connectDB();

app.get("/",(req,res)=>{
  res.send("base api")
})

app.use(express.json());

app.use("/api/auth", userRoutes);
app.use("/api/calculator", calculatorRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

