import React from 'react';

const StepOne = ({ formState, handleChange, industriesData, setFormState }) => {
	return (
		<>
			<p className="add-coach-form-step-title">STEP 1</p>
			<p className="add-coach-form-sub-title">Profile</p>
			<p className="add-coach-form-description">
				Please tell us about your career so far and your accomplishments.
			</p>
			<p className="add-coach-form-row-6">Company</p>
			<input
				className="add-coach-form-row-7"
				type="text"
				name="company"
				placeholder="e.g Google, Facebook..."
				value={formState.company}
				onChange={(e)=>handleChange(e, setFormState, formState)}
			/>
			<p className="add-coach-form-row-6">Position</p>
			<input
				className="add-coach-form-row-7"
				type="text"
				name="position"
				placeholder="e.g UX Designer, Software Engineer..."
				value={formState.position}
				onChange={(e)=>handleChange(e, setFormState, formState)}
			/>
			<p className="add-coach-form-row-6">Industry</p>
			<select
				name="industryName"
				value={formState.industryName}
				onChange={(e)=>handleChange(e, setFormState, formState)}
				>
				{industriesData &&
					industriesData.industries.map(industries => {
						return (
							<option value={industries.name} key={industries.name}>
								{industries.name}
							</option>
						);
					})}
			</select>
			<p className="add-coach-form-row-6">Description</p>
			<textarea
				className="add-coach-form-row-7"
				type="text"
				name="description"
				placeholder="eg. I am a software developer at Google with 12 years of experience under my belt..."
				value={formState.description}
				onChange={(e)=>handleChange(e, setFormState, formState)}
			/>
			<p className="add-coach-form-row-6">Keywords</p>
			<input
				className="add-coach-form-row-7"
				type="text"
				name="tagString"
				placeholder="e.g Java, C++, Figma..."
				value={formState.tagString}
				onChange={(e)=>handleChange(e, setFormState, formState)}
			/>

			<hr className="add-coach-form-hr-1" />
		</>
	);
};

export default StepOne;
