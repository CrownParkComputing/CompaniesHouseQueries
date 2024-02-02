import Head from 'next/head'
import axios from 'axios'
import Modal from 'react-modal';
import Layout from '../components/layout'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import React, { useState } from 'react'

export default function Company() {

	const [isLoading, setIsLoading] = useState(false);
	const [isResult, setIsResult] = useState(true);
	const [modalIsOpen, setIsOpen] = React.useState(false);

	const [totalData, setTotalData] = useState("");
	const [company, setCompanyinfo] = useState([]);
	const apiKey = 'd8c2f88f-a2f3-4bcc-b07a-1fe0b675c616';
	const [companyData, setCompanyData] = useState({});

	async function onSubmit(event) {
		event.preventDefault();

		setIsLoading(true); // Set loading to true when the request starts
		const data = new FormData(event.target);
		let svalue = data.get('s');
		let url = 'https://corsproxy.io/?' + encodeURIComponent("https://api.company-information.service.gov.uk/search/companies?q=" + encodeURIComponent(svalue));
		axios.get(url, { headers: { "Authorization": `${apiKey}` } })
			.then((response) => {
				var response = response.data;
				console.log(response);
				setCompanyinfo(response.items);
				setTotalData(response.total_results);
				setIsLoading(false);
				setIsResult(false);
			},
				(error) => {
					var status = error.response.status
				}
			);
	}

	const viewCompany = async (id) => {

		console.log('company ID' + id);

		try {
			//https://api.company-information.service.gov.uk/company/
			let url = 'https://corsproxy.io/?' + encodeURIComponent("https://api.company-information.service.gov.uk/company/" + id);


			let { data } = await axios.get(url, { headers: { "Authorization": `${apiKey}` } });

			console.log(data);

			setCompanyData(data);

			setIsOpen(true);
		}

		catch (error) {
			console.error('Error:', error);
		}
	}

	return (
		<>
			<Head>
				<title>Company | Impact Metering Ltd</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="company-list">
				<div className="container">
					<div className="box">
						<form onSubmit={onSubmit}>
							<input type="text" name="s" placeholder="Enter company number or name" required />
							<button type="submit"><FontAwesomeIcon icon={faSearch} /> </button>
						</form>
						{isLoading ?
							<div className="loader">
								<div className="gooey">
									<span className="dot"></span>
									<div className="dots">
										<span></span>
										<span></span>
										<span></span>
									</div>
								</div>
							</div>
							:
							<div className="result-wrap">
								{isResult ?
									<div className="no-result ">
										<div className="value">No Result Found</div>
										<div className="label">Please enter valid value get result.</div>
									</div>
									:
									<div className="result">
										<div className="head">Company Founds({totalData})</div>
										{company.map((item, index) => {
											let link = `company/${item.company_number}`;
											return (
												<div key={index} className="single-company">
													<div className="left">
														<div className="name">{item.title}</div>
														<div className="companynumber">{item.company_number} <span className="dash">|</span> <span className="companystatus">{item.company_status}</span></div>
														<div className="content">{item.address_snippet}</div>
													</div>
													<div className="right">
														<div className="view-more">
															<button onClick={() => viewCompany(item.company_number)}>View Information</button>
														</div>
													</div>
												</div>
											);
										})}


									</div>
								}
							</div>
						}
					</div>
				</div>
			</div>

			<div id="modal-root"></div>

			<Modal
				isOpen={modalIsOpen}
				contentLabel="Example Modal"
				ariaHideApp={false}
			>
				<div className='modal-header'>

					<h2>{companyData.company_name} : {companyData.company_number} </h2>

					<button
						className='close-modal'
						onClick={() => setIsOpen(false)}>close</button>

				</div>

				<div>Company data here. Data is held by companyData variable. Please update to showcase whatever data you would like to</div>
			</Modal>
		</>
	)
}

Company.getLayout = function getLayout(page) {
	return (
		<Layout>
			{page}
		</Layout>
	)
}