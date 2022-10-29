// Component
import {
    ScheduleComponent,
    Week,
    Day,
    WorkWeek,
    Month,
    Year,
    Agenda,
    Inject,
} from '@syncfusion/ej2-react-schedule';
import { Header } from '../components';

// Data
import { scheduleData } from '../data/dummy';

function Calendar() {
    return (
        <div className="m-2 mt-20 rounded-xl bg-white p-2 shadow-2xl md:m-10 md:mt-5 md:p-10">
            <Header title="Calendar" category="Apps" />

            <div className="mt-5">
                <ScheduleComponent
                    eventSettings={{ dataSource: scheduleData }}
                    selectedDate={new Date(2022, 0, 10)}
                    currentView="Month"
                    height="560px"
                >
                    <Inject services={[Day, Week, WorkWeek, Month, Year, Agenda]} />
                </ScheduleComponent>
            </div>
        </div>
    );
}

export default Calendar;
