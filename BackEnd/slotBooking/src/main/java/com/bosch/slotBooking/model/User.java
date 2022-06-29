package com.bosch.slotBooking.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="User")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
	
	@Id
	private String userId;
	
	private String userName;
	private String firstName;
	private String lastName;
	
	
	@Column(nullable = false, length = 64)
    private String password;
	
//	private Long phnNumber;
//	@Column(nullable = false, length = 1000000)
//	private String picName;

}
