package com.foodnet.fds.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Food {

	@Id
	@GeneratedValue()
	public String foodId;
	public String name;
	public String origin;
	public Double price;
	public String stock; 
	
	
}
