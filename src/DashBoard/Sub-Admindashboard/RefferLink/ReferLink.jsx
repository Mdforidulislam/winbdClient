import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const ReferralRegistrationPage = () => {
  const [referralLink, setReferralLink] = useState('');
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  // Generate referral link with subadmin ID
  const generateReferralLink = (subadminId) => {
    return `${window.location.origin}/register?ref=${subadminId}`;
  };

  // Copy referral link to clipboard
  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
  };

  // Get subadmin ID (replace with actual subadmin ID)
    const subadminId = JSON.parse(localStorage.getItem('userData'))?.uniqueId;

  // Generate referral link when component mounts
  useEffect(() => {
    setReferralLink(generateReferralLink(subadminId));
  }, [subadminId]);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4 text-white ">Referral Registration</h2>
      <div className="mb-4">
        <label htmlFor="referralLink" className="block mb-1 text-white">Referral Link:</label>
        <div className="flex">
          <input
            id="referralLink"
            type="text"
            value={referralLink}
            readOnly
            className="border border-gray-300 rounded-md p-2 flex-grow"
          />
          <button onClick={copyReferralLink} className="bg-blue-900 text-white px-4 py-2 ml-2 rounded-md">
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <p className="text-sm mt-1 text-white">Share this referral link with others to invite them to register under your subadmin ID.</p>
      </div>
    </div>
  );
};

export default ReferralRegistrationPage;
