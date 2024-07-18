import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
    TUI_EDITOR_DEFAULT_EDITOR_TOOLS,
    TUI_EDITOR_DEFAULT_EXTENSIONS,
    TUI_EDITOR_EXTENSIONS,
    TuiEditorModule,
    TuiEditorSocketModule,
} from '@tinkoff/tui-editor';

@Component({
    standalone: true,
    selector: 'home',
    imports: [FormsModule, TuiEditorModule, TuiEditorSocketModule],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: TUI_EDITOR_DEFAULT_EXTENSIONS,
        },
    ],
})
export default class HomeComponent {
    protected readonly builtInTools = TUI_EDITOR_DEFAULT_EDITOR_TOOLS;
    protected editor = '';
}
