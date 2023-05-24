package com.iiht.training.ngo.dto;

import java.time.LocalDate;
import java.util.Objects;

public class DonationRequestDto {

	private Long requestId;
	private Double amount;
	private Long donarId;
	private Long ngoId;
	private String requestStatus;
	private LocalDate donationEndDate;

	public Long getRequestId() {
		return requestId;
	}

	public void setRequestId(Long requestId) {
		this.requestId = requestId;
	}

	public Double getAmount() {
		return amount;
	}

	public void setAmount(Double amount) {
		this.amount = amount;
	}

	public Long getDonarId() {
		return donarId;
	}

	public void setDonarId(Long donarId) {
		this.donarId = donarId;
	}

	public Long getNgoId() {
		return ngoId;
	}

	public void setNgoId(Long ngoId) {
		this.ngoId = ngoId;
	}

	public LocalDate getDonationEndDate() {
		return donationEndDate;
	}

	public void setDonationEndDate(LocalDate donationEndDate) {
		this.donationEndDate = donationEndDate;
	}

	public String getRequestStatus() {
		return requestStatus;
	}

	public void setRequestStatus(String requestStatus) {
		this.requestStatus = requestStatus;
	}

	@Override
	public int hashCode() {
		return Objects.hash(amount, donarId, donationEndDate, ngoId, requestId, requestStatus);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		DonationRequestDto other = (DonationRequestDto) obj;
		return Objects.equals(amount, other.amount) && Objects.equals(donarId, other.donarId)
				&& Objects.equals(donationEndDate, other.donationEndDate) && Objects.equals(ngoId, other.ngoId)
				&& Objects.equals(requestId, other.requestId) && Objects.equals(requestStatus, other.requestStatus);
	}

	
	

}
