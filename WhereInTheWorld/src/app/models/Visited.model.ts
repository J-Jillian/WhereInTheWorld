export class Visited {
  constructor(private _cityName: string, private _timesVisited: any) {}
  get cityName(): string {
    return this._cityName;
  }

  set cityName(cityName: string) {
    this._cityName = cityName;
  }

  get timesVisited(): number {
    return this._timesVisited;
  }

  set timesVisited(timesVisited: number) {
    this._timesVisited = timesVisited;
  }
}
