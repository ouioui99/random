package com.random.service.api;

import java.util.HashMap;
import java.util.Map;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import io.github.cdimascio.dotenv.Dotenv;

public class GoogleGeocodeService {

    public Map<String, String> getLatitudeAndLogtitude(String address) throws Exception {

        Dotenv dotenv = Dotenv.load();
        RestTemplate rest = new RestTemplate();
        ObjectMapper mapper = new ObjectMapper();

        Map<String, String> geocodeMap = new HashMap<String, String>();

        // final String URL_FOUNDATION =
        // "https://maps.googleapis.com/maps/api/geocode/json?";
        // final String ACCESS_KEY = dotenv.get("GOOGLE_MAP_API");
        // final String ADDRESS = address;

        final String url = "https://maps.googleapis.com/maps/api/geocode/json?address=根岸駅&language=ja&key=AIzaSyAnekpcxzuR9sRwF1pYfmf9NVBWaD5v4Uk";

        ResponseEntity<String> response = rest.getForEntity(url, String.class);

        String json = response.getBody();

        JsonNode root = mapper.readTree(json);

        System.out.println(root.get("results").get(0).get("geometry").get("location"));

        JsonNode data = root.get("results").get(0).get("geometry").get("location");

        String latitude = data.get("lat").asText();

        String longitude = data.get("lng").asText();

        geocodeMap.put("lat", latitude);
        geocodeMap.put("lng", longitude);

        return geocodeMap;

    }
}
