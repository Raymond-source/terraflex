// js/config.js
const siteConfig = {
  whatsappNumber: "27812194023",
  phoneNumber: "+27812194023",
  emergencyNumber: "+27664575904",
  email: "info@terraflex.co.za",
  address: "012 Central, 367 Helen Joseph Street, Pretoria CBD, Pretoria, 0002",
  whatsappMessage:
    "Hello Terra Flex, I'd like more information about your packages",
  socialLinks: {
    facebook: "#",
    twitter: "#",
    linkedin: "#",
    instagram: "#",
  },
};

// Generate WhatsApp URL
function getWhatsAppUrl() {
  const encodedMessage = encodeURIComponent(siteConfig.whatsappMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMessage}`;
}

// Generate phone link
function getPhoneLink() {
  return `tel:${siteConfig.phoneNumber}`;
}

// Generate emergency phone link
function getEmergencyPhoneLink() {
  return `tel:${siteConfig.emergencyNumber}`;
}

// Format phone number for display
function formatPhoneNumber(phone) {
  if (phone.length === 11) {
    return phone.replace(/(\d{2})(\d{3})(\d{3})(\d{3})/, "+$1 $2 $3 $4");
  }
  return phone;
}
