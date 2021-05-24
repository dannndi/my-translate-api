const express = require("express");
const app = express();

const translateRouter = require("./router/translate_router");

// cors
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

// default routes
app.get("/", (req, res) => {
  res.send("<h1>Welcome</h1>");
});

// routes
app.use("/api/v1/translate", translateRouter);

// handling error if page not found
app.use((req, res, next) => {
  const err = new Error("Page Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.status).json({
    error: {
      status: err.status,
      message: err.message,
    },
  });
});

// listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
