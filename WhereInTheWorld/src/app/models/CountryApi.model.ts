export class CountryApi {
  constructor(
    private _id: number,
    private _name: string,
    private _population: string,
    private _region: string,
    private _capital: string,
    private _flags: any,
    private _cityName: string | null
  ) {}

  get cityName(): string | null {
    return this._cityName;
  }

  set cityName(cityName: string | null) {
    this._cityName = cityName;
  }
  get id(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get population(): string {
    return this._population;
  }

  set population(population: string) {
    this._population = population;
  }

  get region(): string {
    return this._region;
  }

  set region(region: string) {
    this._region = region;
  }

  get capital(): string {
    return this._capital;
  }

  set capital(capital: string) {
    this._capital = capital;
  }

  get flags(): string {
    return this._flags;
  }

  set flags(flags: string) {
    this._flags = flags;
  }
}
