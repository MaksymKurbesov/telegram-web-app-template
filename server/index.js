const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://bonyklade:trewQ!2345@cluster0.x6cnhxm.mongodb.net/telegram-web-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.get('/items', async (req, res) => {
    const items = ["test", "test2", "test3"]
    res.json(items);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));