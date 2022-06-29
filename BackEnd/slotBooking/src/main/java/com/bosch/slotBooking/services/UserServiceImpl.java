package com.bosch.slotBooking.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bosch.slotBooking.model.User;
import com.bosch.slotBooking.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository repository;
	
	@Override
	public List<User> getUsers() {
		// TODO Auto-generated method stub
		return this.repository.findAll();
	}

	@Override
	public User addUser(User user) {
		// TODO Auto-generated method stub
		return this.repository.save(user);
	}

	@Override
	public User findByUserId(String userId) {
		// TODO Auto-generated method stub
		return this.repository.findByUserId(userId);
	}

	@Override
	public User updateUser(User user) {
		// TODO Auto-generated method stub
		return this.repository.save(user);
	}

	@Override
	public void deleteByUserId(String userId) {
		// TODO Auto-generated method stub
		this.repository.deleteById(userId);
		
	}

}
