// Component
import {
    ChartComponent,
    SeriesCollectionDirective,
    SeriesDirective,
    Inject,
    Legend,
    Category,
    Tooltip,
    ColumnSeries,
    DataLabel,
} from '@syncfusion/ej2-react-charts';
import { Header } from '../../components';

// Data
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';

function Bar() {
    return (
        <div className="m-2 mt-20 rounded-xl bg-white p-2 shadow-2xl md:m-10 md:mt-5 md:p-10">
            <Header title="Olympic Medal Counts - RIO" category="Charts" />

            <div className="mt-5">
                <ChartComponent
                    id="charts"
                    primaryXAxis={barPrimaryXAxis}
                    primaryYAxis={barPrimaryYAxis}
                    chartArea={{ width: 0 }}
                >
                    <SeriesCollectionDirective>
                        {barCustomSeries.map((item) => (
                            <SeriesDirective key={item.name} {...item} />
                        ))}
                    </SeriesCollectionDirective>
                    <Inject
                        services={[ColumnSeries, Category, DataLabel, Tooltip, Legend]}
                    />
                </ChartComponent>
            </div>
        </div>
    );
}

export default Bar;
