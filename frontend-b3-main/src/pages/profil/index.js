import React, {useState, useEffect} from 'react';
import TitlePage from '../../components/TitlePage';
import userService from '../../services/user.service';
import withAuth from '../../HOC/withAuth';
import Button from "../../components/Button";
import Link from 'next/dist/client/link';

const Index = () => {

    const [user, setUser] = useState();
 
    useEffect(() => {
        userService.getMe(localStorage.getItem('token'))
            .then(data => {
                console.log(data);
                setUser(data);
            })
            .catch(err=>console.log(err))
    },[])

    return (
			<div>
				<TitlePage title="FootWear" />
				<div className="text__center">
					<p>Username: {user && user.username}</p>
					<p>Nom: {user && user.firstName}</p>
					<p>Prenom: {user && user.lastName}</p>
					<p>Email: {user && user.email}</p>
					<p>
					<Link href="/login">
						<a className="nav__link">
							<Button title="logout" classes="btn btn__color-white" />
						</a>
					</Link>
					</p>
				</div>
			</div>
		);
}

export default withAuth(Index);
