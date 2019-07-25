import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, 
} from 'recharts';

const data = [
  {
    name: '10/02', requests: 500, 
  },
  {
    name: '11/02', requests: 200, 
  },
  {
    name: '12/02', requests: 100, 
  },
  {
    name: '13/02', requests: 800, 
  },
  {
    name: '14/02', requests: 300, 
  },
  {
    name: '15/02', requests: 900, 
  },
  {
    name: '16/02', requests: 400,
  },
];

const GraphApiUse = () => {
    return (
        <div style={{paddingTop: "2rem"}}>
            <h1>API Usage</h1>
            <p>Billing cycle resets each month on the 28th</p>
            <p>API calls this billing cycle 0/1000(0.00%)</p>
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="requests" stroke="#8884d8" activeDot={{ r: 8 }} 
            />
            </LineChart>
        </div>
      )
}

export default GraphApiUse