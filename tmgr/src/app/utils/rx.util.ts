import { pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export const discardOddDoubleEven = () => {
  return pipe(
    filter((v: number) => !(v % 2)),
    map((v) => v * 2)
  );
};
