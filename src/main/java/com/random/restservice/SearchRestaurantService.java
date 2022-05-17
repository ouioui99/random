package com.random.restservice;

import com.random.Api.ApiRestaurantData;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SearchRestaurantService {
    private String name;
    private String address;
    private String url;
    private String lat;
    private String lng;
    private String catchPhrase;
    private String genre;
    private Integer resultCount;

    public SearchRestaurantService(ApiRestaurantData resultRestrauntData) {
        this.name = resultRestrauntData.getName();
        this.address = resultRestrauntData.getAddress();
        this.url = resultRestrauntData.getUrl();
        this.lat = resultRestrauntData.getLat();
        this.lng = resultRestrauntData.getLng();
        this.catchPhrase = resultRestrauntData.getCatchPhrase();
        this.genre = resultRestrauntData.getGenre();
        this.resultCount = resultRestrauntData.getResultCount();
    }

}
