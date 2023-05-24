package com.iiht.training.ngo.entity;

public class DonationEntity {
	private Long donationId;
	private Long donarId;
	private Long ngoId;
	private String donationType;
	private Double amount;
	private String donationDate;

	public Long getDonationId() {
		return donationId;
	}

	public void setDonationId(Long donationId) {
		this.donationId = donationId;
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

	public String getDonationType() {
		return donationType;
	}

	public void setDonationType(String donationType) {
		this.donationType = donationType;
	}

	public Double getAmount() {
		return amount;
	}

	public void setAmount(Double amount) {
		this.amount = amount;
	}

	public String getDonationDate() {
		return donationDate;
	}

	public void setDonationDate(String donationDate) {
		this.donationDate = donationDate;
	}

	@Override
	public String toString() {
		return "DonationEntity [donationId=" + donationId + ", donarId=" + donarId + ", ngoId=" + ngoId
				+ ", donationType=" + donationType + ", amount=" + amount + ", donationDate=" + donationDate + "]";
	}
}
