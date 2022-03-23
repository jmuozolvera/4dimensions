import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

const source = of(1, 2, 3, 4, 5);

source
  .pipe(
    tap((n) => {
      if (n > 3) {
        console.log(`Value ${n} is greater than 3`);
      }
    })
  )
  .subscribe(console.log);
