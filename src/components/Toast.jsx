import React from 'react';
import { useApp } from '../context/AppContext';

export default function ToastContainer() {
  const { toasts } = useApp();

  if (toasts.length === 0) return null;

  return (
    <div className="toast-container" id="toastContainer" style={{ pointerEvents: 'none' }}>
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast toast-${toast.type} visible`}>
          <span className="toast-icon">
            {toast.type === 'success' && '✅'}
            {toast.type === 'error' && '❌'}
            {toast.type === 'info' && 'ℹ️'}
            {toast.type === 'whatsapp' && '💬'}
          </span>
          <span className="toast-msg">{toast.message}</span>
        </div>
      ))}
    </div>
  );
}
