import React, { Component } from 'react';
import './Home.css'


export class Home extends Component {
	render() {
		return (
			<div>
				<section id="banner-rotativo">
					<div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
						<ol className="carousel-indicators">
							<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
							<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
							<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
						</ol>
						<div className="carousel-inner">
							<div className="carousel-item" data-interval="10000">
								<img src={process.env.PUBLIC_URL + '/img/fotohome04.png'} className="d-block img-banner" alt="vigilante fazendo ronda" />
							</div>
							<div className="carousel-item active" data-interval="2000">
								<img src={process.env.PUBLIC_URL + '/img/fotohome02.png'} className="d-block img-banner" alt="escudo do uniforme" />
							</div>
							<div className="carousel-item">
								<img src={process.env.PUBLIC_URL + '/img/fotohome07.png'} className="d-block img-banner" alt="guarda noturno" />
							</div>
						</div>
						<a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
							<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							<span className="sr-only">Previous</span>
						</a>
						<a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
							<span className="carousel-control-next-icon" aria-hidden="true"></span>
							<span className="sr-only">Next</span>
						</a>
					</div>
				</section>

				<section id="destaques">
					<h1>Destaques</h1>
					<div className="card-destaques justify-content-center">
						<div className="card">
							<img src={process.env.PUBLIC_URL + '/img/quadrado4.png'} className="card-img-top" alt="vigilante fazendo honda" />
							<h4>Quem Somos?</h4>
							<div className="card-body">
								<p className="card-text">Uma empresa que visa a segurança pública e se preocupa com o conforto das pessoas,
									visando esse cenário criamos o Seg&Ger.
			</p>
								<a href=" # ">Saiba mais</a>
							</div>
						</div>
						<div className="card">
							<img src={process.env.PUBLIC_URL + '/img/card2.jpg'} className="card-img-top" alt="Anuncio de contratação" />
							<h4>Software mobile</h4>
							<div className="card-body">
								<p className="card-text">A plataforma mobile do Seg&Ger está sendo criada para o seu cliente se sentir mais seguro.</p>
								<a href=" # ">Saiba mais</a>
							</div>
						</div>
						<div className="card">
							<img src={process.env.PUBLIC_URL + '/img/home_seguranca.jpg'} className="card-img-top" alt="Anuncio de contratação" />
							<h4>Para sua empresa</h4>
							<div className="card-body">
								<p className="card-text">A melhor solução para sua empresa disponibilizando maior controle e satisfação ao seu cliente</p>
								<a href=" # ">Saiba mais</a>
							</div>
						</div>
					</div>
				</section>

				<footer>
					<div id="rodapé">
						<div className="footer-rodape">
							<div className="card-rodape" >
								<h1>Conheça Nos</h1>
								<ul>
									<li><a href=" # ">Sobre o software</a></li>
									<li><a href=" # ">Mercado de trabalho</a></li>
									<li><a href=" # ">Perfil profissional</a></li>
									<li><a href=" # ">Vigilantes</a></li>
								</ul>
							</div>
							<div className="card-rodape" >
								<h1>Espaços</h1>
								<ul>
									<li><a href=" # ">Web</a></li>
									<li><a href=" # ">Aplicativo celular</a></li>
									<li><a href=" # ">MAC OS</a></li>
								</ul>
							</div>

							<div className="card-rodape">
								<h1><img src={process.env.PUBLIC_URL + '/img/thunai company.png'} alt="logo2" width=" 350;" /></h1>
								<ul>
									<li><a href=" # ">Av. Ouro Branco Km 4.5</a></li>
									<li><a href=" # ">Adriana Mato- Anápolis/GO</a></li>
									<li><a href=" # ">00000-000</a></li>
								</ul>
								<address><a className="nounderline" href="tel:62000000000">(62) 00000-0000</a></address>
								<div id="icons">
									<img src={process.env.PUBLIC_URL + '/img/icon-instagram.png'} className="icon-footer" alt="Instagram" />
									<img src={process.env.PUBLIC_URL + '/img/icon-facebook.png'} className="icon-footer" alt="Facebook"/>
									<img src={process.env.PUBLIC_URL + '/img/icon-twitter.png'} className="icon-footer" alt="Twitter"/>
								</div>
							</div>
						</div>


					</div>
					<div id="copyright">
						<small> ©Copyright THUNAI COMPANY 2019 - Projeto em desenvolvimento</small>
					</div>
					<script src="public/js/jquery.js"></script>
					<script src="public/bootstrap/js/bootstrap.bundle.min.js"></script>
				</footer>
			</div>
		)
	}
};

export default Home;