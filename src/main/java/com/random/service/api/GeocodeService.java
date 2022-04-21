package com.random.service.api;

import java.util.HashMap;
import java.util.Map;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import io.github.cdimascio.dotenv.Dotenv;

public class GeocodeService {

    public Map<String, String> getLatitudeAndLogtitude(String location) throws Exception {

        Dotenv dotenv = Dotenv.load();
        RestTemplate rest = new RestTemplate();
        ObjectMapper mapper = new ObjectMapper();

        Map<String, String> geocodeMap = new HashMap<String, String>();

        final String URL_FOUNDATION = "http://api.positionstack.com/v1/forward";
        final String accessKey = dotenv.get("GEOCODE_API_KEY");
        final String query = location;

        final String url = URL_FOUNDATION + "?access_key=" + accessKey + "&query=" + query;

        ResponseEntity<String> response = rest.getForEntity(url, String.class);

        String json = response.getBody();

        JsonNode root = mapper.readTree(json);

        JsonNode data = root.get("data").get(0);

        String latitude = data.get("latitude").asText();

        String longitude = data.get("longitude").asText();

        geocodeMap.put("lat", latitude);
        geocodeMap.put("lng", longitude);

        return geocodeMap;

    }
}
