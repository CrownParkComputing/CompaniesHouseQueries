import Link from 'next/link'
import Image from 'next/image'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer(){
		return (
			<footer>
				<div className="container-fuild">
					<div className="row">
						<div className="col-lg-4">
							<div className="footer-logo"><img src="https://impactmetering.com/wp-content/uploads/2023/06/1685742600823_LOGO-12.png" className="w-100"/></div>
							
							<div className="footer-info">
							     <div className="address"> <div className="icon"><FontAwesomeIcon icon={faLocationDot} /></div> <div className="text">Annex Building One, Queens House, Queens Rd, Cheshire, Chester CH1 3BB</div></div>
								 <div className="phone"><FontAwesomeIcon icon={faPhone} /> 01244 722672</div>
							</div>
						</div>
						<div className="col-lg-4">
						   <div className="widgets">
							   <h3>Quick Links</h3>
							   <ul>
									<li><Link href="/">Privacy Policy</Link></li>
									<li><Link href="/">Complaints</Link></li>
						        </ul>
						   </div>
						</div>
						<div className="col-lg-4">
							<div className="widgets">
								<h3>Open Hours</h3>
								<ul>
									<li>Mon – Sat: 8 am – 5 pm</li>
									<li>Sunday: CLOSED</li>
						        </ul>
							</div>
						</div>
					</div>
				</div>
				<div className="copyright">© 2024 Impact Metering Ltd. All rights reserved.</div>
			</footer>
		)
	}