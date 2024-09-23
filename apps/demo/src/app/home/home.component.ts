import { TuiEditor, TuiEditorSocket, TUI_EDITOR_DEFAULT_EXTENSIONS } from "@taiga-ui/editor";
import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
    TUI_EDITOR_DEFAULT_EDITOR_TOOLS,
    TUI_EDITOR_EXTENSIONS
} from '@taiga-ui/editor';

@Component({
    standalone: true,
    selector: 'home',
    imports: [FormsModule, TuiEditor, TuiEditorSocket],
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
