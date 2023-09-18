import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip} from 'recharts';

const Phones = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() =>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneData = data.data.data;
            const phoneFakeData = phoneData.map(phone => {
                const obj = {
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1])
                }
              return obj;
            })
            // console.log(phoneFakeData);
            setPhones((phoneFakeData))
        })

    }, [])

    return (
        <div>
            <h2 className="text-4xl">Phones Data: {phones.length}</h2>

            <BarChart width={1200} height={400} data={phones}>
            <Bar dataKey="price" fill="#8884d8" />
            <XAxis dataKey="name"></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            </BarChart>
            
        </div>
    );
};

export default Phones;