package com.random.service;

import java.util.List;
import java.util.Random;

import com.random.Api.ApiRestaurantData;

import org.springframework.stereotype.Service;

@Service
public class ShuffleService {
    public ApiRestaurantData doListShuffle(List<ApiRestaurantData> apiRestaurantDataList) {
        int index = new Random().nextInt(apiRestaurantDataList.size());
        ApiRestaurantData result = apiRestaurantDataList.get(index);
        return result;
    }

}
