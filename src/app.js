const express = require('express');
const addRoutes = require('./routes/add');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', addRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});