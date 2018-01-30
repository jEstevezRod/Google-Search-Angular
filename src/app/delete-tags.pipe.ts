import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'deleteTags'
})
export class DeleteTagsPipe implements PipeTransform {


    transform(value): string {

        let mod = String(value).split('<b>').join('\t');
        mod = mod.split('</b>').join('\t');
        mod = mod.split('<div style="font-size:0.9em">').join('\t');
        mod = mod.split('</div>').join('\t');

        return mod;
    }
}
