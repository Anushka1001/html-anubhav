window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.display = "none";
  }

  const content = document.getElementById("content");
  if (content) {
    content.style.display = "block";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const headerOptions = [
    "About us",
    "Services & Parts",
    "Quality",
    "Collaboration",
    "Contact us",
  ];

  const topSectionContainer = document.getElementById("top-section");
  const headerDiv = document.getElementById("header-div");

  headerDiv.addEventListener('scroll', () => {
    console.log()
  })

  const yoracraftMainLogo = document.getElementById("yoracraft-main-logo");

  const yoracraftLogo = document.createElement("img");
  yoracraftLogo.src = "assets/logos/logo_big.png";
  yoracraftLogo.alt = "yoracraft-logo";
  yoracraftLogo.style.height = "2.5rem";
  yoracraftLogo.style.marginRight = "2rem";

  const yoracraftLogoForHeader = document.createElement("img");
  yoracraftLogoForHeader.src = "assets/logos/logo_big.png";
  yoracraftLogoForHeader.alt = "yoracraft-logo";
  yoracraftLogoForHeader.style.height = "36px";
  yoracraftLogoForHeader.style.marginRight = "2rem";
  yoracraftLogoForHeader.style.cursor = "pointer";

  const hamburgerContainer = document.createElement("div");
  hamburgerContainer.style.position = "absolute";
  hamburgerContainer.style.top = "0";
  hamburgerContainer.style.width = "100%";
  hamburgerContainer.style.display = "none";
  hamburgerContainer.style.justifyContent = "space-between";
  hamburgerContainer.style.alignItems = "center";
  hamburgerContainer.style.padding = "1rem";
  hamburgerContainer.style.backgroundColor = "#242422";
  hamburgerContainer.style.height = "60px";

  const hamburgerMenu = document.createElement("button");
  hamburgerMenu.id = "hamburger-menu";
  hamburgerMenu.innerHTML = "&#9776;";
  hamburgerMenu.style.fontSize = "24px";
  hamburgerMenu.style.background = "none";
  hamburgerMenu.style.border = "none";
  hamburgerMenu.style.cursor = "pointer";
  hamburgerMenu.style.color = "#ffffff";

  hamburgerContainer.appendChild(yoracraftLogo);
  hamburgerContainer.appendChild(hamburgerMenu);

  const ulDesktopElement = document.createElement("ul");
  ulDesktopElement.style.listStyle = "none";
  ulDesktopElement.style.margin = "0";
  ulDesktopElement.style.padding = "0";
  ulDesktopElement.style.display = "flex";
  ulDesktopElement.style.alignItems = "center";
  ulDesktopElement.style.justifyContent = "center";
  ulDesktopElement.style.flexDirection = "row";

  const ulMobileElement = document.createElement("ul");
  ulMobileElement.style.listStyle = "none";
  ulMobileElement.style.margin = "0";
  ulMobileElement.style.padding = "0";
  ulMobileElement.style.display = "flex";
  ulMobileElement.style.alignItems = "center";
  ulMobileElement.style.justifyContent = "center";
  ulMobileElement.style.flexDirection = "column";
  ulMobileElement.style.position = "absolute";
  ulMobileElement.style.backgroundColor = "#242422";
  ulMobileElement.style.width = "100%";
  ulMobileElement.style.top = "59px";
  ulMobileElement.style.left = "0";
  ulMobileElement.style.zIndex = "1000";
  ulMobileElement.style.boxSizing = "border-box";
  ulMobileElement.style.maxHeight = "0";
  ulMobileElement.style.overflow = "hidden";
  ulMobileElement.style.transition = "max-height 0.5s ease";

  headerOptions.forEach((option) => {
    const liElement = document.createElement("li");
    liElement.style.margin = "10px 0";

    const linkElement = document.createElement("a");
    linkElement.href = `#${option.toLowerCase().replace(/\s+/g, "-")}`;
    // console.log(`#${option.toLowerCase().replace(/\s+/g, "-")}`);
    linkElement.textContent = option;
    linkElement.style.textDecoration = "none";
    linkElement.style.fontWeight = "bold";
    console.log(linkElement.textContent)

    // document.getElementById(`#${option.toLowerCase().replace(/\s+/g, "-")}`).style.position='relative'

    // linkElement.addEventListener("click",()=>{
    //   console.log('abhishek')
    // })


    linkElement.addEventListener("click", () => {
      console.log("link clicked");

      const targetId = `#${option.toLowerCase().replace(/\s+/g, "-")}`;
      console.log(targetId, "target id");
      const targetSection = document.querySelector(targetId);
      console.log(targetSection, "target section");
      targetSection.style.paddingTop = "100px !important";

      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        section.style.zIndex = "0";
      });

      targetSection.style.zIndex = "10";
      targetSection.style.top = "100";

      targetSection.scrollIntoView({ behavior: "smooth" });
    });

    linkElement.addEventListener("mouseover", () => {
      linkElement.style.color = "#00b1e6";
    });
    linkElement.addEventListener("mouseout", () => {
      linkElement.style.color = "#ffffff";
    });

    liElement.appendChild(linkElement);

    const desktopLiElement = liElement.cloneNode(true);
    ulDesktopElement.appendChild(desktopLiElement);

    const mobileLiElement = liElement.cloneNode(true);
    ulMobileElement.appendChild(mobileLiElement);
  });



  headerDiv.appendChild(yoracraftLogoForHeader);
  headerDiv.appendChild(ulDesktopElement);

  hamburgerContainer.appendChild(ulMobileElement);

  topSectionContainer.appendChild(hamburgerContainer);

  const toggleMenu = () => {
    const isMenuOpen = ulMobileElement.style.maxHeight !== "0px";
    hamburgerMenu.innerHTML = isMenuOpen ? "&#9776;" : "&#10005;";

    if (isMenuOpen) {
      ulMobileElement.style.maxHeight = "0";
    } else {
      ulMobileElement.style.maxHeight = "217px";
    }
  };

  hamburgerMenu.addEventListener("click", toggleMenu);

  const handleResize = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth < 900) {
      // Mobile view
      hamburgerContainer.style.display = "flex";
      headerDiv.style.display = "none";
      ulMobileElement.style.display = "flex";
      ulMobileElement.style.flexDirection = "column";
      ulMobileElement.style.position = "absolute";
      yoracraftLogo.style.display = "block";
      yoracraftMainLogo.style.display = "none";
      yoracraftLogo.style.paddingLeft = "0";
    } else {
      // Desktop view
      hamburgerContainer.style.display = "none";
      headerDiv.style.display = "flex";
      ulDesktopElement.style.display = "flex";
      ulDesktopElement.style.flexDirection = "row";
      ulDesktopElement.style.position = "static";
      ulDesktopElement.style.maxHeight = "none";
      ulDesktopElement.style.overflow = "visible";
      ulDesktopElement.style.padding = "0";
      yoracraftMainLogo.style.display = "block";
    }
  };

  // document.getElementById("relative-div").style.position = "relative";

  handleResize();
  window.addEventListener("resize", handleResize);

  const topSection = document.querySelector(".top-section");
  const topSectionHeight = topSection.offsetHeight;

  window.addEventListener("scroll", () => {
    const topSectionBottom = topSection.getBoundingClientRect().bottom;
    console.log(topSectionBottom)
    if (topSectionBottom <= 0) {
      document.getElementById("tkdk").style.display = "block";
      headerDiv.classList.add("fixed-header");
    } else {
      document.getElementById("tkdk").style.display = "none";
      headerDiv.classList.remove("fixed-header");
    }
  });

  // Image gallery logic
  const images = [
    { src: "assets/images/business_aviation.jpg", name: "Business Aviation" },
    { src: "assets/images/regional_airlines.jpg", name: "Regional Aviation" },
    {
      src: "assets/images/commercial_airlines.jpg",
      name: "Commercial Airlines",
    },
    { src: "assets/images/helicopter_image.jpg", name: "Helicopters" },
  ];

  const imageGallery = document.getElementById("image-gallery");
  imageGallery.style.display = "grid";
  imageGallery.style.gridTemplateColumns =
    "repeat(auto-fit, minmax(200px, 1fr))";
  imageGallery.style.gap = "20px";

  images.forEach((image) => {
    const imageCard = document.createElement("div");
    imageCard.classList.add("image-card");
    imageCard.style.textAlign = "center";

    const imgElement = document.createElement("img");
    imgElement.src = image.src;
    imgElement.alt = `${image.name} image`;
    imgElement.style.width = "100%";
    imgElement.style.height = "auto";

    const caption = document.createElement("p");
    caption.textContent = image.name;
    caption.classList.add("image-caption");
    caption.style.marginTop = "10px";
    caption.style.fontWeight = "bold";

    imageCard.appendChild(imgElement);
    imageCard.appendChild(caption);

    imageGallery.appendChild(imageCard);
  });

  // PDF download logic
  const downloadPdfBtn = document.getElementById("download-pdf-button");

  if (downloadPdfBtn) {
    downloadPdfBtn.addEventListener("click", () => {
      const pdfUrl = "assets/documents/certificates.pdf";

      const newTab = window.open(pdfUrl, "_blank");
    });
  }

  const imprintContentData = [
    {
      key: "Company name",
      value:
        "Yoracraft GmbH<br/> FN 567483 i<br/> VAT ATU77461104<br/> EORI ATEOS1000130397",
    },
    {
      key: "Street",
      value: "Weidegasse 8",
    },
    {
      key: "Zip / City",
      value: "2443 Stotzing",
    },
    {
      key: "Phone",
      value: "+43 650 5053 29",
    },
    {
      key: "E-mail",
      value: "info@yoracraft.com",
    },
    {
      key: "Homepage",
      value: "www.yoracraft.com",
    },
    {
      key: "Court of jurisdiction",
      value: "Regional Court Eisenstadt",
    },
    {
      key: "Owner",
      value: "Markus Kaltenegger",
    },
    {
      key: "Nature and purpose of the business",
      value: "Parts Trader & Aviation Service",
    },
    {
      key: "Shareholder",
      value: "None",
    },
  ];

  const generateImprintContent = (data) => {


    let contentRows = data
      .map((item) => {
        return `
        <div style="display:flex; justify-content:space-between; padding: 5px 0;">
          <strong class="modal-key">${item.key}:</strong>
        <div style="width:200px;">
          <span style="text-align: left" class="modal-value">${item.value}</span>
          </div>
        </div>
      `;
      })
      .join("");

    return `
      <div style="display:flex; flex-direction:column; height: 100%">
        <h1 style="text-align: center;   color: #00b1e6; letter-spacing: 0.05rem" class="modal-heading">Imprint</h1>
        <div style="overflow: scroll">
        ${contentRows}
        </div>
      </div>
    `;
  };

  const disclaimerContentData = [
    {
      key: "Limitation of liability for internal content",
      value:
        "The content of our website has been compiled with meticulous care and to the best of our knowledge. However, we cannot assume any liability for any pages' up-to-dateness, completeness, or accuracy. According to section 2, para. 7 of the ECG(ECommerce-Gesetz/E-Commerce-Law by Austrian law), we, as service providers, are liable for our own content on these pages in accordance with general laws. However, pursuant to section 2, para. 7 of the ECG, we are not under obligation to monitor external information provided or stored on our website. Once we become aware of a specific law infringement, we will immediately remove the content in question. Any liability concerning this matter can only be assumed from the point in time at which the infringement becomes known to us.",
    },
    {
      key: "Copyright",
      value:
        "The content and works published on this website are governed by the copyright laws of Austria. Any duplication, processing, distribution, or any form of utilization beyond the scope of copyright law shall require the author's or authors' prior written consent. The unauthorized copying/saving of the provided information on this website is not permitted and is punishable.",
    },
  ];

  const generateDisclaimerContent = (data) => {
    let contentData = data
      .map((item) => {
        return `
        <div style="display:flex; flex-direction: column; padding: 0.5rem 0; gap: 0.5rem">
          <strong class="modal-key">${item.key}:</strong>
          <span style="text-align: left" class="modal-value">${item.value}</span>
        </div>
      `;
      })
      .join("");

    return `
      <div style="display:flex; flex-direction:column; height: 100%">
        <h1 style="text-align: center; color: #00b1e6; letter-spacing: 0.05rem" class="modal-heading">Disclaimer</h1>
        <div style="overflow :scroll">
        ${contentData}
        </div>
      </div>
    `;
  };

  const termsConditionsContentData = [
    {
      body: "Material availability is subject to prior sale.",
    },
    {
      body: "No net terms for first-time buyers,",
    },
    {
      body: "Minimum Purchase Order USD 250.00",
    },
    {
      body: "HazMat fee for dangerous goods items is USD 250.00, which will be added to the proforma invoice.",
    },
    {
      body: "Accepted Payments: Wire Transfer only",
    },
    {
      body: "Returns and refunds Policy:",
    },
    {
      body: "A re-stocking and/or cancellation fee of 25% of the total invoice will apply.",
    },
    {
      body: "Non-cancellable/non-returnable items before shipment.",
    },
    {
      body: "No returns without prior RMA authorization.",
    },
    {
      body: "An RMA issued by Yoracraft GmbH must accompany all returns.",
    },
    {
      body: "No returns or refunds after 30 days from the date of invoice date.",
    },
    {
      body: "Returned/canceled items are subject to a 25% re-stocking fee and all shipping charges",
    },
    {
      body: "Warranty: 30 days for parts “tested/inspected only” and 6 months/500 hours for parts SV/OH from the delivery date. MFG Warranty applied to all NE/FN conditions",
    },
    {
      body: "In the case of EXCHANGE, in addition to those mentioned above, the Customer undertakes to return the Core Unit in 30 calendar days (unless stated otherwise on quotation) from the date of delivery of the Exchange Unit. After each period of 30 days, the same Exchange Fee will be applied in addition to all costs incurred to the Exchange Transaction, including full and final costs of the Core's re-certification, evaluation fees, scrap fees, all transportation costs, customs fees, applicable taxes, final shop evaluation charges, insurance fees and any other costs associated, related to the return of an airworthy Core to Yoracraft GmbH in the same condition as supplied, regardless of whether Customer returns the Exchange Unit used or unused, and in addition to the total Outright value charges, according to quotatio",
    },
    {
      body: "The Core Unit must have the same OEM's PN and will be re-certified to the same or higher level of condition as the original Exchange Unit. The Original Unit with the same S/N must be returned with a Non-Use Statement",
    },
  ];

  const generateTermsAndConditionsContent = (data) => {
    let contentData = data
      .map((item) => {
        return `
      <div style="display:flex; flex-direction: column; padding: 0.5rem 0; gap: 0.5rem">
        <span style="text-align: left" class="modal-value">${item.body}</span>
      </div>
    `;
      })
      .join("");

    return `
    <div style="display:flex; flex-direction:column; height: 100%">
      <h1 style="text-align: center; color: #00b1e6; letter-spacing: 0.05rem" class="modal-heading">Terms & Conditions</h1>
      <div style="overflow: scroll">
      ${contentData}
      </div>
    </div>
  `;
  };

  const imprintContent = generateImprintContent(imprintContentData);
  const disclaimerContent = generateDisclaimerContent(disclaimerContentData);
  const termsConditionsContent = generateTermsAndConditionsContent(
    termsConditionsContentData
  );
  const imprintElement = document.getElementById("imprint");
  const disclaimerElement = document.getElementById("disclaimer");
  const termsConditionsElement = document.getElementById("terms-conditions");
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modalContent");
  const closeModal = document.getElementById("closeModal");

  function openModal(content) {
    modalContent.innerHTML = content;
    modal.style.display = "flex";
  }

  function closeModalHandler() {
    modal.style.display = "none";
    modalContent.innerHTML = "";
  }

  if (imprintElement) {
    imprintElement.addEventListener("click", () => {
      openModal(imprintContent);
    });
  }

  if (disclaimerElement) {
    disclaimerElement.addEventListener("click", () => {
      openModal(disclaimerContent);
    });
  }

  if (termsConditionsElement) {
    termsConditionsElement.addEventListener("click", () => {
      openModal(termsConditionsContent);
    });
  }

  closeModal.addEventListener("click", closeModalHandler);

  const linkedinUrl =
    "https://www.linkedin.com/in/markus-kaltenegger-668b3669/";
  const linkedinElement = document.getElementById("shareLinkedIn");

  if (linkedinElement) {
    linkedinElement.addEventListener("click", () => {
      window.open(linkedinUrl, "_blank");
    });
  }

  // Scroll to top button logic
  const scrollToTopBtn = document.getElementById("scroll-to-top");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    if (scrollY > 100) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  yoracraftLogoForHeader.addEventListener("click", scrollToTop);
  scrollToTopBtn.addEventListener("click", scrollToTop);
  scrollToTopBtn.style.display = "none";

  // cookie banner show button

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  }

  function showCookieBanner() {
    const consent = getCookie("cookie_consent");
    const bannerShown = localStorage.getItem("cookie_banner_shown");

    if (!consent && !bannerShown) {
      cookieBanner.style.display = "flex";
    } else {
      cookieBanner.style.display = "none";
    }
  }

  const cookieBanner = document.getElementById("cookie-banner");

  if (!cookieBanner) {
    console.error("Cookie banner not found. Ensure it has the correct ID.");
    return;
  }

  function acceptCookies() {
    document.cookie =
      "cookie_consent=true; max-age=" + 60 * 60 * 24 * 365 + "; path=/"; // Expires in 1 year

    localStorage.setItem("cookie_banner_shown", "accepted_true");

    cookieBanner.style.display = "none";
  }

  function rejectCookies() {
    localStorage.setItem("cookie_banner_shown", "rejected_true");

    cookieBanner.style.display = "none";
  }

  const acceptCookiesButton = document.getElementById("accept-cookies");
  if (acceptCookiesButton) {
    acceptCookiesButton.addEventListener("click", () => {
      acceptCookies();
    });
  } else {
    console.error(
      "Accept Cookies button not found. Ensure it has the correct ID."
    );
  }

  const rejectCookiesButton = document.getElementById("reject-cookies");
  if (rejectCookiesButton) {
    rejectCookiesButton.addEventListener("click", () => {
      rejectCookies();
    });
  } else {
    console.error(
      "Reject Cookies button not found. Ensure it has the correct ID."
    );
  }

  showCookieBanner();
});
