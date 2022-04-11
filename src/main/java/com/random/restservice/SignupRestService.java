package com.random.restservice;

public class SignupRestService {
    private String name;
    private int id;

    //jacksonをしようしてjsonに変換している？
    public SignupRestService(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }


}
