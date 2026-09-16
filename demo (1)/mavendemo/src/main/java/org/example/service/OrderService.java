package org.example.service;


import org.example.notification.EmailService;

public class OrderService {

    EmailService notification = new EmailService();

    public void orderSend() {
        System.out.println("Sending order");
        notification.sendEmail();
    }
}
