package com.bosch.slotBooking.services;

import java.util.List;

import com.bosch.slotBooking.model.Slot;

public interface SlotService {
	
	public List<Slot> getSlots();
	
	public Slot addSlot(Slot slot);
	
	public Slot updateSlot(Slot slot);
	
	public void deleteSlot(int slotId);

}
