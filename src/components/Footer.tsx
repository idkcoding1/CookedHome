import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-teal-100 text-center py-4 text-sm text-gray-600">
      <p>
        Designed and developed by{' '}
        <a
          href="https://github.com/idkcoding1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
            Tanveer Hamza
        </a>
      </p>
    </footer>
  );
};

export default Footer;
