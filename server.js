const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

const PORT = process.env.PORT || 1708

const UserRouter = require('./routes/user.route')
const ProductRouter = require('./routes/product.route')
const Invoice = require('./routes/invoice.route')

app.use('/user', UserRouter)
app.use('/product', ProductRouter)
app.use('/invoice', Invoice)

app.listen(PORT, () => console.log(`Server listenning on port : http://localhost:${PORT}`))