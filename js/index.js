const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//NAV
let navItems = document.querySelectorAll('nav a');
let navContent=Object.values(siteContent .nav);
for(i=0; i<6; i++){
  navItems[i].textContent=navContent[i];
}

let homeLink = document.createElement('a')
homeLink.textContent='Home';
let marketplaceLink = document.createElement('a')
marketplaceLink.textContent='Marketplace';

let nav=document.querySelector('nav');
nav.prepend(homeLink);
nav.append(marketplaceLink);
navItems = document.querySelectorAll('nav a');
Array.from(navItems).forEach(function(links){
  links.style.color='green';
})

//CTA
let ctaH1 = document.querySelector('h1');
ctaH1.textContent=siteContent["cta"]["h1"];
ctaH1.style.color="purple"; //STRETCH
let ctaIMG = document.getElementById("cta-img");
ctaIMG.src=siteContent["cta"]["img-src"];

let ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent=siteContent["cta"]["button"];

//main-content
let featuresH4=document.querySelector('.top-content > div:nth-child(1) > h4:nth-child(1)')
featuresH4.textContent=siteContent["main-content"]["features-h4"]
let featuresContent=document.querySelector('.top-content > div:nth-child(1) > p:nth-child(2)')
featuresContent.textContent=siteContent["main-content"]["features-content"]

let aboutH4=document.querySelector('.top-content > div:nth-child(2) > h4:nth-child(1)')
aboutH4.textContent=siteContent["main-content"]["about-h4"]
let aboutContent=document.querySelector('.top-content > div:nth-child(2) > p:nth-child(2)')
aboutContent.textContent=siteContent["main-content"]["about-content"]

let middleImgSrc=document.getElementById('middle-img');
middleImgSrc.src=siteContent["main-content"]["middle-img-src"]

let serviceH4=document.querySelector('.bottom-content > div:nth-child(1) > h4:nth-child(1)')
serviceH4.textContent=siteContent["main-content"]["services-h4"]  
let serviceContent=document.querySelector('.bottom-content > div:nth-child(1) > p:nth-child(2)')
serviceContent.textContent=siteContent["main-content"]["services-content"]

let productH4=document.querySelector('.bottom-content > div:nth-child(2) > h4:nth-child(1)')
productH4.textContent=siteContent["main-content"]["product-h4"]
let productContent=document.querySelector('.bottom-content > div:nth-child(2) > p:nth-child(2)')
productContent.textContent=siteContent["main-content"]["product-content"]

let visionH4=document.querySelector('.bottom-content > div:nth-child(3) > h4:nth-child(1)')
visionH4.textContent=siteContent["main-content"]["vision-h4"]
let visionContent=document.querySelector('.bottom-content > div:nth-child(3) > p:nth-child(2)')
visionContent.textContent=siteContent["main-content"]["vision-content"]

//contant us
let contactH4=document.querySelector('.contact > h4:nth-child(1)')
contactH4.textContent=siteContent["contact"]["contact-h4"]
let contactAddress=document.querySelector('.contact > p:nth-child(2)')
contactAddress.textContent=siteContent["contact"]["address"]
let contactPhone=document.querySelector('.contact > p:nth-child(3)')
contactPhone.textContent=siteContent["contact"]["phone"]
let contactEmail=document.querySelector('.contact > p:nth-child(4)')
contactEmail.textContent=siteContent["contact"]["email"]

//footer
let copyright=document.querySelector('.container > footer:nth-child(5) > p:nth-child(1)')
copyright.textContent=siteContent["footer"]["copyright"]