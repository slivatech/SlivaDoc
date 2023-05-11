import React, { useMemo } from 'react'
import { Bar, BarChart, Cell, ResponsiveContainer, Text, XAxis, YAxis } from 'recharts';

interface IBarChart {
    data: any,
    left: string,
    right: string,
}

const BarChartVertical = (props:IBarChart) => {
 
  return (
    <ResponsiveContainer width={"100%"} height={40 * props.data.length}>
        <BarChart
            data={props.data}
            layout="vertical"
            width={300}
        >
        <XAxis hide axisLine={false} type="number" />
        <YAxis
          yAxisId={0}
          dataKey={props.left}
          type="category"
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          orientation="right"
          dataKey={props.right}
          yAxisId={1}
          type="category"
          axisLine={false}
          tickLine={false}
          tickFormatter={value => value.toLocaleString()}
        />
        <Bar dataKey="total" radius={[0, 25, 25, 0]} barSize={12}>
          {props.data.map((d:string, idx:number) => {
            return (
                <Cell fill={idx % 2 === 0 ? '#3A36DB' : '#FF69B4' } />
            )
                
          })}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}

export default BarChartVertical