const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors=require('cors');

app.use(cors());
app.use(express.json());

app.post("/calculator",(req,res)=>{
    let respuesta=req.body.operacion;
    respuesta=parseInt(eval(respuesta));
    
    res.json({
        message:"todo bien",
        respuesta:respuesta
    })
})



app.listen(port, () => console.log(`listening on http://localhost:${port}`));
