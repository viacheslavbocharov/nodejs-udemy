import express from 'express';
import morgan from 'morgan';
// import qs from 'querystring';

const app = express();

app.use(morgan('short'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//     if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
//         let data = '';
//         req.on('data', (chunk) => (data += chunk.toString()));
//         req.on('end', () => {
//             const parsedFromData = qs.parse(data);
//             req.body = parsedFromData;
//             next();
//         });
//     } else {
//         next();
//     }
// });

app.use((req, res) => {
    console.log(req.body);
    return res.send(`This is express server`);
});

app.listen(5000, () => console.log(`Server is listening on port 5000`));
