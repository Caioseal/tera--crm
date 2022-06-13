import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Row, Col } from 'antd';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";

import './Topbar.css';

export function Topbar() {
	return (
		<>
			<Navbar key='lg' bg="dark" variant='dark' expand='lg' className="mb-3">
				<Container>
					<Navbar.Brand href="#"><img id='logo-navbar' src={require("./img/logo.png")} alt='' /></Navbar.Brand>
					<Navbar.Toggle aria-controls={`offcanvasNavbar-expand-$'lg'`} />
					<Navbar.Offcanvas
						id={`offcanvasNavbar-expand-$'lg'`}
						aria-labelledby={`offcanvasNavbarLabel-expand-$'lg'`}
						placement="end"
					>
						<Offcanvas.Header closeButton>
							<Offcanvas.Title id={`offcanvasNavbarLabel-expand-$'lg'`}>
								TERA CRM
							</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Nav className="justify-content-end flex-grow-1 pe-3 navLink">
								<Link to='/business' className='navLink'>Negócios</Link>
								<Link to='/customer' className='navLink'>Clientes</Link>
								<Link to='/product' className='navLink'>Produtos</Link>
								<Link to='/report' className='navLink'>Relatórios</Link>
							</Nav>
							<Form className="d-flex">
								<FormControl
									type="search"
									placeholder="Search"
									className="me-2 search-input"
									aria-label="Search"
								/>
							</Form>
							<Nav.Link href="#action5" className='userNameLogo'>
								<Row gutter={16} align="middle">
									<Col span={6} >
										<Col span={6}><AccountCircleIcon id='logo' className='col-8' /></Col>
									</Col>
									<Col span={18}>
										<p className='userName'>John Doe</p>
									</Col>
								</Row>
							</Nav.Link>
						</Offcanvas.Body>

					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</>
	)
}
