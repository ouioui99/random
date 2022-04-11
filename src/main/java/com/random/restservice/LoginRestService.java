package com.random.restservice;

import com.random.dbInfo.LoginUserDbInfo;

public class LoginRestService {
    private String name;
    private int id;

    //jacksonをしようしてjsonに変換している？
    public LoginRestService(LoginUserDbInfo loginUserDbInfo) {
        this.id = loginUserDbInfo.getId();
        this.name = loginUserDbInfo.getName();
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }
    
}
