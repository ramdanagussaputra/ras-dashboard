import {
    SparklineComponent,
    Inject,
    SparklineTooltip,
} from '@syncfusion/ej2-react-charts';

function SparkLineChart({ width, heigth, data, color, type }) {
    return (
        <SparklineComponent
            id="sparkline"
            width={width}
            height={heigth}
            dataSource={data}
            type={type}
            fill={color}
            xName="x"
            yName="yval"
            tooltipSettings={{ visible: true }}
            markerSettings={{ visible: ['All'], fill: color }}
        >
            <Inject services={[SparklineTooltip]} />
        </SparklineComponent>
    );
}

export default SparkLineChart;
