import React from 'react'
import './About.css';
const About = () => {
  return (
    <div>
<section className="light">
	<div className="container py-2">
		<div className="h1 text-center text-dark" id="pageHeaderTitle">About our Dental Clinic</div>
		<article className="postcard light green">
				<img className="postcard__img" src="images/homebg1.jpg" alt="clinic" />

			<div className="postcard__text t-dark">
				<h1 className="postcard__title green">Shreeji Multispeciality</h1>
				<div className="postcard__subtitle small">
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
			</div>
		</article>
	</div>
</section>
    </div>
  )
}

export default About