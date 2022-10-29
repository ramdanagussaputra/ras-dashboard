// Component
import {
    ChartComponent,
    SeriesCollectionDirective,
    SeriesDirective,
    Inject,
    DateTime,
    Legend,
    SplineAreaSeries,
} from '@syncfusion/ej2-react-charts';
import { Header } from '../../components';

// Data
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy';

function Area() {
    return (
        <div className="m-2 mt-20 rounded-xl bg-white p-2 shadow-2xl md:m-10 md:mt-5 md:p-10">
            <Header title="Inflation Rate" category="Charts" />

            <div className="mt-5">
                <ChartComponent
                    primaryXAxis={areaPrimaryXAxis}
                    primaryYAxis={areaPrimaryYAxis}
                    chartArea={{ width: 0 }}
                    tooltip={{ enable: true }}
                >
                    <SeriesCollectionDirective>
                        {areaCustomSeries.map((item) => (
                            <SeriesDirective key={item.name} {...item} />
                        ))}
                    </SeriesCollectionDirective>
                    <Inject services={[DateTime, Legend, SplineAreaSeries]} />
                </ChartComponent>
            </div>
        </div>
    );
}

export default Area;
