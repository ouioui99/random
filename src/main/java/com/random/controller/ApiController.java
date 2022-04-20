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

    @GetMapping(value = "hot/tokyo", produces = MediaType.APPLICATION_JSON_VALUE)
    private JsonNode callHot() throws Exception {

        RestTemplate rest = new RestTemplate();
        ObjectMapper mapper = new ObjectMapper();

        final String endpointHot = "http://webservice.recruit.co.jp/hotpepper/gourmet/v1/";
        final String accessKeyHot = "438ddeef912066d9";
        final String lat = "35.680207";
        final String lng = "139.7699";
        final String range = "2";

        final String urlHot = endpointHot + "?key=" + accessKeyHot + "&lat=" + lat + "&lng=" + lng + "&range=" + range
                + "&count=50" + "&format=json";

        ResponseEntity<String> responseHot = rest.getForEntity(urlHot, String.class);

        String jsonHot = responseHot.getBody();

        JsonNode root = mapper.readTree(jsonHot);

        Map<String, String> shopNameAndAddressMap = new HashMap<String, String>();

        JsonNode shopList = root.get("results").get("shop");
        int shopListSize = shopList.size();

        for (int i = 0; i < shopListSize; i++) {
            shopNameAndAddressMap.put(root.get("results").get("shop").get(i).get("name").asText(),
                    root.get("results").get("shop").get(i).get("address").asText());
        }

        System.out.print(shopNameAndAddressMap);

        return root;
    }
}
