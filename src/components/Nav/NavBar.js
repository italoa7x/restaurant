import React from 'react';
import logo from '../../Image/logo2.png';
import { FaShoppingCart } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { Items } from '../styles/StyleNav';
import { useDispatch, useSelector } from 'react-redux';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import firebaseConfig from '../firebase/firebase.config';
import { signedOutUser } from '../../redux/actions';

const NavBar = () => {
	const hist = useHistory();
	const dispatch = useDispatch();
	//firebase initialize
	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig);
	}
	const loginInfo = useSelector((state) => state.userInfo);
	const cartQuantity = useSelector((state) => state.cart);

	const signedOut = () => {
		firebase
			.auth()
			.signOut()
			.then(function (res) {
				dispatch(signedOutUser());
				toast.success('Signed Out Successfully');
				hist.push('/');
			})
			.catch(function (error) {
				console.log(error.message);
			});
	};

	return (
		<Items className="container nav-box">
			<div className="row justify-content-between align-items-center">
				<div className="logo col-md-3">
					<Link to="/">
						<img src={logo} alt="logo" className="img-fluid logo" />
					</Link>
				</div>
				<div className="items col-md-5 ">
					<ul className="nav justify-content-end">
						<li className="shopping-cart">
							<Link to="/cart">
								<FaShoppingCart className="cart" />{' '}
								<span>
									<strong>{cartQuantity.length}</strong>
								</span>
							</Link>
						</li>
						<li>
							{loginInfo.displayName ? (
								<Link onClick={signedOut}>{loginInfo.displayName}</Link>
							) : (
								<Link to="/login">Login</Link>
							)}
						</li>
						<li>
							<Link to="/signup">Signup</Link>
						</li>
					</ul>
				</div>
			</div>
		</Items>
	);
};

export default NavBar;
