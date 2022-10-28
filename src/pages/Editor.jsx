// Component
import {
    RichTextEditorComponent,
    Inject,
    HtmlEditor,
    QuickToolbar,
    Toolbar,
    Image,
    Link,
} from '@syncfusion/ej2-react-richtexteditor';
import { Header } from '../components';

// Data
import { EditorData } from '../data/dummy';

function Editor() {
    return (
        <div className="m-2 mt-20 rounded-xl bg-white p-2 shadow-2xl md:m-10 md:mt-5 md:p-10">
            <Header title="Editors" category="Apps" />

            <div className="mt-5">
                <RichTextEditorComponent
                    height="500px"
                    quickToolbarSettings={{
                        image: [
                            'Replace',
                            'Align',
                            'Caption',
                            'Remove',
                            'InsertLink',
                            'OpenImageLink',
                            '-',
                            'EditImageLink',
                            'RemoveImageLink',
                            'Display',
                            'AltText',
                            'Dimension',
                        ],
                        link: ['Open', 'Edit', 'UnLink'],
                    }}
                    toolbarSettings={{
                        items: [
                            'Bold',
                            'Italic',
                            'Underline',
                            'StrikeThrough',
                            'FontSize',
                            'FontColor',
                            'BackgroundColor',
                            'LowerCase',
                            'UpperCase',
                            '|',
                            'Formats',
                            'Alignments',
                            'OrderedList',
                            'UnorderedList',
                            'Outdent',
                            'Indent',
                            '|',
                            'CreateLink',
                            'Image',
                            '|',
                            'ClearFormat',
                            'Print',
                            'SourceCode',
                            'FullScreen',
                            '|',
                            'Undo',
                            'Redo',
                        ],
                    }}
                >
                    <EditorData />
                    <Inject services={[HtmlEditor, QuickToolbar, Toolbar, Image, Link]} />
                </RichTextEditorComponent>
            </div>
        </div>
    );
}

export default Editor;
