import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
import { PieChart, Pie } from 'recharts';
const LineChart = () => {
    const studentData = [
        { id: 1, name: "Student A", math: 85, physics: 78, chemistry: 92 },
        { id: 2, name: "Student B", math: 78, physics: 88, chemistry: 90 },
        { id: 3, name: "Student C", math: 90, physics: 86, chemistry: 85 },
        { id: 4, name: "Student D", math: 92, physics: 91, chemistry: 88 },
        { id: 5, name: "Student E", math: 88, physics: 84, chemistry: 89 },
        { id: 6, name: "Student F", math: 76, physics: 79, chemistry: 82 },
        { id: 7, name: "Student G", math: 95, physics: 92, chemistry: 94 },
        { id: 8, name: "Student H", math: 89, physics: 85, chemistry: 91 },
        { id: 9, name: "Student I", math: 93, physics: 90, chemistry: 87 },
        { id: 10, name: "Student J", math: 87, physics: 88, chemistry: 86 },
      ];
      const data01 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        { name: 'Group E', value: 278 },
        { name: 'Group F', value: 189 },
      ];
 
    return (
        <div className='md:flex'>
            <div>
            <LChart width={800} height={400} data={studentData}>
            <XAxis dataKey="name" />
            <YAxis dataKey=""></YAxis>
            <Line dataKey="math" stroke='red'></Line>
            <Line dataKey={'physics'} stroke='blue'></Line>
            </LChart>
            </div>

            <div>
                <PieChart width={500} height={400}>
                 <Pie dataKey={'value'}
                    // isAnimationActive={false}
                    data={data01}
                    // cx="50%"
                    // cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    label
                    ></Pie>
                </PieChart>
            </div>          
        </div>
    );
};


export default LineChart;