import { React, useEffect, useState } from "react";
import { useAddTask } from "../../services/addressServices/useAddTask";
import { useEditTask } from "../../services/addressServices/useEditTask";
import "./addressModal.css";
import { useTask } from "../../Context/address-context";

const dummyAddress = {
	name: "Shilpe Saxena",
	street: "35, Preetam Nagar",
	city: "Prayagraj",
	state: "UP",
	zipcode: "211001",
	country: "India",
	mobile: "9140915569",
};

function AddressModal({ setShowForm, isEditing, setIsEditing }) {
	const { addressDispatch } = useTask();
	const [error, setError] = useState({
		value: false,
		msg: "",
	});
	const [formData, setFormData] = useState({
		name: "",
		street: "",
		city: "",
		zipcode: "",
		state: "",
		country: "",
		mobile: "",
	});
	const { addTask } = useAddTask();
	const { editTask } = useEditTask();

	useEffect(() => {
		setFormData((val) => ({
			...val,
			name: isEditing.data.name,
			street: isEditing.data.street,
			city: isEditing.data.city,
			zipcode: isEditing.data.zipcode,
			state: isEditing.data.state,
			country: isEditing.data.country,
			mobile: isEditing.data.mobile,
		}));
	}, [isEditing]);

	function addTaskHandler(e) {
		e.preventDefault();
		if (formData.name.trim().length < 3) {
			setError((err) => ({
				...err,
				value: true,
				msg: "name must be atleast 3 characters long !",
			}));
		} else if (formData.street.trim().length < 10) {
			setError((err) => ({
				...err,
				value: true,
				msg: "street must be atleast 10 characters long !",
			}));
		} else if (formData.city.trim().length < 1) {
			setError((err) => ({
				...err,
				value: true,
				msg: "Please Enter city !",
			}));
		} else if (
			formData.zipcode.trim().length > 0 &&
			!/^([1-9]{1}[0-9]{3}|[1-9]{1}[0-9]{5})$/.test
		) {
			setError((err) => ({
				...err,
				value: true,
				msg: "Invalid Mobile Number !",
			}));
		} else if (
			formData.mobile.trim().length > 0 &&
			!/^[1-9]{1}[0-9]{9}$/.test
		) {
			setError((err) => ({
				...err,
				value: true,
				msg: "Invalid Zipcode !",
			}));
		} else {
			if (isEditing.value) {
				editTask({ ...formData, id: isEditing.data.id }, setIsEditing);
			} else {
				addTask({ ...formData });
			}
			setFormData((val) => ({
				...val,
				name: "",
				street: "",
				city: "",
				zipcode: "",
				state: "",
				country: "",
				mobile: "",
			}));
			setShowForm((val) => !val);
		}
	}

	return (
		<div className="modal-form-container">
			<div className="form-modal p-8 rounded">
				<form onSubmit={(e) => addTaskHandler(e)} className="flex flex-col">
					<input
						className="add-input"
						type="text"
						required
						placeholder="Add name"
						value={formData.name}
						onChange={(e) =>
							setFormData((val) => ({ ...val, name: e.target.value }))
						}
						onFocus={() =>
							setError((err) => ({ ...err, value: false, msg: "" }))
						}
					/>
					<input
						type="text"
						required
						className="add-input"
						placeholder="Add street"
						value={formData.street}
						onChange={(e) =>
							setFormData((val) => ({ ...val, street: e.target.value }))
						}
						onFocus={() =>
							setError((err) => ({ ...err, value: false, msg: "" }))
						}
					/>
					<input
						className="add-input"
						type="text"
						required
						placeholder="Add city"
						value={formData.city}
						onChange={(e) =>
							setFormData((val) => ({ ...val, city: e.target.value }))
						}
						onFocus={() =>
							setError((err) => ({ ...err, value: false, msg: "" }))
						}
					/>
					<input
						className="add-input"
						type="number"
						required
						maxLength="6"
						placeholder="PIN code 6 digit (0-9)"
						value={formData.zipcode}
						onChange={(e) =>
							setFormData((val) => ({ ...val, zipcode: e.target.value }))
						}
						onFocus={() =>
							setError((err) => ({ ...err, value: false, msg: "" }))
						}
					/>
					<select
						className="add-input"
						type="text"
						required
						placeholder="Add State"
						value={formData.state}
						onChange={(e) =>
							setFormData((val) => ({ ...val, state: e.target.value }))
						}
						onFocus={() =>
							setError((err) => ({ ...err, value: false, msg: "" }))
						}
					>
						<option className="select-option" value="select">
							Add State
						</option>
						<option value="Andhra Pradesh">Andhra Pradesh</option>
						<option value="Andaman and Nicobar Islands">
							Andaman and Nicobar Islands
						</option>
						<option value="Arunachal Pradesh">Arunachal Pradesh</option>
						<option value="Assam">Assam</option>
						<option value="Bihar">Bihar</option>
						<option value="Chandigarh">Chandigarh</option>
						<option value="Chhattisgarh">Chhattisgarh</option>
						<option value="Dadar and Nagar Haveli">
							Dadar and Nagar Haveli
						</option>
						<option value="Daman and Diu">Daman and Diu</option>
						<option value="Delhi">Delhi</option>
						<option value="Lakshadweep">Lakshadweep</option>
						<option value="Puducherry">Puducherry</option>
						<option value="Goa">Goa</option>
						<option value="Gujarat">Gujarat</option>
						<option value="Haryana">Haryana</option>
						<option value="Himachal Pradesh">Himachal Pradesh</option>
						<option value="Jammu and Kashmir">Jammu and Kashmir</option>
						<option value="Jharkhand">Jharkhand</option>
						<option value="Karnataka">Karnataka</option>
						<option value="Kerala">Kerala</option>
						<option value="Madhya Pradesh">Madhya Pradesh</option>
						<option value="Maharashtra">Maharashtra</option>
						<option value="Manipur">Manipur</option>
						<option value="Meghalaya">Meghalaya</option>
						<option value="Mizoram">Mizoram</option>
						<option value="Nagaland">Nagaland</option>
						<option value="Odisha">Odisha</option>
						<option value="Punjab">Punjab</option>
						<option value="Rajasthan">Rajasthan</option>
						<option value="Sikkim">Sikkim</option>
						<option value="Tamil Nadu">Tamil Nadu</option>
						<option value="Telangana">Telangana</option>
						<option value="Tripura">Tripura</option>
						<option value="Uttar Pradesh">Uttar Pradesh</option>
						<option value="Uttarakhand">Uttarakhand</option>
						<option value="West Bengal">West Bengal</option>
					</select>

					<input
						className="add-input"
						type="text"
						required
						placeholder="Add country"
						value={formData.country}
						onChange={(e) =>
							setFormData((val) => ({ ...val, country: e.target.value }))
						}
						onFocus={() =>
							setError((err) => ({ ...err, value: false, msg: "" }))
						}
					/>
					<input
						className="add-input"
						type="number"
						maxLength="10"
						required
						placeholder="Mobile number (10-digit without prefixes)"
						value={formData.mobile}
						onChange={(e) =>
							setFormData((val) => ({ ...val, mobile: e.target.value }))
						}
						onFocus={() =>
							setError((err) => ({ ...err, value: false, msg: "" }))
						}
					/>
					{error.value && <p className="text-base">{error.msg}</p>}
					<button className="add-btn self-end cursor">
						{isEditing.value ? "Update" : "Add"}
					</button>
					<div>
						<button
							className="btn dummy-btn"
							type="button"
							onClick={() => {
								addressDispatch({
									type: "SET_DUMMY_ADDR",
									payload: dummyAddress,
								});
								setShowForm((val) => !val);
							}}
						>
							Fill with Dummy values
						</button>
					</div>
				</form>
				<button onClick={() => setShowForm((val) => !val)}>
					<i className="text-3xl cursor fas fa-times-circle"></i>
				</button>
			</div>
		</div>
	);
}

export { AddressModal };
