import { Pipe, PipeTransform } from '@angular/core';
import { Currency } from 'src/app/models/Currency';

@Pipe({
  name: 'testPipe'
})
export class TestPipePipe implements PipeTransform {

  transform(value: Currency): Currency {
    return {...value, rate: value.rate +10};
  }

}
