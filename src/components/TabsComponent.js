import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TabsComponent = (props) => {

    const storedActiveTab = localStorage.getItem('activeTab');
    const [activeTab, setActiveTab] = useState(storedActiveTab ? parseInt(storedActiveTab, 10) : 1);

    useEffect(() => {
        localStorage.setItem('activeTab', activeTab.toString());
    }, [activeTab]);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <TabsStyle>
            <div className="tab-buttons">
                {[1, 2].map((index) => (
                    <button
                        key={index}
                        onClick={() => handleTabClick(index)}
                        className={activeTab === index ? 'active' : ''}
                    >
                        {props[`title${index}`]}
                    </button>
                ))}
            </div>
            <div className="tab-content">
                <div style={{ display: activeTab === 1 ? 'block' : 'none' }}>{props.firstComponent}</div>
                <div style={{ display: activeTab === 2 ? 'block' : 'none' }}>{props.secondComponent}</div>
            </div>
        </TabsStyle>
    );
};

const TabsStyle = styled.div`
  padding: 25px;
  .tab-buttons{
    margin-bottom: 25px;
    display: flex;
    button{
      padding-bottom: 5px;
      background-color: transparent;
      font-weight: 600;
      border: none;
      flex: 1;
      color: rgb(0,0,0,0.4);
      border-bottom: 3px solid rgb(0,0,0,0.1);
      &.active{
        color: black;
        border-color: #00C17C;
      }
      :not(.active):hover{
        color: rgb(0,0,0,0.7);
      }
      
    }
  }
`;

export default TabsComponent;
