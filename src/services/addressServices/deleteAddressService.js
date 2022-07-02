import axios from "axios";

const deleteAddressService = (token, addressId) => {
	return axios.delete(`/api/user/address/${addressId}`, {
		headers: { authorization: token },
	});
};

export { deleteAddressService };
