package org.example.notification;

public interface NotificationService {

    public default void sendNotification(){
        System.out.println("Sending notification...");
    }


    public default void sendService() {
        System.out.println("Sending notification...");
    }

}
