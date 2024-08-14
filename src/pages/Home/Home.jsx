import Hero1 from '../../../src/assets/images/hero-1.png'
import Button from '../../components/common/Button'
import PartnerLogo from '../../../src/assets/images/partner logo 1.svg'
import HomeImage2 from '../../../src/assets/images/home image 2.png'
import Carousel from '../../components/specific/carousel'
import Pricing from '../../components/specific/Pricing'
import './Home.css'
import TestimonialCarousel from '../../components/specific/testimonialCarousel'
import Shield from '../../assets/images/Mima-Secure.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGooglePlay} from '@fortawesome/free-brands-svg-icons'; 



const Home = () => {
  return (
    <>
      <section className="hero">
        <div className='hero-set'>
          <div className="left-div">
            <div className="hero-text">
              <h1 className="">
                Simplify Your Business
                Management
              </h1>
              <p>
                Effortlessly track finances, send invoices, and gain valuable insights with MIMA,
                your all-in-one business management solution.
                Transform your workflow and focus on what truly matters.
              </p>
              <div className="button-set">
                <Button
                  variant="fill"
                  text='Create a free account'
                />
                <Button
                  variant='outline'
                  text='Download the app'
                />
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src={Hero1} alt="" />
          </div>
        </div>
        <div className="banner">
          <div className="container">
            <h4>
              1000+ Businesses Trust Mima
            </h4>
            <div className="partner-logo-set">
              <img src={PartnerLogo} alt="" />
              <img src={PartnerLogo} alt="" />
              <img src={PartnerLogo} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="description">
        <div className="container">
          <div className="image">
            <img src={HomeImage2} alt="" />
          </div>
          <div className="text-group">
            <div className="title">
              <span>
                About Us
              </span>
              <h3>
                A Life-Changing Experience with HyperionDev
              </h3>
            </div>
            <p>
              Mima is an all-in-one business management solution designed to simplify and streamline the operations of small and medium-sized enterprises.
              With Mima, business owners can handle invoicing, track income and expenses, manage payroll, analyze performance, and handle tax obligations seamlessly.
              The platform supports multi-currency payments, bill payments, and provides a secure environment for managing business transactions.
              By integrating all these features into one platform, Mima aims to make business management more efficient and effective,
              allowing entrepreneurs to focus on growth and success.
            </p>
            <Button
              variant='fill'
              text='View More'
            />
          </div>
        </div>
      </section>
      <section className="benefit">
        <div className="container">
          <div className="title-area">
            <div className="title">
              <span>
                Our Benefits
              </span>
              <h3>
                Here is how Mima can benefit <br />your Business
              </h3>
            </div>


            <Button
              variant='outline'
              text='Download The App'
            />

          </div>
          <Carousel />
        </div>
      </section>
      <Pricing />
      <section className="testimonial">
        <div className="container">
          <div className="title-area">
            <span>Testimonial</span>
            <h3>Success stories</h3>
          </div>
          <TestimonialCarousel/>
        </div>
      </section>
      <section className="guide">
        <div className="container">
          <img src={Shield} alt="" />

          <div className="text-area">
          <h2>
          Your Business funds 100% Safe and Secured
          </h2>
          <p>
          We make use of bank-grade security with all your monies fully insured by NDIC; also making use of 256bits  SSL security encryption, making sure that your information is comepletely protected from fraud.
          </p>
          <div className="button-set">
            <a href="" className="button">
            <FontAwesomeIcon  icon={faApple}/>
            Get app on Iphone
            </a>
            <a href="" className="button">
            <FontAwesomeIcon  icon={faGooglePlay}/>
            Get app on Android
            </a>
          </div>
<svg xmlns="http://www.w3.org/2000/svg" width="418" height="6" viewBox="0 0 418 6" fill="none">
  <path opacity="0.5" d="M417.972 2.595C417.972 4.029 416.81 5.19098 415.376 5.19098H3.56768C2.13368 5.19098 0.97168 4.029 0.97168 2.595C0.97168 1.162 2.13368 0 3.56768 0H415.377C416.81 0 417.972 1.162 417.972 2.595Z" fill="#A6D7FF"/>
</svg>
          </div>
        </div>
      </section>
     

    </>
  )
}
export default Home