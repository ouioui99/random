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

    public SearchRestaurantService(ApiRestaurantData resultRestrauntData) {
        this.name = resultRestrauntData.getName();
        this.address = resultRestrauntData.getAddress();
        this.url = resultRestrauntData.getUrl();
    }

}