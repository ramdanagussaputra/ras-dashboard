// Component
import {
    GridComponent,
    ColumnsDirective,
    ColumnDirective,
    Sort,
    Page,
    PdfExport,
    ExcelExport,
    Inject,
    Edit,
    Resize,
    ContextMenu,
} from '@syncfusion/ej2-react-grids';
import Header from '../components/Header';

// Data
import { ordersData, ordersGrid, contextMenuItems } from '../data/dummy';

function Orders() {
    return (
        <div className="m-2 mt-20 rounded-xl bg-white p-2 shadow-2xl md:m-10 md:mt-5 md:p-10">
            <Header title="Orders" category="Pages" />

            <div className="mt-5">
                <GridComponent
                    dataSource={ordersData}
                    allowSorting
                    allowPaging
                    allowResizing
                    allowExcelExport
                    allowPdfExport
                    resizeSettings={{ mode: 'Auto' }}
                    pageSettings={{ pageSize: 10, pageCount: 5, pageSizes: true }}
                    editSettings={{ allowEditing: true }}
                    contextMenuItems={contextMenuItems}
                >
                    <ColumnsDirective>
                        {ordersGrid.map((item) => (
                            <ColumnDirective key={item.field} {...item} />
                        ))}
                    </ColumnsDirective>
                    <Inject
                        services={[
                            Sort,
                            Page,
                            PdfExport,
                            ExcelExport,
                            Edit,
                            Resize,
                            ContextMenu,
                        ]}
                    />
                </GridComponent>
            </div>
        </div>
    );
}

export default Orders;
