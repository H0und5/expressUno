const express = require('express');

const app = express();

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
