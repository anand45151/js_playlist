package org.example;

import org.example.notification.EmailService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
/*
        OrderService orderService = new OrderService();
        orderService.orderSend();
*/
        ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
        EmailService emailService =  context.getBean(EmailService.class);
        emailService.sendEmail();
    }
}