package com.random.random.controller;

import com.random.domain.SignupInfo;
import com.random.form.SignupForm;
import com.random.random.restservice.SignupRestService;
import com.random.service.SignupService;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Service
public class UserController {

    @Autowired
    private SignupService signupService;

    @PostMapping("/signup")
    public SignupRestService signup(@RequestBody SignupForm body) {
        SignupInfo signupInfo = new SignupInfo();
        BeanUtils.copyProperties(body, signupInfo);
        System.out.println(signupInfo);
        signupService.signup(signupInfo);
        return new SignupRestService(body.getId(),body.getName());
    }
    
}
