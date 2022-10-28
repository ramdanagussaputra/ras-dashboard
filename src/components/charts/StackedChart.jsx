import {
    ChartComponent,
    SeriesCollectionDirective,
    SeriesDirective,
    Inject,
    Legend,
    Category,
    Tooltip,
    StackingColumnSeries,
} from '@syncfusion/ej2-react-charts';

function StackedChart({ width, height, seriesData, primaryXAxis, primaryYAxis }) {
    return (
        <ChartComponent
            id="charts"
            primaryXAxis={primaryXAxis}
            primaryYAxis={primaryYAxis}
            width={width}
            height={height}
            chartArea={{ border: { width: 0 } }}
            tooltip={{ enable: true }}
            legendSettings={{ background: 'white', visible: true }}
        >
            <Inject services={[Legend, Category, Tooltip, StackingColumnSeries]} />
            <SeriesCollectionDirective>
                {seriesData.map((item) => (
                    <SeriesDirective key={item.name} {...item} />
                ))}
            </SeriesCollectionDirective>
        </ChartComponent>
    );
}

export default StackedChart;
