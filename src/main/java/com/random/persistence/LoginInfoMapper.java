package com.random.persistence;

import com.random.dbInfo.LoginUserDbInfo;
import com.random.domain.LoginInfo;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface LoginInfoMapper {
    public LoginUserDbInfo login (LoginInfo loginInfo);
}
