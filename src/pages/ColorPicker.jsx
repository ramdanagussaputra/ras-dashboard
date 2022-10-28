// Component
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import { Header } from '../components';

function ColorPicker() {
    const change = (args) => {
        document.getElementById('preview').style.backgroundColor = args.currentValue.rgba;
    };

    return (
        <div className="m-5 mt-20 rounded-xl bg-white p-5 shadow-2xl md:m-10 md:mt-5 md:p-10">
            <Header title="Color Picker" category="Apps" />

            <div className="mt-5 text-center">
                <div id="preview" />

                <div className="mt-5 flex flex-wrap items-center justify-center gap-10">
                    <div className="flex flex-col gap-5">
                        <p className="text-2xl font-semibold">Inline Pallete</p>
                        <ColorPickerComponent
                            modeSwitcher={false}
                            mode={'Palette'}
                            inline={true}
                            change={change}
                            showButtons={false}
                        />
                    </div>

                    <div className="flex flex-col gap-5">
                        <p className="text-2xl font-semibold">Inline Picker</p>
                        <ColorPickerComponent
                            modeSwitcher={false}
                            mode={'Picker'}
                            inline={true}
                            change={change}
                            showButtons={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ColorPicker;
