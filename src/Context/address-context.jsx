import { createContext, useContext, useEffect, useReducer } from "react";
import { useAlert } from "react-alert";
import {
	getAddressService,
	addAddressService,
	editAddressService,
	deleteAddressService,
} from "../services/addressServices";
import {
	addressReducer,
	initialState,
	initialUserObj,
} from "../reducer/addressReducer";

const AddressContext = createContext();

const AddressProvider = ({ children }) => {
	const [addressState, dispatchAddress] = useReducer(
		addressReducer,
		initialState
	);

	const token = localStorage.getItem("encodedToken");
	const alert = useAlert();

	useEffect(() => {
		if (token) {
			try {
				(async () => {
					const { data, status } = await getAddressService(token);

					if (status === 200) {
						dispatchAddress({ type: "GET_ADDRESS", payload: data.address });
					}
				})();
			} catch (err) {
				console.error(err);
				console.log("address context");
			}
		}
	}, [token]);

	const submitFormHandler = async (e) => {
		e.preventDefault();

		const addressExists = addressState.addresses.find(
			(address) => address._id === addressState.formData?._id
		);

		if (addressExists) {
			try {
				const { data, status } = await editAddressService(
					token,
					addressState.formData,
					addressExists._id
				);

				if (status === 201) {
					dispatchAddress({ type: "GET_ADDRESS", payload: data.address });
					alert.show("Address updated", { type: "success" });
				}
			} catch (err) {
				console.error(err);
			}
		} else {
			try {
				const { data, status } = await addAddressService(
					token,
					addressState.formData
				);

				if (status === 201) {
					dispatchAddress({ type: "GET_ADDRESS", payload: data.address });
					alert.show("Address added", { type: "success" });
				}
			} catch (err) {
				console.error(err);
			}
		}
	};

	const deleteAddressHandler = async (addressId) => {
		try {
			const { data, status } = await deleteAddressService(token, addressId);

			if (status === 200) {
				dispatchAddress({ type: "GET_ADDRESS", payload: data.address });
				alert.show("Address deleted", { type: "success" });
			}
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<AddressContext.Provider
			value={{
				addressState,
				dispatchAddress,
				submitFormHandler,
				deleteAddressHandler,
				initialState,
				initialUserObj,
			}}
		>
			{children}
		</AddressContext.Provider>
	);
};

const useAddress = () => useContext(AddressContext);

export { AddressProvider, useAddress };
