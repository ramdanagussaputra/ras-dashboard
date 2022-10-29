// Component
import {
    ChartComponent,
    SeriesCollectionDirective,
    SeriesDirective,
    Inject,
    DateTime,
    Tooltip,
    Legend,
    LineSeries,
} from '@syncfusion/ej2-react-charts';
import { Header } from '../../components';

// Data
import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy';

function Line() {
    return (
        <div className="m-2 mt-20 rounded-xl bg-white p-2 shadow-2xl md:m-10 md:mt-5 md:p-10">
            <Header title="Inflation Rate" category="Charts" />

            <div className="mt-5">
                <ChartComponent
                    primaryXAxis={LinePrimaryXAxis}
                    primaryYAxis={LinePrimaryYAxis}
                    chartArea={{ width: 0 }}
                    tooltip={{ enable: true }}
                >
                    <SeriesCollectionDirective>
                        {lineCustomSeries.map((item) => (
                            <SeriesDirective key={item.name} {...item} />
                        ))}
                    </SeriesCollectionDirective>
                    <Inject services={[DateTime, Tooltip, Legend, LineSeries]} />
                </ChartComponent>
            </div>
        </div>
    );
}

export default Line;
