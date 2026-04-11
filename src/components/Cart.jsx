import { useState } from 'react';
import { useApp } from '../context/AppContext';
import './Cart.css';

export default function Cart() {
  const {
    cartOpen,
    setCartOpen,
    cartItems,
    cartTotal,
    cartCount,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    setOrderSubmitted,
    orderSubmitted,
  } = useApp();

  const [step, setStep] = useState('cart'); // 'cart' | 'form' | 'submitted'
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    deliveryDate: '',
    notes: '',
  });
  const [errors, setErrors] = useState({});

  function handleClose() {
    setCartOpen(false);
    // Reset to cart view after closing
    setTimeout(() => {
      if (step === 'submitted') {
        setStep('cart');
        setForm({ name: '', company: '', email: '', phone: '', deliveryDate: '', notes: '' });
      }
    }, 300);
  }

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.phone.trim()) e.phone = 'Phone is required';
    return e;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStep('submitted');
    setOrderSubmitted(true);
    clearCart();
  }

  function handleChange(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: '' }));
  }

  if (!cartOpen) return null;

  return (
    <div
      className="cart-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label="Your Order"
    >
      <div className="cart-panel">
        <div className="cart-header">
          <h2 className="cart-title">
            {step === 'cart' && `My Order ${cartCount > 0 ? `(${cartCount})` : ''}`}
            {step === 'form' && 'Order Details'}
            {step === 'submitted' && 'Order Received!'}
          </h2>
          <button className="cart-close" onClick={handleClose} aria-label="Close cart">✕</button>
        </div>

        {/* ---- Cart view ---- */}
        {step === 'cart' && (
          <>
            {cartItems.length === 0 ? (
              <div className="cart-empty">
                <span className="cart-empty-icon">🛒</span>
                <p>Your order is empty</p>
                <p className="cart-empty-hint">Browse products and add items to your order.</p>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="cart-item-image"
                        onError={(e) => { e.target.src = 'https://via.placeholder.com/60x45?text=...'; }}
                      />
                      <div className="cart-item-info">
                        <div className="cart-item-name">{item.name}</div>
                        <div className="cart-item-sku">{item.sku}</div>
                        <div className="cart-item-price">${item.price.toFixed(2)} each</div>
                      </div>
                      <div className="cart-item-controls">
                        <div className="cart-qty">
                          <button
                            className="cart-qty-btn"
                            onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                            aria-label="Decrease"
                          >
                            −
                          </button>
                          <span className="cart-qty-value">{item.quantity}</span>
                          <button
                            className="cart-qty-btn"
                            onClick={() => updateCartQuantity(item.id, Math.min(item.quantity + 1, item.quantity))}
                            aria-label="Increase"
                          >
                            +
                          </button>
                        </div>
                        <div className="cart-item-subtotal">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                        <button
                          className="cart-remove"
                          onClick={() => removeFromCart(item.id)}
                          aria-label={`Remove ${item.name}`}
                        >
                          🗑
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="cart-footer">
                  <div className="cart-total-row">
                    <span>Total ({cartCount} item{cartCount !== 1 ? 's' : ''})</span>
                    <strong>${cartTotal.toFixed(2)}</strong>
                  </div>
                  <button className="cart-checkout-btn" onClick={() => setStep('form')}>
                    Place Order →
                  </button>
                  <button className="cart-clear-btn" onClick={clearCart}>
                    Clear Order
                  </button>
                </div>
              </>
            )}
          </>
        )}

        {/* ---- Order Form ---- */}
        {step === 'form' && (
          <form className="order-form" onSubmit={handleSubmit} noValidate>
            <div className="order-summary-mini">
              <span>{cartCount} item{cartCount !== 1 ? 's' : ''}</span>
              <strong>${cartTotal.toFixed(2)}</strong>
              <button type="button" className="back-to-cart" onClick={() => setStep('cart')}>
                ← Edit Order
              </button>
            </div>

            <div className="form-group">
              <label className="form-label">Full Name *</label>
              <input
                className={`form-input${errors.name ? ' error' : ''}`}
                type="text"
                value={form.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder="Your full name"
              />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Company / Organisation</label>
              <input
                className="form-input"
                type="text"
                value={form.company}
                onChange={(e) => handleChange('company', e.target.value)}
                placeholder="Company name (optional)"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input
                  className={`form-input${errors.email ? ' error' : ''}`}
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="you@example.com"
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number *</label>
                <input
                  className={`form-input${errors.phone ? ' error' : ''}`}
                  type="tel"
                  value={form.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="+1 234 567 8900"
                />
                {errors.phone && <span className="form-error">{errors.phone}</span>}
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Requested Delivery Date</label>
              <input
                className="form-input"
                type="date"
                value={form.deliveryDate}
                onChange={(e) => handleChange('deliveryDate', e.target.value)}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Special Requirements / Notes</label>
              <textarea
                className="form-input form-textarea"
                value={form.notes}
                onChange={(e) => handleChange('notes', e.target.value)}
                placeholder="Branding specs, delivery instructions, customisation requests..."
                rows={3}
              />
            </div>

            {/* Order items summary */}
            <div className="form-items-summary">
              <div className="form-items-label">Order Summary</div>
              {cartItems.map((item) => (
                <div key={item.id} className="form-item-row">
                  <span className="form-item-name">{item.name}</span>
                  <span className="form-item-qty">×{item.quantity}</span>
                  <span className="form-item-price">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="form-total-row">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
            </div>

            <button type="submit" className="form-submit-btn">
              Submit Order
            </button>
          </form>
        )}

        {/* ---- Submitted ---- */}
        {step === 'submitted' && (
          <div className="order-success">
            <div className="success-icon">✅</div>
            <h3 className="success-title">Thank You!</h3>
            <p className="success-msg">
              Your order has been received. Our team at <strong>GiftIt Solutions</strong> will
              review your request and contact you within 24 hours to confirm details and provide
              a quote.
            </p>
            <p className="success-email">
              A confirmation will be sent to <strong>{form.email}</strong>.
            </p>
            <button
              className="success-close-btn"
              onClick={() => {
                handleClose();
                setStep('cart');
                setForm({ name: '', company: '', email: '', phone: '', deliveryDate: '', notes: '' });
              }}
            >
              Continue Browsing
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
