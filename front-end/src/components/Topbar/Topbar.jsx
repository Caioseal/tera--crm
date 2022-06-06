import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Row, Col } from 'antd';

import './Topbar.css';

export function Topbar() {
	return (
		<Navbar bg="dark" expand="lg" variant='dark' className='navbar'>
			<Container>
				<Navbar.Brand href="#"><img id='logo-navbar' src={require("./img/logo.png")} /></Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: '100px' }}
						navbarScroll
					>
						<Nav.Link href="#action1">Negócios</Nav.Link>
						<Nav.Link href="#action2">Clientes</Nav.Link>
						<Nav.Link href="#action3">Produtos</Nav.Link>
						<Nav.Link href="#action4">Relatórios</Nav.Link>
					</Nav>
					<Form className="d-flex">
						<FormControl
							type="search"
							placeholder="Buscar"
							className="me-2"
							aria-label="Search"
						/>
					</Form>
					<Nav.Link href="#action5" className='userNameLogo'>
						<Row gutter={16} align="middle">
							<Col span={6}><AccountCircleIcon id='logo' className='col-8' /></Col>
							<Col span={18}><p className='userName'>John Doe</p></Col>
						</Row>
					</Nav.Link>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

