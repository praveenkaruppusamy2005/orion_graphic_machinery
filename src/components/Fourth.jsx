import React from 'react';
import { FaIndustry, FaUsers, FaCalendarAlt, FaBalanceScale, FaMoneyBillWave, FaFileInvoice, FaGlobe } from 'react-icons/fa';
import '../css/Fourth.css';

const profileItems = [
    { icon: <FaIndustry />, label: 'Nature of Business', value: 'Manufacturer' },
    { icon: <FaBalanceScale />, label: 'Legal Status of Firm', value: 'Partnership' },
    { icon: <FaFileInvoice />, label: 'GST No.', value: '33AAEFO5094L1ZY' },
    { icon: <FaUsers />, label: 'Total Number of Employees', value: '11 to 25 People' },
    { icon: <FaMoneyBillWave />, label: 'Annual Turnover', value: '1.5 - 5 Cr' },
    { icon: <FaCalendarAlt />, label: 'GST Registration Date', value: '01-07-2017' },
    { icon: <FaGlobe />, label: 'Import Export Code (IEC)', value: '3216903168' },
];

export default function() {
    return (
        <div className="fourth-container">
            <div className="fourth-inner">
                <div className="section-header-left">
                    <p className="section-kicker1">
                        <span className="kicker-square1" style={{color:'white'}}></span>
                        BUSINESS PROFILE
                    </p>
                </div>
                <div className="business-profile-grid">
                    {profileItems.map((item, idx) => (
                        <div className="business-profile-card" key={idx}>
                            <span className="business-profile-icon">{item.icon}</span>
                            <div>
                                <strong>{item.label}:</strong>
                                <div>{item.value}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
// ...existing code...