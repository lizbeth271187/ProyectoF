const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/index.html")
})
//ejemplo de función flecha 
app.listen(3000, ()=>{ 
console.log("Conectado a puerto 3000")
}
)
