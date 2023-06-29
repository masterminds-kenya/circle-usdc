const mongoose = require('mongoose');


const connectDatabase = () => {
    const DB_URI = "mongodb://0.0.0.0:27017/ABCUsers"
    console.log(DB_URI);
    mongoose
        .connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        })
        .then((con) => {
        console.log(
            `MongoDB Database connected with host: ${con.connection.host}`
        );
        });
};


// module.exports = connectDatabase;
// const mongoose = requir('require');

// const connectDatabase = ()=>{
//     const DB_URI = "//url";
//     console.log(DB_URI)
//     mongoose.connect(DB_URI,{

//     }).then((con)=>{
//         console.log()
//     })
// }