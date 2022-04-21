package com.random.controller;

import java.util.List;
import java.util.Map;

import com.random.Api.ApiRestaurantData;
import com.random.restservice.SearchRestaurantService;
import com.random.service.ShuffleService;
import com.random.service.api.GeocodeService;
import com.random.service.api.RestaurantServise;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RestController
public class ApiController {

    @GetMapping(value = "geo/tokyo", produces = MediaType.APPLICATION_JSON_VALUE)
    public SearchRestaurantService getRandamRestraintData() throws Exception {

        GeocodeService geocodeService = new GeocodeService();
        RestaurantServise restaurantServise = new RestaurantServise();
        ShuffleService shuffleService = new ShuffleService();

        Map<String, String> LatitudeAndLogtitude = geocodeService.getLatitudeAndLogtitude("横浜駅");
        List<ApiRestaurantData> nearRestaurantsList = restaurantServise.getNearRestaurants(LatitudeAndLogtitude);
        ApiRestaurantData resultRestrauntData = shuffleService.getRandamRestrauntData(nearRestaurantsList);
        return new SearchRestaurantService(resultRestrauntData);
    }
}
