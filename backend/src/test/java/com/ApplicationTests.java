package com.controller;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.context.WebApplicationContext;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TaskControllerTest {

    @Autowired
    private WebApplicationContext wac;
    private MockMvc mvc;
    private MultiValueMap<String, String> paramsMap;
    private RequestBuilder request;


    /**
     * 测试 query 接口
     * */
    @Test
    public void taskListTest() throws  Exception{
        mvc.perform(MockMvcRequestBuilders.get("/task/query"))
                .andExpect(MockMvcResultMatchers.status().isOk()) //andExpect
                .andDo(MockMvcResultHandlers.print()) //andDo
                .andExpect(jsonPath("$.status").value("success"))
                .andReturn();//andReturn
	}
	
	/**
     * 测试 add 接口
     * */
    @Test
    public void addTaskTest() throws  Exception{

        request = MockMvcRequestBuilders.post("/task/add")
                .contentType(MediaType.APPLICATION_FORM_URLENCODED_VALUE)
                .params(paramsMap);
        mvc.perform(request)
                .andExpect(status().isOk())
                .andDo(MockMvcResultHandlers.print())
                .andExpect(jsonPath("$.status").value("success"))
                .andReturn(); //andReturn
    }

	/**
     * 测试 delete 接口
     * */
    @Test
    public void deleteTaskTest() throws  Exception {
        request = MockMvcRequestBuilders.delete("/task/del")
                .contentType(MediaType.APPLICATION_FORM_URLENCODED_VALUE)
                .params(paramsMap);
        mvc.perform(request)
                .andExpect(status().isOk())
                .andDo(MockMvcResultHandlers.print())
                .andExpect(jsonPath("$.status").value("success"))
                .andReturn(); //andReturn
	}
	
	/**
     * 测试 update 接口
     * */
    @Test
    public void updateTaskTest() throws  Exception{

        request = MockMvcRequestBuilders.put("/task/update")
                .contentType(MediaType.APPLICATION_FORM_URLENCODED_VALUE)
                .params(paramsMap);
        mvc.perform(request)
                .andExpect(status().isOk())
                .andDo(MockMvcResultHandlers.print())
                .andExpect(jsonPath("$.status").value("success"))
                .andReturn(); //andReturn
	}
	
	    /**
     * 测试 IndexController
     * */
    @Test
    public void testIndexController() throws Exception {
        // 测试UserController
        taskListTest();  // 查
        addTaskTest();  // 增
        taskListTest();  // 查
        deleteTaskTest(); // 删
        updateTaskTest(); // 改
    }

}
