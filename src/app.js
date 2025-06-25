const express = require('express');
const mathRoutes = require('./routes/math');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', mathRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});