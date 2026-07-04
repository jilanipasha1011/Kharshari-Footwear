/* ============================================================
   KHARSHARI FOOTWEAR — ENQUIRY JS
   Form validation & WhatsApp deep link
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── ENQUIRY MODAL ──────────────────────────────────────── */
  const enquiryModal = document.getElementById('enquiryModal');
  const enquiryForm = document.getElementById('enquiryForm');

  // Close modal
  document.querySelectorAll('[data-close-enquiry]').forEach(el => {
    el.addEventListener('click', closeEnquiryModal);
  });

  enquiryModal?.addEventListener('click', e => {
    if (e.target === enquiryModal) closeEnquiryModal();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeEnquiryModal();
  });

  function closeEnquiryModal() {
    if (enquiryModal) {
      enquiryModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  /* ─── ENQUIRY FORM SUBMIT ────────────────────────────────── */
  enquiryForm?.addEventListener('submit', handleEnquirySubmit);

  // Also handle standalone contact page form
  document.getElementById('contactEnquiryForm')?.addEventListener('submit', handleEnquirySubmit);

  function handleEnquirySubmit(e) {
    e.preventDefault();

    const form = e.target;
    const name = form.querySelector('[name="customerName"]')?.value?.trim();
    const mobile = form.querySelector('[name="mobile"]')?.value?.trim();
    const product = form.querySelector('[name="productName"]')?.value?.trim();
    const size = form.querySelector('[name="size"]')?.value?.trim();
    const message = form.querySelector('[name="message"]')?.value?.trim();

    // Validate
    if (!name || !mobile) {
      showToast('Naam aur Mobile number zaroori hain!', 'error');
      return;
    }

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      showToast('Valid 10-digit mobile number daalein', 'error');
      return;
    }

    // Build WhatsApp message
    const waMsg = buildWhatsAppMessage({ name, mobile, product, size, message });
    const waUrl = `https://wa.me/919876543210?text=${encodeURIComponent(waMsg)}`;

    // Show success
    const successEl = form.closest('.enquiry-form')?.querySelector('.form-success') ||
                      document.getElementById('formSuccess');
    if (successEl) {
      form.style.display = 'none';
      successEl.style.display = 'block';
    }

    showToast('Enquiry bhej diya! WhatsApp khul raha hai... 💬', 'success', 4000);

    // Open WhatsApp
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 800);

    // Reset after 4s
    setTimeout(() => {
      if (successEl) {
        successEl.style.display = 'none';
        form.style.display = '';
      }
      form.reset();
      closeEnquiryModal();
    }, 4000);
  }

  function buildWhatsAppMessage({ name, mobile, product, size, message }) {
    let msg = `🙏 Namaste, Kharshari Footwear!\n\n`;
    msg += `📝 *Customer Enquiry*\n`;
    msg += `━━━━━━━━━━━━━━━━━━\n`;
    msg += `👤 Name: *${name}*\n`;
    msg += `📱 Mobile: *${mobile}*\n`;
    if (product) msg += `👟 Product: *${product}*\n`;
    if (size) msg += `📏 Size: *${size}*\n`;
    if (message) msg += `💬 Message: ${message}\n`;
    msg += `━━━━━━━━━━━━━━━━━━\n`;
    msg += `_Sent via Kharshari Footwear Website_`;
    return msg;
  }

  /* ─── PRODUCT ENQUIRY FROM URL PARAM ─────────────────────── */
  const urlParams = new URLSearchParams(window.location.search);
  const productParam = urlParams.get('product');
  if (productParam) {
    const productField = document.querySelector('[name="productName"]');
    if (productField) productField.value = decodeURIComponent(productParam);
  }

  /* ─── DIRECT CALL BUTTONS ────────────────────────────────── */
  document.querySelectorAll('[data-action="call"]').forEach(el => {
    el.href = 'tel:+919876543210';
  });

  document.querySelectorAll('[data-action="whatsapp"]').forEach(el => {
    const msg = el.dataset.message || 'Namaste! Mujhe Kharshari Footwear ke baare mein jaankari chahiye.';
    el.href = `https://wa.me/919876543210?text=${encodeURIComponent(msg)}`;
    el.target = '_blank';
    el.rel = 'noopener';
  });

});

/* ─── OPEN ENQUIRY MODAL GLOBALLY ────────────────────────── */
window.openEnquiryModal = function(productName = '') {
  const modal = document.getElementById('enquiryModal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  const productField = document.getElementById('enqProductName');
  if (productField && productName) productField.value = productName;
};
