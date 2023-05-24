package com.iiht.training.ngo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.iiht.training.ngo.service.DonarService;
import com.iiht.training.ngo.service.DonationService;

@RestController
@CrossOrigin
public class DonarController {

	@Autowired
	private DonarService donarService;

	@Autowired
	private DonationService donationService;
}
