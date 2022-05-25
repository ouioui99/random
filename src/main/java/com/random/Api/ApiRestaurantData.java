package com.random.Api;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ApiRestaurantData {
    private String name;
    private String address;
    private String url;
    private String lat;
    private String lng;
    private String catchPhrase;
    private String genre;
    private Integer resultCount;
    private String restrauntImage;
}
