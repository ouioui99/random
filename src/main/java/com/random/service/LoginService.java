package com.random.service;

import com.random.dbInfo.LoginUserDbInfo;
import com.random.domain.LoginInfo;
import com.random.persistence.LoginInfoMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    @Autowired
    private LoginInfoMapper loginInfoMapper;

    public LoginUserDbInfo login(LoginInfo loginInfo) {
        LoginUserDbInfo loginUserDbInfo = loginInfoMapper.login(loginInfo);
        return loginUserDbInfo;
    }
}
