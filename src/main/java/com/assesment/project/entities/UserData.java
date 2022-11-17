package com.assesment.project.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "UserData")
public class UserData {
	
	@Id
	@GeneratedValue
	private Long id;
	private String fName;
	private String lName;
	private String phoneNumber;
	private String email;

	public UserData() {

	}

	public UserData(Long id, String fName, String lName, String phoneNumber, String email) {
		super();
		this.id = id;
		this.fName = fName;
		this.lName = lName;
		this.phoneNumber = phoneNumber;
		this.email = email;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getfName() {
		return fName;
	}

	public void setfName(String fName) {
		this.fName = fName;
	}

	public String getlName() {
		return lName;
	}

	public void setlName(String lName) {
		this.lName = lName;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "UserData [id=" + id + ", fName=" + fName + ", lName=" + lName + ", phoneNumber=" + phoneNumber
				+ ", email=" + email + "]";
	}
}
