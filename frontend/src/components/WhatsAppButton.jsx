import React from 'react';

export default function WhatsAppButton() {
    const phoneNumber = "+919811566561";
    const message = encodeURIComponent("Hello! I'm reaching out from your website.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            style={{
                position: 'fixed',
                bottom: '25px',
                right: '25px',
                backgroundColor: '#25D366',
                color: '#FFF',
                borderRadius: '50px',
                padding: '12px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.25)',
                zIndex: 1000,
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '14px',
            }}
        >
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
            </svg>
            <span>Chat with us</span>
        </a>
    );
}