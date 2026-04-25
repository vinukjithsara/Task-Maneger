const express = require("express");
const cors = require("cors");
const sendEmail = require("./mailer");
const app = express();
const db = require("./db");

app.use(cors());
app.use(express.json());

/* ================= TEST EMAIL ================= */
app.get("/send-test", async (req, res) => {
  await sendEmail(
    "vinukjithsara278@gmail.com",
    "Test Email",
    "<h1>Working bro 🔥</h1>"
  );

  res.send("Mail Sent");
});

/* ================= REGISTER ================= */
app.post("/api/register", (req, res) => {
  const { name, email, password } = req.body;

  db.query(
    "INSERT INTO users (name,email,password) VALUES (?,?,?)",
    [name, email, password],
    (err) => {
      if (err)
        return res
          .status(500)
          .json({ message: "Email already exists" });

      res.json({ message: "Registered" });
    }
  );
});

/* ================= LOGIN ================= */
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email=? AND password=?",
    [email, password],
    (err, result) => {
      if (err) return res.status(500).json(err);

      if (result.length > 0) {
        res.json({ user: result[0] });
      } else {
        res
          .status(401)
          .json({ message: "Invalid login" });
      }
    }
  );
});

/* ================= GET TASKS ================= */
app.get("/api/tasks/:userId", (req, res) => {
  const userId = req.params.userId;

  db.query(
    "SELECT * FROM tasks WHERE user_id=? ORDER BY id DESC",
    [userId],
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    }
  );
});

/* ================= ADD TASK ================= */
app.post("/api/tasks", (req, res) => {
  const {
    title,
    description,
    user_id,
    due_datetime
  } = req.body;

  db.query(
    `INSERT INTO tasks
    (title,description,status,user_id,due_datetime)
    VALUES (?,?,?,?,?)`,
    [
      title,
      description,
      "Pending",
      user_id,
      due_datetime
    ],
    (err) => {
      if (err) return res.status(500).json(err);

      res.json({ message: "Task added" });
    }
  );
});

/* ================= EDIT TASK ================= */
app.put("/api/tasks/:id", (req, res) => {
  const id = req.params.id;

  const {
    title,
    description,
    due_datetime
  } = req.body;

  db.query(
    `UPDATE tasks
     SET title=?,
         description=?,
         due_datetime=?
     WHERE id=?`,
    [
      title,
      description,
      due_datetime,
      id
    ],
    (err) => {
      if (err) return res.status(500).json(err);

      res.json({ message: "Updated" });
    }
  );
});

/* ================= COMPLETE TASK ================= */
app.put("/api/tasks/complete/:id", (req, res) => {
  const id = req.params.id;

  db.query(
    "UPDATE tasks SET status='Completed' WHERE id=?",
    [id],
    (err) => {
      if (err) return res.status(500).json(err);

      res.json({ message: "Completed" });
    }
  );
});

/* ================= DELETE ================= */
app.delete("/api/tasks/:id", (req, res) => {
  const id = req.params.id;

  db.query(
    "DELETE FROM tasks WHERE id=?",
    [id],
    (err) => {
      if (err) return res.status(500).json(err);

      res.json({ message: "Deleted" });
    }
  );
});

app.listen(5000, () => {
  console.log("Server running on 5000 🚀");
});