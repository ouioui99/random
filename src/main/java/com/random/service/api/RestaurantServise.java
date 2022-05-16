package com.random.service.api;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.random.Api.ApiRestaurantData;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import io.github.cdimascio.dotenv.Dotenv;

@Service
public class RestaurantServise {

    public List<ApiRestaurantData> getNearRestaurants(String referenceSiteLat, String referenceSiteLng,
            String bugetCode,
            String genreCode)
            throws JsonMappingException, JsonProcessingException {
        Dotenv dotenv = Dotenv.load();
        RestTemplate rest = new RestTemplate();
        ObjectMapper mapper = new ObjectMapper();

        List<ApiRestaurantData> apiRestaurantDataList = new ArrayList<ApiRestaurantData>();

        final String URL_FOUNDATION = "http://webservice.recruit.co.jp/hotpepper/gourmet/v1/";
        final String accessKeyHot = dotenv.get("HOTPEPPER_API_KEY");
        final String lat = referenceSiteLat;
        final String lng = referenceSiteLng;
        final String genre = genreCode;
        final String buget = bugetCode;

        // TODO:rangeもユーザーの任意の値にしたい
        final String range = "2";
        final String urlHot = URL_FOUNDATION + "?key=" + accessKeyHot + "&lat=" + lat + "&lng=" + lng + "&range="
                + range + "&budget=" + buget + "&genre=" + genre
                + "&count=50" + "&format=json";

        // api叩く
        ResponseEntity<String> responseHot = rest.getForEntity(urlHot, String.class);

        String jsonHot = responseHot.getBody();

        JsonNode root = mapper.readTree(jsonHot);

        // jsonをbeanlistに挿入
        for (JsonNode shopDatas : root.get("results").get("shop")) {
            System.out.println(shopDatas.get("genre").get("catch"));
            ApiRestaurantData apiRestaurantData = new ApiRestaurantData();
            apiRestaurantData.setName(shopDatas.get("name").asText());
            apiRestaurantData.setAddress(shopDatas.get("address").asText());
            apiRestaurantData.setUrl(shopDatas.get("urls").get("pc").asText());
            apiRestaurantData.setLat(shopDatas.get("lat").asText());
            apiRestaurantData.setLng(shopDatas.get("lng").asText());
            apiRestaurantData.setCatchPhrase(shopDatas.get("genre").get("catch").asText());
            apiRestaurantData.setGenre(shopDatas.get("genre").get("name").asText());

            apiRestaurantDataList.add(apiRestaurantData);
        }

        return apiRestaurantDataList;

    }

}
