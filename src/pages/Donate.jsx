import { useOrganization } from '../context/OrganizationContext';
import './Donate.css';

const Icons = {
    Heart: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>,
    Smartphone: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" /></svg>,
    Camera: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" /><circle cx="12" cy="13" r="3" /></svg>,
    Bank: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18" /><path d="M5 21v-7" /><path d="M19 21v-7" /><path d="M10 21v-7" /><path d="M14 21v-7" /><rect x="2" y="3" width="20" height="5" /><path d="M12 3V21" /></svg>,
    Copy: () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>,
    Mail: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>,
    Message: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>,
    Check: () => <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
};

function Donate() {
    const { orgData } = useOrganization();

    return (
        <div className="donate-page">
            {/* Header */}
            <section className="donate-header">
                <div className="container">
                    <div className="donate-header-content text-center">
                        <h1 className="page-title">Donate</h1>
                        <p className="page-subtitle">Sumbangan Anda Membawa Perubahan</p>
                        <p className="donate-intro">
                            Setiap ringgit yang anda sumbangkan adalah pelaburan untuk menyampaikan Islam dan memperkasakan mualaf.
                            Bersama-sama, kita membina masa depan yang lebih cerah.
                        </p>
                    </div>
                </div>
            </section>

            {/* Premium Donation Section */}
            <section className="premium-donate-section section">
                <div className="container">
                    <div className="premium-donate-wrapper">
                        {/* Main Donation Card */}
                        <div className="donation-main-card">
                            <div className="donation-card-header">
                                <h2><span className="icon-inline"><Icons.Heart /></span> Cara Menderma | How to Donate</h2>
                                <p className="header-subtitle">Scan QR Code atau gunakan butiran bank di bawah</p>
                            </div>

                            <div className="donation-card-content">
                                {/* QR Code Section */}
                                <div className="qr-code-section">
                                    <div className="qr-code-wrapper">
                                        {orgData?.qrCodeUrl ? (
                                            <img
                                                src={orgData.qrCodeUrl}
                                                alt="Donation QR Code"
                                                className="qr-code-image"
                                                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                            />
                                        ) : (
                                            <div className="qr-code-placeholder">
                                                {/* Replace this div with actual QR code image */}
                                                <div className="qr-icon"><Icons.Smartphone /></div>
                                                <p>QR Code</p>
                                                <span className="qr-hint">Scan untuk derma</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="qr-code-label">
                                        <span className="scan-icon"><Icons.Camera /></span>
                                        <span>Scan dengan banking app anda</span>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="donation-divider">
                                    <span>ATAU</span>
                                </div>

                                {/* Bank Details Section */}
                                <div className="bank-details-section">
                                    <h3 className="bank-details-title">
                                        <span className="bank-icon"><Icons.Bank /></span>
                                        Butiran Bank | Bank Details
                                    </h3>

                                    <div className="bank-info-grid">
                                        <div className="bank-info-item">
                                            <div className="info-label">Nama Akaun | Account Name</div>
                                            <div className="info-value">{orgData?.bank?.accountName}</div>
                                        </div>

                                        <div className="bank-info-item">
                                            <div className="info-label">Nama Bank | Bank Name</div>
                                            <div className="info-value">{orgData?.bank?.bankName}</div>
                                        </div>

                                        <div className="bank-info-item featured">
                                            <div className="info-label">Nombor Akaun | Account Number</div>
                                            <div className="info-value account-number">{orgData?.bank?.accountNumber}</div>
                                            <button className="copy-btn" onClick={() => navigator.clipboard.writeText(orgData?.bank?.accountNumber)}>
                                                <Icons.Copy /> Copy
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Instructions Card */}
                        <div className="donation-instructions-card">
                            <div className="instructions-header">
                                <h3><span className="icon-inline"><Icons.Mail /></span> Selepas Menderma | After Donating</h3>
                                <p>Sila hantar resit untuk pengesahan dan tax receipt</p>
                            </div>

                            <div className="instructions-content">
                                <div className="instruction-step">
                                    <div className="step-number">1</div>
                                    <div className="step-content">
                                        <h4>Screenshot Resit Pembayaran</h4>
                                        <p>Take a screenshot of your transaction receipt</p>
                                    </div>
                                </div>

                                <div className="instruction-step">
                                    <div className="step-number">2</div>
                                    <div className="step-content">
                                        <h4>Hantar Melalui | Send Via:</h4>
                                        <div className="contact-options">
                                            {orgData?.phone?.[0] && (
                                                <a href={`https://wa.me/${orgData.phone[0].replace(/[^0-9]/g, '')}`} className="contact-option whatsapp" target="_blank" rel="noopener noreferrer">
                                                    <span className="contact-icon"><Icons.Message /></span>
                                                    <div>
                                                        <div className="contact-label">WhatsApp</div>
                                                        <div className="contact-value">{orgData.phone[0]}</div>
                                                    </div>
                                                </a>
                                            )}

                                            <a href={`mailto:${orgData?.email}`} className="contact-option email">
                                                <span className="contact-icon"><Icons.Mail /></span>
                                                <div>
                                                    <div className="contact-label">Email</div>
                                                    <div className="contact-value">{orgData?.email}</div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="instruction-step">
                                    <div className="step-number">3</div>
                                    <div className="step-content">
                                        <h4>Terima Pengesahan</h4>
                                        <p>You'll receive confirmation and tax receipt within 2-3 business days</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Thank You Card */}
                        <div className="thank-you-card">
                            <div className="thank-you-icon"><Icons.Check /></div>
                            <h3>Terima Kasih Atas Sokongan Anda!</h3>
                            <p className="thank-you-subtitle">Thank You For Your Support!</p>
                            <p className="thank-you-message">
                                Sumbangan anda membantu kami meneruskan misi untuk menyediakan pendidikan berkualiti
                                kepada komuniti. Setiap ringgit membawa perubahan yang bermakna dalam kehidupan pelajar kami.
                            </p>
                            <div className="thank-you-stats">
                                <div className="thank-you-stat">
                                    <div className="stat-value">100%</div>
                                    <div className="stat-label">Untuk Program</div>
                                </div>
                                <div className="thank-you-stat">
                                    <div className="stat-value">500+</div>
                                    <div className="stat-label">Pelajar Dibantu</div>
                                </div>
                                <div className="thank-you-stat">
                                    <div className="stat-value">10+</div>
                                    <div className="stat-label">Tahun Berkhidmat</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section className="contact-donate-section section">
                <div className="container">
                    <div className="contact-donate-card">
                        <h2>Ada Soalan?</h2>
                        <p className="contact-subtitle">Have Questions?</p>
                        <p>Kami sedia membantu. Hubungi kami untuk maklumat lanjut mengenai cara menyumbang atau impak sumbangan anda.</p>
                        <div className="contact-info">
                            <p>📧 {orgData?.email}</p>
                            {orgData?.phone?.[0] && <p>📱 {orgData.phone[0]}</p>}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Donate;
