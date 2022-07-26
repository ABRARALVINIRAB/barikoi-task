import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder"
mapboxgl.accessToken = 'pk.eyJ1IjoicHJvZ3JhbW1pbmdoZXJvIiwiYSI6ImNrdXc3OG04MzFsbHgzM255ZnU0NDRtbmsifQ.sEGTkRu5uz5PBIoho1An0w';

const GeoCoder = () => {
    
    
    useEffect(()=>{
        
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [90.389099, 23.791599],
            zoom: 13
            });
             
            
            map.addControl(
            new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
            })
            );
    },[])
    return (
        <div>
            <div id="map">
                
                
            </div>
        </div>
    );
};

export default GeoCoder;