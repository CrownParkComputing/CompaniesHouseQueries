import Link from 'next/link'
import Image from 'next/image'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Header(){
		return (
		<header>
		   <div className="container-fuild">
				<div className="row d-flex align-items-center">
				<div className="col-6 col-md-6 col-lg-4">
					<div className="logo"><img src="https://impactmetering.com/wp-content/uploads/2023/06/1685742600823_LOGO-12.png" className="w-100"/></div>
				</div>	
				<div className="col-md-1 col-lg-6">
					<nav className="main-menu">
						<ul>
							<li><Link href="/">Home</Link></li>
							<li><Link href="/">About</Link></li>
							<li><Link href="/">Our Projects</Link></li>
							<li><Link href="/">Contact</Link></li>
						</ul>
					</nav>
				</div>
				<div className="col-md-5 col-lg-2">
				    <div className="icon-text-wrap">
						<div className="icon"><FontAwesomeIcon icon={faPhone} className="fas fa-phone"></FontAwesomeIcon></div>
						<div className="text"><div className="mobile">01244 722672</div><div className="label">GET IN TOUCH</div></div>
					</div>
				</div>
				</div>
		   </div>
		</header>
		)
	}