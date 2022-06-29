package com.bosch.slotBooking.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="Slot")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Slot {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int slotId;
	
	private String slotDate;
	private String slotTime;
	private String slotUser;
	private String userId;

}
