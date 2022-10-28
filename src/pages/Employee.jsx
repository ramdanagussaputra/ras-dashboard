// Component
import {
    GridComponent,
    ColumnsDirective,
    ColumnDirective,
    Search,
    Sort,
    Page,
    Filter,
    Inject,
    Toolbar,
} from '@syncfusion/ej2-react-grids';
import Header from '../components/Header';

// Data
import { employeesData, employeesGrid } from '../data/dummy';

function Employee() {
    return (
        <div className="m-2 mt-20 rounded-xl bg-white p-2 shadow-2xl md:m-10 md:mt-5 md:p-10">
            <Header title="Employees" category="Pages" />

            <div className="mt-5">
                <GridComponent
                    dataSource={employeesData}
                    allowSorting
                    allowPaging
                    allowResizing
                    allowFiltering
                    filterSettings={{ type: 'CheckBox' }}
                    pageSettings={{ pageSize: 10, pageCount: 5, pageSizes: true }}
                    toolbar={['Search']}
                >
                    <ColumnsDirective>
                        {employeesGrid.map((item, i) => (
                            <ColumnDirective key={i} {...item} />
                        ))}
                    </ColumnsDirective>
                    <Inject services={[Sort, Page, Search, Filter, Toolbar]} />
                </GridComponent>
            </div>
        </div>
    );
}

export default Employee;
