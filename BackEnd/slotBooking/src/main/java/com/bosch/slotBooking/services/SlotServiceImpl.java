package com.bosch.slotBooking.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bosch.slotBooking.model.Slot;
import com.bosch.slotBooking.repository.SlotRepository;

@Service
public class SlotServiceImpl implements SlotService {
	
	@Autowired
	private SlotRepository repository;
	
	@Override
	public List<Slot> getSlots() {
		// TODO Auto-generated method stub
		return this.repository.findAll();
	}

	@Override
	public Slot addSlot(Slot slot) {
		// TODO Auto-generated method stub
		return this.repository.save(slot);
	}

	@Override
	public Slot updateSlot(Slot slot) {
		// TODO Auto-generated method stub
		return this.repository.save(slot);
	}

	@Override
	public void deleteSlot(int slotId) {
		// TODO Auto-generated method stub
		this.repository.deleteById(slotId);
		
	}
	
	
}
