import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumToArray',
})
export class EnumToArrayPipe implements PipeTransform {
  transform(
    value: any,
    emptyLine: boolean = false,
    callback = (x: any) => x
  ): ({ label: string; value: string } | null)[] {
    if (emptyLine) {
      return [
        { label: 'Aucun', value: null },
        ...Object.keys(value).map((v) => ({
          label: callback(value[v as keyof typeof value]),
          value: value[v as keyof typeof value],
        })),
      ];
    }
    return [
      ...Object.keys(value).map((v) => ({
        label: callback(value[v as keyof typeof value]),
        value: value[v as keyof typeof value],
      })),
    ];
  }
}
