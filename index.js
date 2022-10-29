const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/",(req,res)=>{
    res.send("TEST");
});

app.listen(PORT, ()=>{
    console.log(`Server up | PORT ${PORT}`);
})