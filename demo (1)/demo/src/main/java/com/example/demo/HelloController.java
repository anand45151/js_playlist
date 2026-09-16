package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @GetMapping("hello")
    public String hello(){


        return "<H1>Hello from anand</H1>";
    }

    @GetMapping("by")
    public String by(){
        return "<H1>Byyy from anand</H1>";

    }
    @GetMapping("Hi")
    public String Hi(){
        return "Hi from anand";

    }

}
