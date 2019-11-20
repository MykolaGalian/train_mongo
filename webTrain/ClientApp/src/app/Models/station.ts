export class Station {
    nameStation: string;
    arrivalTime: Date;
    departureTime: Date;
    constructor(_nameStation: string, _arrivalTime: Date, _departureTime: Date) {
        this.nameStation = _nameStation;
        this.arrivalTime = _arrivalTime;
        this.departureTime = _departureTime;
    }
}
