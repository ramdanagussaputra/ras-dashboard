import {
    KanbanComponent,
    ColumnsDirective,
    ColumnDirective,
} from '@syncfusion/ej2-react-kanban';
import { Header } from '../components';

import { kanbanData } from '../data/dummy';

function Kanban() {
    return (
        <div className="m-2 mt-20 rounded-xl bg-white p-2 shadow-2xl md:m-10 md:mt-5 md:p-10">
            <Header title="Kanban" category="Apps" />

            <div className="mt-5">
                <KanbanComponent
                    keyField="Status"
                    cardSettings={{
                        headerField: 'Id',
                        contentField: 'Summary',
                        footerCssField: 'ClassName',
                        grabberField: 'Color',
                        tagsField: 'Tags',
                    }}
                    swimlaneSettings={{ keyField: 'Assignee' }}
                    dataSource={kanbanData}
                >
                    <ColumnsDirective>
                        <ColumnDirective headerText="To Do" keyField="Open" allowToggle />
                        <ColumnDirective
                            allowToggle
                            headerText="In Progress"
                            keyField="InProgress"
                        />
                        <ColumnDirective
                            allowToggle
                            headerText="In Review"
                            keyField="Review"
                        />
                        <ColumnDirective allowToggle headerText="Done" keyField="Close" />
                    </ColumnsDirective>
                </KanbanComponent>
            </div>
        </div>
    );
}

export default Kanban;
