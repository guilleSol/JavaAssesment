package com.assesment.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.assesment.project.entities.UserData;
import com.assesment.project.service.UserDataService;

@RestController
//@CrossOrigin(origins = "http://localhost:3000")
public class UserDataController {

	@Autowired
	private UserDataService service;

	public UserDataController() {

	}

	@GetMapping(path = "users/{id}")
	public UserData getUserData(@PathVariable Long id) {
		if (service.getUserDataById(id).isPresent()) {
			return service.getUserDataById(id).get();
		}
		return null;
	}

	@PostMapping(path = "users")
	public void addUserData(@RequestBody UserData user) {
		service.addUserData(user);
	}

}
