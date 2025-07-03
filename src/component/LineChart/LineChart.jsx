import { LineChart as LC, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip } from 'recharts';

const LineChart = () => {

 const students = [
  { id: 1, name: "Ariana", math: 58, physics: 65, chemistry: 70 },
  { id: 2, name: "Bilal", math: 67, physics: 72, chemistry: 68 },
  { id: 3, name: "Chloe", math: 73, physics: 78, chemistry: 75 },
  { id: 4, name: "David", math: 85, physics: 80, chemistry: 82 },
  { id: 5, name: "Elina", math: 90, physics: 88, chemistry: 91 },
  { id: 6, name: "Farhan", math: 62, physics: 60, chemistry: 65 },
  { id: 7, name: "Grace", math: 78, physics: 75, chemistry: 80 },
  { id: 8, name: "Hassan", math: 80, physics: 82, chemistry: 85 },
  { id: 9, name: "Isabella", math: 95, physics: 90, chemistry: 92 },
  { id: 10, name: "Jamil", math: 70, physics: 68, chemistry: 72 },
];

    return (
        <div className='text-center'>
           
            <LC width={800} height={400} data={students}>
                 <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
            <Line dataKey="math" stroke='red'></Line>
            <Line dataKey={'physics'} stroke='green'></Line>
            </LC>
           
            
        </div>
    );
};

export default LineChart;