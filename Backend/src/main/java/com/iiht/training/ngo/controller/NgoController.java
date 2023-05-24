package com.iiht.training.ngo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.iiht.training.ngo.service.DonarService;
import com.iiht.training.ngo.service.DonationRequestService;
import com.iiht.training.ngo.service.NgoService;

@RestController
@RequestMapping("/ngos")
@CrossOrigin
public class NgoController {

	@Autowired
	private NgoService ngoService;

	@Autowired
	private DonationRequestService donationRequestService;

	@Autowired
	private DonarService donarService;

}
