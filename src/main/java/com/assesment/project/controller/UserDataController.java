package com.assesment.project.controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.assesment.project.entities.UserData;
import com.assesment.project.service.UserDataService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserDataController {

	@Autowired
	private UserDataService service;
	
	@GetMapping(path = "users")
	public List<UserData> getUserDatas() {
		return service.getUserDatas();
	}
	
	@GetMapping(path = "users/{id}")
	public UserData getUserData(@PathVariable Long id) {
		if (service.getUserDataById(id).isPresent()) {
			return service.getUserDataById(id).get();
		}
		return null;
	}

	@PostMapping(path = "users")
	public ResponseEntity<UserData> addUserData(@RequestBody UserData user) {
		UserData newUser = service.addUserData(user);
		return ResponseEntity.created(URI.create("http://localhost:8080/users/" + newUser.getId())).build();
	}
	
	@DeleteMapping(path = "users/{id}")
	public ResponseEntity<String> deleteUserData(@PathVariable Long id) {
		Optional<UserData> user = service.getUserDataById(id);
		if(user.isPresent()) return ResponseEntity.ok("Deleted");
		return ResponseEntity.badRequest().body("User does not exist");
	}
}
