import React, {useState} from 'react';
import Input from '../../components/input';
import userService from "../../services/user.service";
import Button from "../../components/Button";
import { useRouter } from "next/router";
import Link from 'next/dist/client/link';
import Modal from '../../components/Modal';

const Index = () => {
  
  const [user, setUser] = useState();

  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  const submitLogin = (e) => {
    e.preventDefault();
    userService.login(user)
			.then((data) => { 
				if (data.error) {
					setShowModal(true);
				}
				else {
					localStorage.setItem('token', data.jwt);
					router.push('/profil')
				}
      })
      .catch(
		//Dans le cas où on aurait des erreurs de type server j'affiche ma modal
		(err) => {
		  setShowModal(true);
		  console.log(err)
		});
  }

  return (
		<div className="page__login">
		<Modal title="Erreur" isActive={showModal} closeFunction={()=>setShowModal(!showModal)} type="information">
        	<p>Une erreur est survenue, veuillez contacter le service client.</p>
      	</Modal>
			<form className="form" onSubmit={(e) => submitLogin(e)}>
				<Input
					type="email"
					label="Email"
					placeholder="Veuillez saisir votre adresse email"
					name="email"
					id="email"
					required={true}
					classes="form__input"
					handleChange={(e) => setUser({ ...user, identifier: e.target.value })}
				/>
				<Input
					type="password"
					label="Password"
					placeholder="Veuillez saisir votre mot de passe"
					name="password"
					id="password"
					required={true}
					classes="form__input"
					handleChange={(e) => setUser({ ...user, password: e.target.value })}
				/>
				<Button title="envoyer" classes="btn btn__color-black" type="submit" />
			</form>
			<div>
			<Link href="/register">
			<p className='text__center'>Vous n'avez pas encore de compte créer en un juste <a className="login__link">ici</a></p>
            </Link>
			</div>
		</div>
	);
}

export default Index;
