import { Lambda } from 'goldrube';
import axios from 'axios';

type input1 = {
    name: string,
    age: Number
}

type input2 = {
    sex: string,
    birth: string
}


let l1 = new Lambda<input1>("lambda1");
let l2 = new Lambda<input2>("lambda2");

l1.setHandler((input) => {
    const params: input2 = {
        sex: "M",
        birth: "01/01/1990"
    }

    l2.trigger(params);

    return true;
});

l2.setHandler((input) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        console.log(response.data); // Logs the response data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
});