import { TUI_SANITIZER } from "@taiga-ui/legacy";
import { TuiPush } from "@taiga-ui/kit";
import { NG_EVENT_PLUGINS } from "@taiga-ui/event-plugins";
import { TUI_EDITOR_DEFAULT_EXTENSIONS } from "@taiga-ui/editor";
import type {ApplicationConfig, Injector} from '@angular/core';
import {importProvidersFrom, INJECTOR} from '@angular/core';
import {provideClientHydration} from '@angular/platform-browser';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideRouter} from '@angular/router';
import { TuiRoot, TuiAlert, TuiDialog } from '@taiga-ui/core';
import {NgDompurifySanitizer} from '@taiga-ui/dompurify';
import {TUI_EDITOR_EXTENSIONS} from '@taiga-ui/editor';

export const appConfig: ApplicationConfig = {
    providers: [
        provideClientHydration(),
        provideAnimations(),
        provideRouter([
            {
                path: '',
                pathMatch: 'full',
                loadComponent: async () => import('./home/home.component'),
            },
        ]),
        importProvidersFrom(
),
        {
            provide: TUI_EDITOR_EXTENSIONS,
            deps: [INJECTOR],
            useFactory: (injector: Injector) => [
                ...TUI_EDITOR_DEFAULT_EXTENSIONS,
                import('@taiga-ui/editor').then(
                    ({tuiCreateImageEditorExtension}) =>
                        tuiCreateImageEditorExtension({injector}),
                ),
            ],
        },
        {
            provide: TUI_SANITIZER,
            useClass: NgDompurifySanitizer,
        },
        NG_EVENT_PLUGINS
    ],
};
