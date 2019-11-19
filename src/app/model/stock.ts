export class Stock {

    private _symbol: string;

    private _timestamp: string;

    private _open: number;

    private _high: number;

    private _low: number;

    private _close: number;

    private _volume: number;

    constructor(symbol: string, timestamp: string, open: number, high: number,
        low: number, close: number, volume: number) {
        this._symbol = symbol;
        this._timestamp = timestamp;
        this._open = open;
        this._high = high;
        this._low = low;
        this._close = close;
        this._volume = volume;
    }

    get symbol(): string {
        return this._symbol;
    }

    set symbol(symbol: string) {
        this._symbol = symbol;
    }

    get timestamp(): string {
        return this._timestamp;
    }

    set timestamp(timestamp: string) {
        this._timestamp = timestamp;
    }

    get open(): number {
        return this._open;
    }

    set open(open: number) {
        this._open = open;
    }

    get high(): number {
        return this._high;
    }

    set high(high: number) {
        this._high = high;
    }

    get low(): number {
        return this._low;
    }

    set low(low: number) {
        this._low = low;
    }

    get close(): number {
        return this._close;
    }

    set close(close: number) {
        this._close = close;
    }

    get volume(): number {
        return this._volume;
    }

    set volume(volume: number) {
        this._volume = volume;
    }
}
