package com.iiht.training.ngo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iiht.training.ngo.dto.NgoDto;
import com.iiht.training.ngo.repository.NgoRepository;
import com.iiht.training.ngo.service.NgoService;

@Service
public class NgoServiceImpl implements NgoService {

	@Autowired
	private NgoRepository ngoRepository;

	@Override
	public NgoDto registerNgo(NgoDto ngoDto) {
		return null;
	}

	@Override
	public NgoDto updateNgo(NgoDto ngoDto) {
		return null;
	}

	@Override
	public Boolean deleteNgo(Long ngoId) {
		return null;
	}

	@Override
	public NgoDto getNgoById(Long ngoId) {
		return null;
	}

	@Override
	public List<NgoDto> getAllNgos() {
		return null;
	}

}
