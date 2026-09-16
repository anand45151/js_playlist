package org.example.notification;

import org.springframework.stereotype.Component;

@Component
public class EmailService {
    public void sendEmail() {

        System.out.println("Sending email from email class");
    }
}
