const express = require("express"); 
const cors = require("cors"); 
const pool = require("./db"); 

const app = express(); 
app.use(cors()); 
app.use(express.json()); 

// CRUD routes

app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body; 
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *", 
      [description]
    ); 
  } catch (err) {
    console.error(err.message);     
  }
}); 

app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo"); 
    res.json(allTodos.rows); 
    
  } catch (err) {
    console.log(err.message); 
    
  }
}); 

app.listen(5000, () => {
    console.log("server has started on port 5000");
  });
