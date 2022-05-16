package com.random.restservice;

import com.random.Api.GoogleGeocodeingData;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GeocodeingService {
    private String lat;
    private String lng;

    public GeocodeingService(GoogleGeocodeingData googleGeocodeingData) {
        this.lat = googleGeocodeingData.getLat();
        this.lng = googleGeocodeingData.getLng();
    }

}
