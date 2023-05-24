package com.iiht.training.ngo.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iiht.training.ngo.dto.DonationRequestDto;
import com.iiht.training.ngo.repository.DonationRequestRepository;
import com.iiht.training.ngo.service.DonationRequestService;

@Service(value = "donationRequestService")
public class DonationRequestServiceImpl implements DonationRequestService {

	@Autowired
	private DonationRequestRepository donationRequestRepository;

	@Override
	public DonationRequestDto createDonationRequest(DonationRequestDto donationRequestDto) {
		return null;
	}

	@Override
	public List<DonationRequestDto> getDonationRequestNotification(Long ngoId) {
		return null;
	}

	@Override
	public List<DonationRequestDto> getDonationRequestByDonarId(Long donarId) {
		return null;
	}

}
