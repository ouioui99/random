package com.random.controller;

import java.util.List;
import java.util.Map;

import com.random.Api.ApiRestaurantData;
import com.random.Api.GoogleGeocodeingData;
import com.random.form.GetGeocodeForm;
import com.random.form.SearchForm;
import com.random.restservice.GeocodeingService;
import com.random.restservice.SearchRestaurantService;
import com.random.service.ShuffleService;
import com.random.service.api.GeocodeService;
import com.random.service.api.GoogleGeocodeService;
import com.random.service.api.RestaurantServise;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RestController
public class ApiController {

    @PostMapping(value = "/geocode")
    public GeocodeingService getGeoCodeingService(@RequestBody GetGeocodeForm body) throws Exception {
        GoogleGeocodeService googleGeocodeService = new GoogleGeocodeService();

        GoogleGeocodeingData LatitudeAndLogtitude = googleGeocodeService
                .getLatitudeAndLogtitude(body.getAddress());

        return new GeocodeingService(LatitudeAndLogtitude);
    }

    @PostMapping(value = "/restraunt")
    public SearchRestaurantService getRandamRestraintData(@RequestBody SearchForm body) throws Exception {

        RestaurantServise restaurantServise = new RestaurantServise();
        ShuffleService shuffleService = new ShuffleService();

        // Map<String, String> LatitudeAndLogtitude =
        // geocodeService.getLatitudeAndLogtitude(body.getReferenceSite());
        List<ApiRestaurantData> nearRestaurantsList = restaurantServise.getNearRestaurants(body.getReferenceSiteLat(),
                body.getReferenceSiteLng(), body.getBugetCode(), body.getGenreCode());
        ApiRestaurantData resultRestrauntData = shuffleService.getRandamRestrauntData(nearRestaurantsList);
        resultRestrauntData.setResultCount(nearRestaurantsList.size());
        return new SearchRestaurantService(resultRestrauntData);
    }
}
