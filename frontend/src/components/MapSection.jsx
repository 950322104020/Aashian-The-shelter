import React from 'react';

export default function MapSection() {
    return (
        <section style={{ width: '100%', padding: '40px 0', backgroundColor: '#f9f9f9' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Find Us Here</h2>
                <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                    <iframe
                        title="Google Map Location"
                        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28022.63597206977!2d77.03603922494585!3d28.6048914434756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRZ-61%2C%20First%20Floor.%20Palam%20Vihar.%20Sector-6.%20Dwarka.%20New%20Delhi-%20110075!5e0!3m2!1sen!2sin!4v1786626925871!5m2!1sen!2sin"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </section>
    );
}