import { season, temperature } from './named-export.mjs';
import { isRaining, humidity } from './inline-exporta.mjs';
import getDataFromServer from './default-export.mjs';
import DEFAULT_SERVER, {
    USERNAME as userName,
    PASSWORD,
} from './mixed-exports.mjs';

console.log(season, temperature);
console.log(isRaining, humidity);

// const posts = await getDataFromServer('https://jsonplaceholder.typicode.com/posts/1');
// console.log(posts);

getDataFromServer('https://jsonplaceholder.typicode.com/posts/1')
    .then((post) => console.log(post))
    .catch((err) => console.log(err));

console.log(DEFAULT_SERVER);
console.log(userName, PASSWORD);
