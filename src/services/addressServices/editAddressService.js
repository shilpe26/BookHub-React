import axios from "axios";

const editAddressService = (token, formData, addressId) => {
	return axios.post(
		`/api/user/address/${addressId}`,
		{ address: formData },
		{ headers: { authorization: token } }
	);
};

export { editAddressService };
