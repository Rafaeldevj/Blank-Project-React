import React, { useState, useEffect } from 'react';
import Content from '../../components/layout/Content';
import Sidebar from '../../components/layout/Sidebar';

import './index.css'

const Dashboard: React.FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [isMobile, setIsMobile] = useState<boolean>(true);
    const [previousWidth, setPreviousWidth] = useState<number>(-1);

    useEffect(() => {
        updateWidth();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ isMobile ]);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const updateWidth = () => {
        const width = window.innerWidth;
        const widthLimit = 576;
        const isMobile = width <= widthLimit;
        const wasMobile = previousWidth <= widthLimit;
    
        if (isMobile !== wasMobile) {
          setIsMobile(!isMobile);
        }
    
        setPreviousWidth(width);
    };
    

    return (
        <div className="Dashboard wrapper">
            <Sidebar
                isOpen={isOpen}
            />
            <Content 
                toggle={toggle}
            />
        </div>
    );
};

export default Dashboard;
