export class StockDetails {

    private _symbol: string;

    private _chiefExecutiveOfficer: string;

    private _numberOfEmployees: string;

    private _headquarters: string;

    private _dateFounded: string;

    private _marketCap: string;

    private _priceEarningsRatio: string;

    private _dividendYield: string;

    private _averageVolume: string;

    private _todayHigh: string;

    private _todayLow: string;

    private _openPrice: string;

    private _volume: string;

    private _yearHigh: string;

    private _yearLow: string;

    constructor(symbol: string, chiefExecutiveOfficer: string,
        numberOfEmployees: string, headquarters: string, dateFounded: string,
        marketCap: string, priceEarningsRatio: string, dividendYield: string,
        averageVolume: string, todayHigh: string, todayLow: string,
        openPrice: string, volume: string, yearHigh: string, yearLow: string) {
        this._symbol = symbol;
        this._chiefExecutiveOfficer = chiefExecutiveOfficer;
        this._numberOfEmployees = numberOfEmployees;
        this._headquarters = headquarters;
        this._dateFounded = dateFounded;
        this._marketCap = marketCap;
        this._priceEarningsRatio = priceEarningsRatio;
        this._dividendYield = dividendYield;
        this._averageVolume = averageVolume;
        this._todayHigh = todayHigh;
        this._todayLow = todayLow;
        this._openPrice = openPrice;
        this._volume = volume;
        this._yearHigh = yearHigh;
        this._yearLow = yearLow;
    }

    get symbol() {
        return this._symbol;
    }

    set symbol(symbol: string) {
        this._symbol = symbol;
    }

    get chiefExecutiveOfficer() {
        return this._chiefExecutiveOfficer;
    }

    set chiefExecutiveOfficer(chiefExecutiveOfficer: string) {
        this._chiefExecutiveOfficer = chiefExecutiveOfficer;
    }

    get numberOfEmployees() {
        return this._numberOfEmployees;
    }

    set numberOfEmployees(numberOfEmployees: string) {
        this._numberOfEmployees = numberOfEmployees;
    }

    get headquarters() {
        return this._headquarters;
    }

    set headquarters(headquarters: string) {
        this._headquarters = headquarters;
    }

    get dateFounded() {
        return this._dateFounded;
    }

    set dateFounded(dateFounded: string) {
        this._dateFounded = dateFounded;
    }

    get marketCap() {
        return this._marketCap;
    }

    set marketCap(marketCap: string) {
        this._marketCap = marketCap;
    }

    get priceEarningsRatio() {
        return this._priceEarningsRatio;
    }

    set priceEarningsRatio(priceEarningsRatio: string) {
        this._priceEarningsRatio = priceEarningsRatio;
    }

    get dividendYield(): string {
        return this._dividendYield;
    }

    set dividendYield(dividendYield: string) {
        this._dividendYield = dividendYield;
    }

    get averageVolume(): string {
        return this._averageVolume;
    }

    set averageVolume(averageVolume: string) {
        this._averageVolume = averageVolume;
    }

    get todayHigh(): string {
        return this._todayHigh;
    }

    set todayHigh(todayHigh: string) {
        this._todayHigh = todayHigh;
    }

    get todayLow(): string {
        return this._todayLow;
    }

    set todayLow(todayLow: string) {
        this._todayLow = todayLow;
    }

    get openPrice(): string {
        return this._openPrice;
    }

    set openPrice(openPrice: string) {
        this._openPrice = openPrice;
    }

    get volume(): string {
        return this._volume;
    }

    set volume(volume: string) {
        this._volume = volume;
    }

    get yearHigh(): string {
        return this._yearHigh;
    }

    set yearHigh(yearHigh: string) {
        this._yearHigh = yearHigh;
    }

    get yearLow(): string {
        return this._yearLow;
    }

    set yearLow(yearLow: string) {
        this._yearLow = yearLow;
    }
}
