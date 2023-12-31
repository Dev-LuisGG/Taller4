package com.formacionbdi.springboot.app.item.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.formacionbdi.springboot.app.item.models.item;
import com.formacionbdi.springboot.app.item.models.service.ItemService;

@RestController
public class ItemController {
	@Autowired
	private ItemService itemService;
	
	@GetMapping("/listar")
	public List<item> listar(){
		return itemService.findAll();
	}
	@GetMapping("/var/{id}/cantidad/{cantidad}")
	public item detalle(@PathVariable Long id, @PathVariable Integer cantidad) {
		return itemService.findById(id, cantidad);
	}
}
