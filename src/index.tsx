import React from 'react';

interface MapsProps { onClose: () => void; }

const Maps: React.FC<MapsProps> = ({ onClose }) => (
  <div className="h-full w-full">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764027!3d37.75781499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1" className="w-full h-full border-0" allow="geolocation" title="Maps" />
  </div>
);

export default Maps;
