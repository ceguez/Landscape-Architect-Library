package com.landscapearchlibrary.server.repository;

import java.util.List;
//import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import com.landscapearchlibrary.server.model.Plant;

public interface PlantRepository extends JpaRepository<Plant, Long>{
//	List<Plant> findByPublished(boolean published);
	List<Plant> findByTitle(String name);
}
