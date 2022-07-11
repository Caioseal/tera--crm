import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Row, Col } from 'antd';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, NavLink } from "react-router-dom";

import './Topbar.css';

export function Topbar() {

	let user = localStorage.getItem('user')
	user = JSON.parse(user)

	return (
		<>
			<Navbar key='lg' bg="dark" variant='dark' expand='lg' className="mb-1">
				<Container>
					<Link to="/business">
						<img id='logo-navbar' src={require("./img/logo.png")} alt='' />
					</Link>
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
								<NavLink to='/business' className={({ isActive }) =>
									isActive ? "navLink selected" : "navLink"
								}>Negócios</NavLink>
								<NavLink to='/customer' className={({ isActive }) =>
									isActive ? "navLink selected" : "navLink"
								}>Clientes</NavLink>
								<NavLink to='/product' className={({ isActive }) =>
									isActive ? "navLink selected" : "navLink"
								}>Produtos</NavLink>
								<NavLink to='/report' className={({ isActive }) =>
									isActive ? "navLink selected" : "navLink"
								}>Relatórios</NavLink>
							</Nav>
							<Form className="d-flex">
								<FormControl
									type="search"
									placeholder="Pesquisar"
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
										<p className='userName'><span id='userName'>{user}</span></p>
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
