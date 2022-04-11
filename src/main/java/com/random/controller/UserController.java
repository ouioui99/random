package com.random.controller;

import com.random.dbInfo.LoginUserDbInfo;
import com.random.domain.LoginInfo;
import com.random.domain.SignupInfo;
import com.random.form.LoginForm;
import com.random.form.SignupForm;
import com.random.restservice.LoginRestService;
import com.random.restservice.SignupRestService;
import com.random.service.LoginService;
import com.random.service.SignupService;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Service
public class UserController {

    @Autowired
    private SignupService signupService;

    @Autowired
    private LoginService loginService;

    @PostMapping("/signup")
    public SignupRestService signup(@RequestBody SignupForm body) {
        SignupInfo signupInfo = new SignupInfo();
        BeanUtils.copyProperties(body, signupInfo);
        signupService.signup(signupInfo);
        return new SignupRestService(body.getId(),body.getName());
    }
    
    @PostMapping("/login")
    public LoginRestService login(@RequestBody LoginForm body) {
        LoginInfo loginInfo = new LoginInfo();
        BeanUtils.copyProperties(body, loginInfo);
        LoginUserDbInfo loginUserDbInfo = loginService.login(loginInfo);
        return new LoginRestService(loginUserDbInfo);
    }
}
