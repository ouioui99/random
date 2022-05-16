package com.random.service.api;

import java.net.URLEncoder;
import java.util.HashMap;
import java.util.Map;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.random.Api.GoogleGeocodeingData;

import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import io.github.cdimascio.dotenv.Dotenv;

public class GoogleGeocodeService {

    public GoogleGeocodeingData getLatitudeAndLogtitude(String address) throws Exception {

        Dotenv dotenv = Dotenv.load();
        RestTemplate rest = new RestTemplate();
        ObjectMapper mapper = new ObjectMapper();

        GoogleGeocodeingData googleGeocodeingData = new GoogleGeocodeingData();

        // final String URL_FOUNDATION =
        // "https://maps.googleapis.com/maps/api/geocode/json?";
        // final String ACCESS_KEY = dotenv.get("GOOGLE_MAP_API");
        // final String ADDRESS = address;

        final String url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address
                + "&language=ja&key=" + dotenv.get("GOOGLE_MAP_API");

        ResponseEntity<String> response = rest.getForEntity(url, String.class);

        String json = response.getBody();

        JsonNode root = mapper.readTree(json);

        System.out.println(root.get("results").get(0).get("geometry").get("location"));

        JsonNode data = root.get("results").get(0).get("geometry").get("location");

        googleGeocodeingData.setLat(data.get("lat").asText());
        googleGeocodeingData.setLng(data.get("lng").asText());

        return googleGeocodeingData;

    }
}
