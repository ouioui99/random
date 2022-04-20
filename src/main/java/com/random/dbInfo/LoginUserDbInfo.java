package com.random.dbInfo;

import java.io.Serializable;

import lombok.Data;

@Data
public class LoginUserDbInfo implements Serializable{

    // serialVersionUIDを指定
    private static final long serialVersionUID = 1L;


    int id;
    String name;
}
