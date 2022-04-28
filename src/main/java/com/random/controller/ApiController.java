package com.random.controller;

import java.util.List;
import java.util.Map;

import com.random.Api.ApiRestaurantData;
import com.random.form.SearchForm;
import com.random.restservice.SearchRestaurantService;
import com.random.service.ShuffleService;
import com.random.service.api.GeocodeService;
import com.random.service.api.RestaurantServise;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RestController
public class ApiController {

    @PostMapping(value = "/restraunt")
    public SearchRestaurantService getRandamRestraintData(@RequestBody SearchForm body) throws Exception {

        GeocodeService geocodeService = new GeocodeService();
        RestaurantServise restaurantServise = new RestaurantServise();
        ShuffleService shuffleService = new ShuffleService();

        Map<String, String> LatitudeAndLogtitude = geocodeService.getLatitudeAndLogtitude(body.getReferenceSite());
        List<ApiRestaurantData> nearRestaurantsList = restaurantServise.getNearRestaurants(LatitudeAndLogtitude,
                body.getBugetCode(), body.getGenreCode());
        ApiRestaurantData resultRestrauntData = shuffleService.getRandamRestrauntData(nearRestaurantsList);
        return new SearchRestaurantService(resultRestrauntData);
    }
}
