package com.aalae.brighterflow.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class HomeController {

    @RequestMapping("/home")
    public String home() {
        return "home";  // returns a view name (home.html)
    }
}