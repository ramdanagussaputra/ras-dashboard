// Component
import {
    AccumulationChartComponent,
    AccumulationSeriesCollectionDirective,
    AccumulationSeriesDirective,
    AccumulationDataLabel,
    AccumulationTooltip,
    Inject,
} from '@syncfusion/ej2-react-charts';
import { Header } from '../../components';

// Data
import { pieChartData } from '../../data/dummy';

function Pie() {
    return (
        <div className="m-2 mt-20 rounded-xl bg-white p-2 shadow-2xl md:m-10 md:mt-5 md:p-10">
            <Header title="Project Cost Breakdown" category="Charts" />

            <div className="mt-5">
                <AccumulationChartComponent tooltip={{ enable: true }}>
                    <AccumulationSeriesCollectionDirective>
                        <AccumulationSeriesDirective
                            dataSource={pieChartData}
                            xName="x"
                            yName="y"
                            innerRadius="30%"
                            radius="80%"
                            explode
                            explodeOffset="20%"
                            explodeIndex={0}
                            dataLabel={{
                                visible: true,
                                name: 'text',
                                position: 'Inside',
                                font: {
                                    fontWeight: '600',
                                    color: '#fff',
                                },
                            }}
                        />
                    </AccumulationSeriesCollectionDirective>
                    <Inject services={[AccumulationDataLabel, AccumulationTooltip]} />
                </AccumulationChartComponent>
            </div>
        </div>
    );
}

export default Pie;
