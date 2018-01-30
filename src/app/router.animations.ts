import {animate, style, transition, trigger,} from '@angular/animations';

export function FadeInOut() {
    return trigger('routerTransition', [
        transition('void => *', [
            style({
                position: 'fixed',
                opacity: 0,
                'z-index': '888',
                transform: 'scale(0)'
            }),
            animate('0.5s ease-in-out',
                style({
                    opacity: 1,
                    transform: 'scale(1)'
                }))
        ]),

        transition('* => void', [
            style({
                position: 'fixed',
                opacity: 1,
                transform: 'scale(1)'
            }),
            animate('0.5s ease-in-out',
                style({
                    opacity: 0,
                    transform: 'scale(0)'
                }))
        ]),
    ]);

}
