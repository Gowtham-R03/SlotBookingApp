package com.bosch.slotBooking.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bosch.slotBooking.model.User;
import com.bosch.slotBooking.services.UserService;


@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	
	@Autowired
	private UserService service;
	
	
	@GetMapping("/get")
	public List<User> getUsers(){
		return this.service.getUsers();
	}
	
	@PostMapping("/addUser")
	public User addUser(@RequestBody User user) {
		return this.service.addUser(user);
	}
	
	@GetMapping("/getUser/{userId}")
	public User findByUserId(@PathVariable String userId){
		return service.findByUserId(userId);
	}
	
	@PutMapping("/updateUser")
	public User updateUser(@RequestBody User user) {
		return this.service.updateUser(user);
	}
	
	@DeleteMapping("/deleteUser/{userId}")
	public void deleteByUserId(@PathVariable String userId) {
		this.service.deleteByUserId(userId);
	}
	
	

}
