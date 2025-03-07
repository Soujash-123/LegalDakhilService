import { config } from "../config/config";
export const openWhatsApp = () => {
    const phoneNumber = config.whatsappNumber;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Mobile-specific WhatsApp link
      window.location.href = `whatsapp://send?phone=${phoneNumber}`;
    } else {
      // Web WhatsApp link
      window.open(`https://wa.me/${phoneNumber}`, '_blank');
    }
  }