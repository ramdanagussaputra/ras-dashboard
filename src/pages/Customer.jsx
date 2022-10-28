// Component
import {
    GridComponent,
    ColumnsDirective,
    ColumnDirective,
    Inject,
    Edit,
    Toolbar,
    Page,
    Sort,
} from '@syncfusion/ej2-react-grids';
import { Header } from '../components';

// Data
import { customersData, customersGrid } from '../data/dummy';

function Customer() {
    return (
        <div className="m-2 mt-20 rounded-xl bg-white p-2 shadow-2xl md:m-10 md:mt-5 md:p-10">
            <Header title="Customers" category="Pages" />

            <div className="mt-5">
                <GridComponent
                    dataSource={customersData}
                    allowSorting
                    allowPaging
                    editSettings={{
                        allowEditing: true,
                        allowDeleting: true,
                        mode: 'Batch',
                    }}
                    pageSettings={{ pageSize: 10, pageCount: 5, pageSizes: true }}
                    toolbar={['Delete']}
                >
                    <ColumnsDirective>
                        {customersGrid.map((item, i) => (
                            <ColumnDirective key={i} {...item} />
                        ))}
                    </ColumnsDirective>
                    <Inject services={[Sort, Page, Edit, Toolbar]} />
                </GridComponent>
            </div>
        </div>
    );
}

export default Customer;
