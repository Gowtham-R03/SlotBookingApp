package com.bosch.slotBooking.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bosch.slotBooking.model.User;


@Repository
public interface UserRepository extends JpaRepository<User, String> {
		
	public User findByUserId(String userId);
}
