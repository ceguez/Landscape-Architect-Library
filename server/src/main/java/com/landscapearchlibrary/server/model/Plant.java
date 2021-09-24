package com.landscapearchlibrary.server.model;

import javax.persistence.*;

@Entity
@Table(name = "plants")
public class Plant {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@Column(name = "title")
	private String title;
	
	@Column(name = "climate")
	private String climate;//this is the key/title that users can search based on. For production do a list of options.
	
	@Column(name = "description")
	private String description;
	
	@Column(name = "published")
	private boolean published;//status: pending or published
	
	//private String[] plantImagesLink; // S3 keys
	
	public Plant() {
		
	}
	
	public Plant(String name, String climate, String description, boolean published) {
		this.title = name;
		this.climate = climate;
		this.description = description;
		this.published = published;
	}
	
	public void getAllPlantInfo() {
		
	}

	public long getId() {
		return id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getClimate() {
		return climate;
	}

	public void setClimate(String climate) {
		this.climate = climate;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public boolean isPublished() {
		return published;
	}

	public void setPublished(boolean published) {
		this.published = published;
	}
	
	@Override
	public String toString() {
		return "Plant [id=" + id + ", name=" + title + ", climate" + climate + ", desc=" + description + ", published=" + published + "]";
	}
	
}
