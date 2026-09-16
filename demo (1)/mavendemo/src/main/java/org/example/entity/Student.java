package org.example.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(schema = "Student")
public class Student {
    public Student() {


    }

    public Student(Long studentID, String firstName, String lastName, String email, String fee) {
        this.studentID = studentID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.fee = fee;
    }

    private Long studentID;
    private String firstName;
    private String lastName;
    private String email;
    private String fee;



    public Long getStudentID() {
        return studentID;
    }

    public void setStudentID(Long studentID) {
        this.studentID = studentID;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFee() {
        return fee;
    }

    public void setFee(String fee) {
        this.fee = fee;
    }
}
