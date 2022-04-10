package com.random.persistence;

import com.random.domain.SignupInfo;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface SignupInfoMapper {
    public void signup(SignupInfo signupInfo);
}
