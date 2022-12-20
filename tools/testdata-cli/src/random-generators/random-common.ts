export function generateRandomDecimalInRangeFormatted(min: number, max: number, places: number): string {
    let value:number = (Math.random() * (max - min + 1)) + min;
    return Number.parseFloat(value.toString()).toFixed(places);
}