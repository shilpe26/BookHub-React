import axios from "axios";

const addAddressService = (token, formData) => {
	return axios.post(
		"/api/user/address",
		{ address: formData },
		{ headers: { authorization: token } }
	);
};

export { addAddressService };
