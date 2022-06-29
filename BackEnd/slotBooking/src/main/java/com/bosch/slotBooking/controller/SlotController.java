package com.bosch.slotBooking.controller;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Locale;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bosch.slotBooking.model.Slot;
import com.bosch.slotBooking.services.SlotService;

@RestController
@RequestMapping("/slot")
@CrossOrigin(origins = "http://localhost:4200")
public class SlotController {
	
	@Autowired
	private SlotService service;
	
	@GetMapping("/getSlots")
	public List<Slot> getSlots(){
	
		return this.service.getSlots();
	}
	
	@PostMapping("/addSlot")
	public Slot addSlot(@RequestBody Slot slot) {
//		DateTimeFormatter inputFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", Locale.ENGLISH);
//		DateTimeFormatter outputFormatter = DateTimeFormatter.ofPattern("dd-MM-yyy", Locale.ENGLISH);
//		LocalDate date = LocalDate.parse(slotDate, inputFormatter);
//		String formattedDate = outputFormatter.format(date);
//		slot.setSlotDate(formattedDate);
		return this.service.addSlot(slot);
	}
	
	@PutMapping("/updateSlot")
	public Slot updateSlot(@RequestBody Slot slot) {
		return this.service.updateSlot(slot);
	}
	
	@DeleteMapping("/deleteSlot/{slotId}")
	public void deleteSlot(@PathVariable String slotId) {
		this.service.deleteSlot(Integer.parseInt(slotId));
	}

}
