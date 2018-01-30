import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'splitter'
})
export class SplitterPipe implements PipeTransform {

    transform(value): string {

        let mod = String(value).split(',').join('\n');

        return mod;
        ;
    }

}
