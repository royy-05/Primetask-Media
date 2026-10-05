import emailjs from '@emailjs/browser';

/**
 * Send 60-Day Strategic Sprint Application or Direct Message via EmailJS
 * 
 * Setup instructions:
 * 1. Create free account at https://www.emailjs.com/
 * 2. Add an Email Service (e.g. Gmail: service_xxx)
 * 3. Create an Email Template (e.g. template_xxx)
 * 4. Obtain Public Key from Account Settings (e.g. user_xxx / xxx)
 * 5. Add to .env or Vercel Environment Variables:
 *    VITE_EMAILJS_SERVICE_ID=your_service_id
 *    VITE_EMAILJS_TEMPLATE_ID=your_template_id
 *    VITE_EMAILJS_PUBLIC_KEY=your_public_key
 */

export const sendContactApplication = async (formData) => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const templateParams = {
    to_email: 'info@primetaskmedia.in',
    name: formData.brandName || 'Founder',
    from_name: formData.brandName || 'Founder',
    from_email: formData.workEmail || formData.email || '',
    email: formData.workEmail || formData.email || '',
    reply_to: formData.workEmail || formData.email || '',
    brand_name: formData.brandName || '',
    location: formData.location || '',
    category: formData.businessCategory === 'Other' ? formData.otherCategory : formData.businessCategory,
    instagram_website: formData.instagramOrWebsite || 'Not provided',
    footfall_source: formData.footfallSource === 'Other' ? formData.otherFootfall : formData.footfallSource,
    hidden_leak: formData.hiddenLeak === 'Other' ? formData.otherLeak : formData.hiddenLeak,
    recall_score: formData.distinctivenessScore ? `${formData.distinctivenessScore}/10` : 'N/A',
    visual_assets: formData.hasVisualAssets || 'N/A',
    anamorphic_slot: formData.anamorphicCircuitInterest === 'Other' ? formData.otherCircuit : formData.anamorphicCircuitInterest,
    timeline: formData.timeline || 'Immediate',
    whatsapp: formData.whatsappNumber || 'Not provided',
    phone: formData.whatsappNumber || 'Not provided',
    time: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    submission_time: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    message: `
60-Day Strategic Sprint Application:
• Brand Name: ${formData.brandName}
• Founder Email: ${formData.workEmail || formData.email}
• WhatsApp Number: ${formData.whatsappNumber || 'Not provided'}
• Location: ${formData.location}
• Category: ${formData.businessCategory === 'Other' ? formData.otherCategory : formData.businessCategory}
• Instagram / Website: ${formData.instagramOrWebsite || 'None'}
• Primary Footfall Driver: ${formData.footfallSource === 'Other' ? formData.otherFootfall : formData.footfallSource}
• Biggest Growth Bottleneck / Leak: ${formData.hiddenLeak === 'Other' ? formData.otherLeak : formData.hiddenLeak}
• Distinctiveness / Recall Score: ${formData.distinctivenessScore}/10
• Timeline for Sprint: ${formData.timeline}
    `.trim()
  };

  // If EmailJS credentials are provided, send via API
  if (serviceId && templateId && publicKey) {
    try {
      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      return { success: true, response };
    } catch (error) {
      console.error('EmailJS Send Error:', error);
      throw error;
    }
  } else {
    // Graceful fallback for local development or prior to setting up keys
    console.warn(
      'EmailJS credentials not yet configured. Form data captured locally:',
      templateParams,
      '\nTo activate live email dispatch, add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY.'
    );
    return { success: true, simulated: true };
  }
};
