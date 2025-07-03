import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';


const Phones = () => {
    const[phones, setPhones] = useState([]);

    useEffect(() =>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhones(data))
        axios.get(' https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data =>{
            const phoneData = data.data.data;
            const phonesEithFakeData = phoneData.map(phone =>{
                const obj = {
                    name: phone.phone_name,
                    price:parseInt(phone.slug.split('-')[1])
                }
                return obj
            })
            console.log(phonesEithFakeData)
            setPhones(phonesEithFakeData)
        })

    },[])
    return (
        <div>
            <h2>Phones:{phones.length}</h2>

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