import { TypesEnum } from './container-types.model';
import { GeoLocation } from './geo-location.model';

export class ContainerBaseComponent {
    constructor(public type: TypesEnum,
        public geoLocation: GeoLocation,
        public capacity: number,
        public img: string) { }
}
