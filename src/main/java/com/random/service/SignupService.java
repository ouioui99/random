package com.random.service;

import com.random.domain.SignupInfo;
import com.random.persistence.SignupInfoMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SignupService {

    @Autowired
    private SignupInfoMapper signupInfoMapper;

    public void signup(SignupInfo signupInfo) {
        signupInfoMapper.signup(signupInfo);
    }

}