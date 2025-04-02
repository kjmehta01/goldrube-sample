import { RESTClient, Lambda } from 'goldrube';
import axios from 'axios';

type input1 = {
    name: string,
    age: number
}

type input2 = {
    sex: string,
    birth: string
}

let d1 = new KVDatabase<string, input1>();

let l1 = new Lambda<RESTClient<input1>, boolean>(async (input) => {
    const params: any = {
        sex: "M",
        birth: "01/01/" + (2025 - input.data.age)
    }

    d1.put(input.data.name, input);

    return await l2.trigger(params);
});

let l2 = new Lambda<input2, boolean>(async (input) => {
    try {
        //const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + input.sex);
        const response = await axios.get('http://127.0.0.1:3000/' + input.sex);
        console.log(response.data); // Logs the response data
        return true;
    } catch (error) {
        console.error('Error fetching data:', error);
        return false;
    }
});

