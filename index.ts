import { of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

of(Math.random())
  .pipe(
    tap(console.log),
    map((n) => (n > 0.5 ? 'big' : 'small'))
  )
  .subscribe(console.log);
