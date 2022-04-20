package com.random.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.random.restservice.SearchStoreService;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RestController
public class ApiController {

    @GetMapping("/search")
    public SearchStoreService searchStrore() {
        return new SearchStoreService();
    }

    @GetMapping(value = "geo/tokyo", produces = MediaType.APPLICATION_JSON_VALUE)
    private JsonNode call() throws Exception {

        RestTemplate rest = new RestTemplate();
        ObjectMapper mapper = new ObjectMapper();

        final String endpoint = "http://api.positionstack.com/v1/forward";
        final String accessKey = "c00ebc54cd7971d849278bf6995006a3";
        final String query = "東京駅";

        final String url = endpoint + "?access_key=" + accessKey + "&query=" + query;

        ResponseEntity<String> response = rest.getForEntity(url, String.class);

        String json = response.getBody();

        JsonNode root = mapper.readTree(json);

        JsonNode data = root.get("data").get(0);

        String latitude = data.get("latitude").asText();

        String longitude = data.get("longitude").asText();

        System.out.println(latitude);
        System.out.println(longitude);

        return data;
    }

}
