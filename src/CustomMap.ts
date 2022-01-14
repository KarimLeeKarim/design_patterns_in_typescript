export interface Mappable {
    location: {
        lat: number,
        lng: number,
    }
    markerCont():string,
    color: string,
}

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(mapDivId: string){
        this.googleMap = new google.maps.Map(document.getElementById(mapDivId),{
            zoom: 1,
            center: {
                lat: 0,
                lng: 0,
            }
        });        
    }

    addMarker(mappable: Mappable): void {
        const marker =new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng,
            },

        })

        marker.addListener('click', ()=>{
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerCont(),
            })

            infoWindow.open(this.googleMap, marker)
        })
    }
}