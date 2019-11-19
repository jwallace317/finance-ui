export class Forex {

    private _fromCurrencySymbol: string;

    private _toCurrencySymbol: string;

    private _timestamp: string;

    private _fromCurrencyName: string;

    private _toCurrencyName: string;

    private _exchangeRate: number;

    private _bidPrice: number;

    private _askPrice: number;

    constructor(fromCurrencySymbol: string, toCurrencySymbol: string,
        timestamp: string, fromCurrencyName: string, toCurrencyName: string,
        exchangeRate: number, bidPrice: number, askPrice: number) {
            this._fromCurrencySymbol = fromCurrencySymbol;
            this._toCurrencySymbol = toCurrencySymbol;
            this._timestamp = timestamp;
            this._fromCurrencyName = fromCurrencyName;
            this._toCurrencyName = toCurrencyName;
            this._exchangeRate = exchangeRate;
            this._bidPrice = bidPrice;
            this._askPrice = askPrice;
    }

    get fromCurrencySymbol(): string {
        return this._fromCurrencySymbol;
    }

    set fromCurrencySymbol(fromCurrencySymbol: string) {
        this._fromCurrencySymbol = fromCurrencySymbol;
    }

    get toCurrencySymbol(): string {
        return this._toCurrencySymbol;
    }

    set toCurrencySymbol(toCurrencySymbol: string) {
        this._toCurrencySymbol = toCurrencySymbol;
    }

    get timestamp(): string {
        return this._timestamp;
    }

    set timestamp(timestamp: string) {
        this._timestamp = timestamp;
    }

    get fromCurrencyName(): string {
        return this._fromCurrencyName;
    }

    set fromCurrencyName(fromCurrencyName: string) {
        this._fromCurrencyName = fromCurrencyName;
    }

    get toCurrencyName(): string {
        return this._toCurrencyName;
    }

    set toCurrencyName(toCurrencyName: string) {
        this._toCurrencyName = toCurrencyName;
    }

    get exchangeRate(): number {
        return this._exchangeRate;
    }

    set exchangeRate(exchangeRate: number) {
        this._exchangeRate = exchangeRate;
    }

    get bidPrice(): number {
        return this._bidPrice;
    }

    set bidPrice(bidPrice: number) {
        this._bidPrice = bidPrice;
    }

    get askPrice(): number {
        return this._askPrice;
    }

    set askPrice(askPrice: number) {
        this._askPrice = askPrice;
    }
}
