"use client";

import { useState } from "react";
import {
	FiArrowLeftCircle,
	FiArrowRightCircle,
	FiLogIn,
	FiUserPlus,
} from "react-icons/fi";
import { FaGoogle, FaGithub } from "react-icons/fa6";
import styles from "./page.module.css";

export default function LoginPage() {
	const [isRegister, setIsRegister] = useState(false);

	return (
		<main className={styles.page}>
			<section className={styles.videoSide} aria-label="Apresentacao da plataforma">
				<div className={styles.videoCard}>
					<video
						className={styles.video}
						autoPlay
						muted
						loop
						playsInline
						preload="metadata"
						aria-hidden="true"
					>
						<source src="/animation.mp4" type="video/mp4" />
					</video>
				</div>
			</section>

			<section className={styles.formSide} aria-label="Autenticacao">
				<div
					className={`${styles.card} ${isRegister ? styles.active : styles.close}`}
					id="container"
				>
					<div className={styles.loginPanel}>
						<div className={styles.content}>
							<h3>Login</h3>
							<div className={styles.socialIcons} aria-hidden="true">
								<button type="button" className={styles.iconButton}>
									<FaGoogle />
								</button>
								<button type="button" className={styles.iconButton}>
									<FaGithub />
								</button>
							</div>
							<span className={styles.loginWith}>ou entre com seu e-mail</span>
							<form className={styles.form}>
								<input type="email" placeholder="E-mail" autoComplete="email" />
								<input
									type="password"
									placeholder="Senha"
									autoComplete="current-password"
								/>
								<div className={styles.row}>
									<label className={styles.rememberLabel}>
										<input type="checkbox" />
										Lembrar de mim
									</label>
									<button type="button" className={styles.linkButton}>
										Esqueci a senha
									</button>
								</div>
								<button type="submit" className={styles.primaryButton}>
									Entrar
								</button>
							</form>
						</div>
					</div>

					<div className={styles.registerPanel}>
						<div className={styles.content}>
							<h3>Cadastro</h3>
							<div className={styles.socialIcons} aria-hidden="true">
								<button type="button" className={styles.iconButton}>
									<FaGoogle />
								</button>
								<button type="button" className={styles.iconButton}>
									<FaGithub />
								</button>
							</div>
							<span className={styles.loginWith}>ou use seu e-mail para cadastro</span>
							<form className={styles.form}>
								<input type="text" placeholder="Nome" autoComplete="name" />
								<input type="email" placeholder="E-mail" autoComplete="email" />
								<input
									type="password"
									placeholder="Senha"
									autoComplete="new-password"
								/>
								<button type="submit" className={styles.primaryButton}>
									Cadastrar
								</button>
							</form>
						</div>
					</div>

					<div className={`${styles.flipPage} ${styles.front}`}>
						<div className={styles.content}>
							<span className={styles.flipIcon} aria-hidden="true">
								<FiUserPlus />
							</span>
							<h2>Salve, dev!</h2>
							<p>Crie sua conta e comece a gerir seus projetos.</p>
							<button
								type="button"
								id="register"
								className={styles.ghostButton}
								onClick={() => setIsRegister(true)}
							>
								Registrar <FiArrowRightCircle />
							</button>
						</div>
					</div>

					<div className={`${styles.flipPage} ${styles.back}`}>
						<div className={styles.content}>
							<span className={styles.flipIcon} aria-hidden="true">
								<FiLogIn />
							</span>
							<h2>Bem-vindo de volta!</h2>
							<p>Entre com seus dados para acompanhar seus projetos.</p>
							<button
								type="button"
								id="login"
								className={styles.ghostButton}
								onClick={() => setIsRegister(false)}
							>
								<FiArrowLeftCircle /> Log In
							</button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
