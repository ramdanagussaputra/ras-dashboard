import { useSelector } from 'react-redux';
// import {stateSliceActions} from '../store/state-slice'
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { Stacked, Pie, Button, SparkLine } from '../components';
import {
    earningData,
    SparklineAreaData,
    ecomPieChartData,
    stackedCustomSeries,
    stackedPrimaryXAxis,
    stackedPrimaryYAxis,
} from '../data/dummy';

function Ecommerce() {
    const themeState = useSelector((state) => state.theme);
    return (
        <>
            <div className="mt-12 flex flex-wrap justify-center gap-3 p-6 lg:flex-nowrap">
                <div className="h-44 w-full rounded-lg bg-hero-pattern bg-cover bg-center bg-no-repeat p-4 shadow-xl lg:w-80">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-base font-bold text-gray-500">Earnings</p>
                            <p className="mt-1 text-2xl">$63,448.78</p>
                        </div>

                        <Button
                            icon={<BsCurrencyDollar />}
                            size="3xl"
                            borderRadius="full"
                            color="white"
                            bgColor={themeState.currentColor}
                        />
                    </div>

                    <div className="mt-10">
                        <Button
                            text="Download"
                            size="md"
                            borderRadius="lg"
                            color="white"
                            bgColor={themeState.currentColor}
                        />
                    </div>
                </div>

                <div className="m-3 flex flex-wrap items-start justify-center gap-1">
                    {earningData.map((item) => (
                        <div
                            key={item.title}
                            className=" flex h-44 w-full flex-col justify-center rounded-lg bg-light-gray px-4 pt-9 pb-3 shadow-lg dark:bg-secondary-dark-bg dark:text-gray-200 sm:w-36 md:w-48"
                        >
                            <div
                                className={`flex h-14 w-14 items-center justify-center rounded-full hover:drop-shadow-lg`}
                                style={{
                                    color: item.iconColor,
                                    backgroundColor: item.iconBg,
                                }}
                            >
                                {item.icon}
                            </div>

                            <div className="mt-3">
                                <p className="flex items-center gap-2">
                                    <span className="text-lg text-gray-900 dark:text-gray-200">
                                        {item.amount}
                                    </span>
                                    <span className={`text-sm text-${item.pcColor}`}>
                                        {item.percentage}
                                    </span>
                                </p>

                                <p className="text-base text-gray-500">{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="m-5 flex flex-wrap items-center justify-center gap-5 p-6">
                <div className="m-3 rounded-xl bg-light-gray p-3 shadow-xl dark:bg-secondary-dark-bg dark:text-gray-200 md:w-780">
                    {/* Header */}
                    <div className="flex justify-between">
                        <p className="text-xl font-semibold">Revenue Updates</p>

                        <div className="flex gap-4">
                            <p className="flex items-center justify-center gap-1 text-sm">
                                <GoPrimitiveDot />
                                <span className="text-gray-900">Expense</span>
                            </p>

                            <p className="flex items-center justify-center gap-1 text-sm text-green-400">
                                <GoPrimitiveDot />
                                <span>Budget</span>
                            </p>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="mt-5 flex flex-wrap items-center justify-center gap-x-28 gap-y-10">
                        <div className="flex flex-col  gap-y-10 gap-x-2 border-r-0 border-gray-300 p-3 pr-10 md:border-r-1">
                            <div>
                                <p className="flex items-center gap-3">
                                    <span className="text-3xl font-semibold">
                                        $93,438
                                    </span>
                                    <span className="rounded-xl bg-green-400 p-1 text-xs text-gray-100">
                                        23%
                                    </span>
                                </p>

                                <p className=" text-gray-500">Budget</p>
                            </div>

                            <div>
                                <p className="flex items-center gap-3">
                                    <span className="text-3xl font-semibold">
                                        $48,487
                                    </span>
                                </p>

                                <p className=" text-gray-500">Expense</p>
                            </div>

                            <div>
                                <SparkLine
                                    width="250px"
                                    heigth="80px"
                                    data={SparklineAreaData}
                                    color={themeState.currentColor}
                                    type="Line"
                                />
                            </div>

                            <div className="self-center md:self-start">
                                <Button
                                    text="Download Report"
                                    color="white"
                                    bgColor={themeState.currentColor}
                                    borderRadius="lg"
                                />
                            </div>
                        </div>

                        <div>
                            <Stacked
                                width="320px"
                                height="360px"
                                seriesData={stackedCustomSeries}
                                primaryXAxis={stackedPrimaryXAxis}
                                primaryYAxis={stackedPrimaryYAxis}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Ecommerce;
