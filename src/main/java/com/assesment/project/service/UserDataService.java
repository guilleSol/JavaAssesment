package com.assesment.project.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.assesment.project.entities.UserData;
import com.assesment.project.repo.UserDataRepo;

@Service
public class UserDataService {

	@Autowired
	UserDataRepo repo;
	
	public List<UserData> getUserDatas()
	{
		return repo.findAll();
	}

	public Optional<UserData> getUserDataById(Long id) {
		return repo.findById(id);
	}

	public UserData addUserData(UserData user) {
		return repo.save(user);
	}
	
	public void deleteUserData(UserData user) {
		repo.delete(user);
	}

}
