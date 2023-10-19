package com.formacionbdi.springboot.app.item.models.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.formacionbdi.springboot.app.item.clientes.ProductoClienteRest;
import com.formacionbdi.springboot.app.item.models.item;

@Service
public class ItemServiceFeign implements ItemService {
	@Autowired
	private ProductoClienteRest clienteFeign;
	
	@Override
	public List<item> findAll() {
		// TODO Auto-generated method stub
		return clienteFeign.listar().stream().map( p -> new item (p, 1)).collect(Collectors.toList());
	}

	@Override
	public item findById(Long id, Integer cantidad) {
		// TODO Auto-generated method stub
		return new item(clienteFeign.detalle(id), cantidad);
	}

}
