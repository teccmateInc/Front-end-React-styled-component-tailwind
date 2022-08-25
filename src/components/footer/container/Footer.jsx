import React from 'react';
import Footer from '..';
import EaseLogo from './../../../assets/images/EaseLogo.svg';
import Icon from '../../icons';

export function FooterContainer() {

  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
           <Footer.Column>
           <Footer.Title><img src={EaseLogo}  width="80" height="auto" alt="Ease logo"/></Footer.Title>
           <Footer.Link><Icon className="fa-solid fa-location-arrow" />
            Nigeria</Footer.Link>
           <Footer.Link><Icon className="fa-solid fa-comment" />English</Footer.Link>
         </Footer.Column>

         <Footer.Column>
           <Footer.Title>Why Ease</Footer.Title>
           <Footer.Link href="#">Why Choose Ease</Footer.Link>
           <Footer.Link href="#">Success Rate</Footer.Link>
           <Footer.Link href="#">Pricing</Footer.Link>
           <Footer.Link href="#">For Small Bussiness</Footer.Link>
           <Footer.Link href="#">For Entreprenuers</Footer.Link>
           <Footer.Link href="#">For Corporate Bussiness</Footer.Link>
           <Footer.Link href="#">For International Bussiness</Footer.Link>
           <Footer.Link href="#">For Fintechs</Footer.Link>
           <Footer.Link href="#">For Schools</Footer.Link>
         </Footer.Column>

         <Footer.Column>
           <Footer.Title>Developers</Footer.Title>
           <Footer.Link href="#">Documentation</Footer.Link>
           <Footer.Link href="#">Refrences</Footer.Link>
           <Footer.Link href="#">Api Status</Footer.Link>
           <Footer.Link href="#">Integration</Footer.Link>
         </Footer.Column>

         <Footer.Column>
           <Footer.Title>Company</Footer.Title>
           <Footer.Link href="#">About</Footer.Link>
           <Footer.Link href="#">Careers</Footer.Link>
           <Footer.Link href="#">Privacy</Footer.Link>
           <Footer.Link href="#">Community</Footer.Link>
           <Footer.Link href="#">Crypto</Footer.Link>
           <Footer.Link href="#">NFTs</Footer.Link>
           <Footer.Link href="#">Partners</Footer.Link>
           <Footer.Link href="#">Blog</Footer.Link>
           <Footer.Link href="#">Brand</Footer.Link>
           <Footer.Link href="#">Retail</Footer.Link>
           <Footer.Link href="#">License</Footer.Link>
           <Footer.Link href="#">Merchant</Footer.Link>
           <Footer.Link href="#">Statement</Footer.Link>
           <Footer.Link href="#">Support</Footer.Link>
           <Footer.Link href="#">Legal</Footer.Link>
           <Footer.Link href="#">Press</Footer.Link>
           <Footer.Link href="#">Learn</Footer.Link>
           <Footer.Link href="#">Accessibility</Footer.Link>
           <Footer.Link href="#">Manage Cookies</Footer.Link>
         </Footer.Column>
      </Footer.Row>
      <Footer.Horizontal />
      <Footer.Group>
        <Footer.Social>
           <Footer.Text>&copy; 2022 Ease, Inc.</Footer.Text>
        </Footer.Social>
          <Footer.Social>
            <Footer.Link href="#">Twitter</Footer.Link>
            <Footer.Link href="#">Instagram</Footer.Link>
            <Footer.Link href="#">Linkedln</Footer.Link>
            <Footer.Link href="#">TikTok</Footer.Link>
            <Footer.Link href="#">YouTube</Footer.Link>
          </Footer.Social>
      </Footer.Group>
      </Footer.Wrapper>
    </Footer>
  )
}