import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'

import Layout from '../components/layout'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


export default function CompanyDetail() {
    return(
         <>
            <h1>Please Goto search.</h1>
         </>
    )
}


CompanyDetail.getLayout = function getLayout(page) {
	return (
		<Layout>
			{page}
		</Layout>
	)
}