import React from "react";
import { useTask } from "../../Context/address-context";
import "./addressList.css";

function AddressList({ setShowForm, setIsEditing, setSelectAddress }) {
	const { addressState, addressDispatch } = useTask();
	const { tasks } = addressState;
	return (
		<div className="task-container w-4/5">
			<div className="task-list-header flex items-center justify-between p-6">
				<span className="text-xmd ml-8">Add Address</span>
				<button onClick={() => setShowForm((val) => !val)}>
					<i className="cursor fa-solid fa-circle-plus"></i>
				</button>
			</div>

			<div className="task-list px-8 py-4">
				{tasks.map((task) => (
					<label key={task.id} className="task-item cursor">
						<input
							onClick={() => setSelectAddress(task)}
							type="radio"
							name="address-box"
							aria-label="input-for-address"
							className="cursor"
						/>
						<div className="ml-8">
							<h3>
								<span className="text-md">{task.name}</span>
							</h3>
							<h3>
								<span className="text-md">{task.street} </span>
							</h3>
							<h3>
								<span className="text-md">{task.city} - </span>
								<span className="text-md">{task.zipcode}</span>
							</h3>
							<h3>
								<span className="text-md">{task.state} , </span>
								<span className="text-md">{task.country}</span>
							</h3>
							<h3>
								<span className="text-md">{task.mobile}</span>
							</h3>
						</div>
						<div className="task-item-btns">
							<button
								onClick={() => {
									setIsEditing((prevValue) => ({
										...prevValue,
										value: true,
										data: task,
									}));
									setShowForm((val) => !val);
								}}
							>
								<i className="p-2 cursor fa-solid fa-pen-to-square"></i>
							</button>
							<button
								onClick={() =>
									addressDispatch({ type: "DELETE-TASK", payload: task.id })
								}
							>
								<i className="p-2 cursor fa-solid fa-trash-can"></i>
							</button>
						</div>
					</label>
				))}{" "}
			</div>
		</div>
	);
}

export { AddressList };
