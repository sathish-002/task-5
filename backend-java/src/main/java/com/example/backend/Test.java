package com.example.backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Test {
//home directry
    @GetMapping("/")
    public  String initial(){
        return "Api is working";
    }
//logn users page
    @GetMapping("/login")
    public String login(){
        return  "this is the login page";
    }

//    product page
    @GetMapping("/products")
    public String product(){
        return "this the product page";
    }

//    cart page
    @GetMapping("/cart")
    public  String cart(){
        return "cart page";
    }
}
