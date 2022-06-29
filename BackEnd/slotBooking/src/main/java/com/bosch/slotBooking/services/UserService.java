package com.bosch.slotBooking.services;

import java.util.List;

import com.bosch.slotBooking.model.User;

public interface UserService {
	
	public List<User> getUsers();
	
	public User addUser(User user);
	
	public User findByUserId(String userId);
	
	public User updateUser(User user);
	
	public void deleteByUserId(String userId);

}
